/**
 * Season One (Issues 01–06) reading arc — homepage series guide.
 */

export interface SeriesArcStep {
  issueNumber: number;
  arc: string;
  thesis: string;
}

export const seasonOneGuide = {
  label: 'First Half 2026',
  title: 'How to Read These Six Issues',
  lede:
    'NLUCloud publishes one cover essay per month. Each issue advances a single claim about AI and human development. Read independently or in order — the arc builds from production to motive.',
  thesis:
    'When generation becomes cheap, the binding constraints move to the human side: judgment, representation, learning architecture, time, and creative motive.',
  steps: [
    {
      issueNumber: 1,
      arc: 'Production',
      thesis: 'Under generative abundance, value completes at accountable human authorization.',
    },
    {
      issueNumber: 2,
      arc: 'Representation',
      thesis: 'Misalignment often begins before the model answers — in how we represent what we want.',
    },
    {
      issueNumber: 3,
      arc: 'Learning',
      thesis: 'When information is abundant, learning model orchestration becomes the binding constraint.',
    },
    {
      issueNumber: 4,
      arc: 'Time (experience)',
      thesis: 'Waiting for AI is not free time — it is suspended attention with cognitive cost.',
    },
    {
      issueNumber: 5,
      arc: 'Time (structure)',
      thesis: 'Latency is a structural externality — uneven, cumulative, and hard to see.',
    },
    {
      issueNumber: 6,
      arc: 'Motive',
      thesis: 'AI does not replace creative motives. It reweights what each costs to act on.',
    },
  ] satisfies SeriesArcStep[],
  coda:
    'Together, the six issues trace one question from different angles: as AI gets cheaper at producing, what becomes scarce, costly, or decisive on the human side — and who learns to work with that shift.',
} as const;
