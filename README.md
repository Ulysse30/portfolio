# Portfolio

Portfolio personnel construit avec [Next.js](https://nextjs.org), exporté en site statique et déployé automatiquement sur GitHub Pages via GitHub Actions.

## Personnaliser le contenu

Toutes les informations (nom, bio, compétences, expériences, formations, projets, liens de contact) se trouvent dans [app/data.ts](app/data.ts). Modifiez ce fichier pour mettre à jour le site — aucune autre modification n'est nécessaire pour changer le contenu.

## Développement local

```bash
npm install
npm run dev
```

Ouvrez [http://localhost:3000](http://localhost:3000).

## Build statique

```bash
npm run build
```

Génère le site statique dans le dossier `out/`.

## Déploiement sur GitHub Pages

1. Créez un dépôt GitHub (public) et poussez ce projet dessus.
2. Dans les paramètres du dépôt : **Settings → Pages → Build and deployment → Source**, sélectionnez **GitHub Actions**.
3. À chaque push sur `main`, le workflow [.github/workflows/deploy.yml](.github/workflows/deploy.yml) construit le site et le déploie automatiquement.

Le site sera accessible à `https://<votre-nom-utilisateur>.github.io/<nom-du-depot>/` (ou `https://<votre-nom-utilisateur>.github.io/` si le dépôt s'appelle `<votre-nom-utilisateur>.github.io`).
