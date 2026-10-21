import { config } from "./config.mjs";
import { route, solutionRoute } from "./routes.mjs";
import { esc, logo, socialLinks, arrow, icon } from "./components.mjs";
import { APP, ui, nav, megamenu, footer as f } from "./content/site.mjs";
import { solutionBySlug } from "./content/solutions.mjs";

const abs = (path) => `${config.siteUrl}${path}`;

const chevron = `<svg class="nav__chevron" viewBox="0 0 16 16" aria-hidden="true"><path d="M4 6l4 4 4-4" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>`;

// The Megoldásaink mega menu: four columns of solution pages, a featured card and a link to
// the overview. Opened by the header trigger (assets/js/main.js); without JavaScript the
// trigger is a plain link to the overview page.
const megaPanel = (current) => {
  const link = (slug) => {
    const s = solutionBySlug[slug];
    const here = current === `solution:${slug}`;
    return `<li><a class="mega__link" href="${solutionRoute(slug)}"${here ? ' aria-current="page"' : ""}>
          <span class="mega__icon">${icon(s.icon)}</span>
          <span class="mega__text"><b>${s.menuTitle}</b><span>${s.menuDesc}</span></span>
        </a></li>`;
  };
  const fe = megamenu.featured;
  // The featured card fills the short Eszközpark column.
  const feature = `<a class="mega__feature" href="${solutionRoute(fe.slug)}">
          <span class="mega__tag">${fe.tag}</span>
          <b>${fe.title}</b>
          <span>${fe.text}</span>
          <span class="text-link">${fe.link}${arrow("text-link__arrow")}</span>
        </a>`;
  return `<div class="mega" id="mega" hidden>
  <div class="container mega__inner">
    ${megamenu.columns
      .map(
        (c, i) => `<div class="mega__col">
      <p class="mega__title">${c.title}</p>
      <ul>${c.items.map(link).join("")}</ul>
      ${i === 1 ? feature : ""}
    </div>`
      )
      .join("")}
  </div>
  <div class="mega__bottom">
    <div class="container mega__bottom-inner">
      <a class="text-link" href="${route("solutions")}">${megamenu.bottom.all}${arrow("text-link__arrow")}</a>
      <span>${icon("upload")}${megamenu.bottom.note}</span>
    </div>
  </div>
</div>`;
};

const header = (current) => {
  const isCurrent = (key) => current === key || (key === "solutions" && String(current).startsWith("solution:")) || (key === "blog" && current === "post");
  const item = (n) =>
    n.key === "solutions"
      ? `<li class="nav__item--mega"><a class="nav__trigger" href="${route("solutions")}" aria-expanded="false" aria-controls="mega"${isCurrent(n.key) ? ' aria-current="page"' : ""}>${n.label}${chevron}</a></li>`
      : `<li><a href="${route(n.key)}"${isCurrent(n.key) ? ' aria-current="page"' : ""}>${n.label}</a></li>`;

  const mobileGroups = megamenu.columns
    .map(
      (c) => `<p class="mobile-acc__title">${c.title}</p>
        <ul>${c.items.map((slug) => `<li><a href="${solutionRoute(slug)}">${icon(solutionBySlug[slug].icon)}${solutionBySlug[slug].menuTitle}</a></li>`).join("")}</ul>`
    )
    .join("");

  return `<header class="site-header">
  <div class="container site-header__inner">
    ${logo(route("home"), ui.homeLabel)}
    <nav class="nav" aria-label="Fő menü">
      <ul class="nav__links">${nav.map(item).join("")}</ul>
    </nav>
    <div class="site-header__actions">
      <a class="nav-login" href="${APP.login}">${ui.login}</a>
      <a class="btn btn--primary btn--sm" href="${APP.register}">${ui.trial}</a>
    </div>
    <button class="nav-toggle" type="button" aria-expanded="false" aria-controls="mobile-nav">
      <span class="nav-toggle__lines" aria-hidden="true"></span>
      <span class="visually-hidden">${ui.menu}</span>
    </button>
  </div>
  ${megaPanel(current)}
</header>
<div class="mobile-nav" id="mobile-nav">
  <nav aria-label="${esc(ui.menu)}">
    <ul class="mobile-nav__links">
      <li><a href="${route("home")}"${current === "home" ? ' aria-current="page"' : ""}>Főoldal${arrow("mobile-nav__arrow")}</a></li>
      <li>
        <details class="mobile-acc"${isCurrent("solutions") ? " open" : ""}>
          <summary>${megamenu.label}${chevron}</summary>
          <div class="mobile-acc__body">
            <a class="mobile-acc__all" href="${route("solutions")}">${megamenu.bottom.all}${arrow("text-link__arrow")}</a>
            ${mobileGroups}
          </div>
        </details>
      </li>
      ${nav
        .filter((n) => n.key !== "solutions")
        .map((n) => `<li><a href="${route(n.key)}"${isCurrent(n.key) ? ' aria-current="page"' : ""}>${n.label}${arrow("mobile-nav__arrow")}</a></li>`)
        .join("")}
    </ul>
  </nav>
  <div class="mobile-nav__foot">
    <a class="btn btn--ghost" href="${APP.login}">${ui.login}</a>
    <a class="btn btn--primary" href="${APP.register}">${ui.trial}</a>
  </div>
</div>`;
};

