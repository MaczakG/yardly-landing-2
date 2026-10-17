import { config } from "../config.mjs";
import { route } from "../routes.mjs";
import { esc, glue, icon, button, ctaButton, textLink, photo, heading, ctaBand, MENU } from "../ui.mjs";

const BENEFITS = [
  {
    icon: "clock",
    title: "Felszabaduló munkaórák",
    text: "A rendelések átvezetése, a határidők figyelése és a riportok összeállítása magától fut. A csapat a kivételekkel foglalkozik, nem a rutinnal.",
  },
  {
    icon: "database",
    title: "Egy, mindig friss adat",
    text: "Az ERP, a raktárkezelő, a fuvarszervező rendszer és a táblázatok összekötve. Senkinek nem kell kétszer rögzítenie ugyanazt.",
  },
  {
    icon: "shield-check",
    title: "Kevesebb hiba és meglepetés",
    text: "Beépített ellenőrzések és időben kiküldött értesítések. A lejáró okmány vagy a késő szerviz nem a hónap végén derül ki.",
  },
];

const FAQ = [
  {
    q: "Le kell cserélnünk a jelenlegi rendszereinket?",
    a: "Nem. Az automatizálást a meglévő ERP, WMS, TMS és egyéb rendszerei köré építjük. Ami jól működik, az marad, mi a köztük lévő kézi munkát szüntetjük meg.",
  },
  {
    q: "Mekkora cégeknek dolgoznak?",
    a: "Elsősorban közepes és nagy logisztikai, raktározási és fuvarozó cégeknek, ahol több telephely, több rendszer és sok ismétlődő adminisztráció találkozik.",
  },
  {
    q: "Mikor látszik az első eredmény?",
    a: "Nem egy nagy projekt végén. Azzal a folyamattal kezdünk, amely ma a legtöbb kézi munkát viszi el, azt élesítjük elsőként, és onnan lépésről lépésre haladunk.",
  },
  {
    q: "Hol futnak a rendszerek, és ki fér hozzá az adatokhoz?",
    a: "Az Amazon Web Services frankfurti, EU-s adatközpontjában, dedikált környezetben, vagy a saját szerverükön. A hozzáférést szerepkörök szerint állítjuk be, minden módosítás naplózva.",
  },
  {
    q: "Hogyan áraznak?",
    a: "Projektenként adunk ajánlatot, egy díjtalan első konzultáció és felmérés után. Az üzemeltetés és a támogatás havi fix, előre egyeztetett díjjal fut.",
  },
];

const solutions = MENU.find((m) => m.key === "solutions").children;
const SOLUTION_PHOTOS = { warehouse: "aisle", transport: "fleet", maintenance: "forklift" };

