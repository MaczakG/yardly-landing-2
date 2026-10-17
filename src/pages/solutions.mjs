import { route } from "../routes.mjs";
import { esc, glue, icon, photo, heading, ctaBand, pageHero, MENU } from "../ui.mjs";

const crumbs = [
  { label: "Kezdőlap", href: route("home") },
  { label: "Megoldások", href: route("solutions") },
];

// One entry per solution area. The same template renders all three pages.
const AREAS = {
  warehouse: {
    image: "aisle",
    imageAlt: "Magas raktári állványsor raklapokkal egy elosztóközpontban.",
    position: "50% 40%",
    title: "Raktári folyamatok, kézi átvezetés nélkül.",
    lead: "Készlet, leltár, eszközök és a raktár körüli adminisztráció: összekötjük a raktárkezelőt, az ERP-t és a táblázatokat, hogy az adat magától jusson oda, ahol szükség van rá.",
    pains: [
      "A készletadatot a raktárkezelőből kézzel vezetik át az ERP-be vagy egy táblázatba.",
      "A leltár és az eltérések egyeztetése napokat vesz igénybe.",
      "A raktári eszközök, állványok és gépek nyilvántartása szétszórtan, több helyen él.",
      "A vezetői kimutatást minden hónapban kézzel rakják össze.",
    ],
    builds: [
      { icon: "stack", title: "Készletadat-szinkron", text: "A raktárkezelő és az ERP közti adatmozgás automatikusan, ellenőrzésekkel." },
      { icon: "clipboard-text", title: "Leltár és eltéréskezelés", text: "Leltárlisták, eltérések jelzése és jóváhagyása egy folyamatban." },
      { icon: "tree-structure", title: "Eszköznyilvántartás", text: "Állványok, gépek, IT-eszközök telephelyig és helyig, felelőssel." },
      { icon: "chart-line-up", title: "Raktári riportok", text: "Naprakész kimutatások a készletről, a mozgásokról és a költségekről." },
    ],
    systems: ["WMS", "ERP", "Eszköznyilvántartás", "Excel", "E-mail"],
  },
  transport: {
    image: "fleet",
    imageAlt: "Sorban parkoló fehér kisteherautók egy flotta telephelyén.",
    position: "50% 55%",
    title: "Fuvarozás és flotta, minden határidővel együtt.",
    lead: "Fuvarmegrendelések, járművek, sofőrök és okmányok: a megrendeléstől a költségriportig összekötjük azt, ami ma e-mailben, telefonon és táblázatban fut.",
    pains: [
      "A fuvarmegrendelések e-mailben érkeznek, és kézzel kerülnek át a fuvarszervező rendszerbe.",
      "Az okmányok, vizsgák és biztosítások lejáratát egy táblázat vagy egy kolléga figyeli.",
      "Az üzemanyagkártya- és telematikai adatokat kézzel párosítják a járművekhez.",
      "A járművenkénti költség csak hetekkel később, becsülve látszik.",
    ],
    builds: [
      { icon: "file-text", title: "Megrendelés-feldolgozás", text: "A beérkező megrendelések adatai automatikusan a fuvarszervező rendszerbe." },
      { icon: "bell", title: "Okmány- és lejáratfigyelés", text: "Többlépcsős értesítés vizsgák, engedélyek és biztosítások lejárta előtt." },
      { icon: "truck", title: "Flottanyilvántartás", text: "Járművek, sofőrök, tankolások és szervizek egy összekötött nyilvántartásban." },
      { icon: "receipt", title: "Járművenkénti költség", text: "Üzemanyag, szerviz, biztosítás és díjak összesítve, Ft/km-ben is." },
    ],
    systems: ["TMS", "Telematika", "Üzemanyagkártya", "ERP", "E-mail", "Excel"],
  },
  maintenance: {
    image: "forklift",
    imageAlt: "Targonca egy magas raktári állványsor mellett.",
    position: "50% 78%",
    title: "Karbantartás, amely magától ütemeződik.",
    lead: "Targoncák, gépek és járművek szervizei km, üzemóra vagy dátum alapján, értesítéssel, munkalappal és költségriporttal, a meglévő rendszereiből táplálva.",
    pains: [
      "A szervizek esedékességét egy egyre bonyolultabb táblázat tartja nyilván.",
      "Az üzemóra- és km-adatokat kézzel gyűjtik össze több forrásból.",
      "Egy kötelező felülvizsgálat csak akkor derül ki, amikor már lejárt.",
      "A karbantartási költségek eszközönként nem láthatók.",
    ],
    builds: [
      { icon: "calendar-check", title: "Szervizütemezés", text: "Esedékesség km, üzemóra vagy dátum szerint, naponta újraszámolva." },
      { icon: "chart-line-up", title: "Előrejelzés", text: "A következő szerviz becsült időpontja a valós használati adatokból." },
      { icon: "clipboard-text", title: "Munkalap és jóváhagyás", text: "Munkalapok, ellenőrzőlisták és jóváhagyási lépések egy helyen." },
      { icon: "receipt", title: "Karbantartási költségek", text: "Költség eszközönként, kategóriánként és időszakonként." },
    ],
    systems: ["Eszköznyilvántartás", "Dokumentumkezelő", "Üzemanyagkártya", "ERP", "Excel"],
    reference: true,
  },
};

