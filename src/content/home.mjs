// Főoldal. One promise: every vehicle, piece of equipment and deadline in one place, and the
// system speaks up before something goes wrong. Sections follow the visitor's questions:
// what is it, is it for me, what does it do, what does it cost, how do I start.

export const home = {
  title: "Yardly – flotta- és eszközkezelő rendszer",
  description: "Járművek, eszközök, dokumentumok és határidők egy helyen. A Yardly szól, mielőtt valami lejár. 14 nap ingyen, kártya nélkül.",

  hero: {
    eyebrow: "Flotta- és eszközkezelés magyar cégeknek",
    title: "Minden jármű, eszköz és határidő egy helyen.",
    lead: "A Yardly szól, mielőtt lejár a műszaki, esedékes a szerviz vagy eltűnik egy targonca a leltárból. Böngészőben és telefonon, telepítés nélkül.",
    shotAlt: "A Yardly irányítópultja: elöl a közelgő és lejárt határidők, alatta a fő mutatók",
    phoneAlt: "A telefonos állapotfelmérő űrlap",
  },

  trust: [
    { icon: "upload", text: "Excel-import: a meglévő nyilvántartás percek alatt átkerül" },
    { icon: "eye", text: "Böngészőben és telefonon, telepítés nélkül" },
    { icon: "lock", text: "Kétlépcsős belépés, titkosított kapcsolat" },
    { icon: "flag", text: "Magyar felület, magyar támogatás" },
  ],

  problems: {
    eyebrow: "Ismerős?",
    title: "Ismerős?",
    items: [
      { quote: "„Lejárt a műszaki, és csak az ellenőrzésnél derült ki.”", text: "A határidők naptárakban, e-mailekben és fejekben vannak. Egy szabadság, és már csúszik is." },
      { quote: "„Az Excel háromféle verzióban él.”", text: "Mindenki a sajátját frissíti. A költségekről senki nem tud pontos számot mondani." },
      { quote: "„Senki nem tudja, hol a 3-as targonca.”", text: "A leltár egy napig tart, és a végén akkor sem egyezik." },
    ],
    close: "A Yardly ezt a három gondot oldja meg egyszerre.",
  },

  modules: {
    eyebrow: "Két modul, egy rendszer",
    title: "A teljes flotta és eszközpark, egy helyen",
    lead: "Minden csomagban mindkettő benne van. Azt használod, amire szükséged van.",
    items: [
      {
        name: "Flotta",
        text: "Járművek és minden, ami hozzájuk tartozik: szerviz, tankolás, kárügyek, biztosítás, tartozékok és dokumentumok. Minden autónak saját adatlapja van, amelyen az egész előélete egy kattintásra van.",
        link: "Flotta megoldások",
        slug: "jarmunyilvantartas",
        img: "jarmu-adatlap",
        alt: "Egy jármű adatlapja",
      },
      {
        name: "Eszközpark",
        text: "Targoncától a laptopig bármi, amit nyilván kell tartani. Kategóriánként saját jellemzők, pontos hely a polcig, szerviz és ütemterv. A leltárt telefonnal végzed.",
        link: "Eszközpark megoldások",
        slug: "eszkoznyilvantartas",
        img: "eszkozok",
        alt: "Az eszközpark egy kategóriája a saját jellemzőkkel",
      },
    ],
  },

  alerts: {
    eyebrow: "Riasztások",
    title: "A rendszer szól, nem neked kell emlékezned",
    text: "A Yardly figyeli a forgalmik, műszakik, biztosítások, jogosítványok és szervizek határidejét. Te döntöd el, hány nappal előtte szóljon, és kinek. Naponta egy összesített e-mailt kapsz, nem tíz külön levelet.",
    points: [
      "30, 14, 7 és 1 nappal előtte, vagy amikor te szeretnéd",
      "a km-alapú szerviznél a km-óra állása alapján",
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

  features: {
    eyebrow: "Amit a Yardly tud",
    title: "Minden, ami a napi munkához kell",
    items: [
      { slug: "iranyitopult", title: "Irányítópult", text: "Belépés után az látszik először, ami figyelmet igényel, hátralévő napokkal és kilométerekkel." },
      { slug: "dokumentumok", title: "Dokumentumok", text: "Forgalmi, műszaki, casco és jogosítvány egy helyen, lejárattal és verziókkal." },
      { slug: "szerviz-karbantartas", title: "Szerviz és ütemterv", text: "Km vagy idő szerinti karbantartás, „ami előbb jön”, és egy kattintással rögzített szerviz." },
      { slug: "allapotfelmeres", title: "Állapotfelmérés telefonról", text: "A sofőr egy linkről tölti ki a saját ellenőrzőlistádat, belépés nélkül." },
      { slug: "leltar", title: "Leltár kamerával", text: "A kolléga végigmegy a raktáron, és beolvassa a címkéket. A lista nem látszik előre, így a számlálás valós." },
      { slug: "folyamatok", title: "Egyedi workflow beállítás", text: "Árajánlat, jóváhagyás összeghatárral, javítás, lezárás: a rendszer végigviszi a lépéseket." },
      { slug: "tankolas-dkv", title: "DKV-integráció", text: "A kártyás tankolások 6 óránként maguk kerülnek a járművekhez." },
      { slug: "koltsegek-riportok", title: "Költségek és analitika", text: "Ft/km autónként, vezetői összefoglaló PDF-ben, és azok az autók, amelyeket már érdemes lecserélni." },
    ],
    all: "Az összes funkció",
  },

  steps: {
    eyebrow: "Hogyan kezdj bele",
    title: "Három lépés, és a rendszer már dolgozik is",
    items: [
      { title: "Regisztrálsz.", text: "Két perc, bankkártya nélkül. 14 napig minden funkciót kipróbálhatsz." },
      { title: "Áthozod a meglévő adatokat.", text: "Töltsd le az Excel-sablont, másold bele a listádat, és töltsd fel. A hiányzó telephelyek, típusok és kategóriák maguk létrejönnek." },
      { title: "Meghívod a kollégákat.", text: "Mindenki a saját szerepkörével lép be. A sofőr csak a saját autóját látja, a pénzügy a költségeket." },
    ],
    close: "Onnantól a Yardly figyel helyetted.",
  },

  personas: {
    eyebrow: "Kinek szól",
    title: "Mindenkinek az, amire szüksége van",
    items: [
      { title: "Flottavezetőknek", text: "Minden autó, határidő és szerviz egy listában, és kevesebb telefon." },
      { title: "Raktár- és telephelyvezetőknek", text: "Pontos hely a polcig, leltár telefonnal, eszközszerviz ütemtervvel." },
      { title: "Ügyvezetőknek és pénzügynek", text: "Havi és éves költség, Ft/km, vezetői összefoglaló, csereajánlások." },
      { title: "Sofőröknek és kollégáknak", text: "Tankolás, kár, hibabejelentés és ellenőrzőlista telefonról, néhány koppintással." },
    ],
  },

  mobile: {
    eyebrow: "Mobilon és biztonságosan",
    title: "Az irodában és a telephelyen is",
    text: "A Yardly böngészőben fut, telefonon is teljes értékű. Az adatokat kétlépcsős belépés, titkosított kapcsolat és cégenként elkülönített tárolás védi. Minden változás visszakövethető.",
    link: "Biztonság részletesen",
    phoneAlt: "A leltár összesítése telefonon",
  },

  pricing: {
    eyebrow: "Árak",
    title: "Átlátható árak, a flottád méretéhez",
    note: "Éves fizetéssel 2 hónap ingyen. A 300 jármű feletti flottáknak egyedi ajánlatot adunk.",
    button: "Összes ár és kalkulátor",
  },

  faq: {
    eyebrow: "Gyakori kérdések",
    title: "Gyakori kérdések",
    lead: "Nem találod a választ? Írj nekünk, egy munkanapon belül válaszolunk.",
    items: [
      { q: "Kell telepíteni valamit?", a: "Nem. A Yardly böngészőben fut, számítógépen és telefonon is." },
      { q: "Hogyan kerülnek be a meglévő adataink?", a: "Excel-sablonnal, egyszerre. A rendszer soronként jelzi, ha valamit javítani kell." },
      { q: "Mi történik a próbaidő végén?", a: "Csomagot választasz. Ha nem, a fiók csak olvasható lesz, de minden adatod megmarad." },
      { q: "Csak a flottához vagy csak az eszközökhöz is használható?", a: "Igen. Minden csomagban mindkét modul benne van, azt használod, amire szükséged van." },
      { q: "Hol tárolódnak az adataink?", a: "Titkosított kapcsolaton érhetők el, és minden cég csak a saját adatait látja." },
    ],
  },

  cta: {
    eyebrow: "Kezdd el",
    title: "Próbáld ki a saját flottáddal.",
    lead: "14 nap ingyen, bankkártya nélkül. Ha elakadsz, szívesen végigmegyünk veled egy rövid bemutatón.",
  },
};
