// Page templates. Each returns { title, description, body, jsonLd? }; layout.mjs wraps them.
import { config } from "./config.mjs";
import { route, solutionRoute, postRoute } from "./routes.mjs";
import { esc, glue as g, arrow, icon, board, ctaCard, screenshot, phoneShot } from "./components.mjs";
import { APP, ui } from "./content/site.mjs";
import { home as h } from "./content/home.mjs";
import { overview, groups, solutions, solutionBySlug } from "./content/solutions.mjs";
import { pricing as pr, plans, comparison, limits, VAT_PERCENT, SELF_SERVICE_MAX_VEHICLES, ANNUAL_FREE_MONTHS, EQUIPMENT_ADDON } from "./content/pricing.mjs";
import { contact as co, privacy as pv, imprint as im, enterprise as en } from "./content/pages.mjs";
import { blog as bl, categories, posts } from "./content/posts.mjs";

// "29 990 Ft": thousands grouped with a non-breaking space, so a price never wraps.
export const huf = (n) => `${num(n)} Ft`;
// "1 000": a whole number with its thousands grouped by a non-breaking space.
export const num = (n) => String(Math.round(n)).replace(/\B(?=(\d{3})+(?!\d))/g, " ");

// The equipment slider's top end; the number field next to it takes any count.
const CALC_EQUIPMENT_RANGE = 2000;

const withEmail = (html) => html.replaceAll("{email}", config.email);
const contactHref = (topic, extra = "") => `${route("contact")}?tema=${topic}${extra}#enquiry`;
const notifyHref = (name) => contactHref("notify", `&funkcio=${encodeURIComponent(name)}`);

const sectionHead = (s, id) => `<div class="section-head">
  <div>
    <p class="eyebrow">${s.eyebrow}</p>
    <h2 class="h2"${id ? ` id="${id}"` : ""}>${g(s.title)}</h2>
  </div>
  ${s.lead ? `<p class="lead">${s.lead}</p>` : ""}
</div>`;

const ticks = (items) => `<ul class="ticks">${items.map((i) => `<li>${i}</li>`).join("")}</ul>`;

const ctaButtons = (note = ui.trialNote) => `<div class="cta-row">
  <a class="btn btn--primary" href="${APP.register}">${ui.trial}${arrow()}</a>
  <a class="btn btn--ghost" href="${contactHref("demo")}">${ui.demo}</a>
</div>
${note ? `<p class="cta-note cta-note--block">${note}</p>` : ""}`;

const pageHero = (p, extra = "") => `<section class="page-hero" aria-labelledby="page-title">
  <div class="container">
    <div class="page-hero__grid">
      <div>
        <p class="eyebrow">${p.eyebrow}${p.badge ? ` <span class="badge">${p.badge}</span>` : ""}</p>
        <h1 class="h1" id="page-title">${g(p.h1)}</h1>
      </div>
      ${p.lead ? `<p class="lead">${p.lead}</p>` : ""}
    </div>
    ${extra}
  </div>
</section>`;

const ctaSection = (c) => `<section class="section section--cta" aria-labelledby="cta-title">
  <div class="container">
    ${ctaCard({
      eyebrow: c.eyebrow || "Kezdje el",
      title: g(c.title),
      lead: c.lead || ui.trialNote,
      button: ui.trial,
      href: APP.register,
      secondary: { label: ui.demo, href: contactHref("demo") },
    })}
  </div>
</section>`;

const faqBlock = (f, id = "faq") => `<section class="section" id="${id}" aria-labelledby="${id}-title">
  <div class="container faq">
    <div class="faq__intro">
      <p class="eyebrow">${f.eyebrow}</p>
      <h2 class="h2" id="${id}-title">${g(f.title)}</h2>
      ${f.lead ? `<p class="muted">${f.lead}</p>` : ""}
      <a class="text-link" href="${route("contact")}">Kérdezzen tőlünk${arrow("text-link__arrow")}</a>
    </div>
    <div class="faq__list">
      ${f.items
        .map(
          (q, i) => `<details class="faq__item" name="${id}"${i === 0 ? " open" : ""}>
        <summary>${q.q}<span class="faq__icon" aria-hidden="true"></span></summary>
        <div class="faq__answer"><p>${q.a}</p></div>
      </details>`
        )
        .join("")}
    </div>
  </div>
</section>`;

const faqJsonLd = (items) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: items.map((q) => ({ "@type": "Question", name: q.q, acceptedAnswer: { "@type": "Answer", text: q.a } })),
});

const softwareJsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Yardly",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web",
  url: config.siteUrl,
  offers: {
    "@type": "AggregateOffer",
    priceCurrency: "HUF",
    lowPrice: Math.min(...plans.map((p) => p.monthly)),
    highPrice: Math.max(...plans.map((p) => p.monthly)),
    offerCount: plans.length,
  },
};

const shot = (s, eager = false) => (s.phone ? phoneShot({ ...s, eager }) : screenshot({ ...s, eager }));

const soonTag = `<span class="soon-tag">${icon("clock")}${ui.soon}</span>`;

const solutionCard = (s) => `<a class="sol-card" href="${solutionRoute(s.slug)}">
  <span class="sol-card__icon">${icon(s.icon)}</span>
  <span class="sol-card__text"><b>${s.menuTitle}</b><span>${s.menuDesc}</span></span>
  ${arrow("sol-card__arrow")}
</a>`;

// ---------------------------------------------------------------------------
// Főoldal

