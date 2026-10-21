// Főoldal. One promise: automated operations for equipment and vehicles — deadlines kept,
// workflows of one's own, automation under a permission matrix. Sections follow the visitor's questions:
// what is it, is it for me, what does it do, what does it cost, how do I start.

export const home = {
  title: "Yardly – flotta- és eszközkezelő rendszer",
  description: "Járművek, eszközök, dokumentumok és határidők egy helyen. A Yardly szól, mielőtt valami lejár. 14 nap ingyen, kártya nélkül.",

  hero: {
    eyebrow: "Flotta- és eszközkezelés magyar cégeknek",
    title: "Automatizált üzemeltetési megoldások eszközökre és járművekre.",
    lead: "A Yardly számon tartja a lejáratokat, Ön pedig teljesen egyedi workflow-kat hozhat létre benne, és jogosultsági mátrixszal automatizálhatja a folyamatokat.",
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
      { quote: "„Bonyolult folyamatok Excelben vezetve, háromféleképpen?”", text: "Csak egy valaki szerkesztheti őket, és minden lépés egy 1,5 órás rémálom." },
      { quote: "„Sosincs pontos összképünk az eszközeink költségéről.”", text: "Ekkora mennyiségnél a költségeik mindig magasak, de sosem tudjuk, melyik eszköz viszi a legtöbbet, vagy mennyibe kerül a flotta." },
      { quote: "„Minden leltárkor a jelenlegi programunk összevissza dobja be a tételeket.”", text: "A jelenleg használt leltárprogramunk mindig olyan eszközöket dob fel következőnek, amelyek a telephely túloldalán vannak, és legalább tízszer megyek körbe." },
    ],
    close: "A Yardly ezt a három gondot is megoldja egyszerre.",
    button: "Megoldásaink",
  },

  modules: {
    eyebrow: "Két modul, egy rendszer",
    title: "A teljes flotta és eszközpark, egy helyen",
    lead: "Minden csomagban mindkettő benne van. Azt használja, amire szüksége van.",
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
        text: "Targoncától a laptopig bármi, amit nyilván kell tartani. Kategóriánként saját jellemzők, pontos hely a polcig, szerviz és ütemterv. A leltárt telefonnal végezheti.",
        link: "Eszközpark megoldások",
        slug: "eszkoznyilvantartas",
        img: "eszkozok",
        alt: "Az eszközpark egy kategóriája a saját jellemzőkkel",
      },
    ],
  },

  alerts: {
    eyebrow: "Riasztások",
    title: "A rendszer szól, nem Önnek kell emlékeznie",
    text: "A Yardly figyeli a forgalmik, műszakik, biztosítások, jogosítványok és szervizek határidejét. Ön dönti el, hány nappal előtte szóljon, és kinek. Naponta egy összesített e-mailt kap, nem tíz külön levelet.",
    points: [
      "30, 14, 7 és 1 nappal előtte, vagy amikor Ön szeretné",
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
      { slug: "allapotfelmeres", title: "Állapotfelmérés telefonról", text: "A sofőr egy linkről tölti ki a cég saját ellenőrzőlistáját, belépés nélkül." },
      { slug: "leltar", title: "Leltár kamerával", text: "A kolléga végigmegy a raktáron, és beolvassa a címkéket. A lista nem látszik előre, így a számlálás valós." },
      { slug: "folyamatok", title: "Egyedi workflow beállítás", text: "Árajánlat, jóváhagyás összeghatárral, javítás, lezárás: a rendszer végigviszi a lépéseket." },
      { slug: "tankolas-dkv", title: "DKV-integráció", text: "A kártyás tankolások 6 óránként maguk kerülnek a járművekhez." },
      { slug: "koltsegek-riportok", title: "Költségek és analitika", text: "Ft/km autónként, vezetői összefoglaló PDF-ben, és azok az autók, amelyeket már érdemes lecserélni." },
    ],
    all: "Az összes funkció",
  },

  steps: {
    eyebrow: "Hogyan kezdjen bele",
    title: "Három lépés, és a rendszer már dolgozik is",
    items: [
      { title: "Regisztrál.", text: "Két perc, bankkártya nélkül. 14 napig minden funkciót kipróbálhat." },
      { title: "Áthozza a meglévő adatokat.", text: "Töltse le az Excel-sablont, másolja bele a listáját, és töltse fel. A hiányzó telephelyek, típusok és kategóriák maguk létrejönnek." },
      { title: "Meghívja a kollégákat.", text: "Mindenki a saját szerepkörével lép be. A sofőr csak a saját autóját látja, a pénzügy a költségeket." },
    ],
    close: "Onnantól a Yardly figyel Ön helyett.",
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
    title: "Átlátható árak, a flottája méretéhez",
    note: "Éves fizetéssel 2 hónap ingyen. A 300 jármű feletti flottáknak egyedi ajánlatot adunk.",
    button: "Összes ár és kalkulátor",
  },

  faq: {
    eyebrow: "Gyakori kérdések",
    title: "Gyakori kérdések",
    lead: "Nem találja a választ? Írjon nekünk, egy munkanapon belül válaszolunk.",
    items: [
      { q: "Kell telepíteni valamit?", a: "Nem. A Yardly böngészőben fut, számítógépen és telefonon is." },
      { q: "Hogyan kerülnek be a meglévő adataink?", a: "Excel-sablonnal, egyszerre. A rendszer soronként jelzi, ha valamit javítani kell." },
      { q: "Mi történik a próbaidő végén?", a: "Csomagot választ. Ha nem, a fiók csak olvasható lesz, de minden adata megmarad." },
      { q: "Csak a flottához vagy csak az eszközökhöz is használható?", a: "Igen. Minden csomagban mindkét modul benne van, azt használja, amire szüksége van." },
      { q: "Hol tárolódnak az adataink?", a: "Titkosított kapcsolaton érhetők el, és minden cég csak a saját adatait látja." },
    ],
  },

  cta: {
    eyebrow: "Kezdje el",
    title: "Próbálja ki a saját flottájával.",
    lead: "14 nap ingyen, bankkártya nélkül. Ha elakad, szívesen végigmegyünk Önnel egy rövid bemutatón.",
  },
};
