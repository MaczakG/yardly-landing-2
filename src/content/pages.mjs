// Rólunk, Kapcsolat and the legal pages. Values marked [kitöltendő] still need real data
// before going live (company details, team, story); they render as highlighted placeholders.

export const about = {
  title: "Rólunk – Yardly",
  description: "Magyar cégeknek épített flotta- és eszközkezelő rendszer. Ismerd meg a történetünket és azt, amiben hiszünk.",
  eyebrow: "Rólunk",
  h1: "Magyar cégeknek építjük, a napi munkából kiindulva",
  lead: "A Yardly azért született, hogy a flotta- és eszközkezelés ne táblázatokban, e-mailekben és fejekben éljen, hanem egy helyen, ahol a rendszer szól, mielőtt baj lenne.",
  story: {
    eyebrow: "A történetünk",
    title: "A név az udvarból jön, ahol a cég eszközei dolgoznak.",
    paragraphs: [
      "A yard angolul udvart, telephelyet jelent: azt a helyet, ahol egy cég járművei, targoncái és gépei állnak és dolgoznak. Ezekből sok van, és mindegyiknek megvannak a maga határidői, szervizei és költségei.",
      "A Yardlyt Maczák Gergő alapította Budapesten azzal a céllal, hogy ezek nyilvántartása ne bonyolult táblázatokban és kézi adminisztrációban éljen, hanem egy átlátható rendszerben, amely szól, mielőtt valami lejár.",
      "Ma a járművek mellett az eszközparkot, a leltárt és az egyedi workflow-kat is kezeli. A fejlesztést az ügyfelek kérdései és a napi munka valós gondjai vezetik.",
    ],
    plan: { title: "Egy telephely felülnézetből: raktár targoncákkal, parkoló járművekkel, a szervizre esedékes eszközök kiemelve.", warehouse: "RAKTÁR", forklifts: "TARGONCÁK", parking: "PARKOLÓ", gate: "BEJÁRAT" },
    caption: "A yard: a telephely, ahol a cég eszközei dolgoznak. Kiemelve, aminek közeleg a szervize.",
  },
  mission: {
    eyebrow: "Küldetés",
    text: "Hogy egy magyar cégnél senkinek ne kelljen emlékeznie a határidőkre, és mindenki pontosan tudja, mi van, hol van, és mennyibe kerül.",
  },
  values: {
    eyebrow: "Amiben hiszünk",
    title: "Amiben hiszünk",
    items: [
      { title: "Egyszerűség", text: "A Yardlyt nem kell betanítani. Ami kell, egy kattintásra van, ami nem kell, nem látszik." },
      { title: "Átláthatóság", text: "Nyilvános árak, hűségidő nélkül. Az analitika magyarázható szabályokkal dolgozik, minden ajánlás mellé indoklást ad." },
      { title: "Az adat a tiéd", text: "Bármikor letöltheted az egészet Excelben. Csomagváltáskor sem törlünk semmit." },
      { title: "Biztonság alapból", text: "Kétlépcsős belépés, titkosított kapcsolat, cégenként elkülönített adatok, minden csomagban." },
      { title: "Folyamatos fejlesztés", text: "Az appban látod, mi újult meg, és a „Szólj, ha elérhető” gombbal jelezheted, mire vársz." },
    ],
  },
  why: {
    eyebrow: "Miért a Yardly",
    title: "Miért a Yardly",
    items: [
      { title: "Magyar nyelven, magyar cégeknek", text: "Felület, támogatás, számla és ÁFA, ahogy itthon megszokott." },
      { title: "Flotta és eszközpark egyben", text: "Nem kell két rendszert fizetni és összekapcsolni." },
      { title: "Gyors bevezetés", text: "Excel-importtal a meglévő nyilvántartás percek alatt átkerül." },
      { title: "Telefonon is", text: "A sofőrök és a raktárosok alkalmazás telepítése nélkül dolgoznak benne." },
    ],
  },
  team: {
    eyebrow: "Kik vagyunk",
    title: "Kis csapat, közvetlen kapcsolat",
    text: "Budapesti csapat vagyunk, Maczák Gergő alapító vezetésével. Ha bemutatót kérsz, ő vagy valaki a csapatból személyesen keres. A cégadatok az Impresszumban találhatók.",
  },
  cta: {
    eyebrow: "Ismerj meg minket",
    title: "Ismerj meg minket egy bemutatón",
    lead: "30 perc, a saját kérdéseiddel. Vagy próbáld ki egyedül, 14 napig ingyen.",
  },
};