const footer = () => {
  const links = (slugs) => slugs.map((slug) => `<li><a href="${solutionRoute(slug)}">${solutionBySlug[slug].menuTitle}</a></li>`).join("");
  const [fleet, equipment, daily, lead] = megamenu.columns.map((c) => c.items);
  return `<footer class="site-footer">
  <div class="container">
    <div class="site-footer__grid">
      <div class="site-footer__brand">
        ${logo(route("home"), ui.homeLabel)}
        <p>${f.desc}</p>
        <p><a class="site-footer__mail" href="mailto:${config.email}">${config.email}</a></p>
        ${socialLinks(config.social, f.soon)}
      </div>
      <div class="footer-col">
        <h2>${f.colFleet}</h2>
        <ul>${links(fleet)}</ul>
      </div>
      <div class="footer-col">
        <h2>${f.colOps}</h2>
        <ul>${links([...equipment, ...daily])}</ul>
      </div>
      <div class="footer-col">
        <h2>${f.colLead}</h2>
        <ul>${links(lead)}</ul>
      </div>
      <div class="footer-col">
        <h2>${f.colCompany}</h2>
        <ul>
          <li><a href="${route("pricing")}">Árak</a></li>
          <li><a href="${route("about")}">Rólunk</a></li>
          <li><a href="${route("blog")}">Blog</a></li>
          <li><a href="${route("contact")}">Kapcsolat</a></li>
          <li><a href="${APP.login}">${ui.login}</a></li>
        </ul>
        <h2 class="footer-col__second">${f.colLegal}</h2>
        <ul>
          <li><a href="${route("privacy")}">${f.privacy}</a></li>
          <li><a href="${route("imprint")}">${f.imprint}</a></li>
          <li><a href="${solutionRoute("csapat-biztonsag")}#biztonsag">${f.security}</a></li>
          ${config.gaId ? `<li><button class="link-button" type="button" data-consent-open>${f.cookies}</button></li>` : ""}
        </ul>
      </div>
    </div>
    <div class="site-footer__bottom">
      <span>${f.rights} ${f.madeIn}</span>
      <a href="#main">${f.top}</a>
    </div>
  </div>
</footer>`;
};

const consentBanner = () =>
  config.gaId
    ? `<div class="consent" id="consent" role="region" aria-label="Sütik" hidden>
  <p>${ui.consent.text} <a href="${route("privacy")}">${ui.consent.more}</a></p>
  <div class="consent__actions">
    <button class="btn btn--ghost btn--sm" type="button" data-consent="denied">${ui.consent.reject}</button>
    <button class="btn btn--primary btn--sm" type="button" data-consent="granted">${ui.consent.accept}</button>
  </div>
</div>`
    : "";

/**
 * Render a full HTML document.
 * @param {object} page { key, path, title, description, body, type?, noindex?, jsonLd? }
 *   key is the page's menu key ("home", "pricing", "solution:<slug>", "post" …).
 */
export const layout = (page) => {
  const canonical = abs(page.path);
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
  <meta property="og:type" content="${page.type || "website"}">
  <meta property="og:site_name" content="Yardly">
  <meta property="og:locale" content="hu_HU">
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
  <link rel="preload" href="/assets/fonts/manrope-latin-ext-wght-normal.woff2" as="font" type="font/woff2" crossorigin>
  <link rel="stylesheet" href="/assets/css/styles.css">
  <script src="/assets/js/main.js" defer></script>
  ${json}
</head>
<body data-ga-id="${esc(config.gaId)}" data-form-endpoint="${esc(config.formEndpoint)}" data-email="${esc(config.email)}">
  <a class="skip-link" href="#main">${ui.skip}</a>
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

// A page that only forwards to a new address (old and other-language URLs). No inline script:
// the site's Content-Security-Policy allows scripts from files only, so the forward is a meta refresh.
export const redirectPage = (to) => `<!doctype html>
<html lang="hu">
<head>
  <meta charset="utf-8">
  <title>Átirányítás – Yardly</title>
  <meta name="robots" content="noindex">
  <link rel="canonical" href="${abs(to)}">
  <meta http-equiv="refresh" content="0; url=${to}">
</head>
<body>
  <p>Az oldal új címe: <a href="${to}">${abs(to)}</a></p>
</body>
</html>
`;
