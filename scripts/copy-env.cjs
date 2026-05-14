/**
 * Copy env.json into dist/ after `vite build` (cross-platform; replaces `cp env.json dist/`).
 */
const fs = require("node:fs");
const path = require("node:path");

const root = path.join(__dirname, "..");
const src = path.join(root, "env.json");
const dstDir = path.join(root, "dist");
const dst = path.join(dstDir, "env.json");

if (!fs.existsSync(dstDir)) {
  console.error(
    "copy-env: dist/ does not exist. Run `vite build` first (build script runs it before this step).",
  );
  process.exit(1);
}
if (!fs.existsSync(src)) {
  console.error("copy-env: env.json not found next to package.json.");
  process.exit(1);
}
fs.copyFileSync(src, dst);
console.log("copy-env: env.json -> dist/env.json");
