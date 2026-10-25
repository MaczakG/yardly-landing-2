// The legal pages: the hub, privacy notice, imprint, sub-processors, data export and switching
// (Data Act), vulnerability reporting (CRA) and illegal content notices (DSA). The provider is a sole
// trader (egyéni vállalkozó); his details live in SELLER, once. ph() marks a value still to be filled
// in, rendered as a highlighted placeholder.
import { route } from "../routes.mjs";

const ph = (text) => `<mark class="ph">[${text}]</mark>`;
const table = (head, rows) => `<div class="prose-table"><table>
<thead><tr>${head.map((h) => `<th>${h}</th>`).join("")}</tr></thead>
<tbody>
${rows.map((r) => `<tr>${r.map((c) => `<td>${c}</td>`).join("")}</tr>`).join("\n")}
</tbody>
</table></div>`;
const EFFECTIVE_DATE = "2026. október 30."; // the go-live date of these pages
const effective = `<p class="legal-meta">Hatályos: ${EFFECTIVE_DATE}</p>`;
const SELLER = {
  name: "Maczák Gergő egyéni vállalkozó",
  address: "1188 Budapest, Kőrisfa utca 5 1/4",
  regNumber: "58998386",
  taxNumber: "49314366-1-43",
  euVatNumber: "HU49314366",
};
const company = `${SELLER.name}, ${SELLER.address}`;

// The form the Yardly app serves for notices of illegal content (handled in admin.yardly.hu).
const noticeForm = "https://app.yardly.hu/jogserto-tartalom.html";

export const legalHub = {
  title: "Jogi információk | Yardly",
  description: "A Yardly jogi tájékoztatói egy helyen: adatkezelés, impresszum, alfeldolgozók, adatexport, biztonsági hibák és jogsértő tartalom bejelentése.",
  heading: "Jogi információk",
  intro: "A Yardlyt kizárólag vállalkozásoknak és más szervezeteknek kínáljuk. Ezen az oldalon találják a weboldalra és a szolgáltatásainkra vonatkozó tájékoztatókat.",
  body: `
<h2>Tájékoztatók</h2>
<ul>
<li><a href="${route("privacy")}">Adatvédelmi tájékoztató</a>: milyen személyes adatokat kezelünk saját célra (a weboldal látogatóiét, az érdeklődőkét, a bemutatók résztvevőiét, ügyfeleink kapcsolattartóiét), és mi a szerepünk az ügyfeleink Yardly-példányában tárolt adatoknál.</li>
<li><a href="${route("imprint")}">Impresszum</a>: a szolgáltató és a tárhelyszolgáltató adatai.</li>
<li><a href="${route("subprocessors")}">Alfeldolgozók</a>: kiket veszünk igénybe a felhőben általunk üzemeltetett példányokhoz, és hol vannak az adatok.</li>
<li><a href="${route("dataExport")}">Adatexport és szolgáltatóváltás</a>: hogyan kapják meg az adataikat, és hogyan válthatnak másik szolgáltatóra vagy saját szerverre.</li>
<li><a href="${route("vulnerabilities")}">Biztonsági hibák bejelentése</a>: hogyan jelezhet sérülékenységet, és mit vállalunk a kezeléséért.</li>
<li><a href="${route("illegalContent")}">Jogsértő tartalom bejelentése</a>: hogyan jelezheti, ha az általunk tárolt tartalom jogsértő, és kik a kapcsolattartóink.</li>
</ul>

<h2>Szerződéseink</h2>
<p>Kattintással elfogadható, nyilvános szerződési feltételeink nincsenek: minden ügyféllel a bemutató után, egyedileg szerződünk.</p>
<ul>
<li><strong>megbízási szerződés:</strong> melléklet nélkül mindent tartalmaz: a felhasználási jogot, a bevezetést, a támogatást, a felhős üzemeltetést, a fizetést, a felelősséget és a megszűnést. A díjakat és a megrendelt szolgáltatásokat az írásban elfogadott árajánlat adja, amely a szerződés része;</li>
<li><strong>titoktartási megállapodás:</strong> kétoldalú; egyik fél sem adja tovább a másik üzleti információit;</li>
<li><strong>adatfeldolgozási szerződés:</strong> hogyan kezeljük a cég személyes adatait (GDPR 28. cikk).</li>
</ul>
<p>A szerződések tervezetét aláírás előtt PDF-ben elküldjük, hogy meg tudják őrizni. Ha saját mintát használnának, azt is átnézzük.</p>

<h2>Kapcsolat</h2>
<p>Jogi és adatvédelmi kérdéseiket a(z) <a href="mailto:{email}">{email}</a> címre küldhetik.</p>`,
};

