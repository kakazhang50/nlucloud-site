import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, '..');
const manifestPath = path.join(root, 'src/data/essayManifest.json');
const essaysDir = path.join(root, 'src/content/essays');

const manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf8'));

if (!fs.existsSync(essaysDir)) {
  fs.mkdirSync(essaysDir, { recursive: true });
}

let created = 0;
let skipped = 0;

for (const item of manifest) {
  const filePath = path.join(essaysDir, `${item.slug}.md`);
  if (fs.existsSync(filePath)) {
    skipped++;
    continue;
  }

  const frameworks =
    item.sourcePaper === 'self-distortion'
      ? '\nframeworks: [expression-distortion-cost, self-alignment-load]'
      : item.sourcePaper === 'judgment-as-product'
        ? '\nframeworks: [judgment-as-product]'
        : item.sourcePaper === 'ai-latency-tax' || item.sourcePaper === 'ai-waiting-tax'
          ? '\nframeworks: [ai-latency-tax, ai-waiting-tax]'
          : item.sourcePaper === 'creative-motivation'
            ? '\nframeworks: [motivational-reweighting]'
            : item.sourcePaper === 'learning-model-orchestration'
              ? '\nframeworks: [learning-model-orchestration]'
              : '';

  const content = `---
title: "${item.title.replace(/"/g, '\\"')}"
description: "${item.description.replace(/"/g, '\\"')}"
pubDate: 2026-07-01
category: ${item.category}
sourcePaper: ${item.sourcePaper}
sourceSection: "${item.sourceSection}"
status: planned
featured: false${frameworks}
---

_Essay planned. This piece will translate a section of the source research into a standalone editorial article._

**Source paper:** \`${item.sourcePaper}\` · **Section:** ${item.sourceSection}
`;

  fs.writeFileSync(filePath, content, 'utf8');
  created++;
}

console.log(`Essay stubs: ${created} created, ${skipped} skipped (${manifest.length} total in manifest).`);
