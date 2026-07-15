// Contenu éditorial de la page « Notre écosystème » (FR/EN/DE).
import type { Lang } from "./ui";

interface EcoContent {
  hero: { kicker: string; title: string; subtitle: string };
  poles: { eyebrow: string; title: string; strong: string; label: string };
  methode: { eyebrow: string; title: string; accent: string; subtitle: string };
  engagements: { eyebrow: string; title: string; strong: string; lead: string; cta: string };
}

const content: Record<Lang, EcoContent> = {
  fr: {
    hero: { kicker: "Nos programmes", title: "Des actions concrètes au service des communautés", subtitle: "Cœurs Braves mène plusieurs programmes de solidarité pour nourrir, former, soigner et accompagner celles et ceux qui en ont le plus besoin." },
    poles: { eyebrow: "Nos programmes", title: "Cinq actions, une même", strong: "ambition.", label: "Programme" },
    methode: { eyebrow: "Notre méthode", title: "Une méthode fondée sur", accent: "l'action.", subtitle: "Chaque projet suit une démarche structurée, cohérente et centrée sur les besoins réels." },
    engagements: { eyebrow: "Nos engagements", title: "Ce à quoi nous nous", strong: "engageons.", lead: "Nos engagements ne sont pas de simples principes : ils constituent le fondement de notre identité et orientent chacune de nos décisions.", cta: "Construire avec nous" },
  },
  en: {
    hero: { kicker: "Our programmes", title: "Concrete actions serving communities", subtitle: "Cœurs Braves runs several solidarity programmes to feed, train, care for and support those who need it most." },
    poles: { eyebrow: "Our programmes", title: "Five actions, one shared", strong: "ambition.", label: "Programme" },
    methode: { eyebrow: "Our method", title: "A method rooted in", accent: "action.", subtitle: "Every project follows a structured, coherent approach centred on real needs." },
    engagements: { eyebrow: "Our commitments", title: "What we", strong: "commit to.", lead: "Our commitments are not mere principles: they are the foundation of our identity and guide every decision we make.", cta: "Build with us" },
  },
  de: {
    hero: { kicker: "Unsere Programme", title: "Konkrete Aktionen im Dienst der Gemeinschaften", subtitle: "Cœurs Braves führt mehrere solidarische Programme durch, um diejenigen zu ernähren, auszubilden, zu versorgen und zu begleiten, die es am dringendsten brauchen." },
    poles: { eyebrow: "Unsere Programme", title: "Fünf Aktionen, ein gemeinsames", strong: "Ziel.", label: "Programm" },
    methode: { eyebrow: "Unsere Methode", title: "Eine Methode, die auf", accent: "Handeln beruht.", subtitle: "Jedes Projekt folgt einem strukturierten, kohärenten Ansatz, der sich an den tatsächlichen Bedürfnissen orientiert." },
    engagements: { eyebrow: "Unsere Grundsätze", title: "Wozu wir uns", strong: "verpflichten.", lead: "Unsere Grundsätze sind keine bloßen Prinzipien: Sie bilden das Fundament unserer Identität und leiten jede unserer Entscheidungen.", cta: "Mit uns gestalten" },
  },
};

export const getEco = (lang: Lang): EcoContent => content[lang] ?? content.fr;