export const privacy = {
  title: "Adatvédelmi tájékoztató | Yardly",
  description: "Milyen személyes adatokat kezel a Yardly a weboldalon, a megkereséseknél, a bemutatóknál és az ügyfélkapcsolatokban, és mi a szerepe az ügyfelek Yardly-példányában tárolt adatoknál.",
  heading: "Adatvédelmi tájékoztató",
  intro: "Ez a tájékoztató azt írja le, milyen személyes adatokat kezelünk saját célra, adatkezelőként: a weboldal látogatóiét, az érdeklődőkét, a bemutatók résztvevőiét, valamint ügyfeleink és partnereink kapcsolattartóiét. Az ügyfeleink Yardly-példányában tárolt adatokról a 3. pont szól.",
  body: `
<h2>1. Az adatkezelő</h2>
<p>${SELLER.name}<br>Székhely: ${SELLER.address}<br>Nyilvántartási szám: ${SELLER.regNumber}<br>Adószám: ${SELLER.taxNumber}<br>E-mail: <a href="mailto:{email}">{email}</a></p>
<p>Adatvédelmi tisztviselő kijelölésére nem vagyunk kötelesek. Adatvédelmi kérdéseit a fenti e-mail-címre küldheti.</p>

<h2>2. Milyen adatokat, miért és meddig kezelünk</h2>
${table(["Mikor", "Milyen adatok", "Cél és jogalap", "Meddig"], [
  [
    "<strong>A weboldal látogatásakor</strong>",
    "IP-cím, a kérés időpontja, a megnyitott oldal címe, a böngésző és az eszköz adatai (user agent), a hivatkozó oldal",
    "A weboldal biztonságos működtetése, a hibák és a támadások kivizsgálása. Jogos érdekünk (GDPR 6. cikk (1) f)).",
    "90 nap",
  ],
  [
    "<strong>Megkeresés, bemutató- vagy ajánlatkérés</strong> (űrlap, e-mail, telefon)",
    "A megkeresés témája, név, cégnév, e-mail-cím, telefonszám, a járművek és eszközök hozzávetőleges száma, az üzemeltetés kívánt módja, az üzenet és a további levelezés",
    "A megkeresés megválaszolása, a bemutató megszervezése, ajánlatadás. Ha Ön a leendő szerződő fél, a szerződéskötést megelőző lépések (6. cikk (1) b)); ha egy cég nevében ír, jogos érdekünk az üzleti kapcsolatfelvételhez (6. cikk (1) f)).",
    "Az utolsó kapcsolatfelvételtől számított 1 évig. Ha szerződést kötünk, a kapcsolattartói adatokra vonatkozó idő szerint.",
  ],
  [
    "<strong>Bemutató-hozzáférés</strong> az app.yardly.hu-n",
    "Név, e-mail-cím, a belépések naplója (időpont, IP-cím, böngésző), a rendszer biztonsági naplója",
    "A bemutató-fiók működtetése és védelme. Jogos érdekünk (6. cikk (1) f)).",
    "A belépési napló 180 napig, a rendszernapló 90 napig, a biztonsági események naplója 1 évig. A bemutató-fiókot kérésére, vagy ha nem kötünk szerződést, a bemutató után legkésőbb 90 nappal töröljük.",
  ],
  [
    "<strong>Ügyfeleink és partnereink kapcsolattartói</strong>",
    "Név, beosztás, munkahelyi e-mail-cím és telefonszám, a velük folytatott levelezés",
    "A szerződés előkészítése és teljesítése, kapcsolattartás. Jogos érdekünk és a szerződő cég érdeke a kapcsolattartáshoz (6. cikk (1) f)).",
    "A szerződés megszűnésétől számított 5 évig (Ptk. 6:22. §).",
  ],
  [
    "<strong>Számlázás</strong>",
    "A vevő neve, címe, adószáma; a számlán szereplő kapcsolattartó neve és e-mail-címe",
    "Számla kiállítása és megőrzése. Jogi kötelezettség (6. cikk (1) c)): az általános forgalmi adóról szóló 2007. évi CXXVII. törvény és a számvitelről szóló 2000. évi C. törvény.",
    "8 évig (Számv. tv. 169. § (2)).",
  ],
  [
    "<strong>Támogatási kérések</strong>",
    "A bejelentő neve, e-mail-címe, telefonszáma, a kérés és a csatolt fájlok; eseti hozzáférésnél a hozzáférés naplója (ki, mikor, mihez fért hozzá)",
    "A szerződés szerinti támogatás nyújtása és dokumentálása. Jogos érdekünk és a szerződő cég érdeke (6. cikk (1) f)).",
    "A szerződés megszűnésétől számított 5 évig.",
  ],
  [
    `<strong><a href="${route("vulnerabilities")}">Biztonsági hiba bejelentése</a></strong>`,
    "A bejelentő neve vagy álneve, e-mail-címe, a bejelentés tartalma",
    "A sérülékenység kezelése és a kiberreziliencia-rendelet ((EU) 2024/2847) szerinti bejelentés. Jogi kötelezettség (6. cikk (1) c)) és jogos érdekünk (6. cikk (1) f)).",
    "A bejelentő adatai a bejelentés lezárásától számított 1 évig. A sérülékenység leírása személyes adat nélkül a termék dokumentációjában marad.",
  ],
  [
    `<strong><a href="${route("illegalContent")}">Jogsértő tartalom bejelentése</a></strong>`,
    "A bejelentő neve és e-mail-címe, a tartalom helye, a bejelentés indoklása, a döntésünk",
    "A bejelentés kivizsgálása és a döntés közlése a digitális szolgáltatásokról szóló rendelet ((EU) 2022/2065) 16–17. cikke szerint. Jogi kötelezettség (6. cikk (1) c)).",
    "A döntéstől számított 1 évig.",
  ],
])}
<p>A bemutatóról felvételt csak az Ön előzetes, kifejezett hozzájárulásával készítünk. Hírlevelet nem küldünk; reklámcélú e-mailt csak az Ön előzetes, kifejezett hozzájárulásával küldenénk. Automatizált döntéshozatalt és profilalkotást nem végzünk.</p>
<h3>Sütik és látogatottságmérés</h3>
<p>A weboldal nem helyez el sütit, nem mér látogatottságot, és nem használ követőkódot. Betűtípust, szkriptet vagy más tartalmat sem tölt be harmadik féltől.</p>

<h2>3. Az ügyfeleink Yardly-példányában tárolt adatok</h2>
<p>Ügyfeleink a saját járműveik, eszközeik, munkatársaik és sofőrjeik adatait kezelik a Yardlyban. Ezeknek az adatoknak az ügyfél, vagyis a munkáltató az adatkezelője: ő dönti el, milyen adatot visz fel és mire használja. Ha Ön egy ügyfelünk munkatársa, kérdéseivel és kéréseivel a munkáltatójához forduljon. Ha nekünk ír, a kérést továbbítjuk neki.</p>
<ul>
<li><strong>Saját szerveres telepítésnél</strong> a Yardly az ügyfél szerverén fut, és az ügyfél IT-csapata kezeli. Napi üzemben nem férünk hozzá az adatokhoz, és a szoftver nem küld nekünk személyes adatot. Ha az ügyfél az adatátvételhez, egy összekötéshez vagy hibakereséshez időkorlátos, naplózott hozzáférést ad, vagy adatot küld nekünk, azt adatfeldolgozóként, a vele kötött adatfeldolgozási szerződés szerint kezeljük, és a feladat lezárása után töröljük.</li>
<li><strong>Felhős üzemeltetésnél</strong> az ügyfél saját, elkülönített példányát mi üzemeltetjük az Amazon Web Services frankfurti adatközpontjában. Itt adatfeldolgozók vagyunk: az adatokat csak az ügyfél utasítására, a vele kötött adatfeldolgozási szerződés szerint kezeljük. Az igénybe vett szolgáltatókat az <a href="${route("subprocessors")}">Alfeldolgozók</a> oldal sorolja fel.</li>
</ul>

<h2>4. Kik férnek hozzá az adatokhoz</h2>
<p>Az adatokhoz a Yardly munkatársai férnek hozzá, a feladatukhoz szükséges mértékben. Az alábbi szolgáltatókat vesszük igénybe, adatfeldolgozóként:</p>
<ul>
<li><strong>Amazon Web Services EMEA SARL</strong> (38 Avenue John F. Kennedy, L-1855 Luxembourg): a weboldal és az alkalmazások tárhelye, a frankfurti (EU-s) adatközpontban.</li>
<li><strong>Google Ireland Ltd.</strong> (Gordon House, Barrow Street, Dublin 4, Írország): Google Workspace, az e-mailek fogadása, tárolása és küldése.</li>
<li><strong>Billingo Technologies Zrt.</strong> (1133 Budapest, Árbóc utca 6.): számlakiállítás.</li>
</ul>
<p>Hatóságnak vagy bíróságnak csak jogszabályban meghatározott esetben, a megkeresésben megjelölt adatokat adjuk ki.</p>

<h2>5. Adattovábbítás az Európai Unión kívülre</h2>
<p>Az adatokat az Európai Unióban tároljuk. A Google a levelezés adatait az Egyesült Államokba is továbbíthatja; az AWS és a Google amerikai anyavállalata részt vesz az EU–USA adatvédelmi keretrendszerben (Data Privacy Framework), és ezt az Európai Bizottság általános adatvédelmi kikötései egészítik ki.</p>

<h2>6. Hogyan védjük az adatokat</h2>
<p>A weboldal és az alkalmazások csak titkosított kapcsolaton (HTTPS) érhetők el. A szervereink lemezei és a mentések titkosítva vannak. Az adatokhoz csak az fér hozzá, akinek a feladatához szükséges, és a hozzáféréseket naplózzuk.</p>

<h2>7. Az Ön jogai</h2>
<p>Kérheti a személyes adataihoz való hozzáférést, azok helyesbítését, törlését vagy kezelésük korlátozását, és élhet az adathordozhatósághoz való jogával. A jogos érdeken alapuló adatkezelés ellen bármikor tiltakozhat. Ha az adatkezelés hozzájáruláson alapul, a hozzájárulását bármikor visszavonhatja; ez a korábbi adatkezelés jogszerűségét nem érinti. Kérését a(z) <a href="mailto:{email}">{email}</a> címre küldheti. Legkésőbb egy hónapon belül válaszolunk; ha a kérés összetett, ez a határidő további két hónappal meghosszabbodhat, amiről az első hónapon belül értesítjük.</p>

<h2>8. Jogorvoslat</h2>
<p>Ha úgy gondolja, hogy az adatkezelés jogsértő, panaszt tehet a Nemzeti Adatvédelmi és Információszabadság Hatóságnál (NAIH, 1055 Budapest, Falk Miksa utca 9–11., postacím: 1363 Budapest, Pf. 9., <a href="https://naih.hu" rel="noopener">naih.hu</a>), vagy bírósághoz fordulhat. A pert a lakóhelye vagy tartózkodási helye szerinti törvényszék előtt is megindíthatja.</p>

<p>Ha a tájékoztató változik, a lap alján jelöljük a hatálybalépés napját.</p>
${effective}`,
};