export const home = () => {
  const a = h.alerts;
  const boardData = {
    head: a.board.title,
    bad: a.board.items.filter((i) => i.tone === "bad").length + " lejárt",
    warn: a.board.items.filter((i) => i.tone === "warn").length + " esedékes",
    rows: a.board.items.map((i) => ({ name: i.name, sub: i.what, due: i.status, tone: i.tone })),
  };
  return {
    title: h.title,
    description: h.description,
    jsonLd: [
      {
        "@context": "https://schema.org",
        "@type": "Organization",
        name: "Yardly",
        url: config.siteUrl,
        email: config.email,
        logo: `${config.siteUrl}/icon-512px.png`,
        address: { "@type": "PostalAddress", addressLocality: "Budapest", addressCountry: "HU" },
      },
      softwareJsonLd,
    ],
    body: `
<section class="hero" aria-labelledby="hero-title">
  <div class="container">
    <div class="hero__grid">
      <div>
        <p class="eyebrow">${h.hero.eyebrow}</p>
        <h1 class="display hero__title" id="hero-title">${g(h.hero.title)}</h1>
      </div>
      <div class="hero__aside">
        <p class="lead">${h.hero.lead}</p>
        ${ctaButtons()}
      </div>
    </div>
    <div class="hero-visual">
      ${screenshot({ img: "dashboard", alt: h.hero.shotAlt, eager: true })}
      ${phoneShot({ img: "allapotfelmeres-telefon", alt: h.hero.phoneAlt, eager: true })}
    </div>
  </div>
</section>

<section class="trust" aria-label="Röviden">
  <div class="container">
    <ul class="trust__list">${h.trust.map((t) => `<li>${icon(t.icon)}<span>${t.text}</span></li>`).join("")}</ul>
  </div>
</section>

<section class="section section--band" aria-labelledby="pain-title">
  <div class="container">
    <div class="section-head section-head--single">
      <div>
        <p class="eyebrow">Ismerős helyzetek</p>
        <h2 class="h2" id="pain-title">${h.problems.title}</h2>
      </div>
    </div>
    <div class="pains">
      ${h.problems.items.map((p) => `<article class="pain"><p class="pain__quote">${p.quote}</p><p>${p.text}</p></article>`).join("")}
    </div>
    <p class="pains__close">${h.problems.close}</p>
  </div>
</section>

<section class="section" aria-labelledby="modules-title">
  <div class="container">
    ${sectionHead(h.modules, "modules-title")}
    <div class="duo">
      ${h.modules.items
        .map(
          (m) => `<article class="duo__card">
        <div class="duo__shot">${screenshot({ img: m.img, alt: m.alt })}</div>
        <div class="duo__body">
          <h3 class="h3-lg">${m.name}</h3>
          <p>${m.text}</p>
          <a class="text-link" href="${solutionRoute(m.slug)}">${m.link}${arrow("text-link__arrow")}</a>
        </div>
      </article>`
        )
        .join("")}
    </div>
  </div>
</section>

<section class="section section--band" aria-labelledby="alerts-title">
  <div class="container split">
    <div class="split__text">
      <p class="eyebrow">${a.eyebrow}</p>
      <h2 class="h2" id="alerts-title">${g(a.title)}</h2>
      <p class="lead">${a.text}</p>
      ${ticks(a.points)}
      <a class="text-link" href="${solutionRoute("riasztasok")}">${a.link}${arrow("text-link__arrow")}</a>
    </div>
    <div class="split__art">${board(boardData)}</div>
  </div>
</section>

<section class="section" aria-labelledby="features-title">
  <div class="container">
    ${sectionHead(h.features, "features-title")}
    <div class="feature-grid">
      ${h.features.items
        .map(
          (f) => `<a class="feature-card" href="${solutionRoute(f.slug)}">
        <span class="feature-card__icon">${icon(solutionBySlug[f.slug].icon)}</span>
        <h3 class="h3">${f.title}</h3>
        <p>${f.text}</p>
        <span class="feature-card__more" aria-hidden="true">${arrow("text-link__arrow")}</span>
      </a>`
        )
        .join("")}
    </div>
    <p class="center"><a class="btn btn--ghost" href="${route("solutions")}">${h.features.all}${arrow()}</a></p>
  </div>
</section>

<section class="section section--deep" aria-labelledby="steps-title">
  <div class="container">
    ${sectionHead(h.steps, "steps-title")}
    <ol class="stations">
      ${h.steps.items
        .map(
          (s, i) => `<li class="station">
        <span class="station__when">0${i + 1}</span>
        <h3 class="h3">${s.title}</h3>
        <p>${s.text}</p>
      </li>`
        )
        .join("")}
    </ol>
    <p class="steps__close">${h.steps.close}</p>
  </div>
</section>

<section class="section" aria-labelledby="personas-title">
  <div class="container">
    ${sectionHead(h.personas, "personas-title")}
    <ul class="personas">
      ${h.personas.items.map((p) => `<li class="persona"><h3 class="h3">${p.title}</h3><p>${p.text}</p></li>`).join("")}
    </ul>
  </div>
</section>

<section class="section section--band" aria-labelledby="mobile-title">
  <div class="container split split--phone">
    <div class="split__text">
      <p class="eyebrow">${h.mobile.eyebrow}</p>
      <h2 class="h2" id="mobile-title">${g(h.mobile.title)}</h2>
      <p class="lead">${h.mobile.text}</p>
      <a class="text-link" href="${solutionRoute("csapat-biztonsag")}#biztonsag">${h.mobile.link}${arrow("text-link__arrow")}</a>
    </div>
    <div class="split__art phones">
      ${phoneShot({ img: "leltar-osszesites", alt: h.mobile.phoneAlt })}
      ${phoneShot({ img: "mobil", alt: "A járműlista telefonon" })}
    </div>
  </div>
</section>

<section class="section" aria-labelledby="price-title">
  <div class="container">
    ${sectionHead(h.pricing, "price-title")}
    <div class="mini-plans">
      ${plans
        .map(
          (p) => `<a class="mini-plan${p.recommended ? " is-recommended" : ""}" href="${route("pricing")}">
        <span class="mini-plan__name">${p.name}${p.recommended ? ` <span class="badge">${pr.recommended}</span>` : ""}</span>
        <span class="mini-plan__price">${huf(p.monthly)}</span>
        <span class="mini-plan__unit">${pr.perMonth}</span>
        <span class="mini-plan__tag">${p.tagline}</span>
      </a>`
        )
        .join("")}
    </div>
    <div class="mini-plans__foot">
      <p class="muted">${h.pricing.note}</p>
      <a class="btn btn--ghost" href="${route("pricing")}">${h.pricing.button}${arrow()}</a>
    </div>
  </div>
</section>

${faqBlock({ ...h.faq })}

${ctaSection(h.cta)}`,
  };
};

