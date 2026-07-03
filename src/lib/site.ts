import siteConfig from '@/data/siteConfig.json';

export const site = siteConfig;

export function pageTitle(pageTitle?: string): string {
  if (!pageTitle) return site.siteName;
  return `${pageTitle} · ${site.siteName}`;
}

export function formatDate(date: Date): string {
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

export function essaySlug(entry: { slug: string }): string {
  return entry.slug;
}
