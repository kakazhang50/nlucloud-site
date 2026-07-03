# NLU Cloud — SEO & GEO 指南

> **结论：现在做基础 SEO/GEO，不要等 52 篇齐。**  
> 技术基建 + 已发布内容先入库；每发一篇 Essay 自动进 sitemap 与 `llms-full.txt`。

---

## 一、现在做 vs 等内容齐了再做

| 阶段 | 现在做 | 随文章增加 |
|------|--------|------------|
| Sitemap / robots / canonical | ✅ | 每篇 published 自动进 sitemap |
| Google Search Console 绑定 | ✅ | — |
| `llms.txt` / `llms-full.txt`（GEO） | ✅ 骨架 + 已发文 | 构建时自动更新列表 |
| JSON-LD（WebSite / Article / ScholarlyArticle） | ✅ 已有 | Essay 页自动带 Article |
| 栏目词、框架名品牌词 | ✅ 研究页 + 框架页 | 新 Essay 强化长尾 |
| 大量外链、媒体报道 | 可选 | 有旗舰文后再推 |
| 52 篇全部 SEO 优化 | ❌ 不必等 | 分批发布、分批收录 |

**原则**：搜索引擎和 AI 爬虫需要**可抓取的稳定站点**；3 篇高质量 Essay + 6 篇 Research 页足够建立主题权威（topical authority）的起点。

---

## 二、Google Search Console 配置（重要）

### 1. 只用非 www 主域名

主域名：**`https://nlucloud.com`**（与 `astro.config.mjs`、`robots.txt` 一致）。

`www` 已通过 `public/_redirects` 301 到非 www。

### 2. 删除重复的 www 站点地图

截图中常见问题：

| 提交的 URL | 现象 | 处理 |
|-----------|------|------|
| `https://nlucloud.com/sitemap-index.xml` | 无法抓取 | 修复部署后**重新提交** |
| `https://www.nlucloud.com/sitemap-index.xml` | 成功但 0 页 | **删除** — www 会 301，且索引内 URL 全是 `nlucloud.com` |

**只保留一条：**

```
https://nlucloud.com/sitemap-index.xml
```

### 3. GSC 资源类型建议

优先使用 **网域资源** `nlucloud.com`（覆盖 www 与非 www），或 URL 前缀 `https://nlucloud.com/`。

不要同时维护两个 URL 前缀资源，避免数据分裂。

### 4. 提交后验证

浏览器或命令行应返回 **200** 且 `Content-Type: application/xml`：

- https://nlucloud.com/sitemap-index.xml
- https://nlucloud.com/sitemap-0.xml

`robots.txt` 已声明：

```
Sitemap: https://nlucloud.com/sitemap-index.xml
```

---

## 三、站内已实现的 SEO

| 项目 | 位置 |
|------|------|
| Canonical URL | `BaseLayout.astro`（`trailingSlash: always`） |
| meta description / robots | 每页 |
| Open Graph + Twitter Card | 每页 |
| JSON-LD 图谱 | WebSite, Organization, Person, WebPage, Article, Breadcrumb |
| Sitemap | `@astrojs/sitemap` → `dist/sitemap-index.xml` |
| 排除 404 | sitemap `filter` |
| Sitemap link | `<head>` `rel="sitemap"` |
| Cloudflare 响应头 | `public/_headers`（XML / llms 正确 Content-Type） |

---

## 四、GEO（Generative Engine Optimization）

面向 ChatGPT、Perplexity、Claude 等引用与检索：

| 文件 | 用途 |
|------|------|
| `/llms.txt` | 精简站点说明 + 核心 URL（手维护要点） |
| `/llms-full.txt` | **构建时自动生成** — 已发布 Essay / Framework / Research 列表 |
| JSON-LD | 帮助结构化理解作者、论文、文章关系 |
| 清晰框架名 | JAP、LMO、Waiting Tax 等可引用缩写 |

每次 `npm run build` 后 `llms-full.txt` 会更新，无需手改。

`<head>` 中已声明：

```html
<link rel="alternate" type="text/plain" href="/llms.txt" />
<link rel="alternate" type="text/plain" href="/llms-full.txt" />
```

---

## 五、发布新 Essay 时的 SEO 检查

- [ ] `status: published`
- [ ] `description` 可独立作摘要（≤160 字符为佳）
- [ ] `title` 含可搜索概念（框架名、具体问题）
- [ ] `npm run build` → 新 URL 出现在 `sitemap-0.xml`
- [ ] GSC → URL 检查 → 请求编入索引（可选，加速）
- [ ] 不必改 `llms.txt`，除非新增**战略性**说明；`llms-full.txt` 自动更新

---

## 六、暂缓项（有内容后再做）

- OG 分享图（`og:image`）— 需统一视觉资产
- 多语言 hreflang — 目前全英文
- 博客式外链建设 — 有 6–10 篇旗舰后再推
- planned 占位 Essay — **保持不上线**（避免 thin content）

---

## 七、修订记录

| 日期 | 变更 |
|------|------|
| 2026-07-03 | 初版；`_headers`、增强 llms、gen-llms-full 自动化、GSC 去 www 重复说明 |
