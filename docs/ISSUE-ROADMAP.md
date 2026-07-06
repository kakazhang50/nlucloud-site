# Issue Roadmap — Writing Assignments

> **One cover essay per issue.** You write in English externally; deliver plain text + slug.  
> Editor formats per `docs/EDITORIAL-BIBLE.md`, sets `issueNumber`, `issueRole: cover`, updates `src/data/issues.ts` status.

**Completed:** Issue 01 ✅ (`ai-as-orchestration-layer.md`)

---

## How to submit

```
【issue】02
【slug】judgment-as-product-flagship
【status】published

(English body — no YAML, no # title)
```

---

## Issues 01–06 — SSRN Sextet (priority)

| Issue | Month | Title | Slug (save as) | SSRN Paper | Words |
|-------|-------|-------|----------------|------------|-------|
| **01** | Jul 2026 | AI as an Orchestration Layer in Education | `ai-as-orchestration-layer` | Learning Model Orchestration | ✅ Done |
| **02** | Aug 2026 | Judgment-as-Product: Why Value Completes at Human Authorization | `judgment-as-product-flagship` | Judgment-as-Product | 2800–3500 |
| **03** | Sep 2026 | The Human Cost of Waiting for AI: From Experience to Structure | `waiting-tax-flagship` | AI Waiting Tax | 2200–3000 |
| **04** | Oct 2026 | The AI Latency Tax: Hidden Costs and Temporal Inequality | `latency-tax-flagship` | AI Latency Tax | 2200–3000 |
| **05** | Nov 2026 | Before the Model Responds: Distortion at the Human–AI Interface | `self-distortion-flagship` | Self-Distortion / EDC | 2500–3200 |
| **06** | Dec 2026 | AI Doesn't Replace Creative Motives. It Reweights Them. | `creative-motivation-flagship` | Creative Motivation | 2500–3200 |

### Issue 02 — Judgment-as-Product (next to write)

**Core sections:**
1. Open: ten drafts in a minute; standing behind one is hard
2. Materials vs products; define **JAP**
3. Generative abundance paradox (table: generation vs judgment)
4. What judgment includes: select / validate / adopt / accountability
5. Practice: editor, clinician, teacher, creator
6. **Judgment burden** + **decision latency**
7. Close: *Generative AI compresses production. It does not compress responsibility.*

**Pull quote:**  
> Generative AI compresses production. It does not compress responsibility.

**Lexicon:** JAP, GAP, Judgment Burden

---

### Issue 03 — AI Waiting Tax

Bridge lived experience → structural latency preview.

**Pull quote:**  
> Waiting for AI is not downtime. It is suspended attention — and suspended attention has a cost.

**Note:** Short essay `waiting-is-not-free-time` stays published as companion; this issue cover is the **full flagship**.

---

### Issue 04 — AI Latency Tax

**Pull quote:**  
> Latency is invisible until it is uneven — then it becomes a question of justice.

---

### Issue 05 — Self-Distortion

**Pull quote:**  
> Misalignment often begins before the model answers — in how we represent what we want.

---

### Issue 06 — Creative Motivation

**Pull quote:**  
> AI does not erase creative motives. It changes what each motive costs to act on.

---

## Issues 07–16 — Extended Program

| Issue | Month | Cover title | Slug |
|-------|-------|-------------|------|
| **07** | Jan 2027 | Digital Content Assets in the Age of Generative AI | `digital-content-assets-flagship` |
| **08** | Feb 2027 | The Super-Individual as a Knowledge Production System | `super-individual-flagship` |
| **09** | Mar 2027 | AI and the Future of Public Knowledge | `public-knowledge-flagship` |
| **10** | Apr 2027 | Orchestration Inequality: Who Gets Better Learning Paths? | `orchestration-inequality-flagship` |
| **11** | May 2027 | Judgment Burden: The Work Nobody Measures | `judgment-burden-flagship` |
| **12** | Jun 2027 | When AI Misalignment Is Co-Produced, Not Model-Driven | `co-produced-misalignment-flagship` |
| **13** | Jul 2027 | Temporal Justice in the Age of Intelligent Systems | `temporal-justice-flagship` |
| **14** | Aug 2027 | Expression-Weight Restoration: Why Low-Stakes Creation Matters Again | `expression-restoration-flagship` |
| **15** | Sep 2027 | Low-Maintenance Compound Systems in AI-Mediated Publishing | `compound-systems-flagship` |
| **16** | Dec 2027 | Editor's Synthesis: What Became Scarce in Year One | `year-one-synthesis` |

Issues 07–09 extend beyond current SSRN papers (editorial originals). Issues 10–14 deepen SSRN sub-themes.

---

## Lexicon (from SSRN — 15 entries live)

| # | Entry | Abbrev | Paper |
|---|-------|--------|-------|
| 001 | Learning Model Orchestration | LMO | LMO |
| 002 | Judgment-as-Product | JAP | JAP |
| 003 | Orchestration Inequality | OI | LMO |
| 004 | Generative Abundance Paradox | GAP | JAP |
| 005 | AI Waiting Tax | AWT | Waiting |
| 006 | AI Latency Tax | ALT | Latency |
| 007 | Expression Distortion Cost | EDC | Self-Distortion |
| 008 | Self-Alignment Load | SAL | Self-Distortion |
| 009 | Authenticity–Cost Model | ACM | Self-Distortion |
| 010 | Motivational Reweighting | MR | Creative |
| 011 | Three Creative Motives | TCM | Creative |
| 012 | Suspended Attention | SA | Waiting |
| 013 | Temporal Justice | TJ | Latency |
| 014 | Judgment Burden | JB | JAP |
| 015 | Co-Produced Misalignment | CPM | Self-Distortion |

Planned later: Digital Content Assets, Super-Individual Infrastructure, Public Knowledge Infrastructure, Low-Maintenance Compound Systems.

---

## Publishing a new issue (editor checklist)

1. Receive your plain-text cover essay
2. Format → `src/content/essays/[slug].md`
3. Set `issueNumber`, `issueRole: cover`, `status: published`, `featured: true`
4. In `src/data/issues.ts`: set `status: 'published'` for that issue
5. `npm run build` → push → GSC will pick up new URL
6. Update `docs/ISSUE-ROADMAP.md` revision log

---

## Revision log

| Date | Change |
|------|--------|
| 2026-07-06 | Initial 16-issue roadmap; Issue 01 published; Lexicon 001–015 live |