export const imprint = {
  title: "Impresszum | Yardly",
  description: "A yardly.hu weboldal és a Yardly-alkalmazások szolgáltatójának és tárhelyszolgáltatójának adatai.",
  heading: "Impresszum",
  intro: "Az elektronikus kereskedelmi szolgáltatásokról szóló 2001. évi CVIII. törvény 4. §-a alapján. Az impresszum a yardly.hu weboldalra és az általunk üzemeltetett Yardly-rendszerekre (a bemutató-rendszerre és ügyfeleink felhős példányaira) vonatkozik.",
  body: `
<h2>Szolgáltató</h2>
<dl class="legal-dl">
<div><dt>Név</dt><dd>${SELLER.name}</dd></div>
<div><dt>Székhely</dt><dd>${SELLER.address}</dd></div>
<div><dt>Nyilvántartási szám</dt><dd>${SELLER.regNumber}</dd></div>
<div><dt>Nyilvántartó</dt><dd>Belügyminisztérium, egyéni vállalkozók nyilvántartása</dd></div>
<div><dt>Adószám</dt><dd>${SELLER.taxNumber}</dd></div>
<div><dt>Közösségi adószám</dt><dd>${SELLER.euVatNumber}</dd></div>
<div><dt>E-mail</dt><dd><a href="mailto:{email}">{email}</a></dd></div>
</dl>
<p>Szolgáltatásainkat kizárólag vállalkozásoknak és más szervezeteknek nyújtjuk.</p>
<h2>Tárhelyszolgáltató</h2>
<dl class="legal-dl">
<div><dt>Név</dt><dd>Amazon Web Services EMEA SARL</dd></div>
<div><dt>Cím</dt><dd>38 Avenue John F. Kennedy, L-1855 Luxembourg</dd></div>
<div><dt>E-mail</dt><dd><a href="mailto:aws-EU-privacy@amazon.com">aws-EU-privacy@amazon.com</a></dd></div>
<div><dt>Weboldal</dt><dd><a href="https://aws.amazon.com" rel="noopener">aws.amazon.com</a></dd></div>
</dl>
<p>A további jogi tájékoztatókat a <a href="${route("legal")}">Jogi információk</a> oldalon találja.</p>`,
};

