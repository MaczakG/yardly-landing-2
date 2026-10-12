// Shared markup: icons, illustrations and repeated blocks.
// Every visual is hand-drawn SVG or HTML/CSS; no icon library, no stock imagery.

export const esc = (s) =>
  String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

// Keep short words (articles, conjunctions) on the same line as the next word.
const GLUE = {
  hu: /(^|\s)(a|az|e|s|és|is|egy|ha|de)\s+/gi,
  en: /(^|\s)(a|an|to|of|in|on|by|we|is)\s+/gi,
  de: /(^|\s)(an|am|im|in|zu|zum|um|ob|so|es|der|die|das)\s+/gi,
};
export const glue = (lang, text) => String(text).replace(GLUE[lang] || /$^/, "$1$2\u00a0");

export const arrow = (cls = "btn__arrow") =>
  `<svg class="${cls}" viewBox="0 0 16 16" aria-hidden="true"><path d="M2 8h11M9 4l4 4-4 4" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>`;

// Official horizontal logo (brand package, colour version for light backgrounds).
export const logo = (href, label) =>
  `<a class="logo" href="${href}" aria-label="${esc(label)}"><img src="/assets/brand/yardly-vizszintes-szines.svg" width="131" height="36" alt=""></a>`;

// Circular flags, defined once per page as symbols and reused with <use>.
export const flagSprite = () => `<svg width="0" height="0" style="position:absolute" aria-hidden="true" focusable="false">
  <defs>
    <clipPath id="flag-circle"><circle cx="15" cy="15" r="15"/></clipPath>
    <clipPath id="uk-diag"><path d="M30 15h30v15zv15H0zH0V0zV0h30z"/></clipPath>
  </defs>
  <symbol id="flag-hu" viewBox="0 0 30 30"><g clip-path="url(#flag-circle)"><rect width="30" height="10" fill="#cd2a3e"/><rect y="10" width="30" height="10" fill="#ffffff"/><rect y="20" width="30" height="10" fill="#436f4d"/></g></symbol>
  <symbol id="flag-de" viewBox="0 0 30 30"><g clip-path="url(#flag-circle)"><rect width="30" height="10" fill="#000000"/><rect y="10" width="30" height="10" fill="#dd0000"/><rect y="20" width="30" height="10" fill="#ffce00"/></g></symbol>
  <symbol id="flag-en" viewBox="0 0 30 30"><g clip-path="url(#flag-circle)"><g transform="translate(-15 0)"><rect width="60" height="30" fill="#012169"/><path d="M0 0l60 30M60 0L0 30" stroke="#ffffff" stroke-width="6"/><path d="M0 0l60 30M60 0L0 30" clip-path="url(#uk-diag)" stroke="#c8102e" stroke-width="4"/><path d="M30 0v30M0 15h60" stroke="#ffffff" stroke-width="10"/><path d="M30 0v30M0 15h60" stroke="#c8102e" stroke-width="6"/></g></g></symbol>
</svg>`;

export const flag = (lang) => `<svg class="flag" viewBox="0 0 30 30" aria-hidden="true"><use href="#flag-${lang}"/></svg>`;

const SOCIAL_ICONS = {
  linkedin: `<path d="M7 10v7M7 6.6v.2M11 17v-7M11 13.4c0-2 1.3-3.4 3-3.4s3 1.2 3 3.4V17" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>`,
  instagram: `<rect x="4" y="4" width="16" height="16" rx="5" fill="none" stroke="currentColor" stroke-width="1.8"/><circle cx="12" cy="12" r="3.6" fill="none" stroke="currentColor" stroke-width="1.8"/><circle cx="16.6" cy="7.4" r="1.1" fill="currentColor"/>`,
  facebook: `<path d="M15 4h-1.6A3.4 3.4 0 0 0 10 7.4V20M7 11h7" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>`,
  tiktok: `<path d="M10.5 11.5a3.5 3.5 0 1 0 3.5 3.5V4c.6 2.3 2.4 3.9 4.6 4" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"/>`,
};
const SOCIAL_NAMES = { linkedin: "LinkedIn", instagram: "Instagram", facebook: "Facebook", tiktok: "TikTok" };

