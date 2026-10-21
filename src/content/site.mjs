// Site-wide copy: navigation, the Megoldásaink mega menu, footer and shared UI strings.
// Page copy lives next to this file, one module per page.

// Where the app lives. Registration starts the 14-day trial (no card).
export const APP = {
  login: "https://app.yardly.hu/",
  register: "https://app.yardly.hu/?mode=register",
};

export const ui = {
  skip: "Ugrás a tartalomra",
  homeLabel: "Yardly – kezdőlap",
  menu: "Menü",
  login: "Bejelentkezés",
  trial: "Kipróbálom 14 napig",
  trialShort: "Kipróbálom",
  demo: "Bemutatót kérek",
  trialNote: "14 nap ingyen, a Prémium csomag minden funkciójával. Bankkártya nem kell.",
  soon: "Hamarosan",
  notify: "Értesítést kérek",
  vat: "+ ÁFA",
  readMore: "Tovább olvasom",
  minutes: (n) => `${n} perc olvasás`,
  backToBlog: "Vissza a bloghoz",
  shotUrl: "app.yardly.hu",
  shotNote: "Valós képernyőkép a Yardlyból, egy kitalált cég, a „Minta Logisztika Kft.” adataival.",
  related: "Kapcsolódó megoldások",
  allSolutions: "Az összes funkció",
  draft: "Tervezet. Élesítés előtt a kiemelt részeket ki kell tölteni, a szöveget jogi szakértőnek kell ellenőriznie.",
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
  { key: "enterprise", label: "Vállalatoknak", highlight: true },
  { key: "about", label: "Rólunk" },
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
    title: "DKV-kártyás tankolások kézi rögzítés nélkül",
    text: "A tranzakciók 6 óránként maguk kerülnek a járművekhez.",
    link: "Megnézem",
    slug: "tankolas-dkv",
  },
  bottom: {
    all: "Az összes funkció egy oldalon",
    note: "Excel-import: a meglévő nyilvántartása percek alatt átkerül.",
  },
};

export const footer = {
  desc: "Flotta- és eszközkezelő rendszer magyar cégeknek. A rendszer szól, mielőtt valami lejár.",
  colFleet: "Flotta",
  colOps: "Eszközpark és működés",
  colLead: "Vezetés",
  colCompany: "Cég",
  colLegal: "Jogi",
  privacy: "Adatvédelmi tájékoztató",
  imprint: "Impresszum",
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
