import { config } from "./config.mjs";
import { LANGS, LANG_META, ROUTES, route } from "./routes.mjs";
import { esc, logo, flag, flagSprite, socialLinks, arrow } from "./components.mjs";

const abs = (path) => `${config.siteUrl}${path}`;

const langSwitcher = (t, alternates, cls = "") =>
  `<ul class="lang-switch ${cls}" aria-label="${esc(t.ui.langLabel)}">${LANGS.map((l) => {
    const current = l === t.lang;
    return `<li><a href="${alternates[l]}" hreflang="${l}" lang="${l}"${current ? ' aria-current="true"' : ""} title="${LANG_META[l].name}">${flag(l)}<span class="lang-switch__code">${l.toUpperCase()}</span><span class="visually-hidden">${LANG_META[l].name}</span></a></li>`;
  }).join("")}</ul>`;

const header = (t, pageKey, alternates) => {
  const navItems = ["solutions", "cases", "blog", "about"];
  const link = (key) =>
    `<li><a href="${route(key, t.lang)}"${pageKey === key ? ' aria-current="page"' : ""}>${t.ui.nav[key]}</a></li>`;
  const contactHref = pageKey === "contact" ? "#enquiry" : route("contact", t.lang);
  return `<header class="site-header">
  <div class="container site-header__inner">
    ${logo(route("home", t.lang), t.ui.homeLabel)}
    <nav class="nav" aria-label="${esc(t.ui.menu)}">
      <ul class="nav__links">${navItems.map(link).join("")}</ul>
    </nav>
    <div class="site-header__actions">
      ${langSwitcher(t, alternates)}
      <a class="btn btn--primary btn--sm" href="${contactHref}">${t.ui.cta}</a>
    </div>
    <button class="nav-toggle" type="button" aria-expanded="false" aria-controls="mobile-nav">
      <span class="nav-toggle__lines" aria-hidden="true"></span>
      <span class="visually-hidden">${t.ui.menu}</span>
    </button>
  </div>
</header>
<div class="mobile-nav" id="mobile-nav">
  <nav aria-label="${esc(t.ui.menu)}">
    <ul class="mobile-nav__links">${["home", ...navItems, "contact"]
      .map((key) => `<li><a href="${route(key, t.lang)}"${pageKey === key ? ' aria-current="page"' : ""}>${t.ui.nav[key]}${arrow("mobile-nav__arrow")}</a></li>`)
      .join("")}</ul>
  </nav>
  <div class="mobile-nav__foot">
    ${langSwitcher(t, alternates, "lang-switch--large")}
    <a class="btn btn--primary" href="${contactHref}">${t.ui.cta}</a>
  </div>
</div>`;
};

const footer = (t) => {
  const f = t.ui.footer;
  const s = route("solutions", t.lang);
  return `<footer class="site-footer">
  <div class="container">
    <div class="site-footer__grid">
      <div class="site-footer__brand">
        ${logo(route("home", t.lang), t.ui.homeLabel)}
        <p>${f.desc}</p>
        <p><a class="site-footer__mail" href="mailto:${config.email}">${config.email}</a></p>
        ${socialLinks(config.social, f.soon)}
      </div>
      <div class="footer-col">
        <h2>${f.colSolutions}</h2>
        <ul>
          <li><a href="${s}#automation">${f.automation}</a></li>
          <li><a href="${s}#modules">${f.modules}</a></li>
          <li><a href="${s}#operations">${f.operations}</a></li>
          <li><a href="${s}#pricing">${f.pricing}</a></li>
        </ul>
      </div>
      <div class="footer-col">
        <h2>${f.colCompany}</h2>
        <ul>
          <li><a href="${route("about", t.lang)}">${t.ui.nav.about}</a></li>
          <li><a href="${route("cases", t.lang)}">${t.ui.nav.cases}</a></li>
          <li><a href="${route("blog", t.lang)}">${t.ui.nav.blog}</a></li>
          <li><a href="${route("contact", t.lang)}">${t.ui.nav.contact}</a></li>
        </ul>
      </div>
      <div class="footer-col">
        <h2>${f.colLegal}</h2>
        <ul>
          <li><a href="${route("privacy", t.lang)}">${f.privacy}</a></li>
          <li><a href="${route("imprint", t.lang)}">${f.imprint}</a></li>
          ${config.gaId ? `<li><button class="link-button" type="button" data-consent-open>${f.cookies}</button></li>` : ""}
        </ul>
      </div>
    </div>
    <div class="site-footer__bottom">
      <span>© 2026 Yardly. ${f.rights} ${f.madeIn}</span>
      <a href="#main">${f.top}</a>
    </div>
  </div>
</footer>`;
};

