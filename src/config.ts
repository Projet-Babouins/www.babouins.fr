// Infos du projet et liens réutilisés partout sur le site.
// Un lien ou un nom change ? On le modifie ici, et nulle part ailleurs.
//
// Exception : src/pages/contribuer.md est du Markdown pur, il ne peut pas lire ce fichier.
// Si l'adresse du dépôt change, pense à la mettre à jour là-bas aussi.

export const SITE = {
  name: 'Babouins',
  tagline: 'La doc du BTS SIO, écrite par ses étudiants',
  description:
    'Babouins est une plateforme collaborative où les étudiants de BTS SIO centralisent les procédures, commandes et tutos vus en cours.',
  url: 'https://www.babouins.fr',
  lang: 'fr',
  locale: 'fr_FR',
  // Logo du header et du footer, et icône de l'onglet. Le fichier est dans public/.
  // Pour changer de logo : remplace le fichier, ou dépose le nouveau dans public/ et change ce chemin.
  logo: '/favicon.png',
  // Image d'aperçu pour les réseaux sociaux (PNG ou JPG, 1200 x 630, à placer dans public/).
  // Exemple : '/apercu.png'. Laisser vide tant qu'il n'y en a pas.
  socialImage: '',
};

const ORGANIZATION = 'https://github.com/Projet-Babouins';
const REPO = `${ORGANIZATION}/www.babouins.fr`;

export const LINKS = {
  docs: 'https://docs.babouins.fr',
  // L'éditeur en ligne de la doc : pour écrire une page sans connaître Git.
  editor: 'https://docs.babouins.fr/admin',
  // Le dépôt de la doc : pour écrire une page avec Git et GitHub.
  docsRepo: `${ORGANIZATION}/docs.babouins.fr`,
  organization: ORGANIZATION,
  // Le dépôt de ce site vitrine.
  repo: REPO,
  discussions: `${REPO}/discussions`,
  issues: `${REPO}/issues/new/choose`,
};

// Le projet d'origine (2024), aujourd'hui archivé : ce sont les sources de la page "À propos".
// Les dates et les chiffres de cette page viennent de là : ne les change pas sans vérifier.
export const ORIGINS = {
  docsRepo: 'https://github.com/BABOUINS-PROJECT/docs.babouins.fr',
  article: 'https://www.dimitrichassignol.fr/articles/babouins',
};

// Les grandes dates du projet, pour la frise de la page d'accueil.
// Le récit complet et les sources sont sur la page "À propos" : les deux doivent rester d'accord.
// `pause` : après cette date, plus aucune contribution jusqu'à la date suivante. Sur la frise, la piste s'interrompt.
export const MILESTONES = [
  { label: 'Juin 2024', title: 'La création', text: 'Trois étudiants de BTS SIO lancent le projet dans leur classe.' },
  { label: 'Juillet 2024', title: 'La première doc', text: "56 des 73 commits du dépôt d'origine datent de ce seul mois." },
  { label: 'Septembre 2024', title: "Le projet s'ouvre", text: 'Un article le présente et invite à contribuer.' },
  { label: 'Février 2025', title: 'La dernière contribution', text: 'Puis plus rien. Le dépôt est archivé en mars 2026.', pause: true },
  { label: '2026', title: 'La reprise', text: 'Une nouvelle promo relance le projet, avec un éditeur en ligne.' },
];

// Liens du menu (header et footer). `external` : le lien sort du site.
export const NAV = [
  { label: 'Accueil', href: '/' },
  { label: 'Contribuer', href: '/contribuer/' },
  { label: 'À propos', href: '/a-propos/' },
  { label: 'Docs', href: LINKS.docs, external: true },
  { label: 'GitHub', href: LINKS.organization, external: true },
];

export const CREDITS = {
  founders: ['Dimitri Chassignol', 'Jordan Digat', 'Mathis Norel'],
  foundedIn: 2024,
  promo: 'BTS SIO 2026-2028',
  // Le centre de formation où le projet a été créé (2024), puis repris (2026).
  school: 'CFAI LDA de Saint-Étienne',
  lead: 'Olivier Dutoit',
};

// Donne "Dimitri Chassignol, Jordan Digat et Mathis Norel".
export const FOUNDER_NAMES = new Intl.ListFormat('fr', { type: 'conjunction' }).format(CREDITS.founders);

export const LICENSES = {
  content: {
    name: 'CC BY-SA 4.0',
    href: 'https://creativecommons.org/licenses/by-sa/4.0/deed.fr',
  },
  code: {
    name: 'MIT',
    href: `${REPO}/blob/main/LICENSE`,
  },
};
