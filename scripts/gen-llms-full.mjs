import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, '..');
const distDir = path.join(root, 'dist');
const outPath = path.join(distDir, 'llms-full.txt');
const siteUrl = 'https://nlucloud.com';

if (!fs.existsSync(distDir)) {
  console.log('gen-llms-full: dist/ not found, skipping (run after astro build).');
  process.exit(0);
}

const site = JSON.parse(
  fs.readFileSync(path.join(root, 'src/data/siteConfig.json'), 'utf8'),
);

function parseFrontmatter(filePath) {
  const raw = fs.readFileSync(filePath, 'utf8');
  const match = raw.match(/^---\r?\n([\s\S]*?)\r?\n---/);
  if (!match) return null;
  const fm = match[1];
  const get = (key) => {
    const m = fm.match(new RegExp(`^${key}:\\s*"?([^"\\n]+)"?`, 'm'));
    return m?.[1]?.trim();
  };
  return {
    title: get('title'),
    description: get('description'),
    status: get('status'),
    pubDate: get('pubDate'),
    category: get('category'),
    sourcePaper: get('sourcePaper'),
  };
}

function listMarkdown(dir, { requirePublished = true } = {}) {
  if (!fs.existsSync(dir)) return [];
  return fs
    .readdirSync(dir)
    .filter((f) => f.endsWith('.md'))
    .map((f) => {
      const data = parseFrontmatter(path.join(dir, f));
      if (!data) return null;
      if (requirePublished && data.status !== 'published') return null;
      return { slug: f.replace(/\.md$/, ''), ...data };
    })
    .filter(Boolean)
    .sort((a, b) => (b.pubDate ?? '').localeCompare(a.pubDate ?? ''));
}

const essays = listMarkdown(path.join(root, 'src/content/essays'));
const frameworks = listMarkdown(path.join(root, 'src/content/frameworks'));
const papers = listMarkdown(path.join(root, 'src/content/researchPapers'), {
  requirePublished: false,
});

const lines = [
  `# ${site.siteName}`,
  `> ${site.subtitle}`,
  '',
  `Canonical: ${siteUrl}/`,
  `Sitemap: ${siteUrl}/sitemap-index.xml`,
  `Generated: ${new Date().toISOString().slice(0, 10)}`,
  '',
  '## About',
  site.description,
  '',
  '## Author',
  `${site.author} · Independent Researcher`,
  `ORCID: ${site.orcidUrl}`,
  `SSRN: ${site.ssrnAuthorUrl}`,
  '',
  '## Site structure',
  `- ${siteUrl}/essays/ — Editorial essays`,
  `- ${siteUrl}/research/ — SSRN paper index`,
  `- ${siteUrl}/frameworks/ — Named frameworks`,
  `- ${siteUrl}/editors-notes/ — Editor's notes`,
  '',
];

if (essays.length) {
  lines.push('## Published essays', '');
  for (const e of essays) {
    lines.push(`### ${e.title}`);
    lines.push(`URL: ${siteUrl}/essays/${e.slug}/`);
    lines.push(`Category: ${e.category}`);
    if (e.sourcePaper) lines.push(`Source paper: ${e.sourcePaper}`);
    if (e.description) lines.push(`Summary: ${e.description}`);
    if (e.pubDate) lines.push(`Published: ${e.pubDate}`);
    lines.push('');
  }
}

if (frameworks.length) {
  lines.push('## Frameworks', '');
  for (const f of frameworks) {
    lines.push(`- ${f.title}: ${siteUrl}/frameworks/${f.slug}/`);
    if (f.description) lines.push(`  ${f.description}`);
  }
  lines.push('');
}

if (papers.length) {
  lines.push('## Research papers (SSRN)', '');
  for (const p of papers) {
    lines.push(`- ${p.title}: ${siteUrl}/research/${p.slug}/`);
    if (p.description) lines.push(`  ${p.description}`);
  }
  lines.push('');
}

lines.push(
  '## Citation',
  'Essays are editorial translations of SSRN research. Cite the SSRN paper for academic use; cite essay URLs for general reference.',
);

fs.writeFileSync(outPath, lines.join('\n'), 'utf8');
console.log('Wrote', outPath);
