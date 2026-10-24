// Kapcsolat, Hogyan dolgozunk, Üzemeltetés and the legal pages. Values marked [kitöltendő] still need real data
// before going live (company details, team, story); they render as highlighted placeholders.

export const contact = {
  title: "Kapcsolat – Yardly",
  description: "Kérjen bemutatót vagy ajánlatot, vagy kérdezzen bármit. Egy munkanapon belül válaszolunk.",
  eyebrow: "Kapcsolat",
  h1: "Beszéljünk!",
  lead: "Kérjen bemutatót vagy ajánlatot, vagy kérdezzen bármit. Egy munkanapon belül válaszolunk.",
  direct: [
    { k: "E-mail", email: true },
    { k: "Székhely", v: "Budapest" },
  ],
  customer: "Ha már ügyfelünk: a támogatást a szerződésben rögzített szolgáltatási szint szerint adjuk, a kijelölt kapcsolattartóján keresztül vagy ezen a címen.",
  stepsTitle: "Mi történik utána?",
  steps: [
    "Egy munkanapon belül válaszolunk e-mailben vagy telefonon. Bemutatókérésnél Maczák Gergő, a Yardly alapítója személyesen keresi.",
    "Bemutatónál egy 30 perces online alkalmat egyeztetünk: egy kitalált cég adataival megmutatjuk a rendszert, és az Ön kérdéseire koncentrálunk.",
    "Ha továbblépnének, felmérjük, hogyan dolgoznak most, és egyedi ajánlatot adunk.",
  ],
  form: {
    title: "Írjon nekünk",
    intro: "A csillaggal jelölt mezők kötelezők.",
    topic: "Miben segíthetünk?",
    topics: [
      { value: "demo", label: "Bemutatót kérek" },
      { value: "quote", label: "Ajánlatot kérek" },
      { value: "onprem", label: "Saját szerveres telepítés" },
      { value: "integration", label: "Integráció" },
      { value: "support", label: "Ügyfélként segítség kell" },
      { value: "other", label: "Egyéb" },
    ],
    name: "Név",
    company: "Cég",
    email: "E-mail",
    phone: "Telefon",
    phoneHint: "Ha inkább telefonon beszélne",
    vehicles: "Járművek száma",
    vehiclesHint: "Nagyjából is jó",
    equipment: "Eszközök száma",
    equipmentHint: "Targoncák, gépek, laptopok, bármi",
    hosting: "Üzemeltetés módja",
    hostingHint: "Ha már tudja",
    hostingOptions: [
      { value: "", label: "Válasszon…" },
      { value: "onprem", label: "Saját szerveren" },
      { value: "cloud", label: "Felhőben, általunk üzemeltetve" },
      { value: "unsure", label: "Még nem tudom" },
    ],
    message: "Üzenet",
    placeholder: "Mit szeretne megoldani? Mit használ most?",
    consent: "Elolvastam az",
    consentLink: "Adatvédelmi tájékoztatót",
    submit: "Elküldöm",
    sending: "Küldés…",
    note: "Egy munkanapon belül válaszolunk.",
    successTitle: "Köszönjük!",
    successText: "Egy munkanapon belül jelentkezünk.",
    mailSubject: "Megkeresés a yardly.hu-ról",
    mailtoTitle: "Már csak el kell küldeni",
    mailtoText: "Megnyitottuk a levelezőprogramját a kitöltött üzenettel. Ha nem nyílt meg, írjon nekünk közvetlenül: {email}.",
    errorText: "Nem sikerült elküldeni. Próbálja újra, vagy írjon az {email} címre.",
    errors: {
      topic: "Válasszon egy témát.",
      name: "Adja meg a nevét.",
      company: "Adja meg a cége nevét.",
      email: "Adjon meg egy érvényes e-mail-címet.",
      consent: "A küldéshez fogadja el az adatvédelmi tájékoztatót.",
    },
  },
  faq: [
    { q: "Mennyi ideig tart egy bemutató?", a: "Általában 30 perc, online." },
    { q: "Mennyibe kerül a Yardly?", a: "A felmérés után egyedi ajánlatot adunk. Az ár a járművek és eszközök számától, a testreszabástól, az integrációktól és az üzemeltetés módjától függ." },
    { q: "Segítenek az adatok áthozásában?", a: "Igen, ez a bevezetés része: Excelből vagy a régi rendszerből mi hozzuk át őket. Saját szerveres telepítésnél ehhez Önök adnak időkorlátos, naplózott hozzáférést, adatfeldolgozási szerződés alapján." },
  ],
};

