/**
 * Production static server for prerendered dist/.
 *
 * Unlike `vite preview` (SPA mode), this serves:
 *   /hire-caffeine-developer → dist/hire-caffeine-developer/index.html
 * so View Source and curl get route-specific SEO.
 *
 * PM2: pm2 start npm --name t2g-ai-frontend -- run start
 */
import { createServer } from "node:http";
import { existsSync, readFileSync, statSync } from "node:fs";
import { dirname, extname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = dirname(fileURLToPath(import.meta.url));
const distDir = join(root, "..", "dist");
const port = Number(process.env.PORT || 4173);
const host = process.env.HOST || "0.0.0.0";

const MIME = {
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".ico": "image/x-icon",
  ".svg": "image/svg+xml",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".webp": "image/webp",
  ".woff2": "font/woff2",
  ".woff": "font/woff",
  ".txt": "text/plain; charset=utf-8",
  ".xml": "application/xml; charset=utf-8",
};

function normalizePathname(pathname) {
  let path = pathname.split("?")[0].split("#")[0] || "/";
  if (path.length > 1 && path.endsWith("/")) {
    path = path.slice(0, -1);
  }
  return path;
}

/** Prefer prerendered dist/<route>/index.html before SPA fallback. */
function resolveFile(pathname) {
  const path = normalizePathname(pathname);

  if (path === "/") {
    return join(distDir, "index.html");
  }

  const relative = path.replace(/^\//, "");
  const asFile = join(distDir, relative);
  const asDirIndex = join(distDir, relative, "index.html");

  if (existsSync(asDirIndex) && statSync(asDirIndex).isFile()) {
    return asDirIndex;
  }

  if (existsSync(asFile) && statSync(asFile).isFile()) {
    return asFile;
  }

  return join(distDir, "index.html");
}

function send(res, status, body, contentType) {
  res.writeHead(status, { "Content-Type": contentType });
  res.end(body);
}

if (!existsSync(join(distDir, "index.html"))) {
  console.error(
    "[serve] dist/index.html not found. Run: npm run build",
  );
  process.exit(1);
}

createServer((req, res) => {
  try {
    const pathname = new URL(req.url ?? "/", `http://${req.headers.host}`).pathname;
    const filePath = resolveFile(pathname);
    const body = readFileSync(filePath);
    const ext = extname(filePath);
    send(res, 200, body, MIME[ext] || "application/octet-stream");
  } catch (error) {
    console.error("[serve] error:", error);
    send(res, 500, "Internal Server Error", "text/plain; charset=utf-8");
  }
}).listen(port, host, () => {
  console.log("");
  console.log("  ┌─ Tech2Globe AI — production static server ───────");
  console.log(`  │  Serving:  ${distDir}`);
  console.log(`  │  URL:      http://${host === "0.0.0.0" ? "localhost" : host}:${port}`);
  console.log("  │  SEO:      per-route index.html (not SPA-only fallback)");
  console.log("  └──────────────────────────────────────────────────");
  console.log("");
});
