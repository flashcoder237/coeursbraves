// Contenu éditorial de la page « Devenir partenaire » (FR/EN/DE).
import type { Lang } from "./ui";

interface Pair { t: string; d: string }
interface Type { title: string; text: string }
interface PartContent {
  hero: { kicker: string; title: string; subtitle: string };
  why: { eyebrow: string; title: string; strong: string; lead: string; contributions: string[] };
  collab: { eyebrow: string; title: string; strong: string; domaines: Pair[] };
  formats: { eyebrow: string; title: string; strong: string; types: Type[] };
  cta: { eyebrow: string; title: string; accent: string; lead: string; primary: string; secondary: string };
}

const content: Record<Lang, PartContent> = {
  fr: {
    hero: { kicker: "Devenir partenaire", title: "Les plus grands changements se construisent ensemble", subtitle: "En mettant en commun nos compétences, nos ressources et nos expériences, nous créons des solutions à fort impact." },
    why: { eyebrow: "Pourquoi un partenariat", title: "Un écosystème engagé pour les personnes et les", strong: "territoires.", lead: "Nos partenariats sont fondés sur une vision commune, la confiance et la recherche de résultats concrets. En collaborant avec nous, vous contribuez directement à un impact durable.", contributions: ["Développer les compétences des jeunes", "Accompagner les entrepreneurs", "Favoriser l'innovation", "Soutenir l'agriculture durable", "Promouvoir l'éducation et la formation", "Renforcer les initiatives communautaires", "Créer des emplois", "Générer un impact durable"] },
    collab: { eyebrow: "Collaborations", title: "Nos domaines de", strong: "collaboration.", domaines: [
      { t: "Développement des compétences", d: "Programmes de formation, ateliers, conférences et mentorat." },
      { t: "Entrepreneuriat", d: "Accompagnement des porteurs de projets, incubation et accélération." },
      { t: "Technologies et innovation", d: "Solutions numériques, projets technologiques et recherche appliquée." },
      { t: "Agriculture", d: "Projets agricoles, sécurité alimentaire et innovation rurale." },
      { t: "Santé communautaire", d: "Campagnes de sensibilisation, prévention et actions communautaires." },
      { t: "Éducation", d: "Apprentissage, orientation et accès aux compétences." },
      { t: "Investissement", d: "Mobilisation de ressources et soutien aux projets à fort impact." },
      { t: "Recherche & développement", d: "Études, expérimentations et innovation sociale." },
    ] },
    formats: { eyebrow: "Formats", title: "Les formes de", strong: "partenariat.", types: [
      { title: "Partenaire stratégique", text: "Construire ensemble des programmes de long terme et des initiatives structurantes." },
      { title: "Partenaire technique", text: "Mettre à disposition une expertise, des compétences ou un accompagnement spécialisé." },
      { title: "Partenaire académique", text: "Développer des formations, des recherches et des échanges de connaissances." },
      { title: "Partenaire financier", text: "Soutenir le financement de projets, de programmes ou d'infrastructures." },
      { title: "Partenaire institutionnel", text: "Développer des actions communes au service des communautés." },
      { title: "Partenaire média", text: "Valoriser les initiatives, sensibiliser le public et amplifier la portée de nos actions." },
    ] },
    cta: { eyebrow: "Construisons ensemble", title: "Des solutions à", accent: "fort impact.", lead: "Entreprise, fondation, université, institution, investisseur, incubateur, média ou expert : construisons ensemble des projets créateurs d'opportunités.", primary: "Contacter l'équipe Partenariats", secondary: "Découvrir le mécénat" },
  },
  en: {
    hero: { kicker: "Become a partner", title: "The greatest changes are built together", subtitle: "By pooling our skills, resources and experience, we create high-impact solutions." },
    why: { eyebrow: "Why partner with us", title: "An ecosystem committed to people and", strong: "territories.", lead: "Our partnerships are built on a shared vision, trust and the pursuit of concrete results. By working with us, you contribute directly to lasting impact.", contributions: ["Develop young people's skills", "Support entrepreneurs", "Foster innovation", "Support sustainable agriculture", "Promote education and training", "Strengthen community initiatives", "Create jobs", "Generate lasting impact"] },
    collab: { eyebrow: "Collaborations", title: "Our areas of", strong: "collaboration.", domaines: [
      { t: "Skills development", d: "Training programmes, workshops, conferences and mentoring." },
      { t: "Entrepreneurship", d: "Support for project leaders, incubation and acceleration." },
      { t: "Technology and innovation", d: "Digital solutions, technology projects and applied research." },
      { t: "Agriculture", d: "Farming projects, food security and rural innovation." },
      { t: "Community health", d: "Awareness campaigns, prevention and community action." },
      { t: "Education", d: "Learning, guidance and access to skills." },
      { t: "Investment", d: "Mobilising resources and supporting high-impact projects." },
      { t: "Research & development", d: "Studies, experimentation and social innovation." },
    ] },
    formats: { eyebrow: "Formats", title: "Forms of", strong: "partnership.", types: [
      { title: "Strategic partner", text: "Build long-term programmes and structuring initiatives together." },
      { title: "Technical partner", text: "Provide expertise, skills or specialised support." },
      { title: "Academic partner", text: "Develop training, research and knowledge exchange." },
      { title: "Financial partner", text: "Support the funding of projects, programmes or infrastructure." },
      { title: "Institutional partner", text: "Develop joint actions serving communities." },
      { title: "Media partner", text: "Showcase initiatives, raise awareness and amplify our reach." },
    ] },
    cta: { eyebrow: "Let's build together", title: "High-impact", accent: "solutions.", lead: "Company, foundation, university, institution, investor, incubator, media or expert: let's build opportunity-creating projects together.", primary: "Contact the Partnerships team", secondary: "Discover patronage" },
  },
  de: {
    hero: { kicker: "Partner werden", title: "Die größten Veränderungen entstehen gemeinsam", subtitle: "Indem wir unsere Kompetenzen, Ressourcen und Erfahrungen bündeln, schaffen wir wirkungsvolle Lösungen." },
    why: { eyebrow: "Warum eine Partnerschaft", title: "Ein Ökosystem im Einsatz für Menschen und", strong: "Regionen.", lead: "Unsere Partnerschaften beruhen auf einer gemeinsamen Vision, Vertrauen und dem Streben nach konkreten Ergebnissen. Durch die Zusammenarbeit tragen Sie unmittelbar zu nachhaltiger Wirkung bei.", contributions: ["Kompetenzen junger Menschen entwickeln", "Unternehmer begleiten", "Innovation fördern", "Nachhaltige Landwirtschaft unterstützen", "Bildung und Ausbildung fördern", "Gemeinschaftsinitiativen stärken", "Arbeitsplätze schaffen", "Nachhaltige Wirkung erzeugen"] },
    collab: { eyebrow: "Zusammenarbeit", title: "Unsere Felder der", strong: "Zusammenarbeit.", domaines: [
      { t: "Kompetenzentwicklung", d: "Ausbildungsprogramme, Workshops, Konferenzen und Mentoring." },
      { t: "Unternehmertum", d: "Begleitung von Projektträgern, Inkubation und Beschleunigung." },
      { t: "Technologie und Innovation", d: "Digitale Lösungen, Technologieprojekte und angewandte Forschung." },
      { t: "Landwirtschaft", d: "Landwirtschaftsprojekte, Ernährungssicherheit und ländliche Innovation." },
      { t: "Gemeindegesundheit", d: "Sensibilisierungskampagnen, Prävention und gemeinschaftliche Aktionen." },
      { t: "Bildung", d: "Lernen, Orientierung und Zugang zu Kompetenzen." },
      { t: "Investition", d: "Mobilisierung von Ressourcen und Förderung wirkungsvoller Projekte." },
      { t: "Forschung & Entwicklung", d: "Studien, Experimente und soziale Innovation." },
    ] },
    formats: { eyebrow: "Formate", title: "Formen der", strong: "Partnerschaft.", types: [
      { title: "Strategischer Partner", text: "Gemeinsam langfristige Programme und strukturierende Initiativen aufbauen." },
      { title: "Technischer Partner", text: "Fachwissen, Kompetenzen oder spezialisierte Begleitung bereitstellen." },
      { title: "Akademischer Partner", text: "Ausbildung, Forschung und Wissensaustausch entwickeln." },
      { title: "Finanzieller Partner", text: "Die Finanzierung von Projekten, Programmen oder Infrastruktur unterstützen." },
      { title: "Institutioneller Partner", text: "Gemeinsame Aktionen im Dienst der Gemeinschaften entwickeln." },
      { title: "Medienpartner", text: "Initiativen sichtbar machen, sensibilisieren und unsere Reichweite verstärken." },
    ] },
    cta: { eyebrow: "Lassen Sie uns gemeinsam gestalten", title: "Wirkungsvolle", accent: "Lösungen.", lead: "Unternehmen, Stiftung, Universität, Institution, Investor, Inkubator, Medium oder Experte: Lassen Sie uns gemeinsam Projekte schaffen, die Chancen eröffnen.", primary: "Das Partnerschaftsteam kontaktieren", secondary: "Mäzenatentum entdecken" },
  },
};

export const getPartners = (lang: Lang): PartContent => content[lang] ?? content.fr;
