// Données structurantes « site d'ONG » : légal, don (Stripe), équipe, transparence.
// ⚠️ Les valeurs [À compléter] doivent être renseignées par l'association.
// Voir CONTENU-A-FOURNIR.md à la racine du projet.

import { site } from "./site";

// ---------------------------------------------------------------------------
// Mentions légales / Impressum (Allemagne) + éditeur
// ---------------------------------------------------------------------------
export const legal = {
  legalForm: "[À compléter : forme juridique — ex. e.V. (Verein) ou association loi 1901]",
  registration: "[À compléter : n° d'enregistrement — ex. Vereinsregister VR 12345]",
  court: "[À compléter : tribunal d'enregistrement — ex. Amtsgericht Mainz]",
  vatId: "[À compléter : n° de TVA intracommunautaire, si applicable]",
  representative: site.founder, // représentant légal
  publicationDirector: "[À compléter : directeur·rice de la publication]",
  host: {
    name: "[À compléter : nom de l'hébergeur — ex. Netlify, Vercel, OVH]",
    address: "[À compléter : adresse de l'hébergeur]",
  },
  updatedAt: "[À compléter : date de dernière mise à jour]",
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
