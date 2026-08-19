# Association Jeunesse de Futur

Site vitrine React/Vite, prêt à être lancé localement puis publié sur GitHub Pages ou un hébergeur statique.

## Lancer le site

1. Installez [Node.js](https://nodejs.org/) (version LTS).
2. Ouvrez ce dossier dans Visual Studio Code.
3. Ouvrez le terminal dans VS Code, puis tapez :

   ```bash
   npm install
   npm run dev
   ```

4. Ouvrez l’adresse affichée par le terminal (souvent `http://localhost:5173`).

Pour préparer la version à publier :

```bash
npm run build
```

Le dossier `dist` créé contient le site prêt à déposer chez un hébergeur.

## Modifier le contenu

Tout le texte et les informations faciles à changer sont dans `src/data/siteData.js` : chiffres clés, projets, activités, réunion, besoins bénévoles, contact et lien d’adhésion.

- **Lien du formulaire** : modifiez `joinFormUrl` dans `src/data/siteData.js`.
- **Téléphone, e-mail, adresse** : modifiez `siteInfo` dans `src/data/siteData.js`. Ils sont volontairement indiqués « À compléter » car ils n’ont pas été fournis.
- **Chiffres clés** : remplacez les `XX` dans `stats` par les chiffres réels.
- **Photos et logo** : les fichiers sont dans `src/assets`. Remplacez-les en gardant les mêmes noms, ou modifiez leurs imports dans `src/data.js` et `src/App.jsx`.
- **Couleurs** : elles sont tout en haut de `src/styles/site.css`, dans les variables commençant par `--forest`, `--tangerine`, etc.

## Publication sur GitHub Pages

Vous pouvez d’abord publier le contenu du dossier `dist` avec un hébergeur statique. Pour GitHub Pages avec Vite, adaptez la configuration Vite avec le nom de votre dépôt (le champ `base`) avant de lancer `npm run build`.

## Important avant la publication

Ajoutez les vraies coordonnées, les chiffres réels, les projets confirmés, les partenaires et les témoignages. Les emplacements non renseignés sont volontairement signalés, afin de ne pas présenter d’informations inventées comme réelles.