// ---------------------------------------------------------------------------
// Megoldásaink: overview

export const solutionsIndex = () => ({
  title: overview.title,
  description: overview.description,
  body: `
${pageHero(overview, ctaButtons(""))}

<section class="section section--flush" aria-label="Megoldások csoportonként">
  <div class="container">
    <div class="sol-groups">
      ${Object.entries(groups)
        .map(
          ([key, label]) => `<div class="sol-group">
        <h2 class="sol-group__title">${label}</h2>
        <div class="sol-group__list">${solutions.filter((s) => s.group === key).map(solutionCard).join("")}</div>
      </div>`
        )
        .join("")}
    </div>
  </div>
</section>

<section class="section section--band" aria-labelledby="basics-title">
  <div class="container basics">
    <div>
      <p class="eyebrow">Alapok</p>
      <h2 class="h2" id="basics-title">${overview.basicsTitle}</h2>
    </div>
    ${ticks(overview.basics)}
  </div>
</section>

<section class="section" aria-labelledby="soon-title">
  <div class="container">
    <div class="soon-band">
      <div>
        <p class="eyebrow">${overview.soon.title}</p>
        <h2 class="h3-lg" id="soon-title">${overview.soon.text}</h2>
        <p class="muted">Pontos dátumot nem ígérünk. Kérjen értesítést, és szólunk, amint használható.</p>
      </div>
      <ul class="soon-list">
        ${overview.soon.items.map((i) => `<li><span class="soon-list__name">${i.name} ${soonTag}</span><a class="btn btn--ghost btn--sm" href="${notifyHref(i.name)}">${ui.notify}</a></li>`).join("")}
      </ul>
    </div>
  </div>
</section>

${ctaSection(overview.cta)}`,
});

// ---------------------------------------------------------------------------
// Megoldásaink: one solution page

const featureList = (items) => `<div class="fgrid">
  ${items.map((f) => `<div class="fgrid__item"><h3 class="h3">${f.title}</h3><p>${f.text}</p></div>`).join("")}
</div>`;

