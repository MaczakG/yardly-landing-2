// Static site generator for yardly.hu. No dependencies: `node src/build.mjs`.
// Renders every page into dist/ and copies assets/ and public/.
import { mkdirSync, rmSync, writeFileSync, cpSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

import { config } from "./config.mjs";
import { ROUTES } from "./routes.mjs";
import { layout } from "./ui.mjs";
import { home } from "./pages/home.mjs";
import { services, consulting, delivery } from "./pages/services.mjs";
import { cases, about, contact, notFound } from "./pages/company.mjs";
import { privacy, imprint } from "./pages/legal.mjs";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const out = join(root, "dist");

const write = (path, html) => {
  const file = join(out, path.endsWith("/") ? `${path}index.html` : path);
  mkdirSync(dirname(file), { recursive: true });
  writeFileSync(file, html);
};

rmSync(out, { recursive: true, force: true });
mkdirSync(out, { recursive: true });
cpSync(join(root, "assets"), join(out, "assets"), { recursive: true });
cpSync(join(root, "public"), out, { recursive: true }); // favicons, web manifest, _redirects

const pages = { home, services, consulting, delivery, cases, about, contact, privacy, imprint };

for (const [key, render] of Object.entries(pages)) {
  const page = render();
  const html = layout({ ...page, path: ROUTES[key] });
  if (/[–—]/.test(html)) throw new Error(`${key}: use a hyphen instead of an en or em dash`);
  write(ROUTES[key], html);
}
write("404.html", layout(notFound()));

const urls = Object.keys(pages).map((key) => `  <url><loc>${config.siteUrl}${ROUTES[key]}</loc></url>`);
writeFileSync(
  join(out, "sitemap.xml"),
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.join("\n")}\n</urlset>\n`
);
writeFileSync(join(out, "robots.txt"), `User-agent: *\nAllow: /\n\nSitemap: ${config.siteUrl}/sitemap.xml\n`);

console.log(`Built ${urls.length + 1} pages into dist/`);
