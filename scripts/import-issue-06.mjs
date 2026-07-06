import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const srcPath = path.resolve(__dirname, '../../原创论文/第六期.md');
const outPath = path.resolve(__dirname, '../src/content/essays/creative-motivation-flagship.md');

const src = fs.readFileSync(srcPath, 'utf8').split(/\r?\n/);
const h1 = src.findIndex((l) => l.startsWith('# AI Doesn'));
let body = src.slice(h1 + 1);
const cut = body.findIndex((l, i) => {
  if (l.trim() !== '---') return false;
  const next = body.slice(i + 1).find((x) => x.trim());
  return next?.startsWith('## Source');
});
if (cut >= 0) body = body.slice(0, cut);

let text = body.join('\n').trim();

const fm = `---
title: "AI Doesn't Replace Creative Motives. It Reweights Them."
description: "AI does not replace creative motives. It changes what each motive costs to act on — and which motives institutions reward."
pubDate: 2026-06-01
category: ai-humanities
sourcePaper: creative-motivation
sourceSection: "§1–8"
status: published
featured: true
issueNumber: 6
issueRole: cover
frameworks: [motivational-reweighting, three-creative-motives]
---`;

fs.writeFileSync(outPath, `${fm}\n\n${text}\n`, 'utf8');
console.log(`Wrote ${outPath} (${text.split(/\s+/).filter(Boolean).length} words)`);