export const socialLinks = (social, soonLabel) =>
  `<ul class="social">${Object.keys(SOCIAL_ICONS)
    .map((key) => {
      const svg = `<svg viewBox="0 0 24 24" aria-hidden="true">${SOCIAL_ICONS[key]}</svg>`;
      return social[key]
        ? `<li><a class="social__link" href="${esc(social[key])}" rel="noopener" target="_blank" aria-label="${SOCIAL_NAMES[key]}">${svg}</a></li>`
        : `<li><span class="social__link is-soon" title="${esc(`${SOCIAL_NAMES[key]} · ${soonLabel}`)}"><span class="visually-hidden">${SOCIAL_NAMES[key]} (${esc(soonLabel)})</span>${svg}</span></li>`;
    })
    .join("")}</ul>`;

// ---------------------------------------------------------------------------
// Hero diagram: existing systems → Yardly → automated processes

const MONO_CHAR = 6.3; // Geist Mono advance at 10.5px
const pillRow = (pills, startX, maxWidth) => {
  let x = startX;
  const out = pills.map((label) => {
    const w = Math.round(label.length * MONO_CHAR + 18);
    const g = `<g class="pill" transform="translate(${x} 0)"><rect width="${w}" height="24" rx="12" x="0.5" y="0.5"/><text x="${w / 2 + 0.5}" y="16.5" text-anchor="middle">${esc(label)}</text></g>`;
    x += w + 6;
    return g;
  });
  if (x - 6 - startX > maxWidth) throw new Error(`Diagram pills too wide: ${pills.join(", ")}`);
  return out.join("");
};

const packet = (path, dur, begin, keys = "0;0.08;0.9;1", r = 4) =>
  `<circle class="svg-packet" r="${r}"><animateMotion dur="${dur}s" begin="-${begin}s" repeatCount="indefinite"><mpath href="#${path}"/></animateMotion><animate attributeName="opacity" values="0;1;1;0" keyTimes="${keys}" dur="${dur}s" begin="-${begin}s" repeatCount="indefinite"/></circle>`;

// Simplified brand mark (Y and dot) for dark surfaces, drawn about 15px wide.
const hubMark = (x, y) =>
  `<g transform="translate(${x - 2.5} ${y - 1}) scale(0.2)"><g stroke="#ffffff" stroke-width="12" stroke-linecap="round"><path d="M50 41L18.82 23M50 41L81.18 23M50 41V77"/></g><circle cx="50" cy="41" r="17" fill="#22d3b8"/></g>`;