export const subprocessors = {
  title: "Alfeldolgozók | Yardly",
  description: "Kiket vesz igénybe a Yardly a felhőben üzemeltetett ügyfélpéldányokhoz, mit végeznek, és hol vannak az adatok.",
  heading: "Alfeldolgozók",
  intro: "Ha a Yardlyt a felhőben mi üzemeltetjük, az ügyfél adatait adatfeldolgozóként, a vele kötött adatfeldolgozási szerződés szerint kezeljük. Ehhez néhány szakosodott szolgáltatót veszünk igénybe; ezen az oldalon felsoroljuk őket.",
  body: `
<p>Minden alfeldolgozóval írásbeli szerződésünk van, amely legalább olyan szigorú adatvédelmi kötelezettségeket ír elő, mint a mi adatfeldolgozási szerződésünk. Az alfeldolgozók teljesítéséért az ügyfél felé mi felelünk.</p>
<p><strong>Saját szerveres telepítésnél</strong> ez a lista nem érinti az ügyfél adatait, mert azok az ügyfél szerverén maradnak. Ha az ügyfél eseti hozzáférést ad, vagy adatot küld nekünk (például az adatátvételhez), azt a levelezésünkön keresztül (Google Workspace) kapjuk meg, és a feladat lezárása után töröljük.</p>

<h2>Jelenlegi alfeldolgozóink</h2>
${table(["Szolgáltató", "Mit végez", "Az adatok helye", "Továbbítás az EU-n kívülre"], [
  [
    "<strong>Amazon Web Services EMEA SARL</strong><br>38 Avenue John F. Kennedy, L-1855 Luxembourg",
    "Szerverek, adatbázis, fájltárolás és mentések",
    "Európai Unió, Németország: Frankfurt (eu-central-1)",
    "Az adatokat az EU-ban tároljuk. Az amerikai anyavállalat (Amazon.com, Inc.) részt vesz az EU–USA adatvédelmi keretrendszerben; ezt az Európai Bizottság általános adatvédelmi kikötései egészítik ki.",
  ],
  [
    "<strong>Google Ireland Ltd.</strong><br>Gordon House, Barrow Street, Dublin 4, Írország",
    "Google Workspace: az alkalmazás értesítő e-mailjeinek kiküldése, valamint a támogatási levelezés",
    "A Google globális adatközpontjai, az EU-n kívül is",
    "Az amerikai anyavállalat (Google LLC) részt vesz az EU–USA adatvédelmi keretrendszerben; ezt az Európai Bizottság általános adatvédelmi kikötései egészítik ki.",
  ],
])}

<h2>Kik nem alfeldolgozók?</h2>
<ul>
<li><strong>DKV:</strong> az üzemanyagkártya-tranzakciókat az ügyfél a saját DKV-hozzáférésével kapcsolja a Yardlyhoz, és a példánya közvetlenül a DKV-tól kérdezi le őket.</li>
<li><strong>Microsoft Teams, Slack és más webhookok:</strong> ha az ügyfél egy folyamatban webhookot állít be, az értesítést az általa megadott címre küldjük. Ezeket a szolgáltatásokat az ügyfél választja, és a vele kötött szerződés szerint használja.</li>
<li><strong>Saját levelezőszerver:</strong> ha az ügyfél a saját levelezőszerverét állítja be, az értesítők azon keresztül mennek ki.</li>
</ul>

<h2>Ha a lista változik</h2>
<p>Ha új alfeldolgozót veszünk igénybe, vagy egy meglévő új feladatot kap, máshol kezeli az adatokat, vagy új továbbítás kezdődik az EU-n kívülre, legalább <strong>30 nappal</strong> a változás előtt e-mailben értesítjük a szerződésben megnevezett kapcsolattartót, és frissítjük ezt az oldalt.</p>
<ul>
<li>Az értesítéstől számított 30 napon belül az ügyfél adatvédelmi okból, indokolással kifogást emelhet. Jóhiszeműen megpróbáljuk megoldani a felvetését.</li>
<li>Ha a kifogást a változás hatálybalépéséig nem sikerül megoldani, az ügyfél a felhős üzemeltetésre vonatkozó szerződést a változás hatálybalépésének napjára, további díj nélkül felmondhatja. Az adatai exportálásához való jogát ez nem érinti.</li>
</ul>
<p>A részletes szabályokat az ügyféllel kötött adatfeldolgozási szerződés tartalmazza.</p>

<h2>A lista változásai</h2>
${table(["Dátum", "Változás"], [[EFFECTIVE_DATE, "A lista első közzététele"]])}
${effective}`,
};

