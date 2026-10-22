// Árak. The numbers mirror the app's catalog (yardly-saas: backend/src/Flotta.Api/pricing.json).
// When a price, limit or feature status changes there, change it here too.
// All prices are net HUF per month; VAT is added on top.

export const VAT_PERCENT = 27;
export const ANNUAL_FREE_MONTHS = 2;
export const TRIAL_DAYS = 14;
export const SELF_SERVICE_MAX_VEHICLES = 300;

// "+250 eszköz": bought in packs above a plan's equipment limit (Alap and Üzleti; Prémium has no limit).
export const EQUIPMENT_ADDON = { size: 250, monthly: 4990, maxQuantity: 20 };

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
    highlights: [
      "25 aktív jármű a díjban, felette 990 Ft/jármű/hó + ÁFA (legfeljebb 40)",
      "100 eszköz, 10 felhasználó, 1 telephely",
      "1 aktív egyedi workflow, sablonból",
      "DKV-integráció kiegészítőként: +9 990 Ft/hó + ÁFA",
      "Támogatás e-mailben",
    ],
  },
  {
    key: "uzleti",
    name: "Üzleti",
    tagline: "Több telephelynek, saját folyamatokkal",
    recommended: true,
    monthly: 79990,
    annualMonthly: 66990,
    included: 75,
    extra: 890,
    ceiling: 150,
    equipment: 1000,
    users: null, // unlimited
    highlights: [
      "75 aktív jármű a díjban, felette 890 Ft/jármű/hó + ÁFA (legfeljebb 150)",
      "1 000 eszköz, korlátlan felhasználó és telephely",
      "10 aktív egyedi workflow",
      "Telefonos állapotfelmérés és QR-leltár",
      "Saját szerepkörök és jogosultsági mátrix",
      "Változásnapló (90 napos)",
      "Vezetői összefoglaló PDF",
      "DKV-integráció",
      "Támogatás 1 munkanapon belül",
    ],
  },
  {
    key: "premium",
    name: "Prémium",
    tagline: "Nagy flottának, analitikával",
    monthly: 169990,
    annualMonthly: 141990,
    included: 150,
    extra: 790,
    ceiling: 300,
    equipment: null, // unlimited
    users: null,
    highlights: [
      "150 aktív jármű a díjban, felette 790 Ft/jármű/hó + ÁFA (legfeljebb 300)",
      "Korlátlan eszköz, felhasználó és telephely",
      "Korlátlan egyedi workflow",
      "Minden, ami az Üzletiben",
      "Analitika, előrejelzés, csereajánlások",
      "Változásnapló korlátlanul, exporttal",
      "Beállítások átadása szerepköröknek",
      "Támogatás 4 munkaórán belül, kijelölt kapcsolattartóval",
    ],
  },
];

// The calculator's feature checkboxes: the smallest plan each one is in (a plan key). A feature
// a smaller plan can buy as an extra names that plan and its monthly price in addOn.
export const CALC_FEATURES = [
  { key: "sites", label: "Több telephely", plan: "uzleti" },
  { key: "workflows", label: "Több saját folyamat és automatizálás (legfeljebb 10)", plan: "uzleti" },
  { key: "inspections", label: "Telefonos állapotfelmérés", plan: "uzleti" },
  { key: "inventory", label: "Leltár telefonnal (QR, vonalkód)", plan: "uzleti" },
  { key: "roles", label: "Saját szerepkörök és jogosultsági mátrix", plan: "uzleti" },
  { key: "audit", label: "Változásnapló", plan: "uzleti" },
  { key: "summary", label: "Vezetői összefoglaló PDF", plan: "uzleti" },
  { key: "dkv", label: "DKV üzemanyagkártya-integráció", plan: "uzleti", addOn: { plan: "alap", name: "DKV-integráció", monthly: 9990 } },
  { key: "analytics", label: "Analitika, előrejelzés, csereajánlások", plan: "premium" },
  { key: "unlimitedWorkflows", label: "Korlátlan saját folyamat és automatizálás", plan: "premium" },
  { key: "auditExport", label: "Változásnapló korlátlanul, exporttal", plan: "premium" },
  { key: "delegation", label: "Beállítások átadása szerepköröknek", plan: "premium" },
];

