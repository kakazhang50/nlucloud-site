import { defineCollection, z } from 'astro:content';

const essayCategory = z.enum([
  'language-understanding',
  'ai-cognition',
  'ai-society',
  'ai-education',
  'ai-humanities',
  'ai-life',
]);

const contentStatus = z.enum(['planned', 'draft', 'published']);

const essays = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    category: essayCategory,
    sourcePaper: z.string(),
    sourceSection: z.string().optional(),
    status: contentStatus.default('planned'),
    featured: z.boolean().default(false),
    issueNumber: z.number().int().min(1).optional(),
    issueRole: z.enum(['cover', 'companion']).optional(),
    series: z.string().nullable().optional(),
    frameworks: z.array(z.string()).optional(),
  }),
});

const frameworks = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    abbreviation: z.string(),
    description: z.string(),
    sourcePaper: z.string().optional(),
    lexiconNumber: z.number().int().optional(),
    status: contentStatus.default('planned'),
  }),
});

const editorNotes = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    status: contentStatus.default('draft'),
    featured: z.boolean().default(false),
  }),
});

const researchPapers = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    ssrnId: z.string(),
    ssrnUrl: z.string().url(),
    pubDate: z.coerce.date(),
    frameworks: z.array(z.string()),
    views: z.number().optional(),
    downloads: z.number().optional(),
  }),
});

export const collections = {
  essays,
  frameworks,
  editorNotes,
  researchPapers,
};

export type EssayCategory = z.infer<typeof essayCategory>;
export type ContentStatus = z.infer<typeof contentStatus>;
