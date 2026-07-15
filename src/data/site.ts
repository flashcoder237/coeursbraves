// Données centrales du site Cœurs Braves.
// Les coordonnées (email, téléphone, réseaux, siège) sont éditables depuis /admin
// via src/data/cms/settings.json (collection « Réglages du site »).
import settings from "./cms/settings.json";

export const site = {
  name: "Cœurs Braves",
  legalName: "Association Cœurs Braves (A.C.B)",
  tagline: "Investir dans l'humain. Construire des opportunités. Transformer des vies.",
  founder: "Assaa Ouemba Billy Loïc, dit « Brave Djamal »",
  email: settings.email,
  phone: settings.phone,
  phoneIntl: settings.phone.replace(/\D/g, ""), // format wa.me / tel sans espaces
  phone2: settings.phone2,
  phone2Intl: settings.phone2.replace(/\D/g, ""),
  hq: settings.hq, // siège social (Cameroun)
  antenna: settings.antenna, // antenne (Allemagne)
  countries: ["Cameroun", "République centrafricaine", "Allemagne", "Diaspora africaine"],
  social: {
    facebook: settings.facebook,
    instagram: settings.instagram,
    tiktok: settings.tiktok,
    whatsapp: settings.whatsapp,
    whatsapp2: settings.whatsapp2,
  },
};

export const nav = [
  { label: "Accueil", href: "/" },
  { label: "Notre histoire", href: "/notre-histoire/" },
  { label: "Écosystème", href: "/ecosysteme/" },
  { label: "Rejoindre", href: "/rejoindre/" },
  { label: "Partenaires", href: "/partenaires/" },
  { label: "Journal", href: "/journal/" },
  { label: "Événements", href: "/evenements/" },
  { label: "Contact", href: "/contact/" },
];

// Chiffres d'impact (page d'accueil & bandes)
export const stats = [
  { num: "3 500+", label: "Membres engagés dans notre communauté internationale" },
  { num: "4", label: "Pays et territoires déjà mobilisés" },
  { num: "5", label: "Programmes de solidarité complémentaires" },
  { num: "100+", label: "Personnes accompagnées et formées" },
];

// Notre écosystème — pôles réels
export const poles = [
  {
    slug: "academy",
    name: "Cœurs Braves Academy",
    baseline: "Former les talents de demain.",
    color: "gold",
    icon: "graduation-cap",
    image: "/images/cb/training-carpentry.jpg",
    text: "Le centre de formation, d'éducation et de transformation humaine : développement personnel, leadership, entrepreneuriat, langues et compétences professionnelles.",
  },
  {
    slug: "fermiers",
    name: "Cœurs Braves Fermiers",
    baseline: "Développer une agriculture moderne, productive et durable.",
    color: "green",
    icon: "sprout",
    image: "/images/cb/farm-eggs.jpg",
    logo: "/images/cb/logo-fermiers.png",
    text: "Agriculture moderne, élevage, transformation alimentaire et coopératives : nourrir les communautés tout en créant des revenus durables.",
  },
  {
    slug: "technology-center",
    name: "The Technology Center",
    baseline: "Mettre la technologie au service des communautés.",
    color: "red",
    icon: "cpu",
    image: "/images/cb/youth-laptop-2.jpg",
    text: "Former les jeunes au numérique et imaginer des solutions aux défis locaux, pour réduire la fracture technologique.",
  },
  {
    slug: "immigration-services",
    name: "Cœurs Braves Immigration Services",
    baseline: "Accompagner les parcours de mobilité de manière responsable et légale.",
    color: "gold",
    icon: "globe",
    image: "/images/cb/young-professionals.jpg",
    logo: "/images/cb/logo-immigration.jpg",
    text: "Immigration légale, emploi, coaching CV Europass, visas travail, formation en langues et accompagnement administratif vers l'Europe et d'autres destinations.",
  },
  {
    slug: "la-marmite",
    name: "La Marmite des Cœurs Braves",
    baseline: "Mettre la restauration au service de la solidarité et de l'emploi.",
    color: "green",
    icon: "bowl",
    image: "/images/cb/marmite-food.jpg",
    text: "La restauration comme levier de solidarité, d'emploi et de vivre-ensemble au sein des communautés.",
  },
];

