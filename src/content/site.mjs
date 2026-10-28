// Site-wide copy: navigation, the Megoldásaink mega menu, footer and shared UI strings.
// Page copy lives next to this file, one module per page.

import { TRIAL_DAYS, TRIAL_PLAN } from "./pricing.mjs";

// Where the app lives. Registration starts the trial: a bank card is registered first and
// nothing is charged during the trial. ?plan= preselects the plan to continue with afterwards.
export const APP = {
  login: "https://app.yardly.hu/login.html",
  register: "https://app.yardly.hu/login.html?mode=register",
  registerPlan: (key) => `https://app.yardly.hu/login.html?mode=register&plan=${key}`,
};

export const ui = {
  skip: "Ugrás a tartalomra",
  homeLabel: "Yardly – kezdőlap",
  menu: "Menü",
  login: "Bejelentkezés",
  trial: `Kipróbálom ${TRIAL_DAYS} napig`,
  trialShort: "Kipróbálom",
  demo: "Bemutatót kérek",
  trialNote: `${TRIAL_DAYS} nap ingyen, a ${TRIAL_PLAN} csomag minden funkciójával.`,
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
  { key: "pricing", label: "Árak" },
  { key: "blog", label: "Blog" },
  { key: "contact", label: "Kapcsolat" },
];

// The mega menu's four columns list every solution page (slugs from content/solutions.mjs).
// Processes come first: they are what sets Yardly apart from a register. The footer picks the
// columns by key.
export const megamenu = {
  label: "Megoldásaink",
  columns: [
    { key: "daily", title: "Folyamatok és napi működés", items: ["folyamatok", "iranyitopult", "dokumentumok", "riasztasok"] },
    { key: "fleet", title: "Flotta", items: ["jarmunyilvantartas", "szerviz-karbantartas", "tankolas-dkv", "karugyek-biztositas-tartozekok", "allapotfelmeres"] },
    { key: "equipment", title: "Eszközpark", items: ["eszkoznyilvantartas", "leltar"], feature: true },
    { key: "lead", title: "Vezetés", items: ["koltsegek-riportok", "analitika", "csapat-biztonsag"] },
  ],
  featured: {
    tag: "Új",
    title: "Folyamatok, amelyek egy bejegyzésre elindulnak",
    text: "Tankolás, szerviz, kárügy vagy bírság rögzítése után a rendszer jóváhagyást kér, értesít, PDF-et készít és e-mailt küld.",
    link: "Megnézem",
    slug: "folyamatok",
  },
  bottom: {
    all: "Az összes funkció egy oldalon",
    note: "Excel-import sablonnal: a meglévő nyilvántartás egyszerre átkerül.",
  },
};

export const footer = {
  desc: "Flotta- és eszköznyilvántartás folyamatautomatizálással, magyar cégeknek. A rendszer szól, mielőtt valami lejár, és elindítja, ami utána következik.",
  colFleet: "Flotta",
  colOps: "Eszközpark és napi működés",
  colLead: "Vezetés",
  colCompany: "Cég",
  colLegal: "Jogi",
  legal: "Jogi információk",
  terms: "ÁSZF",
  privacy: "Adatkezelési tájékoztató",
  imprint: "Impresszum",
  illegalContent: "Jogsértő tartalom bejelentése",
  security: "Biztonság",
  payment: "Kártyás fizetés a Barionnal: Barion, Mastercard, Visa, Apple Pay, Google Pay",
  cookies: "Süti-beállítások",
  rights: "© 2026 Yardly. Minden jog fenntartva.",
  madeIn: "Magyarországon fejlesztve.",
  top: "Vissza az oldal tetejére",
};

export const notFound = {
  title: "Az oldal nem található | Yardly",
  eyebrow: "404",
  heading: "Ezt az oldalt nem találjuk.",
  text: "Lehet, hogy elköltözött, vagy elírás van a címben.",
  back: "Vissza a főoldalra",
};
