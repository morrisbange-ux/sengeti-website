// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { site } from './src/config/site.ts';

export default defineConfig({
  site: site.url,
  trailingSlash: 'ignore',
  build: { inlineStylesheets: 'auto' },
  // Start loading a page as soon as a visitor points at or taps its link, so it opens instantly.
  // Astro skips this on data-saver and very slow connections.
  prefetch: { prefetchAll: true, defaultStrategy: 'hover' },
  integrations: [sitemap()],
});
