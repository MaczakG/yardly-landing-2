import { config } from "./config.mjs";
import { route, postRoute, LANGS } from "./routes.mjs";
import { posts } from "./posts.mjs";
import {
  esc, glue, arrow, yardDiagram, meshFigure, trace, board, yardPlan, ctaCard, screenshot, SHOTS,
} from "./components.mjs";

let LANG = "hu";
const g = (text) => glue(LANG, text);

const sectionHead = (s, id) => `<div class="section-head">
  <div>
    <p class="eyebrow">${s.eyebrow}</p>
    <h2 class="h2"${id ? ` id="${id}"` : ""}>${g(s.title)}</h2>
  </div>
  ${s.lead ? `<p class="lead">${s.lead}</p>` : ""}
</div>`;

const ticks = (items) => `<ul class="ticks">${items.map((i) => `<li>${i}</li>`).join("")}</ul>`;

const pageHero = (h, extra = "") => `<section class="page-hero" aria-labelledby="page-title">
  <div class="container">
    <div class="page-hero__grid">
      <div>
        <p class="eyebrow">${h.eyebrow}</p>
        <h1 class="h1" id="page-title">${g(h.title)}</h1>
      </div>
      ${h.lead ? `<p class="lead">${h.lead}</p>` : ""}
    </div>
    ${extra}
  </div>
</section>`;

const ctaSection = (t, c) => `<section class="section section--cta" aria-labelledby="cta-title">
  <div class="container">
    ${ctaCard({ ...c, title: g(c.title), button: t.ui.cta, href: route("contact", t.lang) })}
  </div>
</section>`;

const shot = (t, key, alt) =>
  screenshot({ ...SHOTS[key], alt, url: `${t.ui.shotUrl}`, caption: "" });

const fmtDate = (t, iso) =>
  new Intl.DateTimeFormat(t.dateLocale, { year: "numeric", month: "long", day: "numeric" }).format(new Date(`${iso}T12:00:00Z`));

const withEmail = (html) => html.replaceAll("{email}", config.email);

// ---------------------------------------------------------------------------

