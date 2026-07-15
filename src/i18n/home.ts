// Contenu éditorial de la page d'accueil, traduit FR / EN / DE.
// Les éléments non traduisibles (images, icônes, slugs, chiffres) restent dans site.ts.
import type { Lang } from "./ui";

interface Actu { tag: string; title: string; excerpt: string }
interface Temoin { quote: string; role: string; place: string }
interface PoleTxt { baseline: string; text: string }

interface HomeContent {
  hero: { badge: string; title: string; accent: string; lead: string; cta2: string; statLabel: string };
  manifeste: { eyebrow: string; title: string; accent: string; side: string; welcome: string };
  statsLabels: string[];
  ecosystem: { eyebrow: string; title: string; accent: string; lead: string };
  poles: Record<string, PoleTxt>;
  domaines: { eyebrow: string; title: string; strong: string; lead: string; list: string[] };
  actions: { eyebrow: string; title: string; strong: string; link: string; items: Actu[] };
  presence: { eyebrow: string; title: string; lead: string };
  identity: { eyebrow: string; title: string; accent: string; lead: string; cap1: string; cap2: string };
  temoignages: { eyebrow: string; title: string; strong: string; items: Temoin[] };
}

const fr: HomeContent = {
  hero: {
    badge: "Une association solidaire",
    title: "Investir dans",
    accent: "l'humain.",
    lead: "Cœurs Braves agit chaque jour aux côtés des communautés : nourrir, former, soigner et accompagner celles et ceux qui en ont le plus besoin. Notre moteur, c'est la solidarité.",
    cta2: "Découvrir nos actions",
    statLabel: "membres engagés",
  },
  manifeste: {
    eyebrow: "Le manifeste",
    title: "Nous croyons en la force de celles et ceux qui",
    accent: "osent agir.",
    side: "Un talent peut changer une famille. Une idée peut transformer une communauté. Une personne accompagnée aujourd'hui peut devenir le mentor de demain.",
    welcome: "Bienvenue au sein de Cœurs Braves.",
  },
  statsLabels: [
    "Membres engagés dans notre communauté internationale",
    "Pays et territoires déjà mobilisés",
    "Programmes de solidarité complémentaires",
    "Personnes accompagnées et formées",
  ],
  ecosystem: {
    eyebrow: "Nos programmes",
    title: "Des actions concrètes au service des",
    accent: "communautés.",
    lead: "Cœurs Braves mène plusieurs programmes de solidarité complémentaires pour nourrir, former et accompagner les personnes, au plus près de leurs besoins.",
  },
  poles: {
    academy: { baseline: "Former gratuitement les jeunes et les femmes.", text: "Formations, développement personnel et accompagnement pour aider chacun à acquérir des compétences et à retrouver de l'autonomie." },
    fermiers: { baseline: "Nourrir les communautés et créer des revenus.", text: "Agriculture et élevage solidaires pour lutter contre la précarité alimentaire et offrir des moyens de subsistance durables aux familles." },
    "technology-center": { baseline: "Mettre la technologie au service des communautés.", text: "Un espace pour former les jeunes au numérique, réduire la fracture technologique et imaginer des solutions aux défis locaux." },
    "immigration-services": { baseline: "Accompagner les parcours de mobilité, avec humanité.", text: "Un accompagnement humain et responsable pour aider les personnes à préparer une mobilité légale et sûre, loin des filières dangereuses." },
    "la-marmite": { baseline: "Des repas solidaires et de l'insertion par l'emploi.", text: "La restauration au service de la solidarité : partager des repas, lutter contre la précarité et former des jeunes aux métiers de la cuisine." },
  },
  domaines: {
    eyebrow: "Nos domaines d'action",
    title: "Des secteurs essentiels au",
    strong: "développement humain.",
    lead: "Chaque programme est pensé pour favoriser l'autonomie, la dignité et un impact durable pour les personnes.",
    list: ["Éducation", "Santé communautaire", "Formation professionnelle", "Agriculture et élevage", "Développement personnel", "Accompagnement associatif", "Insertion économique", "Technologies et innovation", "Culture", "Financement solidaire"],
  },
  actions: {
    eyebrow: "Nos actions",
    title: "En direct du",
    strong: "terrain.",
    link: "Voir toutes nos actions",
    items: [
      { tag: "Formation", title: "Nos ateliers d'entrepreneuriat forment une nouvelle génération", excerpt: "Des dizaines de porteurs de projets accompagnés dans la structuration de leur entreprise." },
      { tag: "Communauté", title: "Le Clean Hope Center, un lieu de vie et d'apprentissage", excerpt: "Formation, couture, santé : un centre au service de la communauté." },
      { tag: "Agriculture", title: "Cœurs Braves Fermiers : l'élevage qui nourrit et emploie", excerpt: "Production d'œufs et coopératives agricoles au Cameroun." },
      { tag: "Santé", title: "Des actions de santé communautaire au plus près des populations", excerpt: "Prévention, sensibilisation et accompagnement des plus vulnérables." },
      { tag: "Jeunesse", title: "Une communauté qui célèbre chaque réussite", excerpt: "Nos membres, unis par une même volonté d'agir." },
    ],
  },
  presence: {
    eyebrow: "Une présence internationale",
    title: "Du Cameroun à la diaspora.",
    lead: "Notre communauté rassemble des membres au Cameroun, en République centrafricaine, en Allemagne et au sein de la diaspora africaine.",
  },
  identity: {
    eyebrow: "Notre identité",
    title: "Fiers de nos racines, tournés vers",
    accent: "l'avenir.",
    lead: "Du Cameroun à l'Allemagne, notre communauté tisse un pont entre les nations. Une même fierté, une même ambition : investir dans l'humain.",
    cap1: "Cameroun · nos racines",
    cap2: "Allemagne · notre diaspora",
  },
  temoignages: {
    eyebrow: "Témoignages",
    title: "Ils racontent leur",
    strong: "parcours.",
    items: [
      { quote: "Cœurs Braves m'a permis de transformer une idée en véritable projet d'entreprise. Aujourd'hui, je crée de la valeur et je peux à mon tour accompagner d'autres jeunes.", role: "Entrepreneur", place: "Yaoundé" },
      { quote: "Grâce aux formations reçues, j'ai acquis des compétences que je mets aujourd'hui au service de mon développement professionnel.", role: "Étudiante", place: "Douala" },
      { quote: "J'ai trouvé un réseau de personnes qui croient en moi et qui m'ont aidée à franchir une étape décisive dans mon parcours.", role: "Porteuse de projet", place: "Diaspora" },
      { quote: "Au-delà des compétences, j'ai découvert une communauté engagée où chacun contribue à la réussite des autres.", role: "Membre de Cœurs Braves", place: "Berlin" },
    ],
  },
};

