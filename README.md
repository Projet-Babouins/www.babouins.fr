# 🌐 Accueil www.babouins.fr

Bienvenue sur le dépôt de [www.babouins.fr](https://www.babouins.fr), la vitrine et le point d'entrée du projet **Babouins** : la doc du BTS SIO, écrite par ses étudiants.

> 🐒 Ce README reprend la trame de [celui du projet d'origine](https://github.com/BABOUINS-PROJECT/babouins.fr), écrit par Dimitri Chassignol en 2024. À l'époque, la page d'accueil était encore "en cours de construction" et le README décrivait le but final. Ce dépôt, c'est ce but final, repris en 2026.

| Où ? | Quoi ? |
| --- | --- |
| [www.babouins.fr](https://www.babouins.fr) | Ce dépôt : la vitrine, le concept, le guide de contribution |
| [docs.babouins.fr](https://docs.babouins.fr) | La documentation (projet séparé) |
| [docs.babouins.fr/admin](https://docs.babouins.fr/admin) | L'éditeur en ligne de la doc : écrire une page sans connaître Git |
| [GitHub Discussions](https://github.com/Projet-Babouins/www.babouins.fr/discussions) | Les échanges entre contributeurs |

### 📚 Concept du projet

**Babouins** est une plateforme collaborative où chaque étudiant de BTS SIO peut participer. On y centralise les procédures, les commandes et les tutos vus en cours, on les relit ensemble, et on les garde à jour. Le BTS SIO est dense : l'idée est d'avoir un seul endroit où chercher, accessible à toute la classe.

### 🛠️ Tutoriel sur les pull requests

Un guide pas à pas est en ligne : [www.babouins.fr/contribuer](https://www.babouins.fr/contribuer/). Il explique comment proposer une modification, comment la faire relire, et comment travailler à plusieurs sans se marcher dessus. Jamais touché à Git ? Le guide part de zéro.

### 💻 Contribution à la documentation

Les procédures et les tutos ne sont pas dans ce dépôt : ils vivent sur [docs.babouins.fr](https://docs.babouins.fr). Deux façons d'écrire, à égalité :

- **l'éditeur en ligne**, sans rien installer : [docs.babouins.fr/admin](https://docs.babouins.fr/admin) ;
- **Git et GitHub**, pour pratiquer les outils du métier : [le dépôt de la doc](https://github.com/Projet-Babouins/docs.babouins.fr).

### 🏠 Nous pouvons même modifier la page d'accueil ?

Oui, tout à fait ! Ce site passe lui aussi par des pull requests. **www.babouins.fr est ton site** : une faute, une phrase pas claire, une idée pour l'accueil ? Propose ta modification. La page d'accueil tient dans un seul fichier, `src/pages/index.astro`.

## 📝 Contribution

Pour contribuer à ce site :

1. **Forke** le dépôt (bouton "Fork" en haut à droite).

> Un **fork** est une copie du dépôt sur ton propre compte GitHub. Tu peux y travailler sans risque : l'original n'est pas touché. Quand ta modification est prête, tu demandes à l'intégrer au projet principal avec une pull request.

2. **Clone** ton fork sur ta machine :
    ```bash
    git clone https://github.com/<ton-pseudo>/www.babouins.fr.git
    ```
3. **Crée** une nouvelle branche pour ta modification :
    ```bash
    git checkout -b <branche>
    ```
4. **Fais** ta modification, vérifie que le site se construit, puis **commite** :
    ```bash
    npm run build
    git add .
    git commit -m "Décris ta modification en une phrase"
    ```
5. **Pousse** vers ton fork :
    ```bash
    git push -u origin <branche>
    ```
6. **Ouvre** une pull request vers le dépôt principal.

Pas envie d'installer quoi que ce soit ? Ouvre le fichier sur GitHub, clique sur le crayon, et GitHub crée le fork et la pull request pour toi. La version courte est dans [CONTRIBUTING.md](CONTRIBUTING.md).

## ✅ Validation des contributions

Toute contribution doit être validée par **au moins deux personnes de la classe** : la règle date du projet d'origine, en 2024. Les pull requests sont relues et testées avant d'être fusionnées. Utilise les commentaires de la pull request pour suggérer des améliorations, et [GitHub Discussions](https://github.com/Projet-Babouins/www.babouins.fr/discussions) pour les questions.

> ⚠️ Règle d'or : **aucune information venant d'une entreprise d'alternance** (adresses IP, noms de domaines internes, identifiants, captures d'écran non anonymisées). Git garde tout dans son historique.

## 📦 Déploiement

Sur chaque pull request, `.github/workflows/check.yml` vérifie que le site se construit (GitHub Actions). Une fois la pull request validée et fusionnée dans `main`, le site est mis à jour sur son serveur.

Le site est hébergé sur un serveur Node.js (panel [Pelican](https://pelican.dev)), comme docs.babouins.fr. Les pages sont statiques, fabriquées au build : l'adaptateur `@astrojs/node` ajoute seulement le petit serveur qui les distribue. Sur le serveur, la mise à jour tient en trois commandes, après avoir récupéré `main` :

```bash
npm ci
npm run build
npm start
```

`npm start` lance `node ./dist/server/entry.mjs`. Le serveur lit deux variables d'environnement : `HOST` (mettre `0.0.0.0` pour être joignable depuis l'extérieur) et `PORT` (le port attribué par Pelican). Le HTTPS et le nom de domaine sont gérés par le reverse proxy placé devant.

## 🚀 Lancer le site en local

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
| `npm start` | Lance le serveur de production, après un build (c'est ce que fait l'hébergement) |
| `npm run preview` | Affiche le résultat du build, tel qu'il sera en ligne |

## 🗂️ Structure du projet

Le site est fait avec [Astro](https://astro.build) : du HTML, du CSS, et presque pas de JavaScript.

```text
.
├── .github/              Réglages GitHub : modèles d'issue et de PR, workflows, CODEOWNERS
│   └── workflows/
│       └── check.yml     Vérifie que le site se construit, sur chaque PR
├── public/               Fichiers copiés tels quels dans le site
│   ├── banane.svg        La banane au bout de la piste des étapes
│   ├── favicon.png       Logo du site et icône de l'onglet
│   └── robots.txt        Indications pour les moteurs de recherche
├── src/
│   ├── assets/           Images optimisées par Astro au build
│   │   ├── docs-clair.png      Capture de la doc affichée sur l'accueil, thème clair
│   │   ├── docs-sombre.png     La même, thème sombre
│   │   ├── mascotte.png        La mascotte en grand (accueil). Le petit logo est public/favicon.png
│   │   └── mascotte-404.png    La mascotte qui réfléchit, une peau de banane vide à la main (page 404)
│   ├── components/       Briques réutilisables
│   │   ├── Button.astro        Lien en forme de bouton
│   │   ├── Card.astro          Bloc de contenu (un filet, un titre, un texte)
│   │   ├── Footer.astro        Pied de page
│   │   ├── Header.astro        En-tête et menu
│   │   ├── Motif.astro         Motifs de fond (empreintes, piste), presque invisibles
│   │   ├── Piste.astro         Suite d'arrêts reliés par une ligne de points (étapes, dates)
│   │   ├── ThemeToggle.astro   Bouton thème clair ou sombre (seul JavaScript du site)
│   │   ├── Traces.astro        Traces de pas de babouin, visibles, dans les vides de la page
│   │   └── Troupe.astro        La troupe en marche sur le filet du footer (silhouettes)
│   ├── layouts/
│   │   └── Layout.astro  Squelette commun à toutes les pages (head, header, footer)
│   ├── pages/            Un fichier = une page du site
│   │   ├── index.astro         Accueil (/)
│   │   ├── contribuer.md       Guide de contribution (/contribuer), en Markdown
│   │   ├── a-propos.astro      À propos (/a-propos)
│   │   └── 404.astro           Page d'erreur
│   ├── styles/
│   │   └── global.css    Couleurs, polices, espacements : toutes les variables CSS sont ici
│   └── config.ts         Infos du projet, liens et grandes dates, à un seul endroit
├── astro.config.mjs      Configuration d'Astro
└── package.json          Dépendances et commandes npm
```

Quelques repères pour débuter :

- **Changer un texte** : ouvre la page concernée dans `src/pages/`.
- **Changer un lien, le nom du projet ou le menu** : tout est dans `src/config.ts`.
- **Changer une couleur ou une police** : modifie les variables au début de `src/styles/global.css`. La police des titres (Bricolage Grotesque) est déclarée dans `astro.config.mjs` : Astro la télécharge au build et l'héberge avec le site.
- **Ajouter une page** : crée un fichier `.astro` ou `.md` dans `src/pages/`, en t'inspirant d'une page existante.
- Pas de tiret long dans les textes du site : on utilise des deux-points, des virgules ou des parenthèses.

### 🎨 Les règles de design de l'accueil

Pour que le site ne ressemble pas à un modèle tout fait, la page d'accueil suit quelques règles simples :

- **Chaque section a une forme différente** (deux colonnes inégales, colonne étroite, bande pleine largeur, carte décalée, texte seul). Si tu ajoutes une section, ne recopie pas la forme de sa voisine.
- **Lire d'abord, écrire ensuite** : le haut de l'accueil montre la doc (une vraie capture, qui mène à docs.babouins.fr), puis propose de contribuer.
- **Des preuves réelles plutôt que des illustrations** : les commandes Git et le nombre de lignes affichés sur l'accueil sont lus dans les vrais fichiers du dépôt au moment du build, et l'image du haut de page est une capture de la doc, pas un dessin.
- **Deux façons d'écrire, à égalité** : l'éditeur en ligne de la doc d'abord (le plus simple), Git et GitHub ensuite (pour qui veut). Le site ne doit jamais laisser croire qu'il faut connaître Git pour contribuer.
- **Une seule idée visuelle : la piste de la troupe.** Une ligne de points dans la couleur d'accent, un anneau à chaque arrêt. Elle relie les sections de l'accueil (dans la marge, sur grand écran), les étapes et les dates du projet (`Piste.astro`), la frise de la page À propos et la page 404. Là où le projet s'est arrêté, en 2025, la ligne s'interrompt vraiment. Les variables `--piste-*` et la classe `.stop` sont dans `global.css`. Les motifs de fond (`Motif.astro`) sont des empreintes au trait, presque invisibles. Pas d'autre décoration.
- **Le babouin se voit** : en haut de l'accueil, le nom du site et la mascotte sont posés sur le même filet, et la mascotte a la hauteur d'une lettre (tout suit `--text-hero`). C'est le seul grand geste et la seule image en couleur : le reste reste calme. Pour ne pas voir le nom et la mascotte deux fois, le logo du header reste caché sur l'accueil tant qu'on n'a pas défilé (`.on-home` dans `Header.astro`). Sur grand écran, des traces de pas (`Traces.astro`, main devant, pied derrière) traversent les vides de la page : 2 pistes au maximum, jamais derrière du texte. Sur la page 404, même principe que sur l'accueil : le titre et la mascotte (`mascotte-404.png`) sont posés sur la piste, qui s'arrête derrière elle.
- **La troupe ferme la marche** : sur toutes les pages, cinq babouins en silhouette marchent sur le filet du haut du footer (`Troupe.astro`). Ce qui les rend reconnaissables est noté en tête du fichier : queue qui monte puis retombe, tête basse à long museau, crinière du mâle, pattes fines. Une seule couleur, aucun détail.
- **Une banane, pas un régime** : la piste des étapes mène à une banane (`public/banane.svg`, option `reward` de `Piste.astro`), et le texte sélectionné à la souris passe au jaune banane. Sur la page 404, il ne reste que la peau, vide, dans la main de la mascotte. C'est tout : une seule banane visible par page.
- **Le babouin ne parle pas** : l'identité passe par l'image, pas par des blagues dans les textes.
- **Un texte précis et honnête** : des chiffres vérifiables, et une section qui dit clairement jusqu'où va le projet.
- **Sobre** : une seule couleur d'accent, des filets fins, pas d'ombres ni d'éléments penchés.

### 📸 Refaire la capture de la doc

Les deux images `src/assets/docs-clair.png` et `src/assets/docs-sombre.png` sont des captures d'une page de docs.babouins.fr, une par thème. Pour les refaire :

1. Ouvre une page de la doc dans une fenêtre de 880 x 675 pixels (outils de développement du navigateur, mode "appareil", densité 2).
2. Fais une capture en thème clair, une en thème sombre, et remplace les deux fichiers en gardant les mêmes noms.
3. Vérifie que la page capturée ne contient **aucune information d'entreprise** : les captures actuelles utilisent des pages de démonstration et la plage d'adresses `192.0.2.0/24`, réservée à la documentation.

## 📄 Licences

- Code : [MIT](LICENSE), copyright Projet Babouins et contributeurs.
- Contenu (textes) : [CC BY-SA 4.0](LICENSE-content).

En contribuant, vous acceptez que votre contenu soit publié sous CC BY-SA 4.0.

---

<br>
Créé avec ❤️ en 2024 par Dimitri Chassignol, Jordan Digat et Mathis Norel. Repris avec ❤️ en 2026 par la promo BTS SIO 2026-2028 (Olivier Dutoit). Les deux équipes viennent du même centre de formation : le CFAI LDA de Saint-Étienne.
