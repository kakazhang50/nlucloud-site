/**
 * Magazine issue registry — one cover essay per issue.
 * Update `status` and `coverEssaySlug` when a flagship essay is published.
 */

export type IssueStatus = 'published' | 'planned';

export interface MagazineIssue {
  number: number;
  label: string;
  title: string;
  monthYear: string;
  theme: string;
  editorLede: string;
  status: IssueStatus;
  sourcePaper: string;
  ssrnId: string;
  /** Slug of the cover essay in src/content/essays/ */
  coverEssaySlug: string;
  coverEssayTitle: string;
  category: string;
  lexiconSlugs: string[];
}

export const coreIssues: MagazineIssue[] = [
  {
    number: 1,
    label: 'Issue 01',
    title: 'Learning Architecture',
    monthYear: 'January 2026',
    theme: 'When information is abundant, learning model orchestration becomes the binding constraint.',
    editorLede:
      'AI’s deeper role in education may not be content delivery or teacher replacement. It may be orchestration: selecting, sequencing, and combining learning models under limited cognitive energy.',
    status: 'published',
    sourcePaper: 'learning-model-orchestration',
    ssrnId: '6573518',
    coverEssaySlug: 'ai-as-orchestration-layer',
    coverEssayTitle: 'AI as an Orchestration Layer in Education',
    category: 'ai-education',
    lexiconSlugs: ['learning-model-orchestration', 'orchestration-inequality'],
  },
  {
    number: 2,
    label: 'Issue 02',
    title: 'Judgment Completes Value',
    monthYear: 'February 2026',
    theme: 'Under generative abundance, value completes at accountable human authorization.',
    editorLede:
      'AI can generate ten drafts in a minute. It cannot decide which draft should represent you, your organization, or your work. That act — judgment — is where value becomes product.',
    status: 'published',
    sourcePaper: 'judgment-as-product',
    ssrnId: '6534959',
    coverEssaySlug: 'judgment-as-product-flagship',
    coverEssayTitle: 'Judgment-as-Product: Why Value Completes at Human Authorization',
    category: 'ai-cognition',
    lexiconSlugs: ['judgment-as-product', 'generative-abundance-paradox', 'judgment-burden'],
  },
  {
    number: 3,
    label: 'Issue 03',
    title: 'The Waiting Tax',
    monthYear: 'March 2026',
    theme: 'Waiting for AI is not free time — it is suspended attention with cognitive cost.',
    editorLede:
      'Artificial intelligence is sold as speed. Yet daily use brings spinners, blank pauses, and suspended attention. Before policy asks who waits longer, we must name what waiting does to the human on the other side.',
    status: 'planned',
    sourcePaper: 'ai-waiting-tax',
    ssrnId: '5401725',
    coverEssaySlug: 'waiting-tax-flagship',
    coverEssayTitle: 'The Human Cost of Waiting for AI: From Experience to Structure',
    category: 'ai-life',
    lexiconSlugs: ['ai-waiting-tax', 'suspended-attention'],
  },
  {
    number: 4,
    label: 'Issue 04',
    title: 'The Latency Tax',
    monthYear: 'April 2026',
    theme: 'Latency is a structural externality — uneven, cumulative, and hard to see.',
    editorLede:
      'The AI Waiting Tax names lived experience. The AI Latency Tax extends this into structure: who waits longer, whose time is commodified, and whether essential services should tier responsiveness.',
    status: 'planned',
    sourcePaper: 'ai-latency-tax',
    ssrnId: '6535458',
    coverEssaySlug: 'latency-tax-flagship',
    coverEssayTitle: 'The AI Latency Tax: Hidden Costs and Temporal Inequality',
    category: 'ai-society',
    lexiconSlugs: ['ai-latency-tax', 'temporal-justice'],
  },
  {
    number: 5,
    label: 'Issue 05',
    title: 'Before the Model Responds',
    monthYear: 'May 2026',
    theme: 'Misalignment often begins before the model answers — in how we represent what we want.',
    editorLede:
      'When AI outputs feel generic or misaligned, the problem is often traced to the model. But much failure is co-produced at the cognition–language interface — in expression distortion and self-alignment load.',
    status: 'planned',
    sourcePaper: 'self-distortion',
    ssrnId: '6534580',
    coverEssaySlug: 'self-distortion-flagship',
    coverEssayTitle: 'Before the Model Responds: Distortion at the Human–AI Interface',
    category: 'language-understanding',
    lexiconSlugs: ['expression-distortion-cost', 'self-alignment-load', 'authenticity-cost-model'],
  },
  {
    number: 6,
    label: 'Issue 06',
    title: 'Reweighted Motives',
    monthYear: 'June 2026',
    theme: 'AI does not replace creative motives. It reweights what each motive costs to act on.',
    editorLede:
      'Generative AI is often framed as a threat to creativity. A better frame: three long-standing motives — expression, feedback, and outcome — coexist, and AI changes their activation costs and institutional rewards.',
    status: 'planned',
    sourcePaper: 'creative-motivation',
    ssrnId: '6536198',
    coverEssaySlug: 'creative-motivation-flagship',
    coverEssayTitle: "AI Doesn't Replace Creative Motives. It Reweights Them.",
    category: 'ai-humanities',
    lexiconSlugs: ['motivational-reweighting', 'three-creative-motives'],
  },
];

