import type { Locale } from "~/i18n/strings";

/** Build a locale-aware URL. FR is the default and uses no prefix. */
export function localePath(path: string, locale: Locale = "fr"): string {
  const clean = path.startsWith("/") ? path : `/${path}`;
  if (locale === "fr") return clean.endsWith("/") ? clean : `${clean}/`;
  const withTrailing = clean.endsWith("/") ? clean : `${clean}/`;
  return `/${locale}${withTrailing}`;
}

export function poleUrl(slug: string, locale: Locale = "fr"): string {
  return localePath(`/poles/${slug}`, locale);
}
