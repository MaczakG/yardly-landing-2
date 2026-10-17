import { route } from "../routes.mjs";
import { esc, glue, icon, photo, heading, ctaBand, pageHero } from "../ui.mjs";

const crumbs = [
  { label: "Kezdőlap", href: route("home") },
  { label: "Szolgáltatások", href: route("services") },
];

// ---------------------------------------------------------------------------

export const services = () => ({
  key: "services",
  title: "Szolgáltatások: tanácsadás és kivitelezés | Yardly",
  description:
    "Két, egymásra épülő szolgáltatás: tanácsadással feltérképezzük, mit érdemes automatizálni, kivitelezéssel meg is valósítjuk és üzemeltetjük.",
  body: `
${pageHero({
  label: "Szolgáltatások",
  title: "Tanácsadás és kivitelezés, egy felelős partnertől.",
  lead: "Megmutatjuk, hol vész el ma a legtöbb idő, majd meg is építjük a rendszert, amely ezt a munkát átveszi. A két szolgáltatás külön is kérhető.",
  image: "meeting",
  imageAlt: "Üzleti megbeszélés egy világos irodában.",
})}

<section class="section" aria-label="Szolgáltatásaink">
  <div class="container">
    <div class="service-split">
      ${[
        {
          key: "consulting",
          icon: "compass",
          title: "Tanácsadás",
          text: "Feltérképezzük a munkafolyamatokat és a rendszereket, és priorizált, megtérülési becsléssel alátámasztott ütemtervet adunk.",
          points: ["Folyamat- és rendszertérkép", "Megtérülési becslés", "Priorizált ütemterv"],
        },
        {
          key: "delivery",
          icon: "plugs-connected",
          title: "Kivitelezés",
          text: "Megépítjük az automatizálást a meglévő rendszerei mellé, folyamatonként élesítjük, és az átadás után is üzemeltetjük.",
          points: ["Integráció és fejlesztés", "Adatátvitel és élesítés", "Üzemeltetés és támogatás"],
        },
      ]
        .map(
          (s) => `<a class="service reveal" href="${route(s.key)}">
        <span class="service__icon">${icon(s.icon)}</span>
        <h2 class="h3-lg">${s.title}</h2>
        <p>${glue(s.text)}</p>
        <ul class="checks">${s.points.map((p) => `<li>${icon("check", "icon icon--sm")}${p}</li>`).join("")}</ul>
        <span class="service__more">Részletek${icon("arrow-right", "icon icon--sm")}</span>
      </a>`
        )
        .join("")}
    </div>
  </div>
</section>

${ctaBand({
  title: "Melyik folyamatuk viszi el ma a legtöbb időt?",
  text: "Mondja el egy rövid konzultáción, és megmutatjuk, hogyan nézne ki automatizálva.",
})}`,
});

// ---------------------------------------------------------------------------

const QUESTIONS = [
  "Mely folyamatok futnak ma kézzel, e-mailben vagy táblázatban?",
  "Hol rögzítik ugyanazt az adatot több rendszerben?",
  "Hol csúsznak a határidők, és ki veszi észre?",
  "Mennyi munkaórát visz el havonta az adminisztráció?",
];

const OUTPUTS = [
  { icon: "flow-arrow", title: "Folyamattérkép", text: "A kiválasztott folyamatok valós lépései, felelősei és átadási pontjai." },
  { icon: "tree-structure", title: "Rendszer- és adattérkép", text: "Melyik rendszer milyen adatot tárol, és hogyan érhető el." },
  { icon: "chart-line-up", title: "Megtérülési becslés", text: "Mennyi kézi munkát vált ki az egyes automatizálás." },
  { icon: "calendar-check", title: "Ütemterv", text: "Priorizált lépések, a leggyorsabb eredménnyel kezdve." },
];

