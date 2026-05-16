import { getCollection, type CollectionEntry } from "astro:content";
import type { Locale } from "~/i18n/strings";

type LocalisedEntry = CollectionEntry<"branches" | "partners">;

function pickLocalised<T extends LocalisedEntry>(
  entries: T[],
  locale: Locale,
): T[] {
  const grouped = new Map<string, T[]>();
  for (const entry of entries) {
    const key = entry.data.slug;
    const arr = grouped.get(key) ?? [];
    arr.push(entry);
    grouped.set(key, arr);
  }
  const out: T[] = [];
  for (const [, group] of grouped) {
    const match =
      group.find((e) => e.id.endsWith(`.${locale}`)) ??
      group.find((e) => e.id.endsWith(`.fr`)) ??
      group[0];
    if (match) out.push(match);
  }
  return out.sort((a, b) => a.data.ordre - b.data.ordre);
}

export async function loadBranches(locale: Locale = "fr") {
  const all = await getCollection("branches");
  return pickLocalised(all, locale);
}

export async function loadPartners(locale: Locale = "fr") {
  const all = await getCollection("partners");
  return pickLocalised(all, locale);
}
