# NLU Cloud Site

Editorial site for [nlucloud.com](https://nlucloud.com) — essays translated from published SSRN research.

## Stack

- Astro 5 + TypeScript + Tailwind CSS
- Content Collections: `essays`, `frameworks`, `editorNotes`, `researchPapers`
- Deploy: Cloudflare Pages (`npm run build` → `dist`)

## Commands

```powershell
cd "E:\AI NOVEL\NLUCloudweb\nlucloud-site"
npm install
npm run dev          # http://localhost:4323
npm run build
npm run gen:essays   # regenerate 52 essay stubs from manifest (skips existing)
```

## Content workflow

1. **New SSRN paper** → `src/content/researchPapers/[slug].md`
2. **New framework** → `src/content/frameworks/[slug].md`
3. **New essay** → edit `src/content/essays/[slug].md`, set `status: published`
4. **Planned essays** → listed in `src/data/essayManifest.json`; run `npm run gen:essays`

One paper can map to many essays across columns (`category` + `sourcePaper`).

**Editorial standards (撰写与改稿圣经):** [`docs/EDITORIAL-BIBLE.md`](docs/EDITORIAL-BIBLE.md)

**SEO & GEO:** [`docs/SEO-GEO.md`](docs/SEO-GEO.md)

## Local port

4323 (Fog Harbor uses 4322).
