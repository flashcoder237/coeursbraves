// Contenu éditorial de la page FAQ (FR/EN/DE).
import type { Lang } from "./ui";

interface QA { q: string; a: string }
interface FaqContent {
  hero: { kicker: string; title: string; subtitle: string };
  intro: { eyebrow: string; title: string; strong: string; boxTitle: string; boxText: string; boxCta: string };
  items: QA[];
}

const content: Record<Lang, FaqContent> = {
  fr: {
    hero: { kicker: "Questions fréquentes", title: "Vous avez des questions ?", subtitle: "Retrouvez l'essentiel sur Cœurs Braves, notre communauté et nos actions." },
    intro: { eyebrow: "Bon à savoir", title: "Tout ce qu'il faut", strong: "savoir.", boxTitle: "Une autre question ?", boxText: "Notre équipe est là pour vous accompagner et répondre à vos demandes.", boxCta: "Nous contacter" },
    items: [
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
    ],
  },
  en: {
    hero: { kicker: "Frequently asked questions", title: "Have questions?", subtitle: "Find the essentials about Cœurs Braves, our community and our work." },
    intro: { eyebrow: "Good to know", title: "Everything you need to", strong: "know.", boxTitle: "Another question?", boxText: "Our team is here to support you and answer your requests.", boxCta: "Contact us" },
    items: [
      { q: "What is Cœurs Braves?", a: "Cœurs Braves is an international association and movement that invests in people to create lasting opportunities in Africa. Our community operates in Cameroon, the Central African Republic, Germany and across the African diaspora." },
      { q: "How do I become a member?", a: "Simply fill in the online membership form, share your background and interests, then talk with our team, who will point you towards the opportunities that match your profile." },
      { q: "Who can join the community?", a: "Students, recent graduates, entrepreneurs, women, professionals, members of the diaspora, associations, companies and institutions: there is a place for everyone, whatever their background." },
      { q: "Are the training courses open to everyone?", a: "Yes. Our courses and workshops are designed to support each person according to their needs, from beginners to experienced profiles." },
      { q: "How do I propose a project?", a: "Contact our team through the contact or membership form describing your project. We review every proposal and offer a tailored support pathway." },
      { q: "How do I become a partner?", a: "Companies, foundations, universities, institutions and investors can join us via the Partners page. Every partnership is tailor-made around a shared vision." },
      { q: "How can I support your work?", a: "You can make a one-off or regular donation, support a specific programme, become a patron, give in kind or offer your skills as a volunteer or mentor." },
      { q: "In which countries do you operate?", a: "Our community is present in Cameroon, the Central African Republic, Germany and within several communities of the African diaspora." },
      { q: "Can I become a volunteer?", a: "Absolutely. You can put your time, skills or experience at the service of high-impact projects as a volunteer, mentor or expert." },
      { q: "How can I follow your news?", a: "Subscribe to our newsletter and follow us on social media to receive our calls for projects, training opportunities and events." },
    ],
  },
  de: {
    hero: { kicker: "Häufige Fragen", title: "Sie haben Fragen?", subtitle: "Hier finden Sie das Wesentliche über Cœurs Braves, unsere Gemeinschaft und unsere Aktionen." },
    intro: { eyebrow: "Gut zu wissen", title: "Alles, was Sie wissen", strong: "müssen.", boxTitle: "Noch eine Frage?", boxText: "Unser Team ist für Sie da und beantwortet Ihre Anliegen.", boxCta: "Kontaktieren Sie uns" },
    items: [
      { q: "Was ist Cœurs Braves?", a: "Cœurs Braves ist ein internationaler Verein und eine Bewegung, die in den Menschen investiert, um nachhaltige Chancen in Afrika zu schaffen. Unsere Gemeinschaft ist in Kamerun, der Zentralafrikanischen Republik, in Deutschland und in der afrikanischen Diaspora aktiv." },
      { q: "Wie werde ich Mitglied?", a: "Füllen Sie einfach das Online-Aufnahmeformular aus, stellen Sie Ihren Werdegang und Ihre Interessen vor und tauschen Sie sich mit unserem Team aus, das Sie zu den passenden Chancen führt." },
      { q: "Wer kann der Gemeinschaft beitreten?", a: "Studierende, Berufseinsteiger, Unternehmer, Frauen, Fachkräfte, Mitglieder der Diaspora, Vereine, Unternehmen und Institutionen: Für jeden gibt es einen Platz, unabhängig vom Werdegang." },
      { q: "Stehen die Ausbildungen allen offen?", a: "Ja. Unsere Ausbildungen und Workshops begleiten jede Person nach ihren Bedürfnissen, vom Anfänger bis zum erfahrenen Profil." },
      { q: "Wie schlage ich ein Projekt vor?", a: "Kontaktieren Sie unser Team über das Kontakt- oder Aufnahmeformular und beschreiben Sie Ihr Projekt. Wir prüfen jeden Vorschlag und bieten eine passende Begleitung an." },
      { q: "Wie werde ich Partner?", a: "Unternehmen, Stiftungen, Universitäten, Institutionen und Investoren können sich über die Partnerseite anschließen. Jede Partnerschaft wird individuell um eine gemeinsame Vision herum gestaltet." },
      { q: "Wie kann ich Ihre Arbeit unterstützen?", a: "Sie können einmalig oder regelmäßig spenden, ein bestimmtes Programm unterstützen, Förderer werden, Sachspenden leisten oder Ihre Kompetenzen als Freiwillige/r oder Mentor/in einbringen." },
      { q: "In welchen Ländern sind Sie tätig?", a: "Unsere Gemeinschaft ist in Kamerun, der Zentralafrikanischen Republik, in Deutschland und in mehreren Gemeinschaften der afrikanischen Diaspora präsent." },
      { q: "Kann ich Freiwillige/r werden?", a: "Absolut. Sie können Ihre Zeit, Kompetenzen oder Erfahrung in den Dienst wirkungsvoller Projekte stellen – als Freiwillige/r, Mentor/in oder Expert/in." },
      { q: "Wie bleibe ich über Neuigkeiten informiert?", a: "Abonnieren Sie unseren Newsletter und folgen Sie uns in den sozialen Medien, um unsere Projektaufrufe, Ausbildungsangebote und Veranstaltungen zu erhalten." },
    ],
  },
};

export const getFaq = (lang: Lang): FaqContent => content[lang] ?? content.fr;
