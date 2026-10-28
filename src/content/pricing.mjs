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
    support: "1 munkanapon belül",
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
    support: "4 munkaórán belül, kijelölt kapcsolattartóval",
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
  `Támogatás ${uzleti.support}`,
];
premium.highlights = [
  `${premium.included} aktív jármű a díjban, felette ${huf(premium.extra)}/jármű/hó (legfeljebb ${premium.ceiling})`,
  "Korlátlan eszköz, felhasználó és telephely",
  "Korlátlan számú folyamat",
  "Minden, ami az Üzletiben",
  "Analitika, előrejelzés, csereajánlások",
  "Teams- és Slack-üzenet folyamatból",
  "Változásnapló exporttal, állítható megőrzéssel",
  "Beállítások átadása szerepköröknek",
  `Támogatás ${premium.support}`,
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
  { label: "Teams- és Slack-üzenet folyamatból", cells: [false, false, true] },
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
  lead: `Minden csomagban benne van a Flotta és az Eszközpark modul, és a folyamatautomatizálás is. A díj a csomagban foglalt aktív járművekig fix, felette járművenként számolunk. ${TRIAL_DAYS} napig díjmentesen kipróbálhatja a ${TRIAL_PLAN} csomag minden funkciójával; a regisztrációhoz bankkártya kell, de a próbaidő alatt nem terhelünk semmit.`,
  toggle: { monthly: "Havi fizetés", annual: "Éves fizetés", free: `${ANNUAL_FREE_MONTHS} hónap ingyen` },
  perMonth: "/ hó",
  annualNote: (total) => `évente ${total} egy összegben`,
  monthlyNote: (annualMonthly) => `éves fizetéssel ${annualMonthly} / hó`,
  recommended: "Ajánlott",
  trialNote: `${TRIAL_DAYS} nap ingyen, a ${TRIAL_PLAN} csomag minden funkciójával. ${NO_VAT}`,
  limitsTitle: "Keretek",
  comparisonTitle: "Mi van az egyes csomagokban",
  comparisonNote: `${NO_VAT} Éves fizetésnél a csomagra és a kiegészítőkre is ${ANNUAL_FREE_MONTHS} hónap ingyenes.`,
  // How paying works, in three steps (the card is registered at sign-up, nothing is charged
  // during the trial, then the chosen plan is charged).
  payment: {
    eyebrow: "Fizetés",
    title: "Így indul, és így fizet",
    items: [
      { title: "Regisztrál, és megad egy bankkártyát", text: "A kártyát a Barion biztonságos oldalán adja meg; a kártyaadatokat a Yardly nem látja és nem tárolja. Itt választja ki azt is, melyik csomaggal folytatná." },
      { title: `${TRIAL_DAYS} napig ingyen próbálja`, text: `A próbaidő alatt a ${TRIAL_PLAN} csomag minden funkciója elérhető, és nem terhelünk semmit. A terhelés előtt 7, 3 és 1 nappal e-mailben jelezzük az összeget és az időpontot.` },
      { title: "Utána a választott csomagot fizeti", text: "Havonta vagy évente a kártyáról. Az Üzleti és a Prémium éves díja díjbekérő alapján, átutalással is fizethető. Az elektronikus számlát a Billingo állítja ki." },
    ],
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
      { q: "Hogyan fizethetek?", a: "Bankkártyával, havonta vagy évente, a Barion oldalán megadott kártyáról. Az Üzleti és a Prémium éves díja díjbekérő alapján, átutalással is fizethető. A számlát a Billingo állítja ki. Csomagot váltani, kiegészítőt venni és számlát letölteni az appban, a Beállítások → Előfizetés & számlázás fülön lehet." },
      { q: "Mi a helyzet a próbaidővel?", a: `${TRIAL_DAYS} napig díjmentesen használhatja a ${TRIAL_PLAN} csomag összes funkcióját. A regisztrációkor megadott kártyát a próbaidő alatt nem terheljük; a végén a választott csomag díját vonjuk le, előtte 7, 3 és 1 nappal e-mailben szólunk. A próbaidő végéig a csomag módosítható, vagy a folytatás lemondható: ekkor a fiók csak olvasható lesz, és az adatokat 90 napig megőrizzük.` },
    ],
  },
};
