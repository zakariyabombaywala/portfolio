// @ts-check
import { defineConfig, fontProviders } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Change this to your real domain once deployed (e.g. https://zakariya.dev).
// It is used for canonical URLs, Open Graph tags, the sitemap and robots.txt.
const SITE_URL = process.env.SITE_URL ?? 'https://muhammad-zakariya.netlify.app';

export default defineConfig({
  site: SITE_URL,
  integrations: [sitemap()],
  fonts: [
    {
      provider: fontProviders.google(),
      name: 'Schibsted Grotesk',
      cssVariable: '--font-sans',
      weights: ['400 900'],
      styles: ['normal'],
      subsets: ['latin'],
      fallbacks: ['system-ui', 'sans-serif'],
    },
  ],
});
