# Build guide — Tech2Globe AI frontend

## Quick commands

| Command | What it does |
|---------|----------------|
| `npm run dev` | Start dev server at http://localhost:5173 (hot reload) |
| `npm run build` | **Full production build** → output in `dist/` |
| `npm run preview` | Serve `dist/` locally at http://localhost:4173 (test after build) |
| `npm run verify:seo` | Check that every route has unique SEO in `dist/` |
| `npm run prerender` | Re-run SEO HTML generation only (needs `dist/` from vite first) |
| `npm run sitemap` | Regenerate `public/sitemap.xml` |

## What `npm run build` does (5 steps)

1. **Vite build** — Compiles React/TypeScript into `dist/assets/`
2. **SEO prerender** (automatic) — Creates `dist/<route>/index.html` with unique `<title>` and meta tags for 25 routes
3. **Copy env** — Copies `env.json` → `dist/env.json`
4. **Verify SEO** — Fails the build if any page still has homepage SEO
5. **Verify API** — Fails if production bundle contains localhost API URLs

## Deploy

Upload the **entire `dist/` folder** to your host (not only `index.html`).

Important files:

- `dist/index.html` — homepage
- `dist/about/us/index.html` — About page (with About SEO in HTML source)
- `dist/_redirects` — Netlify/static host rules to serve prerendered pages
- `dist/sitemap.xml` — for Google Search Console

## Troubleshooting

### Build output is hard to see

Vite now logs at `info` level. For even more detail:

```bash
set VITE_LOG_LEVEL=info
npm run build
```

### SEO looks wrong in View Source on production

1. Run `npm run build` locally
2. Open `dist/about/us/index.html` — title should be **About Tech2Globe AI…**
3. If local file is correct but live site is wrong → redeploy full `dist/` folder
4. Test production build locally: `npm run preview` → http://localhost:4173/about/us

### Debug prerender

```bash
set PRERENDER_DEBUG=1
npm run build
```

Shows each route and matched SEO entry from `src/data/pageSeo.json`.

### Edit SEO text

Edit **`src/data/pageSeo.json`**, then run `npm run build` again.