// Domaines d'action (page d'accueil)
export const domaines = [
  "Entrepreneuriat", "Technologies et innovation", "Formation professionnelle",
  "Agriculture et élevage", "Santé communautaire", "Éducation",
  "Immigration légale", "Investissement", "Développement personnel",
  "Emploi", "Culture", "Accompagnement associatif",
];

// Méthode d'impact
export const methode = [
  "Observer", "Comprendre", "Former", "Accompagner",
  "Connecter", "Développer", "Mesurer", "Améliorer",
];

// Engagements
export const engagements = [
  "Placer l'humain au cœur de chaque décision.",
  "Favoriser l'inclusion et l'égalité des chances.",
  "Agir avec intégrité et transparence.",
  "Valoriser l'innovation au service du bien commun.",
  "Mesurer l'impact de nos actions.",
  "Créer des solutions durables plutôt que temporaires.",
  "Développer des partenariats fondés sur la confiance.",
];

// Actualités « Sur le terrain » (mosaïque)
export const actualites = [
  {
    tag: "Formation",
    title: "Nos ateliers d'entrepreneuriat forment une nouvelle génération",
    image: "/images/cb/entrepreneurs-meeting.jpg",
    excerpt: "Des dizaines de porteurs de projets accompagnés dans la structuration de leur entreprise.",
    featured: true,
  },
  {
    tag: "Communauté",
    title: "Le Clean Hope Center, un lieu de vie et d'apprentissage",
    image: "/images/cb/team-clean-hope.jpg",
    excerpt: "Formation, couture, santé : un centre au service de la communauté.",
  },
  {
    tag: "Agriculture",
    title: "Cœurs Braves Fermiers : l'élevage qui nourrit et emploie",
    image: "/images/cb/farm-eggs.jpg",
    excerpt: "Production d'œufs et coopératives agricoles au Cameroun.",
  },
  {
    tag: "Santé",
    title: "Des actions de santé communautaire au plus près des populations",
    image: "/images/cb/health-care.jpg",
    excerpt: "Prévention, sensibilisation et accompagnement des plus vulnérables.",
  },
  {
    tag: "Jeunesse",
    title: "Une communauté qui célèbre chaque réussite",
    image: "/images/cb/youth-celebrating.jpg",
    excerpt: "Nos membres, unis par une même volonté d'agir.",
  },
];

// Témoignages
export const temoignages = [
  {
    quote: "Cœurs Braves m'a permis de transformer une idée en véritable projet d'entreprise. Aujourd'hui, je crée de la valeur et je peux à mon tour accompagner d'autres jeunes.",
    name: "Samuel N.",
    role: "Entrepreneur",
    photo: "/images/cb/young-professionals.jpg",
    place: "Yaoundé",
  },
  {
    quote: "Grâce aux formations reçues, j'ai acquis des compétences que je mets aujourd'hui au service de mon développement professionnel.",
    name: "Awa D.",
    role: "Étudiante",
    photo: "/images/cb/youth-laptop-1.jpg",
    place: "Douala",
  },
  {
    quote: "J'ai trouvé un réseau de personnes qui croient en moi et qui m'ont aidée à franchir une étape décisive dans mon parcours.",
    name: "Fatou M.",
    role: "Porteuse de projet",
    photo: "/images/cb/training-sewing.jpg",
    place: "Diaspora",
  },
  {
    quote: "Au-delà des compétences, j'ai découvert une communauté engagée où chacun contribue à la réussite des autres.",
    name: "David K.",
    role: "Membre de Cœurs Braves",
    photo: "/images/cb/youth-celebrating.jpg",
    place: "Berlin",
  },
];