export const privacy = {
  title: "Adatvédelmi tájékoztató | Yardly",
  description: "Hogyan kezeli a Yardly a weboldalon megadott és a látogatás során keletkező személyes adatokat.",
  heading: "Adatvédelmi tájékoztató",
  intro: "Ez a tájékoztató a yardly.hu weboldalra vonatkozik: a kapcsolatfelvételi űrlapon és e-mailben megadott adatokra, valamint a webszerver technikai naplóira. A Yardly alkalmazás használata során kezelt adatokról az ügyfeleinkkel kötött szerződés és külön tájékoztató szól.",
  body: `
<h2>1. Az adatkezelő</h2>
<p><mark class="ph">[Cégnév]</mark><br>Székhely: <mark class="ph">[székhely]</mark><br>Cégjegyzékszám: <mark class="ph">[cégjegyzékszám]</mark><br>Adószám: <mark class="ph">[adószám]</mark><br>E-mail: <a href="mailto:{email}">{email}</a></p>

<h2>2. Milyen adatokat kezelünk</h2>
<h3>Kapcsolatfelvételi űrlap és e-mail</h3>
<p>A megkeresés témája, név, cégnév, e-mail-cím, telefonszám, a járművek és eszközök hozzávetőleges száma, az üzemeltetés kívánt módja és az üzenet tartalma, valamint mindaz, amit e-mailben önként megoszt velünk. Az űrlap az Ön levelezőprogramjában nyit meg egy e-mailt; az adatok csak az elküldött levélben jutnak el hozzánk.</p>
<h3>Technikai naplók</h3>
<p>A webszerver a hibák kivizsgálásához naplózhatja a hibás kérés időpontját és a küldő IP-címét. Látogatási (forgalmi) naplót nem vezetünk.</p>
<h3>Sütik és látogatottságmérés</h3>
<p>A weboldal nem helyez el sütit, nem mér látogatottságot, és nem használ követőkódot. Betűtípust, szkriptet vagy más tartalmat sem tölt be harmadik féltől.</p>

<h2>3. Az adatkezelés célja és jogalapja</h2>
<ul>
<li><strong>Megkeresés megválaszolása, ajánlatadás:</strong> a szerződéskötést megelőző lépések megtétele (GDPR 6. cikk (1) b)), illetve vállalkozás nevében érkező megkeresésnél az üzleti kapcsolattartáshoz fűződő jogos érdekünk (GDPR 6. cikk (1) f)). Az űrlap „Elolvastam” jelölőnégyzete azt rögzíti, hogy a tájékoztatót megismerte; nem hozzájárulás.</li>
<li><strong>Technikai naplók:</strong> az oldal biztonságos működtetéséhez és a hibák elhárításához fűződő jogos érdekünk (GDPR 6. cikk (1) f)).</li>
</ul>

<h2>4. Meddig őrizzük az adatokat</h2>
<ul>
<li>Megkeresések: a megkereséstől számított 1 évig; ha szerződést kötünk, a szerződés megszűnéséig, illetve ameddig jogszabály előírja.</li>
<li>Technikai naplók: legfeljebb 90 napig.</li>
</ul>

<h2>5. Kik férnek hozzá az adatokhoz</h2>
<p>Az adatokhoz a Yardly munkatársai férnek hozzá, a feladatukhoz szükséges mértékben. Az alábbi szolgáltatókat vesszük igénybe:</p>
<ul>
<li><strong>Amazon Web Services EMEA SARL</strong> (Luxemburg): tárhely és az oldal üzemeltetése, frankfurti (EU-s) adatközpontban.</li>
<li><strong>Google Ireland Ltd.</strong> (Google Workspace): az e-mailek fogadása és tárolása. Az adatokat EU-s adatközpontban is tárolhatja, és az Egyesült Államokba is továbbíthatja; a Google részt vesz az EU–USA adatvédelmi keretrendszerben.</li>
</ul>
<p><mark class="ph">[Jogi ellenőrzés: az adatfeldolgozói szerződések megléte és tartalma.]</mark></p>

<h2>6. Az Ön jogai</h2>
<p>Kérheti a személyes adataihoz való hozzáférést, azok helyesbítését, törlését vagy kezelésük korlátozását, élhet az adathordozhatósághoz való jogával, és tiltakozhat a jogos érdeken alapuló adatkezelés ellen. Kérését a(z) <a href="mailto:{email}">{email}</a> címre küldheti; legkésőbb egy hónapon belül válaszolunk.</p>

<h2>7. Jogorvoslat</h2>
<p>Ha úgy gondolja, hogy az adatkezelés jogsértő, panasszal fordulhat a Nemzeti Adatvédelmi és Információszabadság Hatósághoz (NAIH, 1055 Budapest, Falk Miksa utca 9–11., <a href="https://naih.hu" rel="noopener">naih.hu</a>), vagy bírósághoz fordulhat.</p>

<p class="legal-meta">Hatályos: <mark class="ph">[dátum]</mark></p>`,
};

