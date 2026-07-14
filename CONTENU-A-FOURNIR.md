# Cœurs Braves — Éléments à fournir

Ce document liste tout ce qu'il reste à **rassembler et renseigner** pour finaliser le site.
La plupart des valeurs sont regroupées dans **`src/data/org.ts`** (et `src/data/site.ts`).
Cherchez les marqueurs `[À compléter]` dans le code.

Priorités : 🔴 bloquant · 🟠 important · 🟡 souhaitable

---

## 1. 🔴 Informations légales (obligatoire en Allemagne : Impressum + RGPD)
Fichier : `src/data/org.ts` → objet `legal`

- [ ] **Forme juridique** (ex. *e.V. / eingetragener Verein* ou association loi 1901)
- [ ] **Numéro d'enregistrement** (ex. *Vereinsregister VR 12345*)
- [ ] **Tribunal d'enregistrement** (ex. *Amtsgericht Mainz*)
- [ ] **Numéro de TVA** intracommunautaire (si applicable)
- [ ] **Directeur·rice de la publication** (nom de la personne responsable)
- [ ] **Hébergeur** du site : nom + adresse (ex. Netlify, Vercel, OVH…)
- [ ] **Date de dernière mise à jour** des mentions/politique

> Pages générées automatiquement : `/mentions-legales/` et `/confidentialite/`.

---

## 2. 🔴 Paiement des dons — Stripe
Fichier : `src/data/org.ts` → objet `donation.stripe`

- [ ] Créer un compte Stripe (au nom de l'association).
- [ ] Créer **2 liens de paiement** (Stripe → *Payment Links*) :
  - [ ] **Don ponctuel** : activer « le client choisit le montant » → coller l'URL dans `stripe.oneTime`
  - [ ] **Don mensuel** : produit récurrent (abonnement) → coller l'URL dans `stripe.monthly`
- [ ] Vérifier/ajuster les **montants suggérés** (`donation.presets` : 25 / 50 / 100 / 250 €)
- [ ] Vérifier/ajuster les **équivalences d'impact** (`donation.impacts`, ex. « 50 € = 1 mois d'accompagnement »)
- [ ] Renseigner la **campagne** mise en avant (`donation.campaign`) : titre, montant collecté, objectif, nb de donateurs

> Tant que les liens ne sont pas mis, le bouton « Faire un don » affiche un message d'attente.
> Reçus fiscaux : vérifier si l'association peut émettre des reçus de déductibilité (à indiquer sur la page).

---

## 3. 🟠 Transparence « Où va votre argent »
Fichier : `src/data/org.ts` → tableau `allocation`

- [ ] Pourcentages réels de répartition (actuellement : 80 % programmes / 12 % fonctionnement / 8 % collecte)
- [ ] (Idéal) Un **rapport d'activité / financier** en PDF à lier sur la page Soutenir

---

## 4. 🟠 Équipe & gouvernance
Fichier : `src/data/org.ts` → tableau `team` · Page : `/equipe/`

- [ ] Noms, rôles et courtes bios des membres (bureau : vice-président·e, trésorier·ère, responsables…)
- [ ] **Portraits** (photos carrées, ~400×400 px) → à déposer dans `public/images/cb/team/` puis renseigner `photo`
- [ ] Vérifier la bio du fondateur (Assaa Ouemba Billy Loïc « Brave Djamal »)

---

## 5. 🟠 Réseaux sociaux — à confirmer
Fichier : `src/data/site.ts` → objet `social`

- [ ] **Instagram** : confirmer l'URL `https://www.instagram.com/coeurs_braves`
- [ ] **TikTok** : ⚠️ handle supposé `@coeurs_braves` — **à confirmer** (donner le vrai lien)
- [ ] **Facebook** : OK (`web.facebook.com/LESCOEURSBRAVES`)
- [ ] LinkedIn / YouTube éventuels à ajouter

---

## 6. 🟡 Preuve sociale & partenaires
Fichiers : `src/pages/index.astro` (marquee) · `public/images/cb/partenaires/`

- [ ] **Logos partenaires réels** (PNG transparents) — actuellement des noms en texte ;
      un seul logo réel présent (`Tech4Africa.png`). Fournir les autres pour les afficher.
- [ ] Labels / agréments / certifications éventuels (ex. reconnaissance d'utilité publique)
- [ ] Mentions presse (logos + liens) si disponibles

---

## 7. 🟡 Témoignages réels
Fichier : `src/data/site.ts` → tableau `temoignages`

- [ ] Remplacer les **prénoms placeholder** (Samuel N., Awa D., Fatou M., David K.) par de vrais témoignages
- [ ] Fournir les **photos de profil** correspondantes (aujourd'hui : photos de groupe génériques)

---

## 8. 🟡 Chiffres & contenus à valider
Fichier : `src/data/site.ts`

- [ ] Vérifier les **chiffres d'impact** (« 3 500+ membres », « 100+ personnes formées »…) — retirer si non vérifiables
- [ ] Vérifier la liste **Présence** (pays) et le siège (Mainz 55131)

---

## 9. 🟡 Domaine & déploiement
- [ ] Confirmer le domaine final **coeursbraves.com** (le site pointe désormais dessus : canonical, sitemap, Open Graph)
- [ ] Choisir l'hébergeur (Netlify/Vercel/OVH…) → à reporter dans les mentions légales (point 1)
- [ ] (Idéal) Une **image de partage** dédiée (1200×630) pour les réseaux → `public/images/cb/og.jpg`
      puis la référencer par défaut dans `Layout.astro`

---

## 10. 🔵 Évolutions futures (non commencées)
- [ ] **Multilingue FR / EN / DE** (i18n) — public Allemagne + diaspora
- [ ] **Recherche** interne au site
- [ ] Page **Événements / agenda**
- [ ] Espace **presse / médiathèque** (photos, communiqués)
- [ ] Outil de **mesure d'audience** respectueux RGPD (ex. Plausible, Matomo) — le bandeau cookies est déjà prêt

---

### Déjà en place ✅
Fonts self-hébergées (RGPD) · Open Graph / SEO · formulaires fonctionnels (mailto) ·
bandeau cookies · pages `/mentions-legales/` `/confidentialite/` · page 404 · page `/equipe/` ·
widget de don Stripe (montant/fréquence/impact + barre de campagne) · boutons flottants Don/WhatsApp ·
retour-haut · fil d'ariane · micro-interactions.
