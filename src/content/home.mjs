// Főoldal. One promise: a record of the fleet and the equipment from which the company's own
// processes start by themselves — record, watch, process. Sections follow the visitor's
// questions: what is it, where does the time go now, what starts the processes, what is kept on
// record, how do deadlines and data flow, how do I start, is it for me, what does it cost.

import { ANNUAL_FREE_MONTHS, NO_VAT, TRIAL_DAYS, TRIAL_PLAN } from "./pricing.mjs";
import { PROCESS_TEMPLATES as TEMPLATES } from "./solutions.mjs";


export const home = {
  title: "Flotta- és eszköznyilvántartás folyamatautomatizálással – Yardly",
  description: `Járművek, eszközök, határidők és a hozzájuk tartozó jóváhagyások egy rendszerben. A rögzített adatból maguktól indulnak a folyamatok. ${TRIAL_DAYS} nap ingyen.`,

  hero: {
    eyebrow: "Üzemeltetési rendszer flottához és eszközparkhoz",
    title: "Nyilvántartás, amelyből a folyamatok maguktól elindulnak",
    lead: "A Yardly nyilvántartja a járműveket és az eszközöket, figyeli a határidőket, és egy tankolás, szerviz vagy kárügy rögzítésekor elindítja a jóváhagyást, az értesítést és a PDF-et. A folyamatokat Ön állítja össze, a cég saját szabályai szerint.",
    shotAlt: "A Yardly irányítópultja: elöl a közelgő és lejárt határidők, alatta a fő mutatók",
    phoneAlt: "A telefonos állapotfelmérő űrlap",
  },

  trust: [
    { icon: "upload", text: "Excel-import sablonnal, a meglévő nyilvántartásból" },
    { icon: "eye", text: "Böngészőben és telefonon, telepítés nélkül" },
    { icon: "lock", text: "Kétlépcsős belépés, titkosított kapcsolat, EU-s adatközpont" },
    { icon: "flag", text: "Magyar felület, magyar támogatás" },
  ],

  problems: {
    eyebrow: "Ismerős helyzetek",
    title: "Ahol a legtöbb idő elmegy",
    items: [
      { quote: "A folyamat egy Excel-táblában él.", text: "Egy jóváhagyáshoz több fájlt kell egyeztetni, és csak egy kolléga tudja, melyik az érvényes. A Yardlyban a lépések, a felelősök és a határidők egy helyen vannak, a következő lépés magától indul." },
      { quote: "Nem látszik, melyik eszköz kerül a legtöbbe.", text: "A teljes költség ismert, eszközönként nem. A Yardly a tankolást, a szervizt, a biztosítást és a bérleti díjat járművenként és eszközönként összesíti, Ft/km-ben is." },
      { quote: "A leltár többször bejárja a telephelyet.", text: "A lista sorrendje nem követi a raktár elrendezését, így a leltározó oda-vissza jár. Telefonos leltárnál a kolléga abban a sorrendben olvassa be a címkéket, ahogy halad, a végén pedig látszik, mi hiányzik." },
    ],
    button: "Megoldásaink",
  },

  automation: {
    eyebrow: "Folyamatautomatizálás",
    title: "Egy bejegyzés elindítja a folyamatot",
    text: "Egy tankolás, szerviz, kárügy, bírság vagy új kolléga rögzítése után a Yardly végigviszi a cég által meghatározott lépéseket. Minden lépés a felelőse Teendőim listájában vár, határidővel.",
    points: [
      "Indulhat bejegyzésre, időpontra vagy feltételre, például 200 000 km felett vagy keretátlépéskor",
      "Szabály összeghatárral: 100 000 Ft felett vezetői jóváhagyás kell",
      "Automatikus lépések: PDF, e-mail akár a könyvelőnek, állapotváltás, új bejelentés",
      `${TEMPLATES} kész folyamatsablon, vizuális szerkesztőben módosítható`,
    ],
    link: "Folyamatok és automatizálás",
    slug: "folyamatok",
    img: "folyamatszerkeszto",
    alt: "A folyamatszerkesztő: árajánlat, vezetői jóváhagyás összeghatárral, javítás",
  },

  modules: {
    eyebrow: "Nyilvántartás",
    title: "A flotta és az eszközpark egy rendszerben",
    lead: "Minden csomagban mindkét modul benne van, ugyanazzal az irányítópulttal, riasztással és folyamatkezeléssel. Azt használja, amelyikre szüksége van.",
    items: [
      {
        name: "Flotta",
        text: "Járművek szervizzel, tankolással, kárügyekkel, biztosítással, tartozékokkal és dokumentumokkal. Minden járműnek adatlapja van, rajta a teljes előélet.",
        link: "Flotta",
        slug: "jarmunyilvantartas",
        img: "jarmu-adatlap",
        alt: "Egy jármű adatlapja",
      },
      {
        name: "Eszközpark",
        text: "Targoncától a laptopig minden, amit nyilván kell tartani. Kategóriánként saját jellemzők, hely a polcig, felelős, szerviz és karbantartási ütemterv. A leltár telefonnal készül.",
        link: "Eszközpark",
        slug: "eszkoznyilvantartas",
        img: "eszkozok",
        alt: "Az eszközpark egy kategóriája a saját jellemzőkkel",
      },
    ],
  },

  alerts: {
    eyebrow: "Határidők",
    title: "A rendszer szól, mielőtt valami lejár",
    text: "A Yardly figyeli a forgalmik, műszakik, biztosítások, jogosítványok és szervizek határidejét. Ön dönti el, hány nappal előtte és kinek szóljon. A címzettek naponta egy összesített e-mailt kapnak.",
    points: [
      "30, 14, 7 és 1 nappal előtte, vagy egyedi ütemezés szerint",
      "km-alapú szerviznél a km-óra állása alapján",
      "a flottavezetőnek és az érintett kollégának is",
    ],
    link: "Riasztások és emlékeztetők",
    board: {
      title: "Közelgő esedékességek",
      summary: "2 lejárt · 3 esedékes",
      items: [
        { name: "AA BC-512", what: "Műszaki vizsga", status: "Lejárt", tone: "bad" },
        { name: "Linde H20", what: "Hatósági vizsga", status: "8 nap", tone: "warn" },
        { name: "JTR-348", what: "Nagy szerviz · 1 800 km", status: "14 nap", tone: "warn" },
        { name: "Gábor Szabó", what: "Jogosítvány", status: "Lejárt", tone: "bad" },
        { name: "SKZ-481", what: "Casco biztosítás", status: "32 nap", tone: "ok" },
      ],
    },
  },

  // The data and notification channels built into the app, which the company switches on itself:
  // the DKV fuel card, Excel and CSV files, e-mail, the daily alert digest and the Teendőim list.
  // No custom connection to the company's other systems: we do not build those.
  integrations: {
    eyebrow: "Adatok és értesítések",
    title: "Adat be, adat ki, értesítés a megfelelő helyre",
    lead: "A beépített csatornákat a Beállításokban kapcsolja be, fejlesztés nélkül. A tankolások maguktól bejönnek, az adatok Excelben és CSV-ben vihetők tovább, az értesítések e-mailben és a Teendőim listában érkeznek.",
    points: [
      "DKV üzemanyagkártya: a tankolások 6 óránként maguktól a járművekhez kerülnek",
      "Excel-import sablonnal, Excel- és CSV-export, teljes adatexport bármikor",
      "Automatikus e-mail PDF-ekkel, akár külső címre, például a könyvelőnek",
      "Napi összesített riasztás e-mailben, a feladatok a felelős Teendőim listájában",
    ],
    link: "Folyamatok és automatizálás",
    slug: "folyamatok",
    hubLabel: "A Yardly középen, körülötte a beépített adat- és értesítési csatornák",
    // Eight tiles round the Yardly tile: four before it, four after (3 × 3 on a wide screen).
    hub: [
      { icon: "fuel", label: "DKV-kártya" },
      { icon: "upload", label: "Excel-import" },
      { icon: "download", label: "Excel-export" },
      { icon: "file-text", label: "CSV-riportok" },
      { icon: "file-check", label: "PDF-riportok" },
      { icon: "mail", label: "E-mail" },
      { icon: "bell", label: "Riasztások" },
      { icon: "list-checks", label: "Teendőim" },
    ],
  },

  features: {
    eyebrow: "Funkciók",
    title: "Amit a Yardly a napi munkában elvégez",
    items: [
      { slug: "folyamatok", title: "Folyamatok és automatizálás", text: "Egy tankolás, szerviz, kárügy vagy bírság rögzítése elindítja a jóváhagyást, az értesítést és a PDF-et." },
      { slug: "iranyitopult", title: "Irányítópult", text: "Belépéskor elöl a lejárt és közelgő határidők, hátralévő napokkal és kilométerekkel." },
      { slug: "dokumentumok", title: "Dokumentumok", text: "Forgalmi, műszaki, casco és jogosítvány egy helyen, lejárattal és verziókkal." },
      { slug: "szerviz-karbantartas", title: "Szerviz és ütemterv", text: "Km vagy idő szerinti karbantartás, amelyik előbb esedékes. Az elvégzett szerviz egy kattintással rögzíthető." },
      { slug: "allapotfelmeres", title: "Állapotfelmérés telefonról", text: "A sofőr egy linkről tölti ki a cég ellenőrzőlistáját, belépés nélkül." },
      { slug: "leltar", title: "Leltár kamerával", text: "A kolléga beolvassa a címkéket. A lista nem látszik előre, így a számlálás valós." },
      { slug: "tankolas-dkv", title: "DKV-integráció", text: "A kártyás tankolások 6 óránként a megfelelő járműhöz kerülnek." },
      { slug: "koltsegek-riportok", title: "Költségek és analitika", text: "Ft/km járművenként, vezetői összefoglaló PDF-ben, és azok az autók, amelyeket már érdemes lecserélni." },
    ],
    all: "Az összes funkció",
  },

  // id="indulas": /hogyan-dolgozunk/ redirects here.
  steps: {
    eyebrow: "Hogyan kezdjen bele",
    title: "Három lépés az első éles folyamatig",
    items: [
      { title: "Regisztrál.", text: `Két perc, a cégadatokkal; bankkártya nem kell. ${TRIAL_DAYS} napig minden funkciót kipróbálhat, a próbaidő alatt semmit nem számlázunk.` },
      { title: "Áthozza a meglévő adatokat.", text: "Letölti az Excel-sablont, bemásolja a listáját, és feltölti. A hiányzó telephelyek, típusok és kategóriák maguktól létrejönnek." },
      { title: "Meghívja a kollégákat, és élesít egy folyamatot.", text: `Mindenki a saját szerepkörével lép be: a sofőr csak a saját autóját látja, a pénzügy a költségeket. A ${TEMPLATES} kész sablon közül kiválasztja az elsőt, átnézi és élesíti.` },
    ],
  },

  personas: {
    eyebrow: "Kinek szól",
    title: "Kinek mit ad a Yardly",
    items: [
      { title: "Flottavezetőknek", text: "Minden jármű, határidő és szerviz egy listában; a jóváhagyások a Teendőim között várnak." },
      { title: "Raktár- és telephelyvezetőknek", text: "Hely a polcig, leltár telefonnal, eszközszerviz ütemterv szerint." },
      { title: "Ügyvezetőknek és a pénzügynek", text: "Havi és éves költség, Ft/km, vezetői összefoglaló PDF-ben, csereajánlások." },
      { title: "Az IT-nak", text: "Kétlépcsős belépés, jogosultsági mátrix, változásnapló, EU-s adatközpont." },
      { title: "Sofőröknek és kollégáknak", text: "Tankolás, kár, hibabejelentés és ellenőrzőlista telefonról." },
    ],
  },

  mobile: {
    eyebrow: "Mobilon és biztonságosan",
    title: "Az irodában és a telephelyen is",
    text: "A Yardly böngészőben fut, telefonon is teljes funkcionalitással, a kollégáknak nem kell semmit telepíteniük. Az adatokat kétlépcsős belépés, titkosított kapcsolat és cégenként elkülönített tárolás védi. Minden módosítás naplózva van.",
    link: "Biztonság részletesen",
    phoneAlt: "A leltár összesítése telefonon",
  },

  pricing: {
    eyebrow: "Árak",
    title: "Három csomag, a flotta méretéhez",
    note: `Éves fizetéssel ${ANNUAL_FREE_MONTHS} hónap ingyen. ${NO_VAT}`,
    button: "Összes ár és csomag",
  },

  faq: {
    eyebrow: "Gyakori kérdések",
    title: "Gyakori kérdések",
    lead: "Ha nem találja a választ, írjon nekünk.",
    items: [
      { q: "Kell telepíteni valamit?", a: "Nem. A Yardly böngészőben fut, számítógépen és telefonon is." },
      { q: "Miben más, mint egy flottakezelő program?", a: "A Yardly a nyilvántartás mellett a hozzá tartozó folyamatokat is kezeli: egy bejegyzésből a cég szabályai szerint jóváhagyás, értesítés, PDF és e-mail lesz. Ugyanebben a rendszerben a flotta mellett az eszközpark és a leltár is kezelhető." },
      { q: "Hogyan kerülnek be a meglévő adataink?", a: "Excel-sablonnal, egyszerre. A rendszer soronként jelzi, ha valamit javítani kell." },
      { q: "Mi történik a próbaidő végén?", a: "A választott csomag első időszakáról díjbekérőt küldünk, havi vagy éves díjjal; átutalással fizet, és a befizetés után a számlát automatikusan megkapja. Előtte 7, 3 és 1 nappal e-mailben jelezzük az összeget. A próbaidő végéig a csomag módosítható, vagy a folytatás lemondható: ekkor a fiók csak olvasható lesz, az adatokat 90 napig megőrizzük és letölthetők, utána véglegesen töröljük." },
      { q: "Milyen más programokkal cserél adatot?", a: "A DKV-kártyás tankolásokat a Yardly maga hívja le, ha a Beállításokban megadja a DKV-hozzáférést. Más programokkal Excel- és CSV-fájlokon keresztül cserél adatot. A folyamatok PDF-eket küldenek e-mailben, akár külső címre. Egyedi rendszerösszekötést nem készítünk." },
      { q: "Csak a flottához vagy csak az eszközökhöz is használható?", a: "Igen. Minden csomagban mindkét modul benne van; azt használja, amelyikre szüksége van." },
      { q: "Hol tárolódnak az adataink?", a: "Az Amazon Web Services frankfurti adatközpontjában, az EU-ban. Titkosított kapcsolaton érhetők el, és minden cég csak a saját adatait látja." },
      { q: "Megnézhetjük előbb?", a: `Igen. ${TRIAL_DAYS} napig a saját adataival kipróbálhatja, vagy egy 30 perces online bemutatón végigmegyünk Önnel a rendszeren.` },
    ],
  },

  cta: {
    eyebrow: "Kezdje el",
    title: "Próbálja ki a saját flottájával",
    lead: `${TRIAL_DAYS} nap ingyen, a ${TRIAL_PLAN} csomag minden funkciójával. Ha elakad, egy rövid online bemutatón végigmegyünk Önnel a rendszeren.`,
  },
};
