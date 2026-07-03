import { site } from '@/lib/site';

export interface BreadcrumbItem {
  name: string;
  path: string;
}

export interface ArticleSchemaInput {
  headline: string;
  description: string;
  datePublished: string;
  authorName?: string;
}

export function buildJsonLdGraph(
  siteUrl: string,
  pageUrl: string,
  extra: Record<string, unknown>[] = [],
): Record<string, unknown> {
  const nodes: Record<string, unknown>[] = [
    {
      '@type': 'WebSite',
      '@id': `${siteUrl}/#website`,
      url: siteUrl,
      name: site.siteName,
      description: site.description,
      publisher: { '@id': `${siteUrl}/#organization` },
    },
    {
      '@type': 'Organization',
      '@id': `${siteUrl}/#organization`,
      name: site.siteName,
      url: siteUrl,
    },
    {
      '@type': 'Person',
      '@id': `${siteUrl}/#author`,
      name: site.author,
      email: site.authorEmail,
      url: site.orcidUrl,
      sameAs: [site.orcidUrl, site.ssrnAuthorUrl],
    },
    {
      '@type': 'WebPage',
      '@id': `${pageUrl}#webpage`,
      url: pageUrl,
      isPartOf: { '@id': `${siteUrl}/#website` },
    },
    ...extra,
  ];

  return {
    '@context': 'https://schema.org',
    '@graph': nodes,
  };
}

export function articleJsonLd(
  input: ArticleSchemaInput & { url: string; siteUrl: string },
): Record<string, unknown> {
  return {
    '@type': 'Article',
    '@id': `${input.url}#article`,
    headline: input.headline,
    description: input.description,
    datePublished: input.datePublished,
    author: { '@id': `${input.siteUrl}/#author` },
    publisher: { '@id': `${input.siteUrl}/#organization` },
    mainEntityOfPage: { '@id': `${input.url}#webpage` },
  };
}

export function breadcrumbJsonLd(
  items: BreadcrumbItem[],
  siteUrl: string,
  pageUrl: string,
): Record<string, unknown> {
  return {
    '@type': 'BreadcrumbList',
    '@id': `${pageUrl}#breadcrumb`,
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: new URL(item.path, siteUrl).href,
    })),
  };
}

export function scholarlyArticleJsonLd(
  paper: {
    title: string;
    description: string;
    ssrnUrl: string;
    datePublished: string;
  },
  pageUrl: string,
  siteUrl: string,
): Record<string, unknown> {
  return {
    '@type': 'ScholarlyArticle',
    '@id': `${pageUrl}#scholarlyarticle`,
    headline: paper.title,
    description: paper.description,
    datePublished: paper.datePublished,
    author: { '@id': `${siteUrl}/#author` },
    url: paper.ssrnUrl,
    sameAs: paper.ssrnUrl,
    isPartOf: { '@id': `${pageUrl}#webpage` },
  };
}
