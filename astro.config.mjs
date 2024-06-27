import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import sentry from "@sentry/astro";
import vercel from '@astrojs/vercel/serverless';

// https://astro.build/config
export default defineConfig({
  integrations: [
    react(),
    tailwind(),
    sentry({
      dsn: "https://9f83a9583e9568bef401c2148d4e1393@o4507503955083264.ingest.de.sentry.io/4507503956983888",
      sourceMapsUploadOptions: {
        project: "javascript-astro",
        authToken: process.env.SENTRY_AUTH_TOKEN,
      },
    }),
  ],
  output: 'server',
  adapter: vercel({
    webAnalytics: { enabled: true }
  }),
});

