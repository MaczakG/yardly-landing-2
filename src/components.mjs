// Shared markup: icons, illustrations and repeated blocks.
// Every visual is hand-drawn SVG or HTML/CSS; no icon library, no stock imagery.

export const esc = (s) =>
  String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

// Keep short words (articles, conjunctions) on the same line as the next word.
const GLUE = /(^|\s)(a|az|e|s|és|is|egy|ha|de)\s+/gi;
export const glue = (text) => String(text).replace(GLUE, "$1$2\u00a0");

export const arrow = (cls = "btn__arrow") =>
  `<svg class="${cls}" viewBox="0 0 16 16" aria-hidden="true"><path d="M2 8h11M9 4l4 4-4 4" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>`;

// Official horizontal logo (brand package, colour version for light backgrounds).
export const logo = (href, label) =>
  `<a class="logo" href="${href}" aria-label="${esc(label)}"><img src="/assets/brand/yardly-vizszintes-szines.svg" width="131" height="36" alt=""></a>`;

const SOCIAL_ICONS = {
  linkedin: `<path d="M7 10v7M7 6.6v.2M11 17v-7M11 13.4c0-2 1.3-3.4 3-3.4s3 1.2 3 3.4V17" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>`,
  instagram: `<rect x="4" y="4" width="16" height="16" rx="5" fill="none" stroke="currentColor" stroke-width="1.8"/><circle cx="12" cy="12" r="3.6" fill="none" stroke="currentColor" stroke-width="1.8"/><circle cx="16.6" cy="7.4" r="1.1" fill="currentColor"/>`,
  facebook: `<path d="M15 4h-1.6A3.4 3.4 0 0 0 10 7.4V20M7 11h7" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>`,
  tiktok: `<path d="M10.5 11.5a3.5 3.5 0 1 0 3.5 3.5V4c.6 2.3 2.4 3.9 4.6 4" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"/>`,
};
const SOCIAL_NAMES = { linkedin: "LinkedIn", instagram: "Instagram", facebook: "Facebook", tiktok: "TikTok" };

// Only the profiles that exist (config.social); nothing while there are none.
export const socialLinks = (social) => {
  const keys = Object.keys(SOCIAL_ICONS).filter((key) => social[key]);
  return keys.length
    ? `<ul class="social">${keys
        .map((key) => `<li><a class="social__link" href="${esc(social[key])}" rel="noopener" target="_blank" aria-label="${SOCIAL_NAMES[key]}"><svg viewBox="0 0 24 24" aria-hidden="true">${SOCIAL_ICONS[key]}</svg></a></li>`)
        .join("")}</ul>`
    : "";
};

// ---------------------------------------------------------------------------
// Icons: the same Lucide line icons as the Yardly app (ISC licence), inlined.

