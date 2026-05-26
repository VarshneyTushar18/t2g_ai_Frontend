/** One-off helper: node scripts/extract-solution-seo.mjs */
import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const slugs = [
  "ai-powered-data-analytics",
  "ai-automation",
  "cloud-migration",
  "custom-ai-development",
  "predictive-ai-analytics",
  "hire-lovable-ai-developer",
  "hire-openai-developer",
  "hire-emergent-ai-developer",
  "hire-caffeine-ai-developer",
  "hire-ai-developers",
];

const root = dirname(fileURLToPath(import.meta.url));
const text = readFileSync(join(root, "../src/data/solutions.ts"), "utf8");

function truncate(text, max = 160) {
  const cleaned = text.replace(/\s+/g, " ").trim();
  if (cleaned.length <= max) return cleaned;
  return `${cleaned.slice(0, max - 3).trimEnd()}...`;
}

const out = {};
for (const slug of slugs) {
  const re = new RegExp(
    `slug:\\s*"${slug}"[\\s\\S]*?headline:\\s*"([^"]*)"[\\s\\S]*?headlineAccent:\\s*"([^"]*)"[\\s\\S]*?subheading:\\s*\\n\\s*"([^"]*)"`,
  );
  const m = text.match(re);
  if (!m) {
    console.error("Missing slug:", slug);
    continue;
  }
  const headline = `${m[1]} ${m[2]}`.replace(/\s+/g, " ").trim();
  const description = truncate(m[3].split("\\n")[0]);
  out[slug] = {
    title: `${headline} | Tech2Globe AI`,
    description,
  };
}
console.log(JSON.stringify(out, null, 2));
