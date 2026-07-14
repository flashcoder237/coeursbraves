// Vercel Edge Middleware — détection de langue à la première visite.
// S'exécute AU BORD (avant l'affichage), lit l'en-tête « Accept-Language » du
// navigateur et redirige vers /en/ ou /de/ si l'internaute préfère ces langues.
// Le français reste le repli (racine). Le choix est mémorisé dans un cookie
// (cb-lang) : une fois posé — par ici ou par le sélecteur de langue — plus
// aucune redirection automatique, le choix de l'internaute prime.
//
// ⚠️ Ne s'exécute que sur Vercel (pas en `astro dev` / build local).

export const config = {
  // Pages uniquement : on exclut assets, admin, api et tout fichier (avec extension).
  matcher: ["/((?!_astro|admin|api|images|favicon|robots|sitemap|.*\\.).*)"],
};

const LOCALES = ["fr", "en", "de"];
const DEFAULT = "fr";

function pickLocale(header: string | null): string {
  if (!header) return DEFAULT;
  const prefs = header
    .split(",")
    .map((part) => {
      const [tag, q] = part.trim().split(";q=");
      return { tag: tag.toLowerCase().split("-")[0], q: q ? parseFloat(q) : 1 };
    })
    .sort((a, b) => b.q - a.q);
  for (const { tag } of prefs) if (LOCALES.includes(tag)) return tag;
  return DEFAULT;
}

export default function middleware(request: Request): Response | undefined {
  const url = new URL(request.url);
  const { pathname } = url;

  // Déjà sur une version préfixée → ne rien faire.
  if (/^\/(en|de)(\/|$)/.test(pathname)) return;

  // Choix déjà mémorisé (cookie ou sélecteur manuel) → on respecte.
  const cookie = request.headers.get("cookie") || "";
  if (/(?:^|;\s*)cb-lang=/.test(cookie)) return;

  const lang = pickLocale(request.headers.get("accept-language"));
  if (lang === DEFAULT) return; // français : on reste à la racine.

  // Redirige vers la version préfixée, en conservant le chemin et la query.
  const target = new URL(`/${lang}${pathname}`, url);
  target.search = url.search;

  const res = new Response(null, { status: 307, headers: { Location: target.toString() } });
  res.headers.append("Set-Cookie", `cb-lang=${lang}; Path=/; Max-Age=31536000; SameSite=Lax`);
  return res;
}