// "Mi van az egyes csomagokban" — one row per feature, cells for Alap / Üzleti / Prémium.
// true = included, false = not included, a string = shown as written.
export const comparison = [
  { label: "Járművek, eszközök, dokumentumok, lejárat-riasztás, szerviz- és tankolási napló, karbantartási ütemterv, költségek, kárügyek, biztosítás, Excel-import és -export", cells: [true, true, true] },
  { label: "Telefonos állapotfelmérés", cells: [false, true, true] },
  { label: "Leltár telefonnal (QR, vonalkód)", cells: [false, true, true] },
  { label: "Saját szerepkörök és jogosultsági mátrix", cells: ["fix szerepkörök", true, true] },
  { label: "Változásnapló", cells: [false, "90 napos", "korlátlan + export"] },
  { label: "Vezetői összefoglaló PDF", cells: [false, true, true] },
  { label: "Analitika, előrejelzés, csereajánlások", cells: [false, false, true] },
  { label: "Beállítások átadása szerepköröknek", cells: [false, false, true] },
  { label: "DKV üzemanyagkártya-integráció", cells: ["kiegészítő: +9 990 Ft/hó + ÁFA", true, true] },
  { label: "+250 eszköz", cells: ["+4 990 Ft/hó + ÁFA", "+4 990 Ft/hó + ÁFA", "nem szükséges"] },
];

// The limits table under the cards.
export const limits = [
  { label: "Aktív jármű a díjban", cells: ["25", "75", "150"] },
  { label: "További jármű", cells: ["+990 Ft/hó + ÁFA, legfeljebb 40-ig", "+890 Ft/hó + ÁFA, legfeljebb 150-ig", "+790 Ft/hó + ÁFA, legfeljebb 300-ig"] },
  { label: "Eszköz", cells: ["100", "1 000", "korlátlan"] },
  { label: "Felhasználó", cells: ["10", "korlátlan", "korlátlan"] },
  { label: "Telephely", cells: ["1", "korlátlan", "korlátlan"] },
  { label: "Egyedi workflow", cells: ["1 aktív, sablonból", "10 aktív", "korlátlan"] },
  { label: "Támogatás", cells: ["e-mailben", "1 munkanapon belül", "4 munkaórán belül, kijelölt kapcsolattartóval"] },
];

