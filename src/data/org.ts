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
// Don — configuration éditable depuis /admin (collection « Dons & campagne »),
// via src/data/cms/donation.json : liens Stripe, montants, campagne, répartition.
// Les textes traduits (équivalences d'impact, titre de campagne) sont dans
// src/i18n/soutenir.ts.
// Stripe : créez 2 « Payment Links » (ponctuel « montant libre » + abonnement mensuel).
// ---------------------------------------------------------------------------
import donationCfg from "./cms/donation.json";

export const donation = donationCfg;

// Transparence « où va votre argent » (pourcentages éditables via /admin).
export const allocation = donationCfg.allocation;

// Équipe : migrée vers la collection de contenu `src/content/team/` (éditable via /admin).
// Journal & Événements : idem, collections `src/content/journal` et `src/content/events`.
