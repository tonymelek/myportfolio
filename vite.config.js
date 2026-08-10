import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

/** Relative asset URLs so dist/ works on GH Pages and local static preview. */
const BASE = "./";

export default defineConfig({
  base: BASE,
  plugins: [tailwindcss()],
  publicDir: false,
  build: {
    outDir: "dist",
    emptyOutDir: false,
    rollupOptions: {
      input: path.resolve(__dirname, "src/js/main.js"),
      output: {
        entryFileNames: "assets/main.js",
        assetFileNames: "assets/[name][extname]",
      },
    },
  },
  preview: {
    port: 4173,
    strictPort: true,
  },
});