const consentBanner = (t) =>
  config.gaId
    ? `<div class="consent" id="consent" role="region" aria-label="Cookies" hidden>
  <p>${t.ui.consent.text} <a href="${route("privacy", t.lang)}">${t.ui.consent.more}</a></p>
  <div class="consent__actions">
    <button class="btn btn--ghost btn--sm" type="button" data-consent="denied">${t.ui.consent.reject}</button>
    <button class="btn btn--primary btn--sm" type="button" data-consent="granted">${t.ui.consent.accept}</button>
  </div>
</div>`
    : "";

/**
 * Render a full HTML document.
 * @param {object} t        locale strings
 * @param {object} page     { key, title, description, alternates: {hu,en,de}, body, type?, noindex? }
 */
export const layout = (t, page) => {
  const alternates = page.alternates;
  const canonical = abs(alternates[t.lang]);
  const meta = LANG_META[t.lang];
  const hreflang = LANGS.map((l) => `<link rel="alternate" hreflang="${l}" href="${abs(alternates[l])}">`).join("\n  ");
  const json = page.jsonLd ? `<script type="application/ld+json">${JSON.stringify(page.jsonLd)}</script>` : "";
  return `<!doctype html>
<html lang="${meta.htmlLang}">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>${esc(page.title)}</title>
  <meta name="description" content="${esc(page.description)}">
  ${page.noindex ? '<meta name="robots" content="noindex">' : `<link rel="canonical" href="${canonical}">\n  ${hreflang}\n  <link rel="alternate" hreflang="x-default" href="${abs(alternates.hu)}">`}
  <meta name="theme-color" content="#ffffff">
  <meta property="og:type" content="${page.type || "website"}">
  <meta property="og:site_name" content="Yardly">
  <meta property="og:locale" content="${meta.locale}">
  <meta property="og:title" content="${esc(page.title)}">
  <meta property="og:description" content="${esc(page.description)}">
  <meta property="og:url" content="${canonical}">
  <meta property="og:image" content="${abs("/assets/brand/og-image.png")}">
  <meta property="og:image:width" content="1200">
  <meta property="og:image:height" content="630">
  <meta name="twitter:card" content="summary_large_image">
  <link rel="icon" href="/favicon.ico" sizes="any">
  <link rel="icon" href="/favicon.svg" type="image/svg+xml">
  <link rel="apple-touch-icon" href="/apple-touch-icon-180px.png">
  <link rel="manifest" href="/site.webmanifest">
  <link rel="preload" href="/assets/fonts/manrope-latin-wght-normal.woff2" as="font" type="font/woff2" crossorigin>
  ${t.lang === "hu" ? '<link rel="preload" href="/assets/fonts/manrope-latin-ext-wght-normal.woff2" as="font" type="font/woff2" crossorigin>' : ""}
  <link rel="stylesheet" href="/assets/css/styles.css">
  <script src="/assets/js/main.js" defer></script>
  ${json}
</head>
<body data-ga-id="${esc(config.gaId)}" data-form-endpoint="${esc(config.formEndpoint)}" data-email="${esc(config.email)}">
  ${flagSprite()}
  <a class="skip-link" href="#main">${t.ui.skip}</a>
  ${header(t, page.key, alternates)}
  <main id="main">
${page.body}
  </main>
  ${footer(t)}
  ${consentBanner(t)}
</body>
</html>
`;
};

export const pageAlternates = (key) => ({ ...ROUTES[key] });