export const dataExport = {
  title: "Adatexport és szolgáltatóváltás | Yardly",
  description: "Hogyan kapják meg az ügyfelek a Yardlyban tárolt adataikat, milyen formátumban, és hogyan válthatnak másik szolgáltatóra vagy saját szerverre.",
  heading: "Adatexport és szolgáltatóváltás",
  intro: "A Yardlyban tárolt adatok az Önökéi. Ez az oldal leírja, hogyan kapják meg őket, és hogyan válthatnak másik rendszerre, szolgáltatóra vagy saját szerverre. Az EU adatrendelete ((EU) 2023/2854, Data Act) 26. és 28. cikke szerinti tájékoztatás.",
  body: `
<h2>Saját szerveres telepítésnél</h2>
<p>Az adatok az Önök szerverén, az Önök adatbázisában vannak, ezért bármikor hozzáférnek, és a mentést is az Önök IT-csapata végzi. A lent leírt export ott is elérhető.</p>

<h2>Export az alkalmazásból</h2>
<ol>
<li>Lépjen be adminisztrátorként a Yardlyba.</li>
<li>Nyissa meg a <strong>Beállítások → Cég</strong> lapot.</li>
<li>Az <strong>Adatexport</strong> kártyán kattintson a <strong>Teljes adatbázis-export letöltése (.xlsx)</strong> gombra.</li>
</ol>
<p>Egy Excel-munkafüzetet kap, nyilvántartásonként külön munkalappal: járművek, eszközök, dokumentumok, telephelyek, csapattagok, karbantartási ütemtervek, szervizek, tankolások, biztosítások, kárügyek, emlékeztetők, szervizpartnerek, állapotfelmérések. A hivatkozások (például melyik tankolás melyik járműhöz tartozik) névvel szerepelnek. Az egyes listák (például a költségösszesítő) CSV-ben és PDF-ben is letölthetők.</p>

<h2>A teljes adatbázis és a fájlok (felhős üzemeltetésnél)</h2>
<p>Kérésre átadjuk a példányuk teljes adatbázisát és a feltöltött fájlokat. Ebben minden benne van: a nyilvántartások, a kapcsolataik, a változásnapló, a munkafolyamatok és a beállítások.</p>
${table(["Mit", "Formátum"], [
  ["Adatbázis", "PostgreSQL SQL-mentés (pg_dump), UTF-8 kódolással, minden táblával és kapcsolattal; az időpontok egyezményes világidőben (UTC)"],
  ["Feltöltött fájlok", "Az eredeti formátumukban (például PDF, JPG, PNG), mappaszerkezetben"],
  ["Az adatszerkezet leírása", "A táblák, a mezők és a kapcsolatok leírása"],
])}
<p>Biztonsági okból nem adjuk át, és a mentésből is kitöröljük a jelszólenyomatokat, a belépési kódokat, a meghívó- és egyéb linkek tokenjeit, valamint a tárolt külső hozzáférési adatokat (például a DKV-hozzáférést). Ezek egy másik rendszerben sem használhatók.</p>
<p>A kérést a(z) <a href="mailto:{email}">{email}</a> címre küldhetik; az adatokat legkésőbb 30 napon belül, titkosított formában adjuk át.</p>

<h2>Szolgáltatóváltás felhős üzemeltetésnél</h2>
<ul>
<li><strong>Felmondás:</strong> a szerződés szerint, legfeljebb 2 hónapos felmondási idővel.</li>
<li><strong>Átmeneti időszak:</strong> a felmondási idő lejárta után a példány még legfeljebb 30 napig működik, hogy zavartalanul átálljanak. Ezalatt segítünk, és együttműködünk az új szolgáltatóval.</li>
<li><strong>Adatlehívás:</strong> az átmeneti időszak után még legalább 30 napig kérhetik az adatok átadását.</li>
<li><strong>Hová válthatnak:</strong> másik szolgáltatóhoz, saját rendszerre, vagy saját szerverre a Yardlyval. Ez utóbbinál ugyanaz a szoftver fut, ezért az adatbázist változatlanul vissza lehet állítani.</li>
<li><strong>Díj:</strong> az export és a szolgáltatóváltás díjmentes.</li>
<li><strong>Törlés:</strong> az adatlehívási időszak után a példányt, az adatbázist és a fájlokat töröljük; a mentésekből legkésőbb 30 nap alatt tűnnek el. Erről írásban értesítjük Önöket. A számlákat a számviteli törvény szerint 8 évig megőrizzük.</li>
</ul>

<h2>Hol futnak a rendszerek?</h2>
${table(["", ""], [
  ["Szolgáltató", `${company}, Magyarország`],
  ["Adatközpont", "Amazon Web Services EMEA SARL, Frankfurt (eu-central-1), Európai Unió"],
  ["Mentések", "Ugyanabban a régióban, titkosítva"],
  ["Az infrastruktúra joghatósága", `Az adatok az EU-ban vannak. Az AWS amerikai anyavállalatára az EU–USA adatvédelmi keretrendszer vonatkozik (részletek az <a href="${route("subprocessors")}">Alfeldolgozók</a> oldalon).`],
])}
<p>Az adatokat titkosítással és szigorú hozzáférés-kezeléssel védjük az illetéktelen, köztük a jogellenes hatósági hozzáféréstől. Ha egy hatóság az ügyfél adatait kéri, a megkeresést megvizsgáljuk, csak jogszabály alapján és a szükséges mértékben adunk ki adatot, és ha a jog megengedi, előtte értesítjük az ügyfelet.</p>
${effective}`,
};