const solutionPage = (key) => () => {
  const a = AREAS[key];
  const meta = MENU.find((m) => m.key === "solutions").children.find((c) => c.key === key);
  return {
    key,
    title: `${meta.label}: automatizálás logisztikai cégeknek | Yardly`,
    description: a.lead,
    body: `
${pageHero({ crumbs, label: meta.label, title: a.title, lead: a.lead, image: a.image, imageAlt: a.imageAlt, position: a.position })}

<section class="section" aria-labelledby="pains-title">
  <div class="container two-col">
    ${heading({ id: "pains-title", title: "Ismerős helyzetek", lead: "Ezekből indulunk ki. Ha valamelyik ismerős, ott van a legtöbb nyerhető idő." })}
    <ul class="pains reveal">
      ${a.pains.map((p) => `<li>${icon("x", "icon icon--sm")}<span>${glue(p)}</span></li>`).join("")}
    </ul>
  </div>
</section>

<section class="section section--tint" aria-labelledby="builds-title">
  <div class="container">
    ${heading({ id: "builds-title", title: "Amit automatizálunk" })}
    <div class="feature-grid">
      ${a.builds
        .map(
          (b) => `<article class="feature reveal">
        <span class="feature__icon">${icon(b.icon)}</span>
        <h3 class="h3">${b.title}</h3>
        <p>${glue(b.text)}</p>
      </article>`
        )
        .join("")}
    </div>
  </div>
</section>

<section class="section" aria-labelledby="systems-title">
  <div class="container two-col two-col--center">
    ${heading({ id: "systems-title", title: "A meglévő rendszereihez kapcsolódunk", lead: "Minden kapcsolatot egyedileg fejlesztünk, ezért ahhoz igazodik, amit ma használnak." })}
    <ul class="system-tags reveal" aria-label="Tipikus kapcsolódási pontok">
      ${a.systems.map((s) => `<li>${esc(s)}</li>`).join("")}
    </ul>
  </div>
</section>

${
  a.reference
    ? `<section class="section section--flush-top" aria-label="Kapcsolódó referencia">
  <div class="container">
    <a class="ref-teaser reveal" href="${route("references")}">
      <span class="ref-teaser__num">8 óra <span>helyett</span> 10 perc</span>
      <span class="ref-teaser__text">${glue("Így automatizáltuk a karbantartást egy logisztikai szolgáltatónál.")}</span>
      ${icon("arrow-right", "icon ref-teaser__icon")}
    </a>
  </div>
</section>`
    : ""
}

${ctaBand({
  title: `Beszéljünk a ${meta.label.toLowerCase()} automatizálásáról.`,
  text: "Egy rövid konzultáción átnézzük a mai folyamatot, és megmutatjuk, hol kezdenénk.",
})}`,
  };
};

export const warehouse = solutionPage("warehouse");
export const transport = solutionPage("transport");
export const maintenance = solutionPage("maintenance");

// ---------------------------------------------------------------------------

export const solutions = () => {
  const items = MENU.find((m) => m.key === "solutions").children;
  return {
    key: "solutions",
    title: "Megoldások: raktár, fuvarozás, karbantartás | Yardly",
    description:
      "Automatizálás a logisztika három legadminisztrációigényesebb területén: raktári folyamatok, fuvarozás és flotta, karbantartás.",
    body: `
${pageHero({
  label: "Megoldások",
  title: "Ott automatizálunk, ahol a legtöbb kézi munka gyűlik össze.",
  lead: "Három terület, ahol a logisztikai cégeknél a legtöbb idő megy el táblázatokra, átvezetésre és határidőfigyelésre.",
  image: "docks",
  imageAlt: "Rakodókapuk egy logisztikai központ épületén.",
})}

<section class="section" aria-label="Megoldási területek">
  <div class="container">
    <div class="rows">
      ${items
        .map(
          (s, i) => `<a class="row reveal" href="${route(s.key)}">
        <div class="row__media">${photo(AREAS[s.key].image, "", { sizes: "(min-width: 960px) 40vw, 100vw", position: AREAS[s.key].position })}</div>
        <div class="row__body">
          <span class="row__icon">${icon(s.icon)}</span>
          <h2 class="h3-lg">${s.label}</h2>
          <p>${glue(AREAS[s.key].lead)}</p>
          <span class="row__more">Részletek${icon("arrow-right", "icon icon--sm")}</span>
        </div>
      </a>`
        )
        .join("")}
    </div>
  </div>
</section>

${ctaBand({
  title: "Nem biztos benne, hol kezdje?",
  text: "A tanácsadás pontosan ezt mutatja meg. Az első konzultáció díjtalan.",
})}`,
  };
};