// FAQ
export const faq = [
  { q: "Qu'est-ce que Cœurs Braves ?", a: "Cœurs Braves est une association et un mouvement international qui investit dans l'humain pour créer des opportunités durables en Afrique. Notre communauté agit au Cameroun, en République centrafricaine, en Allemagne et au sein de la diaspora africaine." },
  { q: "Comment devenir membre ?", a: "Il suffit de remplir le formulaire d'adhésion en ligne, de présenter votre parcours et vos centres d'intérêt, puis d'échanger avec notre équipe qui vous orientera vers les opportunités adaptées à votre profil." },
  { q: "Qui peut rejoindre la communauté ?", a: "Étudiants, jeunes diplômés, entrepreneurs, femmes, professionnels, membres de la diaspora, associations, entreprises et institutions : il existe une place pour chacun, quel que soit son parcours." },
  { q: "Les formations sont-elles ouvertes à tous ?", a: "Oui. Nos formations et ateliers sont conçus pour accompagner chaque personne selon ses besoins, du débutant au profil déjà expérimenté." },
  { q: "Comment proposer un projet ?", a: "Contactez notre équipe via le formulaire de contact ou d'adhésion en décrivant votre projet. Nous étudions chaque proposition et proposons un parcours d'accompagnement adapté." },
  { q: "Comment devenir partenaire ?", a: "Entreprises, fondations, universités, institutions et investisseurs peuvent nous rejoindre via la page Partenaires. Chaque partenariat est construit sur mesure autour d'une vision commune." },
  { q: "Comment soutenir vos actions ?", a: "Vous pouvez faire un don ponctuel ou régulier, soutenir un programme spécifique, devenir mécène, faire un don en nature ou apporter vos compétences en tant que bénévole ou mentor." },
  { q: "Dans quels pays intervenez-vous ?", a: "Notre communauté est présente au Cameroun, en République centrafricaine, en Allemagne et au sein de plusieurs communautés de la diaspora africaine." },
  { q: "Puis-je devenir bénévole ?", a: "Absolument. Vous pouvez mettre votre temps, vos compétences ou votre expérience au service de projets à impact en tant que bénévole, mentor ou expert." },
  { q: "Comment suivre vos actualités ?", a: "Abonnez-vous à notre newsletter et suivez-nous sur nos réseaux sociaux pour recevoir nos appels à projets, opportunités de formation et événements." },
];

// Formes d'engagement (page Rejoindre)
export const engagementTypes = [
  { title: "Membre", text: "Participez à la vie de la communauté et bénéficiez de nos programmes." },
  { title: "Bénévole", text: "Mettez votre temps, vos compétences ou votre expérience au service de projets à impact." },
  { title: "Mentor", text: "Accompagnez les jeunes, les entrepreneurs et les porteurs de projets dans leur parcours." },
  { title: "Expert", text: "Intervenez lors de formations, de conférences ou de missions de conseil." },
  { title: "Partenaire", text: "Construisez avec nous des projets de développement humain, économique et social." },
  { title: "Investisseur ou mécène", text: "Contribuez au financement d'initiatives créatrices de valeur et d'impact." },
];

// Types de partenariat (page Partenaires)
export const partnershipTypes = [
  { title: "Partenaire stratégique", text: "Construire ensemble des programmes de long terme et des initiatives structurantes." },
  { title: "Partenaire technique", text: "Mettre à disposition une expertise, des compétences ou un accompagnement spécialisé." },
  { title: "Partenaire académique", text: "Développer des formations, des recherches et des échanges de connaissances." },
  { title: "Partenaire financier", text: "Soutenir le financement de projets, de programmes ou d'infrastructures." },
  { title: "Partenaire institutionnel", text: "Développer des actions communes au service des communautés." },
  { title: "Partenaire média", text: "Valoriser les initiatives, sensibiliser le public et amplifier la portée de nos actions." },
];
