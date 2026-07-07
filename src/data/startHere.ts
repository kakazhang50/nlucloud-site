/** New-reader entry points — three core concepts with lexicon + cover essay links. */

export const startHere = {
  kicker: 'Start Here',
  title: 'New to NLUCloud?',
  lede: 'Three ideas that anchor the first season. Each links to a lexicon entry and a cover essay.',
  concepts: [
    {
      slug: 'judgment-as-product',
      abbreviation: 'JAP',
      title: 'Judgment-as-Product',
      hook: 'When AI generates options, value completes at accountable human authorization.',
      essaySlug: 'judgment-as-product-flagship',
      issueNumber: 1,
    },
    {
      slug: 'ai-waiting-tax',
      abbreviation: 'AWT',
      title: 'AI Waiting Tax',
      hook: 'Waiting for AI is not free time — it is suspended attention with cognitive cost.',
      essaySlug: 'waiting-tax-flagship',
      issueNumber: 4,
    },
    {
      slug: 'learning-model-orchestration',
      abbreviation: 'LMO',
      title: 'Learning Model Orchestration',
      hook: 'When information is abundant, learning architecture becomes the binding constraint.',
      essaySlug: 'ai-as-orchestration-layer',
      issueNumber: 3,
    },
  ],
} as const;
