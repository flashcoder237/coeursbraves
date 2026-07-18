// Contenu éditorial de la page « Notre histoire » (FR/EN/DE).
import type { Lang } from "./ui";

interface Pair { t: string; d: string }
interface HistContent {
  hero: { kicker: string; title: string; subtitle: string };
  intro: { eyebrow: string; title: string; strong: string; p1: string; p2: string };
  founder: { eyebrow: string; title: string; accent: string; lead1: string; lead2: string; quote: string };
  values: { eyebrow: string; title: string; strong: string; items: Pair[] };
  timeline: { eyebrow: string; title: string; strong: string; label: string; items: Pair[] };
  closing: { text: string; brand: string; cta2: string };
}

const content: Record<Lang, HistContent> = {
  fr: {
    hero: { kicker: "Notre histoire", title: "Une conviction devenue un mouvement", subtitle: "Chaque grande transformation commence par une conviction : croire qu'un avenir meilleur est possible." },
    intro: { eyebrow: "L'origine", title: "Le potentiel était immense, les opportunités", strong: "limitées.", p1: "Pendant des années, nous avons rencontré des jeunes diplômés sans emploi, des entrepreneurs porteurs d'idées prometteuses mais privés de financement, des femmes déterminées à améliorer les conditions de vie de leur famille.", p2: "Le véritable défi n'était pas le manque de talent, mais l'absence d'un environnement capable d'accompagner, de former, de connecter et d'encourager. C'est cette réalité qui a donné naissance à Cœurs Braves." },
    founder: { eyebrow: "Le fondateur", title: "Une histoire profondément", accent: "humaine.", lead1: "Cœurs Braves est née du refus d'un constat, celui de son fondateur,", lead2: " : autour de lui, des jeunes pleins de ressources restaient sans porte à laquelle frapper, sans personne pour les orienter, les former ou simplement croire en eux. Ce qui manquait n'était pas le talent, mais une main tendue. Il a choisi de la tendre, bénévolement, puis d'en faire une association.", quote: "Personne ne devrait avoir à réussir seul. Ce que nous avons reçu n'a de valeur que partagé." },
    values: { eyebrow: "Nos valeurs", title: "Une communauté bâtie sur des", strong: "valeurs.", items: [
      { t: "Courage", d: "Il nous pousse à entreprendre malgré les difficultés." },
      { t: "Solidarité", d: "Les plus grandes réussites se construisent ensemble." },
      { t: "Impact", d: "Agir avec responsabilité pour des résultats concrets et durables." },
    ] },
    timeline: { eyebrow: "Notre parcours", title: "Les grandes", strong: "étapes.", label: "Étape", items: [
      { t: "La naissance d'une conviction", d: "Les premières réflexions autour d'une organisation dédiée au développement humain et à l'accompagnement des talents." },
      { t: "Les premières actions", d: "Organisation des premiers ateliers, formations et initiatives communautaires." },
      { t: "La structuration de nos programmes", d: "Création progressive des différentes initiatives et actions de solidarité portées par Cœurs Braves." },
      { t: "Aujourd'hui", d: "Une communauté internationale engagée qui rassemble des milliers de membres autour d'une même vision." },
      { t: "Demain", d: "Accélérer la création d'opportunités, renforcer les partenariats stratégiques et contribuer à l'émergence d'une Afrique plus innovante, inclusive et prospère." },
    ] },
    closing: { text: "Si cette vision est aussi la vôtre, alors vous faites déjà partie de l'histoire de", brand: "Cœurs Braves.", cta2: "Découvrir nos programmes" },
  },
  en: {
    hero: { kicker: "Our story", title: "A conviction that became a movement", subtitle: "Every great transformation begins with a conviction: believing that a better future is possible." },
    intro: { eyebrow: "The origin", title: "The potential was immense, the opportunities", strong: "limited.", p1: "For years, we met unemployed graduates, entrepreneurs with promising ideas but no funding, and women determined to improve their families' living conditions.", p2: "The real challenge was not a lack of talent, but the absence of an environment able to support, train, connect and encourage. It was this reality that gave rise to Cœurs Braves." },
    founder: { eyebrow: "The founder", title: "A deeply human", accent: "story.", lead1: "Cœurs Braves was born from a refusal — that of its founder,", lead2: ": all around him, resourceful young people had no door to knock on, no one to guide them, train them or simply believe in them. What was missing was not talent, but a hand held out. He chose to hold out his own, as a volunteer, and then to turn it into an association.", quote: "No one should have to succeed alone. What we have received only has value when it is shared." },
    values: { eyebrow: "Our values", title: "A community built on", strong: "values.", items: [
      { t: "Courage", d: "It drives us to take action despite the difficulties." },
      { t: "Solidarity", d: "The greatest achievements are built together." },
      { t: "Impact", d: "Acting responsibly for concrete, lasting results." },
    ] },
    timeline: { eyebrow: "Our journey", title: "The major", strong: "milestones.", label: "Step", items: [
      { t: "The birth of a conviction", d: "The first reflections around an organisation dedicated to human development and to supporting talent." },
      { t: "The first actions", d: "Organising the first workshops, training courses and community initiatives." },
      { t: "Structuring our programmes", d: "The gradual creation of the various initiatives and solidarity actions led by Cœurs Braves." },
      { t: "Today", d: "A committed international community bringing together thousands of members around a shared vision." },
      { t: "Tomorrow", d: "Accelerating the creation of opportunities, strengthening strategic partnerships and helping a more innovative, inclusive and prosperous Africa emerge." },
    ] },
    closing: { text: "If this vision is also yours, then you are already part of the story of", brand: "Cœurs Braves.", cta2: "Discover our programmes" },
  },
  de: {
    hero: { kicker: "Unsere Geschichte", title: "Eine Überzeugung, die zur Bewegung wurde", subtitle: "Jede große Veränderung beginnt mit einer Überzeugung: dem Glauben, dass eine bessere Zukunft möglich ist." },
    intro: { eyebrow: "Der Ursprung", title: "Das Potenzial war riesig, die Chancen", strong: "begrenzt.", p1: "Jahrelang trafen wir arbeitslose Absolventen, Unternehmer mit vielversprechenden Ideen, aber ohne Finanzierung, und Frauen, die entschlossen waren, die Lebensbedingungen ihrer Familien zu verbessern.", p2: "Die eigentliche Herausforderung war nicht der Mangel an Talent, sondern das Fehlen eines Umfelds, das begleiten, ausbilden, vernetzen und ermutigen kann. Aus dieser Realität entstand Cœurs Braves." },
    founder: { eyebrow: "Der Gründer", title: "Eine zutiefst", accent: "menschliche Geschichte.", lead1: "Cœurs Braves entstand aus einer Weigerung — der ihres Gründers,", lead2: ": Um ihn herum gab es junge Menschen voller Fähigkeiten, aber keine Tür, an die sie klopfen konnten, niemanden, der sie begleitete, ausbildete oder einfach an sie glaubte. Es fehlte nicht an Talent, sondern an einer ausgestreckten Hand. Er entschied sich, ehrenamtlich seine zu reichen — und daraus einen Verein zu machen.", quote: "Niemand sollte allein erfolgreich sein müssen. Was wir empfangen haben, hat nur geteilt einen Wert." },
    values: { eyebrow: "Unsere Werte", title: "Eine Gemeinschaft, die auf", strong: "Werten aufbaut.", items: [
      { t: "Mut", d: "Er treibt uns an, trotz Schwierigkeiten zu handeln." },
      { t: "Solidarität", d: "Die größten Erfolge entstehen gemeinsam." },
      { t: "Wirkung", d: "Verantwortungsvoll handeln für konkrete, dauerhafte Ergebnisse." },
    ] },
    timeline: { eyebrow: "Unser Weg", title: "Die wichtigsten", strong: "Etappen.", label: "Schritt", items: [
      { t: "Die Geburt einer Überzeugung", d: "Die ersten Überlegungen zu einer Organisation für menschliche Entwicklung und die Förderung von Talenten." },
      { t: "Die ersten Aktionen", d: "Organisation der ersten Workshops, Ausbildungen und Gemeinschaftsinitiativen." },
      { t: "Strukturierung unserer Programme", d: "Die schrittweise Schaffung der verschiedenen Initiativen und solidarischen Aktionen von Cœurs Braves." },
      { t: "Heute", d: "Eine engagierte internationale Gemeinschaft, die Tausende Mitglieder um eine gemeinsame Vision vereint." },
      { t: "Morgen", d: "Die Schaffung von Chancen beschleunigen, strategische Partnerschaften stärken und zu einem innovativeren, inklusiveren und wohlhabenderen Afrika beitragen." },
    ] },
    closing: { text: "Wenn diese Vision auch Ihre ist, dann sind Sie bereits Teil der Geschichte von", brand: "Cœurs Braves.", cta2: "Unsere Programme entdecken" },
  },
};

export const getHist = (lang: Lang): HistContent => content[lang] ?? content.fr;
