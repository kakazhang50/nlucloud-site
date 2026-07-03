import { getCollection, type CollectionEntry } from 'astro:content';
import type { EssayCategory } from '@/content/config';

function isPublic(status: string): boolean {
  return status === 'published';
}

export async function getPublishedEssays() {
  const all = await getCollection('essays');
  return all
    .filter((e) => isPublic(e.data.status))
    .sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());
}

export async function getFeaturedEssays(limit = 3) {
  const published = await getPublishedEssays();
  const featured = published.filter((e) => e.data.featured);
  if (featured.length >= limit) return featured.slice(0, limit);
  return published.slice(0, limit);
}

export async function getEssaysByCategory(category: EssayCategory) {
  const published = await getPublishedEssays();
  return published.filter((e) => e.data.category === category);
}

export async function getEssaysBySourcePaper(sourcePaper: string) {
  const published = await getPublishedEssays();
  return published.filter((e) => e.data.sourcePaper === sourcePaper);
}

export async function getPublishedFrameworks() {
  const all = await getCollection('frameworks');
  return all
    .filter((f) => isPublic(f.data.status))
    .sort((a, b) => a.data.title.localeCompare(b.data.title));
}

export async function getPublishedEditorNotes() {
  const all = await getCollection('editorNotes');
  return all
    .filter((n) => isPublic(n.data.status))
    .sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());
}

export async function getResearchPapers() {
  const all = await getCollection('researchPapers');
  return all.sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());
}

export async function getResearchPaper(slug: string) {
  const papers = await getResearchPapers();
  return papers.find((p) => p.slug === slug);
}

export type EssayEntry = CollectionEntry<'essays'>;
export type FrameworkEntry = CollectionEntry<'frameworks'>;
export type EditorNoteEntry = CollectionEntry<'editorNotes'>;
export type ResearchPaperEntry = CollectionEntry<'researchPapers'>;

export function countPublishedByCategory(
  essays: EssayEntry[],
): Record<EssayCategory, number> {
  const counts: Record<string, number> = {};
  for (const e of essays) {
    counts[e.data.category] = (counts[e.data.category] ?? 0) + 1;
  }
  return counts as Record<EssayCategory, number>;
}
