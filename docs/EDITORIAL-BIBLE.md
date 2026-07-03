# NLU Cloud 文章撰写与修改圣经

> **Editorial Bible** — 独立 AI 认知评论电子杂志的内容标准。  
> 路径：`nlucloud-site/docs/EDITORIAL-BIBLE.md`  
> **维护方式**：每次发布旗舰 Essay、调整版式或踩坑后，在本文件末尾「修订记录」追加一行。

面向：作者（Liang Zhang）、编辑协作者、AI 改稿助手。

---

## 1. 站点定位（改稿前先读）

| 维度 | 标准 |
|------|------|
| **是什么** | 独立认知评论电子杂志，不是博客、不是论文镜像站 |
| **做什么** | 将 SSRN 研究论文**转译**为公众可读的 Essay |
| **读者** | 关心 AI 与语言、认知、社会、教育、人文、日常生活的思考者；非纯学术圈 |
| **语气** | 有学术底层，**不是**学术腔；清晰、克制、可引用，避免营销话术 |
| **视觉** | 杂志风（期号、栏目、封面 Essay、主编导语）；正文 `prose-nlu` |

**一句话检验**：读者读完应能说清「一个可复用的判断或框架」，而不只是「AI 很重要」。

---

## 2. 内容类型与层级

```
SSRN 论文（完整论证）
    → Research 页（元数据 + 摘要）
    → Framework 页（缩写 + 定义，可选）
    → Essay（公众转译，可多篇/多栏目）
    → Editor's Note（主编评论，非论文衍生）
```

| 类型 | 路径 | 典型长度 | 上线条件 |
|------|------|----------|----------|
| **旗舰 Essay** | `src/content/essays/` | 2500–4500 词 | 框架入口、可独立传播 |
| **专栏 Essay** | 同上 | 600–1500 词 | 单点深化，内链母文 |
| **Editor's Note** | `src/content/editorNotes/` | 400–1200 词 | `status: published` |
| **Framework** | `src/content/frameworks/` | 短定义页 | 与论文同步 |

**一篇论文 → 多篇 Essay**：同一 `sourcePaper` 可对应不同 `category`（见 `src/data/categories.ts`）。

---

## 3. Essay 元数据（frontmatter）

```yaml
---
title: "英文标题：清晰、可独立引用"
description: "一句 deck：列表页、封面、OG 卡片显示；≤160 字符为宜"
pubDate: 2026-07-03          # 实际上线日；同期号可错开数日
category: ai-education         # 六栏之一，见下表
sourcePaper: learning-model-orchestration
sourceSection: "§4–6"          # 对应论文章节；全文衍生用 "Full"
status: published            # planned | draft | published
featured: false              # 首页推荐；旗舰母文可 true
frameworks: [learning-model-orchestration]
---
```

### 栏目 `category`

| 标签 | slug |
|------|------|
| Language Understanding | `language-understanding` |
| AI & Cognition | `ai-cognition` |
| AI & Society | `ai-society` |
| AI & Education | `ai-education` |
| AI & Humanities | `ai-humanities` |
| AI & Life | `ai-life` |

### 日期规则

- **`pubDate` = 实际上线日**（页面 Byline 与此一致）。
- 同一 Issue（见 `src/data/magazine.ts`）内文章可相差数日，不必强行同一天。
- 新旗舰文上线时，视需要更新 `magazine.ts` 的 `editorLede`。

---

## 4. 正文结构标准

### 4.1 不要重复页面标题

- 标题由 frontmatter + 页面 `<h1>` 渲染。
- **正文第一行不要写 `# 标题`**。

### 4.2 标题层级

| 层级 | 用途 |
|------|------|
| `##` | 主要章节 |
| `###` | 章节内子节（如 LMO 四要素） |
| 避免 `####` 以下 | 过碎则改段落或列表 |

### 4.3 开篇（前 3 屏）

1. **窄问题切入**（常见误区、日常经验、三个并列问句均可）。
2. **迅速转向**：「这些问题太窄 / 不完整」。
3. **核心判断**（1–2 句）：本文的真正问题是什么。
4. **可选 pull quote**（`>` 块引用）：一句可单独传播的金句。

示例（LMO 旗舰文）：

```markdown
> AI does not solve education by producing more content. It changes education by making more learning architectures possible.
```

### 4.4 两种 Essay 体裁

| 体裁 | 适用 | 结构 |
|------|------|------|
| **短评型** | 单概念、体验切入 | 4–6 个 `##`，每节 2–4 段，约 800 词 |
| **框架型** | 论文主轴、母文 | 问题重框 → 概念定义 → 框架要素 → 实践/不平等 → 分受众含义 → 结论 |

参考样板：

- 短评：`waiting-is-not-free-time.md`、`ai-generates-options-humans-complete-value.md`
- 框架：`ai-as-orchestration-layer.md`

### 4.5 段落与节奏

- **允许**短句、单行段落用于转折和强调（杂志感）。
- **旗舰文**中段需穿插：表格、编号列表、案例段，避免通篇「一句一段」。
- 相邻列表项勿语义重复（例：`structured practice` ≠ `low-stakes practice`）。