/** Issues listed on the public site (01–06). Extended program stays in repo docs only. */
export const siteIssues: MagazineIssue[] = coreIssues;

/** @internal Extended editorial program — not published as issue pages until activated. */
export const extendedIssues: MagazineIssue[] = [
  {
    number: 7,
    label: 'Issue 07',
    title: 'Digital Content Assets',
    monthYear: 'January 2027',
    theme: 'In the generative age, content becomes a compound knowledge asset — not only a finished work.',
    editorLede:
      'When production is cheap, the question shifts from whether you can publish to whether what you publish can compound — as structured, reusable, low-maintenance knowledge capital.',
    status: 'planned',
    sourcePaper: '',
    ssrnId: '',
    coverEssaySlug: 'digital-content-assets-flagship',
    coverEssayTitle: 'Digital Content Assets in the Age of Generative AI',
    category: 'ai-society',
    lexiconSlugs: ['digital-content-assets', 'generative-knowledge-production'],
  },
  {
    number: 8,
    label: 'Issue 08',
    title: 'The Super-Individual',
    monthYear: 'February 2027',
    theme: 'A super-individual is not a freelancer — it is a low-maintenance knowledge production system.',
    editorLede:
      'One person with AI, archives, and publishing infrastructure can operate like a small institution. The binding constraint is no longer output volume but system design.',
    status: 'planned',
    sourcePaper: '',
    ssrnId: '',
    coverEssaySlug: 'super-individual-flagship',
    coverEssayTitle: 'The Super-Individual as a Knowledge Production System',
    category: 'ai-society',
    lexiconSlugs: ['super-individual-infrastructure', 'low-maintenance-compound-systems'],
  },
  {
    number: 9,
    label: 'Issue 09',
    title: 'Public Knowledge',
    monthYear: 'March 2027',
    theme: 'AI reshapes how public knowledge is produced, circulated, and trusted.',
    editorLede:
      'Independent research, editorial translation, and open working papers form a new public knowledge layer — between academic journals and algorithmic feeds.',
    status: 'planned',
    sourcePaper: '',
    ssrnId: '',
    coverEssaySlug: 'public-knowledge-flagship',
    coverEssayTitle: 'AI and the Future of Public Knowledge',
    category: 'ai-society',
    lexiconSlugs: ['public-knowledge-infrastructure'],
  },
  {
    number: 10,
    label: 'Issue 10',
    title: 'Orchestration Inequality',
    monthYear: 'April 2027',
    theme: 'The new inequality is not possession of AI — it is capacity to orchestrate learning.',
    editorLede:
      'Two learners may share the same AI system and experience very different outcomes. The tool is the same; the learning architecture is different.',
    status: 'planned',
    sourcePaper: 'learning-model-orchestration',
    ssrnId: '6573518',
    coverEssaySlug: 'orchestration-inequality-flagship',
    coverEssayTitle: 'Orchestration Inequality: Who Gets Better Learning Paths?',
    category: 'ai-education',
    lexiconSlugs: ['orchestration-inequality'],
  },
  {
    number: 11,
    label: 'Issue 11',
    title: 'Judgment Burden',
    monthYear: 'May 2027',
    theme: 'The hidden cognitive labor of evaluating, verifying, and standing behind AI outputs.',
    editorLede:
      'Productivity metrics count tokens and drafts. They rarely measure how much can be responsibly evaluated and adopted under limited human bandwidth.',
    status: 'planned',
    sourcePaper: 'judgment-as-product',
    ssrnId: '6534959',
    coverEssaySlug: 'judgment-burden-flagship',
    coverEssayTitle: 'Judgment Burden: The Work Nobody Measures',
    category: 'ai-cognition',
    lexiconSlugs: ['judgment-burden', 'decision-latency'],
  },
  {
    number: 12,
    label: 'Issue 12',
    title: 'Co-Produced Misalignment',
    monthYear: 'June 2027',
    theme: 'AI misalignment is often jointly produced — not model-driven alone.',
    editorLede:
      'Fluent but generic outputs may reflect weak representational fidelity on the user side as much as model limitation. Interaction failure is co-produced.',
    status: 'planned',
    sourcePaper: 'self-distortion',
    ssrnId: '6534580',
    coverEssaySlug: 'co-produced-misalignment-flagship',
    coverEssayTitle: 'When AI Misalignment Is Co-Produced, Not Model-Driven',
    category: 'language-understanding',
    lexiconSlugs: ['co-produced-misalignment', 'representational-fidelity'],
  },
  {
    number: 13,
    label: 'Issue 13',
    title: 'Temporal Justice',
    monthYear: 'July 2027',
    theme: 'Fairness in how waiting time is allocated when AI mediates essential services.',
    editorLede:
      'When responsiveness becomes a tiered product in education, healthcare, and public services, latency is no longer a UX problem — it is a justice problem.',
    status: 'planned',
    sourcePaper: 'ai-latency-tax',
    ssrnId: '6535458',
    coverEssaySlug: 'temporal-justice-flagship',
    coverEssayTitle: 'Temporal Justice in the Age of Intelligent Systems',
    category: 'ai-society',
    lexiconSlugs: ['temporal-justice', 'ai-latency-tax'],
  },
  {
    number: 14,
    label: 'Issue 14',
    title: 'Expression Restoration',
    monthYear: 'August 2027',
    theme: 'When friction falls, low-stakes personal expression regains practical significance.',
    editorLede:
      'Generative tools lower the cost of making. That does not only accelerate professional production — it can restore expression-driven creation as a viable everyday motive.',
    status: 'planned',
    sourcePaper: 'creative-motivation',
    ssrnId: '6536198',
    coverEssaySlug: 'expression-restoration-flagship',
    coverEssayTitle: 'Expression-Weight Restoration: Why Low-Stakes Creation Matters Again',
    category: 'ai-humanities',
    lexiconSlugs: ['expression-driven-creation', 'motivational-reweighting'],
  },
  {
    number: 15,
    label: 'Issue 15',
    title: 'Compound Systems',
    monthYear: 'September 2027',
    theme: 'Low-maintenance systems that archive, compound, and reuse knowledge over time.',
    editorLede:
      'The long game is not viral reach. It is building systems where each essay, paper, and concept entry increases the value of everything already published.',
    status: 'planned',
    sourcePaper: '',
    ssrnId: '',
    coverEssaySlug: 'compound-systems-flagship',
    coverEssayTitle: 'Low-Maintenance Compound Systems in AI-Mediated Publishing',
    category: 'ai-society',
    lexiconSlugs: ['low-maintenance-compound-systems'],
  },
  {
    number: 16,
    label: 'Issue 16',
    title: 'Annual Synthesis',
    monthYear: 'December 2027',
    theme: 'A year of constraints, frameworks, and what became scarce when AI got cheap.',
    editorLede:
      'Sixteen issues trace a single question from different angles: when generation is cheap, what moves to the human side — and who bears the cost?',
    status: 'planned',
    sourcePaper: '',
    ssrnId: '',
    coverEssaySlug: 'year-one-synthesis',
    coverEssayTitle: "Editor's Synthesis: What Became Scarce in Year One",
    category: 'ai-cognition',
    lexiconSlugs: [],
  },
];

export const allIssues: MagazineIssue[] = [...coreIssues, ...extendedIssues];

export function getIssue(number: number): MagazineIssue | undefined {
  return allIssues.find((i) => i.number === number);
}

export function getIssueBySlug(slug: string): MagazineIssue | undefined {
  const n = parseInt(slug.replace(/^issue-?0?/i, ''), 10);
  return Number.isFinite(n) ? getIssue(n) : undefined;
}

export function issuePath(number: number): string {
  return `/issues/${String(number).padStart(2, '0')}/`;
}

export function getCurrentIssue(): MagazineIssue {
  /** Latest issue in the active series (highest issue number). */
  return siteIssues[siteIssues.length - 1] ?? siteIssues[0];
}

export function getPublishedIssues(): MagazineIssue[] {
  return siteIssues.filter((i) => i.status === 'published');
}

export function formatIssueLabel(number: number): string {
  return `Issue ${String(number).padStart(2, '0')}`;
}
