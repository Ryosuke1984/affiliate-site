// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

import cloudflare from '@astrojs/cloudflare';

// https://astro.build/config
export default defineConfig({
  site: 'https://game-hard-navi.soraflow-ai.workers.dev',
  integrations: [sitemap()],
  adapter: cloudflare()
});