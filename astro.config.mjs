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
