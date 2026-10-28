// The legal pages: the hub, the terms (ÁSZF) with the data processing terms as its annex, the
// privacy notice, imprint, sub-processors, data export and switching (Data Act), vulnerability
// reporting (CRA) and illegal content notices (DSA). The approved texts of the terms, the data
// processing terms, the privacy notice and the sub-processor list live in content/legal/*.md,
// word for word; this file only frames them. The provider is a sole trader (egyéni vállalkozó);
// his details live in SELLER, once.
import { readFileSync } from "node:fs";
import { route } from "../routes.mjs";
import { markdown } from "../markdown.mjs";

const table = (head, rows) => `<div class="prose-table"><table>
<thead><tr>${head.map((h) => `<th>${h}</th>`).join("")}</tr></thead>
<tbody>
${rows.map((r) => `<tr>${r.map((c) => `<td>${c}</td>`).join("")}</tr>`).join("\n")}
</tbody>
</table></div>`;
const EFFECTIVE_DATE = "2026. október 28."; // the go-live date of these pages
const effective = `<p class="legal-meta">Hatályos: ${EFFECTIVE_DATE}</p>`;
const SELLER = {
  name: "Maczák Gergő egyéni vállalkozó",
  address: "1188 Budapest, Kőrisfa utca 5 1/4",
  regNumber: "58998386",
  taxNumber: "49314366-1-43",
  euVatNumber: "HU49314366",
};

// The form the Yardly app serves for notices of illegal content (handled in admin.yardly.hu).
const noticeForm = "https://app.yardly.hu/jogserto-tartalom.html";

// One approved text from content/legal/: its "# " heading is the page heading.
const text = (file) => markdown(readFileSync(new URL(`./legal/${file}`, import.meta.url), "utf8"));
const TERMS = text("aszf.md");
const DPA = text("adatfeldolgozas.md");
const PRIVACY = text("adatkezeles.md");
const SUBPROCESSORS = text("alfeldolgozok.md");

export const legalHub = {
  title: "Jogi információk | Yardly",
  description: "A Yardly jogi dokumentumai egy helyen: ÁSZF, adatfeldolgozási feltételek, adatkezelési tájékoztató, impresszum, alfeldolgozók, adatexport, biztonsági hibák és jogsértő tartalom bejelentése.",
  heading: "Jogi információk",
  intro: "A Yardlyt kizárólag vállalkozásoknak és más szervezeteknek kínáljuk. Ezen az oldalon találják a szolgáltatásra és a weboldalra vonatkozó szerződési feltételeket és tájékoztatókat.",
  body: `
<h2>Szerződési feltételek</h2>
<ul>
<li><a href="${route("terms")}">Általános Szerződési Feltételek (ÁSZF)</a>: a Yardly-előfizetés feltételei: próbaidő, csomagok és díjak, fizetés, lemondás, felelősség, adatexport. A regisztrációkor kell elfogadni.</li>
<li><a href="${route("dpa")}">Adatfeldolgozási feltételek</a>: az ÁSZF 1. melléklete; hogyan kezeljük a cégek Yardlyba felvitt személyes adatait (GDPR 28. cikk).</li>
</ul>
<p>Az egyedi szerződéssel működő ügyfeleinkre a velük kötött szerződés vonatkozik.</p>

<h2>Tájékoztatók</h2>
<ul>
<li><a href="${route("privacy")}">Adatkezelési tájékoztató</a>: milyen személyes adatokat kezelünk saját célra (a weboldal látogatóiét, a regisztrálókét, a felhasználókét, az előfizetőkét), és mi a szerepünk az ügyfeleink által felvitt adatoknál.</li>
<li><a href="${route("imprint")}">Impresszum</a>: a szolgáltató és a tárhelyszolgáltató adatai.</li>
<li><a href="${route("subprocessors")}">Alfeldolgozók</a>: kiket veszünk igénybe, és hol vannak az adatok.</li>
<li><a href="${route("dataExport")}">Adatexport és szolgáltatóváltás</a>: hogyan kapják meg az adataikat, és hogyan válthatnak másik szolgáltatóra.</li>
<li><a href="${route("vulnerabilities")}">Biztonsági hibák bejelentése</a>: hogyan jelezhet sérülékenységet, és mit vállalunk a kezeléséért.</li>
<li><a href="${route("illegalContent")}">Jogsértő tartalom bejelentése</a>: hogyan jelezheti, ha az általunk tárolt tartalom jogsértő, és kik a kapcsolattartóink.</li>
</ul>

<h2>Kapcsolat</h2>
<p>Jogi és adatvédelmi kérdéseiket a(z) <a href="mailto:{email}">{email}</a> címre küldhetik.</p>`,
};

