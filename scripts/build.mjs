/**
 * Production build with clear step-by-step console output.
 * Usage: npm run build
 */
import { execSync } from "node:child_process";
import { existsSync, readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import {
  fail,
  ok,
  printBuildBanner,
  printSummary,
  step,
  warn,
} from "./build-log.mjs";

const root = dirname(fileURLToPath(import.meta.url));
const projectRoot = join(root, "..");
const distDir = join(projectRoot, "dist");
const totalSteps = 5;
const started = Date.now();

function run(command, label) {
  try {
    execSync(command, {
      cwd: projectRoot,
      stdio: "inherit",
      env: { ...process.env, FORCE_COLOR: "1" },
    });
    ok(label);
  } catch {
    fail(`${label} — command failed: ${command}`);
    process.exit(1);
  }
}

printBuildBanner();

step(
  1,
  totalSteps,
  "Vite production build",
  "Compiles React → dist/. Also runs SEO prerender (25 HTML pages) inside closeBundle.",
);
run("npx vite build", "Vite build + SEO prerender complete");

step(2, totalSteps, "Copy environment file", "env.json → dist/env.json");
run("node ./scripts/copy-env.cjs", "env.json copied");

step(3, totalSteps, "Verify per-page SEO in dist/", "Fails build if any route still has homepage title");
run("node ./scripts/verify-prerender-seo.mjs", "All routes have correct unique SEO");

step(4, totalSteps, "Verify API URLs in bundle", "Ensures no localhost API URL in production assets");
run("node ./scripts/verify-dist-api-url.mjs", "API URL check passed");

step(5, totalSteps, "Build report");

const manifestPath = join(distDir, "prerender-manifest.json");
let routeCount = 25;

if (existsSync(manifestPath)) {
  const manifest = JSON.parse(readFileSync(manifestPath, "utf8"));
  routeCount = manifest.routeCount ?? manifest.routes?.length ?? routeCount;

  console.log(`\n${"\x1b[2m"}    Sample prerendered pages:${"\x1b[0m"}`);
  const samples = [
    "/",
    "/about/us",
    "/portfolio",
    "/hire/emergent/developer",
    "/solutions/hire-openai-developer",
  ];
  for (const routePath of samples) {
    const entry = manifest.routes?.find((r) => r.routePath === routePath);
    if (entry) {
      console.log(`    ${routePath}`);
      console.log(`      → ${entry.title}`);
    }
  }
  ok(`${routeCount} HTML files with route-specific SEO`);
} else {
  warn("prerender-manifest.json not found — check prerender step");
}

if (!existsSync(join(distDir, "index.html"))) {
  fail("dist/index.html is missing — build did not produce output");
  process.exit(1);
}

if (!existsSync(join(distDir, "about", "us", "index.html"))) {
  warn("dist/about/us/index.html missing — SEO prerender may have failed");
} else {
  ok("dist/about/us/index.html exists");
}

printSummary({
  distDir,
  routeCount,
  durationMs: Date.now() - started,
});