export const vulnerabilities = {
  title: "Biztonsági hibák bejelentése | Yardly",
  description: "Hogyan jelezhet sérülékenységet a Yardlyban, mit kérünk a bejelentőktől, és mit vállalunk a hiba kezeléséért.",
  heading: "Biztonsági hibák bejelentése",
  intro: "Ha biztonsági hibát talál a Yardlyban, kérjük, először nekünk jelezze, és ne hozza nyilvánosságra, amíg ki nem javítottuk. A bejelentéseket komolyan vesszük, és megköszönjük.",
  body: `
<h2>Mire vonatkozik</h2>
<ul>
<li>a Yardly szoftver, a saját szerveres kiadásokkal együtt;</li>
<li>a felhőben általunk üzemeltetett ügyfélpéldányok;</li>
<li>a bemutató-rendszer (app.yardly.hu), az admin.yardly.hu és a yardly.hu.</li>
</ul>
<p>Ügyfeleink saját szerverei az ügyfeleink tulajdonában vannak: ezeket ne tesztelje. Ha egy ilyen telepítésen talál hibát, a szoftver hibáját nekünk, a szerver beállításait érintőt az adott cégnek jelezze.</p>

<h2>Hogyan jelezze</h2>
<p>Írjon a(z) <a href="mailto:{email}?subject=Biztons%C3%A1gi%20hiba">{email}</a> címre „Biztonsági hiba” tárggyal. Ha tudja, írja meg:</p>
<ul>
<li>melyik címet, oldalt vagy változatot érinti a hiba;</li>
<li>hogyan lehet előidézni, lépésről lépésre;</li>
<li>mi lehet a következménye;</li>
<li>hogyan érhetjük el, és szeretné-e, hogy a nevét a javítás leírásában megköszönjük.</li>
</ul>
<p>Ügyféladatot vagy személyes adatot ne küldjön, akkor se, ha a hiba miatt hozzáfért.</p>

<h2>Amit kérünk</h2>
<ul>
<li>Ne férjen hozzá mások adataihoz többhöz, mint ami a hiba bizonyításához feltétlenül kell, és ne módosítson vagy töröljön semmit.</li>
<li>Ne végezzen terheléses vagy szolgáltatásmegtagadásos (DoS) tesztet, és ne próbálja megtéveszteni a munkatársainkat vagy az ügyfeleinket.</li>
<li>Ne hozza nyilvánosságra a hibát, amíg ki nem javítottuk, vagy amíg a bejelentéstől számított 90 nap le nem telt; ha a javítás tovább tart, ezt Önnel egyeztetjük.</li>
</ul>
<p>Ha a fentiek szerint, jóhiszeműen jár el, a bejelentés miatt nem kezdeményezünk Ön ellen eljárást.</p>

<h2>Amit vállalunk</h2>
<ul>
<li>Két munkanapon belül visszaigazoljuk a bejelentést.</li>
<li>Kivizsgáljuk a hibát, és tájékoztatjuk az eredményről és a javítás várható idejéről.</li>
<li>A javítást az érintett ügyfeleinknek eljuttatjuk; a biztonsági javításokért nem kérünk díjat.</li>
<li>Ha a hibát aktívan kihasználják, az EU kiberreziliencia-rendelete ((EU) 2024/2847) szerint 24 órán belül jelezzük a nemzeti kiberbiztonsági incidenskezelő központnak és az ENISA-nak, és tájékoztatjuk az érintett ügyfeleket.</li>
</ul>
<p>A bejelentés géppel olvasható adatai a <a href="/.well-known/security.txt">security.txt</a> fájlban is megtalálhatók. A bejelentők adatainak kezeléséről az <a href="${route("privacy")}">Adatvédelmi tájékoztató</a> szól.</p>
${effective}`,
};