export const yardDiagram = (d) => {
  const ys = [26, 104, 182, 260, 338];
  const left = d.left
    .map(
      (n, i) =>
        `<g class="svg-node" transform="translate(0 ${ys[i]})"><rect width="232" height="56" rx="10"/><text class="cat" x="18" y="22">${esc(n.cat)}</text><text class="name" x="18" y="43">${esc(n.name)}</text><circle class="svg-port" cx="232" cy="28" r="4"/></g>`
    )
    .join("");
  const right = d.right
    .map(
      (n, i) =>
        `<g class="svg-node" transform="translate(968 ${ys[i]})"><rect width="232" height="56" rx="10"/><text class="cat" x="22" y="22">${esc(n.cat)}</text><text class="name" x="22" y="43">${esc(n.name)}</text><circle class="svg-port" cx="0" cy="28" r="4"/></g>`
    )
    .join("");
  const top = d.mobileTop
    .map(
      (n, i) =>
        `<g class="svg-node" transform="translate(${i * 126} 0)"><rect x="0.5" y="0.5" width="107" height="47" rx="9"/><text class="cat" x="12" y="19">${esc(n.cat)}</text><text class="name" x="12" y="37">${esc(n.name)}</text><circle class="svg-port" cx="54" cy="48" r="3.5"/></g>`
    )
    .join("");
  const bottom = d.mobileBottom
    .map(
      (n, i) =>
        `<g class="svg-node" transform="translate(${i * 126} 392)"><rect x="0.5" y="0.5" width="107" height="47" rx="9"/><text class="cat" x="12" y="19">${esc(n.cat)}</text><text class="name" x="12" y="37">${esc(n.name)}</text><circle class="svg-port" cx="54" cy="0" r="3.5"/></g>`
    )
    .join("");
  const use = (ids) => ids.map((id) => `<use href="#${id}"/>`).join("");
  const wideIds = ["tl1", "tl2", "tl3", "tl4", "tl5", "tr1", "tr2", "tr3", "tr4", "tr5"];
  const tallIds = ["ml1", "ml2", "ml3", "mr1", "mr2", "mr3"];

  return `<figure class="yard">
  <div class="yard__panel">
    <div class="yard__bar">
      <span class="yard__bar-group"><span class="dot dot--ok" aria-hidden="true"></span>${esc(d.bar)}</span>
      <span class="yard__legend"><span class="dot" aria-hidden="true"></span>${esc(d.legend)}</span>
    </div>
    <div class="yard__stage">
      <svg class="yard__svg yard__svg--wide" viewBox="0 0 1200 420" role="img" aria-labelledby="yard-w-title yard-w-desc">
        <title id="yard-w-title">${esc(d.title)}</title>
        <desc id="yard-w-desc">${esc(d.desc)}</desc>
        <defs>
          <path id="tl1" d="M232 54H280C365 54 365 170 450 170"/><path id="tl2" d="M232 132H280C365 132 365 190 450 190"/><path id="tl3" d="M232 210H450"/><path id="tl4" d="M232 288H280C365 288 365 230 450 230"/><path id="tl5" d="M232 366H280C365 366 365 250 450 250"/>
          <path id="tr1" d="M750 170C835 170 835 54 920 54H968"/><path id="tr2" d="M750 190C835 190 835 132 920 132H968"/><path id="tr3" d="M750 210H968"/><path id="tr4" d="M750 230C835 230 835 288 920 288H968"/><path id="tr5" d="M750 250C835 250 835 366 920 366H968"/>
        </defs>
        <g class="svg-ties">${use(wideIds)}</g>
        <g class="svg-track">${use(wideIds)}</g>
        ${left}${right}
        <g class="svg-packets">
          ${packet("tl1", 3.6, 0.4)}${packet("tl2", 4.2, 2.1)}${packet("tl3", 3.2, 1.2)}${packet("tl4", 4.6, 3.3)}${packet("tl5", 3.9, 0.9)}
          ${packet("tr1", 4.0, 1.6, "0;0.1;0.92;1")}${packet("tr2", 3.4, 2.8, "0;0.1;0.92;1")}${packet("tr3", 3.0, 0.2, "0;0.1;0.92;1")}${packet("tr4", 4.4, 1.9, "0;0.1;0.92;1")}${packet("tr5", 3.7, 3.0, "0;0.1;0.92;1")}
        </g>
        <g class="svg-hub" transform="translate(450 130)">
          <rect width="300" height="160" rx="14"/>
          ${hubMark(24, 20)}
          <text class="label" x="46" y="33">YARDLY</text>
          <text class="title" x="24" y="72">${esc(d.hub.title)}</text>
          <g transform="translate(0 88)">${pillRow(d.hub.pills, 24, 252)}</g>
          <circle class="live" cx="28" cy="141.5" r="3.5"/>
          <text class="stat" x="40" y="146">${esc(d.hub.status)}</text>
          <text class="stat" x="276" y="146" text-anchor="end">${esc(d.hub.last)}</text>
        </g>
        <g class="svg-hub">${[170, 190, 210, 230, 250].map((y) => `<circle class="hub-port" cx="450" cy="${y}" r="3.5"/><circle class="hub-port" cx="750" cy="${y}" r="3.5"/>`).join("")}</g>
      </svg>
      <svg class="yard__svg yard__svg--tall" viewBox="0 0 360 440" role="img" aria-labelledby="yard-t-title yard-t-desc">
        <title id="yard-t-title">${esc(d.title)}</title>
        <desc id="yard-t-desc">${esc(d.desc)}</desc>
        <defs>
          <path id="ml1" d="M54 48C54 100 150 98 150 150"/><path id="ml2" d="M180 48V150"/><path id="ml3" d="M306 48C306 100 210 98 210 150"/>
          <path id="mr1" d="M150 290C150 342 54 340 54 392"/><path id="mr2" d="M180 290V392"/><path id="mr3" d="M210 290C210 342 306 340 306 392"/>
        </defs>
        <g class="svg-ties">${use(tallIds)}</g>
        <g class="svg-track">${use(tallIds)}</g>
        ${top}${bottom}
        <g class="svg-packets">
          ${packet("ml1", 2.6, 0.3, "0;0.1;0.88;1", 3.5)}${packet("ml2", 2.2, 1.4, "0;0.1;0.88;1", 3.5)}${packet("ml3", 2.9, 2.0, "0;0.1;0.88;1", 3.5)}
          ${packet("mr1", 2.7, 1.1, "0;0.12;0.9;1", 3.5)}${packet("mr2", 2.3, 0.6, "0;0.12;0.9;1", 3.5)}${packet("mr3", 3.0, 2.4, "0;0.12;0.9;1", 3.5)}
        </g>
        <g class="svg-hub" transform="translate(30 150)">
          <rect width="300" height="140" rx="14"/>
          ${hubMark(22, 18)}
          <text class="label" x="44" y="31">YARDLY</text>
          <text class="title" x="22" y="66">${esc(d.hub.title)}</text>
          <g transform="translate(0 80)">${pillRow(d.hub.pills, 22, 256)}</g>
          <circle class="live" cx="26" cy="121.5" r="3.5"/>
          <text class="stat" x="38" y="126">${esc(d.hub.status)}</text>
          <text class="stat" x="278" y="126" text-anchor="end">${esc(d.hub.last)}</text>
        </g>
        <g class="svg-hub">${[150, 180, 210].map((x) => `<circle class="hub-port" cx="${x}" cy="150" r="3.5"/><circle class="hub-port" cx="${x}" cy="290" r="3.5"/>`).join("")}</g>
      </svg>
    </div>
  </div>
  <figcaption><span class="mono">${esc(d.figLabel)}</span><span>${esc(d.caption)}</span></figcaption>
</figure>`;
};

