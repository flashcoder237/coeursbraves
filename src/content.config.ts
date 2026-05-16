import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

/* ================================================================
   Cœurs Braves — Schémas de contenu (édités via Decap CMS)
   ================================================================

   Convention multilingue : chaque entrée est suffixée par sa locale
   `<base-slug>.<fr|de|en>.md`. Le `data.locale` est dérivé de l'id
   de fichier dans les pages consommatrices.

   IMPORTANT : Astro `glob` loader applique github-slugger qui supprime
   les points par défaut. On utilise `generateId` pour préserver le
   suffixe locale.
   ================================================================ */

const generateLocaleId = ({ entry }: { entry: string }) =>
  entry.replace(/\.md$/, "").replace(/\\/g, "/");

/* Les 6 pôles stratégiques de Cœurs Braves */
const poleSlugs = [
  "immigration-services",
  "studios-tv",
  "fermiers",
  "technology-innovation",
  "academy",
  "business-investissements",
] as const;

const localeEnum = z.enum(["fr", "de", "en"]).optional();

const isUrlOrAbsolutePath = (s: string) =>
  s.startsWith("/") || /^https?:\/\//.test(s);

const mediaPath = z
  .string()
  .refine(isUrlOrAbsolutePath, "URL absolue (https://...) ou chemin /images/uploads/...");

const emptyToUndefined = (val: unknown) =>
  val === "" || val == null ? undefined : val;

const optionalMediaPath = z.preprocess(emptyToUndefined, mediaPath.optional());

/* Collection POLES — les 6 services stratégiques (non créables/supprimables) */
const poles = defineCollection({
  loader: glob({
    pattern: "**/*.md",
    base: "./src/content/poles",
    generateId: generateLocaleId,
  }),
  schema: z.object({
    nom: z.string(),
    slug: z.enum(poleSlugs),
    emoji: z.string().optional(),
    couleurHex: z
      .string()
      .regex(/^#[0-9A-Fa-f]{6}$/, "Hex color attendu (ex. #1FAB54)"),
    descriptionCourte: z.string().max(220),
    descriptionLongue: z.string(),
    services: z.array(z.string()).default([]),
    imageHero: optionalMediaPath,
    ordre: z.number().int().min(0).default(0),
    locale: localeEnum,
  }),
});

/* Collection PAGES — copy long localisé pour pages statiques.
   Une entrée par (page × locale) avec frontmatter flexible. */
const blockSchema = z.object({
  type: z.string(),
  title: z.string().optional(),
  eyebrow: z.string().optional(),
  body: z.string().optional(),
  cta: z
    .object({
      label: z.string(),
      href: z.string(),
    })
    .optional(),
  items: z
    .array(
      z.object({
        title: z.string().optional(),
        body: z.string().optional(),
        meta: z.string().optional(),
        href: z.string().optional(),
        image: z.string().optional(),
      })
    )
    .optional(),
});

const contactAudienceSchema = z.object({
  title: z.string(),
  body: z.string(),
  cta: z.string(),
  href: z.string(),
});

const contactOfficeSchema = z.object({
  city: z.string(),
  address: z.string(),
  phone: z.string().optional(),
});

const contactSchema = z
  .object({
    audiencesTitle: z.string(),
    audiences: z.array(contactAudienceSchema),
    coordsTitle: z.string(),
    headquarters: z.object({
      label: z.string(),
      lines: z.array(z.string()),
    }),
    offices: z.array(contactOfficeSchema),
    officeLabel: z.string().optional(),
    pressTitle: z.string(),
    pressBody: z.string(),
    pressEmail: z.string().email(),
  })
  .optional();

const pages = defineCollection({
  loader: glob({
    pattern: "**/*.md",
    base: "./src/content/pages",
    generateId: generateLocaleId,
  }),
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    intro: z.string().optional(),
    eyebrow: z.string().optional(),
    sections: z.record(z.any()).optional(),
    blocks: z.array(blockSchema).optional(),
    contact: contactSchema,
    baseSlug: z.string().optional(),
    locale: localeEnum,
  }),
});

/* Collection ARTICLES — blog / actualités */
const articles = defineCollection({
  loader: glob({
    pattern: "**/*.md",
    base: "./src/content/articles",
    generateId: generateLocaleId,
  }),
  schema: z.object({
    titre: z.string(),
    auteur: z.string(),
    date: z.coerce.date(),
    categorie: z.enum([
      "immigration",
      "studios-tv",
      "fermiers",
      "technology",
      "academy",
      "business",
      "general",
    ]),
    tags: z.array(z.string()).default([]),
    imageCouverture: mediaPath,
    extrait: z.string().max(280),
    brouillon: z.boolean().default(false),
    baseSlug: z.string().optional(),
    locale: localeEnum,
  }),
});

/* Collection COHORTS — cohortes Raffinerie (non i18n : noms de ville,
   statut et date sont neutres ; le libellé "Cohorte"/"Kohorte"/"Cohort"
   reste dans i18n/strings.ts pour rester traduisible.) */
const cohorts = defineCollection({
  loader: glob({
    pattern: "**/*.md",
    base: "./src/content/cohorts",
  }),
  schema: z.object({
    city: z.string(),
    index: z.string(),
    state: z.enum(["open", "closed", "soon"]),
    startDate: z.coerce.date().optional(),
    ordre: z.number().int().default(0),
  }),
});

/* Collection BRANCHES — sous-organisations de Cœurs Braves (Music,
   Association, Verein, etc.). Multilingue : i18n via suffixe locale. */
const branches = defineCollection({
  loader: glob({
    pattern: "**/*.md",
    base: "./src/content/branches",
    generateId: generateLocaleId,
  }),
  schema: z.object({
    nom: z.string(),
    slug: z.string(),
    type: z.enum(["association", "label", "verein", "apparel", "foundation", "media", "autre"]),
    pays: z.string().optional(),
    descriptionCourte: z.string().max(280),
    image: optionalMediaPath,
    url: z.string().url().optional(),
    ordre: z.number().int().default(0),
    locale: localeEnum,
  }),
});

/* Collection PARTNERS — partenaires externes (institutions, financiers,
   médias). Non i18n par défaut (nom de l'entité), description i18n via
   suffixe locale. */
const partners = defineCollection({
  loader: glob({
    pattern: "**/*.md",
    base: "./src/content/partners",
    generateId: generateLocaleId,
  }),
  schema: z.object({
    nom: z.string(),
    slug: z.string(),
    type: z.enum(["institutionnel", "financier", "media", "technologique", "academique", "ong"]),
    descriptionCourte: z.string().max(200).optional(),
    logo: optionalMediaPath,
    url: z.string().url().optional(),
    ordre: z.number().int().default(0),
    locale: localeEnum,
  }),
});

export const collections = {
  poles,
  pages,
  articles,
  cohorts,
  branches,
  partners,
};
