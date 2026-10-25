// Page templates. Each returns { title, description, body, jsonLd? }; layout.mjs wraps them.
import { config } from "./config.mjs";
import { route, solutionRoute, postRoute } from "./routes.mjs";
import { esc, glue as g, arrow, icon, board, ctaCard, screenshot, phoneShot } from "./components.mjs";
import { ui } from "./content/site.mjs";
import { home as h } from "./content/home.mjs";
import { overview, groups, solutions, solutionBySlug } from "./content/solutions.mjs";
import { contact as co, process as pc, hosting as ho, hostingOptions } from "./content/pages.mjs";
import * as lg from "./content/legal.mjs";
import { blog as bl, categories, posts } from "./content/posts.mjs";

const withEmail = (html) => html.replaceAll("{email}", config.email);
const contactHref = (topic) => `${route("contact")}?tema=${topic}#enquiry`;

const sectionHead = (s, id) => `<div class="section-head">
  <div>
    <p class="eyebrow">${s.eyebrow}</p>
    <h2 class="h2"${id ? ` id="${id}"` : ""}>${g(s.title)}</h2>
  </div>
  ${s.lead ? `<p class="lead">${s.lead}</p>` : ""}
</div>`;

const ticks = (items) => `<ul class="ticks">${items.map((i) => `<li>${i}</li>`).join("")}</ul>`;

// Every call to action asks for a demo or a quote: the site sells no self-service plan.
const ctaButtons = (note = "") => `<div class="cta-row">
  <a class="btn btn--primary" href="${contactHref("demo")}">${ui.demo}${arrow()}</a>
  <a class="btn btn--ghost" href="${contactHref("quote")}">${ui.quote}</a>
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
      eyebrow: c.eyebrow || "Beszéljünk",
      title: g(c.title),
      lead: c.lead || ui.demoNote,
      button: ui.demo,
      href: contactHref("demo"),
      secondary: { label: ui.quote, href: contactHref("quote") },
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

// No offers: there are no public prices.
const softwareJsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Yardly",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web",
  url: config.siteUrl,
};

const shot = (s, eager = false) => (s.phone ? phoneShot({ ...s, eager }) : screenshot({ ...s, eager }));

const numbered = (items) => `<ol class="benefit-row">
      ${items.map((b, i) => `<li><span class="benefit-row__num">0${i + 1}</span><h3 class="h3">${b.title}</h3><p>${b.text}</p></li>`).join("")}
    </ol>`;

// The two ways the Yardly runs, side by side.
const optionCards = () => `<div class="options">
      ${hostingOptions
        .map(
          (o) => `<article class="option-card">
        <span class="option-card__icon">${icon(o.icon)}</span>
        <h3 class="option-card__name">${o.name}</h3>
        <p class="option-card__tagline">${o.tagline}</p>
        ${ticks(o.points)}
      </article>`
        )
        .join("")}
    </div>`;

// The rollout steps along a track, on a dark band.
const stationList = (items) => `<ol class="stations stations--4">
      ${items
        .map(
          (s, i) => `<li class="station">
        <span class="station__when">0${i + 1}</span>
        <h3 class="h3">${s.title}</h3>
        <p>${s.text}</p>
      </li>`
        )
        .join("")}
    </ol>`;

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
      <p class="eyebrow hero__eyebrow">${h.hero.eyebrow}</p>
      <h1 class="display hero__title" id="hero-title">${g(h.hero.title)}</h1>
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
    <p class="center pains__cta"><a class="btn btn--primary" href="${route("solutions")}">${h.problems.button}${arrow()}</a></p>
  </div>
</section>

<section class="section" aria-labelledby="tailor-title">
  <div class="container">
    ${sectionHead(h.tailor, "tailor-title")}
    ${numbered(h.tailor.items)}
    <p class="center"><a class="btn btn--ghost" href="${route("process")}">${h.tailor.link}${arrow()}</a></p>
  </div>
</section>

<section class="section section--deep" aria-labelledby="integration-title">
  <div class="container split">
    <div class="split__text">
      <p class="eyebrow">${h.integrations.eyebrow}</p>
      <h2 class="h2" id="integration-title">${g(h.integrations.title)}</h2>
      <p class="lead">${h.integrations.lead}</p>
      ${ticks(h.integrations.points)}
      <a class="text-link" href="${route("process")}#integracio">${h.integrations.link}${arrow("text-link__arrow")}</a>
    </div>
    <div class="split__art">
      <ul class="hub" aria-label="${h.integrations.hubLabel}">
        ${h.integrations.hub.slice(0, 5).map((x) => `<li class="hub__node">${icon(x.icon)}<span>${x.label}</span></li>`).join("")}
        <li class="hub__core"><img src="/assets/brand/yardly-vizszintes-szines.svg" width="131" height="36" alt="Yardly"></li>
        ${h.integrations.hub.slice(5).map((x) => `<li class="hub__node">${icon(x.icon)}<span>${x.label}</span></li>`).join("")}
      </ul>
    </div>
  </div>
</section>

<section class="section section--band" aria-labelledby="modules-title">
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

<section class="section" aria-labelledby="alerts-title">
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

<section class="section section--band" aria-labelledby="features-title">
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

<section class="section" aria-labelledby="hosting-title">
  <div class="container">
    ${sectionHead(h.hosting, "hosting-title")}
    ${optionCards()}
    <p class="center"><a class="btn btn--ghost" href="${route("hosting")}">${h.hosting.link}${arrow()}</a></p>
  </div>
</section>

<section class="section section--deep" aria-labelledby="steps-title">
  <div class="container">
    ${sectionHead(h.steps, "steps-title")}
    ${stationList(h.steps.items)}
    <p class="steps__close">${h.steps.close} <a class="text-link text-link--light" href="${route("process")}">${h.steps.link}${arrow("text-link__arrow")}</a></p>
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
${s.builder ? `
<section class="section section--band" id="osszeallitas" aria-labelledby="builder-title">
  <div class="container">
    <div class="section-head section-head--single"><div><p class="eyebrow">${s.menuTitle}</p><h2 class="h2" id="builder-title">${s.builder.title}</h2><p class="lead">${s.builder.lead}</p></div></div>
    <div class="sol-builder">${screenshot(s.builder.shot)}</div>
  </div>