// ---------------------------------------------------------------------------
// Benefit visuals

export const meshFigure = (m) => `<svg class="mesh" viewBox="0 0 320 184" role="img" aria-labelledby="mesh-title">
  <title id="mesh-title">${esc(m.title)}</title>
  <path class="edges" d="M80 32L123.3 57M80 32L123.3 107M80 32L80 132M80 32L36.7 107M80 32L36.7 57M123.3 57L123.3 107M123.3 57L80 132M123.3 57L36.7 107M123.3 57L36.7 57M123.3 107L80 132M123.3 107L36.7 107M123.3 107L36.7 57M80 132L36.7 107M80 132L36.7 57M36.7 107L36.7 57"/>
  <circle class="n" cx="80" cy="32" r="5"/><circle class="n" cx="123.3" cy="57" r="5"/><circle class="n" cx="123.3" cy="107" r="5"/><circle class="n" cx="80" cy="132" r="5"/><circle class="n" cx="36.7" cy="107" r="5"/><circle class="n" cx="36.7" cy="57" r="5"/>
  <line class="divider" x1="160" y1="20" x2="160" y2="144"/>
  <path class="spokes" d="M240 82L240 32M240 82L283.3 57M240 82L283.3 107M240 82L240 132M240 82L196.7 107M240 82L196.7 57"/>
  <circle class="n" cx="240" cy="32" r="5"/><circle class="n" cx="283.3" cy="57" r="5"/><circle class="n" cx="283.3" cy="107" r="5"/><circle class="n" cx="240" cy="132" r="5"/><circle class="n" cx="196.7" cy="107" r="5"/><circle class="n" cx="196.7" cy="57" r="5"/>
  <circle class="hub" cx="240" cy="82" r="9"/>
  <text class="k" x="80" y="162" text-anchor="middle">${esc(m.leftKey)}</text>
  <text class="v" x="80" y="180" text-anchor="middle">${esc(m.leftValue)}</text>
  <text class="k" x="240" y="162" text-anchor="middle">${esc(m.rightKey)}</text>
  <text class="v" x="240" y="180" text-anchor="middle">${esc(m.rightValue)}</text>
</svg>`;

export const trace = (t) => `<div class="trace" aria-hidden="true">
  <div class="trace__head"><span>${esc(t.head)}</span><span class="status">${esc(t.status)}</span></div>
  <ol class="trace__steps">${t.steps
    .map(
      (s) =>
        `<li${s.human ? ' class="is-human"' : ""}><span class="trace__mark"></span><span class="trace__what"><b>${esc(s.what)}</b><span>${esc(s.sub)}</span></span><span class="trace__time">${esc(s.time)}</span></li>`
    )
    .join("")}</ol>
</div>`;

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
// About page: top-down plan of a company yard

