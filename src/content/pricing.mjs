// Árak. The numbers mirror the app's catalog (yardly-saas: backend/src/Flotta.Api/pricing.json).
// When a price, limit or feature changes there, change it here: every price on the site (the
// price page and its calculator, the home page, the solution pages, posts and guides) comes from
// this file. Prices are per month, in HUF. The seller is VAT-exempt (alanyi adómentes), so a
// price is the amount paid: no VAT is added and none is shown.

export const TRIAL_DAYS = 14;
export const ANNUAL_FREE_MONTHS = 2;
export const SELF_SERVICE_MAX_VEHICLES = 300;
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
    monthly: 79990,
    annualMonthly: 66650,
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
    monthly: 169990,
    annualMonthly: 141650,
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
  "1 aktív saját folyamat, sablonból",
  `DKV-integráció kiegészítőként: +${huf(DKV_ADDON.monthly)}/hó`,
  `Támogatás ${alap.support}`,
];
uzleti.highlights = [
  `${uzleti.included} aktív jármű a díjban, felette ${huf(uzleti.extra)}/jármű/hó (legfeljebb ${uzleti.ceiling})`,
  `${num(uzleti.equipment)} eszköz, korlátlan felhasználó és telephely`,
  `${uzleti.workflows} aktív saját folyamat`,
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
  "Korlátlan saját folyamat",
  "Minden, ami az Üzletiben",
  "Analitika, előrejelzés, csereajánlások",
  "Teams- és Slack-üzenet automatizálásból",
  "Változásnapló exporttal, állítható megőrzéssel",
  "Beállítások átadása szerepköröknek",
  `Támogatás ${premium.support}`,
];

// The calculator's feature checkboxes: the smallest plan each one is in (a plan key). A feature
// a smaller plan can buy as an extra names that plan and its monthly price in addOn.
export const CALC_FEATURES = [
  { key: "sites", label: "Több telephely", plan: "uzleti" },
  { key: "workflows", label: `Több saját folyamat és automatizálás (legfeljebb ${uzleti.workflows})`, plan: "uzleti" },
  { key: "inspections", label: "Telefonos állapotfelmérés", plan: "uzleti" },
  { key: "inventory", label: "Leltár telefonnal (QR, vonalkód)", plan: "uzleti" },
  { key: "roles", label: "Saját szerepkörök és jogosultsági mátrix", plan: "uzleti" },
  { key: "audit", label: "Változásnapló", plan: "uzleti" },
  { key: "summary", label: "Vezetői összefoglaló PDF", plan: "uzleti" },
  { key: "dkv", label: "DKV üzemanyagkártya-integráció", plan: "uzleti", addOn: DKV_ADDON },
  { key: "analytics", label: "Analitika, előrejelzés, csereajánlások", plan: "premium" },
  { key: "webhooks", label: "Teams- és Slack-üzenet automatizálásból", plan: "premium" },
  { key: "unlimitedWorkflows", label: "Korlátlan saját folyamat és automatizálás", plan: "premium" },
  { key: "auditExport", label: "Változásnapló exporttal, állítható megőrzéssel", plan: "premium" },
  { key: "delegation", label: "Beállítások átadása szerepköröknek", plan: "premium" },
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
  { label: "Teams- és Slack-üzenet automatizálásból", cells: [false, false, true] },
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
  { label: "Saját folyamat", cells: ["1 aktív, sablonból", `${uzleti.workflows} aktív`, "korlátlan"] },
  { label: "Támogatás", cells: plans.map((p) => p.support) },
];

// Short sentences other pages use, so they never name a price of their own.
export const priceFacts = {
  from: `havi ${huf(alap.monthly)}-tól`,
  dkvAddOn: `az Alap csomaghoz kiegészítőként vehető meg, +${huf(DKV_ADDON.monthly)}/hó áron`,
  equipmentAddOn: `${EQUIPMENT_ADDON.size} eszközönként +${huf(EQUIPMENT_ADDON.monthly)}/hó`,
};

