import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, '..');
const distDir = path.join(root, 'dist');
const outPath = path.join(distDir, 'llms-full.txt');

if (!fs.existsSync(distDir)) {
  console.log('gen-llms-full: dist/ not found, skipping (run after astro build).');
  process.exit(0);
}

const site = JSON.parse(
  fs.readFileSync(path.join(root, 'src/data/siteConfig.json'), 'utf8'),
);

const lines = [
  `# ${site.siteName}`,
  `> ${site.subtitle}`,
  '',
  '## About',
  site.description,
  '',
  `Author: ${site.author}`,
  `ORCID: ${site.orcidUrl}`,
  `SSRN: ${site.ssrnAuthorUrl}`,
  '',
  '## Citation',
  'Essays on this site are editorial translations of published research. Cite the SSRN source paper for academic use.',
  '',
  '## Key URLs',
  '- /essays/',
  '- /frameworks/',
  '- /research/',
  '- /editors-notes/',
  '',
];

fs.writeFileSync(outPath, lines.join('\n'), 'utf8');
console.log('Wrote', outPath);