export const solution = (s) => {
  const [first, ...rest] = s.shots;
  const phones = rest.filter((x) => x.phone);
  const desktops = rest.filter((x) => !x.phone);
  const firstIsPhone = first.phone;
  // A phone screenshot opens the page next to a desktop one, or next to a second phone.
  const heroPair = firstIsPhone ? (desktops.length ? screenshot(desktops.shift()) : phones.length ? phoneShot(phones.shift()) : "") : "";
  return {
    title: s.title,
    description: s.description,
    body: `
<section class="page-hero page-hero--solution" aria-labelledby="page-title">
  <div class="container">
    <p class="crumbs"><a href="${route("solutions")}">Megoldásaink</a><span aria-hidden="true">/</span>${groups[s.group]}</p>
    <div class="page-hero__grid">
      <div>
        <p class="eyebrow"><span class="eyebrow__icon">${icon(s.icon)}</span>${s.eyebrow}${s.badge ? ` <span class="badge">${s.badge}</span>` : ""}</p>
        <h1 class="h1" id="page-title">${g(s.h1)}</h1>
      </div>
      <div>
        <p class="lead">${s.lead}</p>
        ${ctaButtons("")}
      </div>
    </div>
    <div class="sol-hero-shot${firstIsPhone ? " sol-hero-shot--phone" : ""}">
      ${shot(first, true)}
      ${heroPair}
    </div>
  </div>
</section>

<section class="section section--band" aria-label="Előnyök">
  <div class="container">
    <ol class="benefit-row">
      ${s.benefits.map((b, i) => `<li><span class="benefit-row__num">0${i + 1}</span><h2 class="h3">${b.title}</h2><p>${b.text}</p></li>`).join("")}
    </ol>
  </div>
</section>

<section class="section" aria-labelledby="features-title">
  <div class="container">
    <div class="section-head section-head--single">
      <div>
        <p class="eyebrow">${s.menuTitle}</p>
        <h2 class="h2" id="features-title">${s.featuresTitle || "Funkciók"}</h2>
      </div>
    </div>
    ${
      s.steps
        ? `<ol class="howto">${s.steps.map((st, i) => `<li><span class="howto__num">${i + 1}</span><p>${st}</p></li>`).join("")}</ol>
    ${s.note ? `<p class="note-card">${icon("check")}<span>${s.note}</span></p>` : ""}`
        : featureList(s.features)
    }
    ${desktops.length || phones.length ? `<div class="sol-shots${phones.length ? " sol-shots--phones" : ""}">${[...desktops, ...phones].map((x) => shot(x)).join("")}</div>` : ""}
  </div>
</section>

${(s.extra || [])
  .map(
    (e, i) => `<section class="section${i % 2 === 0 ? " section--band" : ""}" id="${e.id}" aria-labelledby="${e.id}-title">
  <div class="container">
    <div class="section-head section-head--single"><div><p class="eyebrow">${s.menuTitle}</p><h2 class="h2" id="${e.id}-title">${e.title}</h2></div></div>
    ${featureList(e.items)}
  </div>
</section>`
  )
  .join("")}

${
  s.soon
    ? `<section class="section" aria-labelledby="soon-title">
  <div class="container">
    <div class="soon-band">
      <div>
        <p class="eyebrow">${overview.soon.title}</p>
        <h2 class="h3-lg" id="soon-title">${overview.soon.text}</h2>
        <p class="muted">Az SSO az Üzleti csomagban kiegészítőként lesz elérhető: +19 990 Ft/hó + ÁFA.</p>
      </div>
      <ul class="soon-list">
        ${overview.soon.items.map((i) => `<li><span class="soon-list__name">${i.name} ${soonTag}</span><a class="btn btn--ghost btn--sm" href="${notifyHref(i.name)}">${ui.notify}</a></li>`).join("")}
      </ul>
    </div>
  </div>
</section>`
    : ""
}

<section class="section section--band" aria-labelledby="related-title">
  <div class="container">
    <div class="section-head section-head--single"><div><p class="eyebrow">Tovább</p><h2 class="h2" id="related-title">${ui.related}</h2></div></div>
    <div class="sol-related">${s.related.map((slug) => solutionCard(solutionBySlug[slug])).join("")}</div>
    <p class="center"><a class="text-link" href="${route("solutions")}">${ui.allSolutions}${arrow("text-link__arrow")}</a></p>
  </div>
</section>

${ctaSection({ title: s.cta })}`,
  };
};

// ---------------------------------------------------------------------------
// Árak

const cell = (v) =>
  v === true
    ? `<span class="cmp-yes">${icon("check")}<span class="visually-hidden">Benne van</span></span>`
    : v === false
      ? `<span class="cmp-no" aria-label="Nincs benne">—</span>`
      : String(v).startsWith("Hamarosan")
        ? `${soonTag}<span class="cmp-text">${String(v).replace(/^Hamarosan,?\s*/, "")}</span>`
        : `<span class="cmp-text">${v}</span>`;

// The calculator's answer for n active vehicles and e pieces of equipment: the cheapest plan
// that can take both. Vehicles above the plan's included number cost the per-vehicle fee, up to
// the plan's vehicle ceiling; equipment above the plan's limit needs "+250 eszköz" packs (at
// most EQUIPMENT_ADDON.maxQuantity; Prémium has no equipment limit). assets/js/main.js does the
// same in the browser; this renders the starting state so the page reads right without JavaScript.
const addonMonthly = (cycle) => (cycle === "annual" ? (EQUIPMENT_ADDON.monthly * (12 - ANNUAL_FREE_MONTHS)) / 12 : EQUIPMENT_ADDON.monthly);
const maxEquipment = (p) => (p.equipment === null ? Infinity : p.equipment + EQUIPMENT_ADDON.size * EQUIPMENT_ADDON.maxQuantity);

const planQuote = (p, n, e, cycle) => {
  if (n > p.ceiling) return { plan: p, off: pr.calc.max(p.ceiling) };
  if (e > maxEquipment(p)) return { plan: p, off: pr.calc.maxEquipment(num(maxEquipment(p))) };
  const base = cycle === "annual" ? p.annualMonthly : p.monthly;
  const over = Math.max(0, n - p.included);
  const packs = p.equipment === null ? 0 : Math.ceil(Math.max(0, e - p.equipment) / EQUIPMENT_ADDON.size);
  const addon = packs * addonMonthly(cycle);
  return { plan: p, base, over, packs, addon, total: base + over * p.extra + addon };
};

const calcQuote = (n, e, cycle = "monthly") =>
  plans
    .map((p) => planQuote(p, n, e, cycle))
    .filter((q) => !q.off)
    .reduce((a, b) => (b.total < a.total ? b : a));

const calcLines = (q, cycle = "monthly") => {
  const c = pr.calc;
  const lines = [[c.lineBase(q.plan.name, q.plan.included, q.plan.equipment === null ? c.unlimited : num(q.plan.equipment)), huf(q.base)]];
  if (q.over) lines.push([c.lineExtra(q.over, huf(q.plan.extra)), huf(q.over * q.plan.extra)]);
  if (q.packs) lines.push([c.lineEquipment(q.packs, huf(addonMonthly(cycle))), huf(q.addon)]);
  lines.push([c.lineGross, huf(q.total * (1 + VAT_PERCENT / 100))]);
  return lines.map(([k, v]) => `<li><span>${k}</span><b>${v}</b></li>`).join("");
};

