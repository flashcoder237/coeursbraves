// @ts-check
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  site: "https://coeurs-braves.com",
  trailingSlash: "always",
  build: {
    format: "directory",
  },
  /* i18n trilingue (FR/DE/EN). FR sans préfixe, DE et EN avec préfixe.
     fallbackType: "rewrite" → /de/foo/ rend src/pages/foo.astro avec
     Astro.currentLocale === "de" (au lieu d'un redirect HTML). */
  i18n: {
    defaultLocale: "fr",
    locales: ["fr", "de", "en"],
    routing: {
      prefixDefaultLocale: false,
      redirectToDefaultLocale: false,
      fallbackType: "rewrite",
    },
    fallback: {
      de: "fr",
      en: "fr",
    },
  },
  integrations: [sitemap()],
  vite: {
    plugins: [/** @type {any} */ (tailwindcss())],
    server: {
      allowedHosts: [
        ".ngrok-free.app",
        ".ngrok.io",
        ".ngrok.app",
        ".trycloudflare.com",
        ".loca.lt",
      ],
    },
  },
  experimental: {
    clientPrerender: true,
  },
});
