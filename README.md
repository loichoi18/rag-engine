# AI Portfolio — Lucas

A fast, dark/techy personal portfolio built with **React + Vite + Tailwind CSS**.
Single-page, fully responsive, animated on scroll, zero backend.

## Quick start

```bash
npm install      # install dependencies
npm run dev      # local dev server -> http://localhost:5173
npm run build    # production build -> /dist
npm run preview  # preview the production build locally
```

## Personalize it (the only file you need)

Open **`src/data/content.js`** and edit:

- `profile` — your name, role, tagline, email, social links, resume URL
- `about` — your intro paragraphs
- `skills` — skill groups and items
- `projects` — your projects (set `featured: true` on your best one)
- `timeline` — education & experience

Everything on the page is driven by that one file. To add a resume button,
drop `resume.pdf` into the `public/` folder and set
`resumeUrl: '/resume.pdf'` in `content.js`.

## Deploy (free options)

### Option A — Vercel (easiest)
1. Push this folder to a GitHub repo.
2. Go to vercel.com → New Project → import the repo.
3. Framework preset: **Vite**. Click Deploy. Done — you get a live URL.

### Option B — Netlify
1. Push to GitHub.
2. netlify.com → Add new site → Import from Git.
3. Build command: `npm run build` · Publish directory: `dist`.

Or drag-and-drop: run `npm run build`, then drag the **`dist`** folder onto
app.netlify.com/drop for an instant URL (no Git needed).

### Option C — GitHub Pages
1. Push to GitHub.
2. `npm run build`, then publish `dist/` (e.g. with the `gh-pages` package
   or a GitHub Action). The Vite config already uses relative asset paths
   (`base: './'`) so it works on project sites.

## Tech
React 18 · Vite 5 · Tailwind CSS 3 · lucide-react icons.
Scroll animations use a tiny custom IntersectionObserver component
(`src/components/Reveal.jsx`) — no animation library, so the bundle stays small.
