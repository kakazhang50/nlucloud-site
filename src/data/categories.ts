import type { EssayCategory } from '@/content/config';

export type ColumnAccent =
  | 'language'
  | 'cognition'
  | 'society'
  | 'education'
  | 'humanities'
  | 'life';

export interface CategoryMeta {
  slug: EssayCategory;
  label: string;
  tabLabel: string;
  accent: ColumnAccent;
  description: string;
  question: string;
}

export const essayCategories: CategoryMeta[] = [
  {
    slug: 'language-understanding',
    label: 'Language Understanding',
    tabLabel: 'Language',
    accent: 'language',
    description: 'Language representation, intent, and the human–AI linguistic interface.',
    question: 'How does AI understand what we say?',
  },
  {
    slug: 'ai-cognition',
    label: 'AI & Cognition',
    tabLabel: 'Cognition',
    accent: 'cognition',
    description: 'Judgment, cognitive labor, and value completion in generative workflows.',
    question: 'What must humans still think and judge?',
  },
  {
    slug: 'ai-society',
    label: 'AI & Society',
    tabLabel: 'Society',
    accent: 'society',
    description: 'Social structure, temporal justice, inequality, and public governance.',
    question: 'How does AI reshape fairness and social structure?',
  },
  {
    slug: 'ai-education',
    label: 'AI & Education',
    tabLabel: 'Education',
    accent: 'education',
    description: 'Learning orchestration, education systems, and lifelong learning.',
    question: 'How does AI change how we learn?',
  },
  {
    slug: 'ai-humanities',
    label: 'AI & Humanities',
    tabLabel: 'Humanities',
    accent: 'humanities',
    description: 'Creative motivation, cultural production, expression, and meaning.',
    question: 'What does AI mean for culture and creation?',
  },
  {
    slug: 'ai-life',
    label: 'AI & Life',
    tabLabel: 'Life',
    accent: 'life',
    description: 'Everyday experience, waiting, rhythm, and how ordinary people live with AI.',
    question: 'How does AI enter ordinary daily life?',
  },
];

export function getCategoryMeta(slug: EssayCategory): CategoryMeta {
  const found = essayCategories.find((c) => c.slug === slug);
  if (!found) throw new Error(`Unknown category: ${slug}`);
  return found;
}