</section>
` : ""}
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
// Hogyan dolgozunk

export const process = () => ({
  title: pc.title,
  description: pc.description,
  jsonLd: faqJsonLd(pc.faq.items),
  body: `
${pageHero(pc, ctaButtons())}

<section class="section section--deep" aria-labelledby="steps-title">
  <div class="container">
    <div class="section-head section-head--single"><div><p class="eyebrow">${pc.steps.eyebrow}</p><h2 class="h2" id="steps-title">${g(pc.steps.title)}</h2></div></div>
    ${stationList(pc.steps.items)}
  </div>
</section>

<section class="section" id="testreszabas" aria-labelledby="tailor-title">
  <div class="container">
    ${sectionHead(pc.tailor, "tailor-title")}
    <div class="levels">
      ${pc.tailor.levels
        .map(
          (l) => `<article class="level">
        <span class="option-card__icon">${icon(l.icon)}</span>
        <h3 class="h3-lg">${l.title}</h3>
        <p>${l.text}</p>
        ${ticks(l.points)}
      </article>`
        )
        .join("")}
    </div>
  </div>
</section>

<section class="section section--band" id="integracio" aria-labelledby="integration-title">
  <div class="container">
    ${sectionHead(pc.integrations, "integration-title")}
    ${featureList(pc.integrations.items)}
  </div>
</section>

<section class="section" aria-labelledby="deliver-title">
  <div class="container basics">
    <div>
      <p class="eyebrow">${pc.deliver.eyebrow}</p>
      <h2 class="h2" id="deliver-title">${pc.deliver.title}</h2>
    </div>
    ${ticks(pc.deliver.points)}
  </div>
</section>

${faqBlock(pc.faq, "gyik")}

${ctaSection(pc.cta)}`,
});

// ---------------------------------------------------------------------------
// Üzemeltetés

export const hosting = () => ({
  title: ho.title,
  description: ho.description,
  jsonLd: faqJsonLd(ho.faq.items),
  body: `
${pageHero(ho, ctaButtons())}

<section class="section section--flush" aria-label="A két üzemeltetési mód">
  <div class="container">
    ${optionCards()}
  </div>
</section>

<section class="section section--band" aria-labelledby="same-title">
  <div class="container">
    <div class="section-head section-head--single"><div><p class="eyebrow">${ho.same.eyebrow}</p><h2 class="h2" id="same-title">${ho.same.title}</h2></div></div>
    ${featureList(ho.same.items)}
  </div>