const ICONS = {
  "bell": `<path d="M10.268 21a2 2 0 0 0 3.464 0"/><path d="M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326"/>`,
  "box": `<path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"/><path d="m3.3 7 8.7 5 8.7-5"/><path d="M12 22V12"/>`,
  "calendar": `<path d="M8 2v3"/><path d="M16 2v3"/><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18"/>`,
  "car": `<path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2"/><circle cx="7" cy="17" r="2"/><path d="M9 17h6"/><circle cx="17" cy="17" r="2"/>`,
  "chart-column": `<path d="M3 3v16a2 2 0 0 0 2 2h16"/><path d="M18 17V9"/><path d="M13 17V5"/><path d="M8 17v-3"/>`,
  "chart-line": `<path d="M3 3v16a2 2 0 0 0 2 2h16"/><path d="m19 9-5 5-4-4-3 3"/>`,
  "check": `<path d="M20 6 9 17l-5-5"/>`,
  "circle-dollar-sign": `<circle cx="12" cy="12" r="10"/><path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8"/><path d="M12 18V6"/>`,
  "clock": `<circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/>`,
  "download": `<path d="M12 15V3"/><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><path d="m7 10 5 5 5-5"/>`,
  "eye": `<path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"/><circle cx="12" cy="12" r="3"/>`,
  "file-check": `<path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"/><path d="M14 2v5a1 1 0 0 0 1 1h5"/><path d="m9 15 2 2 4-4"/>`,
  "file-text": `<path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"/><path d="M14 2v5a1 1 0 0 0 1 1h5"/><path d="M10 9H8"/><path d="M16 13H8"/><path d="M16 17H8"/>`,
  "flag": `<path d="M4 22V4a1 1 0 0 1 .4-.8A6 6 0 0 1 8 2c3 0 5 2 7.333 2q2 0 3.067-.8A1 1 0 0 1 20 4v10a1 1 0 0 1-.4.8A6 6 0 0 1 16 16c-3 0-5-2-8-2a6 6 0 0 0-4 1.528"/>`,
  "fuel": `<path d="M14 13h2a2 2 0 0 1 2 2v2a2 2 0 0 0 4 0v-6.998a2 2 0 0 0-.59-1.42L18 5"/><path d="M14 21V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v16"/><path d="M2 21h13"/><path d="M3 9h11"/>`,
  "history": `<path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/><path d="M3 3v5h5"/><path d="M12 7v5l4 2"/>`,
  "keyboard": `<path d="M10 8h.01"/><path d="M12 12h.01"/><path d="M14 8h.01"/><path d="M16 12h.01"/><path d="M18 8h.01"/><path d="M6 8h.01"/><path d="M7 16h10"/><path d="M8 12h.01"/><rect width="20" height="16" x="2" y="4" rx="2"/>`,
  "layout-dashboard": `<rect width="7" height="9" x="3" y="3" rx="1"/><rect width="7" height="5" x="14" y="3" rx="1"/><rect width="7" height="9" x="14" y="12" rx="1"/><rect width="7" height="5" x="3" y="16" rx="1"/>`,
  "list-checks": `<path d="M13 5h8"/><path d="M13 12h8"/><path d="M13 19h8"/><path d="m3 17 2 2 4-4"/><path d="m3 7 2 2 4-4"/>`,
  "lock": `<rect width="18" height="11" x="3" y="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>`,
  "mail": `<path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"/><rect x="2" y="4" width="20" height="16" rx="2"/>`,
  "map-pin": `<path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"/><circle cx="12" cy="10" r="3"/>`,
  "message-square": `<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>`,
  "package": `<path d="M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z"/><path d="M12 22V12"/><polyline points="3.29 7 12 12 20.71 7"/><path d="m7.5 4.27 9 5.15"/>`,
  "scan-barcode": `<path d="M3 7V5a2 2 0 0 1 2-2h2"/><path d="M17 3h2a2 2 0 0 1 2 2v2"/><path d="M21 17v2a2 2 0 0 1-2 2h-2"/><path d="M7 21H5a2 2 0 0 1-2-2v-2"/><path d="M8 7v10"/><path d="M12 7v10"/><path d="M17 7v10"/>`,
  "search": `<path d="m21 21-4.34-4.34"/><circle cx="11" cy="11" r="8"/>`,
  "shield": `<path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/>`,
  "square-check": `<rect width="18" height="18" x="3" y="3" rx="2"/><path d="m16 9-5.5 5.5L8 12"/>`,
  "triangle-alert": `<path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"/><path d="M12 9v4"/><path d="M12 17h.01"/>`,
  "upload": `<path d="M12 3v12"/><path d="m17 8-5-5-5 5"/><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>`,
  "user-check": `<path d="m16 11 2 2 4-4"/><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/>`,
  "users": `<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><path d="M16 3.128a4 4 0 0 1 0 7.744"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><circle cx="9" cy="7" r="4"/>`,
  "workflow": `<rect width="8" height="8" x="3" y="3" rx="2"/><path d="M7 11v4a2 2 0 0 0 2 2h4"/><rect width="8" height="8" x="13" y="13" rx="2"/>`,
  "wrench": `<path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.106-3.105c.32-.322.863-.22.983.218a6 6 0 0 1-8.259 7.057l-7.91 7.91a1 1 0 0 1-2.999-3l7.91-7.91a6 6 0 0 1 7.057-8.259c.438.12.54.662.219.984z"/>`,
  "zap": `<path d="M15.914 4a1.5 1.5 0 00-2.474-1.561l-9 9A1.5 1.5 0 005.5 14h4.002a.5.5 0 01.471.666L8.086 20a1.5 1.5 0 002.475 1.56l9-9A1.5 1.5 0 0018.5 10h-3.997a.5.5 0 01-.472-.667z"/>`,
};

export const icon = (name, cls = "icon") =>
  `<svg class="${cls}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${ICONS[name] || ""}</svg>`;

// ---------------------------------------------------------------------------
// Home: a small "upcoming deadlines" card, drawn in HTML

