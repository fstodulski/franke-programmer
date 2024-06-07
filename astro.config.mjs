import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import svelte from '@astrojs/svelte';
import vercel from '@astrojs/vercel/serverless';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  integrations: [
    tailwind(),
    svelte(),
    sitemap()
    // partytown({
    //   config: {
    //     forward: ['dataLayer.push'],
    //     resolveUrl: (url) => {
    //       const PROXY_MAP = {
    //         'analytics.tiktok.com': 'd2bfcjczgrpfbj.cloudfront.net' // tiktok has to have proxy
    //       };

    //       url.hostname = PROXY_MAP[url.hostname] || url.hostname;

    //       return url;
    //     }
    //   }
    // })
  ],
  output: 'server',
  adapter: vercel()
});