export const pricing = {
  title: "Flottakezelő szoftver árak 2026: csomagok és díjak – Yardly",
  description: `Három csomag havi ${huf(alap.monthly)}-tól, éves fizetéssel ${ANNUAL_FREE_MONTHS} hónap ingyen. ${TRIAL_DAYS} napos próbaidő a ${TRIAL_PLAN} csomag minden funkciójával. Kalkulátor a járművei, eszközei, felhasználói és a szükséges funkciók alapján.`,
  eyebrow: "Árak",
  h1: "Flottakezelő szoftver árak: három csomag a flotta méretéhez",
  lead: `Minden csomagban benne van a Flotta és az Eszközpark modul. A díj a csomagban foglalt aktív járművekig fix, felette járművenként számolunk. ${TRIAL_DAYS} napig díjmentesen kipróbálhatja a ${TRIAL_PLAN} csomag minden funkciójával. A regisztrációhoz bankkártya kell, de a próbaidő alatt nem terhelünk semmit.`,
  toggle: { monthly: "Havi fizetés", annual: "Éves fizetés", free: `${ANNUAL_FREE_MONTHS} hónap ingyen` },
  perMonth: "/ hó",
  annualNote: (total) => `évente ${total} egy összegben`,
  monthlyNote: (annualMonthly) => `éves fizetéssel ${annualMonthly} / hó`,
  recommended: "Ajánlott",
  trialNote: `${TRIAL_DAYS} nap ingyen, a ${TRIAL_PLAN} csomag minden funkciójával. ${NO_VAT}`,
  limitsTitle: "Keretek",
  comparisonTitle: "Mi van az egyes csomagokban",
  comparisonNote: `${NO_VAT} Éves fizetésnél a csomagra és a kiegészítőkre is ${ANNUAL_FREE_MONTHS} hónap ingyenes.`,
  calc: {
    eyebrow: "Kalkulátor",
    title: "Mennyibe kerül az Ön flottájának?",
    label: "Aktív járművek száma",
    equipmentLabel: "Eszközök száma",
    equipmentHint: "Targoncák, laptopok, szerszámok, gépek: minden, amit nyilván szeretne tartani.",
    usersLabel: "Felhasználók száma",
    usersHint: "Akik bejelentkeznek a Yardlyba: flottavezetők, sofőrök, raktárosok.",
    featuresLabel: "Milyen funkciókra van szüksége?",
    featuresHint: "Az alapok (járművek, eszközök, dokumentumok, lejárat-riasztás, szerviz, tankolás, költségek, kárügyek) minden csomagban benne vannak. A kalkulátor azt a legkisebb csomagot választja, amelyben minden kiválasztott funkció megvan.",
    resultTier: (plan, n, e, u) => `${plan} csomag · ${n} jármű · ${e} eszköz · ${u} felhasználó`,
    lineBase: (plan, included, equipment) => `${plan} csomag (${included} jármű, ${equipment} eszköz benne)`,
    lineExtra: (n, price) => `${n} többletjármű × ${price}`,
    lineEquipment: (packs, price) => `${packs} × ${EQUIPMENT_ADDON.size} eszköz bővítés × ${price}`,
    unlimited: "korlátlan",
    max: (n) => `legfeljebb ${n} jármű`,
    maxEquipment: (n) => `legfeljebb ${n} eszköz`,
    maxUsers: (n) => `legfeljebb ${n} felhasználó`,
    missing: (feature) => `nincs benne: ${feature}`,
    lineAddOn: (name) => `${name} kiegészítő`,
    equipmentNote: `Eszközből a csomag kerete felett ${priceFacts.equipmentAddOn} bővítést vásárolhat (Alap, Üzleti). A Prémiumban korlátlan az eszköz.`,
    noteMonthly: "A többletjárművet havonta utólag számoljuk, a hónap legmagasabb aktív járműszáma alapján.",
    noteAnnual: "Éves fizetésnél a csomag díját egy összegben, előre fizeti. A többletjárművet negyedévente utólag számoljuk, a negyedév havi csúcsai alapján.",
  },
  // How paying works, in three steps (the card is registered at sign-up, nothing is charged
  // during the trial, then the chosen plan is charged).
  payment: {
    eyebrow: "Fizetés",
    title: "Így indul, és így fizet",
    items: [
      { title: "Regisztrál, és megad egy bankkártyát", text: "A kártyát a Barion biztonságos oldalán adja meg; a kártyaadatokat a Yardly nem látja és nem tárolja. Itt választja ki azt is, melyik csomaggal folytatná." },
      { title: `${TRIAL_DAYS} napig ingyen próbálja`, text: `A próbaidő alatt a ${TRIAL_PLAN} csomag minden funkciója az Öné, és semmit nem terhelünk. Előtte 3 és 1 nappal e-mailben emlékeztetjük.` },
      { title: "Utána a választott csomagot fizeti", text: "A próbaidő végén a választott csomag díját terheljük a kártyára, havonta vagy évente. Az Üzleti és a Prémium éves díja díjbekérő alapján, átutalással is fizethető. Az elektronikus számlát a Billingo állítja ki." },
    ],
  },
  faq: {
    eyebrow: "Gyakori kérdések",
    title: "Gyakori kérdések az árakról",
    items: [
      { q: "Mi számít aktív járműnek?", a: "Minden jármű, amely nincs kivont állapotban. A kivont járművek adatai megmaradnak, de nem számítanak bele a keretbe és a díjba." },
      { q: "Mi történik, ha elérem a csomag keretét?", a: `A keret 80%-ánál figyelmeztetünk. A csomagban foglalt járműszám felett minden további aktív jármű havidíjas (${plans.map((p) => `${p.name} ${huf(p.extra)}`).join(", ")}); ezt a jármű felvételekor jóváhagyja. A járműplafon felett, vagy ha elfogy az eszköz-, felhasználó- vagy telephelykeret, nagyobb csomagra válthat; eszközből +${EQUIPMENT_ADDON.size}-es bővítést is vásárolhat. A keret elérése miatt semmilyen adat nem törlődik.` },
      { q: "Hogyan számolják el a többletjárműveket?", a: "Utólag, a legmagasabb aktív járműszám alapján: havi fizetésnél havonta, éves fizetésnél negyedévente. Ha egy hónapban csak pár napig volt több jármű, az is számít, ezért a kivont járművet érdemes kivontra állítani." },
      { q: "Válthatok csomagot? Lemondhatom?", a: "Nagyobb csomagra azonnal válthat, a hátralévő időszakra időarányosan számolunk. Kisebb csomagra a következő számlázási időszaktól vált. Nincs hűségidő: a havi előfizetés a hónap végével, az éves az év végével mondható le. Kisebb csomagra váltáskor semmi nem törlődik, a keret feletti adatok olvashatók maradnak. Lemondás után a fiók 90 napig csak olvasható, ezalatt minden adat letölthető; utána véglegesen töröljük, előtte 30 és 7 nappal e-mailben szólunk." },
      { q: "Kell áfát fizetni?", a: `Nem. ${NO_VAT} A feltüntetett ár a teljes fizetendő összeg.` },
      { q: "Hogyan fizethetek?", a: "Bankkártyával, havonta vagy évente: a kártyát a regisztrációkor adja meg a Barion oldalán, és a díjat erről terheljük. Az Üzleti és a Prémium csomag éves díja díjbekérő alapján, átutalással is fizethető. Az elektronikus számlát a Billingo állítja ki. Csomagot váltani, kiegészítőt venni és a számlákat letölteni az appban, a Beállítások → Előfizetés & számlázás fülön tudja." },
      { q: "Mi a helyzet a próbaidővel?", a: `${TRIAL_DAYS} napig díjmentesen kipróbálhatja a ${TRIAL_PLAN} csomag összes funkciójával. A regisztrációkor megad egy bankkártyát, és kiválasztja, melyik csomaggal folytatná; a próbaidő alatt semmit nem terhelünk. A próbaidő végén ennek a csomagnak a díját terheljük a kártyára, előtte 3 és 1 nappal e-mailben emlékeztetjük. A próbaidő végéig a csomagot bármikor módosíthatja, vagy lemondhatja a folytatást: ekkor a fiók csak olvasható lesz, az adatokat pedig 90 napig megőrizzük, utána véglegesen töröljük.` },
    ],
  },
};
