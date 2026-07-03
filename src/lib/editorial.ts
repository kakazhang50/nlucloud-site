import { site } from '@/lib/site';

/** Formal source line for essay footers (publication voice, not blog-aside). */
export function essaySourceAttribution(
  paperTitle: string,
  sourceSection: string | undefined,
  author: string = site.author,
): string {
  const section = sourceSection?.trim();
  if (!section || section.toLowerCase() === 'full') {
    return `This essay is drawn from ${paperTitle}, an SSRN working paper by ${author}.`;
  }
  return `This essay is adapted from ${section} of ${paperTitle}, an SSRN working paper by ${author}.`;
}