export const consulting = () => ({
  key: "consulting",
  title: "Tanácsadás: logisztikai folyamatelemzés és automatizálási terv | Yardly",
  description:
    "Feltérképezzük a logisztikai munkafolyamatait és rendszereit, és priorizált, megtérülési becsléssel alátámasztott automatizálási ütemtervet adunk.",
  body: `
${pageHero({
  crumbs,
  label: "Tanácsadás",
  title: "Először értsük meg, hol vész el az idő.",
  lead: "A tanácsadás végére pontosan tudni fogja, mely folyamatokat érdemes automatizálni, milyen sorrendben, és mekkora megtakarítással.",
  image: "workshop",
  imageAlt: "Megbeszélés egy tárgyalóasztalnál, jegyzetekkel.",
})}

<section class="section" aria-labelledby="questions-title">
  <div class="container two-col">
    ${heading({ id: "questions-title", title: "A kérdések, amelyekre választ adunk" })}
    <ol class="numbered reveal">
      ${QUESTIONS.map((q) => `<li>${glue(q)}</li>`).join("")}
    </ol>
  </div>
</section>

<section class="split split--navy split--reverse" aria-labelledby="outputs-title">
  <div class="split__media">${photo("consult", "Két kolléga egyeztet egy raktári folyosón, az egyiknél jegyzettömb.", { sizes: "(min-width: 960px) 50vw, 100vw" })}</div>
  <div class="split__body">
    <div class="split__content reveal">
      <h2 class="h2" id="outputs-title">Amit kézbe kap</h2>
      <p>${glue("Négy dokumentum, amelyre akkor is építhet, ha a megvalósítást házon belül végzi.")}</p>
      <ul class="deliverables">
        ${OUTPUTS.map((o) => `<li>${icon(o.icon)}<div><strong>${o.title}</strong><span>${glue(o.text)}</span></div></li>`).join("")}
      </ul>
    </div>
  </div>
</section>

<section class="section" aria-labelledby="format-title">
  <div class="container">
    ${heading({ id: "format-title", title: "Kevés időt kérünk a csapatától", lead: "A felmérést azokkal végezzük, akik a folyamatokat nap mint nap csinálják: diszpécserekkel, raktárvezetőkkel, karbantartási felelősökkel." })}
    <div class="facts-row reveal">
      <div><strong>Helyszínen vagy online</strong><span>A telephelyein vagy videóhívásban, ahogy Önöknek kényelmes.</span></div>
      <div><strong>Egy kapcsolattartó</strong><span>A felméréstől az átadásig ugyanaz az ember felel.</span></div>
      <div><strong>Termékfüggetlen javaslat</strong><span>A javaslat a folyamatból indul ki, nem egy előre kiválasztott szoftverből.</span></div>
    </div>
  </div>
</section>

${ctaBand({
  title: "Kezdjük egy díjtalan konzultációval.",
  text: "Írja meg, mely folyamatokkal és rendszerekkel dolgoznak, és egyeztetünk egy időpontot.",
})}`,
});

// ---------------------------------------------------------------------------

const SCOPE = [
  { icon: "plugs-connected", title: "Integráció", text: "Kapcsolat az ERP, WMS, TMS, telematikai és egyéb rendszerekhez, egyedileg fejlesztve." },
  { icon: "flow-arrow", title: "Automatizált folyamatok", text: "Üzleti szabályok, jóváhagyások, értesítések és ellenőrzések a saját működése szerint." },
  { icon: "database", title: "Adatátvitel", text: "A meglévő táblázatok és nyilvántartások átvitele, tisztítása és egyeztetése." },
  { icon: "chart-line-up", title: "Riportok", text: "Vezetői kimutatások és exportok, mindig a friss adatból." },
];

const SECURITY = [
  "Szerepkör-alapú jogosultságok",
  "Teljes változásnapló",
  "Titkosított kapcsolat",
  "Kétlépcsős bejelentkezés",
  "Cégenként elkülönített adatok",
  "Behatolásos tesztelés",
];

export const delivery = () => ({
  key: "delivery",
  title: "Kivitelezés: integráció és folyamat-automatizálás | Yardly",
  description:
    "Megépítjük és üzemeltetjük a logisztikai folyamatait automatizáló rendszert: integráció a meglévő rendszerekhez, egyedi szabályok, EU-s vagy saját szerveres üzemeltetés.",
  body: `
${pageHero({
  crumbs,
  label: "Kivitelezés",
  title: "Megépítjük, élesítjük és üzemeltetjük.",
  lead: "A rendszert a meglévő szoftverei mellé építjük, folyamatonként élesítjük, és az átadás után is mi felelünk érte.",
  image: "operations",
  imageAlt: "Raktári munkatársak dolgoznak a kiszállításra váró dobozok között.",
})}

<section class="section" aria-labelledby="scope-title">
  <div class="container">
    ${heading({ id: "scope-title", title: "A kivitelezés részei" })}
    <div class="feature-grid">
      ${SCOPE.map(
        (b) => `<article class="feature reveal">
        <span class="feature__icon">${icon(b.icon)}</span>
        <h3 class="h3">${b.title}</h3>
        <p>${glue(b.text)}</p>
      </article>`
      ).join("")}
    </div>
  </div>
</section>

<section class="section section--tint" aria-labelledby="hosting-title">
  <div class="container">
    ${heading({ id: "hosting-title", title: "Üzemeltetés az EU-ban vagy házon belül", lead: "Két üzemeltetési mód közül választhat. A biztonsági intézkedések mindkettőben ugyanazok." })}
    <div class="hosting">
      <article class="hosting__option reveal">
        ${icon("cloud")}
        <h3 class="h3">AWS Frankfurt</h3>
        <p>${glue("Dedikált környezet az Amazon Web Services EU-s adatközpontjában. A szervert és az alkalmazást is mi üzemeltetjük.")}</p>
      </article>
      <article class="hosting__option reveal">
        ${icon("hard-drives")}
        <h3 class="h3">Saját szerver</h3>
        <p>${glue("A rendszer az Önök hálózatán fut. A szervert az Önök informatikája, az alkalmazást mi üzemeltetjük.")}</p>
      </article>
      <div class="hosting__security reveal">
        <h3 class="h3">${icon("lock-key", "icon icon--inline")}Biztonság</h3>
        <ul class="checks">${SECURITY.map((s) => `<li>${icon("check", "icon icon--sm")}${esc(s)}</li>`).join("")}</ul>
      </div>
    </div>
  </div>
</section>

${ctaBand({
  title: "Mutassa meg a folyamatot, mi megmutatjuk az automatizált változatát.",
  text: "Egy rövid konzultáción átnézzük, és felvázoljuk a megvalósítás lépéseit.",
})}`,
});
