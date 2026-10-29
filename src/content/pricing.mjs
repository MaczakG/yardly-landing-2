// Árak. The numbers mirror the app's catalog (yardly-saas: backend/src/Flotta.Api/pricing.json).
// When a price, limit or feature changes there, change it here: every price on the site (the
// price page, the home page, the solution pages, posts and guides) comes from
// this file. Prices are per month, in HUF. The seller is VAT-exempt (alanyi adómentes), so a
// price is the amount paid: no VAT is added and none is shown.

export const TRIAL_DAYS = 14;
export const ANNUAL_FREE_MONTHS = 2;
export const NO_VAT = "Alanyi adómentes vállalkozásként áfát nem számítunk fel.";

// "29 990 Ft": thousands grouped with a non-breaking space, so a price never wraps.
export const num = (n) => String(Math.round(n)).replace(/\B(?=(\d{3})+(?!\d))/g, " ");
export const huf = (n) => `${num(n)} Ft`;

// "+250 eszköz": bought in packs above a plan's equipment limit (Alap and Üzleti; Prémium has no limit).
export const EQUIPMENT_ADDON = { size: 250, monthly: 4990, maxQuantity: 20 };
// The DKV fuel card connection: in Üzleti and Prémium, an add-on on Alap.
export const DKV_ADDON = { plan: "alap", name: "DKV-integráció", monthly: 9990 };

// users, sites, workflows: null = unlimited. equipment: null = unlimited.
export const plans = [
  {
    key: "alap",
    name: "Alap",
    tagline: "Kisebb flottának, egy telephellyel",
    monthly: 29990,
    annualMonthly: 24990,
    included: 25,
    extra: 990,
    ceiling: 40,
    equipment: 100,
    users: 10,
    sites: 1,
    workflows: 1,
    support: "e-mailben",
  },
  {
    key: "uzleti",
    name: "Üzleti",
    tagline: "Több telephelynek, saját folyamatokkal",
    recommended: true,
    monthly: 59990,
    annualMonthly: 49990,
    included: 75,
    extra: 890,
    ceiling: 150,
    equipment: 1000,
    users: null,
    sites: null,
    workflows: 10,
    support: "e-mailben",
  },
  {
    key: "premium",
    name: "Prémium",
    tagline: "Nagy flottának, analitikával",
    monthly: 89990,
    annualMonthly: 74990,
    included: 150,
    extra: 790,
    ceiling: 300,
    equipment: null,
    users: null,
    sites: null,
    workflows: null,
    support: "e-mailben",
  },
];

export const planByKey = Object.fromEntries(plans.map((p) => [p.key, p]));
// The trial runs on the biggest plan, with every feature.
export const TRIAL_PLAN = planByKey.premium.name;
// The plans whose annual fee can also be paid by bank transfer against a payment request.
export const ANNUAL_TRANSFER_PLANS = ["uzleti", "premium"];

const count = (n) => (n === null ? "korlátlan" : num(n));
const cap = (s) => s[0].toUpperCase() + s.slice(1);
const [alap, uzleti, premium] = plans;

// What one more vehicle costs on each plan, and up to how many: "990 Ft/hó, legfeljebb 40-ig".
const extraVehicle = (p) => `${huf(p.extra)}/hó, legfeljebb ${p.ceiling}-ig`;

// The lines on the plan cards.
alap.highlights = [
  `${alap.included} aktív jármű a díjban, felette ${huf(alap.extra)}/jármű/hó (legfeljebb ${alap.ceiling})`,
  `${num(alap.equipment)} eszköz, ${alap.users} felhasználó, ${alap.sites} telephely`,
  "1 aktív folyamat, sablonból",
  `DKV-integráció kiegészítőként: +${huf(DKV_ADDON.monthly)}/hó`,
  `Támogatás ${alap.support}`,
];
uzleti.highlights = [
  `${uzleti.included} aktív jármű a díjban, felette ${huf(uzleti.extra)}/jármű/hó (legfeljebb ${uzleti.ceiling})`,
  `${num(uzleti.equipment)} eszköz, korlátlan felhasználó és telephely`,
  `${uzleti.workflows} aktív folyamat`,
  "Telefonos állapotfelmérés és QR-leltár",
  "Saját szerepkörök és jogosultsági mátrix",
  "Változásnapló (az utolsó 90 nap)",
  "Vezetői összefoglaló PDF",
  "DKV-integráció",
];
premium.highlights = [
  `${premium.included} aktív jármű a díjban, felette ${huf(premium.extra)}/jármű/hó (legfeljebb ${premium.ceiling})`,
  "Korlátlan eszköz, felhasználó és telephely",
  "Korlátlan számú folyamat",
  "Minden, ami az Üzletiben",
  "Analitika, előrejelzés, csereajánlások",
  "Változásnapló exporttal, állítható megőrzéssel",
  "Beállítások átadása szerepköröknek",
];


