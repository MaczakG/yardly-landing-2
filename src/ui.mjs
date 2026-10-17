// Page shell (head, header, footer) and the blocks shared between pages.
import { existsSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

import { config } from "./config.mjs";
import { route } from "./routes.mjs";

const ICON_DIR = join(dirname(fileURLToPath(import.meta.url)), "..", "assets", "icons");

export const esc = (s) =>
  String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

// Keep Hungarian articles and short conjunctions on the same line as the next word.
export const glue = (text) => String(text).replace(/(^|\s)(a|az|e|s|és|is|egy|ha|de|nem)\s+/gi, "$1$2 ");

// Phosphor icons (regular weight, MIT) are downloaded SVG files in assets/icons/.
// Each is used as a CSS mask, so it takes the text colour like the text around it.
export const icon = (name, cls = "icon") => {
  if (!existsSync(join(ICON_DIR, `${name}.svg`))) throw new Error(`Missing icon: assets/icons/${name}.svg`);
  return `<span class="${cls}" style="--icon:url(/assets/icons/${name}.svg)" aria-hidden="true"></span>`;
};

export const CTA_LABEL = "Kérjen konzultációt";

export const button = (label, href, variant = "primary") =>
  `<a class="btn btn--${variant}" href="${href}"><span>${esc(label)}</span>${icon("arrow-right", "btn__icon")}</a>`;

export const ctaButton = (variant = "primary") => button(CTA_LABEL, route("contact"), variant);

export const textLink = (label, href) =>
  `<a class="text-link" href="${href}"><span>${esc(label)}</span>${icon("arrow-right", "text-link__icon")}</a>`;

export const logo = (variant = "color") =>
  `<a class="logo${variant === "light" ? " logo--light" : ""}" href="${route("home")}" aria-label="Yardly, kezdőlap"><img src="/assets/brand/yardly-vizszintes-szines.svg" width="131" height="36" alt=""></a>`;

// Unsplash photos (see assets/img/photos/CREDITS.md), each in a large and a small size.
const PHOTOS = {
  "aerial-hub": { sizes: [2000, 1000], ratio: 1332 / 2000 },
  "floor-team": { sizes: [2000, 1000], ratio: 1333 / 2000 },
  consult: { sizes: [2000, 1000], ratio: 1331 / 2000 },
  operations: { sizes: [2000, 1000], ratio: 1335 / 2000 },
  docks: { sizes: [2000, 1000], ratio: 1333 / 2000 },
  fleet: { sizes: [2000, 1000], ratio: 1333 / 2000 },
  meeting: { sizes: [2000, 1000], ratio: 1125 / 2000 },
  workshop: { sizes: [2000, 1000], ratio: 1333 / 2000 },
  aisle: { sizes: [1400, 700], ratio: 1867 / 1400 },
  forklift: { sizes: [1400, 700], ratio: 2100 / 1400 },
};

export const photo = (name, alt, { eager = false, sizes = "100vw", cls = "", position = "" } = {}) => {
  const p = PHOTOS[name];
  const [big, small] = p.sizes;
  const src = (w) => `/assets/img/photos/${name}-${w}.webp`;
  return `<img class="${cls}" src="${src(small)}" srcset="${src(small)} ${small}w, ${src(big)} ${big}w" sizes="${sizes}" width="${big}" height="${Math.round(big * p.ratio)}" alt="${esc(alt)}"${position ? ` style="object-position:${position}"` : ""} ${eager ? 'fetchpriority="high"' : 'loading="lazy"'} decoding="async">`;
};

// Section heading: short accent rule, headline, optional paragraph.
export const heading = ({ title, lead, id, light = false, cls = "", reveal = true }) => `<div class="heading${light ? " heading--light" : ""}${cls ? ` ${cls}` : ""}${reveal ? " reveal" : ""}">
  <h2 class="h2"${id ? ` id="${id}"` : ""}>${glue(title)}</h2>
  ${lead ? `<p class="lead">${glue(lead)}</p>` : ""}
</div>`;

// Inner-page hero: full-bleed photo with breadcrumb, label, headline and one paragraph.
export const pageHero = ({ label, title, lead, crumbs = [], image, imageAlt = "", position = "" }) => `<section class="page-hero" aria-labelledby="page-title">
  ${photo(image, imageAlt, { eager: true, cls: "page-hero__img", position })}
  <div class="container page-hero__inner">
    ${crumbs.length ? `<nav class="crumbs" aria-label="Morzsamenü"><ol>${crumbs.map((c) => `<li><a href="${c.href}">${esc(c.label)}</a></li>`).join("")}</ol></nav>` : ""}
    ${label ? `<p class="kicker">${esc(label)}</p>` : ""}
    <h1 class="h1" id="page-title">${glue(title)}</h1>
    ${lead ? `<p class="page-hero__lead">${glue(lead)}</p>` : ""}
  </div>
</section>`;

// Closing call to action, the same navy band on every page.
export const ctaBand = ({ title, text }) => `<section class="cta-band" aria-labelledby="cta-title">
  <div class="container cta-band__inner reveal">
    <div class="cta-band__copy">
      <h2 class="h2" id="cta-title">${glue(title)}</h2>
      <p>${glue(text)}</p>
    </div>
    <div class="cta-band__action">
      ${ctaButton("accent")}
      <p>${icon("check", "icon icon--sm")}Az első konzultáció díjtalan</p>
    </div>
  </div>
</section>`;

// ---------------------------------------------------------------------------

export const MENU = [
  {
    label: "Megoldások",
    key: "solutions",
    children: [
      { key: "warehouse", label: "Raktári folyamatok", text: "Készlet, leltár, eszközök, raktári adminisztráció", icon: "stack" },
      { key: "transport", label: "Fuvarozás és flotta", text: "Fuvarszervezés, járművek, okmányok, sofőrök", icon: "truck" },
      { key: "maintenance", label: "Karbantartás", text: "Targoncák, gépek és járművek szervizei", icon: "wrench" },
    ],
  },
  {
    label: "Szolgáltatások",
    key: "services",
    children: [
      { key: "consulting", label: "Tanácsadás", text: "Folyamatelemzés és automatizálási ütemterv", icon: "compass" },
      { key: "delivery", label: "Kivitelezés", text: "Integráció, fejlesztés, üzemeltetés", icon: "plugs-connected" },
    ],
  },
  { label: "Módszertan", key: "method" },
  { label: "Referenciák", key: "references" },
  { label: "Cégünk", key: "company" },
];

const header = (pageKey) => {
  const isIn = (item) => item.key === pageKey || (item.children || []).some((c) => c.key === pageKey);
  const cur = (key) => (key === pageKey ? ' aria-current="page"' : "");
  const contactHref = pageKey === "contact" ? "#urlap" : route("contact");
  const desktop = MENU.map((item, i) =>
    item.children
      ? `<li class="nav__item nav__item--has-menu" data-menu>
          <a class="nav__link${isIn(item) ? " is-active" : ""}" href="${route(item.key)}"${cur(item.key)}>${item.label}</a>
          <button class="nav__caret" type="button" aria-expanded="false" aria-controls="menu-${i}">${icon("caret-down", "icon icon--xs")}<span class="visually-hidden">${item.label} almenü</span></button>
          <div class="nav__menu" id="menu-${i}">
            <ul>${item.children
              .map(
                (c) => `<li><a class="menu-link" href="${route(c.key)}"${cur(c.key)}>
                <span class="menu-link__icon">${icon(c.icon)}</span>
                <span><strong>${c.label}</strong><span>${c.text}</span></span>
              </a></li>`
              )
              .join("")}</ul>
          </div>
        </li>`
      : `<li class="nav__item"><a class="nav__link${isIn(item) ? " is-active" : ""}" href="${route(item.key)}"${cur(item.key)}>${item.label}</a></li>`
  ).join("");
  const mobile = MENU.map(
    (item) => `<li><a href="${route(item.key)}"${cur(item.key)}>${item.label}</a>${
      item.children ? `<ul class="mobile-nav__sub">${item.children.map((c) => `<li><a href="${route(c.key)}"${cur(c.key)}>${c.label}</a></li>`).join("")}</ul>` : ""
    }</li>`
  ).join("");
  return `<div class="topbar">
  <div class="container topbar__inner">
    <span class="topbar__claim">Folyamat-automatizálás logisztikai cégeknek</span>
    <span class="topbar__links">
      <a href="mailto:${config.email}">${icon("envelope-simple", "icon icon--xs")}${config.email}</a>
      <span>${icon("map-pin", "icon icon--xs")}Budapest</span>
    </span>
  </div>
</div>
<header class="site-header" data-header>
  <div class="container site-header__inner">
    ${logo()}
    <nav class="nav" aria-label="Fő menü"><ul class="nav__list">${desktop}</ul></nav>
    <a class="btn btn--primary btn--sm site-header__cta" href="${contactHref}"><span>${CTA_LABEL}</span>${icon("arrow-right", "btn__icon")}</a>
    <button class="nav-toggle" type="button" aria-expanded="false" aria-controls="mobile-nav">
      ${icon("list", "icon nav-toggle__open")}${icon("x", "icon nav-toggle__close")}
      <span class="visually-hidden">Menü</span>
    </button>
  </div>
  <div class="mobile-nav" id="mobile-nav">
    <nav class="container" aria-label="Mobil menü">
      <ul class="mobile-nav__list">${mobile}<li><a href="${route("contact")}"${cur("contact")}>Kapcsolat</a></li></ul>
      <a class="btn btn--primary btn--block" href="${contactHref}"><span>${CTA_LABEL}</span>${icon("arrow-right", "btn__icon")}</a>
    </nav>
  </div>
</header>`;
};

const footer = () => `<footer class="site-footer">
  <div class="container">
    <div class="site-footer__grid">
      <div class="site-footer__brand">
        ${logo("light")}
        <p>Tanácsadás és kivitelezés nagy logisztikai cégeknek: összekötjük a rendszereiket, és automatizáljuk a kézi adminisztrációt.</p>
        <a class="site-footer__mail" href="mailto:${config.email}">${icon("envelope-simple", "icon icon--sm")}${config.email}</a>
      </div>
      ${MENU.filter((m) => m.children)
        .map(
          (m) => `<div class="footer-col">
        <h2>${m.label}</h2>
        <ul>${m.children.map((c) => `<li><a href="${route(c.key)}">${c.label}</a></li>`).join("")}</ul>
      </div>`
        )
        .join("")}
      <div class="footer-col">
        <h2>Cég</h2>
        <ul>
          <li><a href="${route("method")}">Módszertan</a></li>
          <li><a href="${route("references")}">Referenciák</a></li>
          <li><a href="${route("company")}">Cégünk</a></li>
          <li><a href="${route("contact")}">Kapcsolat</a></li>
        </ul>
      </div>
    </div>
    <div class="site-footer__bottom">
      <span>© 2026 Yardly. Minden jog fenntartva.</span>
      <span class="site-footer__legal">
        <a href="${route("privacy")}">Adatkezelési tájékoztató</a>
        <a href="${route("imprint")}">Impresszum</a>
        ${config.gaId ? `<button class="link-button" type="button" data-consent-open>Süti-beállítások</button>` : ""}
      </span>
    </div>
  </div>
</footer>`;

const consentBanner = () =>
  config.gaId
    ? `<div class="consent" id="consent" role="region" aria-label="Sütik" hidden>
  <p>Az oldal látogatottságát a Google Analytics segítségével mérjük, de csak akkor, ha ehhez hozzájárul. <a href="${route("privacy")}">Részletek</a></p>
  <div class="consent__actions">
    <button class="btn btn--ghost btn--sm" type="button" data-consent="denied">Elutasítom</button>
    <button class="btn btn--primary btn--sm" type="button" data-consent="granted">Elfogadom</button>
  </div>
</div>`
    : "";

/**
 * Render a full HTML document.
 * @param {object} page { key, path, title, description, body, jsonLd?, noindex? }
 */
export const layout = (page) => {
  const canonical = `${config.siteUrl}${page.path}`;
  const json = page.jsonLd ? `<script type="application/ld+json">${JSON.stringify(page.jsonLd)}</script>` : "";
  return `<!doctype html>
<html lang="hu">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>${esc(page.title)}</title>
  <meta name="description" content="${esc(page.description)}">
  ${page.noindex ? '<meta name="robots" content="noindex">' : `<link rel="canonical" href="${canonical}">`}
  <meta name="theme-color" content="#0c1c3e">
  <meta property="og:type" content="website">
  <meta property="og:site_name" content="Yardly">
  <meta property="og:locale" content="hu_HU">
  <meta property="og:title" content="${esc(page.title)}">
  <meta property="og:description" content="${esc(page.description)}">
  <meta property="og:url" content="${canonical}">
  <meta property="og:image" content="${config.siteUrl}/assets/brand/og-image.png">
  <meta property="og:image:width" content="1200">
  <meta property="og:image:height" content="630">
  <meta name="twitter:card" content="summary_large_image">
  <link rel="icon" href="/favicon.ico" sizes="any">
  <link rel="icon" href="/favicon.svg" type="image/svg+xml">
  <link rel="apple-touch-icon" href="/apple-touch-icon-180px.png">
  <link rel="manifest" href="/site.webmanifest">
  <link rel="preload" href="/assets/fonts/manrope-latin-wght-normal.woff2" as="font" type="font/woff2" crossorigin>
  <link rel="preload" href="/assets/fonts/manrope-latin-ext-wght-normal.woff2" as="font" type="font/woff2" crossorigin>
  <script>document.documentElement.classList.add("js")</script>
  <link rel="stylesheet" href="/assets/css/styles.css">
  <script src="/assets/js/main.js" defer></script>
  ${json}
</head>
<body data-ga-id="${esc(config.gaId)}" data-form-endpoint="${esc(config.formEndpoint)}" data-email="${esc(config.email)}">
  <a class="skip-link" href="#main">Ugrás a tartalomra</a>
  <div class="scroll-sentinel" data-scroll-sentinel aria-hidden="true"></div>
  ${header(page.key)}
  <main id="main">
${page.body}
  </main>
  ${footer()}
  ${consentBanner()}
</body>
</html>
`;
};
