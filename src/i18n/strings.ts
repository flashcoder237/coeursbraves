export type Locale = "fr" | "de" | "en";

type Dict = {
  nav: {
    status: string;
    candidatez: string;
    primary: {
      ecosystem: string;
      raffinerie: string;
      branches: string;
      partners: string;
      manifesto: string;
      journal: string;
      contact: string;
    };
    megaTitle: string;
    megaSubtitle: string;
    megaRaffinerieBadge: string;
    openMenu: string;
    closeMenu: string;
  };
  hero: {
    eyebrow: string[];
    title: string;
    subtitle: string;
    cta: string;
    focusLabel: string;
    focusValue: string;
  };
  ecosystem: {
    sectionLabel: string;
    title: string;
    explore: string;
    discoverLink: string;
  };
  manifesto: {
    label: string;
    quote: string;
    quoteHighlight: string;
    quoteSuffix: string;
    attributionTitle: string;
    attributionLocation: string;
  };
  raffinerie: {
    badge: string;
    title: string;
    intro: string;
    cohortLabel: string;
    cohortClosed: string;
    cohortOpen: string;
    cohortSoon: string;
    applyKigali: string;
    pillarsTitle: string;
    pillars: string[];
  };
  journal: {
    title: string;
    seeAll: string;
  };
  branches: {
    sectionLabel: string;
    title: string;
    intro: string;
    discoverLink: string;
  };
  partners: {
    sectionLabel: string;
    title: string;
    intro: string;
    visitLink: string;
  };
  poleDetail: {
    back: string;
    servicesTitle: string;
    nextPole: string;
    cta: string;
    ctaIntro: string;
  };
  contact: {
    eyebrow: string;
    title: string;
    socialTitle: string;
  };
  footer: {
    ctaTitle: string;
    ctaIntro: string;
    mailLabel: string;
    investLabel: string;
    investAction: string;
    newsletterTitle: string;
    newsletterIntro: string;
    newsletterPlaceholder: string;
    newsletterSubmit: string;
    columns: {
      worlds: string;
      initiative: string;
      resources: string;
      programmes: string;
      contact: string;
      legal: string;
    };
    initiative: {
      manifesto: string;
      council: string;
      history: string;
      careers: string;
    };
    resources: {
      journal: string;
      press: string;
      reports: string;
      faq: string;
    };
    programmes: {
      raffinerie: string;
      candidates: string;
      investors: string;
      diaspora: string;
    };
    legal: {
      mentions: string;
      privacy: string;
      terms: string;
      cookies: string;
    };
    rights: string;
    tagline: string;
  };
};

