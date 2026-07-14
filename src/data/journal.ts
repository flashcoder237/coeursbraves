// Articles du Journal Cœurs Braves.
// Certains proviennent de la page Facebook officielle (LESCOEURSBRAVES) ;
// d'autres reprennent les activités réelles de l'association.
// Chaque bloc : { h?: sous-titre, text: paragraphe }.

export interface ArticleBlock { h?: string; text: string; }
export interface Article {
  slug: string;
  title: string;
  category: string;
  date: string;      // affichage FR
  iso: string;       // pour <time> et tri
  image: string;
  excerpt: string;
  source?: string;
  body: ArticleBlock[];
  gallery?: { src: string; alt: string }[];
}

export const articles: Article[] = [
  {
    slug: "la-marmite-sangmelima",
    title: "La Marmite des Cœurs Braves s'installe à Sangmélima",
    category: "Nos actions",
    date: "12 janvier 2025",
    iso: "2025-01-12",
    image: "/images/cb/journal/marmite-equipe.jpg",
    excerpt: "Un nouveau point de restauration solidaire ouvre dans le Sud du Cameroun : cuisiner, employer, rassembler.",
    source: "Photos issues de notre page Facebook",
    body: [
      { text: "La Marmite des Cœurs Braves poursuit son déploiement avec l'ouverture d'un nouveau point à Sangmélima, dans la région du Sud. Bien plus qu'une cuisine, La Marmite met la restauration au service de la solidarité, de l'emploi et du vivre-ensemble." },
      { h: "Nourrir et employer", text: "Chaque point de restauration crée des emplois locaux et forme des jeunes aux métiers de la cuisine et du service. Les repas préparés valorisent les produits des coopératives de Cœurs Braves Fermiers, dans une logique de circuit court et de qualité." },
      { h: "Un lieu de rencontre", text: "La Marmite est aussi un lieu de vie et de convivialité : un espace chaleureux — restaurant, bar et lounge — où l'on partage un repas, où l'on échange et où l'on crée du lien. C'est cet esprit, au cœur des communautés, qui donne tout son sens au projet." },
      { h: "Le rendez-vous de la communauté", text: "Repas partagés, retrouvailles et rassemblements : à Sangmélima, La Marmite est vite devenue un point de ralliement où la communauté Cœurs Braves se retrouve, célèbre et avance ensemble — « manger comme chez vous »." },
    ],
    gallery: [
      { src: "/images/cb/journal/marmite-diner.jpg", alt: "Repas partagé à La Marmite des Cœurs Braves à Sangmélima" },
      { src: "/images/cb/journal/marmite-communaute.jpg", alt: "Rassemblement de la communauté à La Marmite des Cœurs Braves" },
      { src: "/images/cb/journal/marmite-salle.jpg", alt: "La salle du restaurant La Marmite des Cœurs Braves" },
      { src: "/images/cb/journal/marmite-lounge.jpg", alt: "L'espace lounge de La Marmite des Cœurs Braves" },
      { src: "/images/cb/journal/marmite-bar.jpg", alt: "Le bar de La Marmite des Cœurs Braves" },
      { src: "/images/cb/journal/marmite-comptoir.jpg", alt: "Le comptoir de La Marmite des Cœurs Braves" },
    ],
  },
  {
    slug: "clean-hope-center",
    title: "Le Clean Hope Center, un lieu de vie et d'apprentissage",
    category: "Communauté",
    date: "5 novembre 2024",
    iso: "2024-11-05",
    image: "/images/cb/team-clean-hope.jpg",
    excerpt: "Formation, couture, santé : au Clean Hope Center, la communauté apprend, se soigne et construit ensemble.",
    body: [
      { text: "Le Clean Hope Center incarne la manière d'agir de Cœurs Braves : un lieu unique où se croisent la formation, l'artisanat, la santé communautaire et l'accompagnement des plus vulnérables." },
      { h: "Apprendre un métier", text: "Des ateliers de couture et d'artisanat permettent aux participants d'acquérir des compétences concrètes et de développer une activité génératrice de revenus. Chaque formation ouvre une nouvelle perspective." },
      { h: "Prendre soin", text: "Le centre accueille aussi des actions de santé communautaire : sensibilisation, prévention et accompagnement. Parce que le développement humain commence par le bien-être des personnes." },
    ],
  },
  {
    slug: "ressources-naturelles-cameroun",
    title: "Les ressources naturelles du Cameroun",
    category: "Regard",
    date: "2 mars 2024",
    iso: "2024-03-02",
    image: "/images/cb/journal/ressources-cameroun.jpg",
    excerpt: "Surnommé « l'Afrique en miniature », le Cameroun recèle un potentiel économique considérable — à valoriser durablement.",
    source: "Publié sur notre page Facebook",
    body: [
      { text: "Le Cameroun, souvent surnommé « l'Afrique en miniature » en raison de sa diversité géographique et culturelle, est riche en ressources naturelles. Voici un tour d'horizon des principales." },
      { h: "Ressources agricoles", text: "Le pays dispose d'une grande variété de terres arables et de conditions climatiques favorables à l'agriculture. Les principales cultures comprennent le cacao, le café, le coton, le maïs, les bananes, le manioc et les palmiers à huile. L'agriculture joue un rôle clé dans l'économie." },
      { h: "Ressources forestières", text: "Le Cameroun possède de vastes forêts tropicales riches en bois précieux — acajou, ébène, sapelli — et en produits non ligneux comme le caoutchouc naturel et diverses plantes médicinales." },
      { h: "Ressources minérales", text: "Bauxite, fer, cobalt, uranium, or et diamant : le potentiel minier du pays est encore en grande partie inexploité." },
      { h: "Pétrole et gaz naturel", text: "Les réserves se situent principalement dans le bassin du Rio del Rey et la zone de Douala/Kribi-Campo. Le pétrole reste l'une des principales sources de revenus à l'exportation." },
      { h: "Ressources en eau", text: "Rivières, lacs et façade côtière le long du golfe de Guinée : ces ressources sont cruciales pour l'agriculture, l'hydroélectricité et l'eau potable." },
      { h: "Énergies renouvelables", text: "Outre l'hydroélectricité, le pays dispose d'un potentiel solaire, éolien et géothermique encore largement sous-exploité." },
      { h: "Ressources halieutiques", text: "Les eaux maritimes et fluviales regorgent de ressources halieutiques. La pêche est une activité économique importante pour les communautés côtières et fluviales." },
      { text: "Ces ressources offrent un potentiel considérable. Leur exploitation pose toutefois des défis majeurs de développement durable et de protection de l'environnement — au cœur de notre engagement." },
    ],
  },
  {
    slug: "la-raffinerie",
    title: "La Raffinerie : le programme de transformation personnelle",
    category: "Academy",
    date: "18 septembre 2023",
    iso: "2023-09-18",
    image: "/images/cb/young-professionals.jpg",
    excerpt: "Charisme, confiance en soi, élégance sociale : le programme premium de Cœurs Braves Academy qui révèle le meilleur de chacun.",
    body: [
      { text: "Intégré à Cœurs Braves Academy, La Raffinerie est un programme premium de transformation sociale et relationnelle. Son ambition : révéler le potentiel humain au-delà des seules compétences techniques." },
      { h: "Se révéler", text: "Développement personnel, charisme, confiance en soi, image personnelle : le programme accompagne chacun vers une meilleure connaissance de soi et une présence affirmée." },
      { h: "Rayonner", text: "Relations humaines, élégance sociale, éducation émotionnelle et comportement professionnel : autant de clés pour construire des relations solides et évoluer avec assurance dans tous les milieux." },
    ],
  },
  {
    slug: "fermiers-elevage",
    title: "Cœurs Braves Fermiers : l'élevage qui nourrit et emploie",
    category: "Agriculture",
    date: "10 juin 2023",
    iso: "2023-06-10",
    image: "/images/cb/farm-eggs.jpg",
    excerpt: "Production d'œufs, coopératives et agriculture moderne : nourrir les communautés tout en créant des revenus durables.",
    body: [
      { text: "Cœurs Braves Fermiers développe une agriculture moderne, productive et durable. De la production d'œufs à l'élevage et à la transformation alimentaire, le pôle nourrit les communautés tout en générant des revenus." },
      { h: "Des coopératives structurantes", text: "En regroupant les producteurs en coopératives, le pôle mutualise les moyens, améliore la qualité et ouvre l'accès aux marchés. L'agriculture devient un véritable levier de développement local." },
      { h: "Former à l'agro-pastoral", text: "Cœurs Braves Fermiers forme aux techniques modernes d'agriculture et d'élevage, pour que chaque exploitation gagne en productivité et en autonomie." },
    ],
  },
  {
    slug: "bouteilles-plastique-utiles",
    title: "Ces bouteilles plastique qui deviennent utiles",
    category: "Environnement",
    date: "17 avril 2021",
    iso: "2021-04-17",
    image: "/images/cb/agri-produce.jpg",
    excerpt: "Et si nos déchets devenaient des ressources ? Un regard sur la seconde vie des bouteilles en plastique.",
    source: "Publié sur notre page Facebook",
    body: [
      { text: "Voilà à quoi peuvent également servir les bouteilles en plastique. Beaucoup de personnes ne le savent pas : bien réutilisées, elles deviennent des ressources utiles au quotidien." },
      { h: "Transformer le déchet en valeur", text: "De la culture hors-sol aux objets du quotidien, l'upcycling ouvre des pistes concrètes pour réduire les déchets tout en créant de la valeur. Une démarche simple, à la portée de chaque communauté." },
      { h: "Sensibiliser, agir", text: "Cœurs Braves encourage ces initiatives écologiques et communautaires, parce que le développement durable commence par les gestes du quotidien et le partage des savoirs." },
    ],
  },
];
