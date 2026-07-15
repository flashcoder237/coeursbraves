// Contenu éditorial de la page « Soutenir » (FR/EN/DE), y compris le widget de don.
import type { Lang } from "./ui";

interface Pair { t: string; d: string }
interface SoutenirContent {
  hero: { kicker: string; title: string; subtitle: string };
  why: { eyebrow: string; title: string; strong: string; lead: string; leadStrong: string; points: string[] };
  widget: {
    title: string; campaignTitle: string; goalLabel: string; donorsLabel: string;
    onetime: string; monthly: string; otherAmount: string; donatePrefix: string; perMonth: string;
    secure: string; impactOnce: string; impactMonthly: string; soonNote: string;
    impacts: Record<number, string>; defaultImpact: string;
  };
  impact: { eyebrow: string; title: string; strong: string; items: Pair[] };
  modes: { eyebrow: string; title: string; strong: string; items: Pair[] };
  transparency: { eyebrow: string; title: string; accent: string; lead: string; allocTitle: string; allocLabels: string[]; allocNote: string; gouvernance: string[] };
  momo: { eyebrow: string; title: string; strong: string; text: string; holder: string; hint: string };
  cta: { text: string; brand: string; donate: string; contact: string };
}

const content: Record<Lang, SoutenirContent> = {
  fr: {
    hero: { kicker: "Soutenir notre mission", title: "Chaque contribution ouvre une nouvelle opportunité", subtitle: "Investir dans une personne, c'est investir dans l'avenir." },
    why: { eyebrow: "Votre soutien", title: "Pourquoi votre soutien est", strong: "essentiel.", lead: "Chez Cœurs Braves, le développement durable commence par l'investissement dans le potentiel humain. Nous mobilisons des ressources pour construire des solutions durables.", leadStrong: "Chaque geste compte.", points: ["Former des jeunes et développer leurs compétences.", "Accompagner les entrepreneurs dans la création de leurs projets.", "Soutenir les initiatives agricoles et génératrices de revenus.", "Développer des programmes d'innovation et de transformation numérique.", "Organiser des actions communautaires pour les plus vulnérables."] },
    widget: {
      title: "Faire un don", campaignTitle: "Équiper le prochain Technology Center", goalLabel: "objectif", donorsLabel: "donateurs",
      onetime: "Ponctuel", monthly: "Mensuel", otherAmount: "Autre montant", donatePrefix: "Faire un don de", perMonth: "/mois",
      secure: "Paiement 100 % sécurisé", impactOnce: "Votre don finance {}.", impactMonthly: "Chaque mois, vous financez {}.",
      soonNote: "Le paiement en ligne arrive très bientôt. En attendant, écrivez-nous pour faire un don — merci de votre soutien.",
      impacts: { 25: "un kit pédagogique pour un·e apprenant·e", 50: "un mois d'accompagnement entrepreneurial", 100: "une session de formation pour un petit groupe", 250: "le lancement d'un micro-projet agricole" },
      defaultImpact: "de nouvelles opportunités pour la communauté",
    },
    impact: { eyebrow: "Votre impact", title: "Ce que votre contribution rend", strong: "possible.", items: [
      { t: "Former", d: "Développer les compétences professionnelles et entrepreneuriales." },
      { t: "Accompagner", d: "Offrir un mentorat, des conseils et un suivi personnalisé." },
      { t: "Innover", d: "Créer des solutions technologiques au service des communautés." },
      { t: "Entreprendre", d: "Soutenir les porteurs de projets et favoriser la création d'emplois." },
      { t: "Nourrir", d: "Développer des initiatives agricoles innovantes." },
      { t: "Mobiliser", d: "Créer des actions collectives qui renforcent les communautés." },
    ] },
    modes: { eyebrow: "Comment donner", title: "Les différentes façons de", strong: "soutenir.", items: [
      { t: "Faire un don ponctuel", d: "Une contribution unique pour soutenir les actions prioritaires de l'association." },
      { t: "Devenir donateur régulier", d: "Un soutien mensuel pour accompagner durablement le développement de nos programmes." },
      { t: "Soutenir un programme", d: "Affectez votre contribution à un domaine qui vous tient à cœur : éducation, agriculture, innovation…" },
      { t: "Devenir mécène", d: "Entreprises, fondations et philanthropes accompagnent des projets structurants à fort impact." },
      { t: "Faire un don en nature", d: "Matériel informatique, équipements, fournitures, ressources agricoles, espaces ou compétences." },
      { t: "Financer un projet", d: "Soutenez directement le lancement d'une initiative créatrice de valeur." },
    ] },
    transparency: { eyebrow: "Transparence", title: "La confiance au cœur de notre", accent: "engagement.", lead: "Nous nous engageons à gérer les ressources qui nous sont confiées avec rigueur, responsabilité et transparence.", allocTitle: "Où va votre argent", allocLabels: ["Programmes & actions de terrain", "Fonctionnement de l'association", "Collecte & communication"], allocNote: "Répartition indicative — chiffres à confirmer dans le rapport d'activité.", gouvernance: ["Une gestion responsable des fonds", "Un suivi des projets financés", "Des indicateurs d'impact mesurables", "Des rapports d'activité réguliers", "Une amélioration continue de nos pratiques"] },
    momo: { eyebrow: "Mobile Money", title: "Donner par", strong: "Mobile Money.", text: "Au Cameroun, soutenez-nous en quelques secondes via Orange Money ou MTN Mobile Money.", holder: "Au nom de", hint: "Envoyez votre don au numéro indiqué, puis conservez le SMS de confirmation." },
    cta: { text: "Un investissement dans l'humain produit des bénéfices qui se transmettent de", brand: "génération en génération.", donate: "Faire un don", contact: "Contacter l'équipe" },
  },
  en: {
    hero: { kicker: "Support our mission", title: "Every contribution opens a new opportunity", subtitle: "Investing in a person means investing in the future." },
    why: { eyebrow: "Your support", title: "Why your support is", strong: "essential.", lead: "At Cœurs Braves, sustainable development begins with investing in human potential. We mobilise resources to build lasting solutions.", leadStrong: "Every gesture counts.", points: ["Train young people and develop their skills.", "Support entrepreneurs in building their projects.", "Back farming and income-generating initiatives.", "Develop innovation and digital transformation programmes.", "Organise community action for the most vulnerable."] },
    widget: {
      title: "Make a donation", campaignTitle: "Equip the next Technology Center", goalLabel: "goal", donorsLabel: "donors",
      onetime: "One-off", monthly: "Monthly", otherAmount: "Other amount", donatePrefix: "Donate", perMonth: "/month",
      secure: "100% secure payment", impactOnce: "Your donation funds {}.", impactMonthly: "Each month, you fund {}.",
      soonNote: "Online payment is coming very soon. In the meantime, write to us to make a donation — thank you for your support.",
      impacts: { 25: "a learning kit for one student", 50: "a month of entrepreneurial support", 100: "a training session for a small group", 250: "the launch of a small farming project" },
      defaultImpact: "new opportunities for the community",
    },
    impact: { eyebrow: "Your impact", title: "What your contribution makes", strong: "possible.", items: [
      { t: "Train", d: "Develop professional and entrepreneurial skills." },
      { t: "Support", d: "Offer mentoring, advice and personalised follow-up." },
      { t: "Innovate", d: "Create technological solutions serving communities." },
      { t: "Build ventures", d: "Support project leaders and foster job creation." },
      { t: "Feed", d: "Develop innovative farming initiatives." },
      { t: "Mobilise", d: "Create collective action that strengthens communities." },
    ] },
    modes: { eyebrow: "How to give", title: "The different ways to", strong: "support.", items: [
      { t: "Make a one-off donation", d: "A single contribution to support the association's priority actions." },
      { t: "Become a regular donor", d: "Monthly support to sustainably back the growth of our programmes." },
      { t: "Support a programme", d: "Direct your contribution to a field close to your heart: education, agriculture, innovation…" },
      { t: "Become a patron", d: "Companies, foundations and philanthropists back structuring, high-impact projects." },
      { t: "Give in kind", d: "IT equipment, supplies, farming resources, spaces or skills." },
      { t: "Fund a project", d: "Directly support the launch of a value-creating initiative." },
    ] },
    transparency: { eyebrow: "Transparency", title: "Trust at the heart of our", accent: "commitment.", lead: "We are committed to managing the resources entrusted to us with rigour, responsibility and transparency.", allocTitle: "Where your money goes", allocLabels: ["Programmes & fieldwork", "Association running costs", "Fundraising & communication"], allocNote: "Indicative breakdown — figures to be confirmed in the activity report.", gouvernance: ["Responsible management of funds", "Monitoring of funded projects", "Measurable impact indicators", "Regular activity reports", "Continuous improvement of our practices"] },
    momo: { eyebrow: "Mobile Money", title: "Give with", strong: "Mobile Money.", text: "In Cameroon, support us in seconds via Orange Money or MTN Mobile Money.", holder: "In the name of", hint: "Send your donation to the number shown, then keep the confirmation SMS." },
    cta: { text: "An investment in people produces benefits passed on from", brand: "generation to generation.", donate: "Donate", contact: "Contact the team" },
  },
  de: {
    hero: { kicker: "Unsere Mission unterstützen", title: "Jeder Beitrag eröffnet eine neue Chance", subtitle: "In einen Menschen zu investieren heißt, in die Zukunft zu investieren." },
    why: { eyebrow: "Ihre Unterstützung", title: "Warum Ihre Unterstützung", strong: "entscheidend ist.", lead: "Bei Cœurs Braves beginnt nachhaltige Entwicklung mit der Investition in menschliches Potenzial. Wir mobilisieren Ressourcen, um dauerhafte Lösungen zu schaffen.", leadStrong: "Jede Geste zählt.", points: ["Junge Menschen ausbilden und ihre Kompetenzen entwickeln.", "Unternehmer beim Aufbau ihrer Projekte begleiten.", "Landwirtschaftliche und einkommensschaffende Initiativen fördern.", "Programme für Innovation und digitale Transformation entwickeln.", "Gemeinschaftliche Aktionen für die Schwächsten organisieren."] },
    widget: {
      title: "Spenden", campaignTitle: "Das nächste Technology Center ausstatten", goalLabel: "Ziel", donorsLabel: "Spender",
      onetime: "Einmalig", monthly: "Monatlich", otherAmount: "Anderer Betrag", donatePrefix: "Spenden Sie", perMonth: "/Monat",
      secure: "100 % sichere Zahlung", impactOnce: "Ihre Spende finanziert {}.", impactMonthly: "Jeden Monat finanzieren Sie {}.",
      soonNote: "Die Online-Zahlung kommt sehr bald. Schreiben Sie uns in der Zwischenzeit, um zu spenden — vielen Dank für Ihre Unterstützung.",
      impacts: { 25: "ein Lernpaket für eine/n Teilnehmer/in", 50: "einen Monat unternehmerische Begleitung", 100: "eine Schulung für eine kleine Gruppe", 250: "den Start eines landwirtschaftlichen Kleinprojekts" },
      defaultImpact: "neue Chancen für die Gemeinschaft",
    },
    impact: { eyebrow: "Ihre Wirkung", title: "Was Ihr Beitrag möglich", strong: "macht.", items: [
      { t: "Ausbilden", d: "Berufliche und unternehmerische Kompetenzen entwickeln." },
      { t: "Begleiten", d: "Mentoring, Beratung und persönliche Betreuung bieten." },
      { t: "Innovieren", d: "Technologische Lösungen im Dienst der Gemeinschaften schaffen." },
      { t: "Gründen", d: "Projektträger unterstützen und die Schaffung von Arbeitsplätzen fördern." },
      { t: "Ernähren", d: "Innovative landwirtschaftliche Initiativen entwickeln." },
      { t: "Mobilisieren", d: "Gemeinsame Aktionen schaffen, die Gemeinschaften stärken." },
    ] },
    modes: { eyebrow: "Wie spenden", title: "Die verschiedenen Wege zu", strong: "unterstützen.", items: [
      { t: "Einmalig spenden", d: "Ein einmaliger Beitrag zur Unterstützung der vorrangigen Aktionen des Vereins." },
      { t: "Regelmäßige/r Spender/in werden", d: "Monatliche Unterstützung, um die Entwicklung unserer Programme nachhaltig zu fördern." },
      { t: "Ein Programm unterstützen", d: "Richten Sie Ihren Beitrag auf einen Bereich, der Ihnen am Herzen liegt: Bildung, Landwirtschaft, Innovation…" },
      { t: "Förderer werden", d: "Unternehmen, Stiftungen und Philanthropen begleiten strukturierende, wirkungsvolle Projekte." },
      { t: "Sachspende leisten", d: "IT-Ausrüstung, Material, landwirtschaftliche Ressourcen, Räume oder Kompetenzen." },
      { t: "Ein Projekt finanzieren", d: "Unterstützen Sie direkt den Start einer wertschöpfenden Initiative." },
    ] },
    transparency: { eyebrow: "Transparenz", title: "Vertrauen im Zentrum unseres", accent: "Engagements.", lead: "Wir verpflichten uns, die uns anvertrauten Mittel mit Sorgfalt, Verantwortung und Transparenz zu verwalten.", allocTitle: "Wohin Ihr Geld fließt", allocLabels: ["Programme & Arbeit vor Ort", "Vereinsbetrieb", "Spendensammlung & Kommunikation"], allocNote: "Richtwerte — Zahlen werden im Tätigkeitsbericht bestätigt.", gouvernance: ["Verantwortungsvolle Mittelverwaltung", "Begleitung der geförderten Projekte", "Messbare Wirkungsindikatoren", "Regelmäßige Tätigkeitsberichte", "Kontinuierliche Verbesserung unserer Praktiken"] },
    momo: { eyebrow: "Mobile Money", title: "Spenden mit", strong: "Mobile Money.", text: "In Kamerun unterstützen Sie uns in Sekunden per Orange Money oder MTN Mobile Money.", holder: "Auf den Namen", hint: "Senden Sie Ihre Spende an die angegebene Nummer und bewahren Sie die Bestätigungs-SMS auf." },
    cta: { text: "Eine Investition in den Menschen bringt Vorteile, die von", brand: "Generation zu Generation weitergegeben werden.", donate: "Spenden", contact: "Das Team kontaktieren" },
  },
};

export const getSoutenir = (lang: Lang): SoutenirContent => content[lang] ?? content.fr;