const fr: Dict = {
  nav: {
    status: "Cohorte 03 — Kigali · Inscriptions ouvertes",
    candidatez: "Candidatez",
    primary: {
      ecosystem: "Écosystème",
      raffinerie: "La Raffinerie",
      branches: "Branches",
      partners: "Partenaires",
      manifesto: "Manifeste",
      journal: "Journal",
      contact: "Contact",
    },
    megaTitle: "Les 6 mondes de Cœurs Braves",
    megaSubtitle:
      "Un écosystème pan-africain : immigration, médias, agriculture, technologie, formation, business.",
    megaRaffinerieBadge: "Programme premium",
    openMenu: "Menu",
    closeMenu: "Fermer",
  },
  hero: {
    eyebrow: [
      "Immigration",
      "Studios & TV",
      "Fermiers",
      "Technologie",
      "Academy",
      "Investissement",
    ],
    title: "Une génération brave bâtit l’Afrique de demain.",
    subtitle:
      "Un écosystème international africain où ambition et humanisme s’entrelacent. Six mondes interconnectés pour réinventer notre souveraineté.",
    cta: "Découvrir l’écosystème",
    focusLabel: "Focus actuel",
    focusValue: "Souveraineté 2026",
  },
  ecosystem: {
    sectionLabel: "§ 02 / L’écosystème",
    title: "Six pôles d’excellence,\nun seul écosystème.",
    explore: "Explorer les divisions",
    discoverLink: "Découvrir le pôle",
  },
  manifesto: {
    label: "La vision",
    quote: "Nous ne construisons pas seulement des entreprises. Nous construisons ",
    quoteHighlight: "une souveraineté nouvelle",
    quoteSuffix: ". L’optimisme radical comme méthode de travail.",
    attributionTitle: "Le conseil d’administration",
    attributionLocation: "Dakar, Sénégal — 2026",
  },
  raffinerie: {
    badge: "Programme premium ✨ Academy",
    title: "La Raffinerie.",
    intro:
      "Un programme intensif de transformation sociale et relationnelle. Raffinement personnel, charisme, leadership, image et comportement professionnel.",
    cohortLabel: "Cohorte",
    cohortClosed: "Fermé",
    cohortOpen: "Ouvert",
    cohortSoon: "Bientôt",
    applyKigali: "Postuler pour Kigali",
    pillarsTitle: "Les 9 piliers de la transformation",
    pillars: [
      "Raffinement personnel",
      "Charisme",
      "Confiance en soi",
      "Relations humaines",
      "Élégance sociale",
      "Coaching sentimental",
      "Éducation émotionnelle",
      "Image personnelle",
      "Comportement professionnel",
    ],
  },
  journal: {
    title: "Journal & analyses",
    seeAll: "Voir tout",
  },
  branches: {
    sectionLabel: "§ 05 / Sous-organisations",
    title: "Les branches de Cœurs Braves.",
    intro:
      "Au-delà des six pôles opérationnels, Cœurs Braves rayonne via des sous-organisations dédiées — association, label, diaspora, lifestyle.",
    discoverLink: "Découvrir",
  },
  partners: {
    sectionLabel: "§ 06 / Partenaires",
    title: "Ils marchent avec nous.",
    intro:
      "Institutions, financiers, médias et acteurs technologiques qui co-construisent l'écosystème.",
    visitLink: "En savoir plus",
  },
  poleDetail: {
    back: "Retour à l’écosystème",
    servicesTitle: "Services & contenus",
    nextPole: "Pôle suivant",
    cta: "Discuter avec ce pôle",
    ctaIntro:
      "Vous portez un projet ou cherchez un accompagnement ? Notre équipe vous répond sous 48h.",
  },
  contact: {
    eyebrow: "§ Contact",
    title: "Parlons d’un projet commun.",
    socialTitle: "Nous suivre",
  },
  footer: {
    ctaTitle: "Prêt à bâtir ?",
    ctaIntro:
      "Contactez nos bureaux à travers le continent ou postulez directement à nos programmes ouverts.",
    mailLabel: "Courriel central",
    investLabel: "Investissements",
    investAction: "Soumettre un dossier",
    newsletterTitle: "Le Brief mensuel",
    newsletterIntro: "Une lettre par mois sur l’écosystème, les cohortes et les opportunités.",
    newsletterPlaceholder: "votre@email.com",
    newsletterSubmit: "S’abonner",
    columns: {
      worlds: "Les mondes",
      initiative: "L’initiative",
      resources: "Ressources",
      programmes: "Programmes",
      contact: "Contact",
      legal: "Légal",
    },
    initiative: {
      manifesto: "Manifeste",
      council: "Conseil d’administration",
      history: "Notre histoire",
      careers: "Carrières",
    },
    resources: {
      journal: "Journal",
      press: "Salle de presse",
      reports: "Rapports d’impact",
      faq: "FAQ",
    },
    programmes: {
      raffinerie: "La Raffinerie",
      candidates: "Espace candidats",
      investors: "Investor desk",
      diaspora: "Diaspora",
    },
    legal: {
      mentions: "Mentions légales",
      privacy: "Confidentialité",
      terms: "Conditions d’utilisation",
      cookies: "Cookies",
    },
    rights: "© 2026 Cœurs Braves. Tous droits réservés.",
    tagline: "Designed for the future.",
  },
};