const calcPlans = (n, e, best) =>
  plans
    .map((p) => planQuote(p, n, e, "monthly"))
    .map((q) =>
      q.off
        ? `<li class="is-off"><b>${q.plan.name}</b><span>${q.off}</span></li>`
        : `<li${q.plan === best.plan ? ' class="is-on"' : ""}><b>${q.plan.name}</b><span>${huf(q.total)} ${pr.perMonth}</span></li>`
    )
    .join("");

export const pricing = () => {
  const calcData = plans.map((p) => ({
    name: p.name, monthly: p.monthly, annualMonthly: p.annualMonthly, included: p.included, extra: p.extra, ceiling: p.ceiling, equipment: p.equipment,
  }));
  const START = 30;
  const START_EQUIPMENT = 50;
  const q = calcQuote(START, START_EQUIPMENT);
  // Text templates for the browser: the copy functions called with {placeholders}.
  const t = {
    tier: pr.calc.resultTier("{plan}", "{n}", "{e}"),
    base: pr.calc.lineBase("{plan}", "{included}", "{equipment}"),
    extra: pr.calc.lineExtra("{n}", "{price}"),
    equipment: pr.calc.lineEquipment("{packs}", "{price}"),
    gross: pr.calc.lineGross,
    unlimited: pr.calc.unlimited,
    max: pr.calc.max("{n}"),
    maxEquipment: pr.calc.maxEquipment("{n}"),
    unit: pr.perMonth,
  };
  const addon = { ...EQUIPMENT_ADDON, freeMonths: ANNUAL_FREE_MONTHS };
  return {
    title: pr.title,
    description: pr.description,
    jsonLd: [softwareJsonLd, faqJsonLd(pr.faq.items)],
    body: `
${pageHero(pr)}

<section class="section section--flush" aria-label="Csomagok">
  <div class="container">
    <div class="cycle" role="group" aria-label="Fizetési gyakoriság">
      <button type="button" class="cycle__btn is-on" data-cycle="monthly" aria-pressed="true">${pr.toggle.monthly}</button>
      <button type="button" class="cycle__btn" data-cycle="annual" aria-pressed="false">${pr.toggle.annual} <span class="cycle__free">${pr.toggle.free}</span></button>
    </div>
    <div class="plans" data-cycle-root>
      ${plans
        .map(
          (p) => `<article class="plan-card${p.recommended ? " is-recommended" : ""}">
        ${p.recommended ? `<span class="plan-card__tag">${pr.recommended}</span>` : ""}
        <h2 class="plan-card__name">${p.name}</h2>
        <p class="plan-card__tagline">${p.tagline}</p>
        <p class="plan-card__price"><span data-monthly="${huf(p.monthly)}" data-annual="${huf(p.annualMonthly)}">${huf(p.monthly)}</span> <small>${pr.perMonth}</small></p>
        <p class="plan-card__sub" data-monthly="${esc(pr.monthlyNote(huf(p.annualMonthly)))}" data-annual="${esc(pr.annualNote(huf(p.annualMonthly * 12)))}">${pr.monthlyNote(huf(p.annualMonthly))}</p>
        <a class="btn ${p.recommended ? "btn--primary" : "btn--ghost"} plan-card__btn" href="${APP.register}">${ui.trial}</a>
        <ul class="ticks">${p.highlights.map((x) => `<li>${x}</li>`).join("")}</ul>
        ${p.soon ? `<ul class="plan-card__soon">${p.soon.map((x) => `<li>${soonTag}<span>${x}</span></li>`).join("")}</ul>` : ""}
      </article>`
        )
        .join("")}
    </div>
    <p class="plans__note">${ui.trialNote} Minden ár nettó, + ${VAT_PERCENT}% ÁFA. ${SELF_SERVICE_MAX_VEHICLES} aktív jármű felett <a href="#ajanlat">egyedi ajánlatot</a> adunk.</p>
  </div>
</section>

<section class="section section--band" id="kalkulator" aria-labelledby="calc-title">
  <div class="container">
    ${sectionHead({ eyebrow: pr.calc.eyebrow, title: pr.calc.title }, "calc-title")}
    <div class="calc" data-calc data-plans="${esc(JSON.stringify(calcData))}" data-addon="${esc(JSON.stringify(addon))}" data-text="${esc(JSON.stringify(t))}"
      data-vat="${VAT_PERCENT}" data-max="${SELF_SERVICE_MAX_VEHICLES}"
      data-note-monthly="${esc(pr.calc.noteMonthly)}" data-note-annual="${esc(pr.calc.noteAnnual)}">
      <div class="calc__input">
        <div class="calc__field">
          <label class="calc__label" for="calc-n">${pr.calc.label}</label>
          <div class="calc__row">
            <input type="range" id="calc-range" min="1" max="${SELF_SERVICE_MAX_VEHICLES}" value="${START}" aria-label="${esc(pr.calc.label)}">
            <input class="input calc__number" type="number" id="calc-n" min="1" max="${SELF_SERVICE_MAX_VEHICLES}" value="${START}" inputmode="numeric">
          </div>
        </div>
        <div class="calc__field">
          <label class="calc__label" for="calc-e">${pr.calc.equipmentLabel}</label>
          <p class="calc__hint" id="calc-e-hint">${pr.calc.equipmentHint}</p>
          <div class="calc__row">
            <input type="range" id="calc-e-range" min="0" max="${CALC_EQUIPMENT_RANGE}" step="10" value="${START_EQUIPMENT}" aria-label="${esc(pr.calc.equipmentLabel)}" aria-describedby="calc-e-hint">
            <input class="input calc__number" type="number" id="calc-e" min="0" max="100000" value="${START_EQUIPMENT}" inputmode="numeric" aria-describedby="calc-e-hint">
          </div>
        </div>
        <ul class="calc__plans" data-calc-plans>${calcPlans(START, START_EQUIPMENT, q)}</ul>
        <p class="calc__note muted" data-calc-note>${pr.calc.noteMonthly}</p>
        <p class="calc__note muted">${pr.calc.equipmentNote}</p>
      </div>
      <div class="calc__result" aria-live="polite">
        <p class="calc__tier" data-calc-tier>${pr.calc.resultTier(q.plan.name, START, START_EQUIPMENT)}</p>
        <p class="calc__amount"><span data-calc-amount>${huf(q.total)}</span> <small>${pr.perMonth}</small></p>
        <ul class="calc__lines" data-calc-lines>${calcLines(q)}</ul>
        <a class="btn btn--teal" href="${APP.register}">${ui.trial}${arrow()}</a>
      </div>
    </div>
  </div>
</section>

<section class="section" aria-labelledby="limits-title">
  <div class="container">
    ${sectionHead({ eyebrow: "Összehasonlítás", title: pr.limitsTitle }, "limits-title")}
    <div class="table-wrap">
      <table class="cmp">
        <thead><tr><th scope="col"><span class="visually-hidden">Keret</span></th>${plans.map((p) => `<th scope="col"${p.recommended ? ' class="is-recommended"' : ""}>${p.name}</th>`).join("")}</tr></thead>
        <tbody>${limits.map((r) => `<tr><th scope="row">${r.label}</th>${r.cells.map((c) => `<td>${cell(c)}</td>`).join("")}</tr>`).join("")}</tbody>
      </table>
    </div>
    <h2 class="h3-lg cmp-title" id="cmp-title">${pr.comparisonTitle}</h2>
    <div class="table-wrap">
      <table class="cmp" aria-labelledby="cmp-title">
        <thead><tr><th scope="col"><span class="visually-hidden">Funkció</span></th>${plans.map((p) => `<th scope="col"${p.recommended ? ' class="is-recommended"' : ""}>${p.name}</th>`).join("")}</tr></thead>
        <tbody>${comparison
          .map(
            (r) => `<tr><th scope="row">${r.label}${r.soon ? `<a class="cmp-notify" href="${notifyHref(r.label)}">${ui.notify}</a>` : ""}</th>${r.cells.map((c) => `<td>${cell(c)}</td>`).join("")}</tr>`
          )
          .join("")}</tbody>
      </table>
    </div>
    <p class="muted cmp-note">${pr.comparisonNote}</p>
  </div>
</section>

${faqBlock(pr.faq, "gyik")}

<section class="section section--deep" id="ajanlat" aria-labelledby="quote-title">
  <div class="container quote">
    <div>
      <p class="eyebrow">${pr.quote.eyebrow}</p>
      <h2 class="h2" id="quote-title">${g(pr.quote.title)}</h2>
    </div>
    <div>
      <p class="lead">${pr.quote.text}</p>
      <div class="cta-row">
        <a class="btn btn--teal" href="${contactHref("quote")}">${pr.quote.button}${arrow()}</a>
        <a class="text-link" href="${route("enterprise")}">${pr.quote.more}${arrow("text-link__arrow")}</a>
      </div>
    </div>
  </div>
</section>

${ctaSection({ title: "Próbálja ki 14 napig, kártya nélkül." })}`,
  };
};

