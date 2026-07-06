import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const srcPath = path.resolve(__dirname, '../../原创论文/第五期.MD');
const outPath = path.resolve(__dirname, '../src/content/essays/self-distortion-flagship.md');

const src = fs.readFileSync(srcPath, 'utf8').split(/\r?\n/);
const h1 = src.findIndex((l) => l.startsWith('# Before the Model Responds'));
let body = src.slice(h1 + 1);
const cut = body.findIndex((l, i) => {
  if (l.trim() !== '---') return false;
  const next = body.slice(i + 1).find((x) => x.trim());
  return next?.startsWith('## Source');
});
if (cut >= 0) body = body.slice(0, cut);

let text = body.join('\n').trim();

const fm = `---
title: "Before the Model Responds: Distortion at the Human–AI Interface"
description: "Misalignment often begins before the model answers — in how we represent what we want, what we hide, and what we are not yet able to say clearly."
pubDate: 2026-05-01
category: language-understanding
sourcePaper: self-distortion
sourceSection: "§1–8"
status: published
featured: true
issueNumber: 5
issueRole: cover
frameworks: [expression-distortion-cost, self-alignment-load, authenticity-cost-model]
---`;

fs.writeFileSync(outPath, `${fm}\n\n${text}\n`, 'utf8');
console.log(`Wrote ${outPath} (${text.split(/\s+/).filter(Boolean).length} words)`);
