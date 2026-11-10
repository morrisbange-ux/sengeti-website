// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import ogImages from './integrations/og-images.mjs';
import { site } from './src/config/site.ts';

export default defineConfig({
  site: site.url,
  trailingSlash: 'ignore',
  build: { inlineStylesheets: 'auto' },
  // Start loading a page as soon as a visitor points at or taps its link, so it opens instantly.
  // Astro skips this on data-saver and very slow connections.
  prefetch: { prefetchAll: true, defaultStrategy: 'hover' },
  // Sengeti Attendance grew into SengetiEdu; old links still work.
  redirects: {
    '/products/attendance': '/products/sengetiedu',
    '/fr/products/attendance': '/fr/products/sengetiedu',
    '/pt/products/attendance': '/pt/products/sengetiedu',
  },
  integrations: [sitemap(), ogImages()],
});
