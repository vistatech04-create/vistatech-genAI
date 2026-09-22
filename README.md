# Vista Tech landing pages

React + Vite. Three pages will live here eventually:

1. the main course page
2. the ₹1,000 trial week page
3. the ₹99 webinar page

Right now: page 1 has its hero, proof, partners and testimonials.
Page 2 (`/analytics-starter`) has its hero.

Each page is its own HTML file with its own bundle — no client-side router —
so an ad can point at one page without loading the others, and each page can
carry its own pixel later. Pages are registered in `vite.config.js`.

| URL | Entry | Sections live in |
|---|---|---|
| `/` | `index.html` | `src/components/` |
| `/analytics-starter/` | `analytics-starter/index.html` | `src/pages/analytics-starter/components/` |

Anything used by more than one page lives in `src/components/` and is imported
as `@/components/...` (`@` means `src`).

## Run it

```bash
npm install
npm run dev
```

## Where things are

| Path | What it holds |
|---|---|
| `src/styles/tokens.css` | every colour, font and size. Change it here, it changes everywhere. |
| `src/content/hero.js` | every word in the hero. Edit copy without touching JSX. |
| `src/components/` | one folder per component, each with its own CSS module. |
| `public/images/` | images. Drop generated files here. |

## Adding the hero photo

Put the cut-out PNG in `public/images/`, then set the path in
`src/content/hero.js`:

```js
cutout: { src: '/images/hero-student.png', alt: '...' }
```

The dashed placeholder disappears on its own once `src` is set.

## Still to confirm before launch

- [ ] **delete `public/images/mock/`** — those portraits are stand-ins, not
      Vista Tech students. Nothing from that folder may reach an ad.
- [ ] `hero-video.jpg` and `worth-portrait.jpg` are the same generated person,
      used as video stills on both pages. Replace with a real student who
      agreed to be filmed.
- [ ] `roadmap-bundle.jpg` shows a roadmap PDF that does not exist yet. Either
      make the PDF or take the download off `/analytics-starter`.
- [ ] every name, role and salary in `placed` is a real student who agreed
      to be named and photographed
- [ ] every number on the page (150+ placed, 2,000+ partner placements, 20 years)
- [ ] the four company names in the trust row
- [ ] no "guaranteed placement" wording anywhere
