import { getCollection, type CollectionEntry } from "astro:content";
import type { Locale } from "~/i18n/strings";

export type PageEntry = CollectionEntry<"pages">;

/** Resolve a static page (identified by baseSlug) for a given locale,
 *  with FR as fallback when a localised file is missing. */
export async function loadPage(
  baseSlug: string,
  locale: Locale = "fr",
): Promise<PageEntry | null> {
  const all = await getCollection("pages");
  const matches = all.filter(
    (e) => (e.data.baseSlug ?? e.id.replace(/\.(fr|de|en)$/, "")) === baseSlug,
  );
  const target = matches.find((e) => e.id.endsWith(`.${locale}`));
  const fr = matches.find((e) => e.id.endsWith(".fr"));
  return target ?? fr ?? matches[0] ?? null;
}