// ---------------------------------------------------------------------------
// Vállalati megoldás

export const enterprise = () => ({
  title: en.title,
  description: en.description,
  jsonLd: faqJsonLd(en.faq.items),
  body: `
${pageHero(
  en,
  `<div class="cta-row">
      <a class="btn btn--primary" href="${contactHref("quote")}">${en.quoteButton}${arrow()}</a>
      <a class="btn btn--ghost" href="${contactHref("demo")}">${ui.demo}</a>
    </div>`
)}

<section class="section section--band" aria-label="Röviden">
  <div class="container">
    <ol class="benefit-row">
      ${en.pillars.map((b, i) => `<li><span class="benefit-row__num">0${i + 1}</span><h2 class="h3">${b.title}</h2><p>${b.text}</p></li>`).join("")}
    </ol>
  </div>
</section>

<section class="section" id="integracio" aria-labelledby="integration-title">
  <div class="container">
    ${sectionHead(en.integrations, "integration-title")}
    ${featureList(en.integrations.items)}
  </div>
</section>

<section class="section section--deep" id="sajat-szerver" aria-labelledby="hosting-title">
  <div class="container split">
    <div class="split__text">
      <p class="eyebrow">${en.hosting.eyebrow}</p>
      <h2 class="h2" id="hosting-title">${g(en.hosting.title)}</h2>
      <p class="lead">${en.hosting.lead}</p>
      ${ticks(en.hosting.points)}
    </div>
    <div class="split__art">
      <div class="spec-card">
        <p class="spec-card__title">${en.hosting.specsTitle}</p>
        <dl>${en.hosting.specs.map((x) => `<div><dt>${x.k}</dt><dd>${x.v}</dd></div>`).join("")}</dl>
      </div>
    </div>
  </div>
</section>

<section class="section" aria-labelledby="steps-title">
  <div class="container">
    <div class="section-head section-head--single"><div><p class="eyebrow">${en.steps.eyebrow}</p><h2 class="h2" id="steps-title">${en.steps.title}</h2></div></div>
    <ol class="howto">${en.steps.items.map((st, i) => `<li><span class="howto__num">${i + 1}</span><p>${st}</p></li>`).join("")}</ol>
  </div>
</section>

<section class="section section--band" aria-labelledby="fit-title">
  <div class="container">
    <div class="section-head section-head--single"><div><p class="eyebrow">${en.fit.eyebrow}</p><h2 class="h2" id="fit-title">${en.fit.title}</h2></div></div>
    <ul class="personas">${en.fit.items.map((p) => `<li class="persona"><h3 class="h3">${p.title}</h3><p>${p.text}</p></li>`).join("")}</ul>
  </div>
</section>

${faqBlock(en.faq, "gyik")}

<section class="section section--cta" aria-labelledby="cta-title">
  <div class="container">
    ${ctaCard({ eyebrow: en.cta.eyebrow, title: g(en.cta.title), lead: en.cta.lead, button: en.quoteButton, href: contactHref("quote"), secondary: { label: ui.demo, href: contactHref("demo") } })}
  </div>
</section>`,
});