export const board = (b) => `<div class="board" aria-hidden="true">
  <div class="board__head"><span>${esc(b.head)}</span><span class="board__counts"><span class="tone-bad">${esc(b.bad)}</span><span class="tone-warn">${esc(b.warn)}</span></span></div>
  <ul class="board__rows">${b.rows
    .map(
      (r) =>
        `<li><span class="board__item"><b>${esc(r.name)}</b><span>${esc(r.sub)}</span></span><span class="pill-status tone-${r.tone}">${esc(r.due)}</span></li>`
    )
    .join("")}</ul>
</div>`;

// ---------------------------------------------------------------------------
// Reusable blocks

// Closing call to action: a primary and an optional secondary button.
export const ctaCard = (c) => `<div class="cta-card">
  <div class="cta-card__body">
    <p class="eyebrow">${c.eyebrow}</p>
    <h2 class="h2" id="cta-title">${c.title}</h2>
    <p class="lead">${c.lead}</p>
    <div class="cta-row">
      <a class="btn btn--primary" href="${c.href}">${esc(c.button)}${arrow()}</a>
      ${c.secondary ? `<a class="btn btn--ghost" href="${c.secondary.href}">${esc(c.secondary.label)}</a>` : ""}
    </div>
  </div>
  <div class="cta-card__art" aria-hidden="true">
    <svg viewBox="0 0 480 260">
      <path class="tie" d="M300 130H448"/>
      <path class="rail" d="M0 30C150 30 200 130 300 130"/><path class="rail" d="M0 80C150 80 200 130 300 130"/><path class="rail" d="M0 130H300"/><path class="rail" d="M0 180C150 180 200 130 300 130"/><path class="rail" d="M0 230C150 230 200 130 300 130"/>
      <path class="rail rail--main" d="M300 130H448"/>
      <circle class="stop" cx="300" cy="130" r="6"/><circle class="stop stop--end" cx="452" cy="130" r="9"/>
    </svg>
  </div>
</div>`;

// App screenshots: real screens with demo data (a made-up company, "Minta Logisztika Kft.").
export const SHOTS = {
  dashboard: [1600, 900], teendoim: [1600, 900], gyorskereso: [1600, 900], jarmuvek: [1600, 900],
  "jarmu-adatlap": [1600, 900], utemterv: [1600, 900], allapotfelmeres: [1600, 900], dokumentumok: [1600, 900],
  riasztasok: [1600, 900], eszkozok: [1600, 900], "eszkoz-adatlap": [1600, 900], koltsegek: [1600, 900],
  riportok: [1600, 900], analitika: [1600, 900], csereajanlas: [1600, 900], jogosultsagok: [1600, 900],
  naplo: [1600, 900], folyamatszerkeszto: [1600, 900], "folyamat-futas": [1600, 900], bejelentes: [1600, 900],
  dkv: [1600, 900], "allapotfelmeres-sablon": [1280, 1020],
  "leltar-telefon": [540, 1169], "leltar-osszesites": [540, 1169], "allapotfelmeres-telefon": [540, 1169], mobil: [540, 1169],
};

// Animated screenshots (an animated WebP) and the still frame shown to visitors who asked for less motion.
const STILLS = { "allapotfelmeres-sablon": "allapotfelmeres-sablon-allo" };

const imgTag = (name, alt, eager) => {
  const [w, h] = SHOTS[name];
  const img = `<img src="/assets/img/app/${name}.webp" width="${w}" height="${h}" alt="${esc(alt)}"${eager ? ' fetchpriority="high"' : ' loading="lazy"'} decoding="async">`;
  return STILLS[name] ? `<picture><source srcset="/assets/img/app/${STILLS[name]}.webp" media="(prefers-reduced-motion: reduce)">${img}</picture>` : img;
};

// A desktop screenshot in a browser frame.
export const screenshot = ({ img, alt, url = "app.yardly.hu", caption = "", eager = false }) => `<figure class="shot">
  <div class="shot__frame">
    <div class="shot__bar" aria-hidden="true"><span></span><span></span><span></span><em>${esc(url)}</em></div>
    ${imgTag(img, alt, eager)}
  </div>
  ${caption ? `<figcaption>${caption}</figcaption>` : ""}
</figure>`;

// A phone screenshot in a phone frame.
export const phoneShot = ({ img, alt, caption = "", eager = false }) => `<figure class="phone">
  <div class="phone__frame">${imgTag(img, alt, eager)}</div>
  ${caption ? `<figcaption>${caption}</figcaption>` : ""}
</figure>`;
