// Static site generator for yardly.hu. No dependencies: `node src/build.mjs`.
// Renders every page into dist/, writes the forwarding pages for old addresses and copies
// assets/ and public/.
import { mkdirSync, rmSync, writeFileSync, cpSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

import { config } from "./config.mjs";
import { ROUTES, REDIRECTS, solutionRoute, postRoute } from "./routes.mjs";
import { layout, redirectPage } from "./layout.mjs";
import * as pages from "./pages.mjs";
import { notFound } from "./content/site.mjs";

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
cpSync(join(root, "public"), out, { recursive: true }); // favicons and web manifest, served from the root

const sitemap = [];
const render = (key, path, page) => {
  write(path, layout({ key, path, ...page }));
  sitemap.push(path);
};

render("home", ROUTES.home, pages.home());
render("solutions", ROUTES.solutions, pages.solutionsIndex());
for (const s of pages.solutions) render(`solution:${s.slug}`, solutionRoute(s.slug), pages.solution(s));
render("pricing", ROUTES.pricing, pages.pricing());
render("contact", ROUTES.contact, pages.contact());
render("blog", ROUTES.blog, pages.blog());
for (const p of pages.posts) render("post", postRoute(p), pages.post(p));
render("privacy", ROUTES.privacy, pages.privacy());
render("imprint", ROUTES.imprint, pages.imprint());

write("404.html", layout({ key: "", path: "/404.html", ...pages.notFound(notFound) }));

for (const [from, to] of Object.entries(REDIRECTS)) write(from, redirectPage(to));

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${sitemap.map((path) => `  <url><loc>${config.siteUrl}${path}</loc></url>`).join("\n")}
</urlset>
`;
writeFileSync(join(out, "sitemap.xml"), xml);
writeFileSync(join(out, "robots.txt"), `User-agent: *\nAllow: /\n\nSitemap: ${config.siteUrl}/sitemap.xml\n`);

console.log(`Built ${sitemap.length} pages, a 404 page and ${Object.keys(REDIRECTS).length} redirects into dist/`);
