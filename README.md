

A fast, modern personal portfolio for an AI/ML student — built as a single-page
React application with a dark, "techy" aesthetic. It presents who I am, the
skills I work with, the projects I've built, and how to reach me, all in one
smooth, responsive scroll.

<p>
  <img alt="React" src="https://img.shields.io/badge/React-18-61DAFB?logo=react&logoColor=white" />
  <img alt="Vite" src="https://img.shields.io/badge/Vite-5-646CFF?logo=vite&logoColor=white" />
  <img alt="Tailwind CSS" src="https://img.shields.io/badge/Tailwind_CSS-3-38BDF8?logo=tailwindcss&logoColor=white" />
  <img alt="License" src="https://img.shields.io/badge/license-MIT-green" />
</p>

## Overview

This portfolio is intentionally small, fast, and easy to maintain. Rather than
spreading content across a CMS or many files, every piece of text on the site —
profile, about, skills, projects, and timeline — is driven by a single data
module. The UI components simply render that data, which keeps the design and the
content cleanly separated.

The result is a production build of roughly **50 KB gzipped JavaScript**, no
backend, no database, and no tracking — just a static site that loads instantly
and deploys anywhere.

## Features

- **Single-page design** — Hero, About, Skills, Projects, Journey (timeline), and
  Contact sections in one continuous, anchored scroll with a sticky navigation bar.
- **Dark / techy theme** — Deep background with subtle radial glows and a faint
  grid texture, sky-blue and violet gradient accents, and a monospace touch for a
  developer feel.
- **Scroll-reveal animations** — Sections fade and slide into view as you scroll,
  powered by a tiny custom `IntersectionObserver` component (no animation
  library), so the bundle stays lean.
- **Fully responsive** — Adapts cleanly from mobile to desktop, including a
  collapsible mobile menu.
- **Content-driven** — All copy lives in one data module, separated from the
  presentation layer.
- **Accessible & polished** — Semantic structure, keyboard-focusable links,
  descriptive `aria-label`s on icon buttons, smooth scrolling, and custom
  scrollbar styling.
- **Zero backend** — Pure static output; host it on any static provider for free.

## Tech stack

| Layer        | Choice                                                        |
| ------------ | ------------------------------------------------------------- |
| Framework    | React 18                                                      |
| Build tool   | Vite 5 (fast dev server + optimized production bundle)        |
| Styling      | Tailwind CSS 3 with a small custom theme (colors, fonts, keyframes) |
| Icons        | lucide-react                                                  |
| Animations   | Custom `Reveal` component using the IntersectionObserver API  |
| Fonts        | Inter (UI) and JetBrains Mono (accents), via Google Fonts     |

## Project structure

```
ai-portfolio/
├─ index.html              # HTML shell, fonts, meta tags
├─ package.json            # Scripts and dependencies
├─ vite.config.js          # Vite config (relative asset base)
├─ tailwind.config.js      # Theme: colors, fonts, animations
├─ postcss.config.js       # Tailwind + Autoprefixer
└─ src/
   ├─ main.jsx             # React entry point
   ├─ App.jsx              # Assembles the page sections
   ├─ index.css            # Tailwind layers + global styles
   ├─ data/
   │  └─ content.js        # All site content (single source of truth)
   └─ components/
      ├─ Nav.jsx           # Sticky responsive navigation
      ├─ Hero.jsx          # Landing / intro section
      ├─ About.jsx         # About section
      ├─ Skills.jsx        # Skill groups
      ├─ Projects.jsx      # Project cards (featured + grid)
      ├─ Timeline.jsx      # Education & experience timeline
      ├─ Contact.jsx       # Call-to-action + contact links
      ├─ Footer.jsx        # Footer
      ├─ Section.jsx       # Reusable section heading wrapper
      └─ Reveal.jsx        # Scroll-reveal animation helper
```

## Getting started

Requires Node.js 18 or newer.

```bash
npm install      # install dependencies
npm run dev      # start local dev server -> http://localhost:5173
npm run build    # production build -> /dist
npm run preview  # preview the production build locally
```

## License

Released under the MIT License. Feel free to use it as a starting point for your
own portfolio.