### 4.6 框架感增强手段

优先使用（至少选其一）：

- **对照表**（如 Personalized vs Orchestrated）
- **功能表**（如八种 learning functions）
- **编号序列**（学习步骤 1–7）
- **分人群 mini-case**（学生 / 职场人 / 老年人各一段）

表格 Markdown 示例：

```markdown
| Personalized learning | Orchestrated learning |
| --- | --- |
| Adjusts pace, difficulty, or content | Combines different learning models |
```

### 4.7 术语与强调

- 框架名**首次出现**加粗：`**Learning Model Orchestration**`、`**LMO**`。
- 原创概念同样处理：`**orchestration inequality**`。
- 避免通篇加粗；避免 ALL CAPS。

### 4.8 结论

- 回扣开篇问题，**不重复**中间已充分论证的整段。
- 末句宜为可引用的判断句（金句）。
- 删除与开头高度重复的独立「Central question」节——并入结论即可。

---

## 5. 语气与安全红线

### 5.1 必须做到

- 对 AI 能力用保守表述：*limited but increasingly useful*、*may support*、*can help approximate*。
- 区分 **infrastructure, not authority**（或同类定位）。
- 涉及精英教育、不平等时加缓冲：*not always universally, but often in ways that matter*。
- 明确人类判断、教师、机构责任不可被整体替代。

### 5.2 避免

- 「AI 将彻底改变一切」类空洞预言。
- 无节制的「替代教师」争论。
- 暗示随机对照实验级别的学习效果承诺。
- 论文摘要式堆砌文献（这是 Essay，不是 SSRN）。

---

## 6. 来源与脚注（自动 + 人工）

页脚由 `src/pages/essays/[slug].astro` + `src/lib/editorial.ts` 生成：

- 有 `sourceSection`：`This essay is adapted from §4–6 of [Paper Title], an SSRN working paper by Liang Zhang.`
- `sourceSection: "Full"` 或缺省：`This essay is drawn from [Paper Title], ...`
- 链接：NLU Cloud 研究页 + SSRN 全文。

作者只需保证 frontmatter 中 `sourcePaper`、`sourceSection` 正确。

---

## 7. 从纯文本到可发布的工作流

### 作者

1. 用任意编辑器写英文正文（不必写 YAML）。
2. 覆盖或新建 `src/content/essays/[slug].md`。
3. 告知：slug、栏目、来源论文、是否 `published`、是否 `featured`。

### AI / 编辑协作者

1. 补全 frontmatter（见 §3）。
2. 去掉正文 `# 标题`；校正 `##` / `###`。
3. 加粗关键术语；插入表格 / pull quote（若缺框架感）。
4. 删重复段；检查列表项是否语义重叠。
5. `npm run build` 验证。
6. 更新本圣经「修订记录」（若有新标准）。

### 发布检查清单

- [ ] `status: published`
- [ ] `description` 可作独立摘要读懂全文角度
- [ ] `sourcePaper` + `sourceSection` 正确
- [ ] 无正文 H1；结论无大块重复
- [ ] 至少一处可引用金句（正文或 pull quote）
- [ ] 旗舰文：考虑 `featured: true` + 更新 `magazine.ts`
- [ ] `npm run build` 通过

---

## 8. 评分 rubric（内部质检，满分 100）

| 维度 | 权重 | 90+ 标准 |
|------|------|----------|
| 选题战略价值 | 15% | 能担当某论文/栏目主轴 |
| 品牌匹配 | 15% | 像 NLU Cloud，不像普通 SEO 博客 |
| 框架原创性 | 15% | 有可复用概念、表、对照 |
| 英文可读性 | 15% | 非母语读者可一次读懂主链 |
| 结构清晰度 | 15% | 扫标题即知论证路径 |
| 金句密度 | 10% | ≥1 句可外引 |
| 学术安全性 | 10% | 无过度承诺；局限已写 |
| 页面旗舰感 | 5% | 表格/引用/案例至少两项 |

**发布线**：综合 ≥ 88；旗舰文目标 93+。

---

## 9. 旗舰文范例索引

| 文章 | slug | 体裁 | 要点 |
|------|------|------|------|
| AI as an Orchestration Layer in Education | `ai-as-orchestration-layer` | 框架母文 | LMO 四要素、对照表、编排不平等、pull quote |
| AI Generates Options. Humans Complete Value. | `ai-generates-options-humans-complete-value` | 短评 | JAP 单点、体验+判断 |
| Why Waiting for AI Is Not Free Time | `waiting-is-not-free-time` | 短评 | 体验切入、Waiting Tax |

---

## 10. 修订记录

| 日期 | 变更 |
|------|------|
| 2026-07-03 | 初版：定位、frontmatter、结构、语气红线、工作流、rubric；落地 Source 脚注模板；`ai-as-orchestration-layer` 对照表 + pull quote + structured practice |

---

*本文件随站点演进持续更新。改 Essay 前请先读 §1–§5；改模板或脚注逻辑时同步更新 §6。*
