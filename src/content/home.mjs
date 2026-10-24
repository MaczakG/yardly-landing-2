// Főoldal. One promise: an operations system for vehicles and equipment, tailored to the
// company's own processes, on the company's own server or run by us in the cloud. Sections
// follow the visitor's questions: what is it, is it for me, what does it do, how is it made to
// fit, where does it run, how do we start.

export const home = {
  title: "Flotta- és eszközüzemeltetési rendszer a cég folyamataira szabva – Yardly",
  description: "Járművek, eszközök, határidők és jóváhagyások egy rendszerben, a cége szabályaira szabva. Az Önök szerverére telepítve, vagy általunk üzemeltetve a felhőben.",

  hero: {
    eyebrow: "Flotta- és eszközüzemeltetés a cége folyamataira szabva",
    title: "Üzemeltetési rendszer, amely úgy működik, ahogy az Önök cége.",
    lead: "Járművek, eszközök, határidők és jóváhagyások egy rendszerben. Felmérjük, hogyan dolgoznak, és ehhez szabjuk a Yardlyt. Az Önök szerverén fut, vagy mi üzemeltetjük a felhőben.",
    shotAlt: "A Yardly irányítópultja: elöl a közelgő és lejárt határidők, alatta a fő mutatók",
    phoneAlt: "A telefonos állapotfelmérő űrlap",
  },

  trust: [
    { icon: "server", text: "Az Önök szerverén, vagy általunk üzemeltetve a felhőben" },
    { icon: "lock", text: "Saját, elkülönített példány: más cég adata nincs benne" },
    { icon: "workflow", text: "Az Önök folyamatai, mezői és szerepkörei szerint" },
    { icon: "flag", text: "Magyar fejlesztés, magyar támogatás" },
  ],

  problems: {
    eyebrow: "Ismerős?",
    title: "Ismerős?",
    items: [
      { quote: "„Bonyolult folyamatok Excelben vezetve, háromféleképpen?”", text: "Csak egy valaki szerkesztheti őket, és minden lépés egy 1,5 órás rémálom." },
      { quote: "„Sosincs pontos összképünk az eszközeink költségéről.”", text: "Ekkora mennyiségnél a költségeik mindig magasak, de sosem tudjuk, melyik eszköz viszi a legtöbbet, vagy mennyibe kerül a flotta." },
      { quote: "„Minden leltárkor a jelenlegi programunk összevissza dobja be a tételeket.”", text: "A jelenleg használt leltárprogramunk mindig olyan eszközöket dob fel következőnek, amelyek a telephely túloldalán vannak, és legalább tízszer megyek körbe." },
    ],
    close: "A Yardly mindhármat megoldja, az Önök működésére szabva.",
    button: "Megoldásaink",
  },

  tailor: {
    eyebrow: "Az Önök folyamataira szabva",
    title: "Nem Önöknek kell a programhoz igazodniuk",
    lead: "Minden cégnél másképp megy a jóváhagyás, a szerviz és a leltár. Felmérjük, hogyan dolgoznak, és ehhez igazítjuk a Yardlyt.",
    items: [
      { title: "Beállítás", text: "Folyamatok és jóváhagyások, saját mezők és kategóriák, szerepkörök és jogosultságok, ellenőrzőlisták, riasztások és riportok, a cég szabályai szerint." },
      { title: "Egyedi fejlesztés", text: "Ha valami hiányzik, megírjuk: új modult, képernyőt, riportot vagy PDF-et, a cég saját működéséhez." },
      { title: "Integráció", text: "Összekötjük a már használt rendszerekkel: ERP, könyvelés, HR, üzemanyagkártyák, raktár- és beléptetőrendszerek. Nincs kétszeri rögzítés." },
    ],
    link: "Így dolgozunk",
  },

  modules: {
    eyebrow: "Két modul, egy rendszer",
    title: "A teljes flotta és eszközpark, egy helyen",
    lead: "Mindkettő a rendszer része. Azt kapcsoljuk be, amelyikre szükségük van.",
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
      { slug: "folyamatok", title: "Folyamatok és automatizálás", text: "Egy tankolás, szerviz, kárügy vagy bírság rögzítése elindítja a folyamatot: jóváhagyás, értesítés, PDF, e-mail." },
      { slug: "tankolas-dkv", title: "DKV-integráció", text: "A kártyás tankolások 6 óránként maguk kerülnek a járművekhez." },
      { slug: "koltsegek-riportok", title: "Költségek és analitika", text: "Ft/km autónként, vezetői összefoglaló PDF-ben, és azok az autók, amelyeket már érdemes lecserélni." },
    ],
    all: "Az összes funkció",
  },

  hosting: {
    eyebrow: "Üzemeltetés",
    title: "Az Önök szerverén, vagy mi üzemeltetjük",
    lead: "Mindkét esetben saját, elkülönített példányt kapnak, csak az Önök cégének adataival.",
    link: "Az üzemeltetés részletei",
  },

  steps: {
    eyebrow: "Hogyan dolgozunk",
    title: "Négy lépésben az Önök szabályai szerint működő rendszerig",
    items: [
      { title: "Felmérés", text: "Megnézzük, hogyan kezelik ma a flottát és az eszközparkot, és mit kell a rendszernek tudnia. Utána egyedi ajánlatot adunk." },
      { title: "Testreszabás", text: "Beállítjuk a folyamatokat, mezőket és szerepköröket, megírjuk, ami hiányzik, és bekötjük a már használt rendszereiket." },
      { title: "Telepítés", text: "Az Önök szerverére vagy az általunk üzemeltetett felhőbe. A meglévő adatokat mi hozzuk át Excelből vagy a régi rendszerből." },
      { title: "Támogatás", text: "Élesítés után is ott vagyunk, kijelölt kapcsolattartóval, és a rendszer a cég változásaival együtt fejlődik." },
    ],
    close: "Onnantól a Yardly figyel Önök helyett.",
    link: "A bevezetés részletei",
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
    text: "A Yardly böngészőben fut, telefonon is teljes értékű, a kollégáknak semmit nem kell telepíteniük. Az adatokat kétlépcsős belépés, titkosított kapcsolat és a cég saját, elkülönített példánya védi. Minden változás visszakövethető.",
    link: "Biztonság részletesen",
    phoneAlt: "A leltár összesítése telefonon",
  },

  faq: {
    eyebrow: "Gyakori kérdések",
    title: "Gyakori kérdések",
    lead: "Nem találja a választ? Írjon nekünk, egy munkanapon belül válaszolunk.",
    items: [
      { q: "Mennyibe kerül?", a: "A felmérés után egyedi ajánlatot adunk. Az ár a járművek és eszközök számától, a testreszabástól, az integrációktól és az üzemeltetés módjától függ." },
      { q: "Hol fut a rendszer?", a: "Ahogy Önöknek jobb: a saját szerverükön, adatközpontjukban vagy privát felhőjükben, vagy mi üzemeltetjük egy EU-s (frankfurti) adatközpontban. Mindkét esetben saját, elkülönített példányt kapnak." },
      { q: "Mennyire szabható a cégünkre?", a: "A folyamatok, a mezők, a kategóriák, a szerepkörök, az ellenőrzőlisták és a riportok beállíthatók. Ami hiányzik, azt egyedileg fejlesztjük, és a rendszert összekötjük a már használt programjaikkal." },
      { q: "Hogyan kerülnek be a meglévő adataink?", a: "A bevezetés részeként mi hozzuk át őket, Excelből vagy a régi rendszerből." },
      { q: "Kell telepíteni valamit a kollégáknak?", a: "Nem. A Yardly böngészőben fut, számítógépen és telefonon is." },
      { q: "Csak a flottához vagy csak az eszközökhöz is használható?", a: "Igen. A két modul közül azt kapcsoljuk be, amelyikre szükségük van." },
      { q: "Megnézhetjük előbb?", a: "Igen. Egy 30 perces online bemutatón egy kitalált cég adataival végigmegyünk a rendszeren, és megbeszéljük, hogyan működne az Önök folyamataival." },
    ],
  },

  cta: {
    eyebrow: "Beszéljünk",
    title: "Nézze meg egy bemutatón.",
    lead: "30 perc, online. Megmutatjuk a rendszert, és megbeszéljük, mire van szükségük.",
  },
};
