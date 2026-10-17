import { route } from "../routes.mjs";
import { esc, glue, icon, photo, ctaBand, pageHero } from "../ui.mjs";

const crumbsServices = [
  { label: "Kezdőlap", href: route("home") },
  { label: "Szolgáltatások", href: route("services") },
];

// ---------------------------------------------------------------------------

const PHASES = [
  { title: "Konzultáció", text: "Díjtalan első beszélgetés a céljairól, a csapatáról és a legnagyobb elakadásokról." },
  { title: "Folyamatelemzés", text: "Feltérképezzük a munkafolyamatokat és a rendszereket, és kiszámoljuk, mi mennyi időt visz el." },
  { title: "Fejlesztés és integráció", text: "Folyamatonként építünk és élesítünk, a meglévő rendszerek mellé." },
  { title: "Üzemeltetés", text: "Figyeljük, javítjuk és továbbfejlesztjük a rendszert, havi fix díjjal." },
];

export const services = () => ({
  key: "services",
  title: "Szolgáltatások: tanácsadás és kivitelezés | Yardly",
  description:
    "Logisztikai munkafolyamatok automatizálása két lépésben: tanácsadással feltérképezzük, mit érdemes automatizálni, kivitelezéssel meg is valósítjuk.",
  body: `
${pageHero({
  label: "Szolgáltatások",
  title: "Tanácsadás és kivitelezés, egy felelős partnertől.",
  lead: "Megmutatjuk, hol vész el ma a legtöbb idő, majd meg is építjük azt a rendszert, amely ezt a munkát átveszi. A két szolgáltatás külön is kérhető.",
})}

<section class="section section--flush-top" aria-label="Szolgáltatásaink">
  <div class="container duo">
    ${[
      {
        key: "consulting",
        img: "consult",
        alt: "Két kolléga egyeztet egy raktári folyosón, az egyiknél jegyzettömb.",
        title: "Tanácsadás",
        text: "Folyamatelemzés, rendszertérkép és priorizált automatizálási ütemterv, megtérülési számítással.",
      },
      {
        key: "delivery",
        img: "operations",
        alt: "Raktári munkatársak dolgoznak a kiszállításra váró dobozok között.",
        title: "Kivitelezés",
        text: "Integráció, egyedi automatizálás, adatátvitel és üzemeltetés, a meglévő rendszerei mellé építve.",
      },
    ]
      .map(
        (s) => `<a class="duo__card reveal" href="${route(s.key)}">
      <div class="duo__media">${photo(s.img, s.alt, { sizes: "(min-width: 860px) 50vw, 100vw" })}</div>
      <div class="duo__body">
        <h2 class="h3-lg">${s.title}</h2>
        <p>${glue(s.text)}</p>
        <span class="duo__more">Részletek${icon("arrow-right", "icon icon--sm")}</span>
      </div>
    </a>`
      )
      .join("")}
  </div>
</section>

<section class="section section--soft" aria-labelledby="phases-title">
  <div class="container">
    <h2 class="h2 section-title reveal" id="phases-title">${glue("Így halad egy közös projekt")}</h2>
    <ol class="phases reveal">
      ${PHASES.map(
        (p) => `<li class="phase">
        <h3 class="h3">${p.title}</h3>
        <p>${glue(p.text)}</p>
      </li>`
      ).join("")}
    </ol>
  </div>
</section>

<section class="section" aria-labelledby="terms-title">
  <div class="container terms reveal">
    <h2 class="h2" id="terms-title">${glue("Átlátható feltételek, már az elején.")}</h2>
    <dl class="terms__list">
      <div><dt>${icon("magnifying-glass")}Első konzultáció</dt><dd>Díjtalan, kötelezettség nélkül.</dd></div>
      <div><dt>${icon("receipt")}Projekt</dt><dd>Egyedi ajánlat a felmérés alapján, rögzített tartalommal.</dd></div>
      <div><dt>${icon("handshake")}Üzemeltetés</dt><dd>Havi fix, előre egyeztetett díj, támogatással együtt.</dd></div>
    </dl>
  </div>
</section>

${ctaBand({
  title: "Melyik folyamatuk viszi el ma a legtöbb időt?",
  text: "Mondja el egy rövid konzultáción, és megmutatjuk, hogyan nézne ki automatizálva.",
  image: "docks",
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
  { icon: "chart-line-up", title: "Megtérülési becslés", text: "Mennyi kézi munkát vált ki az egyes automatizálás, és mennyi idő alatt térül meg." },
  { icon: "calendar-check", title: "Ütemterv", text: "Priorizált lépések, a leggyorsabb eredménnyel kezdve." },
];

export const consulting = () => ({
  key: "consulting",
  title: "Tanácsadás: logisztikai folyamatelemzés és automatizálási terv | Yardly",
  description:
    "Feltérképezzük a logisztikai munkafolyamatait és rendszereit, és priorizált, megtérülési becsléssel alátámasztott automatizálási ütemtervet adunk.",
  body: `
${pageHero({
  crumbs: crumbsServices,
  label: "Tanácsadás",
  title: "Először értsük meg, hol vész el az idő.",
  lead: "A tanácsadás végére pontosan tudni fogja, mely folyamatokat érdemes automatizálni, milyen sorrendben, és mekkora megtakarítással.",
  image: "consult",
  imageAlt: "Két kolléga egyeztet egy raktári folyosón, az egyiknél jegyzettömb.",
})}

<section class="section" aria-labelledby="questions-title">
  <div class="container questions">
    <h2 class="h2 reveal" id="questions-title">${glue("A kérdések, amelyekre választ adunk")}</h2>
    <ul class="questions__list reveal">
      ${QUESTIONS.map((q) => `<li>${icon("magnifying-glass", "icon")}<span>${glue(q)}</span></li>`).join("")}
    </ul>
  </div>
</section>

<section class="section section--soft" aria-labelledby="outputs-title">
  <div class="container">
    <div class="section-title reveal">
      <h2 class="h2" id="outputs-title">Amit kézbe kap</h2>
      <p class="lead">${glue("Négy dokumentum, amelyre akkor is építhet, ha a megvalósítást házon belül végzi.")}</p>
    </div>
    <div class="outputs">
      ${OUTPUTS.map(
        (o) => `<article class="output reveal">
        <span class="output__icon">${icon(o.icon)}</span>
        <h3 class="h3">${o.title}</h3>
        <p>${glue(o.text)}</p>
      </article>`
      ).join("")}
    </div>
  </div>
</section>

<section class="section" aria-labelledby="format-title">
  <div class="container format">
    <div class="format__copy reveal">
      <h2 class="h2" id="format-title">${glue("Kevés időt kérünk a csapatától.")}</h2>
      <p class="lead">${glue("A felmérést azokkal végezzük, akik a folyamatokat nap mint nap csinálják: diszpécserekkel, raktárvezetőkkel, karbantartási felelősökkel. Rövid interjúk és a helyszíni munka megfigyelése, nem hosszú workshopok.")}</p>
    </div>
    <ul class="format__facts reveal">
      <li><strong>Helyszínen vagy online</strong><span>A telephelyein vagy videóhívásban, ahogy Önöknek kényelmes.</span></li>
      <li><strong>Egy kapcsolattartó</strong><span>A felméréstől az átadásig ugyanaz az ember felel.</span></li>
      <li><strong>Termékfüggetlen javaslat</strong><span>A javaslat a folyamatból indul ki, nem egy előre kiválasztott szoftverből.</span></li>
    </ul>
  </div>
</section>

<section class="section section--flush-top" aria-label="Kapcsolódó szolgáltatás">
  <div class="container">
    <a class="next reveal" href="${route("delivery")}">
      <span class="next__label">Következő lépés</span>
      <span class="next__title">Kivitelezés${icon("arrow-right", "icon next__icon")}</span>
    </a>
  </div>
</section>

${ctaBand({
  title: "Kezdjük egy díjtalan konzultációval.",
  text: "Írja meg, mely folyamatokkal és rendszerekkel dolgoznak, és egyeztetünk egy időpontot.",
  image: "docks",
})}`,
});

// ---------------------------------------------------------------------------

const BUILDS = [
  { icon: "file-text", title: "Rendelés- és dokumentumfeldolgozás", text: "Beérkező rendelések, szállítólevelek és számlák adatai automatikusan a megfelelő rendszerbe." },
  { icon: "truck", title: "Fuvar- és flottaszervezés", text: "Járművek, sofőrök, okmányok és szervizek határidőkkel, értesítésekkel." },
  { icon: "stack", title: "Raktári folyamatok", text: "Készlet-, leltár- és eszközadatok egyeztetése a raktárkezelő és az ERP között." },
  { icon: "wrench", title: "Karbantartás", text: "Targoncák, gépek és járművek szervizei km, üzemóra vagy dátum alapján ütemezve." },
  { icon: "bell", title: "Riasztások és jóváhagyások", text: "Többlépcsős értesítés és jóváhagyási lánc, a saját szabályai szerint." },
  { icon: "chart-line-up", title: "Riportok és vezetői kimutatások", text: "Költségek, teljesítmény és határidők naprakészen, PDF-ben és Excelben." },
];

const CONNECTS = ["ERP", "WMS", "TMS", "Telematika", "Üzemanyagkártya", "Dokumentumkezelő", "E-mail", "Excel"];

export const delivery = () => ({
  key: "delivery",
  title: "Kivitelezés: integráció és folyamat-automatizálás | Yardly",
  description:
    "Megépítjük és üzemeltetjük a logisztikai folyamatait automatizáló rendszert: integráció a meglévő ERP, WMS és TMS rendszerekhez, egyedi szabályok, EU-s üzemeltetés.",
  body: `
${pageHero({
  crumbs: crumbsServices,
  label: "Kivitelezés",
  title: "Megépítjük, élesítjük és üzemeltetjük.",
  lead: "A rendszert a meglévő szoftverei mellé építjük, folyamatonként élesítjük, és az átadás után is mi felelünk érte.",
  image: "operations",
  imageAlt: "Raktári munkatársak dolgoznak a kiszállításra váró dobozok között.",
})}

<section class="section" aria-labelledby="builds-title">
  <div class="container">
    <div class="section-title reveal">
      <h2 class="h2" id="builds-title">Amit automatizálunk</h2>
      <p class="lead">${glue("A leggyakoribb területek nagy logisztikai cégeknél. A sorrendet és a terjedelmet a tanácsadás eredménye határozza meg.")}</p>
    </div>
    <ul class="builds">
      ${BUILDS.map(
        (b) => `<li class="build reveal">
        ${icon(b.icon)}
        <div><h3 class="h3">${b.title}</h3><p>${glue(b.text)}</p></div>
      </li>`
      ).join("")}
    </ul>
  </div>
</section>

<section class="section section--navy" aria-labelledby="connect-title">
  <div class="container connect">
    <div class="reveal">
      <h2 class="h2" id="connect-title">${glue("A meglévő rendszerei maradnak, mi összekötjük őket.")}</h2>
      <p class="connect__text">${glue("Minden kapcsolatot egyedileg fejlesztünk, ezért ahhoz igazodik, amit ma használnak: szabványos interfészhez, adatbázishoz, fájlexporthoz vagy e-mailhez.")}</p>
    </div>
    <ul class="connect__chips reveal" aria-label="Tipikus kapcsolódási pontok">
      ${CONNECTS.map((c) => `<li>${esc(c)}</li>`).join("")}
    </ul>
  </div>
</section>

<section class="section" aria-labelledby="run-title">
  <div class="container run">
    <figure class="run__media reveal">
      ${photo("forklift", "Targonca egy magas raktári állványsor mellett.", { sizes: "(min-width: 960px) 40vw, 100vw" })}
    </figure>
    <div class="run__body">
      <h2 class="h2 reveal" id="run-title">${glue("Biztonságos üzemeltetés, EU-s adatközpontban vagy házon belül.")}</h2>
      <div class="run__options reveal">
        <div>${icon("cloud")}<h3 class="h3">AWS Frankfurt</h3><p>${glue("Dedikált környezet az Amazon Web Services EU-s adatközpontjában. A szervert és az alkalmazást is mi üzemeltetjük.")}</p></div>
        <div>${icon("hard-drives")}<h3 class="h3">Saját szerver</h3><p>${glue("A rendszer az Önök hálózatán fut. A szervert az Önök informatikája, az alkalmazást mi üzemeltetjük.")}</p></div>
      </div>
      <ul class="run__security reveal">
        ${["Szerepkör-alapú jogosultságok", "Teljes változásnapló", "Titkosított kapcsolat", "Kétlépcsős bejelentkezés", "Cégenként elkülönített adatok", "Behatolásos tesztelés"]
          .map((s) => `<li>${icon("check", "icon icon--sm")}${s}</li>`)
          .join("")}
      </ul>
    </div>
  </div>
</section>

${ctaBand({
  title: "Mutassa meg a folyamatot, mi megmutatjuk az automatizált változatát.",
  text: "Egy rövid konzultáción átnézzük, és felvázoljuk a megvalósítás lépéseit.",
})}`,
});
