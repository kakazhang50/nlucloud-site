import { getCollection } from 'astro:content';

/** Resolve lexicon slug → display title for reader-facing links. */
export async function getLexiconTitles(
  slugs: string[],
): Promise<Map<string, string>> {
  const all = await getCollection('frameworks');
  const map = new Map<string, string>();
  for (const slug of slugs) {
    const entry = all.find((f) => f.slug === slug);
    map.set(slug, entry?.data.title ?? formatSlug(slug));
  }
  return map;
}

export function formatSlug(slug: string): string {
  return slug
    .split('-')
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(' ');
}
