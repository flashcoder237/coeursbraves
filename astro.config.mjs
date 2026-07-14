// @ts-check
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";

// URL du site utilisée pour les liens absolus (canonical, Open Graph, sitemap).
// Elle suit automatiquement le domaine réel du déploiement, sinon coeursbraves.com.
//  - PUBLIC_SITE_URL : override manuel (ex. pour un tunnel ngrok en test)
//  - URL / DEPLOY_PRIME_URL : Netlify (prod / preview)
//  - VERCEL_URL : Vercel (sans protocole)
const SITE_URL =
  process.env.PUBLIC_SITE_URL ||
  process.env.URL ||
  process.env.DEPLOY_PRIME_URL ||
  (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : undefined) ||
  "https://coeursbraves.com";

// https://astro.build/config
export default defineConfig({
  site: SITE_URL,
  trailingSlash: "always",
  build: {
    format: "directory",
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
});
