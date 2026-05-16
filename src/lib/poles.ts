import { getCollection, render, type CollectionEntry } from "astro:content";
import { getStrings, type Locale } from "~/i18n/strings";

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

/** Per-pôle hero image source. The `alt` is resolved at call time from
 *  the active locale (see strings.ts → images.poles). */
const fallbackSrc: Record<string, string> = {
  "immigration-services":
    "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=900&q=80",
  "studios-tv": "/images/uploads/poles/studios-tv.png",
  "fermiers":
    "https://images.unsplash.com/photo-1592982537447-6f2b6c0a6cb7?auto=format&fit=crop&w=900&q=80",
  "technology-innovation": "/images/uploads/poles/technology-innovation.png",
  "academy": "/images/uploads/poles/academy.png",
  "business-investissements": "/images/uploads/poles/business-investissements.png",
};

function fallbackImage(slug: string, locale: Locale, nom: string) {
  const t = getStrings(locale);
  const alt =
    (t.images.poles as Record<string, string>)[slug] ?? nom;
  return {
    src:
      fallbackSrc[slug] ??
      "https://images.unsplash.com/photo-1531384441138-2736e62e0919?auto=format&fit=crop&w=900&q=80",
    alt,
  };
}

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
export async function loadPoles(locale: Locale = "fr"): Promise<PoleView[]> {
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
      image: fallbackImage(slug, locale, entry.data.nom),
    };
  });
}

/** Load a single pôle by slug + locale, with FR fallback when the localised
 *  file is missing. Returns the entry, its position index and image. */
export async function loadPole(slug: PoleSlug, locale: Locale = "fr") {
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
    image: fallbackImage(slug, locale, entry.data.nom),
    render: () => render(entry),
  };
}
