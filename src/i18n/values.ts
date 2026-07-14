// Valeurs de l'association partagées entre pages (méthode d'impact, engagements).
import type { Lang } from "./ui";

const methode: Record<Lang, string[]> = {
  fr: ["Observer", "Comprendre", "Former", "Accompagner", "Connecter", "Développer", "Mesurer", "Améliorer"],
  en: ["Observe", "Understand", "Train", "Support", "Connect", "Grow", "Measure", "Improve"],
  de: ["Beobachten", "Verstehen", "Ausbilden", "Begleiten", "Vernetzen", "Entwickeln", "Messen", "Verbessern"],
};

const engagements: Record<Lang, string[]> = {
  fr: [
    "Placer l'humain au cœur de chaque décision.",
    "Favoriser l'inclusion et l'égalité des chances.",
    "Agir avec intégrité et transparence.",
    "Valoriser l'innovation au service du bien commun.",
    "Mesurer l'impact de nos actions.",
    "Créer des solutions durables plutôt que temporaires.",
    "Développer des partenariats fondés sur la confiance.",
  ],
  en: [
    "Put people at the heart of every decision.",
    "Foster inclusion and equal opportunity.",
    "Act with integrity and transparency.",
    "Champion innovation for the common good.",
    "Measure the impact of our actions.",
    "Create lasting solutions rather than temporary ones.",
    "Build partnerships based on trust.",
  ],
  de: [
    "Den Menschen in den Mittelpunkt jeder Entscheidung stellen.",
    "Inklusion und Chancengleichheit fördern.",
    "Mit Integrität und Transparenz handeln.",
    "Innovation für das Gemeinwohl fördern.",
    "Die Wirkung unseres Handelns messen.",
    "Nachhaltige statt kurzfristige Lösungen schaffen.",
    "Partnerschaften auf Vertrauensbasis aufbauen.",
  ],
};

export const getMethode = (lang: Lang) => methode[lang] ?? methode.fr;
export const getEngagements = (lang: Lang) => engagements[lang] ?? engagements.fr;
