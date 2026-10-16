# Portfolio d'Aina Natolotra

React + Vite (interface), Framer Motion (animations), Node + Express (formulaire et assistant).
Site bilingue FR / EN, mode clair et mode sombre (bouton lune / soleil), palette officielle : vert #23966A, bleu #2769A6, blanc.

Navigation : une seule section à l'écran, on change avec les boutons du menu (ou les flèches gauche / droite du clavier). Le pied de page reste toujours visible. Aucune image : tout est typographie, icônes SVG et CSS.

## Lancer le projet

```bash
npm install
npm start          # build + serveur sur http://localhost:3001
```

En développement (deux terminaux) :

```bash
npm run server     # API sur http://localhost:3001
npm run dev        # site sur http://localhost:5173
```

## Ce qu'il vous reste à compléter

Tout se trouve dans `src/content.js`. Les textes entre `[crochets]` s'affichent en pointillés bleus sur le site : ce sont les emplacements à remplir. Les liens contenant `[crochets]` sont grisés automatiquement.

- [ ] Liens : `links.github`, `links.linkedin`, `links.email`
- [ ] CV : placez le fichier dans `public/cv.pdf`
- [ ] Photo (facultative) : placez-la dans `public/photo.jpg` et écrivez `photo: "/photo.jpg"` dans `person` (sinon vos initiales s'affichent)
- [ ] Périodes du parcours (`journey.items[].date`)
- [ ] Pour chaque projet : état (terminé, en cours, prototype), utilisateurs visés, difficultés et solutions, fonctionnalités marquées `[...]`
- [ ] Liens GitHub et démonstration de chaque projet (`projectsMeta`)
- [ ] Captures d'écran et vidéo : déposez les fichiers dans `public/projets/`, puis renseignez `gallery` et `video` dans `projectsMeta` (exemple : `"/projets/agria-1.png"`)
- [ ] Relisez tous les textes des projets : seuls les faits de votre cahier des charges y figurent, le reste est à vous

## Assistant Aina

Il répond uniquement à partir de `src/content.js` (moteur : `src/assistant.js`), donc il n'invente rien. Quand vous modifiez le contenu, l'assistant suit. Le serveur limite les abus (20 questions par minute et par visiteur).

Pour brancher plus tard un vrai modèle d'IA : gardez la clé d'API dans `server/index.js` (jamais dans le code du navigateur) et envoyez-lui le contenu de `src/content.js` comme seule source d'information.

## Formulaire de contact

Les messages (nom, email, sujet, message) sont enregistrés dans `server/messages.json`. La limite est de 5 envois par 10 minutes et par visiteur, avec un champ piège contre les robots. Pour recevoir un email, ajoutez `nodemailer` dans `server/index.js`.

## Mise en ligne

- Tout en un (formulaire et assistant serveur) : Render ou Railway, commande de démarrage `npm start`
- Site seul : `npm run build`, puis le dossier `dist` sur Vercel ou Netlify. Le formulaire ne fonctionnera pas sans le serveur ; l'assistant, lui, continue de répondre dans le navigateur.
