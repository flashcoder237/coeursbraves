// Contenu éditorial de la page Contact (FR/EN/DE).
import type { Lang } from "./ui";

interface ContactContent {
  hero: { kicker: string; title: string; subtitle: string };
  info: { eyebrow: string; title: string; strong: string; emailLabel: string; phoneLabel: string; whatsappLink: string; presenceLabel: string };
  form: { objectPlaceholder: string; objects: string[]; message: string; submit: string; objectLabel: string };
}

const content: Record<Lang, ContactContent> = {
  fr: {
    hero: { kicker: "Contact", title: "Échangeons ensemble", subtitle: "Une question, un projet, une envie de vous engager ? Notre équipe vous répond." },
    info: { eyebrow: "Nous joindre", title: "Nos", strong: "coordonnées.", emailLabel: "E-mail", phoneLabel: "Téléphone & WhatsApp", whatsappLink: "Écrire sur WhatsApp", presenceLabel: "Siège & présence" },
    form: { objectPlaceholder: "Objet de votre message", objects: ["Adhésion / bénévolat", "Partenariat", "Don / mécénat", "Proposer un projet", "Autre"], message: "Votre message", submit: "Envoyer mon message", objectLabel: "Objet" },
  },
  en: {
    hero: { kicker: "Contact", title: "Let's talk", subtitle: "A question, a project, a wish to get involved? Our team is here to help." },
    info: { eyebrow: "Get in touch", title: "Our", strong: "contact details.", emailLabel: "Email", phoneLabel: "Phone & WhatsApp", whatsappLink: "Message us on WhatsApp", presenceLabel: "Head office & presence" },
    form: { objectPlaceholder: "Subject of your message", objects: ["Membership / volunteering", "Partnership", "Donation / patronage", "Propose a project", "Other"], message: "Your message", submit: "Send my message", objectLabel: "Subject" },
  },
  de: {
    hero: { kicker: "Kontakt", title: "Sprechen wir miteinander", subtitle: "Eine Frage, ein Projekt, der Wunsch mitzumachen? Unser Team antwortet Ihnen." },
    info: { eyebrow: "Kontakt aufnehmen", title: "Unsere", strong: "Kontaktdaten.", emailLabel: "E-Mail", phoneLabel: "Telefon & WhatsApp", whatsappLink: "Auf WhatsApp schreiben", presenceLabel: "Sitz & Präsenz" },
    form: { objectPlaceholder: "Betreff Ihrer Nachricht", objects: ["Mitgliedschaft / Freiwilligenarbeit", "Partnerschaft", "Spende / Mäzenatentum", "Ein Projekt vorschlagen", "Sonstiges"], message: "Ihre Nachricht", submit: "Nachricht senden", objectLabel: "Betreff" },
  },
};

export const getContact = (lang: Lang): ContactContent => content[lang] ?? content.fr;
