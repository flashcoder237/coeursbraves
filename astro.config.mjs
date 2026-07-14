// @ts-check
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";

// URL du site utilisée pour les liens absolus (canonical, Open Graph, sitemap).
// Elle suit automatiquement le domaine réel du déploiement, sinon coeursbraves.com.
//  - PUBLIC_SITE_URL : override manuel (ex. pour un tunnel ngrok en test)
//  - VERCEL_PROJECT_PRODUCTION_URL : Vercel — domaine de prod stable (coeursbraves.vercel.app,
//    puis coeursbraves.com automatiquement dès qu'il est ajouté comme domaine du projet)
//  - VERCEL_URL : Vercel — URL éphémère du déploiement (fallback)
//  - URL / DEPLOY_PRIME_URL : Netlify (prod / preview)
const withProtocol = (/** @type {string | undefined} */ u) =>
  u ? (u.startsWith("http") ? u : `https://${u}`) : undefined;
const SITE_URL =
  withProtocol(process.env.PUBLIC_SITE_URL) ||
  withProtocol(process.env.VERCEL_PROJECT_PRODUCTION_URL) ||
  withProtocol(process.env.VERCEL_URL) ||
  process.env.URL ||
  process.env.DEPLOY_PRIME_URL ||
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
