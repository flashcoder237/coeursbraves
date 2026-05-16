import { getCollection, type CollectionEntry } from "astro:content";
import type { Locale } from "~/i18n/strings";

export type ArticleEntry = CollectionEntry<"articles">;

export type ArticleView = {
  id: string;
  baseSlug: string;
  titre: string;
  auteur: string;
  date: Date;
  categorie: ArticleEntry["data"]["categorie"];
  tags: string[];
  imageCouverture: string;
  extrait: string;
  accent: "green" | "red" | "ochre";
};

const accentByCategory: Record<string, ArticleView["accent"]> = {
  fermiers: "green",
  technology: "green",
  immigration: "ochre",
  business: "ochre",
  academy: "red",
  "studios-tv": "red",
  general: "ochre",
};

/** Load published articles for a locale, sorted newest-first.
 *  Falls back to FR when a translation is missing for a baseSlug. */
export async function loadArticles(
  locale: Locale = "fr",
  limit?: number,
): Promise<ArticleView[]> {
  const all = await getCollection(
    "articles",
    (entry) => entry.data.brouillon === false,
  );

  const grouped = new Map<string, ArticleEntry[]>();
  for (const entry of all) {
    const base = entry.data.baseSlug ?? entry.id.replace(/\.(fr|de|en)$/, "");
    const arr = grouped.get(base) ?? [];
    arr.push(entry);
    grouped.set(base, arr);
  }

  const picked: ArticleEntry[] = [];
  for (const [, entries] of grouped) {
    const match =
      entries.find((e) => e.id.endsWith(`.${locale}`)) ??
      entries.find((e) => e.id.endsWith(`.fr`)) ??
      entries[0];
    if (match) picked.push(match);
  }

  picked.sort((a, b) => b.data.date.getTime() - a.data.date.getTime());
  const sliced = typeof limit === "number" ? picked.slice(0, limit) : picked;

  return sliced.map((entry) => ({
    id: entry.id,
    baseSlug: entry.data.baseSlug ?? entry.id.replace(/\.(fr|de|en)$/, ""),
    titre: entry.data.titre,
    auteur: entry.data.auteur,
    date: entry.data.date,
    categorie: entry.data.categorie,
    tags: entry.data.tags ?? [],
    imageCouverture: entry.data.imageCouverture,
    extrait: entry.data.extrait,
    accent: accentByCategory[entry.data.categorie] ?? "ochre",
  }));
}

const monthsByLocale: Record<Locale, string[]> = {
  fr: [
    "JAN", "FÉV", "MARS", "AVR", "MAI", "JUIN",
    "JUIL", "AOÛT", "SEPT", "OCT", "NOV", "DÉC",
  ],
  en: [
    "JAN", "FEB", "MAR", "APR", "MAY", "JUN",
    "JUL", "AUG", "SEP", "OCT", "NOV", "DEC",
  ],
  de: [
    "JAN", "FEB", "MÄR", "APR", "MAI", "JUN",
    "JUL", "AUG", "SEP", "OKT", "NOV", "DEZ",
  ],
};

export function formatArticleDate(date: Date, locale: Locale = "fr"): string {
  const months = monthsByLocale[locale] ?? monthsByLocale.fr;
  const d = String(date.getDate()).padStart(2, "0");
  const m = months[date.getMonth()];
  const y = date.getFullYear();
  return `${d} ${m} ${y}`;
}

const categoryLabels: Record<Locale, Record<string, string>> = {
  fr: {
    fermiers: "Fermiers",
    "studios-tv": "Studios",
    business: "Affaires",
    immigration: "Immigration",
    technology: "Technologie",
    academy: "Academy",
    general: "Général",
  },
  en: {
    fermiers: "Farmers",
    "studios-tv": "Studios",
    business: "Business",
    immigration: "Immigration",
    technology: "Technology",
    academy: "Academy",
    general: "General",
  },
  de: {
    fermiers: "Landwirte",
    "studios-tv": "Studios",
    business: "Business",
    immigration: "Immigration",
    technology: "Technologie",
    academy: "Academy",
    general: "Allgemein",
  },
};

export function categoryLabel(
  category: ArticleView["categorie"],
  locale: Locale = "fr",
): string {
  return categoryLabels[locale]?.[category] ?? category;
}