export const yardPlan = (p) => {
  const truck = (x, y, accent) =>
    `<g transform="translate(${x} ${y})"><rect class="plan-vehicle${accent ? " is-due" : ""}" width="58" height="20" rx="3"/><rect class="plan-cab${accent ? " is-due" : ""}" x="60" y="2" width="16" height="16" rx="3"/></g>`;
  const van = (x, y) => `<rect class="plan-vehicle" x="${x}" y="${y}" width="40" height="18" rx="4"/>`;
  const forklift = (x, y, accent) =>
    `<g transform="translate(${x} ${y})"><rect class="plan-forklift${accent ? " is-due" : ""}" width="16" height="12" rx="2.5"/><path class="plan-forks" d="M16 3h8M16 9h8"/></g>`;
  return `<svg class="plan" viewBox="0 0 480 300" role="img" aria-labelledby="plan-title">
  <title id="plan-title">${esc(p.title)}</title>
  <rect class="plan-yard" x="8" y="8" width="464" height="284" rx="14"/>
  <path class="plan-road" d="M8 252H288"/>
  <path class="plan-road-line" d="M20 252H280"/>
  <path class="plan-gate" d="M8 236v32"/>
  <rect class="plan-building" x="28" y="28" width="196" height="150" rx="6"/>
  <rect class="plan-rack" x="44" y="50" width="164" height="9" rx="2"/>
  <rect class="plan-rack" x="44" y="78" width="164" height="9" rx="2"/>
  <rect class="plan-rack" x="44" y="106" width="164" height="9" rx="2"/>
  <rect class="plan-rack" x="44" y="134" width="164" height="9" rx="2"/>
  <rect class="plan-door" x="224" y="44" width="7" height="22" rx="1.5"/>
  <rect class="plan-door" x="224" y="80" width="7" height="22" rx="1.5"/>
  <rect class="plan-door" x="224" y="116" width="7" height="22" rx="1.5"/>
  ${forklift(246, 48, false)}${forklift(246, 86, true)}${forklift(246, 124, false)}${forklift(120, 158, false)}
  <circle class="plan-ring" cx="258" cy="92" r="17"/>
  <path class="plan-bays" d="M312 28v150M364 28v150M416 28v150M468 28v150M312 28h156M312 178h156"/>
  ${van(318, 40)}${van(370, 40)}${van(422, 40)}
  ${van(318, 76)}${van(422, 76)}
  ${truck(300, 214, false)}${truck(386, 214, true)}${truck(300, 252, false)}
  <text class="plan-label" x="36" y="198">${esc(p.warehouse)}</text>
  <text class="plan-label" x="238" y="166">${esc(p.forklifts)}</text>
  <text class="plan-label" x="312" y="198">${esc(p.parking)}</text>
  <text class="plan-label" x="20" y="226">${esc(p.gate)}</text>
</svg>`;
};

// ---------------------------------------------------------------------------
// Reusable blocks

export const ctaCard = (c) => `<div class="cta-card">
  <div class="cta-card__body">
    <p class="eyebrow">${c.eyebrow}</p>
    <h2 class="h2" id="cta-title">${c.title}</h2>
    <p class="lead">${c.lead}</p>
    <div class="cta-row">
      <a class="btn btn--primary" href="${c.href}">${esc(c.button)}${arrow()}</a>
      ${c.note ? `<span class="cta-note">${c.note}</span>` : ""}
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

export const screenshot = (s) => `<figure class="shot">
  <div class="shot__frame">
    <div class="shot__bar" aria-hidden="true"><span></span><span></span><span></span><em>${esc(s.url)}</em></div>
    <img src="${s.src}" width="${s.width}" height="${s.height}" alt="${esc(s.alt)}" loading="lazy" decoding="async">
  </div>
  ${s.caption ? `<figcaption>${s.caption}</figcaption>` : ""}
</figure>`;

export const SHOTS = {
  dashboard: { src: "/assets/img/app/dashboard.webp", width: 1600, height: 1161 },
  maintenance: { src: "/assets/img/app/maintenance.webp", width: 1600, height: 659 },
  forecast: { src: "/assets/img/app/forecast.webp", width: 1600, height: 583 },
  equipment: { src: "/assets/img/app/equipment.webp", width: 1600, height: 1166 },
};
