// Contenu éditorial de la page « Rejoindre » (FR/EN/DE).
import type { Lang } from "./ui";

interface Pair { t: string; d: string }
interface Type { title: string; text: string }
interface JoinContent {
  hero: { kicker: string; title: string; subtitle: string };
  why: { eyebrow: string; title: string; strong: string; lead: string; cta: string };
  who: { eyebrow: string; title: string; strong: string; profils: Pair[] };
  engage: { eyebrow: string; title: string; strong: string; types: Type[] };
  parcours: { eyebrow: string; title: string; strong: string; steps: string[] };
  form: { eyebrow: string; title: string; accent: string; lead: string; selectPlaceholder: string; profilLabel: string; message: string; submit: string };
}

const content: Record<Lang, JoinContent> = {
  fr: {
    hero: { kicker: "Rejoindre Cœurs Braves", title: "Ensemble, transformons les ambitions en actions", subtitle: "Un mouvement est plus fort lorsqu'il grandit avec celles et ceux qui partagent sa vision." },
    why: { eyebrow: "Pourquoi nous rejoindre", title: "Grandir tout en aidant les autres à", strong: "grandir.", lead: "En devenant membre, vous intégrez un réseau qui place l'humain au cœur du développement. Vous rejoignez une communauté qui partage les mêmes ambitions : apprendre, entreprendre, créer de la valeur et contribuer positivement au développement de la société.", cta: "Faire ma demande" },
    who: { eyebrow: "Pour qui", title: "Une communauté", strong: "ouverte à tous.", profils: [
      { t: "Les étudiants", d: "Pour développer leurs compétences et préparer leur avenir." },
      { t: "Les jeunes diplômés", d: "Pour renforcer leur employabilité et construire leur carrière." },
      { t: "Les entrepreneurs", d: "Pour structurer leurs projets, développer leur réseau et accélérer leur croissance." },
      { t: "Les femmes", d: "Pour favoriser leur autonomie économique, leur leadership et leur participation." },
      { t: "Les professionnels", d: "Pour partager leur expertise et accompagner de nouveaux talents." },
      { t: "La diaspora", d: "Pour contribuer au développement de leurs communautés d'origine." },
      { t: "Les associations", d: "Pour renforcer leurs capacités et développer leurs projets." },
      { t: "Entreprises & institutions", d: "Pour créer des partenariats stratégiques et développer leur impact." },
    ] },
    engage: { eyebrow: "S'engager", title: "Les différentes façons de", strong: "s'engager.", types: [
      { title: "Membre", text: "Participez à la vie de la communauté et bénéficiez de nos programmes." },
      { title: "Bénévole", text: "Mettez votre temps, vos compétences ou votre expérience au service de projets à impact." },
      { title: "Mentor", text: "Accompagnez les jeunes, les entrepreneurs et les porteurs de projets dans leur parcours." },
      { title: "Expert", text: "Intervenez lors de formations, de conférences ou de missions de conseil." },
      { title: "Partenaire", text: "Construisez avec nous des projets de développement humain, économique et social." },
      { title: "Donateur", text: "Soutenez nos actions par un don, ponctuel ou régulier, quel qu'en soit le montant." },
      { title: "Investisseur ou mécène", text: "Contribuez au financement d'initiatives créatrices de valeur et d'impact." },
    ] },
    parcours: { eyebrow: "Le parcours", title: "Le parcours d'un", strong: "membre.", steps: [
      "Vous découvrez la communauté, sa vision, ses programmes et ses opportunités.",
      "Vous rejoignez le mouvement en remplissant votre demande d'adhésion.",
      "Nous apprenons à vous connaître pour vous orienter vers les initiatives adaptées.",
      "Vous participez aux formations, événements, projets et activités.",
      "Vous grandissez : vous développez vos compétences, votre réseau et vos projets.",
      "Vous inspirez les autres en devenant à votre tour acteur du changement.",
    ] },
    form: { eyebrow: "Adhésion", title: "Faites le premier", accent: "pas.", lead: "Remplissez votre demande : notre équipe vous accompagnera pour vous orienter vers les opportunités correspondant à votre profil.", selectPlaceholder: "Je souhaite devenir…", profilLabel: "Profil souhaité", message: "Présentez votre parcours et vos centres d'intérêt", submit: "Envoyer ma demande d'adhésion" },
  },
  en: {
    hero: { kicker: "Join Cœurs Braves", title: "Together, let's turn ambitions into action", subtitle: "A movement is stronger when it grows with those who share its vision." },
    why: { eyebrow: "Why join us", title: "Grow while helping others", strong: "grow.", lead: "By becoming a member, you join a network that puts people at the heart of development. You join a community that shares the same ambitions: to learn, start ventures, create value and contribute positively to society.", cta: "Apply now" },
    who: { eyebrow: "Who for", title: "A community", strong: "open to all.", profils: [
      { t: "Students", d: "To develop their skills and prepare for their future." },
      { t: "Recent graduates", d: "To boost their employability and build their careers." },
      { t: "Entrepreneurs", d: "To structure their projects, grow their network and accelerate their growth." },
      { t: "Women", d: "To foster their economic independence, leadership and participation." },
      { t: "Professionals", d: "To share their expertise and support new talent." },
      { t: "The diaspora", d: "To contribute to the development of their home communities." },
      { t: "Associations", d: "To strengthen their capacity and grow their projects." },
      { t: "Companies & institutions", d: "To build strategic partnerships and grow their impact." },
    ] },
    engage: { eyebrow: "Get involved", title: "The different ways to", strong: "get involved.", types: [
      { title: "Member", text: "Take part in community life and benefit from our programmes." },
      { title: "Volunteer", text: "Put your time, skills or experience at the service of high-impact projects." },
      { title: "Mentor", text: "Support young people, entrepreneurs and project leaders along their journey." },
      { title: "Expert", text: "Contribute to training, conferences or advisory missions." },
      { title: "Partner", text: "Build human, economic and social development projects with us." },
      { title: "Donor", text: "Support our work with a one-off or regular donation, whatever the amount." },
      { title: "Investor or patron", text: "Help fund initiatives that create value and impact." },
    ] },
    parcours: { eyebrow: "The journey", title: "A member's", strong: "journey.", steps: [
      "You discover the community, its vision, programmes and opportunities.",
      "You join the movement by submitting your membership request.",
      "We get to know you to point you towards the right initiatives.",
      "You take part in training, events, projects and activities.",
      "You grow: you develop your skills, your network and your projects.",
      "You inspire others by becoming an agent of change in turn.",
    ] },
    form: { eyebrow: "Membership", title: "Take the first", accent: "step.", lead: "Fill in your request: our team will support you and guide you towards the opportunities that match your profile.", selectPlaceholder: "I would like to become…", profilLabel: "Desired profile", message: "Tell us about your background and interests", submit: "Send my membership request" },
  },
  de: {
    hero: { kicker: "Cœurs Braves beitreten", title: "Gemeinsam machen wir aus Ambitionen Taten", subtitle: "Eine Bewegung ist stärker, wenn sie mit jenen wächst, die ihre Vision teilen." },
    why: { eyebrow: "Warum mitmachen", title: "Wachsen und andere beim", strong: "Wachsen unterstützen.", lead: "Als Mitglied treten Sie einem Netzwerk bei, das den Menschen in den Mittelpunkt der Entwicklung stellt. Sie werden Teil einer Gemeinschaft mit denselben Zielen: lernen, gründen, Wert schaffen und positiv zur Gesellschaft beitragen.", cta: "Jetzt bewerben" },
    who: { eyebrow: "Für wen", title: "Eine Gemeinschaft", strong: "offen für alle.", profils: [
      { t: "Studierende", d: "Um ihre Kompetenzen zu entwickeln und ihre Zukunft vorzubereiten." },
      { t: "Berufseinsteiger", d: "Um ihre Beschäftigungsfähigkeit zu stärken und ihre Karriere aufzubauen." },
      { t: "Unternehmer", d: "Um ihre Projekte zu strukturieren, ihr Netzwerk auszubauen und zu wachsen." },
      { t: "Frauen", d: "Um ihre wirtschaftliche Eigenständigkeit, Führung und Teilhabe zu fördern." },
      { t: "Fachkräfte", d: "Um ihr Wissen zu teilen und neue Talente zu begleiten." },
      { t: "Die Diaspora", d: "Um zur Entwicklung ihrer Herkunftsgemeinschaften beizutragen." },
      { t: "Vereine", d: "Um ihre Kapazitäten zu stärken und ihre Projekte auszubauen." },
      { t: "Unternehmen & Institutionen", d: "Um strategische Partnerschaften zu schließen und Wirkung zu entfalten." },
    ] },
    engage: { eyebrow: "Engagieren", title: "Die verschiedenen Wege, sich zu", strong: "engagieren.", types: [
      { title: "Mitglied", text: "Nehmen Sie am Gemeinschaftsleben teil und profitieren Sie von unseren Programmen." },
      { title: "Freiwillige/r", text: "Stellen Sie Ihre Zeit, Kompetenzen oder Erfahrung in den Dienst wirkungsvoller Projekte." },
      { title: "Mentor/in", text: "Begleiten Sie junge Menschen, Unternehmer und Projektträger auf ihrem Weg." },
      { title: "Expert/in", text: "Wirken Sie bei Schulungen, Konferenzen oder Beratungsmandaten mit." },
      { title: "Partner", text: "Gestalten Sie mit uns Projekte der menschlichen, wirtschaftlichen und sozialen Entwicklung." },
      { title: "Spender/in", text: "Unterstützen Sie unsere Arbeit mit einer einmaligen oder regelmäßigen Spende, in beliebiger Höhe." },
      { title: "Investor/in oder Förderer", text: "Tragen Sie zur Finanzierung wertvoller und wirkungsvoller Initiativen bei." },
    ] },
    parcours: { eyebrow: "Der Weg", title: "Der Weg eines", strong: "Mitglieds.", steps: [
      "Sie entdecken die Gemeinschaft, ihre Vision, Programme und Chancen.",
      "Sie treten der Bewegung bei, indem Sie Ihren Aufnahmeantrag ausfüllen.",
      "Wir lernen Sie kennen, um Sie zu den passenden Initiativen zu führen.",
      "Sie nehmen an Schulungen, Veranstaltungen, Projekten und Aktivitäten teil.",
      "Sie wachsen: Sie entwickeln Ihre Kompetenzen, Ihr Netzwerk und Ihre Projekte.",
      "Sie inspirieren andere, indem Sie selbst zum Gestalter des Wandels werden.",
    ] },
    form: { eyebrow: "Mitgliedschaft", title: "Machen Sie den ersten", accent: "Schritt.", lead: "Füllen Sie Ihren Antrag aus: Unser Team begleitet Sie und weist Ihnen den Weg zu den Chancen, die zu Ihrem Profil passen.", selectPlaceholder: "Ich möchte werden…", profilLabel: "Gewünschtes Profil", message: "Stellen Sie Ihren Werdegang und Ihre Interessen vor", submit: "Aufnahmeantrag senden" },
  },
};

export const getJoin = (lang: Lang): JoinContent => content[lang] ?? content.fr;
