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
    hero: { kicker: "Notre écosystème", title: "Un écosystème au service du développement", subtitle: "Bien plus qu'une association : plusieurs pôles complémentaires qui collaborent pour accompagner les personnes et soutenir les projets." },
    poles: { eyebrow: "Nos pôles", title: "Six initiatives, une même", strong: "ambition.", label: "Pôle" },
    methode: { eyebrow: "Notre méthode", title: "Une méthode fondée sur", accent: "l'action.", subtitle: "Chaque projet suit une démarche structurée, cohérente et centrée sur les besoins réels." },
    engagements: { eyebrow: "Nos engagements", title: "Ce à quoi nous nous", strong: "engageons.", lead: "Nos engagements ne sont pas de simples principes : ils constituent le fondement de notre identité et orientent chacune de nos décisions.", cta: "Construire avec nous" },
  },
  en: {
    hero: { kicker: "Our ecosystem", title: "An ecosystem serving development", subtitle: "Much more than an association: several complementary hubs working together to support people and back their projects." },
    poles: { eyebrow: "Our hubs", title: "Six initiatives, one shared", strong: "ambition.", label: "Hub" },
    methode: { eyebrow: "Our method", title: "A method rooted in", accent: "action.", subtitle: "Every project follows a structured, coherent approach centred on real needs." },
    engagements: { eyebrow: "Our commitments", title: "What we", strong: "commit to.", lead: "Our commitments are not mere principles: they are the foundation of our identity and guide every decision we make.", cta: "Build with us" },
  },
  de: {
    hero: { kicker: "Unser Ökosystem", title: "Ein Ökosystem im Dienst der Entwicklung", subtitle: "Weit mehr als ein Verein: mehrere ergänzende Bereiche, die zusammenarbeiten, um Menschen zu begleiten und Projekte zu fördern." },
    poles: { eyebrow: "Unsere Bereiche", title: "Sechs Initiativen, ein gemeinsames", strong: "Ziel.", label: "Bereich" },
    methode: { eyebrow: "Unsere Methode", title: "Eine Methode, die auf", accent: "Handeln beruht.", subtitle: "Jedes Projekt folgt einem strukturierten, kohärenten Ansatz, der sich an den tatsächlichen Bedürfnissen orientiert." },
    engagements: { eyebrow: "Unsere Grundsätze", title: "Wozu wir uns", strong: "verpflichten.", lead: "Unsere Grundsätze sind keine bloßen Prinzipien: Sie bilden das Fundament unserer Identität und leiten jede unserer Entscheidungen.", cta: "Mit uns gestalten" },
  },
};

export const getEco = (lang: Lang): EcoContent => content[lang] ?? content.fr;