export const contact = {
  title: "Kapcsolat – Yardly",
  description: "Kérj bemutatót vagy ajánlatot, vagy kérdezz bármit. Egy munkanapon belül válaszolunk.",
  eyebrow: "Kapcsolat",
  h1: "Beszéljünk!",
  lead: "Kérj bemutatót, ajánlatot, vagy kérdezz bármit. Egy munkanapon belül válaszolunk.",
  direct: [
    { k: "E-mail", email: true },
    { k: "Székhely", v: "Budapest" },
  ],
  customer: "Ha már ügyfelünk vagy: a támogatást a csomagod szerint adjuk. Alapnál e-mailben, Üzletinél egy munkanapon belül, Prémiumnál 4 munkaórán belül, kijelölt kapcsolattartóval.",
  loginLink: "Már használod? Bejelentkezés",
  stepsTitle: "Mi történik utána?",
  steps: [
    "Egy munkanapon belül válaszolunk e-mailben vagy telefonon. Bemutatókérésnél Maczák Gergő, a Yardly alapítója személyesen keres.",
    "Bemutatónál egy 30 perces online alkalmat egyeztetünk, ahol a saját kérdéseidre koncentrálunk.",
    "Ha szeretnéd, segítünk az Excel-importban, hogy a próbaidőben már a saját adataiddal dolgozz.",
  ],
  form: {
    title: "Írj nekünk",
    intro: "A csillaggal jelölt mezők kötelezők.",
    topic: "Miben segíthetünk?",
    topics: [
      { value: "demo", label: "Bemutatót kérek" },
      { value: "price", label: "Kérdésem van az árakról" },
      { value: "quote", label: "Vállalati megoldás (saját szerver, integráció, 300 jármű felett)" },
      { value: "support", label: "Ügyfélként segítség kell" },
      { value: "notify", label: "Szólj, ha elérhető egy funkció" },
      { value: "other", label: "Egyéb" },
    ],
    name: "Név",
    company: "Cég",
    email: "E-mail",
    phone: "Telefon",
    phoneHint: "Ha inkább felhívnál minket",
    vehicles: "Járművek száma",
    vehiclesHint: "Nagyjából is jó",
    equipment: "Eszközök száma",
    equipmentHint: "Targoncák, gépek, laptopok, bármi",
    message: "Üzenet",
    placeholder: "Mit szeretnél megoldani? Mit használsz most?",
    consent: "Elolvastam az",
    consentLink: "Adatvédelmi tájékoztatót",
    submit: "Elküldöm",
    sending: "Küldés…",
    note: "Egy munkanapon belül válaszolunk.",
    successTitle: "Köszönjük!",
    successText: "Egy munkanapon belül jelentkezünk. Addig is kipróbálhatod a Yardlyt 14 napig ingyen.",
    mailSubject: "Megkeresés a yardly.hu-ról",
    mailtoTitle: "Már csak el kell küldeni",
    mailtoText: "Megnyitottuk a levelezőprogramodat a kitöltött üzenettel. Ha nem nyílt meg, írj nekünk közvetlenül: {email}.",
    errorText: "Nem sikerült elküldeni. Próbáld újra, vagy írj az {email} címre.",
    notifyPrefix: "Szólj, ha elérhető:",
    errors: {
      topic: "Válassz egy témát.",
      name: "Add meg a neved.",
      company: "Add meg a céged nevét.",
      email: "Adj meg egy érvényes e-mail-címet.",
      consent: "A küldéshez fogadd el az adatvédelmi tájékoztatót.",
    },
  },
  faq: [
    { q: "Mennyi ideig tart egy bemutató?", a: "Általában 30 perc, online." },
    { q: "Segítetek az adatok áthozásában?", a: "Igen. Az Excel-sablon a legtöbb esetben elég, de szívesen ránézünk a fájlodra." },
    { q: "Lehet saját szerverre telepíteni?", a: "Igen, egyedi ajánlat alapján. Válaszd az „Egyedi ajánlat” témát." },
  ],
};

