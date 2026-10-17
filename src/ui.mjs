// Page shell (head, header, footer) and the small blocks shared between pages.
import { readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

import { config } from "./config.mjs";
import { route } from "./routes.mjs";

const ICON_DIR = join(dirname(fileURLToPath(import.meta.url)), "icons");
const iconCache = new Map();

export const esc = (s) =>
  String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

// Keep Hungarian articles and short conjunctions on the same line as the next word.
export const glue = (text) => String(text).replace(/(^|\s)(a|az|e|s|és|is|egy|ha|de|nem)\s+/gi, "$1$2 ");

// Phosphor icons (regular weight, MIT), inlined at build time from src/icons/.
export const icon = (name, cls = "icon") => {
  if (!iconCache.has(name)) {
    const svg = readFileSync(join(ICON_DIR, `${name}.svg`), "utf8").trim();
    iconCache.set(name, svg.replace(/^<svg /, '<svg aria-hidden="true" focusable="false" '));
  }
  return iconCache.get(name).replace("<svg ", `<svg class="${cls}" `);
};

export const CTA_LABEL = "Kérjen konzultációt";

export const button = (label, href, variant = "primary") =>
  `<a class="btn btn--${variant}" href="${href}"><span>${esc(label)}</span>${icon("arrow-right", "btn__icon")}</a>`;

export const ctaButton = (variant = "primary") => button(CTA_LABEL, route("contact"), variant);

export const textLink = (label, href) =>
  `<a class="text-link" href="${href}"><span>${esc(label)}</span>${icon("arrow-right", "text-link__icon")}</a>`;

export const logo = () =>
  `<a class="logo" href="${route("home")}" aria-label="Yardly, kezdőlap"><img src="/assets/brand/yardly-vizszintes-szines.svg" width="131" height="36" alt=""></a>`;

// Unsplash photos (see assets/img/photos/CREDITS.md), each in a large and a small size.
const PHOTOS = {
  "aerial-hub": { sizes: [2000, 1000], ratio: 1332 / 2000 },
  "floor-team": { sizes: [2000, 1000], ratio: 1333 / 2000 },
  consult: { sizes: [2000, 1000], ratio: 1331 / 2000 },
  operations: { sizes: [2000, 1000], ratio: 1335 / 2000 },
  docks: { sizes: [2000, 1000], ratio: 1333 / 2000 },
  aisle: { sizes: [1400, 700], ratio: 1867 / 1400 },
  forklift: { sizes: [1400, 700], ratio: 2100 / 1400 },
};

export const photo = (name, alt, { eager = false, sizes = "100vw", cls = "" } = {}) => {
  const p = PHOTOS[name];
  const [big, small] = p.sizes;
  const src = (w) => `/assets/img/photos/${name}-${w}.webp`;
  return `<img class="${cls}" src="${src(small)}" srcset="${src(small)} ${small}w, ${src(big)} ${big}w" sizes="${sizes}" width="${big}" height="${Math.round(big * p.ratio)}" alt="${esc(alt)}" ${eager ? 'fetchpriority="high"' : 'loading="lazy"'} decoding="async">`;
};

// Closing call to action: photo band with one message and the one button.
export const ctaBand = ({ title, text, image = "floor-team" }) => `<section class="cta-band" aria-labelledby="cta-title">
  <div class="cta-band__frame">
    ${photo(image, "", { cls: "cta-band__img" })}
    <div class="container cta-band__inner reveal">
      <h2 class="h2" id="cta-title">${glue(title)}</h2>
      <p>${glue(text)}</p>
      <div class="cta-band__actions">
        ${ctaButton("light")}
        <span class="cta-band__note">${icon("check", "icon icon--sm")}Az első konzultáció díjtalan</span>
      </div>
    </div>
  </div>
</section>`;

// Inner-page intro: label, headline, one paragraph, optional wide photo below.
export const pageHero = ({ label, title, lead, crumbs = [], image, imageAlt = "" }) => `<section class="intro" aria-labelledby="page-title">
  <div class="container">
    ${crumbs.length ? `<nav class="crumbs" aria-label="Morzsamenü"><ol>${crumbs.map((c) => `<li><a href="${c.href}">${esc(c.label)}</a></li>`).join("")}</ol></nav>` : ""}
    <div class="intro__grid">
      <div>
        ${label ? `<p class="label">${esc(label)}</p>` : ""}
        <h1 class="h1" id="page-title">${glue(title)}</h1>
      </div>
      ${lead ? `<p class="lead intro__lead">${glue(lead)}</p>` : ""}
    </div>
  </div>
  ${image ? `<div class="intro__media">${photo(image, imageAlt, { eager: true, cls: "intro__img" })}</div>` : ""}
</section>`;

// ---------------------------------------------------------------------------

const SERVICE_LINKS = [
  { key: "consulting", label: "Tanácsadás", text: "Folyamatelemzés és automatizálási ütemterv", icon: "compass" },
  { key: "delivery", label: "Kivitelezés", text: "Integráció, fejlesztés, üzemeltetés", icon: "wrench" },
];

const header = (pageKey) => {
  const current = (keys) => (keys.includes(pageKey) ? ' aria-current="page"' : "");
  const servicesActive = ["services", "consulting", "delivery"].includes(pageKey);
  const contactHref = pageKey === "contact" ? "#urlap" : route("contact");
  return `<header class="site-header" data-header>
  <div class="container site-header__inner">
    ${logo()}
    <nav class="nav" aria-label="Fő menü">
      <ul class="nav__list">
        <li class="nav__item nav__item--has-menu" data-menu>
          <a class="nav__link${servicesActive ? " is-active" : ""}" href="${route("services")}"${current(["services"])}>Szolgáltatások</a>
          <button class="nav__caret" type="button" aria-expanded="false" aria-controls="services-menu">
            ${icon("caret-down", "icon icon--xs")}<span class="visually-hidden">Szolgáltatások almenü</span>
          </button>
          <div class="nav__menu" id="services-menu">
            <ul>
              ${SERVICE_LINKS.map(
                (s) => `<li><a class="menu-link" href="${route(s.key)}"${current([s.key])}>
                <span class="menu-link__icon">${icon(s.icon)}</span>
                <span><strong>${s.label}</strong><span>${s.text}</span></span>
              </a></li>`
              ).join("")}
            </ul>
          </div>
        </li>
        <li class="nav__item"><a class="nav__link" href="${route("cases")}"${current(["cases"])}>Esettanulmány</a></li>
        <li class="nav__item"><a class="nav__link" href="${route("about")}"${current(["about"])}>Rólunk</a></li>
      </ul>
    </nav>
    <div class="site-header__cta">
      <a class="btn btn--primary btn--sm" href="${contactHref}"><span>${CTA_LABEL}</span>${icon("arrow-right", "btn__icon")}</a>
    </div>
    <button class="nav-toggle" type="button" aria-expanded="false" aria-controls="mobile-nav">
      ${icon("list", "icon nav-toggle__open")}${icon("x", "icon nav-toggle__close")}
      <span class="visually-hidden">Menü</span>
    </button>
  </div>
  <div class="mobile-nav" id="mobile-nav">
    <nav class="container" aria-label="Mobil menü">
      <ul class="mobile-nav__list">
        <li><a href="${route("services")}"${current(["services"])}>Szolgáltatások</a>
          <ul class="mobile-nav__sub">
            ${SERVICE_LINKS.map((s) => `<li><a href="${route(s.key)}"${current([s.key])}>${s.label}</a></li>`).join("")}
          </ul>
        </li>
        <li><a href="${route("cases")}"${current(["cases"])}>Esettanulmány</a></li>
        <li><a href="${route("about")}"${current(["about"])}>Rólunk</a></li>
        <li><a href="${route("contact")}"${current(["contact"])}>Kapcsolat</a></li>
      </ul>
      <a class="btn btn--primary btn--block" href="${contactHref}"><span>${CTA_LABEL}</span>${icon("arrow-right", "btn__icon")}</a>
    </nav>
  </div>
</header>`;
};

const footer = () => `<footer class="site-footer">
  <div class="container">
    <div class="site-footer__grid">
      <div class="site-footer__brand">
        ${logo()}
        <p>Folyamat-automatizálás nagy logisztikai cégeknek: tanácsadás és kivitelezés egy csapattól.</p>
        <a class="site-footer__mail" href="mailto:${config.email}">${icon("envelope-simple", "icon icon--sm")}${config.email}</a>
      </div>
      <div class="footer-col">
        <h2>Szolgáltatások</h2>
        <ul>
          <li><a href="${route("consulting")}">Tanácsadás</a></li>
          <li><a href="${route("delivery")}">Kivitelezés</a></li>
          <li><a href="${route("services")}">Együttműködés</a></li>
        </ul>
      </div>
      <div class="footer-col">
        <h2>Cég</h2>
        <ul>
          <li><a href="${route("cases")}">Esettanulmány</a></li>
          <li><a href="${route("about")}">Rólunk</a></li>
          <li><a href="${route("contact")}">Kapcsolat</a></li>
        </ul>
      </div>
      <div class="footer-col">
        <h2>Jogi információk</h2>
        <ul>
          <li><a href="${route("privacy")}">Adatkezelési tájékoztató</a></li>
          <li><a href="${route("imprint")}">Impresszum</a></li>
          ${config.gaId ? `<li><button class="link-button" type="button" data-consent-open>Süti-beállítások</button></li>` : ""}
        </ul>
      </div>
    </div>
    <div class="site-footer__bottom">
      <span>© 2026 Yardly. Minden jog fenntartva.</span>
      <span>Budapest, Magyarország</span>
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
  <meta name="theme-color" content="#ffffff">
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