export const imprint = {
  title: "Impresszum | Yardly",
  description: "A yardly.hu weboldal üzemeltetőjének adatai.",
  heading: "Impresszum",
  intro: "Az elektronikus kereskedelmi szolgáltatásokról szóló 2001. évi CVIII. törvény alapján.",
  body: `
<h2>Szolgáltató</h2>
<dl class="legal-dl">
<div><dt>Cégnév</dt><dd><mark class="ph">[cégnév]</mark></dd></div>
<div><dt>Székhely</dt><dd><mark class="ph">[székhely]</mark></dd></div>
<div><dt>Cégjegyzékszám</dt><dd><mark class="ph">[cégjegyzékszám]</mark></dd></div>
<div><dt>Nyilvántartó bíróság</dt><dd><mark class="ph">[cégbíróság]</mark></dd></div>
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
};

// The two ways the Yardly runs. Shown on the home page and on the Üzemeltetés page.
export const hostingOptions = [
  {
    icon: "server",
    name: "Saját szerveren",
    tagline: "Ha az adatoknak a cégen belül kell maradniuk.",
    points: [
      "Az Önök szerverén, adatközpontjában vagy privát felhőjében",
      "A szervert a saját IT-csapatuk üzemelteti",
      "Az Önök mentési, naplózási és biztonsági szabályai szerint",
      "Saját domainen és saját levelezőszerverrel",
      "Az új verziókat átadjuk, az IT-csapatuk telepíti őket",
      "Napi üzemben nem férünk hozzá az adataikhoz",
    ],
  },
  {
    icon: "cloud",
    name: "Felhőben, általunk üzemeltetve",
    tagline: "Ha nem szeretnének szerverrel foglalkozni.",
    points: [
      "Saját, elkülönített példány, külön adatbázissal",
      "EU-s adatközpontban (Amazon Web Services, Frankfurt)",
      "A mentést, a frissítést és a felügyeletet mi végezzük",
      "Éjszakánkénti mentés, titkosított tárolással",
      "Saját címen, például yardly.cegnev.hu",
    ],
  },
];

// Hogyan dolgozunk: from the first call to support after go-live. No training step: it is not
// part of the offer.
export const process = {
  title: "Hogyan dolgozunk – felméréstől a támogatásig | Yardly",
  description: "Felmérjük, hogyan dolgoznak, a cég szabályaira szabjuk a Yardlyt, telepítjük az Önök szerverére vagy a felhőbe, áthozzuk az adatokat, és utána is támogatjuk.",
  eyebrow: "Hogyan dolgozunk",
  h1: "A rendszert a cégükhöz igazítjuk, nem fordítva",
  lead: "Nem dobozos szoftvert adunk át. Megnézzük, hogyan működik ma a flotta és az eszközpark kezelése, ehhez szabjuk a Yardlyt, a folyamatoktól a jogosultságokig, és összekötjük a cég többi rendszerével.",
  steps: {
    eyebrow: "Bevezetés",
    title: "Négy lépés az első hívástól az éles rendszerig",
    items: [
      {
        title: "Felmérés",
        text: "Megnézzük, hogyan zajlik ma a munka: ki mit rögzít, ki mit hagy jóvá, milyen határidőket figyelnek, és milyen rendszereket használnak már. Ebből írjuk meg az ajánlatot: mit állítunk be, mit fejlesztünk, mit kötünk össze, mennyi idő alatt és mennyiért.",
      },
      {
        title: "Testreszabás",
        text: "Beállítjuk a folyamatokat és jóváhagyásokat, a mezőket, kategóriákat és állapotokat, a szerepköröket és a jogosultságokat. Megírjuk, ami hiányzik, és bekötjük a már használt rendszereiket.",
      },
      {
        title: "Telepítés és adatátvétel",
        text: "Telepítjük az Önök szerverére, vagy elindítjuk az általunk üzemeltetett felhőben. A meglévő adatokat, a járműveket, eszközöket, dokumentumokat és határidőket mi hozzuk át Excelből vagy a régi rendszerből.",
      },
      {
        title: "Támogatás",
        text: "Élesítés után is ott vagyunk, kijelölt kapcsolattartóval, a szerződésben rögzített szolgáltatási szint szerint. Ha a cég működése változik, a rendszer is vele változik.",
      },
    ],
  },
  tailor: {
    eyebrow: "Testreszabás",
    title: "Mit szabunk a cégükre?",
    lead: "Három szinten igazítjuk a Yardlyt. A legtöbb igényt a beállítás lefedi; ami azon túl van, azt fejlesztjük vagy összekötjük.",
    levels: [
      {
        icon: "sliders-horizontal",
        title: "Beállítás",
        text: "A rendszer meglévő részei, a cég szabályai szerint.",
        points: [
          "Folyamatok és jóváhagyások, összeghatárokkal",
          "Saját mezők, kategóriák, típusok és állapotok",
          "Szerepkörök és jogosultsági mátrix",
          "Ellenőrzőlisták, riasztások és emlékeztetők",
          "Dokumentumtípusok, riportok és PDF-ek",
        ],
      },
      {
        icon: "code",
        title: "Egyedi fejlesztés",
        text: "Ami a cég működéséhez kell, de még nincs benne.",
        points: [
          "Új modul vagy képernyő",
          "Egyedi riport, export vagy PDF",
          "Cégre szabott szabályok és számítások",
        ],
      },
      {
        icon: "plug",
        title: "Integráció",
        text: "Összekötés a már használt rendszerekkel.",
        points: [
          "ERP és könyvelés",
          "HR és bérszámfejtés",
          "Hibabejelentő és dokumentumkezelő rendszerek",
          "Üzemanyagkártyák",
          "Raktár- és beléptetőrendszerek",
          "Levelezés a cég saját levelezőszerverén",
          "A cég egyedi, saját fejlesztésű rendszerei",
        ],
      },
    ],
  },
  integrations: {
    eyebrow: "Integráció",
    title: "Összekapcsolás a meglévő rendszerekkel",
    lead: "Felmérjük, milyen rendszereket használnak, és megtervezzük, mi honnan hová menjen. A kapcsolat lehet közvetlen (API vagy adatbázis), vagy ütemezett fájlcsere (Excel, CSV), aszerint, amit a másik rendszer enged.",
    items: [
      { title: "ERP és könyvelés", text: "Beszerzések, számlák és költséghelyek: a járművek és eszközök költségei a könyvelésből jönnek, vagy oda mennek." },
      { title: "HR és bérszámfejtés", text: "A munkatársak listája és a belépők, kilépők: az új kolléga hozzáférést kap, a kilépőé megszűnik." },
      { title: "Üzemanyagkártyák", text: "A DKV-kártyás tankolások már most maguktól bekerülnek. További szolgáltatókat is be tudunk kötni." },
      { title: "Raktár- és beléptetőrendszerek", text: "Eszközök, helyek és mozgások: a leltár és a nyilvántartás ugyanabból az adatból dolgozik." },
      { title: "Hibabejelentő rendszer", text: "A bejelentett hiba a járműhöz vagy eszközhöz kerül, és elindítja a javítás folyamatát; a lezárás visszamegy a hibajegyhez." },
      { title: "Dokumentumkezelő", text: "A forgalmik, szerződések, kötvények és jegyzőkönyvek a cég dokumentumkezelőjében maradnak, a Yardly onnan mutatja őket a járműhöz és az eszközhöz." },
      { title: "Egyedi rendszerek", text: "A cég saját fejlesztésű vagy iparági programjait is bekötjük, amennyiben azok API-t, adatbázist vagy fájlcserét engednek." },
      { title: "Levelezés", text: "Az értesítések a cég saját levelezőszerverén mennek ki." },
    ],
  },
  deliver: {
    eyebrow: "Amit kapnak",
    title: "A bevezetés végén",
    points: [
      "Saját, elkülönített Yardly-példány, az Önök címén",
      "A cég folyamataira, mezőire és szerepköreire beállított rendszer",
      "Áthozott adatok: járművek, eszközök, dokumentumok, határidők",
      "Bekötött integrációk",
      "Kijelölt kapcsolattartó és a szerződésben rögzített támogatás",
      "A Yardly új funkciói, amelyek az Önök példányába is megérkeznek",
    ],
  },
  faq: {
    eyebrow: "Gyakori kérdések",
    title: "Kérdések a bevezetésről",
    items: [
      { q: "Mennyibe kerül?", a: "A felmérés után egyedi ajánlatot adunk. Az ár a járművek és eszközök számától, a testreszabástól, az integrációktól és az üzemeltetés módjától függ." },
      { q: "Mennyi ideig tart a bevezetés?", a: "A testreszabás és az integrációk mértékétől függ. Az ütemtervet az ajánlatban rögzítjük, lépésenként." },
      { q: "Össze tudják kötni a meglévő rendszereinkkel?", a: "Igen. A felmérésen végignézzük, milyen rendszereket használnak, és az ajánlatban rögzítjük, mit kötünk össze és hogyan: közvetlenül (API vagy adatbázis), vagy ütemezett Excel- és CSV-cserével." },
      { q: "Mi van, ha később változnak a folyamataink?", a: "A folyamatokat, a mezőket és a szerepköröket a cég adminisztrátorai maguk is módosíthatják. Nagyobb változásnál mi segítünk." },
      { q: "Megnézhetjük előbb?", a: "Igen. Egy 30 perces online bemutatón egy kitalált cég adataival végigmegyünk a rendszeren, és megbeszéljük, hogyan működne az Önök folyamataival." },
      { q: "Kié az adat?", a: "Az Önöké. A rendszerből bármikor teljes adatexportot készíthetnek Excelben." },
    ],
  },
  cta: {
    eyebrow: "Kezdjük el",
    title: "Kezdjük egy beszélgetéssel.",
    lead: "Egy rövid hívásban megbeszéljük, hogyan dolgoznak most, és mit érdemes a Yardlyra bízni.",
  },
};

// Üzemeltetés: the same system on the customer's own server or run by us in the cloud.
export const hosting = {
  title: "Üzemeltetés: saját szerveren vagy általunk a felhőben | Yardly",
  description: "A Yardly az Önök szerverén is fut, vagy mi üzemeltetjük egy EU-s adatközpontban. Mindkét esetben saját, elkülönített példány, csak az Önök cégének adataival.",
  eyebrow: "Üzemeltetés",
  h1: "Az Önök szerverén, vagy mi üzemeltetjük a felhőben",
  lead: "A Yardly mindkét esetben ugyanaz a rendszer, és mindkét esetben saját, elkülönített példányt kapnak: más cég adata nincs benne. A választás azon múlik, hol legyenek az adatok, és ki gondozza a szervert.",
  same: {
    eyebrow: "Mindkét esetben",
    title: "Ami mindkét üzemeltetésnél ugyanaz",
    items: [
      { title: "Ugyanaz a rendszer", text: "Minden funkció mindkét változatban benne van, és a fejlesztések is megérkeznek." },
      { title: "Csak az Önök adatai", text: "Egycéges telepítés: más cég adata nincs a rendszerben." },
      { title: "Biztonság", text: "Kétlépcsős belépés, titkosított kapcsolat, szerepkörök, jogosultsági mátrix és változásnapló." },
      { title: "Az adatok az Önökéi", text: "Teljes adatexport Excelben, bármikor." },
      { title: "Böngészőből és telefonról", text: "A kollégáknak semmit nem kell telepíteniük." },
      { title: "Kijelölt kapcsolattartó", text: "A támogatás a szerződésben rögzített szolgáltatási szint szerint." },
    ],
  },
  specs: {
    eyebrow: "Saját szerveres telepítés",
    title: "Technikai részletek",
    lead: "A Yardly szabványos, jól ismert összetevőkből áll, így a cég IT-csapata a saját eszközeivel felügyelheti.",
    items: [
      { k: "Futtatás", v: "Linux-szerver, konténerekben (Docker)" },
      { k: "Adatbázis", v: "PostgreSQL" },
      { k: "Elérés", v: "Böngészőből és telefonról, HTTPS-en" },
      { k: "Belépés", v: "Kétlépcsős azonosítás, szerepkörök és jogosultsági mátrix" },
      { k: "Levelezés", v: "A cég saját levelezőszerverén keresztül" },
      { k: "Szerverigény", v: "A járművek, eszközök és felhasználók számától függ; a felmérés után megadjuk" },
    ],
  },
  fit: {
    eyebrow: "Melyiket válasszák?",
    title: "Melyik illik Önökhöz?",
    items: [
      { title: "Saját szerver, ha…", text: "az adatoknak a cégen belül kell maradniuk, saját IT-csapatuk és biztonsági szabályaik vannak, vagy a rendszert belső, kívülről nem elérhető rendszerekhez kell kötni." },
      { title: "Felhő, ha…", text: "nem szeretnének szervert üzemeltetni, gyorsan indulnának, és szívesen ránk bízzák a mentést, a frissítést és a felügyeletet." },
    ],
  },
  faq: {
    eyebrow: "Gyakori kérdések",
    title: "Kérdések az üzemeltetésről",
    items: [
      { q: "Ki üzemelteti a szervert?", a: "Saját szervernél a saját IT-csapatuk; mi a telepítésben segítünk, és a Yardlyhoz adunk támogatást. A felhős változatnál mi üzemeltetjük." },
      { q: "Hozzáférnek az adatainkhoz?", a: "Saját szervernél napi üzemben nem férünk hozzá az adataikhoz. A bevezetéskori adatátvételt, az összekötések beállítását és a kérésükre végzett hibaelhárítást adatfeldolgozási szerződés alapján, az Önök által adott, időkorlátos és naplózott hozzáféréssel végezzük. A felhős változatnál az adatokat mi tároljuk, adatfeldolgozóként, szintén szerződés alapján." },
      { q: "Hol vannak az adatok a felhős változatnál?", a: "Az Amazon Web Services frankfurti (EU-s) adatközpontjában, a cég saját, elkülönített példányában. A mentések titkosítva készülnek." },
      { q: "Megkapjuk a fejlesztéseket?", a: "Igen. A felhős változatnál mi telepítjük őket. Saját szervernél átadjuk az új verziót, és az IT-csapatuk telepíti, amikor nekik megfelel." },
      { q: "Válthatunk később?", a: "Igen. Az adatokat át tudjuk költöztetni a felhőből a saját szerverükre, vagy fordítva." },
      { q: "Mennyibe kerül?", a: "A felmérés után egyedi ajánlatot adunk. Az ár az üzemeltetés módjától, a járművek és eszközök számától, a testreszabástól és az integrációktól függ." },
    ],
  },
  cta: {
    eyebrow: "Beszéljünk",
    title: "Beszéljük meg, melyik illik Önökhöz.",
    lead: "Egy rövid hívásban felmérjük, hol és hogyan érdemes futtatni a rendszert.",
  },
};
