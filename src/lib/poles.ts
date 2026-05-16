import { getCollection, render, type CollectionEntry } from "astro:content";

export type PoleEntry = CollectionEntry<"poles">;
export const POLE_SLUGS = [
  "immigration-services",
  "studios-tv",
  "fermiers",
  "technology-innovation",
  "academy",
  "business-investissements",
] as const;
export type PoleSlug = (typeof POLE_SLUGS)[number];

/** Example online photography per pôle.
 *  Content authored in `src/content/poles/*.md` doesn't have an `imageHero`
 *  yet — these placeholders mirror the artifact's visual intent until the
 *  CMS team supplies real assets. Each URL points to Unsplash (CDN-served). */
const fallbackImages: Record<string, { src: string; alt: string }> = {
  "immigration-services": {
    src: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=900&q=80",
    alt: "Voyageurs dans un hall international moderne",
  },
  "studios-tv": {
    src: "https://images.unsplash.com/photo-1598899134739-24c46f58b8c0?auto=format&fit=crop&w=900&q=80",
    alt: "Plateau de tournage avec éclairage cinéma",
  },
  "fermiers": {
    src: "https://images.unsplash.com/photo-1592982537447-6f2b6c0a6cb7?auto=format&fit=crop&w=900&q=80",
    alt: "Agriculteur dans un champ moderne",
  },
  "technology-innovation": {
    src: "https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&w=900&q=80",
    alt: "Programmeuse au travail dans un espace lumineux",
  },
  "academy": {
    src: "https://images.unsplash.com/photo-1542596594-649edbc13630?auto=format&fit=crop&w=900&q=80",
    alt: "Étudiante en formation",
  },
  "business-investissements": {
    src: "https://images.unsplash.com/photo-1573164574572-cb89e39749b4?auto=format&fit=crop&w=900&q=80",
    alt: "Réunion d’affaires contemporaine",
  },
};

const ACCENT_BY_INDEX = ["ochre", "red", "green", "ochre", "red", "green"] as const;

export type PoleView = {
  id: string;
  slug: string;
  index: string;
  accent: (typeof ACCENT_BY_INDEX)[number];
  nom: string;
  emoji: string;
  descriptionCourte: string;
  services: string[];
  image: { src: string; alt: string };
};

/** Load + sort the 6 pôles for a given locale. Falls back to FR when an
 *  entry isn't authored for the target locale (matches Astro's i18n fallback). */
export async function loadPoles(locale: string = "fr"): Promise<PoleView[]> {
  const all = await getCollection("poles");

  const byLocale = (loc: string) =>
    all.filter((entry) => entry.id.endsWith(`.${loc}`));

  let scoped = byLocale(locale);
  if (scoped.length < 6) scoped = byLocale("fr");

  scoped.sort((a, b) => a.data.ordre - b.data.ordre);

  return scoped.slice(0, 6).map((entry, i) => {
    const slug = entry.data.slug;
    return {
      id: entry.id,
      slug,
      index: String(i + 1).padStart(2, "0"),
      accent: ACCENT_BY_INDEX[i] ?? "ochre",
      nom: entry.data.nom,
      emoji: entry.data.emoji ?? "",
      descriptionCourte: entry.data.descriptionCourte,
      services: entry.data.services.slice(0, 4),
      image: fallbackImages[slug] ?? {
        src: "https://images.unsplash.com/photo-1531384441138-2736e62e0919?auto=format&fit=crop&w=900&q=80",
        alt: entry.data.nom,
      },
    };
  });
}

/** Load a single pôle by slug + locale, with FR fallback when the localised
 *  file is missing. Returns the entry, its position index and image. */
export async function loadPole(slug: PoleSlug, locale: string = "fr") {
  const all = await getCollection("poles");
  const localised = all.find((e) => e.id === `${slug}.${locale}`);
  const fr = all.find((e) => e.id === `${slug}.fr`);
  const entry = localised ?? fr;
  if (!entry) return null;

  const sorted = [...all]
    .filter((e) => e.id.endsWith(".fr"))
    .sort((a, b) => a.data.ordre - b.data.ordre);
  const i = sorted.findIndex((e) => e.data.slug === slug);
  const accent = ACCENT_BY_INDEX[i] ?? "ochre";

  return {
    entry,
    index: String(i + 1).padStart(2, "0"),
    accent,
    image: fallbackImages[slug] ?? {
      src: "https://images.unsplash.com/photo-1531384441138-2736e62e0919?auto=format&fit=crop&w=1600&q=80",
      alt: entry.data.nom,
    },
    render: () => render(entry),
  };
}
