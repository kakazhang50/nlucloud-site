/**
 * Generate professional SVG covers for Issues 01–06.
 * Run: node scripts/gen-issue-covers.mjs
 */

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const outDir = path.resolve(__dirname, '../public/covers');

/** Escape text for safe SVG/XML embedding. */
function escapeXml(s) {
  return String(s)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

const COVERS = [
  {
    num: 1,
    month: 'JANUARY 2026',
    title: ['Judgment', 'Completes Value'],
    titleItalic: [false, true],
    essay: ['Judgment-as-Product:', 'Why Value Completes at Authorization'],
    deck: ['Under generative abundance,', 'authorization completes value.'],
    category: 'AI & COGNITION',
    accent: '#1E3A2F',
    bg: ['#121F1A', '#1A2E26', '#243830'],
    motif: 'judgment',
  },
  {
    num: 2,
    month: 'FEBRUARY 2026',
    title: ['Before the Model', 'Responds'],
    titleItalic: [false, true],
    essay: ['Distortion at the', 'Human–AI Interface'],
    deck: ['Misalignment often begins', 'before the model answers.'],
    category: 'LANGUAGE',
    accent: '#4A6278',
    bg: ['#141C24', '#1C2834', '#243440'],
    motif: 'distortion',
  },
  {
    num: 3,
    month: 'MARCH 2026',
    title: ['Learning', 'Architecture'],
    titleItalic: [false, true],
    essay: ['AI as an Orchestration', 'Layer in Education'],
    deck: ['When information is abundant,', 'orchestration becomes the constraint.'],
    category: 'AI & EDUCATION',
    accent: '#3D5C5C',
    bg: ['#152921', '#1E3A2F', '#243D34'],
    motif: 'orchestration',
  },
  {
    num: 4,
    month: 'APRIL 2026',
    title: ['The Waiting', 'Tax'],
    titleItalic: [false, true],
    essay: ['The Human Cost of Waiting for AI:', 'From Experience to Structure'],
    deck: ['Waiting is not free time.', 'It is suspended attention.'],
    category: 'AI & LIFE',
    accent: '#556B52',
    bg: ['#1A2418', '#243020', '#2E3C28'],
    motif: 'waiting',
  },
  {
    num: 5,
    month: 'MAY 2026',
    title: ['The Latency', 'Tax'],
    titleItalic: [false, true],
    essay: ['The AI Latency Tax:', 'Hidden Costs and Temporal Inequality'],
    deck: ['Latency is invisible until', 'it becomes uneven.'],
    category: 'AI & SOCIETY',
    accent: '#7A4048',
    bg: ['#241418', '#2E1C20', '#382428'],
    motif: 'latency',
  },
  {
    num: 6,
    month: 'JUNE 2026',
    title: ['Reweighted', 'Motives'],
    titleItalic: [false, true],
    essay: ["AI Doesn't Replace Creative Motives.", 'It Reweights Them.'],
    deck: ['AI changes what each motive', 'costs to act on.'],
    category: 'AI & HUMANITIES',
    accent: '#8B5E3C',
    bg: ['#241A12', '#302418', '#3C2E1E'],
    motif: 'motives',
  },
];

function motifSvg(type, accent) {
  const gold = '#C4A574';
  switch (type) {
    case 'orchestration':
      return `
  <g opacity="0.92">
    <rect x="120" y="248" width="560" height="88" rx="2" fill="${accent}" fill-opacity="0.18" stroke="${gold}" stroke-opacity="0.25" stroke-width="1"/>
    <rect x="120" y="368" width="560" height="88" rx="2" fill="${accent}" fill-opacity="0.12" stroke="${gold}" stroke-opacity="0.2" stroke-width="1"/>
    <rect x="120" y="488" width="560" height="88" rx="2" fill="${accent}" fill-opacity="0.08" stroke="${gold}" stroke-opacity="0.15" stroke-width="1"/>
    <path d="M 200 336 L 400 368 L 600 336" fill="none" stroke="${gold}" stroke-opacity="0.22" stroke-width="1"/>
    <circle cx="200" cy="292" r="7" fill="#1E3A2F" stroke="${gold}" stroke-width="1.5"/>
    <circle cx="400" cy="292" r="9" fill="${accent}" stroke="${gold}" stroke-width="2"/>
    <circle cx="600" cy="292" r="7" fill="#1E3A2F" stroke="${gold}" stroke-width="1.5"/>
    <circle cx="360" cy="532" r="5" fill="#1E3A2F" stroke="${gold}" stroke-width="1.5"/>
    <circle cx="440" cy="532" r="5" fill="#1E3A2F" stroke="${gold}" stroke-width="1.5"/>
  </g>`;
    case 'judgment':
      return `
  <g opacity="0.92">
    <circle cx="280" cy="340" r="28" fill="none" stroke="${gold}" stroke-opacity="0.2" stroke-width="1"/>
    <circle cx="400" cy="300" r="28" fill="none" stroke="${gold}" stroke-opacity="0.2" stroke-width="1"/>
    <circle cx="520" cy="340" r="28" fill="none" stroke="${gold}" stroke-opacity="0.2" stroke-width="1"/>
    <circle cx="320" cy="420" r="22" fill="none" stroke="${gold}" stroke-opacity="0.15" stroke-width="1"/>
    <circle cx="480" cy="420" r="22" fill="none" stroke="${gold}" stroke-opacity="0.15" stroke-width="1"/>
    <path d="M 280 340 L 400 480" stroke="${gold}" stroke-opacity="0.35" stroke-width="1.5"/>
    <path d="M 400 300 L 400 480" stroke="${gold}" stroke-opacity="0.5" stroke-width="2"/>
    <path d="M 520 340 L 400 480" stroke="${gold}" stroke-opacity="0.35" stroke-width="1.5"/>
    <path d="M 320 420 L 400 480" stroke="${gold}" stroke-opacity="0.25" stroke-width="1"/>
    <path d="M 480 420 L 400 480" stroke="${gold}" stroke-opacity="0.25" stroke-width="1"/>
    <circle cx="400" cy="480" r="14" fill="${accent}" stroke="${gold}" stroke-width="2.5"/>
    <text x="400" y="260" text-anchor="middle" fill="${gold}" fill-opacity="0.4" font-family="monospace" font-size="9" letter-spacing="3">AUTHORIZE</text>
  </g>`;
    case 'waiting':
      return `
  <g opacity="0.92">
    <circle cx="400" cy="380" r="120" fill="none" stroke="${gold}" stroke-opacity="0.12" stroke-width="1"/>
    <circle cx="400" cy="380" r="80" fill="none" stroke="${gold}" stroke-opacity="0.2" stroke-width="1.5" stroke-dasharray="8 12"/>
    <rect x="360" y="340" width="80" height="80" rx="4" fill="${accent}" fill-opacity="0.15" stroke="${gold}" stroke-opacity="0.3" stroke-width="1.5"/>
    <line x1="380" y1="400" x2="420" y2="400" stroke="${gold}" stroke-opacity="0.5" stroke-width="3" stroke-linecap="round"/>
    <line x1="400" y1="360" x2="400" y2="390" stroke="${gold}" stroke-opacity="0.7" stroke-width="3" stroke-linecap="round"/>
    <circle cx="400" cy="380" r="6" fill="${gold}" fill-opacity="0.6"/>
    <text x="400" y="520" text-anchor="middle" fill="${gold}" fill-opacity="0.35" font-family="monospace" font-size="9" letter-spacing="3">SUSPENDED</text>
  </g>`;
    case 'latency':
      return `
  <g opacity="0.92">
    <line x1="140" y1="520" x2="660" y2="520" stroke="${gold}" stroke-opacity="0.2" stroke-width="1"/>
    <rect x="160" y="320" width="60" height="200" fill="${accent}" fill-opacity="0.12" stroke="${gold}" stroke-opacity="0.2" stroke-width="1"/>
    <rect x="280" y="380" width="60" height="140" fill="${accent}" fill-opacity="0.18" stroke="${gold}" stroke-opacity="0.25" stroke-width="1"/>
    <rect x="400" y="340" width="60" height="180" fill="${accent}" fill-opacity="0.15" stroke="${gold}" stroke-opacity="0.22" stroke-width="1"/>
    <rect x="520" y="400" width="60" height="120" fill="${accent}" fill-opacity="0.22" stroke="${gold}" stroke-opacity="0.3" stroke-width="1"/>
    <rect x="640" y="420" width="60" height="100" fill="${accent}" fill-opacity="0.28" stroke="${gold}" stroke-opacity="0.35" stroke-width="1.5"/>
    <text x="190" y="548" text-anchor="middle" fill="${gold}" fill-opacity="0.3" font-family="monospace" font-size="8">T1</text>
    <text x="640" y="548" text-anchor="middle" fill="${gold}" fill-opacity="0.45" font-family="monospace" font-size="8">T5</text>
  </g>`;
    case 'distortion':
      return `
  <g opacity="0.92">
    <rect x="200" y="300" width="180" height="180" rx="2" fill="${accent}" fill-opacity="0.12" stroke="${gold}" stroke-opacity="0.25" stroke-width="1.5" transform="rotate(-8 290 390)"/>
    <rect x="420" y="300" width="180" height="180" rx="2" fill="${accent}" fill-opacity="0.08" stroke="${gold}" stroke-opacity="0.2" stroke-width="1.5" transform="rotate(6 510 390)"/>
    <path d="M 290 320 L 510 360" stroke="${gold}" stroke-opacity="0.4" stroke-width="1.5" stroke-dasharray="4 6"/>
    <path d="M 290 460 L 510 420" stroke="${gold}" stroke-opacity="0.4" stroke-width="1.5" stroke-dasharray="4 6"/>
    <circle cx="400" cy="390" r="10" fill="${gold}" fill-opacity="0.5"/>
    <text x="400" y="520" text-anchor="middle" fill="${gold}" fill-opacity="0.35" font-family="monospace" font-size="9" letter-spacing="2">INTERFACE</text>
  </g>`;
    case 'motives':
      return `
  <g opacity="0.92">
    <circle cx="300" cy="380" r="48" fill="${accent}" fill-opacity="0.12" stroke="${gold}" stroke-opacity="0.25" stroke-width="1.5"/>
    <circle cx="400" cy="320" r="48" fill="${accent}" fill-opacity="0.18" stroke="${gold}" stroke-opacity="0.3" stroke-width="1.5"/>
    <circle cx="500" cy="380" r="48" fill="${accent}" fill-opacity="0.15" stroke="${gold}" stroke-opacity="0.28" stroke-width="1.5"/>
    <line x1="340" y1="360" x2="370" y2="340" stroke="${gold}" stroke-opacity="0.3" stroke-width="1"/>
    <line x1="430" y1="340" x2="460" y2="360" stroke="${gold}" stroke-opacity="0.3" stroke-width="1"/>
    <line x1="340" y1="400" x2="460" y2="400" stroke="${gold}" stroke-opacity="0.2" stroke-width="1"/>
    <text x="300" y="448" text-anchor="middle" fill="${gold}" fill-opacity="0.4" font-family="monospace" font-size="8">EXPR</text>
    <text x="400" y="388" text-anchor="middle" fill="${gold}" fill-opacity="0.4" font-family="monospace" font-size="8">FEED</text>
    <text x="500" y="448" text-anchor="middle" fill="${gold}" fill-opacity="0.4" font-family="monospace" font-size="8">OUT</text>
  </g>`;
    default:
      return '';
  }
}

function buildCover(c) {
  const id = String(c.num).padStart(2, '0');
  const total = COVERS.length;
  const issueLabel = escapeXml(`ISSUE ${id} · ${c.month}`);
  const seriesBadge = escapeXml(`${c.num} / ${total}`);
  const title1 = escapeXml(c.title[0]);
  const title2 = escapeXml(c.title[1]);
  const essay0 = escapeXml(c.essay[0]);
  const essay1 = escapeXml(c.essay[1]);
  const deck0 = escapeXml(c.deck[0]);
  const deck1 = escapeXml(c.deck[1]);
  const category = escapeXml(c.category);
  const coverTitle = escapeXml(`Issue ${id} — ${c.title.join(' ')}`);
  const t1Style = c.titleItalic[0] ? 'font-style="italic"' : '';
  const t2Style = c.titleItalic[1] ? 'font-style="italic"' : '';
  const watermark = escapeXml(id);

  const essayY = c.essay[1].length > 35 ? 800 : 820;
  const essaySize = c.essay.some((l) => l.length > 38) ? 18 : 22;

  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 1200" role="img" aria-labelledby="coverTitle${id}">
  <title id="coverTitle${id}">${coverTitle}</title>
  <defs>
    <linearGradient id="bg${id}" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="${c.bg[0]}"/>
      <stop offset="55%" stop-color="${c.bg[1]}"/>
      <stop offset="100%" stop-color="${c.bg[2]}"/>
    </linearGradient>
    <radialGradient id="glow${id}" cx="50%" cy="32%" r="55%">
      <stop offset="0%" stop-color="${c.accent}" stop-opacity="0.35"/>
      <stop offset="100%" stop-color="${c.bg[0]}" stop-opacity="0"/>
    </radialGradient>
    <radialGradient id="vignette${id}" cx="50%" cy="50%" r="72%">
      <stop offset="55%" stop-color="#000000" stop-opacity="0"/>
      <stop offset="100%" stop-color="#000000" stop-opacity="0.45"/>
    </radialGradient>
    <linearGradient id="spine${id}" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#000000" stop-opacity="0.35"/>
      <stop offset="100%" stop-color="${c.accent}" stop-opacity="0.15"/>
    </linearGradient>
    <linearGradient id="gold${id}" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#A8895A"/>
      <stop offset="50%" stop-color="#D4BC8A"/>
      <stop offset="100%" stop-color="#A8895A"/>
    </linearGradient>
    <pattern id="weave${id}" width="24" height="24" patternUnits="userSpaceOnUse" patternTransform="rotate(-12)">
      <line x1="0" y1="0" x2="0" y2="24" stroke="#F0E6D4" stroke-opacity="0.04" stroke-width="1"/>
    </pattern>
    <pattern id="dots${id}" width="20" height="20" patternUnits="userSpaceOnUse">
      <circle cx="10" cy="10" r="0.6" fill="#F0E6D4" fill-opacity="0.06"/>
    </pattern>
    <filter id="softGlow${id}" x="-20%" y="-20%" width="140%" height="140%">
      <feGaussianBlur stdDeviation="6" result="blur"/>
      <feMerge>
        <feMergeNode in="blur"/>
        <feMergeNode in="SourceGraphic"/>
      </feMerge>
    </filter>
  </defs>
  <rect width="800" height="1200" fill="url(#bg${id})"/>
  <rect width="800" height="1200" fill="url(#glow${id})"/>
  <rect width="800" height="1200" fill="url(#dots${id})"/>
  <rect width="800" height="1200" fill="url(#weave${id})"/>
  <text x="620" y="560" text-anchor="middle" fill="#F0E6D4" fill-opacity="0.055" font-family="Georgia, serif" font-size="320" font-weight="700">${watermark}</text>
  <rect x="0" y="0" width="18" height="1200" fill="url(#spine${id})"/>
  <rect x="18" y="0" width="2" height="1200" fill="url(#gold${id})" fill-opacity="0.55"/>
  <rect width="800" height="1200" fill="url(#vignette${id})"/>
  <rect x="64" y="72" width="672" height="3" fill="url(#gold${id})"/>
  <rect x="64" y="76" width="672" height="1" fill="#F0E6D4" fill-opacity="0.18"/>
  <text x="688" y="108" text-anchor="end" fill="#C4A574" fill-opacity="0.75" font-family="monospace" font-size="11" letter-spacing="2">${seriesBadge}</text>
  <text x="400" y="118" text-anchor="middle" fill="#F0E6D4" fill-opacity="0.82" font-family="Georgia, serif" font-size="13" letter-spacing="5.5">NLUCLOUD</text>
  <text x="400" y="142" text-anchor="middle" fill="#F0E6D4" fill-opacity="0.58" font-family="Georgia, serif" font-size="11" letter-spacing="3.8">AI &amp; SOCIETY REVIEW</text>
  <text x="400" y="196" text-anchor="middle" fill="#D4BC8A" font-family="monospace" font-size="12" letter-spacing="4.2">${issueLabel}</text>
  <g filter="url(#softGlow${id})">${motifSvg(c.motif, c.accent)}</g>
  <text x="400" y="660" text-anchor="middle" fill="#FAF6EF" font-family="Georgia, serif" font-size="52" font-weight="600" letter-spacing="-1" ${t1Style}>${title1}</text>
  <text x="400" y="728" text-anchor="middle" fill="#FAF6EF" font-family="Georgia, serif" font-size="52" font-weight="600" letter-spacing="-0.5" ${t2Style}>${title2}</text>
  <line x1="300" y1="762" x2="500" y2="762" stroke="url(#gold${id})" stroke-width="2.5"/>
  <circle cx="400" cy="762" r="4" fill="#D4BC8A" fill-opacity="0.85"/>
  <text x="400" y="${essayY}" text-anchor="middle" fill="#F0E6D4" fill-opacity="0.9" font-family="Georgia, serif" font-size="${essaySize}">${essay0}</text>
  <text x="400" y="${essayY + 34}" text-anchor="middle" fill="#F0E6D4" fill-opacity="0.9" font-family="Georgia, serif" font-size="${essaySize}">${essay1}</text>
  <text x="400" y="910" text-anchor="middle" fill="#F0E6D4" fill-opacity="0.55" font-family="Georgia, serif" font-size="15" font-style="italic">
    <tspan x="400" dy="0">${deck0}</tspan>
    <tspan x="400" dy="24">${deck1}</tspan>
  </text>
  <rect x="268" y="996" width="264" height="32" rx="2" fill="${c.accent}" fill-opacity="0.12" stroke="url(#gold${id})" stroke-width="1" stroke-opacity="0.45"/>
  <text x="400" y="1018" text-anchor="middle" fill="#E8DCC8" font-family="monospace" font-size="10" letter-spacing="3">${category}</text>
  <rect x="64" y="1100" width="672" height="1" fill="#F0E6D4" fill-opacity="0.14"/>
  <rect x="64" y="1104" width="672" height="2" fill="url(#gold${id})" fill-opacity="0.75"/>
  <text x="400" y="1142" text-anchor="middle" fill="#D4BC8A" fill-opacity="0.78" font-family="monospace" font-size="11" letter-spacing="4">NLUCLOUD PRESS</text>
  <text x="400" y="1168" text-anchor="middle" fill="#F0E6D4" fill-opacity="0.38" font-family="Georgia, serif" font-size="11" font-style="italic">nlucloud.com</text>
</svg>`;
}

fs.mkdirSync(outDir, { recursive: true });
for (const c of COVERS) {
  const id = String(c.num).padStart(2, '0');
  const file = path.join(outDir, `issue-${id}-cover.svg`);
  fs.writeFileSync(file, buildCover(c), 'utf8');
  console.log('Wrote', file);
}