// "Mi van az egyes csomagokban": one row per feature, cells for Alap / Üzleti / Prémium.
// true = included, false = not included, a string = shown as written.
export const comparison = [
  { label: "Járművek, eszközök, dokumentumok, lejárat-riasztás, szerviz- és tankolási napló, karbantartási ütemterv, költségek, kárügyek, biztosítás, Excel-import és -export", cells: [true, true, true] },
  { label: "Telefonos állapotfelmérés", cells: [false, true, true] },
  { label: "Leltár telefonnal (QR, vonalkód)", cells: [false, true, true] },
  { label: "Saját szerepkörök és jogosultsági mátrix", cells: ["fix szerepkörök", true, true] },
  { label: "Változásnapló", cells: [false, "az utolsó 90 nap", "állítható megőrzés + export"] },
  { label: "Vezetői összefoglaló PDF", cells: [false, true, true] },
  { label: "Analitika, előrejelzés, csereajánlások", cells: [false, false, true] },
  { label: "Beállítások átadása szerepköröknek", cells: [false, false, true] },
  { label: "DKV üzemanyagkártya-integráció", cells: [`kiegészítő: +${huf(DKV_ADDON.monthly)}/hó`, true, true] },
  { label: `+${EQUIPMENT_ADDON.size} eszköz`, cells: [`+${huf(EQUIPMENT_ADDON.monthly)}/hó`, `+${huf(EQUIPMENT_ADDON.monthly)}/hó`, "nem szükséges"] },
];

// The limits table under the cards.
export const limits = [
  { label: "Aktív jármű a díjban", cells: plans.map((p) => String(p.included)) },
  { label: "További jármű", cells: plans.map((p) => `+${extraVehicle(p)}`) },
  { label: "Eszköz", cells: plans.map((p) => count(p.equipment)) },
  { label: "Felhasználó", cells: plans.map((p) => count(p.users)) },
  { label: "Telephely", cells: plans.map((p) => count(p.sites)) },
  { label: "Aktív folyamat", cells: ["1 aktív, sablonból", `${uzleti.workflows} aktív`, "korlátlan"] },
  { label: "Támogatás", cells: plans.map((p) => p.support) },
];

// Short sentences other pages use, so they never name a price of their own.
export const priceFacts = {
  from: `havi ${huf(alap.monthly)}-tól`,
  dkvAddOn: `az Alap csomaghoz kiegészítőként vehető meg, +${huf(DKV_ADDON.monthly)}/hó áron`,
  equipmentAddOn: `${EQUIPMENT_ADDON.size} eszközönként +${huf(EQUIPMENT_ADDON.monthly)}/hó`,
};

