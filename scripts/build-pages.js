import path from "path";
import fs from "fs";
import Handlebars from "handlebars";
import { fileURLToPath } from "url";
import { pages } from "./pages.js";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, "..");
const VIEWS = path.join(ROOT, "views");
const PUBLIC = path.join(ROOT, "public");
const DIST = path.join(ROOT, "dist");

Handlebars.registerHelper("eq", (a, b) => a === b);
Handlebars.registerHelper("year", () => new Date().getFullYear());
Handlebars.registerHelper("pad", (index) =>
  String(Number(index) + 1).padStart(2, "0"),
);

function registerPartials() {
  const dir = path.join(VIEWS, "partials");
  if (!fs.existsSync(dir)) return;
  for (const file of fs.readdirSync(dir)) {
    if (!file.endsWith(".hbs")) continue;
    const name = path.basename(file, ".hbs");
    Handlebars.registerPartial(
      name,
      fs.readFileSync(path.join(dir, file), "utf8"),
    );
  }
}

function copyDir(src, dest) {
  fs.mkdirSync(dest, { recursive: true });
  for (const entry of fs.readdirSync(src, { withFileTypes: true })) {
    const from = path.join(src, entry.name);
    const to = path.join(dest, entry.name);
    if (entry.isDirectory()) copyDir(from, to);
    else fs.copyFileSync(from, to);
  }
}

function syncStaticAssets() {
  if (!fs.existsSync(PUBLIC)) return;
  for (const entry of fs.readdirSync(PUBLIC, { withFileTypes: true })) {
    const from = path.join(PUBLIC, entry.name);
    const to = path.join(DIST, entry.name);
    if (entry.isDirectory()) {
      if (fs.existsSync(to)) fs.rmSync(to, { recursive: true, force: true });
      copyDir(from, to);
    } else {
      fs.copyFileSync(from, to);
    }
  }
}

function buildSitemap() {
  const lastmod = new Date().toISOString().slice(0, 10);
  const urls = pages
    .filter((page) => page.sitemap && page.data?.canonical)
    .map((page) => {
      const { changefreq, priority } = page.sitemap;
      return `  <url>
    <loc>${page.data.canonical}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`;
    })
    .join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`;
  fs.writeFileSync(path.join(DIST, "sitemap.xml"), xml, "utf8");
  console.log("wrote dist/sitemap.xml");
}

function renderPage(page) {
  const layoutSrc = fs.readFileSync(
    path.join(VIEWS, "layouts", "main.hbs"),
    "utf8",
  );
  const pageSrc = fs.readFileSync(
    path.join(VIEWS, `${page.template}.hbs`),
    "utf8",
  );
  const body = Handlebars.compile(pageSrc)(page.data);
  const html = Handlebars.compile(layoutSrc)({ ...page.data, body });
  const outPath = path.join(DIST, page.out);
  fs.mkdirSync(path.dirname(outPath), { recursive: true });
  fs.writeFileSync(outPath, html, "utf8");
  console.log(`wrote dist/${page.out}`);
}

function buildPages() {
  fs.mkdirSync(DIST, { recursive: true });
  registerPartials();
  syncStaticAssets();

  const cssPath = path.join(DIST, "assets", "main.css");
  if (!fs.existsSync(cssPath)) {
    console.warn(
      "warn: dist/assets/main.css missing — run vite build (npm run build:css) first",
    );
  }

  for (const page of pages) renderPage(page);
  buildSitemap();

  fs.writeFileSync(
    path.join(DIST, "robots.txt"),
    `User-agent: *\nAllow: /\nSitemap: https://tonymelek.github.io/myportfolio/sitemap.xml\n`,
    "utf8",
  );
}

try {
  buildPages();
  console.log("Static pages built.");
} catch (err) {
  console.error(err);
  process.exit(1);
}
