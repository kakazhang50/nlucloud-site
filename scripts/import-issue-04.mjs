import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const srcPath = path.resolve(__dirname, '../../原创论文/第四期.md');
const outPath = path.resolve(__dirname, '../src/content/essays/latency-tax-flagship.md');

const src = fs.readFileSync(srcPath, 'utf8').split(/\r?\n/);
let body = src.slice(18);
const cut = body.findIndex((l, i) => {
  if (l.trim() !== '---') return false;
  const next = body.slice(i + 1).find((x) => x.trim());
  return next?.startsWith('## Source');
});
if (cut >= 0) body = body.slice(0, cut);
body = body.filter((l) => !l.startsWith('# The AI Latency Tax'));

let text = body.join('\n').trim();

text = text.replace(
  /A student waits for AI feedback\.\n\nA teacher waits for materials\.\n\nA patient waits for triage\.\n\nA worker waits for an automated decision\.\n\nA citizen waits for a public-service chatbot\.\n\nA researcher waits for analysis\.\n\nA small business owner waits for generated copy\.\n\nA designer waits for visual outputs\.\n\nA team waits for meeting summaries\.\n\n/,
  'A student waits for AI feedback. A teacher waits for materials. A patient waits for triage. A worker waits for an automated decision. A citizen waits for a public-service chatbot.\n\n',
);

const fm = `---
title: "The AI Latency Tax: Hidden Costs and Temporal Inequality"
description: "Latency is not merely a technical delay. It is a structural externality — uneven, cumulative, and hard to see."
pubDate: 2026-04-01
category: ai-society
sourcePaper: ai-latency-tax
sourceSection: "§1–8"
status: published
featured: true
issueNumber: 4
issueRole: cover
frameworks: [ai-latency-tax, temporal-justice]
---`;

fs.writeFileSync(outPath, `${fm}\n\n${text}\n`, 'utf8');
console.log(`Wrote ${outPath} (${text.split(/\s+/).filter(Boolean).length} words)`);
