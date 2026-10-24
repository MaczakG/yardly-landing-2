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
import { buildDate } from "./content/posts.mjs";

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

// The sitemap lists every page; posts and the blog carry their date as lastmod.
const sitemap = [];
const render = (key, path, page, lastmod) => {
  write(path, layout({ key, path, ...page }));
  sitemap.push({ path, lastmod });
};

render("home", ROUTES.home, pages.home());
render("solutions", ROUTES.solutions, pages.solutionsIndex());
for (const s of pages.solutions) render(`solution:${s.slug}`, solutionRoute(s.slug), pages.solution(s));
render("process", ROUTES.process, pages.process());
render("hosting", ROUTES.hosting, pages.hosting());
render("contact", ROUTES.contact, pages.contact());
render("blog", ROUTES.blog, pages.blog(), pages.posts[0]?.date);
for (const p of pages.posts) render("post", postRoute(p), pages.post(p), p.updated || p.date);
render("privacy", ROUTES.privacy, pages.privacy());
render("imprint", ROUTES.imprint, pages.imprint());

write("404.html", layout({ key: "", path: "/404.html", ...pages.notFound(notFound) }));

for (const [from, to] of Object.entries(REDIRECTS)) write(from, redirectPage(to));

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${sitemap.map(({ path, lastmod }) => `  <url><loc>${config.siteUrl}${path}</loc>${lastmod ? `<lastmod>${lastmod}</lastmod>` : ""}</url>`).join("\n")}
</urlset>
`;
writeFileSync(join(out, "sitemap.xml"), xml);
writeFileSync(join(out, "robots.txt"), `User-agent: *\nAllow: /\n\nSitemap: ${config.siteUrl}/sitemap.xml\n`);

// The same redirects as real 301s for the web server (Caddy), which answers them before these pages.
writeFileSync(join(out, "redirects.caddy"), Object.entries(REDIRECTS).map(([from, to]) => `redir ${from} ${to} 301`).join("\n") + "\n");

console.log(`Built ${sitemap.length} pages (${pages.posts.length} posts up to ${buildDate}), a 404 page and ${Object.keys(REDIRECTS).length} redirects into dist/`);
