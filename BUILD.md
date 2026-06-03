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

## Deploy on your server (PM2)

Your build **succeeded** — the SEO files are in `dist/`.  
`pm2 restart` alone does **not** fix SEO if PM2 runs `vite preview` or another **SPA** server (every URL returns root `index.html`).

### Correct order on the server

```bash
cd /root/t2g_ai_Frontend
npm run build
pm2 restart t2g-ai-frontend   # after build, not before
```

### PM2 must use the prerender-aware server

```bash
# Check what command PM2 runs now:
pm2 show t2g-ai-frontend

# Recommended — serve dist/ with per-route HTML:
pm2 delete t2g-ai-frontend   # only if you need to recreate the process
cd /root/t2g_ai_Frontend
pm2 start npm --name t2g-ai-frontend -- run start
pm2 save
```

`npm run start` runs `scripts/serve-production.mjs`, which serves  
`/hire-caffeine-developer` → `dist/hire-caffeine-developer/index.html` (correct SEO).

**Do not use** `vite preview` in production — it forces SPA mode and breaks View Source SEO.

### Verify on the server (before checking the live domain)

```bash
grep '<title>' dist/hire-caffeine-developer/index.html
# Expected: Hire AI Software Developers for Intelligent Digital Solutions

curl -s http://localhost:4173/hire-caffeine-developer | grep '<title>'
# Same title (adjust port if PORT env is set)
```

If nginx proxies to this Node process, no nginx change is needed — only PM2 must point at `npm run start`.

---

## Deploy (static host / upload)

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