// ---------------------------------------------------------------------------
// Kapcsolat

export const contact = () => {
  const f = co.form;
  const req = `<span class="req" aria-hidden="true">*</span>`;
  const field = (id, label, input, { error = "", hint = "", full = false } = {}) => `<div class="field${full ? " field--full" : ""}">
        <label for="f-${id}">${label}${error ? ` ${req}` : ""}${hint ? ` <span class="hint">${hint}</span>` : ""}</label>
        ${input}
        ${error ? `<span class="field__error" id="e-${id}">${error}</span>` : ""}
      </div>`;
  const text = (id, type, auto, required, extra = "") =>
    `<input class="input" id="f-${id}" name="${id}" type="${type}" autocomplete="${auto}"${required ? ` required aria-describedby="e-${id}"` : ""}${extra}>`;
  return {
    title: co.title,
    description: co.description,
    body: `
<section class="contact-section" aria-labelledby="page-title">
  <div class="container contact">
    <div class="contact__intro">
      <p class="eyebrow">${co.eyebrow}</p>
      <h1 class="h1" id="page-title">${g(co.h1)}</h1>
      <p class="lead">${co.lead}</p>
    </div>

    <div class="contact__aside">
      <dl class="direct">
        ${co.direct.map((d) => `<div><dt>${d.k}</dt><dd>${d.email ? `<a href="mailto:${config.email}">${config.email}</a>` : d.v}</dd></div>`).join("")}
      </dl>
      <p class="muted contact__customer">${co.customer}</p>
      <a class="text-link" href="${APP.login}">${co.loginLink}${arrow("text-link__arrow")}</a>
      <h2 class="contact__steps-title">${co.stepsTitle}</h2>
      <ol class="next-steps">
        ${co.steps.map((s) => `<li><span>${s}</span></li>`).join("")}
      </ol>
    </div>

    <div class="form-card" id="enquiry">
      <form id="enquiry-form" novalidate
        data-subject="${esc(f.mailSubject)}"
        data-sending="${esc(f.sending)}"
        data-mailto-title="${esc(f.mailtoTitle)}"
        data-mailto-text="${esc(f.mailtoText)}"
        data-error-text="${esc(f.errorText)}"
        data-notify-prefix="${esc(f.notifyPrefix)}">
        <div class="form-card__head">
          <h2 class="h3-lg">${f.title}</h2>
          <p>${f.intro}</p>
        </div>
        <div class="form-grid">
          ${field(
            "topic",
            f.topic,
            `<select class="input" id="f-topic" name="topic" required aria-describedby="e-topic"><option value="">Válasszon…</option>${f.topics.map((t) => `<option value="${t.value}">${t.label}</option>`).join("")}</select>`,
            { error: f.errors.topic, full: true }
          )}
          ${field("name", f.name, text("name", "text", "name", true), { error: f.errors.name })}
          ${field("company", f.company, text("company", "text", "organization", true), { error: f.errors.company })}
          ${field("email", f.email, text("email", "email", "email", true), { error: f.errors.email })}
          ${field("phone", f.phone, text("phone", "tel", "tel", false), { hint: f.phoneHint })}
          ${field("vehicles", f.vehicles, text("vehicles", "number", "off", false, ' min="0" inputmode="numeric"'), { hint: f.vehiclesHint })}
          ${field("equipment", f.equipment, text("equipment", "number", "off", false, ' min="0" inputmode="numeric"'), { hint: f.equipmentHint })}
          <div class="field field--full">
            <label for="f-message">${f.message}</label>
            <textarea class="input" id="f-message" name="message" rows="4" placeholder="${esc(f.placeholder)}"></textarea>
          </div>
          <div class="field field--hp" aria-hidden="true">
            <label for="f-website">Website</label>
            <input id="f-website" name="website" type="text" tabindex="-1" autocomplete="off">
          </div>
          <div class="field field--full">
            <label class="consent-check"><input type="checkbox" name="consent" required aria-describedby="e-consent"><span>${f.consent} <a href="${route("privacy")}">${f.consentLink}</a>.</span></label>
            <span class="field__error" id="e-consent">${f.errors.consent}</span>
          </div>
        </div>
        <div class="form-actions">
          <button class="btn btn--primary" type="submit">${f.submit}${arrow()}</button>
          <span class="cta-note">${f.note}</span>
        </div>
        <p class="form-error" role="alert" hidden></p>
      </form>

      <div class="form-success" id="enquiry-success" tabindex="-1" role="status" hidden>
        <span class="form-success__mark" aria-hidden="true"></span>
        <h2 class="h3-lg" data-success-title>${f.successTitle}</h2>
        <p data-success-text>${f.successText}</p>
        <a class="btn btn--primary" href="${APP.register}">${ui.trialShort}${arrow()}</a>
      </div>
    </div>
  </div>
</section>

<section class="section section--band" aria-labelledby="contact-faq-title">
  <div class="container">
    <h2 class="h3-lg" id="contact-faq-title">Rövid GYIK</h2>
    <dl class="mini-faq">${co.faq.map((q) => `<div><dt>${q.q}</dt><dd>${q.a}</dd></div>`).join("")}</dl>
  </div>
</section>`,
  };
};