const en: Dict = {
  nav: {
    status: "Cohort 03 — Kigali · Applications open",
    candidatez: "Apply now",
    primary: {
      ecosystem: "Ecosystem",
      raffinerie: "The Refinery",
      branches: "Branches",
      partners: "Partners",
      manifesto: "Manifesto",
      journal: "Journal",
      contact: "Contact",
    },
    megaTitle: "The 6 worlds of Cœurs Braves",
    megaSubtitle:
      "A pan-African ecosystem: immigration, media, agriculture, technology, training, business.",
    megaRaffinerieBadge: "Premium programme",
    openMenu: "Menu",
    closeMenu: "Close",
  },
  hero: {
    eyebrow: [
      "Immigration",
      "Studios & TV",
      "Farmers",
      "Technology",
      "Academy",
      "Investment",
    ],
    title: "A brave generation is building tomorrow’s Africa.",
    subtitle:
      "An international African ecosystem where ambition meets humanism. Six interconnected worlds reshaping our sovereignty.",
    cta: "Explore the ecosystem",
    focusLabel: "Current focus",
    focusValue: "Sovereignty 2026",
  },
  ecosystem: {
    sectionLabel: "§ 02 / The Ecosystem",
    title: "Six worlds of excellence,\none ecosystem.",
    explore: "Explore the divisions",
    discoverLink: "Discover the world",
  },
  manifesto: {
    label: "The vision",
    quote: "We don’t just build companies. We build ",
    quoteHighlight: "a new sovereignty",
    quoteSuffix: ". Radical optimism as our method.",
    attributionTitle: "Board of directors",
    attributionLocation: "Dakar, Senegal — 2026",
  },
  raffinerie: {
    badge: "Premium programme ✨ Academy",
    title: "The Refinery.",
    intro:
      "An intensive programme of social and relational transformation. Personal refinement, charisma, leadership, image and professional conduct.",
    cohortLabel: "Cohort",
    cohortClosed: "Closed",
    cohortOpen: "Open",
    cohortSoon: "Soon",
    applyKigali: "Apply for Kigali",
    pillarsTitle: "The 9 pillars of transformation",
    pillars: [
      "Personal refinement",
      "Charisma",
      "Self-confidence",
      "Human relationships",
      "Social elegance",
      "Sentimental coaching",
      "Emotional education",
      "Personal image",
      "Professional conduct",
    ],
  },
  journal: {
    title: "Journal & insights",
    seeAll: "See all",
  },
  branches: {
    sectionLabel: "§ 05 / Sub-organisations",
    title: "The branches of Cœurs Braves.",
    intro:
      "Beyond the six operating worlds, Cœurs Braves extends through dedicated sub-organisations — association, label, diaspora, lifestyle.",
    discoverLink: "Discover",
  },
  partners: {
    sectionLabel: "§ 06 / Partners",
    title: "They walk with us.",
    intro:
      "Institutions, financial backers, media and technology partners co-building the ecosystem.",
    visitLink: "Learn more",
  },
  poleDetail: {
    back: "Back to the ecosystem",
    servicesTitle: "Services & offerings",
    nextPole: "Next world",
    cta: "Talk to this team",
    ctaIntro:
      "Have a project or need guidance? Our team replies within 48 hours.",
  },
  contact: {
    eyebrow: "§ Contact",
    title: "Let’s talk about a shared project.",
    socialTitle: "Follow us",
  },
  footer: {
    ctaTitle: "Ready to build?",
    ctaIntro:
      "Contact our offices across the continent or apply directly to one of our open programmes.",
    mailLabel: "Main inbox",
    investLabel: "Investments",
    investAction: "Submit a deck",
    newsletterTitle: "The Monthly Brief",
    newsletterIntro: "One letter a month on the ecosystem, cohorts and opportunities.",
    newsletterPlaceholder: "your@email.com",
    newsletterSubmit: "Subscribe",
    columns: {
      worlds: "The Worlds",
      initiative: "The Initiative",
      resources: "Resources",
      programmes: "Programmes",
      contact: "Contact",
      legal: "Legal",
    },
    initiative: {
      manifesto: "Manifesto",
      council: "Board of directors",
      history: "Our story",
      careers: "Careers",
    },
    resources: {
      journal: "Journal",
      press: "Press room",
      reports: "Impact reports",
      faq: "FAQ",
    },
    programmes: {
      raffinerie: "The Refinery",
      candidates: "Candidates desk",
      investors: "Investor desk",
      diaspora: "Diaspora",
    },
    legal: {
      mentions: "Legal notice",
      privacy: "Privacy",
      terms: "Terms of use",
      cookies: "Cookies",
    },
    rights: "© 2026 Cœurs Braves. All rights reserved.",
    tagline: "Designed for the future.",
  },
};