const en: HomeContent = {
  hero: {
    badge: "A solidarity-driven association",
    title: "Investing in",
    accent: "people.",
    lead: "Cœurs Braves acts every day alongside communities: feeding, training, caring for and supporting those who need it most. Our driving force is solidarity.",
    cta2: "Discover our work",
    statLabel: "engaged members",
  },
  manifeste: {
    eyebrow: "The manifesto",
    title: "We believe in the strength of those who",
    accent: "dare to act.",
    side: "One talent can change a family. One idea can transform a community. A person supported today can become tomorrow's mentor.",
    welcome: "Welcome to Cœurs Braves.",
  },
  statsLabels: [
    "Members engaged in our international community",
    "Countries and territories already mobilised",
    "Complementary solidarity programmes",
    "People supported and trained",
  ],
  ecosystem: {
    eyebrow: "Our programmes",
    title: "Concrete actions serving",
    accent: "communities.",
    lead: "Cœurs Braves runs several complementary solidarity programmes to feed, train and support people, as close as possible to their needs.",
  },
  poles: {
    academy: { baseline: "Free training for young people and women.", text: "Courses, personal development and mentoring to help everyone gain skills and regain their independence." },
    fermiers: { baseline: "Feeding communities and creating income.", text: "Solidarity-based farming and livestock to fight food insecurity and provide lasting livelihoods for families." },
    "technology-center": { baseline: "Putting technology at the service of communities.", text: "A space to train young people in digital skills, bridge the technology gap and design solutions to local challenges." },
    "immigration-services": { baseline: "Supporting migration journeys, with humanity.", text: "Human, responsible support to help people prepare a legal and safe move, away from dangerous routes." },
    "la-marmite": { baseline: "Solidarity meals and job integration.", text: "Hospitality serving solidarity: sharing meals, fighting hardship and training young people in culinary trades." },
  },
  domaines: {
    eyebrow: "Our fields of action",
    title: "Sectors essential to",
    strong: "human development.",
    lead: "Every programme is designed to foster people's autonomy, dignity and lasting impact.",
    list: ["Education", "Community health", "Vocational training", "Farming and livestock", "Personal development", "Nonprofit support", "Economic inclusion", "Technology and innovation", "Culture", "Solidarity funding"],
  },
  actions: {
    eyebrow: "Our work",
    title: "Straight from the",
    strong: "field.",
    link: "See all our work",
    items: [
      { tag: "Training", title: "Our entrepreneurship workshops are training a new generation", excerpt: "Dozens of project leaders supported in structuring their business." },
      { tag: "Community", title: "The Clean Hope Center, a place to live and learn", excerpt: "Training, sewing, health: a center serving the community." },
      { tag: "Agriculture", title: "Cœurs Braves Fermiers: farming that feeds and employs", excerpt: "Egg production and farming cooperatives in Cameroon." },
      { tag: "Health", title: "Community health initiatives close to the people", excerpt: "Prevention, awareness and support for the most vulnerable." },
      { tag: "Youth", title: "A community that celebrates every success", excerpt: "Our members, united by the same will to act." },
    ],
  },
  presence: {
    eyebrow: "An international presence",
    title: "From Cameroon to the diaspora.",
    lead: "Our community brings together members in Cameroon, the Central African Republic, Germany and across the African diaspora.",
  },
  identity: {
    eyebrow: "Our identity",
    title: "Proud of our roots, turned towards",
    accent: "the future.",
    lead: "From Cameroon to Germany, our community builds a bridge between nations. One same pride, one same ambition: investing in people.",
    cap1: "Cameroon · our roots",
    cap2: "Germany · our diaspora",
  },
  temoignages: {
    eyebrow: "Testimonials",
    title: "They share their",
    strong: "journey.",
    items: [
      { quote: "Cœurs Braves helped me turn an idea into a real business project. Today I create value and can support other young people in turn.", role: "Entrepreneur", place: "Yaoundé" },
      { quote: "Thanks to the training I received, I gained skills that I now put to work in my professional development.", role: "Student", place: "Douala" },
      { quote: "I found a network of people who believe in me and helped me take a decisive step in my journey.", role: "Project leader", place: "Diaspora" },
      { quote: "Beyond the skills, I discovered a committed community where everyone contributes to each other's success.", role: "Cœurs Braves member", place: "Berlin" },
    ],
  },
};

