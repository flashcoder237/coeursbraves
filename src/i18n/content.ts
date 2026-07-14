// Lecture des collections de contenu par langue, avec repli sur le français.
import { getCollection, type CollectionEntry } from "astro:content";
import { defaultLang, type Lang } from "./ui";

type JournalEntry = CollectionEntry<"journal">;

// « fr/mon-article » -> { lang: "fr", slug: "mon-article" }
export function parseId(id: string): { slug: string; lang: string } {
  const i = id.indexOf("/");
  if (i === -1) return { slug: id, lang: defaultLang };
  return { lang: id.slice(0, i), slug: id.slice(i + 1) };
}

// Toutes les entrées du journal, une par slug, dans la langue demandée (repli FR).
export async function getJournal(lang: Lang) {
  const all = await getCollection("journal");
  const bySlug = new Map<string, Record<string, JournalEntry>>();
  for (const e of all) {
    const { slug, lang: l } = parseId(e.id);
    if (!bySlug.has(slug)) bySlug.set(slug, {});
    bySlug.get(slug)![l] = e;
  }
  const items: { slug: string; entry: JournalEntry; data: JournalEntry["data"] }[] = [];
  for (const [slug, byLang] of bySlug) {
    const entry = byLang[lang] ?? byLang[defaultLang] ?? Object.values(byLang)[0];
    if (entry) items.push({ slug, entry, data: entry.data });
  }
  return items.sort((a, b) => b.data.iso.localeCompare(a.data.iso));
}

// Une entrée précise (slug + langue, repli FR).
export async function getArticle(slug: string, lang: Lang) {
  const all = await getCollection("journal");
  const byId = (l: string) => all.find((e) => e.id === `${l}/${slug}`);
  return byId(lang) ?? byId(defaultLang) ?? all.find((e) => parseId(e.id).slug === slug) ?? null;
}

// Liste unique des slugs (pour getStaticPaths).
export async function getJournalSlugs(): Promise<string[]> {
  const all = await getCollection("journal");
  return [...new Set(all.map((e) => parseId(e.id).slug))];
}

// --- Générique : une entrée par slug dans la langue demandée (repli FR) ---
async function localizedCollection<C extends "events" | "team">(name: C, lang: Lang) {
  const all = await getCollection(name);
  const bySlug = new Map<string, Record<string, (typeof all)[number]>>();
  for (const e of all) {
    const { slug, lang: l } = parseId(e.id);
    if (!bySlug.has(slug)) bySlug.set(slug, {});
    bySlug.get(slug)![l] = e;
  }
  const items: { slug: string; entry: (typeof all)[number]; data: (typeof all)[number]["data"] }[] = [];
  for (const [slug, byLang] of bySlug) {
    const entry = byLang[lang] ?? byLang[defaultLang] ?? Object.values(byLang)[0];
    if (entry) items.push({ slug, entry, data: entry.data });
  }
  return items;
}

export async function getEvents(lang: Lang) {
  const items = await localizedCollection("events", lang);
  return items.sort((a, b) => a.data.iso.localeCompare(b.data.iso));
}

export async function getTeam(lang: Lang) {
  const items = await localizedCollection("team", lang);
  return items.sort((a, b) => (a.data.order ?? 0) - (b.data.order ?? 0));
}