export const home = () => ({
  key: "home",
  title: "Folyamat-automatizálás logisztikai cégeknek | Yardly",
  description:
    "Tanácsadás és kivitelezés nagy logisztikai cégeknek: felmérjük a munkafolyamatokat, összekötjük a meglévő rendszereket, és automatizáljuk a kézi adminisztrációt.",
  jsonLd: {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Yardly",
    url: config.siteUrl,
    logo: `${config.siteUrl}/assets/brand/yardly-vizszintes-szines.svg`,
    email: config.email,
    address: { "@type": "PostalAddress", addressLocality: "Budapest", addressCountry: "HU" },
  },
  body: `
<section class="hero" aria-labelledby="hero-title">
  ${photo("aerial-hub", "Logisztikai központ felülnézetből, rakodó kamionokkal.", { eager: true, cls: "hero__img" })}
  <div class="container hero__inner">
    <p class="kicker load-in">Tanácsadás és kivitelezés</p>
    <h1 class="display load-in" id="hero-title">${glue("Automatizált logisztika, a meglévő rendszereire építve.")}</h1>
    <p class="hero__lead load-in">${glue("Felmérjük, hol vész el ma a legtöbb idő, és megépítjük a rendszert, amely ezt a munkát átveszi.")}</p>
    <div class="hero__actions load-in">
      ${ctaButton("accent")}
      ${button("Megoldásaink", route("solutions"), "outline-light")}
    </div>
  </div>
</section>

<nav class="solution-strip" aria-label="Megoldások területenként">
  <div class="container"><div class="solution-strip__grid">
    ${solutions
      .map(
        (s) => `<a class="solution-strip__item" href="${route(s.key)}">
      <span class="solution-strip__icon">${icon(s.icon)}</span>
      <span><strong>${s.label}</strong><span>${s.text}</span></span>
      ${icon("arrow-right", "icon solution-strip__arrow")}
    </a>`
      )
      .join("")}
  </div></div>
</nav>

<section class="section" aria-labelledby="benefits-title">
  <div class="container">
    ${heading({ id: "benefits-title", title: "Amit egy automatizált folyamat ad a cégének", lead: "Nem egy újabb szoftvert vezetünk be, hanem a meglévők közti kézi munkát szüntetjük meg." })}
    <div class="pillars">
      ${BENEFITS.map(
        (b) => `<article class="pillar reveal">
        <span class="pillar__icon">${icon(b.icon)}</span>
        <h3 class="h3">${b.title}</h3>
        <p>${glue(b.text)}</p>
      </article>`
      ).join("")}
    </div>
  </div>
</section>

<section class="split split--navy" aria-labelledby="proof-title">
  <div class="split__media">
    ${photo("forklift", "Targonca egy magas raktári állványsor mellett.", { sizes: "(min-width: 960px) 50vw, 100vw", position: "50% 60%" })}
  </div>
  <div class="split__body">
    <div class="split__content reveal">
      <p class="kicker">Referencia</p>
      <h2 class="h2" id="proof-title">${glue("Havi egy munkanapnyi adminisztráció helyett tíz perc.")}</h2>
      <p>${glue("Egy gyógyszer-, növényvédőszer- és italáru-logisztikai szolgáltatónál négy rendszert kötöttünk össze, és automatizáltuk a targoncák és a gépjárműpark karbantartását.")}</p>
      <dl class="figures">
        <div><dt>Előtte</dt><dd class="figures__before">8 óra</dd></div>
        <div><dt>Most</dt><dd class="figures__after">10 perc</dd></div>
        <div><dt>Összekötött rendszer</dt><dd>4</dd></div>
      </dl>
      ${textLink("A teljes referencia", route("references"))}
    </div>
  </div>
</section>

<section class="section" aria-labelledby="areas-title">
  <div class="container">
    ${heading({ id: "areas-title", title: "Három terület, ahol a legtöbb kézi munka összegyűlik" })}
    <div class="areas">
      ${solutions
        .map(
          (s) => `<a class="area reveal" href="${route(s.key)}">
        <div class="area__media">${photo(SOLUTION_PHOTOS[s.key], "", { sizes: "(min-width: 960px) 33vw, 100vw" })}</div>
        <div class="area__body">
          <h3 class="h3">${s.label}</h3>
          <p>${glue(s.text)}.</p>
          <span class="area__more">Részletek${icon("arrow-right", "icon icon--sm")}</span>
        </div>
      </a>`
        )
        .join("")}
    </div>
  </div>
</section>

<section class="section section--tint" aria-labelledby="faq-title">
  <div class="container faq">
    <div class="faq__aside reveal">
      ${heading({ id: "faq-title", title: "Gyakori kérdések", reveal: false })}
      <div class="faq__contact">
        ${photo("meeting", "Üzleti megbeszélés egy világos irodában.", { sizes: "(min-width: 960px) 30vw, 100vw" })}
        <div>
          <p><strong>Más kérdése van?</strong></p>
          <a href="mailto:${config.email}">${icon("envelope-simple", "icon icon--sm")}${config.email}</a>
        </div>
      </div>
    </div>
    <div class="faq__list reveal">
      ${FAQ.map(
        (f, i) => `<details class="faq-item"${i === 0 ? " open" : ""}>
        <summary><span>${esc(f.q)}</span><span class="faq-item__toggle">${icon("plus")}</span></summary>
        <p>${glue(f.a)}</p>
      </details>`
      ).join("")}
    </div>
  </div>
</section>

${ctaBand({
  title: "Nézzük meg együtt, mi automatizálható Önöknél.",
  text: "Egy rövid konzultáción végigmegyünk a legidőigényesebb folyamatain, és megmutatjuk, hol kezdenénk.",
})}`,
});