const de: Dict = {
  nav: {
    status: "Kohorte 03 — Kigali · Anmeldung offen",
    candidatez: "Bewerben",
    primary: {
      ecosystem: "Ökosystem",
      raffinerie: "Die Raffinerie",
      branches: "Zweige",
      partners: "Partner",
      manifesto: "Manifest",
      journal: "Journal",
      contact: "Kontakt",
    },
    megaTitle: "Die 6 Welten von Cœurs Braves",
    megaSubtitle:
      "Ein panafrikanisches Ökosystem: Immigration, Medien, Landwirtschaft, Technologie, Ausbildung, Business.",
    megaRaffinerieBadge: "Premium-Programm",
    openMenu: "Menü",
    closeMenu: "Schließen",
  },
  hero: {
    eyebrow: [
      "Immigration",
      "Studios & TV",
      "Landwirte",
      "Technologie",
      "Academy",
      "Investment",
    ],
    title: "Eine mutige Generation baut das Afrika von morgen.",
    subtitle:
      "Ein internationales afrikanisches Ökosystem, in dem Ambition auf Humanismus trifft. Sechs vernetzte Welten für eine neue Souveränität.",
    cta: "Das Ökosystem entdecken",
    focusLabel: "Aktueller Fokus",
    focusValue: "Souveränität 2026",
  },
  ecosystem: {
    sectionLabel: "§ 02 / Das Ökosystem",
    title: "Sechs Exzellenz-Pole,\nein Ökosystem.",
    explore: "Die Bereiche erkunden",
    discoverLink: "Diesen Pol entdecken",
  },
  manifesto: {
    label: "Die Vision",
    quote: "Wir bauen nicht nur Unternehmen. Wir bauen ",
    quoteHighlight: "eine neue Souveränität",
    quoteSuffix: ". Radikaler Optimismus als Methode.",
    attributionTitle: "Der Vorstand",
    attributionLocation: "Dakar, Senegal — 2026",
  },
  raffinerie: {
    badge: "Premium-Programm ✨ Academy",
    title: "Die Raffinerie.",
    intro:
      "Ein intensives Programm zur sozialen und relationalen Transformation. Persönliche Verfeinerung, Charisma, Leadership, Image und professionelles Auftreten.",
    cohortLabel: "Kohorte",
    cohortClosed: "Geschlossen",
    cohortOpen: "Offen",
    cohortSoon: "Bald",
    applyKigali: "Für Kigali bewerben",
    pillarsTitle: "Die 9 Säulen der Transformation",
    pillars: [
      "Persönliche Verfeinerung",
      "Charisma",
      "Selbstvertrauen",
      "Menschliche Beziehungen",
      "Soziale Eleganz",
      "Beziehungs-Coaching",
      "Emotionale Bildung",
      "Persönliches Image",
      "Professionelles Auftreten",
    ],
  },
  journal: {
    title: "Journal & Analysen",
    seeAll: "Alle ansehen",
  },
  branches: {
    sectionLabel: "§ 05 / Sub-Organisationen",
    title: "Die Zweige von Cœurs Braves.",
    intro:
      "Über die sechs operativen Pole hinaus wirkt Cœurs Braves durch dedizierte Sub-Organisationen — Verein, Label, Diaspora, Lifestyle.",
    discoverLink: "Entdecken",
  },
  partners: {
    sectionLabel: "§ 06 / Partner",
    title: "Sie gehen den Weg mit uns.",
    intro:
      "Institutionen, Finanzakteure, Medien und Technologiepartner, die das Ökosystem mitgestalten.",
    visitLink: "Mehr erfahren",
  },
  poleDetail: {
    back: "Zurück zum Ökosystem",
    servicesTitle: "Leistungen & Inhalte",
    nextPole: "Nächster Pol",
    cta: "Mit diesem Pol sprechen",
    ctaIntro:
      "Haben Sie ein Projekt oder benötigen Sie Begleitung? Unser Team antwortet innerhalb von 48 Stunden.",
  },
  contact: {
    eyebrow: "§ Kontakt",
    title: "Sprechen wir über ein gemeinsames Projekt.",
    socialTitle: "Folgen Sie uns",
  },
  footer: {
    ctaTitle: "Bereit zu bauen?",
    ctaIntro:
      "Kontaktieren Sie unsere Büros auf dem Kontinent oder bewerben Sie sich direkt für eines unserer offenen Programme.",
    mailLabel: "Haupt-Inbox",
    investLabel: "Investments",
    investAction: "Pitch Deck einreichen",
    newsletterTitle: "Der monatliche Brief",
    newsletterIntro: "Ein Brief pro Monat über das Ökosystem, Kohorten und Chancen.",
    newsletterPlaceholder: "ihre@email.com",
    newsletterSubmit: "Abonnieren",
    columns: {
      worlds: "Die Welten",
      initiative: "Die Initiative",
      resources: "Ressourcen",
      programmes: "Programme",
      contact: "Kontakt",
      legal: "Rechtliches",
    },
    initiative: {
      manifesto: "Manifest",
      council: "Vorstand",
      history: "Unsere Geschichte",
      careers: "Karriere",
    },
    resources: {
      journal: "Journal",
      press: "Pressebereich",
      reports: "Impact-Berichte",
      faq: "FAQ",
    },
    programmes: {
      raffinerie: "Die Raffinerie",
      candidates: "Kandidaten-Desk",
      investors: "Investor-Desk",
      diaspora: "Diaspora",
    },
    legal: {
      mentions: "Impressum",
      privacy: "Datenschutz",
      terms: "Nutzungsbedingungen",
      cookies: "Cookies",
    },
    rights: "© 2026 Cœurs Braves. Alle Rechte vorbehalten.",
    tagline: "Designed for the future.",
  },
};

export const strings: Record<Locale, Dict> = { fr, de, en };

export function getStrings(locale: string | undefined): Dict {
  const l = (locale as Locale) ?? "fr";
  return strings[l] ?? strings.fr;
}