export const illegalContent = {
  title: "Jogsértő tartalom bejelentése | Yardly",
  description: "Hogyan jelezheti, ha a Yardly által tárolt tartalom jogsértő, mi történik a bejelentéssel, és kik a kapcsolattartóink a digitális szolgáltatásokról szóló rendelet szerint.",
  heading: "Jogsértő tartalom bejelentése",
  intro: "A felhőben általunk üzemeltetett, ügyfelenként külön Yardly-példányokban ügyfeleink tárolnak tartalmat: dokumentumokat, fotókat és szöveget. Ha úgy látja, hogy ezek közül valami jogsértő, itt jelezheti. A digitális szolgáltatásokról szóló rendelet ((EU) 2022/2065, DSA) szerinti tájékoztatás.",
  body: `
<p>Ezek a tartalmak nem nyilvánosak: csak az adott cég felhasználói látják őket. A saját szerveres telepítéseken mi semmit nem tárolunk; az ott tárolt tartalom miatt a szervert üzemeltető céghez forduljon.</p>

<h2>Hogyan jelezze</h2>
<p>Töltse ki a <a href="${noticeForm}" rel="noopener">bejelentőlapot</a>, vagy írjon a(z) <a href="mailto:{email}?subject=Jogs%C3%A9rt%C5%91%20tartalom">{email}</a> címre. A bejelentésben adja meg:</p>
<ul>
<li>miért tartja jogsértőnek a tartalmat;</li>
<li>hol található pontosan (például a cím, a cég, a dokumentum vagy a bejegyzés neve);</li>
<li>a nevét és az e-mail-címét; ha a bejelentés gyermekek szexuális bántalmazását ábrázoló anyagra vonatkozik, ezt nem kötelező megadnia;</li>
<li>a nyilatkozatát, hogy jóhiszeműen jár el, és a bejelentés legjobb tudása szerint pontos és teljes.</li>
</ul>

<h2>Mi történik a bejelentéssel</h2>
<ul>
<li>A beérkezést e-mailben visszaigazoljuk.</li>
<li>A bejelentést időben, gondosan és tárgyilagosan megvizsgáljuk, és szükség esetén bevonjuk az érintett ügyfelet. Automatizált eszközt a döntéshez nem használunk.</li>
<li>A döntésünkről és az ellene igénybe vehető jogorvoslatról e-mailben tájékoztatjuk.</li>
<li>Ha a tartalmat korlátozzuk, az érintett ügyfélnek is megírjuk, mit és miért korlátoztunk.</li>
<li>Ha a bejelentésből élet vagy biztonság elleni bűncselekmény gyanúja derül ki, haladéktalanul értesítjük a hatóságokat.</li>
</ul>
<p>A döntésünk ellen a(z) <a href="mailto:{email}">{email}</a> címen panaszt tehet, és bírósághoz is fordulhat. Magyarországon a digitális szolgáltatások koordinátora a Nemzeti Média- és Hírközlési Hatóság (<a href="https://nmhh.hu" rel="noopener">nmhh.hu</a>).</p>

<h2>Kapcsolattartási pontok</h2>
<p>A hatóságok, az Európai Bizottság és a szolgáltatás igénybe vevői a(z) <a href="mailto:{email}">{email}</a> címen érnek el minket (DSA 11. és 12. cikk). Magyarul és angolul válaszolunk.</p>
<p>A bejelentők adatainak kezeléséről az <a href="${route("privacy")}">Adatvédelmi tájékoztató</a> szól.</p>
${effective}`,
};