// ---------------------------------------------------------------------------
// Blog

const fmtDate = (iso) =>
  new Intl.DateTimeFormat("hu-HU", { year: "numeric", month: "long", day: "numeric" }).format(new Date(`${iso}T12:00:00Z`));

const postCard = (p) => `<li class="post-card" data-category="${p.category}">
  <p class="post-card__meta"><span class="post-card__cat">${categories[p.category]}</span><time datetime="${p.date}">${fmtDate(p.date)}</time><span>${ui.minutes(p.minutes)}</span></p>
  <h2 class="h3-lg"><a href="${postRoute(p)}">${p.title}</a></h2>
  <p>${p.excerpt}</p>
  <span class="post-card__more" aria-hidden="true">${ui.readMore}${arrow("text-link__arrow")}</span>
</li>`;

export const blog = () => ({
  title: bl.title,
  description: bl.description,
  body: `
${pageHero(bl)}

<section class="section section--flush" aria-label="Cikkek">
  <div class="container">
    <div class="filters" role="group" aria-label="Kategóriák" data-filters>
      <button type="button" class="filter is-on" data-filter="" aria-pressed="true">${bl.all}</button>
      ${Object.entries(categories).map(([k, v]) => `<button type="button" class="filter" data-filter="${k}" aria-pressed="false">${v}</button>`).join("")}
    </div>
    <ol class="posts">${posts.map(postCard).join("")}</ol>
  </div>
</section>

${ctaSection({ title: "Próbálja ki a saját flottájával." })}`,
});

export const post = (p) => {
  const url = `${config.siteUrl}${postRoute(p)}`;
  const sol = solutionBySlug[p.solution];
  const others = posts.filter((x) => x !== p);
  const related = [...others.filter((x) => x.category === p.category), ...others.filter((x) => x.category !== p.category)].slice(0, 3);
  return {
    title: `${p.title} | Yardly`,
    description: p.excerpt,
    type: "article",
    jsonLd: {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      headline: p.title,
      description: p.excerpt,
      datePublished: p.date,
      inLanguage: "hu",
      url,
      author: { "@type": "Organization", name: "Yardly" },
      publisher: { "@type": "Organization", name: "Yardly" },
    },
    body: `
<article class="article">
  <div class="container container--narrow">
    <a class="back-link" href="${route("blog")}"><svg viewBox="0 0 16 16" aria-hidden="true"><path d="M14 8H3M7 4L3 8l4 4" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>${ui.backToBlog}</a>
    <p class="article__meta"><span class="post-card__cat">${categories[p.category]}</span><time datetime="${p.date}">${fmtDate(p.date)}</time><span>${ui.minutes(p.minutes)}</span></p>
    <h1 class="h1 article__title" id="page-title">${g(p.title)}</h1>
    <p class="lead article__lead">${p.excerpt}</p>
    <div class="prose">${p.body}</div>
    <aside class="article-cta">
      <h2 class="h3-lg">${bl.postCta.title}</h2>
      <p>${bl.postCta.text}</p>
      <div class="cta-row">
        <a class="btn btn--primary" href="${APP.register}">${ui.trialShort}${arrow()}</a>
        <a class="text-link" href="${solutionRoute(sol.slug)}">${sol.menuTitle}${arrow("text-link__arrow")}</a>
      </div>
    </aside>
  </div>
</article>

<section class="section section--band" aria-labelledby="related-posts">
  <div class="container">
    <h2 class="h2" id="related-posts">${bl.relatedTitle}</h2>
    <ol class="posts posts--related">${related.map(postCard).join("")}</ol>
  </div>
</section>`,
  };
};

// ---------------------------------------------------------------------------
// Legal pages and 404

const legal = (l) => ({
  title: l.title,
  description: l.description,
  body: `
<section class="legal">
  <div class="container container--narrow">
    <h1 class="h1" id="page-title">${l.heading}</h1>
    <p class="lead">${l.intro}</p>
    <p class="notice">${ui.draft}</p>
    <div class="prose">${withEmail(l.body)}</div>
  </div>
</section>`,
});

export const privacy = () => legal(pv);
export const imprint = () => legal(im);

export const notFound = (nf) => ({
  title: nf.title,
  description: nf.text,
  noindex: true,
  body: `
<section class="not-found">
  <div class="container container--narrow">
    <p class="eyebrow">${nf.eyebrow}</p>
    <h1 class="h1">${nf.heading}</h1>
    <p class="lead">${nf.text}</p>
    <div class="cta-row">
      <a class="btn btn--primary" href="${route("home")}">${nf.back}${arrow()}</a>
      <a class="btn btn--ghost" href="${route("solutions")}">Megoldásaink</a>
    </div>
  </div>
</section>`,
});

export { solutions, posts };
