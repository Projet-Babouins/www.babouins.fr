---
layout: ../layouts/Layout.astro
title: Guide de contribution
description: Deux façons d'écrire dans Babouins (depuis l'éditeur du site, ou avec GitHub), comment se passe la relecture, et les règles de sécurité à respecter.
---

Il y a deux façons d'écrire dans Babouins. Tu choisis celle qui te convient : le résultat est le même, et la relecture aussi.

- [Méthode 1, depuis le site](#méthode-1-depuis-le-site) : l'éditeur en ligne, sans rien installer et sans connaître Git.
- [Méthode 2, depuis GitHub](#méthode-2-depuis-github) : avec Git et les pull requests, comme en entreprise.
- [Relire et valider](#relire-et-valider)
- [Publier sans attendre la relecture](#publier-sans-attendre-la-relecture)
- [Règles de sécurité](#règles-de-sécurité)
- [Une question ?](#une-question-)

## Avant de commencer

- Il te faut un compte [GitHub](https://github.com) (gratuit), membre de l'organisation [Projet-Babouins](https://github.com/Projet-Babouins). Demande à un référent du projet de t'y ajouter.
- Une page proposée n'est pas publiée tout de suite : elle est d'abord **relue par 2 membres de la classe**.
- En contribuant, vous acceptez que votre contenu soit publié sous [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/deed.fr).

## Méthode 1, depuis le site

La plus simple. Tout se passe dans le navigateur, avec un éditeur qui ressemble à un traitement de texte.

1. Ouvre [docs.babouins.fr/admin](https://docs.babouins.fr/admin) et connecte-toi avec ton compte GitHub.
2. Clique sur "Nouvelle page", ou choisis une page existante dans la liste pour la corriger.
3. Choisis le dossier de la page, donne-lui un titre et une courte description.
4. Écris. L'éditeur est visuel (titres, listes, blocs de code, images), et tu peux passer en mode Markdown si tu préfères. Les images acceptées sont les PNG, JPEG et WebP.
5. Enregistre (`Ctrl` + `S`). Ta page part en relecture.

Bon à savoir :

- Pour corriger une page que tu es en train de lire, va tout en bas : le lien "Modifier cette page" l'ouvre dans l'éditeur (ou sur GitHub, voir la méthode 2).
- Tu peux ranger les pages et les dossiers en les faisant glisser dans la liste : c'est cet ordre qui donne le menu du site. Comme le reste, un rangement passe par la relecture.
- Tant que ta proposition n'est pas publiée, tes enregistrements suivants s'y ajoutent. Un bandeau en haut de l'éditeur t'indique où elle en est.
- Chaque enregistrement est gardé dans l'historique du projet, à ton nom. Rien ne se perd, et tout peut être annulé.
- Si quelqu'un a modifié la même page pendant que tu écrivais, l'éditeur te prévient au lieu d'écraser son travail.

## Méthode 2, depuis GitHub

Pour celles et ceux qui veulent pratiquer Git et les pull requests (PR). C'est aussi la seule façon de modifier ce site vitrine, qui n'a pas d'éditeur en ligne.

Il y a deux dépôts :

- `docs.babouins.fr` : la documentation (les pages sont dans `src/content/docs/docs/`) ;
- `www.babouins.fr` : ce site vitrine (les pages sont dans `src/pages/`).

### Dans le navigateur

Pratique pour une petite correction, sans rien installer.

1. En bas de chaque page de la documentation, le lien "Modifier cette page : sur GitHub" ouvre directement le bon fichier. Sinon, ouvre le fichier à modifier dans [le dépôt de la doc](https://github.com/Projet-Babouins/docs.babouins.fr) ou dans [celui de la vitrine](https://github.com/Projet-Babouins/www.babouins.fr).
2. Clique sur l'icône en forme de crayon ("Edit this file"), puis fais ta modification.
3. Clique sur "Commit changes...", décris ta modification en une phrase, et choisis "Create a new branch for this commit and start a pull request".
4. Remplis le modèle de PR, puis clique sur "Create pull request".

### En local avec Git

Pour les modifications plus importantes : tu vois le résultat sur ton ordinateur avant de proposer quoi que ce soit. Il te faut [Git](https://git-scm.com), [Node.js](https://nodejs.org) (version LTS) et un éditeur de code comme [VS Code](https://code.visualstudio.com).

Commence par créer ta copie du dépôt : sur sa page GitHub, clique sur "Fork". Puis récupère-la sur ton ordinateur (remplace `docs.babouins.fr` par `www.babouins.fr` pour travailler sur la vitrine) :

```bash
git clone https://github.com/<ton-pseudo>/docs.babouins.fr.git
cd docs.babouins.fr
```

Lance le site en local. Il est visible sur `http://localhost:4321` et se recharge à chaque fichier enregistré.

```bash
npm install
npm run dev
```

Crée une branche par modification, avec un nom court et parlant (exemple : `procedure-dhcp`) :

```bash
git checkout -b <branche>
```

Fais tes modifications, puis vérifie que le site se construit toujours. Si cette commande affiche une erreur, corrige-la avant d'aller plus loin : la même vérification sera faite automatiquement sur ta PR.

```bash
npm run build
```

Enregistre et envoie ton travail :

```bash
git add .
git commit -m "Décris ta modification en une phrase"
git push -u origin <branche>
```

Retourne enfin sur la page du dépôt : GitHub affiche un bandeau "Compare & pull request". Clique dessus, remplis le modèle, puis clique sur "Create pull request".

## Relire et valider

Quelle que soit la méthode, une proposition doit recevoir **2 validations** avant d'être publiée. Relire les autres fait autant avancer le projet qu'écrire.

1. Ouvre la proposition : depuis l'éditeur du site (bouton "Relectures"), ou depuis l'onglet "Pull requests" du dépôt sur GitHub. Ce sont les mêmes propositions : un avis donné d'un côté apparaît de l'autre.
2. Vérifie que :
   - le contenu est juste, clair et sans faute ;
   - la vérification automatique du build est au vert ;
   - **aucune information sensible** n'apparaît (voir les [règles de sécurité](#règles-de-sécurité)).
3. Une remarque ? Laisse un commentaire. Reste bienveillant : on critique le texte, jamais la personne.
4. Valide si tout est bon, ou demande des corrections s'il reste quelque chose à reprendre.

On ne valide pas sa propre proposition. Si on te demande des corrections, modifie simplement ta page : la proposition se met à jour toute seule. Une fois les 2 validations obtenues, la page est mise en ligne automatiquement, en quelques minutes.

## Publier sans attendre la relecture

Certains comptes, les référents du projet, peuvent publier une page sans attendre les 2 validations. C'est prévu pour les urgences : une erreur gênante à corriger vite, un cours attendu pour le lendemain.

Ce n'est pas un passe-droit invisible : une publication directe reste dans l'historique, au nom de la personne qui l'a faite, et n'importe qui peut la relire et la corriger après coup.

## Règles de sécurité

> **AUCUNE information venant de ton entreprise d'alternance ne doit apparaître sur le site**, ni dans le texte, ni dans les captures d'écran, ni dans les messages de commit.

Sont interdits :

- les adresses IP réelles ;
- les noms de domaines internes ;
- les identifiants (noms d'utilisateur, mots de passe, clés, jetons) ;
- les captures d'écran non anonymisées (noms de serveurs, de collègues, de clients...).

À la place, utilise des valeurs d'exemple : `192.0.2.10` pour une adresse IP, `exemple.local` pour un domaine, `utilisateur` pour un identifiant.

Attention : l'historique garde tout. Supprimer une info sensible dans une nouvelle version ne l'efface pas des versions précédentes. Si c'est arrivé, préviens tout de suite un référent du projet, et fais changer le mot de passe ou la clé concernés.

## Une question ?

Pose-la sur [GitHub Discussions](https://github.com/Projet-Babouins/www.babouins.fr/discussions) : c'est là que les contributeurs échangent. Il n'y a pas de question bête, on a tous été débutants.