export const pricing = {
  title: "Árak – Yardly flottakezelő rendszer",
  description: "Három csomag havi 29 990 Ft + ÁFA-tól, éves fizetéssel 2 hónap ingyen. Kalkulátor a járművei, eszközei, felhasználói és a szükséges funkciók alapján.",
  eyebrow: "Árak",
  h1: "Egy csomag, a flottája méretéhez igazítva",
  lead: "Minden csomagban benne van a Flotta és az Eszközpark modul. A díj a csomagban foglalt aktív járművekig fix, felette járművenként számolunk. 14 napig díjmentesen kipróbálhatja a Prémium csomag minden funkciójával. A regisztrációhoz bankkártya kell, de a próbaidő alatt nem terhelünk semmit.",
  toggle: { monthly: "Havi fizetés", annual: "Éves fizetés", free: "2 hónap ingyen" },
  perMonth: "+ ÁFA / hó",
  annualNote: (total) => `évente ${total} + ÁFA egy összegben`,
  monthlyNote: (annualMonthly) => `éves fizetéssel ${annualMonthly} + ÁFA / hó`,
  recommended: "Ajánlott",
  limitsTitle: "Keretek",
  comparisonTitle: "Mi van az egyes csomagokban",
  comparisonNote: "Minden ár nettó, + 27% ÁFA. Éves fizetésnél a csomagra és a kiegészítőkre is 2 hónap ingyenes.",
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
    lineEquipment: (packs, price) => `${packs} × 250 eszköz bővítés × ${price}`,
    lineGross: "Bruttó, 27% ÁFA-val",
    unlimited: "korlátlan",
    max: (n) => `legfeljebb ${n} jármű`,
    maxEquipment: (n) => `legfeljebb ${n} eszköz`,
    maxUsers: (n) => `legfeljebb ${n} felhasználó`,
    missing: (feature) => `nincs benne: ${feature}`,
    lineAddOn: (name) => `${name} kiegészítő`,
    equipmentNote: "Eszközből a csomag kerete felett 250 darabonként +4 990 Ft/hó + ÁFA bővítést vásárolhat (Alap, Üzleti). A Prémiumban korlátlan az eszköz.",
    noteMonthly: "A többletjárművet havonta utólag számoljuk, a hónap legmagasabb aktív járműszáma alapján.",
    noteAnnual: "Éves fizetésnél a csomag díját egy összegben, előre fizeti. A többletjárművet negyedévente utólag számoljuk, a negyedév havi csúcsai alapján.",
  },
  faq: {
    eyebrow: "Gyakori kérdések",
    title: "Gyakori kérdések az árakról",
    items: [
      { q: "Mi számít aktív járműnek?", a: "Minden jármű, amely nincs kivont állapotban. A kivont járművek adatai megmaradnak, de nem számítanak bele a keretbe és a díjba." },
      { q: "Mi történik, ha elérem a csomag keretét?", a: "A keret 80%-ánál figyelmeztetünk. A csomagban foglalt járműszám felett minden további aktív jármű havidíjas (Alap 990, Üzleti 890, Prémium 790 Ft + ÁFA); ezt a jármű felvételekor jóváhagyja. A járműplafon felett, vagy ha elfogy az eszköz-, felhasználó- vagy telephelykeret, nagyobb csomagra válthat; eszközből +250-es bővítést is vásárolhat. Adatot sosem törlünk." },
      { q: "Válthatok csomagot? Lemondhatom?", a: "Nagyobb csomagra azonnal válthat, a hátralévő időszakra időarányosan számolunk. Kisebb csomagra a következő számlázási időszaktól vált. Nincs hűségidő: a havi előfizetés a hónap végével, az éves az év végével mondható le. Ilyenkor sem törlődik semmi, a keret feletti adatok olvashatók maradnak." },
      { q: "Az árak tartalmazzák az ÁFA-t?", a: "Nem. Minden ár nettó, erre jön a 27% ÁFA. A számlán tételesen látszik a nettó összeg, az ÁFA és a bruttó végösszeg." },
      { q: "Hogyan fizethetek?", a: "Bankkártyával, havonta vagy évente. Az Üzleti és a Prémium csomag éves díja átutalással, díjbekérő alapján is fizethető. Csomagot váltani, kiegészítőt venni és a számlákat letölteni az appban, a Beállítások → Előfizetés fülön tudja, árajánlattal a váltás előtt." },
      { q: "Mi a helyzet a próbaidővel?", a: "14 napig díjmentesen kipróbálhatja a Prémium csomag összes funkciójával. A regisztrációkor meg kell adnia egy bankkártyát, de a próbaidő alatt semmit nem terhelünk rá. A végén csomagot választ; ha nem, a fiók csak olvasható lesz, és minden adata megmarad." },
      { q: "Régi előfizető vagyok. Mi változik?", a: "12 hónapig a régi csomagja és ára marad. A lejárat előtt 60 és 30 nappal e-mailben szólunk, utána automatikusan az új csomagra kerül. Bármikor önként is átválthat." },
    ],
  },
  quote: {
    eyebrow: "Egyedi ajánlat",
    title: "300 jármű felett? Kérjen egyedi ajánlatot.",
    text: "Egy munkanapon belül jelentkezünk, és a flottája méretéhez igazított árat adunk.",
    button: "Ajánlatot kérek",
  },
};
