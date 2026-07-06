import { getCollection, type CollectionEntry } from 'astro:content';
import {
  allIssues,
  getCurrentIssue,
  getIssue,
  getPublishedIssues,
  issuePath,
  type MagazineIssue,
} from '@/data/issues';

export type EssayEntry = CollectionEntry<'essays'>;

export async function getCoverEssayForIssue(
  issue: MagazineIssue,
): Promise<EssayEntry | undefined> {
  const essays = await getCollection('essays');
  const entry = essays.find(
    (e) => e.slug === issue.coverEssaySlug && e.data.status === 'published',
  );
  return entry;
}

export async function getCurrentCoverEssay(): Promise<{
  issue: MagazineIssue;
  essay: EssayEntry | undefined;
}> {
  const issue = getCurrentIssue();
  const essay = await getCoverEssayForIssue(issue);
  return { issue, essay };
}

export async function resolveIssuePage(number: number): Promise<{
  issue: MagazineIssue;
  essay: EssayEntry | undefined;
}> {
  const issue = getIssue(number);
  if (!issue) throw new Error(`Unknown issue: ${number}`);
  const essay = await getCoverEssayForIssue(issue);
  return { issue, essay };
}

export {
  allIssues,
  getCurrentIssue,
  getIssue,
  getPublishedIssues,
  issuePath,
  type MagazineIssue,
};
