# Anubhav: The Series

A streaming-style portfolio built with Vite, React, TypeScript and Tailwind. It also hosts the Privacy Policy and Data Deletion pages the Meta app needs.

## Edit the content

Everything is in `src/data/profile.ts`. Fill in:

- `CONTACT_EMAIL` (also replace `EMAIL_HERE` in `public/privacy.html` and `public/data-deletion.html`, which are plain HTML and cannot read the constant)
- `LINKEDIN_URL` (the button hides while empty)
- `YOUTUBE_URL` (the singing link hides while empty)

The hero image is `public/assets/hero.jpg` with a WebP copy, `hero.webp`. To swap it, replace both (`cwebp -q 82 -resize 900 0 hero.jpg -o hero.webp`).

## Run and build

```
npm install
npm run dev      # local preview
npm run lint
npm run build    # outputs dist/
```

## Deploy to GitHub Pages

1. Create a repo named `feelinganubhav.github.io` (a user site, served from the root).
2. Push this folder to its `main` branch.
3. In the repo, go to Settings, Pages, and set Source to "GitHub Actions".
4. The workflow in `.github/workflows/deploy.yml` builds and deploys on every push to `main`.

The privacy pages then live at `/privacy.html` and `/data-deletion.html`.

The streaming look is fictional and original. It is not affiliated with any real service.
