# Contribuer à www.babouins.fr

Merci de vouloir participer ! Ceci est la version courte. Le guide complet, pas à pas, est ici : **[www.babouins.fr/contribuer](https://www.babouins.fr/contribuer/)**.

> **Tu veux écrire ou corriger un cours ?** Ce n'est pas dans ce dépôt. Le plus simple est l'éditeur en ligne, sans rien installer : [docs.babouins.fr/admin](https://docs.babouins.fr/admin). Avec Git, c'est dans le dépôt [docs.babouins.fr](https://github.com/Projet-Babouins/docs.babouins.fr). Ce dépôt-ci ne contient que le site vitrine, qui se modifie uniquement par pull request.

## Le principe

1. Tu proposes une modification avec une pull request (PR).
2. Les autres membres de la classe la relisent.
3. Il faut **2 validations** pour qu'elle soit fusionnée.
4. Le site se met à jour automatiquement après le merge sur `main`.

## Sans rien installer

Ouvre le fichier sur GitHub, clique sur le crayon ("Edit this file"), fais ta modification, puis choisis "Create a new branch for this commit and start a pull request".

## En local

Commence par créer un fork du dépôt (bouton "Fork" sur GitHub), puis :

```bash
git clone https://github.com/<ton-pseudo>/www.babouins.fr.git
cd www.babouins.fr
npm install
npm run dev
```

```bash
git checkout -b <branche>
# ... tes modifications ...
npm run build
git add .
git commit -m "Décris ta modification en une phrase"
git push -u origin <branche>
```

Ouvre ensuite la PR depuis GitHub (bandeau "Compare & pull request").

## Avant d'ouvrir ta PR

- [ ] `npm run build` fonctionne en local
- [ ] Aucune info sensible
- [ ] Orthographe relue
- [ ] Rendu vérifié sur mobile

## Règles de sécurité

**AUCUNE information venant de ton entreprise d'alternance** : pas d'adresses IP réelles, pas de noms de domaines internes, pas d'identifiants, pas de captures d'écran non anonymisées. Git garde tout dans son historique : une info poussée par erreur n'est pas effacée par un nouveau commit.

## Une question ?

Rendez-vous sur [GitHub Discussions](https://github.com/Projet-Babouins/www.babouins.fr/discussions).

## Licence

En contribuant, vous acceptez que votre contenu soit publié sous [CC BY-SA 4.0](LICENSE-content). Le code du site est sous [licence MIT](LICENSE).
