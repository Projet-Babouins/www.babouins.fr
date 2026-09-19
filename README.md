# www.babouins.fr

Site vitrine et point d'entrée du projet **Babouins** : la doc du BTS SIO, écrite par ses étudiants.

Babouins est une plateforme collaborative où les étudiants de BTS SIO centralisent les procédures, commandes et tutos vus en cours.

| Où ? | Quoi ? |
| --- | --- |
| [www.babouins.fr](https://www.babouins.fr) | Ce dépôt : la vitrine, le concept, le guide de contribution |
| [docs.babouins.fr](https://docs.babouins.fr) | La documentation (projet séparé) |
| [docs.babouins.fr/admin](https://docs.babouins.fr/admin) | L'éditeur en ligne de la doc : écrire une page sans connaître Git |
| [GitHub Discussions](https://github.com/Projet-Babouins/www.babouins.fr/discussions) | Les échanges entre contributeurs |

Projet repris par la promo BTS SIO 2026-2028 (Olivier Dutoit). Projet original créé en 2024 par Dimitri Chassignol, Jordan Digat et Mathis Norel. Les deux équipes viennent du même centre de formation : le CFAI LDA de Saint-Étienne.

## Lancer le site en local

Il te faut [Node.js](https://nodejs.org) en version LTS (22.12 ou plus récent).

```bash
npm install
npm run dev
```

Le site est visible sur `http://localhost:4321` et se recharge à chaque fichier enregistré.

| Commande | Effet |
| --- | --- |
| `npm install` | Installe les dépendances (à faire une fois, après le clone) |
| `npm run dev` | Lance le site en local, avec rechargement automatique |
| `npm run build` | Construit le site final dans `dist/` (à lancer avant chaque PR) |
| `npm run preview` | Affiche le résultat du build, tel qu'il sera en ligne |

## Structure du projet

Le site est fait avec [Astro](https://astro.build) : du HTML, du CSS, et presque pas de JavaScript.

```text
.
├── .github/              Réglages GitHub : modèles d'issue et de PR, workflows, CODEOWNERS
│   └── workflows/
│       ├── check.yml     Vérifie que le site se construit, sur chaque PR
│       └── deploy.yml    Met le site en ligne à chaque merge sur main
├── public/               Fichiers copiés tels quels dans le site
│   ├── CNAME             Nom de domaine utilisé par GitHub Pages
│   ├── favicon.png       Logo du site et icône de l'onglet
│   └── robots.txt        Indications pour les moteurs de recherche
├── src/
│   ├── assets/           Images optimisées par Astro au build
│   │   ├── docs-clair.png      Capture de la doc affichée sur l'accueil, thème clair
│   │   └── docs-sombre.png     La même, thème sombre
│   ├── components/       Briques réutilisables
│   │   ├── Button.astro        Lien en forme de bouton
│   │   ├── Card.astro          Bloc de contenu (titre, texte, numéro d'étape optionnel)
│   │   ├── Footer.astro        Pied de page
│   │   ├── Header.astro        En-tête et menu
│   │   ├── Motif.astro         Motifs de fond (empreintes, piste), presque invisibles
│   │   └── ThemeToggle.astro   Bouton thème clair ou sombre (seul JavaScript du site)
│   ├── layouts/
│   │   └── Layout.astro  Squelette commun à toutes les pages (head, header, footer)
│   ├── pages/            Un fichier = une page du site
│   │   ├── index.astro         Accueil (/)
│   │   ├── contribuer.md       Guide de contribution (/contribuer), en Markdown
│   │   ├── a-propos.astro      À propos (/a-propos)
│   │   └── 404.astro           Page d'erreur
│   ├── styles/
│   │   └── global.css    Couleurs, polices, espacements : toutes les variables CSS sont ici
│   └── config.ts         Infos du projet et liens (docs, GitHub, Discussions), à un seul endroit
├── astro.config.mjs      Configuration d'Astro
└── package.json          Dépendances et commandes npm
```

Quelques repères pour débuter :

- **Changer un texte** : ouvre la page concernée dans `src/pages/`.
- **Changer un lien, le nom du projet ou le menu** : tout est dans `src/config.ts`.
- **Changer une couleur ou une police** : modifie les variables au début de `src/styles/global.css`. La police des titres (Bricolage Grotesque) est déclarée dans `astro.config.mjs` : Astro la télécharge au build et l'héberge avec le site.
- **Ajouter une page** : crée un fichier `.astro` ou `.md` dans `src/pages/`, en t'inspirant d'une page existante.
- Pas de tiret long dans les textes du site : on utilise des deux-points, des virgules ou des parenthèses.

### Les règles de design de l'accueil

Pour que le site ne ressemble pas à un modèle tout fait, la page d'accueil suit quelques règles simples :

- **Chaque section a une forme différente** (deux colonnes inégales, colonne étroite, bande pleine largeur, carte décalée, texte seul). Si tu ajoutes une section, ne recopie pas la forme de sa voisine.
- **Lire d'abord, écrire ensuite** : le haut de l'accueil montre la doc (une vraie capture, qui mène à docs.babouins.fr), puis propose de contribuer.
- **Des preuves réelles plutôt que des illustrations** : les commandes Git et le nombre de lignes affichés sur l'accueil sont lus dans les vrais fichiers du dépôt au moment du build, et l'image du haut de page est une capture de la doc, pas un dessin.
- **Deux façons d'écrire, à égalité** : l'éditeur en ligne de la doc d'abord (le plus simple), Git et GitHub ensuite (pour qui veut). Le site ne doit jamais laisser croire qu'il faut connaître Git pour contribuer.
- **Une seule idée visuelle : la piste de la troupe.** Les motifs de fond (`Motif.astro`) sont des empreintes et une piste, au trait, presque invisibles. Pas d'autre décoration.
- **Un texte précis et honnête** : des chiffres vérifiables, et une section qui dit clairement jusqu'où va le projet.
- **Sobre** : une seule couleur d'accent, des filets fins, pas d'ombres ni d'éléments penchés.

### Refaire la capture de la doc

Les deux images `src/assets/docs-clair.png` et `src/assets/docs-sombre.png` sont des captures d'une page de docs.babouins.fr, une par thème. Pour les refaire :

1. Ouvre une page de la doc dans une fenêtre de 880 x 675 pixels (outils de développement du navigateur, mode "appareil", densité 2).
2. Fais une capture en thème clair, une en thème sombre, et remplace les deux fichiers en gardant les mêmes noms.
3. Vérifie que la page capturée ne contient **aucune information d'entreprise** : les captures actuelles utilisent des pages de démonstration et la plage d'adresses `192.0.2.0/24`, réservée à la documentation.

## Contribuer

Ce site est ouvert aux pull requests. Chaque PR doit être validée par au moins 2 membres de la classe, et le site se déploie automatiquement à chaque merge sur `main`.

Le guide complet est sur [www.babouins.fr/contribuer](https://www.babouins.fr/contribuer/), et sa version courte dans [CONTRIBUTING.md](CONTRIBUTING.md).

Règle d'or : **aucune information venant d'une entreprise d'alternance** (IP, noms de domaines internes, identifiants, captures non anonymisées).

## Licences

- Code : [MIT](LICENSE), copyright Projet Babouins et contributeurs.
- Contenu (textes) : [CC BY-SA 4.0](LICENSE-content).

En contribuant, vous acceptez que votre contenu soit publié sous CC BY-SA 4.0.