</section>

<section class="section section--deep" id="sajat-szerver" aria-labelledby="specs-title">
  <div class="container split">
    <div class="split__text">
      <p class="eyebrow">${ho.specs.eyebrow}</p>
      <h2 class="h2" id="specs-title">${g(ho.specs.title)}</h2>
      <p class="lead">${ho.specs.lead}</p>
    </div>
    <div class="split__art">
      <div class="spec-card">
        <dl>${ho.specs.items.map((x) => `<div><dt>${x.k}</dt><dd>${x.v}</dd></div>`).join("")}</dl>
      </div>
    </div>
  </div>
</section>

<section class="section" aria-labelledby="fit-title">
  <div class="container">
    <div class="section-head section-head--single"><div><p class="eyebrow">${ho.fit.eyebrow}</p><h2 class="h2" id="fit-title">${ho.fit.title}</h2></div></div>
    <ul class="personas">${ho.fit.items.map((p) => `<li class="persona"><h3 class="h3">${p.title}</h3><p>${p.text}</p></li>`).join("")}</ul>
  </div>
</section>

${faqBlock(ho.faq, "gyik")}

${ctaSection(ho.cta)}`,
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
        data-error-text="${esc(f.errorText)}">
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
          ${field(
            "hosting",
            f.hosting,
            `<select class="input" id="f-hosting" name="hosting">${f.hostingOptions.map((o) => `<option value="${o.value}">${o.label}</option>`).join("")}</select>`,
            { hint: f.hostingHint, full: true }
          )}
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
        <a class="btn btn--ghost" href="${route("solutions")}">Megoldásaink${arrow()}</a>
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

${ctaSection({ title: "Nézze meg egy bemutatón." })}`,
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
    jsonLd: [
      {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        headline: p.title,
        description: p.excerpt,
        datePublished: p.date,
        dateModified: p.updated || p.date,
        inLanguage: "hu",
        url,
        mainEntityOfPage: url,
        image: `${config.siteUrl}/assets/brand/og-image.png`,
        articleSection: categories[p.category],
        wordCount: p.body.replace(/<[^>]+>/g, " ").split(/\s+/).filter(Boolean).length,
        author: { "@type": "Organization", name: "Yardly", url: config.siteUrl },
        publisher: { "@type": "Organization", name: "Yardly", url: config.siteUrl, logo: { "@type": "ImageObject", url: `${config.siteUrl}/icon-512px.png` } },
      },
      {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Yardly", item: `${config.siteUrl}/` },
          { "@type": "ListItem", position: 2, name: "Blog", item: `${config.siteUrl}${route("blog")}` },
          { "@type": "ListItem", position: 3, name: p.title, item: url },
        ],
      },
    ],
    body: `
<article class="article">
  <div class="container container--narrow">
    <a class="back-link" href="${route("blog")}"><svg viewBox="0 0 16 16" aria-hidden="true"><path d="M14 8H3M7 4L3 8l4 4" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>${ui.backToBlog}</a>
    <p class="article__meta"><span class="post-card__cat">${categories[p.category]}</span><time datetime="${p.date}">${fmtDate(p.date)}</time><span>${ui.minutes(p.minutes)}</span></p>
    <h1 class="h1 article__title" id="page-title">${g(p.title)}</h1>
    <p class="lead article__lead">${p.excerpt}</p>
    <div class="prose">${p.body.replace(/<table>/g, '<div class="prose-table"><table>').replace(/<\/table>/g, "</table></div>")}</div>
    <aside class="article-cta">
      <h2 class="h3-lg">${bl.postCta.title}</h2>
      <p>${bl.postCta.text}</p>
      <div class="cta-row">
        <a class="btn btn--primary" href="${contactHref("demo")}">${ui.demo}${arrow()}</a>
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
    <div class="prose">${withEmail(l.body)}</div>
  </div>
</section>`,
});

export const legalHub = () => legal(lg.legalHub);
export const privacy = () => legal(lg.privacy);
export const imprint = () => legal(lg.imprint);
export const subprocessors = () => legal(lg.subprocessors);
export const dataExport = () => legal(lg.dataExport);
export const vulnerabilities = () => legal(lg.vulnerabilities);
export const illegalContent = () => legal(lg.illegalContent);

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