export const pricing = {
  title: `Yardly árak 2026: három csomag, ${TRIAL_DAYS} nap ingyen`,
  description: `Három csomag havi ${huf(alap.monthly)}-tól, éves fizetéssel ${ANNUAL_FREE_MONTHS} hónap ingyen. ${TRIAL_DAYS} napos próba a ${TRIAL_PLAN} csomag minden funkciójával.`,
  eyebrow: "Árak",
  h1: "Három csomag, a flotta és az eszközpark méretéhez",
  lead: `Minden csomagban benne van a Flotta és az Eszközpark modul, és a folyamatautomatizálás is. A díj a csomagban foglalt aktív járművekig fix, felette járművenként számolunk. ${TRIAL_DAYS} napig díjmentesen kipróbálhatja a ${TRIAL_PLAN} csomag minden funkciójával; bankkártya nem kell.`,
  toggle: { monthly: "Havi fizetés", annual: "Éves fizetés", free: `${ANNUAL_FREE_MONTHS} hónap ingyen` },
  perMonth: "/ hó",
  annualNote: (total) => `évente ${total} egy összegben`,
  monthlyNote: (annualMonthly) => `éves fizetéssel ${annualMonthly} / hó`,
  recommended: "Ajánlott",
  trialNote: `${TRIAL_DAYS} nap ingyen, a ${TRIAL_PLAN} csomag minden funkciójával. ${NO_VAT}`,
  limitsTitle: "Keretek",
  comparisonTitle: "Mi van az egyes csomagokban",
  comparisonNote: `${NO_VAT} Éves fizetésnél a csomagra és a kiegészítőkre is ${ANNUAL_FREE_MONTHS} hónap ingyenes.`,
  // How paying works, in three steps (sign-up without a card, nothing is billed during the trial,
  // then a payment request for the chosen plan, paid by transfer).
  payment: {
    eyebrow: "Fizetés",
    title: "Így indul, és így fizet",
    items: [
      { title: "Regisztrál, kártya nélkül", text: "Elég megadni a cégadatokat; bankkártya nem kell. Az appban kiválasztja, melyik csomaggal folytatná a próbaidő után." },
      { title: `${TRIAL_DAYS} napig ingyen próbálja`, text: `A próbaidő alatt a ${TRIAL_PLAN} csomag minden funkciója elérhető, és semmit nem számlázunk. A próbaidő vége előtt 7, 3 és 1 nappal e-mailben jelezzük, mi következik.` },
      { title: "Utána díjbekérő alapján fizet", text: "A választott csomagról havonta vagy évente díjbekérőt küldünk, 8 napos fizetési határidővel, és átutalással fizet. A befizetés után a számlát a rendszer automatikusan kiállítja és elküldi. Éves díjnál a megújulás előtt 30 és 7 nappal e-mailben jelezzük az összeget. Bármikor lemondható, a folyó időszak végére." },
    ],
    note: "A díjbekérőt és az elektronikus számlát a Billingo állítja ki. Ha egy díjbekérő a fizetési határidő után 30 nappal sincs kifizetve, a fiók zárolódik: ekkor csak a díjbekérők és a teljes adatexport érhetők el, amíg a befizetés be nem érkezik.",
  },
  cta: { eyebrow: "Kezdje el", title: `Próbálja ki ${TRIAL_DAYS} napig ingyen`, lead: `A ${TRIAL_PLAN} csomag minden funkciójával, a saját adataival.` },
  faq: {
    eyebrow: "Gyakori kérdések",
    title: "Gyakori kérdések az árakról",
    items: [
      { q: "Mi számít aktív járműnek?", a: "Minden jármű, amely nincs kivont állapotban. A kivont járművek adatai megmaradnak, de nem számítanak bele a keretbe és a díjba." },
      { q: "Mi történik, ha elérem a csomag keretét?", a: `A keret 80%-ánál figyelmeztetünk. A díjban foglalt járműszám felett minden további aktív jármű havidíjas (${plans.map((p) => `${p.name} ${huf(p.extra)}`).join(", ")}); ezt a jármű felvételekor jóváhagyja. A járműplafon felett, vagy ha elfogy az eszköz-, felhasználó- vagy telephelykeret, nagyobb csomagra válthat; eszközből ${EQUIPMENT_ADDON.size}-es bővítés is vehető. Adat ilyenkor sem törlődik.` },
      { q: "Hogyan számolják el a többletjárműveket?", a: "Utólag, a hónap legmagasabb aktív járműszáma alapján: havi fizetésnél havonta, éves fizetésnél negyedévente. A néhány napig aktív jármű is beszámít, ezért a használaton kívüli járművet érdemes kivontra állítani." },
      { q: "Válthatok csomagot? Lemondhatom?", a: "Nagyobb csomagra azonnal válthat, időarányos elszámolással; kisebbre a következő számlázási időszaktól. Hűségidő nincs: a havi előfizetés a hónap végével, az éves az év végével mondható le. Lemondás után a fiók 90 napig csak olvasható, és minden adat letölthető. Utána véglegesen töröljük, előtte 30 és 7 nappal e-mailben jelezzük." },
      { q: "Kell áfát fizetni?", a: `Nem. ${NO_VAT} A feltüntetett ár a teljes fizetendő összeg.` },
      { q: "Hogyan fizethetek?", a: "Díjbekérő alapján, banki átutalással, havonta vagy évente; bankkártyával nem lehet fizetni. A díjbekérőt e-mailben küldjük, és az appban is letölthető; a fizetési határidő 8 nap. A befizetés után a számlát a rendszer automatikusan kiállítja és elküldi; a díjbekérőket és a számlákat a Billingo állítja ki. Csomagot váltani, kiegészítőt venni és számlát letölteni az appban, a Beállítások → Előfizetés & számlázás fülön lehet." },
      { q: "Mi történik, ha késik a fizetés?", a: "A fizetési határidő után még 30 napig minden funkció elérhető, közben e-mailben emlékeztetünk. Ha a díjbekérő a határidő után 30 nappal sincs kifizetve, a fiók zárolódik: csak a ki nem fizetett díjbekérők és a teljes adatexport érhetők el. A befizetés beérkezése után a zárolás magától feloldódik." },
      { q: "Mi a helyzet a próbaidővel?", a: `${TRIAL_DAYS} napig díjmentesen használhatja a ${TRIAL_PLAN} csomag összes funkcióját, bankkártya nélkül. A végén a választott csomag első időszakáról díjbekérőt küldünk; előtte 7, 3 és 1 nappal e-mailben szólunk. A próbaidő végéig a csomag módosítható, vagy a folytatás lemondható: ekkor a fiók csak olvasható lesz, és az adatokat 90 napig megőrizzük.` },
    ],
  },
};
