import { fileURLToPath, URL } from "url";
import react from "@vitejs/plugin-react";
import { defineConfig, loadEnv } from "vite";
import environment from "vite-plugin-environment";
import { vitePluginSeoHtml } from "./scripts/vite-plugin-seo-html.mjs";

const ii_url =
  process.env.DFX_NETWORK === "local"
    ? `http://rdmx6-jaaaa-aaaaa-aaadq-cai.localhost:8081/`
    : `https://identity.internetcomputer.org/`;

process.env.II_URL = process.env.II_URL || ii_url;
process.env.STORAGE_GATEWAY_URL =
  process.env.STORAGE_GATEWAY_URL || "https://blob.caffeine.ai";

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");
  const apiProxyTarget = env.VITE_API_PROXY_TARGET?.trim() ?? "";
  const apiUrl = env.VITE_API_URL?.trim() ?? "";

  if (mode === "production") {
    if (!apiUrl) {
      console.warn(
        "\n[vite] Production build: VITE_API_URL is not set. Contact form will request same-origin `/api/contact` (set `src/frontend/.env.production` or CI env — see `.env.production.example`).\n",
      );
    } else if (/\blocalhost\b|127\.0\.0\.1/i.test(apiUrl)) {
      console.warn(
        "\n[vite] Production build: VITE_API_URL points at localhost — that will fail for real users. Use your public API origin.\n",
      );
    }
  }

  return {
    // "info" shows transform progress during build (was "error", which hid almost all output)
    logLevel: process.env.VITE_LOG_LEVEL ?? "info",
    build: {
      emptyOutDir: true,
      sourcemap: false,
      minify: false,
    },
    css: {
      postcss: "./postcss.config.js",
    },
    optimizeDeps: {
      esbuildOptions: {
        define: {
          global: "globalThis",
        },
      },
    },
    server: {
      proxy: apiProxyTarget
        ? {
            "/api": {
              target: apiProxyTarget,
              changeOrigin: true,
            },
          }
        : {},
    },
    plugins: [
      environment("all", { prefix: "CANISTER_" }),
      environment("all", { prefix: "DFX_" }),
      environment(["II_URL"]),
      environment(["STORAGE_GATEWAY_URL"]),
      react(),
      vitePluginSeoHtml(),
    ],
    resolve: {
      alias: [
        {
          find: "declarations",
          replacement: fileURLToPath(
            new URL("../declarations", import.meta.url),
          ),
        },
        {
          find: "@",
          replacement: fileURLToPath(new URL("./src", import.meta.url)),
        },
      ],
      dedupe: ["@dfinity/agent"],
    },
  };
});