const de: HomeContent = {
  hero: {
    badge: "Ein solidarischer Verein",
    title: "In den Menschen",
    accent: "investieren.",
    lead: "Cœurs Braves handelt jeden Tag an der Seite der Gemeinschaften: ernähren, ausbilden, versorgen und diejenigen begleiten, die es am dringendsten brauchen. Unser Antrieb ist die Solidarität.",
    cta2: "Unsere Aktionen entdecken",
    statLabel: "engagierte Mitglieder",
  },
  manifeste: {
    eyebrow: "Das Manifest",
    title: "Wir glauben an die Kraft derer, die",
    accent: "zu handeln wagen.",
    side: "Ein Talent kann eine Familie verändern. Eine Idee kann eine Gemeinschaft verwandeln. Wer heute begleitet wird, kann morgen zum Mentor werden.",
    welcome: "Willkommen bei Cœurs Braves.",
  },
  statsLabels: [
    "Engagierte Mitglieder unserer internationalen Gemeinschaft",
    "Bereits mobilisierte Länder und Regionen",
    "Ergänzende solidarische Programme",
    "Begleitete und ausgebildete Menschen",
  ],
  ecosystem: {
    eyebrow: "Unsere Programme",
    title: "Konkrete Aktionen im Dienst der",
    accent: "Gemeinschaften.",
    lead: "Cœurs Braves führt mehrere ergänzende solidarische Programme durch, um Menschen zu ernähren, auszubilden und zu begleiten – so nah wie möglich an ihren Bedürfnissen.",
  },
  poles: {
    academy: { baseline: "Kostenlose Ausbildung für junge Menschen und Frauen.", text: "Kurse, Persönlichkeitsentwicklung und Begleitung, um jedem zu helfen, Kompetenzen zu erwerben und Eigenständigkeit zurückzugewinnen." },
    fermiers: { baseline: "Gemeinschaften ernähren und Einkommen schaffen.", text: "Solidarische Landwirtschaft und Tierhaltung, um Ernährungsunsicherheit zu bekämpfen und Familien dauerhafte Lebensgrundlagen zu bieten." },
    "technology-center": { baseline: "Technologie in den Dienst der Gemeinschaften stellen.", text: "Ein Raum, um junge Menschen digital auszubilden, die technologische Kluft zu verringern und Lösungen für lokale Herausforderungen zu entwickeln." },
    "immigration-services": { baseline: "Mobilitätswege menschlich begleiten.", text: "Menschliche, verantwortungsvolle Begleitung, um Menschen zu helfen, eine legale und sichere Migration vorzubereiten – fernab gefährlicher Wege." },
    "la-marmite": { baseline: "Solidarische Mahlzeiten und Eingliederung durch Arbeit.", text: "Gastronomie im Dienst der Solidarität: Mahlzeiten teilen, Not bekämpfen und junge Menschen in Küchenberufen ausbilden." },
  },
  domaines: {
    eyebrow: "Unsere Handlungsfelder",
    title: "Wesentliche Sektoren für die",
    strong: "menschliche Entwicklung.",
    lead: "Jedes Programm ist darauf ausgelegt, die Eigenständigkeit, die Würde und eine nachhaltige Wirkung für die Menschen zu fördern.",
    list: ["Bildung", "Gemeindegesundheit", "Berufsausbildung", "Landwirtschaft und Tierhaltung", "Persönlichkeitsentwicklung", "Vereinsbegleitung", "Wirtschaftliche Teilhabe", "Technologie und Innovation", "Kultur", "Solidarische Finanzierung"],
  },
  actions: {
    eyebrow: "Unsere Aktionen",
    title: "Direkt aus dem",
    strong: "Feld.",
    link: "Alle Aktionen ansehen",
    items: [
      { tag: "Ausbildung", title: "Unsere Entrepreneurship-Workshops bilden eine neue Generation aus", excerpt: "Dutzende Projektträger bei der Strukturierung ihres Unternehmens begleitet." },
      { tag: "Gemeinschaft", title: "Das Clean Hope Center, ein Ort zum Leben und Lernen", excerpt: "Ausbildung, Nähen, Gesundheit: ein Zentrum im Dienst der Gemeinschaft." },
      { tag: "Landwirtschaft", title: "Cœurs Braves Fermiers: Tierhaltung, die ernährt und beschäftigt", excerpt: "Eierproduktion und landwirtschaftliche Genossenschaften in Kamerun." },
      { tag: "Gesundheit", title: "Gemeindenahe Gesundheitsaktionen ganz nah bei den Menschen", excerpt: "Prävention, Sensibilisierung und Begleitung der Schwächsten." },
      { tag: "Jugend", title: "Eine Gemeinschaft, die jeden Erfolg feiert", excerpt: "Unsere Mitglieder, vereint vom selben Willen zu handeln." },
    ],
  },
  presence: {
    eyebrow: "Eine internationale Präsenz",
    title: "Von Kamerun bis zur Diaspora.",
    lead: "Unsere Gemeinschaft vereint Mitglieder in Kamerun, der Zentralafrikanischen Republik, in Deutschland und in der afrikanischen Diaspora.",
  },
  identity: {
    eyebrow: "Unsere Identität",
    title: "Stolz auf unsere Wurzeln, gewandt zur",
    accent: "Zukunft.",
    lead: "Von Kamerun bis Deutschland schlägt unsere Gemeinschaft eine Brücke zwischen den Nationen. Ein gemeinsamer Stolz, ein gemeinsames Ziel: in den Menschen investieren.",
    cap1: "Kamerun · unsere Wurzeln",
    cap2: "Deutschland · unsere Diaspora",
  },
  temoignages: {
    eyebrow: "Stimmen",
    title: "Sie erzählen ihren",
    strong: "Weg.",
    items: [
      { quote: "Cœurs Braves hat mir geholfen, aus einer Idee ein echtes Unternehmensprojekt zu machen. Heute schaffe ich Wert und kann selbst andere junge Menschen begleiten.", role: "Unternehmer", place: "Yaoundé" },
      { quote: "Dank der Ausbildung habe ich Kompetenzen erworben, die ich heute in meiner beruflichen Entwicklung einsetze.", role: "Studentin", place: "Douala" },
      { quote: "Ich habe ein Netzwerk von Menschen gefunden, die an mich glauben und mir geholfen haben, einen entscheidenden Schritt zu gehen.", role: "Projektträgerin", place: "Diaspora" },
      { quote: "Über die Kompetenzen hinaus habe ich eine engagierte Gemeinschaft entdeckt, in der jeder zum Erfolg der anderen beiträgt.", role: "Mitglied von Cœurs Braves", place: "Berlin" },
    ],
  },
};

const content: Record<Lang, HomeContent> = { fr, en, de };
export function getHome(lang: Lang): HomeContent {
  return content[lang] ?? content.fr;
}
