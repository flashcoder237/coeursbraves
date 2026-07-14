// Collections de contenu éditées via le tableau de bord (/admin) et lues par Astro.
// Multilingue : un fichier par langue, nommé « {slug}.{lang}.md » (ex. mon-article.fr.md).
import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const journal = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/journal" }),
  schema: z.object({
    title: z.string(),
    category: z.string(),
    date: z.string(), // affichage (ex. « 12 janvier 2025 »)
    iso: z.string(), // tri / <time> (AAAA-MM-JJ)
    image: z.string(),
    excerpt: z.string(),
    source: z.string().optional(),
    gallery: z.array(z.object({ src: z.string(), alt: z.string() })).optional(),
  }),
});

const events = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/events" }),
  schema: z.object({
    title: z.string(),
    type: z.string(),
    iso: z.string(), // AAAA-MM-JJ
    time: z.string(),
    place: z.string(),
    city: z.string(),
    online: z.boolean().default(false),
    image: z.string(),
    excerpt: z.string(),
    registerUrl: z.string().optional(),
  }),
});

const team = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/team" }),
  schema: z.object({
    name: z.string(),
    alias: z.string().optional(),
    role: z.string(),
    photo: z.string().optional(),
    bio: z.string(),
    order: z.number().default(0),
  }),
});

export const collections = { journal, events, team };