export const privacy = {
  title: "Adatvédelmi tájékoztató | Yardly",
  description: "Hogyan kezeli a Yardly a weboldalon megadott és a látogatás során keletkező személyes adatokat.",
  heading: "Adatvédelmi tájékoztató",
  intro: "Ez a tájékoztató a yardly.hu weboldalra vonatkozik: a kapcsolatfelvételi űrlapon megadott adatokra, az e-mailes megkeresésekre és a látogatottság mérésére. A Yardly alkalmazás használata során kezelt adatokról külön tájékoztató szól.",
  body: `
<h2>1. Az adatkezelő</h2>
<p><mark class="ph">[Cégnév]</mark><br>Székhely: <mark class="ph">[székhely]</mark><br>Cégjegyzékszám: <mark class="ph">[cégjegyzékszám]</mark><br>Adószám: <mark class="ph">[adószám]</mark><br>E-mail: <a href="mailto:{email}">{email}</a></p>

<h2>2. Milyen adatokat kezelünk</h2>
<h3>Kapcsolatfelvételi űrlap és e-mail</h3>
<p>A megkeresés témája, név, cégnév, e-mail-cím, telefonszám, a járművek és eszközök hozzávetőleges száma és az üzenet tartalma, valamint mindaz, amit e-mailben önként megosztasz velünk.</p>
<h3>Látogatottságmérés (csak hozzájárulással)</h3>
<p>Ha hozzájárulsz, a Google Analytics sütik segítségével mérjük, mely oldalakat és hogyan használják a látogatók: a megtekintett oldalak, a látogatás ideje, az eszköz és a böngésző típusa, a hozzávetőleges földrajzi hely. Hozzájárulás nélkül ilyen sütit nem helyezünk el.</p>
<h3>Technikai naplók</h3>
<p>A tárhelyszolgáltató szerverei a kérések kiszolgálásához és a visszaélések kivédéséhez naplózzák az IP-címet és a kérés időpontját.</p>

<h2>3. Az adatkezelés célja és jogalapja</h2>
<ul>
<li><strong>Megkeresés megválaszolása, ajánlatadás:</strong> a hozzájárulásod (GDPR 6. cikk (1) a)), illetve a szerződéskötést megelőző lépések (GDPR 6. cikk (1) b)).</li>
<li><strong>Látogatottságmérés:</strong> a hozzájárulásod (GDPR 6. cikk (1) a)), amelyet bármikor visszavonhatsz.</li>
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
<li><strong>Google Ireland Ltd.</strong>: látogatottságmérés, kizárólag a hozzájárulásod esetén. Az adatok az Egyesült Államokba is továbbításra kerülhetnek; a Google részt vesz az EU–USA adatvédelmi keretrendszerben.</li>
</ul>
<p><mark class="ph">[Jogi ellenőrzés: az adatfeldolgozói szerződések megléte és tartalma.]</mark></p>

<h2>6. Sütik</h2>
<p>A sütikkel kapcsolatos döntésedet a böngésződ tárolja el, ehhez nem használunk sütit. Hozzájárulás esetén a Google Analytics a <code>_ga</code> és <code>_ga_*</code> sütiket helyezi el, legfeljebb 2 évre. Döntésedet bármikor megváltoztathatod az oldal alján található „Süti-beállítások” hivatkozással.</p>

<h2>7. A jogaid</h2>
<p>Kérheted a személyes adataidhoz való hozzáférést, azok helyesbítését, törlését vagy kezelésük korlátozását, élhetsz az adathordozhatósághoz és a tiltakozáshoz való jogoddal, és a hozzájárulásodat bármikor visszavonhatod. Kérésedet a(z) <a href="mailto:{email}">{email}</a> címre küldheted.</p>

<h2>8. Jogorvoslat</h2>
<p>Ha úgy gondolod, hogy az adatkezelés jogsértő, panasszal fordulhatsz a Nemzeti Adatvédelmi és Információszabadság Hatósághoz (NAIH, 1055 Budapest, Falk Miksa utca 9–11., <a href="https://naih.hu" rel="noopener">naih.hu</a>), vagy bírósághoz fordulhatsz.</p>

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

// Vállalati megoldás: the self-hosted, integrated version for larger companies.
export const enterprise = {
  title: "Vállalati megoldás – saját szerveren, a meglévő rendszereidhez kötve | Yardly",
  description:
    "A Yardly a saját szervereden is fut, és összekötjük a már használt rendszereitekkel: ERP, könyvelés, HR, telematika, üzemanyagkártyák. Egyedi ajánlat 300 jármű felett is.",
  eyebrow: "Vállalati megoldás",
  h1: "A Yardly a saját szervereden, a meglévő rendszereidhez kötve",
  lead: "Nagyobb cégeknél a flotta és az eszközpark adatai már sok helyen ott vannak: az ERP-ben, a könyvelésben, a HR-rendszerben, a telematikában. A Yardly ezeket nem lecseréli, hanem összeköti, és ha kell, a saját szervereteken fut.",
  quoteButton: "Ajánlatot kérek",
  pillars: [
    { title: "Összekötjük, amit már használtok", text: "Az adatok egyszer kerülnek be, és oda mennek tovább, ahol szükség van rájuk. Nincs kétszeri rögzítés." },
    { title: "A ti szervereteken fut", text: "Saját szerveren, adatközpontban vagy privát felhőben. Az adatok a cégen belül maradnak." },
    { title: "A ti működésetekre szabva", text: "Saját workflow-k, mezők, szerepkörök és riportok, a cégetek szabályai szerint." },
  ],
  integrations: {
    eyebrow: "Integráció",
    title: "Összekapcsolás a meglévő rendszerekkel",
    lead: "Felmérjük, milyen rendszereket használtok, és megtervezzük, mi honnan hová menjen. A kapcsolat lehet közvetlen (API vagy adatbázis), vagy ütemezett fájlcsere (Excel, CSV), aszerint, amit a másik rendszer enged.",
    items: [
      { title: "ERP és könyvelés", text: "Beszerzések, számlák és költséghelyek: a járművek és eszközök költségei a könyvelésből jönnek, vagy oda mennek." },
      { title: "HR és bérszámfejtés", text: "A munkatársak listája és a belépők, kilépők: az új kolléga hozzáférést kap, a kilépőé megszűnik." },
      { title: "Telematika és GPS", text: "A km-óra magától frissül, így a km-alapú szervizek és ellenőrzések mindig a valós futáshoz igazodnak." },
      { title: "Üzemanyagkártyák", text: "A DKV-kártyás tankolások már most maguktól bekerülnek. További szolgáltatókat is be tudunk kötni." },
      { title: "Raktár- és beléptetőrendszerek", text: "Eszközök, helyek és mozgások: a leltár és a nyilvántartás ugyanabból az adatból dolgozik." },
      { title: "Levelezés és egyszeri belépés", text: "Az értesítések a saját levelezőszervereteken mennek ki. Az egyszeri belépés (Microsoft Entra ID, Google) hamarosan érkezik." },
    ],
  },
  hosting: {
    eyebrow: "Saját szerveres telepítés",
    title: "Az adatok nálatok maradnak",
    lead: "A Yardly a felhős változattal azonos rendszer, de csak a ti cégetek adataival, a ti infrastruktúrátokon.",
    points: [
      "Saját szerveren, adatközpontban vagy privát felhőben",
      "Egycéges telepítés: más cég adata nincs a rendszerben",
      "A ti mentési, naplózási és biztonsági szabályaitok szerint",
      "Saját domainen és saját levelezőszerverrel",
      "A frissítéseket egyeztetett időpontban telepítjük, visszaállítható módon",
    ],
    specsTitle: "Technikai részletek",
    specs: [
      { k: "Futtatás", v: "Linux-szerver, konténerekben (Docker)" },
      { k: "Adatbázis", v: "PostgreSQL" },
      { k: "Elérés", v: "Böngészőből és telefonról, HTTPS-en" },
      { k: "Belépés", v: "Kétlépcsős azonosítás, szerepkörök és jogosultsági mátrix" },
      { k: "Frissítés", v: "Ugyanazok a fejlesztések, mint a felhős változatban" },
    ],
  },
  steps: {
    eyebrow: "Bevezetés",
    title: "Így indul a közös munka",
    items: [
      "Felmérés: megnézzük, milyen rendszereket használtok, és hogyan zajlik ma a flotta és az eszközpark kezelése.",
      "Ajánlat és ütemterv: leírjuk, mit kötünk össze, hová telepítünk, mennyi idő alatt és mennyiért.",
      "Telepítés és összekötés: felállítjuk a rendszert, bekötjük az integrációkat, és áthozzuk a meglévő adatokat.",
      "Betanítás és támogatás: megtanítjuk a kollégáknak, élesítjük, és utána is ott vagyunk, kijelölt kapcsolattartóval.",
    ],
  },
  fit: {
    eyebrow: "Kinek szól",
    title: "Kinek ajánljuk",
    items: [
      { title: "300 jármű felett", text: "Nagy flottára egyedi árat adunk, a járművek és eszközök számához igazítva." },
      { title: "Szigorú IT-előírásokkal", text: "Ha az adatoknak a cégen belül kell maradniuk, vagy saját biztonsági szabályaitok vannak." },
      { title: "Sok rendszerrel", text: "Ha a flotta és az eszközpark adatai már több helyen vannak, és nem akartok kétszer rögzíteni." },
      { title: "Saját folyamatokkal", text: "Ha a jóváhagyások, a szerviz és a leltár a cégetek saját szabályai szerint megy." },
    ],
  },
  faq: {
    eyebrow: "Gyakori kérdések",
    title: "Kérdések a vállalati megoldásról",
    items: [
      { q: "Mennyibe kerül?", a: "A felmérés után egyedi ajánlatot adunk. Az ár a járművek és eszközök számától, a telepítés módjától és az integrációktól függ." },
      { q: "Ki üzemelteti a szervert?", a: "Ahogy nektek jobb: üzemeltetheti a ti IT-csapatotok, de mi is megtehetjük, távoli eléréssel." },
      { q: "Megkapjuk a fejlesztéseket?", a: "Igen. A saját szerveres változat ugyanaz a rendszer, mint a felhős, a frissítéseket egyeztetett időpontban telepítjük." },
      { q: "Ki lehet előbb próbálni?", a: "Igen. A 14 napos próbával a felhős változatot nézheted meg, a próbaidő alatt felvitt adatokat pedig át tudjuk költöztetni." },
    ],
  },
  cta: {
    eyebrow: "Beszéljünk",
    title: "Beszéljük meg, mire van szükségetek.",
    lead: "Egy munkanapon belül jelentkezünk, és egy rövid hívásban felmérjük, mit érdemes összekötni.",
  },
};
