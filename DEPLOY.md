# NLU Cloud — GitHub + Cloudflare Pages 部署指南

将 `nlucloud-site` 作为**独立 Git 仓库**推送到 GitHub，由 Cloudflare Pages 自动构建并发布到 `nlucloud.com`。

> **注意**：只部署 `nlucloud-site` 文件夹，不要把上级 `NLUCloudweb/原创论文/` 等本地资料一并提交。

---

## 一、部署架构

```
本地编辑 Markdown
    → git push GitHub (main)
        → Cloudflare Pages 自动 npm run build
            → 发布 dist/ 到 nlucloud.com
```

| 项目 | 值 |
|------|-----|
| 构建命令 | `npm run build` |
| 输出目录 | `dist` |
| Node 版本 | 20 或 22（推荐 22） |
| 站点 URL（配置） | `https://nlucloud.com`（已在 `astro.config.mjs`） |

---

## 二、本地准备（一次性）

在 PowerShell 中：

```powershell
cd "E:\AI NOVEL\NLUCloudweb\nlucloud-site"

# 确认能构建成功
npm install
npm run build

# 初始化 Git（若尚未初始化）
git init
git branch -M main
```

确认 `.gitignore` 已排除 `node_modules/`、`dist/`、`.env`（已配置）。

---

## 三、创建 GitHub 仓库

### 方式 A：网页创建（推荐）

1. 登录 [github.com](https://github.com)
2. 右上角 **+** → **New repository**
3. 填写：
   - **Repository name**：`nlucloud-site`（或 `nlucloud`）
   - **Visibility**：Public 或 Private 均可
   - **不要**勾选 "Add a README"（避免与本地冲突）
4. 创建后，复制仓库地址，例如：
   - `https://github.com/你的用户名/nlucloud-site.git`

### 方式 B：首次提交并推送

```powershell
cd "E:\AI NOVEL\NLUCloudweb\nlucloud-site"

git add .
git status
# 确认列表中没有 .env、node_modules、dist

git commit -m "Initial NLU Cloud site — Astro magazine scaffold"

git remote add origin https://github.com/你的用户名/nlucloud-site.git
git push -u origin main
```

若 GitHub 要求登录，按提示用浏览器或 Personal Access Token（PAT）完成认证。

---

## 四、Cloudflare Pages 连接 GitHub

### 4.1 前提

- 已有 [Cloudflare](https://dash.cloudflare.com) 账号
- 域名 `nlucloud.com` 已添加到 Cloudflare（DNS 由 Cloudflare 托管）

### 4.2 创建 Pages 项目

1. Cloudflare Dashboard → **Workers & Pages**
2. **Create** → **Pages** → **Connect to Git**
3. 授权 GitHub，选择仓库 `nlucloud-site`
4. **Build settings**：

| 设置项 | 值 |
|--------|-----|
| Production branch | `main` |
| Framework preset | `Astro`（或 None 亦可） |
| Build command | `npm run build` |
| Build output directory | `dist` |

5. **Environment variables**（可选，见第五节）→ **Save and Deploy**

首次部署约 1–3 分钟。成功后会得到临时地址：`https://nlucloud-site.pages.dev`（名称因项目而异）。

### 4.3 Node 版本

若构建报 Node 相关错误，在 Pages 项目 → **Settings** → **Environment variables** 添加：

| Variable | Value |
|----------|-------|
| `NODE_VERSION` | `22` |

---

## 五、绑定自定义域名 nlucloud.com

1. Pages 项目 → **Custom domains** → **Set up a custom domain**
2. 添加：
   - `nlucloud.com`
   - `www.nlucloud.com`
3. 若域名已在同一 Cloudflare 账号，DNS 记录通常会自动配置
4. 等待 SSL 证书生效（通常几分钟）

站点已包含 `public/_redirects`，会将 `www.nlucloud.com` 301 重定向到 `nlucloud.com`。

### 手动 DNS（若未自动添加）

在 Cloudflare **DNS** 中：

| Type | Name | Content | Proxy |
|------|------|---------|-------|
| CNAME | `www` | `你的项目.pages.dev` | Proxied |
| CNAME | `@` | `你的项目.pages.dev` | Proxied |

（根域名 `@` 在 Cloudflare 上通常用 CNAME flattening。）

---

## 六、可选环境变量

| 变量 | 用途 |
|------|------|
| `NODE_VERSION` | `22` — 固定 Node 版本 |
| `CF_WEB_ANALYTICS_TOKEN` | Cloudflare Web Analytics token（若改用环境变量注入） |

当前 Analytics 配置在 `src/data/siteConfig.json` 的 `cloudflareWebAnalyticsToken`。留空则不加载统计脚本。

获取 Analytics token：Cloudflare Dashboard → **Analytics & Logs** → **Web Analytics** → 添加站点 → 复制 token。

---

## 七、日常更新流程

```powershell
cd "E:\AI NOVEL\NLUCloudweb\nlucloud-site"

# 1. 编辑内容（essays / magazine.ts 等）
# 2. 本地预览
npm run dev

# 3. 确认构建
npm run build

# 4. 提交推送 — Cloudflare 自动重新部署
git add .
git commit -m "Publish essay: ..."
git push
```

在 Cloudflare Pages → **Deployments** 可查看每次构建日志。`main` 分支推送 = 生产环境更新。

---

## 八、发新一期杂志时

编辑 `src/data/magazine.ts`：

```ts
export const currentIssue = {
  label: 'Issue 02',
  title: '…',
  monthYear: 'August 2026',
  editorLede: '…',
};
```

推送后首页期号条、导语、页脚自动更新。

---

## 九、常见问题

### 构建失败：`npm run build` 本地能通过，云端失败

- 检查 `NODE_VERSION=22`
- 查看 Cloudflare 构建日志最后 30 行
- 确保 `package-lock.json` 已提交到 Git

### 页面样式丢失 / 404

- Build output 必须是 `dist`，不是 `.astro` 或 `build`
- `astro.config.mjs` 中 `site: 'https://nlucloud.com'` 勿改错

### 域名打不开

- DNS 是否 Proxied（橙色云）
- Custom domains 页面是否显示 **Active**
- 新域名最多等待 24 小时（通常几分钟）

### 不想把邮箱公开

`src/data/siteConfig.json` 中的 `authorEmail` 会显示在 About 页。若需隐藏，可改为联系表单或 Proton 别名后再部署。

---

## 十、检查清单（上线前）

- [ ] `npm run build` 本地成功
- [ ] `git push` 后 Cloudflare 部署成功
- [ ] `https://你的项目.pages.dev` 可访问
- [ ] `nlucloud.com` / `www.nlucloud.com` 已绑定且 HTTPS 正常
- [ ] `/essays/`、`/research/`、sitemap 可访问
- [ ] 浏览器无 Astro Dev Toolbar（生产环境不应出现）

---

## 参考链接

- [Cloudflare Pages — Astro](https://developers.cloudflare.com/pages/framework-guides/deploy-an-astro-site/)
- [Astro deploy — Cloudflare](https://docs.astro.build/en/guides/deploy/cloudflare/)