export const home = (t) => {
  const h = t.home;
  const b = h.benefits;
  const visuals = [trace(b.trace), board(b.board), meshFigure(b.mesh)];
  return {
    title: h.title,
    description: h.description,
    jsonLd: {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: "Yardly",
      url: config.siteUrl,
      email: config.email,
      logo: `${config.siteUrl}/icon-512px.png`,
      address: { "@type": "PostalAddress", addressLocality: "Budapest", addressCountry: "HU" },
    },
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
        <div class="cta-row">
          <a class="btn btn--primary" href="${route("contact", t.lang)}">${t.ui.cta}${arrow()}</a>
          <span class="cta-note">${h.hero.note}</span>
        </div>
      </div>
    </div>
    ${yardDiagram(h.diagram)}
  </div>
</section>

<section class="section section--band" aria-labelledby="benefits-title">
  <div class="container">
    ${sectionHead(b, "benefits-title")}
    <div class="benefits">
      ${b.items
        .map(
          (item, i) => `<article class="benefit">
        <div class="benefit__visual">${visuals[i]}</div>
        <div class="benefit__body">
          <span class="benefit__index">0${i + 1}</span>
          <h3 class="h3">${item.title}</h3>
          <p>${item.text}</p>
          ${ticks(item.ticks)}
        </div>
      </article>`
        )
        .join("")}
    </div>
  </div>
</section>

<section class="section" aria-labelledby="product-title">
  <div class="container">
    ${sectionHead(h.product, "product-title")}
    ${screenshot({ ...SHOTS.dashboard, alt: h.product.alt, url: t.ui.shotUrl, caption: t.ui.shotNote })}
  </div>
</section>

<section class="section section--deep" aria-labelledby="proof-title">
  <div class="container">
    <div class="proof">
      <div class="proof__text">
        <p class="eyebrow">${h.proof.eyebrow}</p>
        <h2 class="h2" id="proof-title">${g(h.proof.title)}</h2>
        <p class="lead">${h.proof.lead}</p>
        <a class="text-link text-link--light" href="${route("cases", t.lang)}">${h.proof.link}${arrow("text-link__arrow")}</a>
      </div>
      ${result(h.proof)}
    </div>
    <div class="commits">
      <h3 class="commits__title">${h.proof.commitTitle}</h3>
      <ul class="commits__list">${h.proof.commits.map((c) => `<li><b>${c.title}</b><span>${c.text}</span></li>`).join("")}</ul>
    </div>
  </div>
</section>

<section class="section" id="faq" aria-labelledby="faq-title">
  <div class="container faq">
    <div class="faq__intro">
      <p class="eyebrow">${h.faq.eyebrow}</p>
      <h2 class="h2" id="faq-title">${g(h.faq.title)}</h2>
      <p class="muted">${h.faq.lead}</p>
      <a class="text-link" href="${route("contact", t.lang)}">${t.ui.cta}${arrow("text-link__arrow")}</a>
    </div>
    <div class="faq__list">
      ${h.faq.items
        .map(
          (f, i) => `<details class="faq__item" name="faq"${i === 0 ? " open" : ""}>
        <summary>${f.q}<span class="faq__icon" aria-hidden="true"></span></summary>
        <div class="faq__answer"><p>${f.a}</p></div>
      </details>`
        )
        .join("")}
    </div>
  </div>
</section>

${ctaSection(t, h.cta)}`,
  };
};

const result = (p, light = false) => `<div class="result${light ? " result--light" : ""}">
  <div class="result__row">
    <div class="result__col"><span class="result__label">${p.beforeLabel}</span><span class="result__value is-before">${p.before}</span></div>
    <svg class="result__arrow" viewBox="0 0 48 16" aria-hidden="true"><path d="M2 8h42M37 2l7 6-7 6" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>
    <div class="result__col"><span class="result__label">${p.afterLabel}</span><span class="result__value">${p.after}</span></div>
  </div>
  <p class="result__unit">${p.unit}</p>
</div>`;

// ---------------------------------------------------------------------------

export const solutions = (t) => {
  const s = t.solutions;
  const fit = `<dl class="fit"><dt>${s.hero.fitLabel}</dt><dd>${s.hero.fit.map((f) => `<span>${f}</span>`).join("")}</dd></dl>`;
  return {
    title: s.title,
    description: s.description,
    body: `
${pageHero(s.hero, fit)}

<section class="section" id="automation" aria-labelledby="automation-title">
  <div class="container">
    ${sectionHead(s.automation, "automation-title")}
    <div class="capabilities">
      ${s.automation.items
        .map(
          (c, i) => `<div class="capability">
        <span class="capability__num">0${i + 1} · ${c.label.toUpperCase()}</span>
        <h3 class="h3">${c.title}</h3>
        <p>${c.text}</p>
        ${ticks(c.ticks)}
      </div>`
        )
        .join("")}
    </div>
  </div>
</section>

<section class="section section--band" id="modules" aria-labelledby="modules-title">
  <div class="container">
    ${sectionHead(s.modules, "modules-title")}
    <ol class="modules">
      ${s.modules.items
        .map(
          (m, i) => `<li class="module">
        <span class="module__num">${String(i + 1).padStart(2, "0")}</span>
        <h3 class="h3">${m.title}</h3>
        <p>${m.text}</p>
        ${ticks(m.ticks)}
      </li>`
        )
        .join("")}
    </ol>
  </div>
</section>

<section class="section" aria-labelledby="tour-title">
  <div class="container">
    ${sectionHead({ eyebrow: s.tour.eyebrow, title: s.tour.title, lead: t.ui.shotNote }, "tour-title")}
    <div class="features">
      ${s.tour.items
        .map(
          (f, i) => `<div class="feature${i % 2 ? " feature--flip" : ""}">
        <div class="feature__text">
          <span class="feature__num">0${i + 1}</span>
          <h3 class="h3-lg">${f.title}</h3>
          <p>${f.text}</p>
        </div>
        ${shot(t, f.shot, f.alt)}
      </div>`
        )
        .join("")}
    </div>
  </div>
</section>

<section class="section section--deep" id="process" aria-labelledby="process-title">
  <div class="container">
    ${sectionHead(s.process, "process-title")}
    <ol class="stations">
      ${s.process.steps
        .map(
          (st) => `<li class="station">
        <span class="station__when">${st.label}</span>
        <h3 class="h3">${st.title}</h3>
        <p>${st.text}</p>
      </li>`
        )
        .join("")}
    </ol>
  </div>
</section>

<section class="section" id="operations" aria-labelledby="operations-title">
  <div class="container">
    ${sectionHead(s.operations, "operations-title")}
    <div class="ops">
      <div class="options">
        ${s.operations.options
          .map(
            (o) => `<div class="option">
          <span class="option__tag">${o.tag}</span>
          <h3 class="h3">${o.title}</h3>
          <p>${o.text}</p>
        </div>`
          )
          .join("")}
      </div>
      <div class="security">
        <h3 class="security__title">${s.operations.securityTitle}</h3>
        ${ticks(s.operations.security)}
      </div>
    </div>
  </div>
</section>

<section class="section section--band" id="pricing" aria-labelledby="pricing-title">
  <div class="container">
    <div class="pricing">
      <div class="pricing__text">
        <p class="eyebrow">${s.pricing.eyebrow}</p>
        <h2 class="h2" id="pricing-title">${g(s.pricing.title)}</h2>
        <p class="lead">${s.pricing.text}</p>
      </div>
      <ol class="pricing__steps">${s.pricing.points.map((p, i) => `<li><span>0${i + 1}</span>${p}</li>`).join("")}</ol>
    </div>
  </div>
</section>

${ctaSection(t, s.cta)}`,
  };
};

// ---------------------------------------------------------------------------

export const cases = (t) => {
  const c = t.cases;
  return {
    title: c.title,
    description: c.description,
    body: `
${pageHero(c.hero)}

<section class="section section--flush" aria-label="${esc(c.hero.title)}">
  <div class="container case-study">
    <aside class="case-facts">
      <h2 class="case-facts__title">${c.case.factsTitle}</h2>
      <dl>${c.case.facts.map((f) => `<div><dt>${f.k}</dt><dd>${f.v}</dd></div>`).join("")}</dl>
    </aside>
    <div class="case-body">
      ${c.case.sections.map((s) => `<h2 class="h3-lg">${s.title}</h2><p>${s.text}</p>`).join("")}
      <h2 class="h3-lg">${c.case.resultTitle}</h2>
      <p>${c.case.resultText}</p>
      ${result(t.home.proof, true)}
    </div>
  </div>
</section>

${ctaSection(t, c.cta)}`,
  };
};

// ---------------------------------------------------------------------------

export const blog = (t) => {
  const bl = t.blog;
  return {
    title: bl.title,
    description: bl.description,
    body: `
${pageHero(bl.hero)}

<section class="section section--flush" aria-labelledby="page-title">
  <div class="container">
    <ol class="posts">
      ${posts
        .map(
          (p) => `<li class="post-card">
        <p class="post-card__meta"><time datetime="${p.date}">${fmtDate(t, p.date)}</time><span>${t.ui.minutes(p.minutes)}</span></p>
        <h2 class="h3-lg"><a href="${postRoute(p, t.lang)}">${p.title[t.lang]}</a></h2>
        <p>${p.excerpt[t.lang]}</p>
        <span class="post-card__more" aria-hidden="true">${t.ui.readMore}${arrow("text-link__arrow")}</span>
      </li>`
        )
        .join("")}
    </ol>
  </div>
</section>`,
  };
};

export const post = (t, p) => {
  const url = `${config.siteUrl}${postRoute(p, t.lang)}`;
  return {
    title: `${p.title[t.lang]} | Yardly`,
    description: p.excerpt[t.lang],
    type: "article",
    jsonLd: {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      headline: p.title[t.lang],
      description: p.excerpt[t.lang],
      datePublished: p.date,
      inLanguage: t.lang,
      url,
      author: { "@type": "Organization", name: "Yardly" },
      publisher: { "@type": "Organization", name: "Yardly" },
    },
    body: `
<article class="article">
  <div class="container container--narrow">
    <a class="back-link" href="${route("blog", t.lang)}"><svg viewBox="0 0 16 16" aria-hidden="true"><path d="M14 8H3M7 4L3 8l4 4" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>${t.ui.backToBlog}</a>
    <p class="article__meta"><time datetime="${p.date}">${fmtDate(t, p.date)}</time><span>${t.ui.minutes(p.minutes)}</span></p>
    <h1 class="h1 article__title" id="page-title">${g(p.title[t.lang])}</h1>
    <p class="lead article__lead">${p.excerpt[t.lang]}</p>
    <div class="prose">${p.body[t.lang]}</div>
    <aside class="article-cta">
      <h2 class="h3-lg">${t.blog.postCta.title}</h2>
      <p>${t.blog.postCta.text}</p>
      <a class="btn btn--primary" href="${route("contact", t.lang)}">${t.ui.cta}${arrow()}</a>
    </aside>
  </div>
</article>`,
  };
};

// ---------------------------------------------------------------------------

export const about = (t) => {
  const a = t.about;
  return {
    title: a.title,
    description: a.description,
    body: `
${pageHero(a.hero)}

<section class="section section--band" aria-labelledby="story-title">
  <div class="container story">
    <div class="story__text">
      <p class="eyebrow">${a.story.eyebrow}</p>
      <h2 class="h2" id="story-title">${g(a.story.title)}</h2>
      ${a.story.paragraphs.map((p) => `<p>${p}</p>`).join("")}
    </div>
    <figure class="story__art">
      ${yardPlan(a.story.plan)}
      <figcaption>${a.story.caption}</figcaption>
    </figure>
  </div>
</section>

<section class="section" aria-labelledby="principles-title">
  <div class="container">
    ${sectionHead(a.principles, "principles-title")}
    <ol class="principles">
      ${a.principles.items
        .map(
          (p, i) => `<li class="principle">
        <span class="principle__num">0${i + 1}</span>
        <h3 class="h3">${p.title}</h3>
        <p>${p.text}</p>
      </li>`
        )
        .join("")}
    </ol>
  </div>
</section>

${ctaSection(t, a.cta)}`,
  };
};

// ---------------------------------------------------------------------------

export const contact = (t) => {
  const c = t.contact;
  const f = c.form;
  const req = `<span class="req" aria-hidden="true">*</span>`;
  const field = (id, label, input, error, full = false) => `<div class="field${full ? " field--full" : ""}">
        <label for="f-${id}">${label}${error ? ` ${req}` : ""}</label>
        ${input}
        ${error ? `<span class="field__error" id="e-${id}">${error}</span>` : ""}
      </div>`;
  const text = (id, type, auto, required) =>
    `<input class="input" id="f-${id}" name="${id}" type="${type}" autocomplete="${auto}"${required ? ` required aria-describedby="e-${id}"` : ""}>`;
  return {
    title: c.title,
    description: c.description,
    body: `
<section class="contact-section" aria-labelledby="page-title">
  <div class="container contact">
    <div class="contact__intro">
      <p class="eyebrow">${c.hero.eyebrow}</p>
      <h1 class="h1" id="page-title">${g(c.hero.title)}</h1>
      <p class="lead">${c.hero.lead}</p>
    </div>

    <div class="contact__aside">
      <ol class="next-steps" aria-label="${esc(c.stepsLabel)}">
        ${c.steps.map((s) => `<li><b>${s.title}</b><span>${s.text}</span></li>`).join("")}
      </ol>
      <dl class="direct">
        ${c.direct.map((d) => `<div><dt>${d.k}</dt><dd>${d.email ? `<a href="mailto:${config.email}">${config.email}</a>` : d.v}</dd></div>`).join("")}
      </dl>
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
          ${field("name", f.name, text("name", "text", "name", true), f.errors.name)}
          ${field("email", f.email, text("email", "email", "email", true), f.errors.email)}
          ${field("company", f.company, text("company", "text", "organization", true), f.errors.company)}
          ${field("role", f.role, text("role", "text", "organization-title", false), "")}
          ${field(
            "size",
            f.size,
            `<select class="input" id="f-size" name="size" required aria-describedby="e-size"><option value="">${f.sizeSelect}</option>${f.sizes.map((s) => `<option>${s}</option>`).join("")}</select>`,
            f.errors.size,
            true
          )}
          <fieldset class="field field--full">
            <legend>${f.systems} <span class="hint">${f.systemsHint}</span></legend>
            <div class="chips">
              ${f.systemOptions.map((o) => `<label class="chip"><input type="checkbox" name="systems" value="${esc(o)}"><span>${o}</span></label>`).join("")}
            </div>
          </fieldset>
          <div class="field field--full">
            <label for="f-message">${f.message}</label>
            <textarea class="input" id="f-message" name="message" rows="4" placeholder="${esc(f.placeholder)}"></textarea>
          </div>
          <div class="field field--hp" aria-hidden="true">
            <label for="f-website">Website</label>
            <input id="f-website" name="website" type="text" tabindex="-1" autocomplete="off">
          </div>
          <div class="field field--full">
            <label class="consent-check"><input type="checkbox" name="consent" required aria-describedby="e-consent"><span>${f.consent} <a href="${route("privacy", t.lang)}">${f.consentLink}</a>.</span></label>
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
        <a class="text-link" href="${route("home", t.lang)}">${f.back}</a>
      </div>
    </div>
  </div>
</section>`,
  };
};

// ---------------------------------------------------------------------------

const legal = (t, l) => ({
  title: l.title,
  description: l.description,
  body: `
<section class="legal">
  <div class="container container--narrow">
    <h1 class="h1" id="page-title">${l.heading}</h1>
    <p class="lead">${l.intro}</p>
    <p class="notice">${t.ui.draft}</p>
    <div class="prose">${withEmail(l.body)}</div>
  </div>
</section>`,
});

export const privacy = (t) => legal(t, t.privacy);
export const imprint = (t) => legal(t, t.imprint);

export const notFound = (t) => ({
  title: t.notFound.title,
  description: t.notFound.text,
  noindex: true,
  body: `
<section class="not-found">
  <div class="container container--narrow">
    <p class="eyebrow">${t.notFound.eyebrow}</p>
    <h1 class="h1">${t.notFound.heading}</h1>
    <p class="lead">${t.notFound.text}</p>
    <a class="btn btn--primary" href="${route("home", t.lang)}">${t.notFound.back}${arrow()}</a>
  </div>
</section>`,
});

export { posts, LANGS };

// The renderers above read the active language for typographic glue.
export const setLang = (lang) => {
  LANG = lang;
};
