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
    badge: "Une communauté en action",
    title: "Investir dans",
    accent: "l'humain.",
    lead: "Chez Cœurs Braves, nous croyons qu'un changement durable naît de la transmission des compétences, de l'entrepreneuriat et de la coopération.",
    cta2: "Découvrir notre mission",
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
    "Pôles complémentaires au service du développement",
    "Personnes accompagnées et formées",
  ],
  ecosystem: {
    eyebrow: "Notre écosystème",
    title: "Un écosystème au service du",
    accent: "développement.",
    lead: "Cœurs Braves réunit plusieurs pôles complémentaires qui collaborent pour accompagner les personnes et soutenir les projets.",
  },
  poles: {
    academy: { baseline: "Former les talents de demain.", text: "Le centre de formation, d'éducation et de transformation humaine : développement personnel, leadership, entrepreneuriat, langues et compétences professionnelles." },
    fermiers: { baseline: "Développer une agriculture moderne, productive et durable.", text: "Agriculture moderne, élevage, transformation alimentaire et coopératives : nourrir les communautés tout en créant des revenus durables." },
    "assaa-technologies": { baseline: "Concevoir les solutions numériques qui accompagnent la transformation.", text: "Développement de solutions numériques, applications et outils au service des organisations et des communautés." },
    "technology-center": { baseline: "Créer un environnement propice à l'innovation et à la recherche.", text: "Intelligence artificielle, robotique, recherche scientifique et prototypage : un pôle dédié à l'entrepreneuriat technologique africain." },
    "immigration-services": { baseline: "Accompagner les parcours de mobilité de manière responsable et légale.", text: "Immigration légale, emploi, coaching CV Europass, visas travail, formation en langues et accompagnement administratif vers l'Europe et d'autres destinations." },
    "la-marmite": { baseline: "Mettre la restauration au service de la solidarité et de l'emploi.", text: "La restauration comme levier de solidarité, d'emploi et de vivre-ensemble au sein des communautés." },
  },
  domaines: {
    eyebrow: "Nos domaines d'action",
    title: "Des secteurs essentiels au",
    strong: "développement humain.",
    lead: "Chaque programme est conçu pour favoriser l'autonomie, la création de valeur et l'impact durable.",
    list: ["Entrepreneuriat", "Technologies et innovation", "Formation professionnelle", "Agriculture et élevage", "Santé communautaire", "Éducation", "Immigration légale", "Investissement", "Développement personnel", "Emploi", "Culture", "Accompagnement associatif"],
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
    badge: "A community in action",
    title: "Investing in",
    accent: "people.",
    lead: "At Cœurs Braves, we believe lasting change grows from sharing skills, entrepreneurship and cooperation.",
    cta2: "Discover our mission",
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
    "Complementary hubs serving development",
    "People supported and trained",
  ],
  ecosystem: {
    eyebrow: "Our ecosystem",
    title: "An ecosystem serving",
    accent: "development.",
    lead: "Cœurs Braves brings together several complementary hubs that work hand in hand to support people and back their projects.",
  },
  poles: {
    academy: { baseline: "Training tomorrow's talent.", text: "The hub for training, education and human transformation: personal development, leadership, entrepreneurship, languages and professional skills." },
    fermiers: { baseline: "Building modern, productive and sustainable agriculture.", text: "Modern farming, livestock, food processing and cooperatives: feeding communities while creating lasting income." },
    "assaa-technologies": { baseline: "Designing the digital solutions that drive transformation.", text: "Development of digital solutions, applications and tools serving organisations and communities." },
    "technology-center": { baseline: "Creating an environment for innovation and research.", text: "Artificial intelligence, robotics, scientific research and prototyping: a hub dedicated to African tech entrepreneurship." },
    "immigration-services": { baseline: "Supporting mobility journeys responsibly and legally.", text: "Legal immigration, employment, Europass CV coaching, work visas, language training and administrative support towards Europe and beyond." },
    "la-marmite": { baseline: "Putting hospitality at the service of solidarity and jobs.", text: "Hospitality as a lever for solidarity, employment and living together within communities." },
  },
  domaines: {
    eyebrow: "Our fields of action",
    title: "Sectors essential to",
    strong: "human development.",
    lead: "Every programme is designed to foster autonomy, value creation and lasting impact.",
    list: ["Entrepreneurship", "Technology and innovation", "Vocational training", "Farming and livestock", "Community health", "Education", "Legal immigration", "Investment", "Personal development", "Employment", "Culture", "Nonprofit support"],
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
    badge: "Eine Gemeinschaft in Aktion",
    title: "In den Menschen",
    accent: "investieren.",
    lead: "Bei Cœurs Braves glauben wir, dass nachhaltiger Wandel aus der Weitergabe von Kompetenzen, Unternehmergeist und Zusammenarbeit entsteht.",
    cta2: "Unsere Mission entdecken",
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
    "Ergänzende Bereiche im Dienst der Entwicklung",
    "Begleitete und ausgebildete Menschen",
  ],
  ecosystem: {
    eyebrow: "Unser Ökosystem",
    title: "Ein Ökosystem im Dienst der",
    accent: "Entwicklung.",
    lead: "Cœurs Braves vereint mehrere ergänzende Bereiche, die zusammenarbeiten, um Menschen zu begleiten und ihre Projekte zu fördern.",
  },
  poles: {
    academy: { baseline: "Die Talente von morgen ausbilden.", text: "Das Zentrum für Ausbildung, Bildung und menschliche Entwicklung: Persönlichkeitsentwicklung, Führung, Unternehmertum, Sprachen und berufliche Kompetenzen." },
    fermiers: { baseline: "Eine moderne, produktive und nachhaltige Landwirtschaft entwickeln.", text: "Moderne Landwirtschaft, Tierhaltung, Lebensmittelverarbeitung und Genossenschaften: Gemeinschaften ernähren und zugleich dauerhaftes Einkommen schaffen." },
    "assaa-technologies": { baseline: "Digitale Lösungen entwickeln, die den Wandel begleiten.", text: "Entwicklung digitaler Lösungen, Anwendungen und Werkzeuge im Dienst von Organisationen und Gemeinschaften." },
    "technology-center": { baseline: "Ein Umfeld für Innovation und Forschung schaffen.", text: "Künstliche Intelligenz, Robotik, wissenschaftliche Forschung und Prototyping: ein Bereich für afrikanisches Technologie-Unternehmertum." },
    "immigration-services": { baseline: "Mobilitätswege verantwortungsvoll und legal begleiten.", text: "Legale Einwanderung, Beschäftigung, Europass-Lebenslauf-Coaching, Arbeitsvisa, Sprachausbildung und administrative Begleitung nach Europa und darüber hinaus." },
    "la-marmite": { baseline: "Gastronomie in den Dienst von Solidarität und Beschäftigung stellen.", text: "Gastronomie als Hebel für Solidarität, Beschäftigung und Zusammenleben in den Gemeinschaften." },
  },
  domaines: {
    eyebrow: "Unsere Handlungsfelder",
    title: "Wesentliche Sektoren für die",
    strong: "menschliche Entwicklung.",
    lead: "Jedes Programm ist darauf ausgelegt, Eigenständigkeit, Wertschöpfung und nachhaltige Wirkung zu fördern.",
    list: ["Unternehmertum", "Technologie und Innovation", "Berufsausbildung", "Landwirtschaft und Tierhaltung", "Gemeindegesundheit", "Bildung", "Legale Einwanderung", "Investition", "Persönlichkeitsentwicklung", "Beschäftigung", "Kultur", "Vereinsbegleitung"],
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