export const terms = {
  title: "Általános Szerződési Feltételek (ÁSZF) | Yardly",
  description: "A Yardly flotta- és eszközkezelő előfizetés Általános Szerződési Feltételei: próbaidő, csomagok, díjak, fizetés, lemondás, felelősség, adatexport.",
  heading: TERMS.title,
  intro: "A Yardly-előfizetés feltételei vállalkozások és más szervezetek számára. A regisztrációkor kell elfogadni; az adatfeldolgozási feltételek az 1. melléklete.",
  body: `${TERMS.html}
<h2>Változatok</h2>
${table(["Változat", "Hatályos", "Szöveg"], [["3.0", "2026. október 28-tól", "ezen az oldalon"]])}`,
};

export const dpa = {
  title: "Adatfeldolgozási feltételek | Yardly",
  description: "Hogyan kezeli a Yardly az ügyfelek által felvitt személyes adatokat: az ÁSZF 1. melléklete, a GDPR 28. cikke szerinti adatfeldolgozási szerződés.",
  heading: DPA.title,
  intro: `Az <a href="${route("terms")}">ÁSZF</a> 1. melléklete: az adatfeldolgozási szerződés a GDPR 28. cikke szerint.`,
  body: DPA.html,
};

export const privacy = {
  title: "Adatkezelési tájékoztató | Yardly",
  description: "Milyen személyes adatokat kezel a Yardly a weboldalon, a regisztrációnál, a belépésnél, az előfizetésnél és a támogatásnál, és mi a szerepe az ügyfelek által felvitt adatoknál.",
  heading: PRIVACY.title,
  intro: "Milyen személyes adatokat kezelünk saját célra, adatkezelőként, mire és meddig, és milyen jogai vannak.",
  body: PRIVACY.html,
};

export const imprint = {
  title: "Impresszum | Yardly",
  description: "A yardly.hu weboldal és a Yardly-alkalmazás szolgáltatójának és tárhelyszolgáltatójának adatai.",
  heading: "Impresszum",
  intro: "Az elektronikus kereskedelmi szolgáltatásokról szóló 2001. évi CVIII. törvény 4. §-a alapján. Az impresszum a yardly.hu weboldalra és a Yardly-alkalmazásra (app.yardly.hu) vonatkozik.",
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
  description: "Kiket vesz igénybe a Yardly az ügyfelek adatainak kezeléséhez, mit végeznek, és hol vannak az adatok.",
  heading: SUBPROCESSORS.title,
  intro: "Az Adatfeldolgozási feltételek 9. pontja szerinti lista. Az egyedi szerződéssel működő ügyfeleinknél ugyanezek az alfeldolgozók dolgoznak, az adatfeldolgozási szerződésük szerint.",
  body: SUBPROCESSORS.html,
};

