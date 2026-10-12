// Magyar szövegek. A tartalom a kitöltött tartalmi kérdőív válaszain alapul.
export default {
  lang: "hu",
  dateLocale: "hu-HU",

  ui: {
    skip: "Ugrás a tartalomra",
    homeLabel: "Yardly – kezdőlap",
    menu: "Menü",
    langLabel: "Nyelv kiválasztása",
    nav: {
      home: "Kezdőlap",
      solutions: "Megoldások",
      cases: "Esettanulmányok",
      blog: "Blog",
      about: "Rólunk",
      contact: "Kapcsolat",
    },
    cta: "Vegye fel a kapcsolatot",
    footer: {
      desc: "Karbantartási és üzemeltetési rendszer logisztikai cégeknek, a meglévő rendszerek kiegészítéseként.",
      colSolutions: "Megoldások",
      colCompany: "Cég",
      colLegal: "Jogi információk",
      automation: "Workflow-automatizálás",
      modules: "Modulok",
      operations: "Üzemeltetés és biztonság",
      pricing: "Árazás",
      privacy: "Adatkezelési tájékoztató",
      imprint: "Impresszum",
      cookies: "Süti-beállítások",
      madeIn: "Készült Magyarországon.",
      rights: "Minden jog fenntartva.",
      top: "Vissza az oldal tetejére",
      soon: "hamarosan",
    },
    consent: {
      text: "Az oldal látogatottságát a Google Analytics segítségével mérjük, de csak akkor, ha ehhez hozzájárul.",
      more: "Részletek",
      accept: "Elfogadom",
      reject: "Elutasítom",
    },
    readMore: "Tovább olvasom",
    minutes: (n) => `${n} perc olvasás`,
    backToBlog: "Vissza a bloghoz",
    shotUrl: "yardly.hu",
    shotNote: "Valós képernyőkép a Yardly tesztkörnyezetéből, demóadatokkal.",
    draft: "Tervezet. Élesítés előtt a kiemelt részeket ki kell tölteni, a szöveget jogi szakértőnek kell ellenőriznie.",
  },

  // -------------------------------------------------------------------------
  home: {
    title: "Karbantartás-kezelő rendszer logisztikai cégeknek | Yardly",
    description:
      "Járművek, targoncák és raktári eszközök karbantartása, határidői és költségei egy helyen – meglévő rendszereihez illesztve, ingyenes felmérés alapján.",
    hero: {
      eyebrow: "Karbantartás és üzemeltetés",
      title: "Automatizált üzemeltetés, a cége folyamataira szabva.",
      lead: "A Yardly a meglévő rendszerei mellé épül, és automatizálja a járművek, targoncák és eszközök karbantartását, a határidők figyelését és a riportálást. Nem dobozos szoftver: az Ön működésére szabjuk, és a bevezetés után is támogatjuk.",
      note: "Az első felmérés díjtalan.",
    },
    diagram: {
      title: "Hogyan köti össze a Yardly egy cég rendszereit",
      desc: "Bal oldalon a cég meglévő rendszerei: vállalatirányítás, raktárkezelés, dokumentumkezelés, tankolási adatok és táblázatok. Középen a Yardly összeköti őket, jobb oldalon az automatizált folyamatok: szervizütemezés, flotta, eszközpark, lejárat-riasztás és költségriportok.",
      bar: "Példa: egy logisztikai cég rendszerei",
      legend: "Adatmozgás",
      figLabel: "1. ábra",
      caption: "A Yardly onnan veszi az adatokat, ahol azok ma is vannak, automatizálja a karbantartási és üzemeltetési folyamatokat, és folyamatosan riportot készít belőlük.",
      left: [
        { cat: "ERP", name: "Vállalatirányítás" },
        { cat: "WMS", name: "Raktárkezelés" },
        { cat: "DMS", name: "Dokumentumkezelés" },
        { cat: "ÜZEMANYAG", name: "Tankolási adatok" },
        { cat: "EXCEL", name: "Táblázatok" },
      ],
      right: [
        { cat: "KARBANTARTÁS", name: "Szervizütemezés" },
        { cat: "FLOTTA", name: "Járművek, sofőrök" },
        { cat: "ESZKÖZPARK", name: "Targoncák, gépek" },
        { cat: "HATÁRIDŐK", name: "Lejárat-riasztás" },
        { cat: "RIPORT", name: "Költségek, kimutatás" },
      ],
      mobileTop: [
        { cat: "ERP", name: "Ügyvitel" },
        { cat: "WMS", name: "Raktár" },
        { cat: "EXCEL", name: "Táblázatok" },
      ],
      mobileBottom: [
        { cat: "SZERVIZ", name: "Ütemezés" },
        { cat: "FLOTTA", name: "Járművek" },
        { cat: "RIPORT", name: "Költségek" },
      ],
      hub: { title: "Üzemeltetési réteg", pills: ["Összeköt", "Automatizál", "Riportál"], status: "Szinkronban", last: "Utolsó futás 09:14" },
    },
    benefits: {
      eyebrow: "Amit nyer",
      title: "Kevesebb kézi munka. Átlátható folyamatok. Egyszer rögzített adat.",
      lead: "A legtöbb cégnél nem a rendszer hiányzik, hanem az, ami összeköti őket. Ami ma táblázatokban és fejben van, azt a Yardly átlátható rendszerbe szervezi.",
      items: [
        {
          title: "Időt takarít meg",
          text: "Az ismétlődő adminisztráció magától fut: a rendszer kiszámolja az esedékességeket, időben értesít, és frissíti a kimutatásokat.",
          ticks: ["Esedékesség km-óraállás, üzemóra vagy dátum szerint", "Többlépcsős értesítés a határidők előtt", "Egyik partnerünknél havi 8 óra helyett 10 perc"],
        },
        {
          title: "Átlátható folyamatok",
          text: "Mindenki ugyanazt látja: mi esedékes, mi késik, mi készült el. Azt, hogy ki mit láthat és módosíthat, szerepkörönként állítjuk be.",
          ticks: ["Egy felület a karbantartásra és a határidőkre", "Szerepkör-alapú jogosultságok, változásnapló", "Kimutatások PDF-ben és Excelben"],
        },
        {
          title: "Nincs dupla adminisztráció",
          text: "A Yardly összeköti a már használt rendszereket, így ugyanazt az adatot nem kell több helyen rögzíteni.",
          ticks: ["A meglévő rendszerek megmaradnak", "Egyedi kapcsolódás a használt szoftverekhez", "Az alapadatok egyszer kerülnek rögzítésre"],
        },
      ],
      trace: {
        head: "FUTÁS · TARGONCA #12",
        status: "Kész · 1 ó 41 p",
        steps: [
          { what: "Üzemóra-adat beérkezett", sub: "Raktárkezelő rendszer", time: "08:00:12" },
          { what: "Esedékesség kiszámítva", sub: "Kötelező szerviz 14 nap múlva", time: "08:00:13" },
          { what: "Értesítés kiküldve", sub: "Karbantartási felelős", time: "08:00:14" },
          { what: "Munkalap jóváhagyva", sub: "Telephelyvezető · kézi lépés", time: "09:41:02", human: true },
          { what: "Kimutatás frissítve", sub: "Havi költségriport", time: "09:41:05" },
        ],
      },
      board: {
        head: "KÖZELGŐ ESEDÉKESSÉGEK",
        bad: "2 lejárt",
        warn: "3 esedékes",
        rows: [
          { name: "ABC-123", sub: "Műszaki vizsga", due: "Lejárt", tone: "bad" },
          { name: "Kompresszor", sub: "Éves felülvizsgálat", due: "8 nap", tone: "warn" },
          { name: "Targonca #12", sub: "Kötelező szerviz", due: "14 nap", tone: "warn" },
          { name: "ABC-133", sub: "Casco biztosítás", due: "Lejárt", tone: "bad" },
          { name: "B raktár, 2. sor", sub: "Állványzat-felülvizsgálat", due: "32 nap", tone: "ok" },
        ],
      },
      mesh: {
        title: "Hat rendszer pontról pontra tizenöt kapcsolatot igényel, a Yardlyn keresztül hatot.",
        leftKey: "PONT-PONT KÖZÖTT",
        leftValue: "15 kapcsolat",
        rightKey: "YARDLYN KERESZTÜL",
        rightValue: "6 kapcsolat",
      },
    },
    product: {
      eyebrow: "A felület",
      title: "Egy képernyő mutatja, mi igényel figyelmet.",
      lead: "A Yardly kezdőoldala a lejárt és hamarosan esedékes tételekkel indul: dokumentumok, ellenőrzések és karbantartások egy listában, alattuk a flotta és az eszközpark állapota.",
      alt: "A Yardly kezdőoldala: lejárt és esedékes dokumentumok, ellenőrzések és karbantartások listája, alatta a járművek és eszközök száma.",
    },
    proof: {
      eyebrow: "Esettanulmány",
      title: "Havi 8 óra kézi munka helyett 10 perc.",
      lead: "Egy gyógyszer-, növényvédőszer- és italáru-logisztikával foglalkozó partnerünk a raktári targoncák és eszközök karbantartását egy összetett, nehezen átlátható Excel-táblában vezette. Ma ugyanez a folyamat automatikusan fut.",
      link: "Az esettanulmány részletei",
      before: "8 óra",
      after: "10 perc",
      unit: "havi adminisztráció a karbantartásra",
      beforeLabel: "Korábban",
      afterLabel: "Yardlyval",
      commitTitle: "Amit minden ügyfelünknek vállalunk",
      commits: [
        { title: "Díjtalan felmérés", text: "Az első egyeztetés és a felmérés nem kerül semmibe." },
        { title: "Havi fix díj", text: "Előre egyeztetett, kiszámítható havidíj." },
        { title: "Adatok az EU-ban", text: "AWS Frankfurt, vagy az Ön saját szervere." },
        { title: "Folyamatos támogatás", text: "A bevezetés után is Önnel maradunk." },
      ],
    },
    faq: {
      eyebrow: "Gyakori kérdések",
      title: "Amit a döntés előtt érdemes tudni.",
      lead: "Nem találja a kérdését? Írjon nekünk, és válaszolunk.",
      items: [
        {
          q: "Le kell cserélnünk a meglévő rendszereinket?",
          a: "Nem. A Yardly a jól bevált megoldások mellé, kiegészítésként épül be, így a meglévő rendszerek megmaradnak. Onnan veszi az adatokat, ahol azok ma is vannak.",
        },
        {
          q: "Milyen rendszerekhez tud kapcsolódni?",
          a: "A kapcsolódás egyedi fejlesztéssel készül, ezért rugalmasan igazodik a már használt szoftverekhez. A felmérés során megnézzük, melyik rendszer milyen módon érhető el.",
        },
        {
          q: "Hol tárolódnak az adataink?",
          a: "Az Amazon Web Services frankfurti, EU-s adatközpontjában, dedikált környezetben, vagy az Ön saját szerverén, a saját hálózatán belül.",
        },
        {
          q: "Ki üzemelteti a rendszert?",
          a: "Ha a Yardly az AWS-en fut, a szervert és az alkalmazást is mi üzemeltetjük. Ha az Ön szerverén fut, a szervert az Ön belső vagy külsős informatikája üzemelteti, az alkalmazást mi.",
        },
        {
          q: "Mi történik, ha hibát tapasztalunk?",
          a: "Jelezze nekünk, mi pedig feltárjuk az okát, és a lehető leggyorsabban javítjuk. A bevezetés után is folyamatos támogatást nyújtunk.",
        },
        {
          q: "Mennyibe kerül a Yardly?",
          a: "Egyedi árazással dolgozunk. Az igény pontos megismerése és átbeszélése után kirajzolódó kép alapján adjuk meg a pontos árat és a havidíjat. A felmérés díjtalan.",
        },
      ],
    },
    cta: {
      eyebrow: "Következő lépés",
      title: "Mesélje el, hol akad el ma a folyamat.",
      lead: "Egy rövid megbeszélésen megismerjük az elképzeléseit, és megmutatjuk, miben segíthet a Yardly. Az első felmérés díjtalan.",
      note: "Kötelezettség nélkül.",
    },
  },

  // -------------------------------------------------------------------------
  solutions: {
    title: "Karbantartás, flottakezelés, eszköznyilvántartás | Yardly",
    description:
      "Karbantartás-ütemezés, lejáratfigyelés, flottakezelés, eszköznyilvántartás és költségriportok, az Ön munkafolyamataihoz igazított modulokkal.",
    hero: {
      eyebrow: "Megoldások",
      title: "Bevált modulok, az Ön folyamataira szabva.",
      lead: "A Yardly kész modulokra épül: flotta, karbantartás, dokumentumok, eszközpark és riportok. Ezeket az Ön működéséhez igazítjuk, a meglévő rendszereihez kötjük, és a saját üzleti szabályaival egészítjük ki.",
      fitLabel: "Kinek szól",
      fit: ["Logisztikai cégek", "Raktározás és disztribúció", "Fuvarozás", "Több telephelyes működés"],
    },
    automation: {
      eyebrow: "Workflow-automatizálás",
      title: "Ami ma táblázatban és e-mailben fut, azt rendszerbe szervezzük.",
      lead: "Minden cég máshogy dolgozik, ezért nem egy előre gyártott folyamatot adunk. Az Önét automatizáljuk, a meglévő rendszerei mellett.",
      items: [
        {
          label: "Összekötés",
          title: "A meglévő rendszerek kiegészítése",
          text: "A Yardly a már használt rendszerek mellé épül, és onnan veszi az adatokat, ahol azok ma is vannak.",
          ticks: ["Egyedi kapcsolódás a használt szoftverekhez", "Tankolási, dokumentum- és eszközadatok egy helyen", "A régi rendszerek megmaradnak"],
        },
        {
          label: "Automatizálás",
          title: "Üzleti logika, az Ön szabályai szerint",
          text: "Esedékességek, jóváhagyások, értesítések: a lépéseket az Ön működése alapján építjük fel.",
          ticks: ["Ütemezés km, üzemóra vagy dátum alapján", "Jóváhagyási és ellenőrzési lépések", "Többlépcsős e-mail- és SMS-értesítés"],
        },
        {
          label: "Előrejelzés",
          title: "Tervezhető karbantartás",
          text: "A meglévő futás- és használati adatokból a rendszer megbecsüli a következő kötelező szerviz időpontját.",
          ticks: ["Becsült dátum km-alapú ütemtervekhez", "Átlátható számítás a saját adataiból", "Költség- és Ft/km-rangsor"],
        },
        {
          label: "Riportálás",
          title: "Folyamatos kimutatások",
          text: "A költségek és a határidők automatikusan összesítve, könyvelésre és vezetői döntésre kész formában.",
          ticks: ["Költségek kategóriánként és járművenként", "Vezetői összefoglaló PDF-ben", "CSV- és Excel-export"],
        },
      ],
    },
    modules: {
      eyebrow: "Modulok",
      title: "Nyolc modul, amelyekből az Ön rendszere összeáll.",
      lead: "Nem kell mindet használnia. A felmérés alapján azokat kapcsoljuk be és szabjuk testre, amelyekre szüksége van.",
      items: [
        { title: "Flottakezelés", text: "Jármű- és sofőrtörzsadatok, szerviznapló, karbantartás és tankolás egy nyilvántartásban.", ticks: ["Telephelyhez és sofőrhöz rendelés", "Fogyasztáskövetés tankolásonként", "Excel-import a meglévő listából"] },
        { title: "Dokumentumok és lejárat-riasztás", text: "Minden irat a járműhöz, sofőrhöz vagy eszközhöz kötve, lejárati dátummal. A rendszer időben szól.", ticks: ["Saját dokumentumtípusok, verziózás", "Riasztás 30, 14, 7 és 1 nappal előtte", "E-mail- és SMS-csatorna"] },
        { title: "Állapotfelmérés", text: "Saját ellenőrzőlisták, amelyeket a kolléga telefonról, bejelentkezés nélkül tölt ki.", ticks: ["Húzd-és-ejtsd sablonszerkesztő", "Egyszer használatos link e-mailben", "Visszakereshető előzmények"] },
        { title: "Eszközpark", text: "Targoncák, gépek, szerszámok és IT-eszközök nyilvántartása, raktárig és polcig.", ticks: ["Saját kategóriák és helyek", "Felelős személy és beszerzési érték", "Leltár e-mailben, PDF-jelentéssel"] },
        { title: "Költségek és riportok", text: "Biztosítás, bérleti díj, üzemanyag és szerviz kategóriánként, járművenként és időszakonként.", ticks: ["Automatikus kategorizálás", "Vezetői összefoglaló PDF-ben", "Teljes adatbázis Excelben"] },
        { title: "Analitika és előrejelzés", text: "A saját historikus adataiból: Ft/km-rangsor, becsült szervizdátum, küszöb alapú csereajánlás.", ticks: ["Becsült dátum km-alapú ütemtervhez", "Magyarázható, küszöb alapú szabályok", "Járműre és eszközre is"] },
        { title: "Csapat és jogosultságok", text: "Annyi szerepkör, amennyi kell, funkciónkénti jogosultsággal és több telephellyel.", ticks: ["Egyedi szerepkörök", "Négyszintű jogosultsági mátrix", "Telephelyenkénti bontás"] },
        { title: "Testreszabás", text: "A felület az Ön arculatát viseli, a listák tartalmát Ön határozza meg.", ticks: ["Saját logó és kiemelt szín", "Szerkeszthető katalógusok", "Változásnapló"] },
      ],
    },
    tour: {
      eyebrow: "Így néz ki",
      title: "Egy rendszer, amelyet a karbantartási felelős szívesen nyit meg.",
      items: [
        { shot: "maintenance", title: "Esedékesség km vagy dátum szerint", text: "A karbantartási ütemterveket km-óraállás vagy naptári időszak szerint adjuk meg. Az esedékességet a rendszer naponta újraszámolja, a lejárt tételek kiemelve jelennek meg.", alt: "Karbantartási ütemtervek listája járművenként, esedékességgel és állapottal." },
        { shot: "forecast", title: "Becsült szervizdátum a saját adatokból", text: "A km-alapú ütemtervekhez a rendszer a jármű havi átlagából becsli meg, mikorra esedékes a szerviz, így a karbantartás betervezhető a naptárba.", alt: "Karbantartás-előrejelzés: hátralévő km és becsült dátum járművenként." },
        { shot: "equipment", title: "Targoncák és gépek egy nyilvántartásban", text: "Minden eszköz saját kategóriával, telephellyel, hellyel és állapottal. A szervizt és a leltárt ugyanitt kezeli.", alt: "Eszközpark lista targoncákkal, kategóriával, telephellyel és állapottal." },
      ],
    },
    process: {
      eyebrow: "Hogyan dolgozunk",
      title: "A díjtalan felméréstől a folyamatos támogatásig.",
      lead: "Minden bevezetés egy beszélgetéssel kezdődik, és a bevezetés után sem ér véget.",
      steps: [
        { label: "Díjtalan", title: "Felmérés", text: "Megismerjük a folyamatait és a használt rendszereket, és megnézzük, hol vész el a legtöbb idő." },
        { label: "Közösen", title: "Tervezés", text: "Meghatározzuk, mely modulokra és milyen egyedi logikára van szükség, és egyedi ajánlatot adunk." },
        { label: "Testreszabás", title: "Megvalósítás", text: "Testre szabjuk a rendszert, bekötjük az adatforrásokat, és átvisszük a meglévő nyilvántartásokat." },
        { label: "Folyamatos", title: "Üzemeltetés és támogatás", text: "A bevezetés után is Önnel maradunk: a hibákat feltárjuk, és a lehető leggyorsabban javítjuk." },
      ],
    },
    operations: {
      eyebrow: "Üzemeltetés és biztonság",
      title: "Az adatai az EU-ban vagy a saját szerverén maradnak.",
      lead: "Két üzemeltetési mód közül választhat. A rendszer és a biztonsági intézkedések mindkettőben ugyanazok.",
      options: [
        { tag: "Felhőben", title: "AWS, Frankfurt (EU)", text: "Az alkalmazást az Amazon Web Services frankfurti adatközpontjában futtatjuk. A szervert és az alkalmazást is mi üzemeltetjük." },
        { tag: "Helyben", title: "Saját szerver", text: "Az alkalmazás az Ön szerverén fut. A szervert az Ön belső vagy külsős informatikája üzemelteti, az alkalmazást mi." },
      ],
      securityTitle: "Biztonsági intézkedések",
      security: [
        "Szerepkör-alapú jogosultságok, funkciónként",
        "Változásnapló: ki, mit és mikor módosított",
        "Titkosított kapcsolat (HTTPS/TLS, HSTS)",
        "Kétlépcsős bejelentkezés e-mailben küldött kóddal",
        "Cégenként elkülönített adatok",
        "Behatolásos tesztelés",
      ],
    },
    pricing: {
      eyebrow: "Árazás",
      title: "Egyedi ajánlat, havi fix díjjal.",
      text: "Nincsenek csomagárak, mert minden bevezetés más. A díjtalan felmérés után, az igény pontos ismeretében adunk ajánlatot. A díjazás a bevezetésből, a havi fix, előre egyeztetett használati díjból és a folyamatos támogatásból áll.",
      points: ["Díjtalan felmérés", "Egyedi ajánlat", "Havi fix díj"],
    },
    cta: {
      eyebrow: "Következő lépés",
      title: "Kezdjük azzal a folyamattal, amely ma a legtöbb időt viszi el.",
      lead: "Egy rövid megbeszélésen átnézzük, és megmutatjuk, mit jelentene automatizálni.",
      note: "Az első felmérés díjtalan.",
    },
  },

  // -------------------------------------------------------------------------
  cases: {
    title: "Esettanulmány: targonca- és flottakarbantartás | Yardly",
    description:
      "Egy logisztikai cég targonca- és flottakarbantartását automatizáltuk: a havi kézi munka 8 óráról 10 percre csökkent. Ismerje meg a részleteket.",
    hero: {
      eyebrow: "Esettanulmányok",
      title: "Targonca- és flottakarbantartás Excel helyett.",
      lead: "Hogyan lett havi 8 óra kézi adminisztrációból 10 perc egy logisztikai szolgáltatónál.",
    },
    case: {
      factsTitle: "Az ügyfél",
      facts: [
        { k: "Ügyfél", v: "Logisztikai szolgáltató (név nélkül)" },
        { k: "Iparág", v: "Gyógyszer-, növényvédőszer- és italáru-logisztika" },
        { k: "Érintett rendszerek", v: "GLPI (eszköznyilvántartás), Therefore (dokumentumkezelés), DKV (üzemanyagkártya-adatok), MNB (árfolyamadatok)" },
        { k: "Fókusz", v: "Karbantartás, előrejelzés, riportálás" },
      ],
      sections: [
        { title: "Kiinduló helyzet", text: "A raktári eszközök és a targoncák karbantartását egy összetett Excel-táblában vezették. A tábla nehezen volt átlátható, és a karbantartás adminisztrációja havonta egy teljes munkanapot vett igénybe." },
        { title: "Megoldás", text: "Automatizáltuk a raktári targoncák és eszközök teljes karbantartási folyamatát, valamint a gépjárműpark karbantartását. A rendszer a meglévő futásadatokból és a használati szokásokból előre megbecsüli a kötelező szerviz időpontját. A Yardly a meglévő rendszereket folyamatos riportálással és üzleti logikával egészítette ki." },
      ],
      resultTitle: "Eredmény",
      resultText: "A karbantartás havi adminisztrációja 8 óráról 10 percre csökkent.",
    },
    cta: {
      eyebrow: "Következő lépés",
      title: "Nálunk is van egy ilyen táblázat.",
      lead: "Mutassa meg, és együtt megnézzük, mi automatizálható belőle. Az első felmérés díjtalan.",
      note: "Kötelezettség nélkül.",
    },
  },

  // -------------------------------------------------------------------------
  blog: {
    title: "Blog – karbantartás, üzemeltetés, automatizálás | Yardly",
    description: "Gyakorlati cikkek a karbantartás nyilvántartásáról, a szervizidőpontok előrejelzéséről és a meglévő rendszerek kiegészítéséről.",
    hero: {
      eyebrow: "Blog",
      title: "Gyakorlati írások üzemeltetésről és karbantartásról.",
      lead: "Rövid, gyakorlati cikkek arról, hogyan lesz a kézi nyilvántartásból átlátható, automatizált folyamat.",
    },
    postCta: {
      title: "Kérdése van a cikk kapcsán?",
      text: "Írjon nekünk, és megnézzük, hogyan működne ez az Ön cégénél. Az első felmérés díjtalan.",
    },
  },

  // -------------------------------------------------------------------------
  about: {
    title: "Rólunk – egyedi üzemeltetési rendszerek | Yardly",
    description:
      "A Yardly Budapesten fejleszt karbantartási és üzemeltetési rendszert közepes vállalatoknak, amely kiegészíti a meglévő szoftvereket, nem lecseréli azokat.",
    hero: {
      eyebrow: "Rólunk",
      title: "Kevesebb adminisztráció, könnyebb mindennapok.",
      lead: "Azt szeretnénk, hogy a Yardly építő és gazdaságos megoldás legyen, amely megkönnyíti a cégek működését és a munkatársak mindennapjait, és időt szabadít fel számukra.",
    },
    story: {
      eyebrow: "Miért Yardly?",
      title: "A név az udvarból jön, ahol a cég eszközei dolgoznak.",
      paragraphs: [
        "A yard angolul udvart, telephelyet jelent: azt a helyet, ahol egy cég járművei, targoncái és gépei állnak és dolgoznak. Ezekből sok van, és mindegyiknek megvannak a maga határidői, szervizei és költségei.",
        "A Yardlyt Maczák Gergő alapította Budapesten azzal a céllal, hogy ezek nyilvántartása ne bonyolult táblázatokban és kézi adminisztrációban éljen, hanem egy átlátható, a cég működésére szabott rendszerben.",
      ],
      plan: { title: "Egy telephely felülnézetből: raktár targoncákkal, parkoló járművekkel, a szervizre esedékes eszközök kiemelve.", warehouse: "RAKTÁR", forklifts: "TARGONCÁK", parking: "PARKOLÓ", gate: "BEJÁRAT" },
      caption: "2. ábra · A yard: a telephely, ahol a cég eszközei dolgoznak. Kiemelve, aminek közeleg a szervize.",
    },
    principles: {
      eyebrow: "Amiben hiszünk",
      title: "Négy elv, amely mentén dolgozunk.",
      lead: "Ezek határozzák meg, mit fejlesztünk, és hogyan dolgozunk az ügyfeleinkkel.",
      items: [
        { title: "Az automatizálás segít, nem helyettesít", text: "Az automatizálás nem munkaköröket vesz el, hanem a mindennapi munkát könnyíti meg. A gépies, hibára hajlamos részt veszi le a kollégák válláról." },
        { title: "Az Ön folyamataihoz igazodunk", text: "Nem dobozos szoftvert adunk, hanem a cég működésére szabott alkalmazást, amelyet a bevezetés után is támogatunk." },
        { title: "A meglévő rendszerek megmaradnak", text: "A jól bevált megoldások mellé épülünk, kiegészítésként. Nem kell semmit lecserélni ahhoz, hogy a folyamatok rendbe kerüljenek." },
        { title: "Kiszámítható díj", text: "Havi fix, előre egyeztetett díjjal dolgozunk, hogy a költség ne meglepetés legyen, hanem tervezhető tétel." },
      ],
    },
    cta: {
      eyebrow: "Következő lépés",
      title: "Beszéljünk arról, mi viszi el ma a legtöbb időt.",
      lead: "Egy rövid megbeszélés, kötelezettség nélkül. Az első felmérés díjtalan.",
      note: "",
    },
  },

  // -------------------------------------------------------------------------
  contact: {
    title: "Kapcsolat – ingyenes folyamatfelmérés | Yardly",
    description:
      "Kérjen ingyenes felmérést: áttekintjük karbantartási és üzemeltetési folyamatait, majd egyedi, fix havi díjas ajánlatot adunk.",
    hero: {
      eyebrow: "Kapcsolat",
      title: "Vegye fel velünk a kapcsolatot.",
      lead: "Írja meg röviden, mely folyamatokkal és rendszerekkel dolgoznak. Felvesszük Önnel a kapcsolatot, és egyeztetünk egy megbeszélést.",
    },
    stepsLabel: "Mi történik ezután",
    steps: [
      { title: "Felvesszük Önnel a kapcsolatot", text: "Maczák Gergő, a Yardly alapítója személyesen keresi Önt." },
      { title: "Megbeszélés", text: "Megismerjük az elképzeléseit, és átbeszéljük, miben tud segíteni a Yardly." },
      { title: "Díjtalan felmérés és ajánlat", text: "A pontos igény alapján egyedi ajánlatot adunk, havi fix díjjal." },
    ],
    direct: [{ k: "E-mail", email: true }, { k: "Székhely", v: "Budapest" }],
    form: {
      title: "Írjon nekünk",
      intro: "Néhány perc az egész. A csillaggal jelölt mezők kötelezők.",
      name: "Név",
      email: "Céges e-mail-cím",
      company: "Cég",
      role: "Beosztás",
      size: "Cégméret",
      sizeSelect: "Válasszon…",
      sizes: ["50 fő alatt", "50–149 fő", "150–499 fő", "500 fő felett"],
      systems: "Mely rendszerek érintettek?",
      systemsHint: "Több is választható",
      systemOptions: ["Vállalatirányítás (ERP)", "Raktárkezelés (WMS)", "Flotta, járművek", "Eszköznyilvántartás", "Dokumentumkezelés", "Excel-táblák", "Egyéb"],
      message: "Melyik folyamatot automatizálná először?",
      placeholder: "Például: a targoncák karbantartását Excelben vezetjük, és minden ellenőrzés fél napot vesz igénybe.",
      consent: "Hozzájárulok, hogy a Yardly a megadott adatokat a megkeresésem megválaszolására használja. Részletek az",
      consentLink: "adatkezelési tájékoztatóban",
      submit: "Üzenet küldése",
      note: "Kötelezettség nélkül.",
      errors: {
        name: "Kérjük, adja meg a nevét.",
        email: "Kérjük, adjon meg egy érvényes e-mail-címet.",
        company: "Kérjük, adja meg a cég nevét.",
        size: "Kérjük, válassza ki a cégméretet.",
        consent: "A válaszhoz szükségünk van a hozzájárulására.",
      },
      sending: "Küldés…",
      successTitle: "Köszönjük, megkaptuk az üzenetét.",
      successText: "Hamarosan felvesszük Önnel a kapcsolatot, hogy egyeztessünk egy megbeszélést.",
      mailtoTitle: "Már csak el kell küldenie.",
      mailtoText: "Megnyitottuk az e-mail-programját a kitöltött üzenettel. Ha nem nyílt meg, írjon közvetlenül a(z) {email} címre.",
      errorText: "Az üzenetet most nem sikerült elküldeni. Kérjük, írjon közvetlenül a(z) {email} címre.",
      mailSubject: "Kapcsolatfelvétel a yardly.hu oldalról",
      back: "Vissza a kezdőlapra",
    },
  },

  // -------------------------------------------------------------------------
  privacy: {
    title: "Adatkezelési tájékoztató | Yardly",
    description: "Hogyan kezeli a Yardly a weboldalon megadott és a látogatás során keletkező személyes adatokat.",
    heading: "Adatkezelési tájékoztató",
    intro: "Ez a tájékoztató a yardly.hu weboldalra vonatkozik: a kapcsolatfelvételi űrlapon megadott adatokra, az e-mailes megkeresésekre és a látogatottság mérésére. A Yardly alkalmazás használata során kezelt adatokról külön tájékoztató szól.",
    body: `
<h2>1. Az adatkezelő</h2>
<p><mark class="ph">[Cégnév]</mark><br>Székhely: <mark class="ph">[székhely]</mark>, Budapest<br>Cégjegyzékszám: <mark class="ph">[cégjegyzékszám]</mark><br>Adószám: <mark class="ph">[adószám]</mark><br>E-mail: <a href="mailto:{email}">{email}</a></p>

<h2>2. Milyen adatokat kezelünk</h2>
<h3>Kapcsolatfelvételi űrlap és e-mail</h3>
<p>Név, céges e-mail-cím, cégnév, beosztás, cégméret, az érintett rendszerek és az üzenet tartalma, valamint mindaz, amit e-mailben önként megoszt velünk.</p>
<h3>Látogatottságmérés (csak hozzájárulással)</h3>
<p>Ha hozzájárul, a Google Analytics sütik segítségével mérjük, mely oldalakat és hogyan használják a látogatók: a megtekintett oldalak, a látogatás ideje, az eszköz és a böngésző típusa, a hozzávetőleges földrajzi hely. Hozzájárulás nélkül ilyen sütit nem helyezünk el.</p>
<h3>Technikai naplók</h3>
<p>A tárhelyszolgáltató szerverei a kérések kiszolgálásához és a visszaélések kivédéséhez naplózzák az IP-címet és a kérés időpontját.</p>

<h2>3. Az adatkezelés célja és jogalapja</h2>
<ul>
<li><strong>Megkeresés megválaszolása, ajánlatadás:</strong> az Ön hozzájárulása (GDPR 6. cikk (1) a)), illetve a szerződéskötést megelőző lépések (GDPR 6. cikk (1) b)).</li>
<li><strong>Látogatottságmérés:</strong> az Ön hozzájárulása (GDPR 6. cikk (1) a)), amelyet bármikor visszavonhat.</li>
<li><strong>Technikai naplók:</strong> az oldal biztonságos működtetéséhez fűződő jogos érdek (GDPR 6. cikk (1) f)).</li>
</ul>
<p><mark class="ph">[Jogi ellenőrzés: a jogalapok véglegesítése.]</mark></p>

<h2>4. Meddig őrizzük az adatokat</h2>
<ul>
<li>Megkeresések: <mark class="ph">[például a megkereséstől számított 1 évig, szerződéskötés esetén a szerződés megszűnéséig]</mark>.</li>
<li>Látogatottsági adatok: a Google Analytics beállításai szerint <mark class="ph">[2 vagy 14 hónapig]</mark>.</li>
<li>Technikai naplók: <mark class="ph">[megőrzési idő]</mark>.</li>
</ul>

<h2>5. Kik férnek hozzá az adatokhoz</h2>
<p>Az adatokhoz a Yardly munkatársai férnek hozzá, a feladatukhoz szükséges mértékben. Az alábbi szolgáltatókat vesszük igénybe:</p>
<ul>
<li><strong>Amazon Web Services EMEA SARL</strong> (Luxemburg): tárhely és az oldal üzemeltetése, frankfurti (EU-s) adatközpontban.</li>
<li><strong>E-mail-szolgáltató:</strong> <mark class="ph">[a ténylegesen használt szolgáltató neve]</mark>, az üzenetek kézbesítéséhez.</li>
<li><strong>Google Ireland Ltd.</strong>: látogatottságmérés, kizárólag az Ön hozzájárulása esetén. Az adatok az Egyesült Államokba is továbbításra kerülhetnek; a Google részt vesz az EU–USA adatvédelmi keretrendszerben.</li>
</ul>
<p><mark class="ph">[Jogi ellenőrzés: az adatfeldolgozói szerződések megléte és tartalma.]</mark></p>

<h2>6. Sütik</h2>
<p>A sütikkel kapcsolatos döntését a böngészője tárolja el, ehhez nem használunk sütit. Hozzájárulás esetén a Google Analytics a <code>_ga</code> és <code>_ga_*</code> sütiket helyezi el, legfeljebb 2 évre. Döntését bármikor megváltoztathatja az oldal alján található „Süti-beállítások” hivatkozással.</p>

<h2>7. Az Ön jogai</h2>
<p>Kérheti a személyes adataihoz való hozzáférést, azok helyesbítését, törlését vagy kezelésük korlátozását, élhet az adathordozhatósághoz és a tiltakozáshoz való jogával, és a hozzájárulását bármikor visszavonhatja. Kérését a(z) <a href="mailto:{email}">{email}</a> címre küldheti.</p>

<h2>8. Jogorvoslat</h2>
<p>Ha úgy gondolja, hogy az adatkezelés jogsértő, panasszal fordulhat a Nemzeti Adatvédelmi és Információszabadság Hatósághoz (NAIH, 1055 Budapest, Falk Miksa utca 9–11., <a href="https://naih.hu" rel="noopener">naih.hu</a>), vagy bírósághoz fordulhat.</p>

<p class="legal-meta">Hatályos: <mark class="ph">[dátum]</mark></p>`,
  },

  imprint: {
    title: "Impresszum | Yardly",
    description: "A yardly.hu weboldal üzemeltetőjének adatai.",
    heading: "Impresszum",
    intro: "Az elektronikus kereskedelmi szolgáltatásokról szóló 2001. évi CVIII. törvény alapján.",
    body: `
<h2>Szolgáltató</h2>
<dl class="legal-dl">
<div><dt>Cégnév</dt><dd><mark class="ph">[cégnév]</mark></dd></div>
<div><dt>Székhely</dt><dd><mark class="ph">[székhely]</mark>, Budapest</dd></div>
<div><dt>Cégjegyzékszám</dt><dd><mark class="ph">[cégjegyzékszám]</mark></dd></div>
<div><dt>Nyilvántartó bíróság</dt><dd><mark class="ph">[Fővárosi Törvényszék Cégbírósága]</mark></dd></div>
<div><dt>Adószám</dt><dd><mark class="ph">[adószám]</mark></dd></div>
<div><dt>Képviselő</dt><dd><mark class="ph">[képviselő neve]</mark></dd></div>
<div><dt>E-mail</dt><dd><a href="mailto:{email}">{email}</a></dd></div>
</dl>
<h2>Tárhelyszolgáltató</h2>
<dl class="legal-dl">
<div><dt>Név</dt><dd>Amazon Web Services EMEA SARL</dd></div>
<div><dt>Cím</dt><dd>38 Avenue John F. Kennedy, L-1855 Luxembourg</dd></div>
<div><dt>Weboldal</dt><dd><a href="https://aws.amazon.com" rel="noopener">aws.amazon.com</a></dd></div>
</dl>`,
  },

  notFound: {
    title: "Az oldal nem található | Yardly",
    eyebrow: "404",
    heading: "Ezt az oldalt nem találjuk.",
    text: "Lehet, hogy elköltözött, vagy elírás van a címben.",
    back: "Vissza a kezdőlapra",
  },
};
