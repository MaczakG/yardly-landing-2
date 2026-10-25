// Site-wide copy: navigation, the Megoldásaink mega menu, footer and shared UI strings.
// Page copy lives next to this file, one module per page.

export const ui = {
  skip: "Ugrás a tartalomra",
  homeLabel: "Yardly – kezdőlap",
  menu: "Menü",
  demo: "Bemutatót kérek",
  quote: "Ajánlatot kérek",
  demoNote: "Egy 30 perces online bemutatón megmutatjuk, hogyan működne az Önök folyamataival.",
  readMore: "Tovább olvasom",
  minutes: (n) => `${n} perc olvasás`,
  backToBlog: "Vissza a bloghoz",
  shotNote: "Valós képernyőkép a Yardlyból, egy kitalált cég, a „Minta Logisztika Kft.” adataival.",
  related: "Kapcsolódó megoldások",
  allSolutions: "Az összes funkció",
  consent: {
    text: "Az oldal látogatottságát a Google Analytics segítségével mérjük, de csak akkor, ha ehhez hozzájárul.",
    more: "Részletek",
    accept: "Elfogadom",
    reject: "Elutasítom",
  },
};

// Header menu, in order. "solutions" opens the mega menu; "highlight" sets an item off a little.
export const nav = [
  { key: "solutions", label: "Megoldásaink" },
  { key: "process", label: "Hogyan dolgozunk" },
  { key: "hosting", label: "Üzemeltetés" },
  { key: "blog", label: "Blog" },
  { key: "contact", label: "Kapcsolat" },
];

// The mega menu's four columns list every solution page (slugs from content/solutions.mjs).
export const megamenu = {
  label: "Megoldásaink",
  columns: [
    { title: "Flotta", items: ["jarmunyilvantartas", "szerviz-karbantartas", "tankolas-dkv", "karugyek-biztositas-tartozekok", "allapotfelmeres"] },
    { title: "Eszközpark", items: ["eszkoznyilvantartas", "leltar"] },
    { title: "Napi működés", items: ["iranyitopult", "dokumentumok", "riasztasok", "folyamatok"] },
    { title: "Vezetés", items: ["koltsegek-riportok", "analitika", "csapat-biztonsag"] },
  ],
  featured: {
    tag: "Új",
    title: "Folyamatok, amelyek egy bejegyzésre maguktól elindulnak",
    text: "Tankolás, szerviz, kárügy vagy bírság után: jóváhagyás, értesítés, PDF, e-mail.",
    link: "Megnézem",
    slug: "folyamatok",
  },
  bottom: {
    all: "Az összes funkció egy oldalon",
    note: "Mindegyik az Önök szabályaihoz igazítható. A meglévő nyilvántartást mi hozzuk át.",
  },
};

export const footer = {
  desc: "Flotta- és eszközüzemeltetési rendszer, a cég folyamataira szabva. Az Önök szerverén vagy általunk üzemeltetve a felhőben.",
  colFleet: "Flotta",
  colOps: "Eszközpark és működés",
  colLead: "Vezetés",
  colCompany: "Cég",
  colLegal: "Jogi",
  legal: "Jogi információk",
  privacy: "Adatvédelmi tájékoztató",
  imprint: "Impresszum",
  illegalContent: "Jogsértő tartalom bejelentése",
  security: "Biztonság",
  cookies: "Süti-beállítások",
  rights: "© 2026 Yardly. Minden jog fenntartva.",
  madeIn: "Készült Magyarországon.",
  top: "Vissza az oldal tetejére",
  soon: "hamarosan",
};

export const notFound = {
  title: "Az oldal nem található | Yardly",
  eyebrow: "404",
  heading: "Ezt az oldalt nem találjuk.",
  text: "Lehet, hogy elköltözött, vagy elírás van a címben.",
  back: "Vissza a főoldalra",
};
