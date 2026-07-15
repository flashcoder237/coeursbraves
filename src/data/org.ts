// Données structurantes « site d'ONG » : légal, don (Stripe), équipe, transparence.
// ⚠️ Les valeurs [À compléter] doivent être renseignées par l'association.
// Voir CONTENU-A-FOURNIR.md à la racine du projet.

import { site } from "./site";

// ---------------------------------------------------------------------------
// Mentions légales + éditeur (association déclarée au Cameroun)
// ---------------------------------------------------------------------------
export const legal = {
  legalForm: "Association déclarée régie par la loi camerounaise n°90/053 du 19 décembre 1990 relative à la liberté d'association.",
  registration: "Récépissé de déclaration délivré le 21 février 2023 par la Préfecture de Nkongsamba. [N° de récépissé à compléter]",
  court: "Préfecture de Nkongsamba — Département du Moungo, Région du Littoral (Cameroun)",
  vatId: "Non applicable (association à but non lucratif).",
  representative: "Assaa Ouemba Billy Loïc, Président",
  publicationDirector: "Assaa Ouemba Billy Loïc, Président",
  object: "Éduquer, développer et promouvoir la solidarité sous toutes ses formes ; agir contre la pauvreté et pour l'accueil des personnes exclues, des minorités, de la jeunesse et des familles ; former et accompagner les porteurs de projets ; promouvoir la culture ; coopérer avec les institutions et ONG, au Cameroun et dans la diaspora.",
  host: {
    name: "[À compléter : nom de l'hébergeur — ex. Vercel]",
    address: "[À compléter : adresse de l'hébergeur]",
  },
  updatedAt: "15 juillet 2026",
};

// ---------------------------------------------------------------------------
// Don — configuration Stripe
// Créez dans Stripe deux « Payment Links » (Liens de paiement) :
//  - un ponctuel avec « le client choisit le montant »
//  - un abonnement mensuel
// puis remplacez les URLs ci-dessous.
// ---------------------------------------------------------------------------
export const donation = {
  currency: "€",
  presets: [25, 50, 100, 250],
  stripe: {
    oneTime: "https://buy.stripe.com/[À_COMPLÉTER_LIEN_PONCTUEL]",
    monthly: "https://buy.stripe.com/[À_COMPLÉTER_LIEN_MENSUEL]",
  },
  // Équivalences d'impact (à ajuster avec l'association)
  impacts: {
    25: "un kit pédagogique pour un·e apprenant·e",
    50: "un mois d'accompagnement entrepreneurial",
    100: "une session de formation pour un petit groupe",
    250: "le lancement d'un micro-projet agricole",
  } as Record<number, string>,
  defaultImpact: "de nouvelles opportunités pour la communauté",
  // Campagne mise en avant (chiffres à remplacer)
  campaign: {
    title: "Équiper le prochain Technology Center",
    raised: 6200, // [À compléter]
    goal: 15000, // [À compléter]
    unit: "€",
    donors: 84, // [À compléter]
  },
};

// ---------------------------------------------------------------------------
// Transparence « où va votre argent » (pourcentages à confirmer)
// ---------------------------------------------------------------------------
export const allocation = [
  { label: "Programmes & actions de terrain", pct: 80, color: "terra" },
  { label: "Fonctionnement de l'association", pct: 12, color: "gold" },
  { label: "Collecte & communication", pct: 8, color: "emerald" },
];

// Équipe : migrée vers la collection de contenu `src/content/team/` (éditable via /admin).
// Journal & Événements : idem, collections `src/content/journal` et `src/content/events`.
