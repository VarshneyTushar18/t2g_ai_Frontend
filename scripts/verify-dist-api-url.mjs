/**
 * After `vite build`, fail if dist still references legacy localhost:5001 (common bad bake).
 * Run: node ./scripts/verify-dist-api-url.mjs
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const dist = path.join(__dirname, "..", "dist");
if (!fs.existsSync(dist)) {
  console.error("verify-dist-api-url: dist/ missing. Run vite build first.");
  process.exit(1);
}

function walk(dir, files = []) {
  for (const name of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, name.name);
    if (name.isDirectory()) walk(p, files);
    else if (/\.(js|html|css)$/i.test(name.name)) files.push(p);
  }
  return files;
}

const bad = [];
const needle = /localhost:5001|127\.0\.0\.1:5001|:5001\/api\/contact/gi;
for (const file of walk(dist)) {
  const s = fs.readFileSync(file, "utf8");
  if (needle.test(s)) bad.push(file);
}

if (bad.length) {
  console.error(
    "verify-dist-api-url: Found legacy port 5001 / localhost API URL in bundle:",
  );
  for (const f of bad) console.error("  -", f);
  console.error(
    "\nFix: rebuild with correct VITE_API_URL (e.g. .env.production) and redeploy dist/.",
  );
  process.exit(1);
}

console.log("verify-dist-api-url: no localhost:5001 / :5001/api/contact in dist (OK).");
