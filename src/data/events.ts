// Événements Cœurs Braves.
// ⚠️ Exemples de démonstration — à remplacer par les vrais événements de l'association.
// Voir CONTENU-A-FOURNIR.md.

export interface CBEvent {
  slug: string;
  title: string;
  type: string;         // Atelier, Conférence, Rencontre, Formation…
  iso: string;          // AAAA-MM-JJ pour tri / <time>
  dateLabel: string;    // affichage FR
  time: string;         // ex. "14h00 – 17h00"
  place: string;        // lieu / plateforme
  city: string;         // ville ou "En ligne"
  online: boolean;
  image: string;
  excerpt: string;
  registerUrl: string;  // lien d'inscription (placeholder)
}

export const events: CBEvent[] = [
  {
    slug: "atelier-entrepreneuriat-yaounde",
    title: "Atelier entrepreneuriat : de l'idée au projet",
    type: "Atelier",
    iso: "2026-09-20",
    dateLabel: "20 septembre 2026",
    time: "09h00 – 13h00",
    place: "Cœurs Braves Academy",
    city: "Yaoundé",
    online: false,
    image: "/images/cb/entrepreneurs-meeting.jpg",
    excerpt: "Une matinée pour structurer son idée, construire son modèle et rencontrer des mentors.",
    registerUrl: "#",
  },
  {
    slug: "webinaire-immigration-legale",
    title: "Webinaire : réussir sa mobilité vers l'Europe",
    type: "Webinaire",
    iso: "2026-10-08",
    dateLabel: "8 octobre 2026",
    time: "18h00 – 19h30",
    place: "En ligne (Zoom)",
    city: "En ligne",
    online: true,
    image: "/images/cb/young-professionals.jpg",
    excerpt: "Visas travail, CV Europass, langues : les étapes clés d'une immigration légale et réussie.",
    registerUrl: "#",
  },
  {
    slug: "rencontre-diaspora-mainz",
    title: "Rencontre de la diaspora à Mainz",
    type: "Rencontre",
    iso: "2026-11-15",
    dateLabel: "15 novembre 2026",
    time: "16h00 – 20h00",
    place: "Centre communautaire",
    city: "Mainz",
    online: false,
    image: "/images/cb/youth-celebrating.jpg",
    excerpt: "Un temps d'échange et de mise en réseau entre membres de la diaspora et porteurs de projets.",
    registerUrl: "#",
  },
  {
    slug: "forum-fermiers-douala",
    title: "Forum agricole Cœurs Braves Fermiers",
    type: "Forum",
    iso: "2025-05-10",
    dateLabel: "10 mai 2025",
    time: "08h30 – 17h00",
    place: "Espace coopératives",
    city: "Douala",
    online: false,
    image: "/images/cb/farm-eggs.jpg",
    excerpt: "Retour sur une journée dédiée à l'agriculture durable et aux coopératives locales.",
    registerUrl: "#",
  },
  {
    slug: "inauguration-marmite-sangmelima",
    title: "Inauguration de La Marmite à Sangmélima",
    type: "Événement",
    iso: "2025-01-12",
    dateLabel: "12 janvier 2025",
    time: "11h00 – 15h00",
    place: "La Marmite des Cœurs Braves",
    city: "Sangmélima",
    online: false,
    image: "/images/cb/marmite-food.jpg",
    excerpt: "L'ouverture d'un nouveau point de restauration solidaire dans le Sud du Cameroun.",
    registerUrl: "#",
  },
];
