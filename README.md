# Portfolio — Tony Melek

Static site rebuilt with a **Vite + Tailwind + Handlebars** pipeline (same idea as Marinkart: templates → static HTML, Tailwind for CSS).

Live: [tonymelek.github.io/myportfolio](https://tonymelek.github.io/myportfolio/)

## Stack

- Vite 7 — JS/CSS build
- Tailwind CSS 4
- Handlebars — pages, layout, partials (`scripts/build-pages.js`)

## Develop

```bash
npm install
npm run dev      # watch CSS + pages, preview on :4173
npm run build    # output → dist/
npm run preview  # build + preview
```

Open http://localhost:4173 after `npm run preview`. Relative asset paths work on GitHub Pages project sites too.

## Content

Edit `scripts/pages.js` for copy, projects, and experience. Templates live under `views/`.

## Deploy

Push to `master` — GitHub Actions builds and publishes `dist/` to GitHub Pages.