export const dataExport = {
  title: "Adatexport és szolgáltatóváltás | Yardly",
  description: "Hogyan töltheti le a cég a Yardlyban tárolt összes adatát, milyen formátumban, és hogyan válthat másik szolgáltatóra.",
  heading: "Adatexport és szolgáltatóváltás",
  intro: "A Yardlyban tárolt adatok az Önökéi. Ez az oldal leírja, hogyan kapják meg őket, és hogyan válthatnak másik szolgáltatóra vagy saját rendszerre. Az EU adatrendelete ((EU) 2023/2854, Data Act) 26. és 28. cikke szerinti tájékoztatás; a szerződéses szabályok az ÁSZF 17. pontjában vannak.",
  body: `
<h2>Teljes adatexport, bármikor</h2>
<p>A cég adminisztrátora a <strong>Beállítások → Cég</strong> lapon a „Teljes adatexport letöltése (.zip)” gombbal bármikor letöltheti a fiók összes adatát egy ZIP-fájlban. Az export minden csomagban, a próbaidő alatt és csak olvasható állapotban is elérhető, díjmentes.</p>
${table(["Mi van benne", "Formátum"], [
  ["Minden adat, amelyet a cég a Yardlyban tárol: például járművek, eszközök, sofőrök, szervizek, határidők, dokumentumok adatai, tankolások, munkafolyamatok, beállítások", "táblánként JSON és CSV (UTF-8, a CSV-ben pontosvessző elválasztóval)"],
  ["A feltöltött fájlok", "eredeti formátumban"],
  ["A tartalom leírása", "manifest.json és egy magyar nyelvű leírás"],
])}
<p>Biztonsági okból nem kerülnek az exportba a titkok (jelszólenyomatok, belépési kódok, meghívó- és egyéb linkek tokenjei, a tárolt külső hozzáférési adatok, például a DKV-hozzáférés, a kártyás fizetés azonosítói), és a mi saját nyilvántartásaink (belépési napló, rendszernapló, belső ügyfélkapcsolati jegyzetek). Minden letöltést naplózunk.</p>
<p>Kérésre a teljes adatállományt és a feltöltött fájlokat legkésőbb 30 napon belül, titkosítva, díjmentesen átadjuk.</p>

<h2>Szolgáltatóváltás</h2>
<p>Bármikor kérhetik, hogy az adataikat másik szolgáltatóhoz vagy saját rendszerükbe vigyük át, vagy hogy töröljük őket. A kérést a(z) <a href="mailto:{email}">{email}</a> címre küldjék.</p>
<ul>
<li><strong>Felmondási idő:</strong> legfeljebb 2 hónap. Havi díjfizetésnél a folyamatban lévő hónap vége. Éves díjfizetésnél szolgáltatóváltás céljából az év vége előtt is felmondhatnak, legfeljebb 2 hónapos felmondási idővel.</li>
<li><strong>Átmeneti időszak:</strong> a felmondási idő után legfeljebb 30 napig a szolgáltatást változatlanul nyújtjuk, és segítünk az átállásban (például az adatszerkezet magyarázatával), az új szolgáltatóval együttműködve.</li>
<li><strong>Adatlehívás:</strong> utána a fiók 90 napig csak olvasható; ez alatt az adatok bármikor letölthetők. Ezután az adatokat véglegesen töröljük, előtte 30 és 7 nappal e-mailben figyelmeztetünk.</li>
<li><strong>Díj:</strong> a szolgáltatóváltás és az export díjmentes.</li>
</ul>

<h2>Hol vannak az adatok</h2>
<p>Az adatokat az Európai Unióban, az AWS frankfurti adatközpontjában tároljuk (az <a href="${route("subprocessors")}">alfeldolgozók listája</a>). Titkosítással és hozzáférés-kezeléssel védjük őket az illetéktelen, köztük a jogellenes hatósági hozzáféréstől. Ha egy hatóság az ügyfél adatait kéri, a megkeresést megvizsgáljuk, csak jogszabály alapján és a szükséges mértékben adunk ki adatot, és ha a jog megengedi, előtte értesítjük az ügyfelet.</p>
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
<li>a Yardly-alkalmazás (app.yardly.hu) és a hozzá tartozó szolgáltatások;</li>
<li>az admin.yardly.hu és a yardly.hu.</li>
</ul>
<p>Csak a saját fiókjával és a saját adataival próbálkozzon: más cégek fiókjához és adataihoz ne férjen hozzá, és ne terhelje túl a szolgáltatást.</p>

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
<p>A bejelentés géppel olvasható adatai a <a href="/.well-known/security.txt">security.txt</a> fájlban is megtalálhatók. A bejelentők adatainak kezeléséről az <a href="${route("privacy")}">Adatkezelési tájékoztató</a> szól.</p>
${effective}`,
};

export const illegalContent = {
  title: "Jogsértő tartalom bejelentése | Yardly",
  description: "Hogyan jelezheti, ha a Yardly által tárolt tartalom jogsértő, mi történik a bejelentéssel, és kik a kapcsolattartóink a digitális szolgáltatásokról szóló rendelet szerint.",
  heading: "Jogsértő tartalom bejelentése",
  intro: "A Yardly-alkalmazásban (app.yardly.hu) ügyfeleink tárolnak tartalmat: dokumentumokat, fotókat és szöveget. Ha úgy látja, hogy ezek közül valami jogsértő, itt jelezheti. A digitális szolgáltatásokról szóló rendelet ((EU) 2022/2065, DSA) szerinti tájékoztatás.",
  body: `
<p>Ezek a tartalmak nem nyilvánosak: csak az adott cég felhasználói látják őket.</p>

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
<p>A bejelentők adatainak kezeléséről az <a href="${route("privacy")}">Adatkezelési tájékoztató</a> szól.</p>
${effective}`,
};
