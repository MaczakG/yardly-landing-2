// Static site generator for yardly.hu. No dependencies: `node src/build.mjs`.
// Renders every page in every language into dist/ and copies assets/.
import { mkdirSync, rmSync, writeFileSync, cpSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

import { config } from "./config.mjs";
import { LANGS, ROUTES, postRoute } from "./routes.mjs";
import { layout } from "./layout.mjs";
import * as pages from "./pages.mjs";
import hu from "./i18n/hu.mjs";
import en from "./i18n/en.mjs";
import de from "./i18n/de.mjs";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const out = join(root, "dist");
const locales = { hu, en, de };

const write = (path, html) => {
  const file = join(out, path.endsWith("/") ? `${path}index.html` : path);
  mkdirSync(dirname(file), { recursive: true });
  writeFileSync(file, html);
};

rmSync(out, { recursive: true, force: true });
mkdirSync(out, { recursive: true });
cpSync(join(root, "assets"), join(out, "assets"), { recursive: true });

const sitemap = [];
const addToSitemap = (alternates) => sitemap.push(alternates);

const renderers = {
  home: pages.home,
  solutions: pages.solutions,
  cases: pages.cases,
  blog: pages.blog,
  about: pages.about,
  contact: pages.contact,
  privacy: pages.privacy,
  imprint: pages.imprint,
};

for (const [key, render] of Object.entries(renderers)) {
  const alternates = { ...ROUTES[key] };
  for (const lang of LANGS) {
    const t = locales[lang];
    pages.setLang(lang);
    const page = render(t);
    write(alternates[lang], layout(t, { key, alternates, ...page }));
  }
  addToSitemap(alternates);
}

for (const post of pages.posts) {
  const alternates = Object.fromEntries(LANGS.map((l) => [l, postRoute(post, l)]));
  for (const lang of LANGS) {
    const t = locales[lang];
    pages.setLang(lang);
    write(alternates[lang], layout(t, { key: "blog", alternates, ...pages.post(t, post) }));
  }
  addToSitemap(alternates);
}

// 404 (Hungarian, the default language)
pages.setLang("hu");
write("404.html", layout(hu, { key: "", alternates: { ...ROUTES.home }, ...pages.notFound(hu) }));

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${sitemap
  .flatMap((alt) =>
    LANGS.map(
      (lang) => `  <url>
    <loc>${config.siteUrl}${alt[lang]}</loc>
${LANGS.map((l) => `    <xhtml:link rel="alternate" hreflang="${l}" href="${config.siteUrl}${alt[l]}"/>`).join("\n")}
  </url>`
    )
  )
  .join("\n")}
</urlset>
`;
writeFileSync(join(out, "sitemap.xml"), xml);
writeFileSync(join(out, "robots.txt"), `User-agent: *\nAllow: /\n\nSitemap: ${config.siteUrl}/sitemap.xml\n`);

console.log(`Built ${sitemap.length * LANGS.length + 1} pages into dist/`);
