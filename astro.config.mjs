import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
import { fileURLToPath } from 'url';

const siteUrl = 'https://nlucloud.com';

/** @type {import('@astrojs/sitemap').SitemapOptions} */
const sitemapConfig = {
  filter: (page) => !page.includes('/404'),
  serialize(item) {
    const path = new URL(item.url).pathname;
    if (path === '/' || path === '') {
      item.priority = 1;
      item.changefreq = 'weekly';
    } else if (path === '/research/' || path === '/essays/') {
      item.priority = 0.9;
      item.changefreq = 'weekly';
    } else if (path.startsWith('/research/')) {
      item.priority = 0.85;
      item.changefreq = 'monthly';
    } else if (path.startsWith('/essays/')) {
      item.priority = 0.8;
      item.changefreq = 'monthly';
    } else if (path.startsWith('/frameworks/')) {
      item.priority = 0.75;
      item.changefreq = 'monthly';
    } else if (path === '/llms-full.txt' || path === '/llms.txt') {
      item.priority = 0.5;
      item.changefreq = 'weekly';
    } else {
      item.priority = 0.7;
      item.changefreq = 'monthly';
    }
    return item;
  },
};

export default defineConfig({
  site: siteUrl,
  trailingSlash: 'always',
  devToolbar: {
    enabled: false,
  },
  server: {
    port: 4323,
    strictPort: true,
  },
  integrations: [tailwind(), sitemap(sitemapConfig)],
  vite: {
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url)),
      },
    },
  },
  markdown: {
    shikiConfig: {
      theme: 'github-light',
    },
  },
});
