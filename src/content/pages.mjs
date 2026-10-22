// Kapcsolat and the legal pages. Values marked [kitöltendő] still need real data
// before going live (company details, team, story); they render as highlighted placeholders.

export const contact = {
  title: "Kapcsolat – Yardly",
  description: "Kérjen bemutatót vagy ajánlatot, vagy kérdezzen bármit. Egy munkanapon belül válaszolunk.",
  eyebrow: "Kapcsolat",
  h1: "Beszéljünk!",
  lead: "Kérjen bemutatót, ajánlatot, vagy kérdezzen bármit. Egy munkanapon belül válaszolunk.",
  direct: [
    { k: "E-mail", email: true },
    { k: "Székhely", v: "Budapest" },
  ],
  customer: "Ha már ügyfelünk: a támogatást a csomagja szerint adjuk. Alapnál e-mailben, Üzletinél egy munkanapon belül, Prémiumnál 4 munkaórán belül, kijelölt kapcsolattartóval.",
  loginLink: "Már használja? Bejelentkezés",
  stepsTitle: "Mi történik utána?",
  steps: [
    "Egy munkanapon belül válaszolunk e-mailben vagy telefonon. Bemutatókérésnél Maczák Gergő, a Yardly alapítója személyesen keresi.",
    "Bemutatónál egy 30 perces online alkalmat egyeztetünk, ahol az Ön kérdéseire koncentrálunk.",
    "Ha szeretné, segítünk az Excel-importban, hogy a próbaidőben már a saját adataival dolgozhasson.",
  ],
  form: {
    title: "Írjon nekünk",
    intro: "A csillaggal jelölt mezők kötelezők.",
    topic: "Miben segíthetünk?",
    topics: [
      { value: "demo", label: "Bemutatót kérek" },
      { value: "price", label: "Kérdésem van az árakról" },
      { value: "quote", label: "Egyedi ajánlat (300 jármű felett)" },
      { value: "support", label: "Ügyfélként segítség kell" },
      { value: "notify", label: "Értesítést kérek egy funkcióról" },
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
    message: "Üzenet",
    placeholder: "Mit szeretne megoldani? Mit használ most?",
    consent: "Elolvastam az",
    consentLink: "Adatvédelmi tájékoztatót",
    submit: "Elküldöm",
    sending: "Küldés…",
    note: "Egy munkanapon belül válaszolunk.",
    successTitle: "Köszönjük!",
    successText: "Egy munkanapon belül jelentkezünk. Addig is kipróbálhatja a Yardlyt 14 napig ingyen.",
    mailSubject: "Megkeresés a yardly.hu-ról",
    mailtoTitle: "Már csak el kell küldeni",
    mailtoText: "Megnyitottuk a levelezőprogramját a kitöltött üzenettel. Ha nem nyílt meg, írjon nekünk közvetlenül: {email}.",
    errorText: "Nem sikerült elküldeni. Próbálja újra, vagy írjon az {email} címre.",
    notifyPrefix: "Értesítést kérek, ha elérhető:",
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
    { q: "Segítenek az adatok áthozásában?", a: "Igen. Az Excel-sablon a legtöbb esetben elég, de szívesen ránézünk a fájljára." },
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
<p>A megkeresés témája, név, cégnév, e-mail-cím, telefonszám, a járművek és eszközök hozzávetőleges száma és az üzenet tartalma, valamint mindaz, amit e-mailben önként megoszt velünk.</p>
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
<p>Kérheti a személyes adataihoz való hozzáférést, azok helyesbítését, törlését vagy kezelésük korlátozását, élhet az adathordozhatósághoz és a tiltakozáshoz való jogával, és hozzájárulását bármikor visszavonhatja. Kérését a(z) <a href="mailto:{email}">{email}</a> címre küldheti.</p>

<h2>8. Jogorvoslat</h2>
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

// Vállalati megoldás: the self-hosted, integrated version for larger companies.
export const enterprise = {
  title: "Vállalati megoldás – saját szerveren, a meglévő rendszereihez kötve | Yardly",
  description:
    "A Yardly a saját szerverén is fut, és összekötjük a már használt rendszereivel: ERP, könyvelés, HR, telematika, üzemanyagkártyák. Egyedi ajánlat 300 jármű felett is.",
  eyebrow: "Vállalati megoldás",
  h1: "A Yardly a saját szerverén, a meglévő rendszereihez kötve",
  lead: "Nagyobb cégeknél a flotta és az eszközpark adatai már sok helyen ott vannak: az ERP-ben, a könyvelésben, a HR-rendszerben, a telematikában. A Yardly ezeket nem lecseréli, hanem összeköti, és ha kell, az Önök saját szerverén fut.",
  quoteButton: "Ajánlatot kérek",
  pillars: [
    { title: "Összekötjük, amit már használnak", text: "Az adatok egyszer kerülnek be, és oda mennek tovább, ahol szükség van rájuk. Nincs kétszeri rögzítés." },
    { title: "Az Önök szerverén fut", text: "Saját szerveren, adatközpontban vagy privát felhőben. Az adatok a cégen belül maradnak." },
    { title: "Az Önök működésére szabva", text: "Saját workflow-k, mezők, szerepkörök és riportok, a cég szabályai szerint." },
  ],
  integrations: {
    eyebrow: "Integráció",
    title: "Összekapcsolás a meglévő rendszerekkel",
    lead: "Felmérjük, milyen rendszereket használnak, és megtervezzük, mi honnan hová menjen. A kapcsolat lehet közvetlen (API vagy adatbázis), vagy ütemezett fájlcsere (Excel, CSV), aszerint, amit a másik rendszer enged.",
    items: [
      { title: "ERP és könyvelés", text: "Beszerzések, számlák és költséghelyek: a járművek és eszközök költségei a könyvelésből jönnek, vagy oda mennek." },
      { title: "HR és bérszámfejtés", text: "A munkatársak listája és a belépők, kilépők: az új kolléga hozzáférést kap, a kilépőé megszűnik." },
      { title: "Telematika és GPS", text: "A km-óra magától frissül, így a km-alapú szervizek és ellenőrzések mindig a valós futáshoz igazodnak." },
      { title: "Üzemanyagkártyák", text: "A DKV-kártyás tankolások már most maguktól bekerülnek. További szolgáltatókat is be tudunk kötni." },
      { title: "Raktár- és beléptetőrendszerek", text: "Eszközök, helyek és mozgások: a leltár és a nyilvántartás ugyanabból az adatból dolgozik." },
      { title: "Levelezés", text: "Az értesítések a cég saját levelezőszerverén mennek ki." },
    ],
  },
  hosting: {
    eyebrow: "Saját szerveres telepítés",
    title: "Az adatok Önöknél maradnak",
    lead: "A Yardly a felhős változattal azonos rendszer, de csak az Önök cégének adataival, az Önök infrastruktúráján.",
    points: [
      "Saját szerveren, adatközpontban vagy privát felhőben",
      "Egycéges telepítés: más cég adata nincs a rendszerben",
      "Az Önök mentési, naplózási és biztonsági szabályai szerint",
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
      "Felmérés: megnézzük, milyen rendszereket használnak, és hogyan zajlik ma a flotta és az eszközpark kezelése.",
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
      { title: "Szigorú IT-előírásokkal", text: "Ha az adatoknak a cégen belül kell maradniuk, vagy saját biztonsági szabályaik vannak." },
      { title: "Sok rendszerrel", text: "Ha a flotta és az eszközpark adatai már több helyen vannak, és nem szeretnének kétszer rögzíteni." },
      { title: "Saját folyamatokkal", text: "Ha a jóváhagyások, a szerviz és a leltár a cég saját szabályai szerint megy." },
    ],
  },
  faq: {
    eyebrow: "Gyakori kérdések",
    title: "Kérdések a vállalati megoldásról",
    items: [
      { q: "Mennyibe kerül?", a: "A felmérés után egyedi ajánlatot adunk. Az ár a járművek és eszközök számától, a telepítés módjától és az integrációktól függ." },
      { q: "Ki üzemelteti a szervert?", a: "Ahogy Önöknek jobb: üzemeltetheti a saját IT-csapatuk, de mi is megtehetjük, távoli eléréssel." },
      { q: "Megkapjuk a fejlesztéseket?", a: "Igen. A saját szerveres változat ugyanaz a rendszer, mint a felhős, a frissítéseket egyeztetett időpontban telepítjük." },
      { q: "Ki lehet előbb próbálni?", a: "Igen. A 14 napos próbával a felhős változatot nézheti meg, a próbaidő alatt felvitt adatokat pedig át tudjuk költöztetni." },
    ],
  },
  cta: {
    eyebrow: "Beszéljünk",
    title: "Beszéljük meg, mire van szükségük.",
    lead: "Egy munkanapon belül jelentkezünk, és egy rövid hívásban felmérjük, mit érdemes összekötni.",
  },
};
