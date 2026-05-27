const CYAN = "\x1b[36m";
const GREEN = "\x1b[32m";
const YELLOW = "\x1b[33m";
const RED = "\x1b[31m";
const DIM = "\x1b[2m";
const RESET = "\x1b[0m";

export function printBuildBanner() {
  console.log(`
${CYAN}╔══════════════════════════════════════════════════════════╗
║           Tech2Globe AI — Production Build               ║
╚══════════════════════════════════════════════════════════╝${RESET}
`);
}

export function step(current, total, title, detail = "") {
  console.log(
    `\n${CYAN}[${current}/${total}]${RESET} ${GREEN}${title}${RESET}`,
  );
  if (detail) {
    console.log(`${DIM}    ${detail}${RESET}`);
  }
}

export function ok(message) {
  console.log(`${GREEN}    ✓${RESET} ${message}`);
}

export function warn(message) {
  console.log(`${YELLOW}    !${RESET} ${message}`);
}

export function fail(message) {
  console.error(`${RED}    ✗${RESET} ${message}`);
}

export function printSummary({ distDir, routeCount, durationMs }) {
  console.log(`
${CYAN}────────────────────────────────────────────────────────────${RESET}
${GREEN}Build finished successfully${RESET} ${DIM}(${Math.round(durationMs / 1000)}s)${RESET}

${DIM}Output folder:${RESET}  ${distDir}
${DIM}Deploy this:${RESET}    Upload the entire ${CYAN}dist/${RESET} folder to your host

${DIM}What was generated:${RESET}
  • React app (JS/CSS in dist/assets/)
  • ${routeCount} pages with unique SEO (dist/<route>/index.html)
  • dist/_redirects (route → prerendered HTML)
  • dist/sitemap.xml
  • dist/prerender-manifest.json (SEO debug list)

${DIM}Commands:${RESET}
  npm run dev       → local development (localhost:5173)
  npm run preview   → test production build locally
  npm run build     → full production build (this script)
  npm run sitemap   → regenerate public/sitemap.xml only

${DIM}Verify SEO locally after build:${RESET}
  npm run preview
  Then open: http://localhost:4173/about/us
  View source should show the About page title (not homepage).
${CYAN}────────────────────────────────────────────────────────────${RESET}
`);
}
