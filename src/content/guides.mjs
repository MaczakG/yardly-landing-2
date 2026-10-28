// Guides and templates from the SEO plan (keyword research, October 2026). Each one appears on
// its date: build.mjs publishes the posts dated up to the build day (see posts.mjs), and the
// server rebuilds the site every morning. Facts were checked against the sources named in the
// text (njt.jog.gov.hu, kormany.hu, nav.gov.hu); figures marked "a cikk írásakor" are dated.
// Yardly's own prices and limits come from pricing.mjs.

import { plans, huf, num, priceFacts, DKV_ADDON, ANNUAL_FREE_MONTHS, NO_VAT, TRIAL_DAYS, TRIAL_PLAN } from "./pricing.mjs";

// "az Alap", "az Üzleti", "a Prémium".
const the = (name) => (/^[aeiouáéíóöőúüű]/i.test(name) ? "az " : "a ") + name;

// The price guide's worked example: a made-up company with 30 cars saving 72 000 Ft a month
// on admin. Its fee is the cheapest plan for 30 active vehicles, computed from today's prices.
const EXAMPLE_CARS = 30;
const EXAMPLE_SAVING = 72000;
const example = plans
  .filter((p) => EXAMPLE_CARS <= p.ceiling)
  .map((p) => ({ plan: p, over: Math.max(0, EXAMPLE_CARS - p.included) }))
  .map((x) => ({ ...x, total: x.plan.monthly + x.over * x.plan.extra }))
  .reduce((a, b) => (b.total < a.total ? b : a));
const exampleText = () => {
  const { plan, over, total } = example;
  const parts = over
    ? `${the(plan.name)} csomag ${plan.included} autót tartalmaz, a további ${over} autó ${over} × ${huf(plan.extra)}. A havidíj így ${huf(total)}`
    : `${the(plan.name)} csomag mind a ${EXAMPLE_CARS} autót tartalmazza, a havidíj ${huf(total)}`;
  const compare =
    total * 2 < EXAMPLE_SAVING
      ? `a példában számolt ${huf(EXAMPLE_SAVING)}-os megtakarítás kevesebb mint fele`
      : total < EXAMPLE_SAVING
        ? `kevesebb, mint a példában számolt ${huf(EXAMPLE_SAVING)}-os megtakarítás`
        : `több, mint a példában számolt ${huf(EXAMPLE_SAVING)}-os megtakarítás, így itt az elkerült hibák döntenek`;
  return `${parts}, ami ${compare}.`;
};

export const guides = [
  {
    slug: "zold-rendszam-csere-plug-in-hibrid",
    date: "2026-10-22",
    minutes: 4,
    category: "deadlines",
    solution: "jarmunyilvantartas",
    title: "Zöld rendszám csere plug-in hibrid autóknál: teendők nov. 30-ig",
    excerpt: "A plug-in hibridek zöld rendszámát 2026. november 30-ig le kell cserélni. Mutatjuk, hogyan gyűjtse össze az érintett céges autókat, és mi kell a cseréhez.",
    body: `
<p>A zöld rendszám csere a plug-in hibrid céges autóknál a cikk írásakor (2026. október) már határidős feladat: a kormány tájékoztatása szerint a jelenlegi zöld rendszám legkésőbb 2026. november 30-ig használható. Egy flottánál ez nem egyetlen ügyintézés, hanem annyi, ahány érintett autó van, mindegyikhez időponttal, személyes megjelenéssel és utólagos adminisztrációval. Az alábbi teendőlista abban segít, hogy egyik autó se maradjon ki.</p>
<h2>Mely céges autókat érinti a zöld rendszám cseréje?</h2>
<p>2024. szeptember 1-jétől világoszöld rendszámot csak a tisztán elektromos (5E) és a nulla emissziós (5Z) környezetvédelmi osztályú járművek kaphatnak. A korábban zöld rendszámot kapott 5N (növelt hatótávolságú, külső töltésű hibrid) és 5P (külső töltésű, plug-in hibrid) osztályú autók a zöld táblát csak 2026. november 30-ig használhatják. A tisztán elektromos autókat a csere nem érinti.</p>
<p>A kormány 2026. október 1-jei tájékoztatása szerint Magyarországon 32 325 olyan plug-in hibrid volt, amelyen még zöld rendszám van, akár forgalomban van, akár ideiglenesen ki van vonva. A részleteket a <a href="https://kormany.hu/hirek/2026-november-30-ig-kell-lecserelni-a-plug-in-hibrid-jarmuvek-zold-rendszamat">kormany.hu tájékoztatójában</a> olvashatja.</p>
<h2>Hogyan gyűjtse össze az érintett autókat?</h2>
<ol>
<li><strong>Listázza a zöld rendszámos autókat.</strong> Ha a nyilvántartásában nincs külön jelölés a plug-in hibridekre, a forgalmi engedélyben szereplő környezetvédelmi osztály (5P vagy 5N) megmutatja, melyik autó érintett.</li>
<li><strong>Nézze meg az üzemeltetési formát.</strong> Lízingelt vagy bérelt autónál egyeztessen a tulajdonossal: ki indítja az ügyet, ki viszi el az autót, és ki fizeti a díjat.</li>
<li><strong>Rendeljen felelőst minden autóhoz.</strong> Lehet a sofőr vagy egy központi ügyintéző, de legyen név és dátum mellette.</li>
<li><strong>Döntse el a rendszám típusát.</strong> Karakterazonos vagy új karakterű rendszám, lásd lent.</li>
<li><strong>Ütemezzen visszafelé.</strong> A november 30-i határidőtől számolva, tartalékkal.</li>
</ol>
<h2>Karakterazonos vagy új rendszám?</h2>
<p>A kormány tájékoztatása két lehetőséget ír le, eltérő díjjal és eltérő utómunkával:</p>
<table>
<thead><tr><th>Szempont</th><th>Karakterazonos csere</th><th>Új karakterű rendszám</th></tr></thead>
<tbody>
<tr><td>Díj (2026. október 1-jei tájékoztatás)</td><td>16 605 Ft eljárási díj</td><td>17 475 Ft, a tábla és az új forgalmi engedély együtt</td></tr>
<tr><td>Kötelező, casco, parkolási és behajtási jogosultságok</td><td>nem módosulnak</td><td>a rendszámváltozás miatt módosítani kell</td></tr>
<tr><td>E-matrica</td><td>érvényes marad</td><td>érvényes, de az új rendszámra át kell vezetni</td></tr>
</tbody>
</table>
<p>A karakterazonos cseréhez a tájékoztató szerint kétszer kell személyesen megjelenni. Cserébe nem kell a biztosítókat, a parkolási és behajtási engedélyeket és az e-matricát átíratni, így egy flottánál kevesebb utómunkával jár. Új karakterű rendszámnál az e-matricát a Magyar Közút Nonprofit Zrt. Útdíj Üzletágának ügyfélszolgálatán kell az új rendszámra átvezetni. A tájékoztató azt is kiemeli, hogy a zöld rendszám korábbi kedvezménye miatt vagyonszerzési illetéket utólag nem kell fizetni.</p>
<h2>Időpont és ügyintézés</h2>
<ul>
<li>A csere bármely kormányablakban kezdeményezhető.</li>
<li>Időpontot online az <a href="https://idopontfoglalo.kh.gov.hu/">idopontfoglalo.kh.gov.hu</a> oldalon, telefonon pedig a 1818-as számon foglalhat.</li>
<li>Foglalás előtt kérdezze meg, milyen iratokat vigyen, és cég nevében eljárva milyen meghatalmazás kell. Így nem kell kétszer elmenni ugyanazért.</li>
<li>Ne az utolsó hétre tervezzen: a minisztérium is arra kéri az érintetteket, hogy ne hagyják a cserét az utolsó hetekre.</li>
<li>Több autónál ossza el az időpontokat, hogy egy napon ne essen ki túl sok autó és sofőr.</li>
</ul>
<p>Egy kitalált példa a tervezéshez: 12 érintett autó, mindegyiknél karakterazonos csere, vagyis autónként két megjelenés a kormányablakban.</p>
<p class="formula">megjelenések száma = 12 autó × 2 alkalom = 24 alkalom</p>
<p>Ha naponta három alkalmat tud úgy megszervezni, hogy a munka ne álljon le, ez 8 munkanap, közel két hét. A két megjelenés között ráadásul a tábla elkészülésére is várni kell: az economx.hu 2026. márciusi cikke szerint ez akár két hétig is tarthat. A teljes folyamat tehát hetekben mérhető, ezért most érdemes elkezdeni.</p>
<h2>Mi történik november 30. után?</h2>
<p>A kormány tájékoztatása szerint a határidő után közúti ellenőrzéskor a hatóság bevonja a rendszámtáblát és a forgalmi engedélyt, és elindítja a jármű forgalomból való kivonását, amely az átrendszámozásig tart. Flottás nyelven: az autó áll, a sofőr nem tudja folytatni az útját, és a cserét ilyenkor már sürgősséggel kell intézni.</p>
<h2>Zöld rendszám csere plug-in hibrid autóknál: teendőlista</h2>
<ul>
<li>Az érintett autók listája elkészült: rendszám, sofőr, telephely, üzemeltetési forma.</li>
<li>Autónként eldöntötte: karakterazonos vagy új rendszám.</li>
<li>Lízingelt és bérelt autóknál megvan a tulajdonos jóváhagyása.</li>
<li>Az időpontok le vannak foglalva, a sofőrök és az ügyintézők értesítve vannak.</li>
<li>Új rendszámnál: a kötelező és a casco biztosítója értesítve, az e-matrica átvezetve, a parkolási és behajtási engedélyek, a telephelyi beléptetés és az üzemanyagkártyák adatai ellenőrizve.</li>
<li>Az új forgalmi engedély beszkennelve, a régi előzményként megőrizve.</li>
<li>A flottalistában a rendszám frissítve.</li>
</ul>
<h2>Hogyan segít ebben a Yardly?</h2>
<p>A Yardly <a href="/megoldasaink/jarmunyilvantartas/">járműnyilvántartásában</a> a járműtípusokat Ön határozza meg: ha felvesz egy „Plug-in hibrid” típust, az érintett autókat egy szűréssel listázhatja. Az új rendszámot az adatlapon helyben írja át, az új forgalmi engedélyt pedig az „Új verzió feltöltése” gombbal teszi fel; a régi előzményként megmarad a <a href="/megoldasaink/dokumentumok/">dokumentumok</a> között. Autónként egyszeri emlékeztetőt is beállíthat a cserére, és a rendszer e-mailben szól. A DKV-kártyákat a Yardly a DKV-nál rögzített rendszám alapján köti a járművekhez; ha a rendszám változik, a kártya kézzel is átállítható.</p>
<p>A plug-in hibrideket érintő adózási változásokról külön cikkben írunk: <a href="/blog/cegautoado-2027-plug-in-hibrid/">cégautóadó 2027 és a plug-in hibridek</a>.</p>`,
  },
  {
    slug: "teli-felkeszules-ceges-flotta",
    date: "2026-10-22",
    minutes: 4,
    category: "fleet",
    solution: "szerviz-karbantartas",
    title: "Téli felkészülés flottánál: téli gumi céges autóra, ellenőrzőlista",
    excerpt: "Téli gumi céges autóra, akkumulátor, fagyálló, ablaktörlő: ellenőrzőlista flottáknak, gumicsere-ütemezés sok autóra és az osztrák téli szabály.",
    body: `
<p>A téli felkészülés egy flottánál nem egy autó gumicseréje, hanem ütemezési feladat: ugyanabban a néhány hétben kell sorra venni minden autót, a gumiktól az ablakmosóig. A téli gumi céges autóra Magyarországon a cikk írásakor (2026. október) nem általánosan kötelező, de a külföldre járó autóknál már november 1-jétől számít, mi van a keréken. Az alábbi ellenőrzőlista és ütemezési minta abban segít, hogy a flotta időben felkészüljön.</p>
<h2>Kötelező-e a téli gumi céges autón Magyarországon?</h2>
<p>Általános téligumi-kötelezettség nincs. Van viszont néhány szabály, amelyet a flottakezelőnek ismernie kell:</p>
<ul>
<li><strong>Hólánctábla.</strong> A „Hólánc használata kötelező” jelzőtábla után a járműnek legalább egy hajtott tengelyén hóláncot kell használnia. Ha a tábla közúti határátkelőhelyen áll, csak az a jármű léphet be az országba, amelyben készenlétben van a hólánc (KRESZ 13. §).</li>
<li><strong>Hólánc csak havas, jeges úton</strong> használható (KRESZ 48. §), és hólánccal legfeljebb 50 km/óra a megengedett sebesség (KRESZ 26. §).</li>
<li><strong>Profilmélység.</strong> Személyautón és kisteherautón (M1, N1 kategória) a minimum 1,6 mm a teljes futófelületen (<a href="https://njt.jog.gov.hu/jogszabaly/1990-6-20-5E">6/1990. KöHÉM rendelet</a> 36. §).</li>
<li><strong>Mi számít téli gumiabroncsnak?</strong> Ugyanez a rendelet azt, amelyet a gyártó téli jelöléssel látott el (például „M+S” felirat vagy hópihe-ábra), és amelynek mintázatmélysége meghaladja a 4 mm-t (2. §). Egy 3 mm-esre kopott téli gumi tehát a rendelet szerint már nem számít téli gumiabroncsnak.</li>
<li><strong>Sebességindex.</strong> Téli mintázatú gumi akkor is felszerelhető, ha a sebességhatára alacsonyabb az autó végsebességénél, de ilyenkor a vezetőfülkében fel kell tüntetni a gumi megengedett sebességét (36. §).</li>
</ul>
<h2>Téli gumi Ausztriában: november 1. és április 15. között</h2>
<p>Ha céges autói Ausztriába is járnak, ott szigorúbb a szabály. Az osztrák gépjárműtörvény (KFG 1967, 102. §) szerint november 1. és április 15. között személyautót és legfeljebb 3,5 tonnás tehergépkocsit (M1 és N1 kategória) téli útviszonyok között, vagyis hó, latyak vagy jég esetén csak akkor szabad vezetni, ha minden keréken téli gumi van. Ha az utat összefüggő hó- vagy jégréteg borítja, téli gumi helyett legalább két hajtott keréken hólánc is megfelel.</p>
<ul>
<li>Az osztrák kormányzati tájékoztató (<a href="https://www.oesterreich.gv.at/de/themen/mobilitaet/kfz/10/Seite.063320">oesterreich.gv.at</a>) szerint 3,5 tonnáig a téli gumi legkisebb profilmélysége 4 mm radiál-, 5 mm diagonálabroncsnál.</li>
<li>3,5 tonna feletti tehergépkocsinál (N2, N3) november 1. és április 15. között az útviszonyoktól függetlenül legalább az egyik hajtott tengely kerekein téli gumi kell. A profilmélység itt legalább 5 mm radiál-, 6 mm diagonálabroncsnál.</li>
<li>Indulás előtt ellenőrizze a célország és a tranzitországok aktuális szabályait is.</li>
</ul>
<p>A gyakorlatban: az Ausztriába járó autókra a téli garnitúra még november előtt kerüljön fel, és olyan gumi, amelyen bőven 4 mm felett van a profil.</p>
<h2>Téli felkészülés: ellenőrzőlista a flotta autóihoz</h2>
<div class="template">
<p><strong>Téli ellenőrzőlista – autónként</strong></p>
<ul>
<li>Gumik: téli vagy négyévszakos jelölés, profilmélység mérve (mm), gyártási idő (DOT), oldalfal sértetlen, légnyomás beállítva, azonos tengelyen azonos gumik.</li>
<li>Pótkerék vagy defektjavító készlet: megvan és használható.</li>
<li>Akkumulátor: volt-e indítási nehézség; idősebb akkumulátornál bevizsgálás a szervizben.</li>
<li>Hűtőfolyadék: fagyállóság megmérve a szervizben.</li>
<li>Ablakmosó: téli folyadék betöltve.</li>
<li>Ablaktörlő lapátok: nem csíkoznak, nem repedtek.</li>
<li>Világítás: minden lámpa működik, a fényszórók tiszták.</li>
<li>Fűtés, páramentesítés, hátsó szélvédő-fűtés: működik.</li>
<li>Felszerelés: jégkaparó, kefe; hólánc a hegyvidékre vagy külföldre járó autókban.</li>
<li>Ajtózárak, tömítések: nem fagynak be.</li>
</ul>
<p>Rögzítse: dátum, km-óraállás, ki ellenőrizte, talált hiba és teendő.</p>
</div>
<h2>Gumicsere ütemezése sok autónál</h2>
<ol>
<li><strong>Készítsen listát.</strong> Autónként: gumiméret, a téli garnitúra helye (telephely vagy gumihotel), az utoljára mért profilmélység.</li>
<li><strong>Szűrje ki, ahol új gumi kell.</strong> Ahol a téli garnitúra elkopott vagy túl öreg, rendelje meg előre, hogy a csere napján már ott legyen.</li>
<li><strong>Állítson fel sorrendet.</strong> Előre a külföldre és hegyvidékre járó autók, utána a sokat futók, végül a telephelyen állók.</li>
<li><strong>Foglaljon sávosan.</strong> Kérjen a szervizpartnertől napi kapacitást, és ossza be rá az autókat.</li>
<li><strong>Értesítse a sofőröket</strong> az időpontokról, és szervezzen helyettesítést, ha egy autó fél napra kiesik.</li>
<li><strong>Rögzítse a cserét:</strong> dátum, km-óraállás, melyik garnitúra került fel, mennyi rajta a profil, és hová került a levett garnitúra.</li>
</ol>
<p>Egy kitalált példa: 30 autó, a szervizpartner naponta 6 autót tud fogadni.</p>
<p class="formula">szükséges munkanapok = 30 autó ÷ 6 autó/nap = 5 munkanap</p>
<p>Egy-két nap tartalékkal (elmaradt időpont, sérült felni) ez nagyjából másfél hét. Az ütemezést tehát ennyivel a kívánt határidő előtt kell elkezdeni, és a tavaszi visszacserére ugyanígy. A garnitúrák nyilvántartásáról az <a href="/blog/abroncsnyilvantartas-flotta/">abroncsnyilvántartásról szóló cikkünkben</a> írunk részletesen.</p>
<h2>Mikor nem elég már a táblázat?</h2>
<p>Tíz autóig egy táblázat jól bírja. Harminc autónál a gumicsere viszont már időpontokból, sofőrökből, garnitúrákból és tárolási helyekből álló feladat, és ha a táblázat nem szól, a tavaszi visszacsere ugyanúgy elcsúszik. Ha több telephely van, és a sofőröknek is rögzíteniük kellene, érdemes rendszerben gondolkodni.</p>
<h2>Hogyan segít a Yardly?</h2>
<p>A Yardlyban a szezonális gumicseréhez ismétlődő emlékeztetőt köthet minden járműhöz, és a rendszer e-mailben szól, mielőtt esedékes. A cserét a <a href="/megoldasaink/szerviz-karbantartas/">szerviznaplóba</a> rögzíti dátummal, km-rel, költséggel és szervizpartnerrel, a téli garnitúrát pedig tartozékként tarthatja nyilván gyári számmal és megjegyzéssel. A téli ellenőrzőlistát a sofőrök a telefonjukon tölthetik ki: a <a href="/megoldasaink/allapotfelmeres/">telefonos állapotfelmérés</a> (Üzleti csomagtól) a cég saját listáját küldi ki linkben, bejelentkezés nélkül, az eredmény pedig a jármű adatlapján jelenik meg.</p>`,
  },
  {
    slug: "kgfb-evfordulo-flottabiztositas",
    date: "2026-10-22",
    minutes: 4,
    category: "deadlines",
    solution: "karugyek-biztositas-tartozekok",
    title: "KGFB évforduló céges autóknál: felmondás, váltás, flottabiztosítás",
    excerpt: "Meddig mondható fel a céges autók KGFB-je évfordulóra, mit gyűjtsön össze előtte a flottakezelő, és mikor érdemes flottabiztosításra rákérdezni.",
    body: `
<p>A KGFB évforduló céges autóknál nem egy dátum, hanem annyi, ahány autó van a flottában, és mindegyikhez tartozik egy felmondási határidő is. Aki ezeket nem látja előre, a díjértesítőből tudja meg, mennyit fizet jövőre, és addigra a váltásra sokszor már kevés az idő. Az alábbiakban a cikk írásakor (2026. október) hatályos szabályok szerint összefoglaljuk, mikor és hogyan lehet évfordulóra váltani, mit érdemes előre összegyűjteni, és mikor érdemes flottabiztosításra rákérdezni.</p>
<h2>Mikor van a KGFB évforduló, és meddig lehet felmondani?</h2>
<p>A szabályokat a kötelező gépjármű-felelősségbiztosításról szóló <a href="https://njt.jog.gov.hu/jogszabaly/2009-62-00-00">2009. évi LXII. törvény</a> (Gfbt.) rögzíti:</p>
<ul>
<li><strong>Egyéves biztosítási időszak.</strong> A határozatlan tartamú szerződéseknél a biztosítási időszak egy év, az évfordulót pedig fel kell tüntetni a biztosítást igazoló okiraton (17. §).</li>
<li><strong>Díjértesítő legalább 50 nappal előtte.</strong> A biztosító a biztosítási időszak utolsó napját megelőző 50. napig elküldött írásos értesítőben tájékoztat az évfordulóról és a várható díjról (17. §).</li>
<li><strong>Felmondás legalább 30 nappal előtte.</strong> A szerződő az évfordulóra, legalább 30 nappal előtte, írásban vagy – ha így állapodtak meg – elektronikusan, indoklás nélkül felmondhatja a szerződést (7. §).</li>
<li><strong>A beérkezés számít.</strong> A felmondás akkor hatályosul, ha határidőben megérkezik a biztosítóhoz; nem az elküldés napja számít (7. §).</li>
<li><strong>Év közben nem lehet.</strong> A biztosítási időszakon belül – a törvényben meghatározott eseteken túl – csak közös megegyezéssel szüntethető meg a szerződés (7. §).</li>
</ul>
<p>A 2010 előtt kötött szerződéseknél a január 1-jei évforduló volt az általános, ezért ezeknél a felmondásnak legkésőbb december 1-jéig be kell érkeznie: ebből lesz minden évben az év végi KGFB-kampány. Az újabb szerződések évfordulója a kockázatviselés kezdetéhez igazodik, így egy flottában egész évben jönnek a határidők.</p>
<table>
<thead><tr><th>Mikor</th><th>Mi történik</th></tr></thead>
<tbody>
<tr><td>Az új időszak kezdete előtt 60 nap</td><td>Ennél korábban tett ajánlatot a biztosító nem fogadhat el (Gfbt. 5. §), innentől érdemes ajánlatot kérni.</td></tr>
<tr><td>Legkésőbb 50 nappal az évforduló előtt</td><td>Megérkezik a biztosító értesítője a várható díjról.</td></tr>
<tr><td>Legkésőbb 30 nappal az évforduló előtt</td><td>A felmondásnak be kell érkeznie a biztosítóhoz.</td></tr>
<tr><td>Évforduló</td><td>A régi szerződés a biztosítási időszak zárónapján megszűnik, az újnak a következő naptól kell fedezetet adnia.</td></tr>
</tbody>
</table>
<p>A casco nem a Gfbt. alá tartozik: a felmondását a saját szerződési feltételei szabályozzák, ezért azt külön nézze meg.</p>
<h2>Mit gyűjtsön össze a flottakezelő az évforduló előtt?</h2>
<ul>
<li>Az évfordulók listáját autónként, mellette a felmondási határidővel.</li>
<li>Az aktuális díjakat és a díjértesítőben közölt várható díjakat.</li>
<li>A kártörténetet: melyik autóval okoztak olyan kárt, amelyet a biztosító kifizetett.</li>
<li>A bónusz-málusz besorolásokat. Megszűnéskor a biztosító 30 napon belül írásban tájékoztat a megszűnt szerződés besorolásáról (Gfbt. 8. §).</li>
<li>Az új szerződéshez szükséges adatokat: az előző biztosító neve, a biztosítást igazoló okirat száma, és ha van, a kártörténeti rendszerazonosító szám (Gfbt. 9. §).</li>
<li>A várható változásokat: mely autók kerülnek ki a flottából, és melyek érkeznek.</li>
</ul>
<div class="template">
<p><strong>KGFB évforduló-lista – minta</strong></p>
<table>
<thead><tr><th>Rendszám</th><th>Biztosító</th><th>Kötvényszám</th><th>Évforduló</th><th>Felmondás beérkezése legkésőbb</th><th>Mostani éves díj</th><th>Várható díj</th><th>Okozott kár (12 hó)</th><th>Döntés</th></tr></thead>
<tbody>
<tr><td>ABC-123</td><td>…</td><td>…</td><td>2027. március 14.</td><td>2027. február 12.</td><td>… Ft</td><td>… Ft</td><td>0</td><td>marad / vált</td></tr>
<tr><td>DEF-456</td><td>…</td><td>…</td><td>2026. december 31.</td><td>2026. december 1.</td><td>… Ft</td><td>… Ft</td><td>1</td><td>ajánlatkérés</td></tr>
</tbody>
</table>
<p>Tipp: a felmondási határidőt írja be dátumként, és tegyen elé még egy hetet az aláírásokra és a kézbesítésre.</p>
</div>
<h2>Bónusz-málusz és kártörténet céges autóknál</h2>
<p>A Gfbt. szerint az üzemben tartó a kármentes időszak után díjkedvezményre (bonus) jogosult, az általa okozott és a biztosító által kifizetett károk után pedig díjtöbbletet (malus) fizet (25. §). Céges autóknál ezért érdemes autónként vezetni, melyik kárt okozták a saját sofőrök, és melyiket fizette ki a biztosító, mert ez a későbbi díjat is befolyásolja.</p>
<p>Flottánál más a helyzet: a törvény szerint a díjtarifát a biztosító – a flotta kivételével – bonus-malus osztályonként állapítja meg (3. §). Hogy flottás szerződésnél pontosan milyen adatokból számol, azt az ajánlatkéréskor kérdezze meg.</p>
<h2>Flotta biztosítás: mikor érdemes rákérdezni?</h2>
<p>A Gfbt. gépjárműflottának azt tekinti, amikor ugyanannál a biztosítónál ugyanaz a szerződő üzemben tartó (jogi személy, egyéni vállalkozó vagy egyéni cég) együtt kezelt járműveket biztosít, és ezek száma a biztosítási időszak kezdőnapján eléri az ötöt (3. §). Öt autó felett tehát érdemes megkérdezni a biztosítókat vagy egy független biztosítási alkuszt, mit jelentene a flottás konstrukció.</p>
<ul>
<li>Kérjen ajánlatot egyedi és flottás formában is, ugyanarra a járműkörre.</li>
<li>Kérdezze meg, hogyan számít a flotta kártörténete, és mi történik, ha év közben autó érkezik vagy kikerül.</li>
<li>A teljes éves költséget hasonlítsa össze, ne csak az autónkénti díjat.</li>
<li>Számoljon az adminisztrációval is: hány szerződést, kapcsolattartót és évfordulót kell kezelnie.</li>
</ul>
<h2>Mikor nem elég már az Excel?</h2>
<p>Egy tízautós flottánál tíz évforduló, tíz felmondási határidő és tíz díjértesítő van. Ezt egy táblázat elbírja, ha valaki rendszeresen ránéz. Ha viszont az évfordulók szétszóródnak az évben, és a táblázat nem küld figyelmeztetést, a határidő egyszerűen elmegy. Ilyenkor érdemes a dátumokat olyan helyre tenni, amely magától szól.</p>
<h2>Hogyan segít a Yardly?</h2>
<p>A Yardlyban a <a href="/megoldasaink/karugyek-biztositas-tartozekok/">kötelező és a casco díját</a> járművenként és időszakonként rögzítheti, és egy összesítő oldalon látja. A kötvényt dokumentumként a járműhöz csatolja, az évfordulót lejáratként adja meg, a <a href="/megoldasaink/riasztasok/">riasztás</a> napjait pedig szabadon állíthatja, például 60, 45 és 30 nappal elé, hogy a felmondási határidő előtt legyen idő ajánlatot kérni. A kárügyek a biztosítói állapottal és a kárszámmal ugyanott vannak, így a kártörténet is kéznél van. A kárügyek kezeléséről külön cikkben írunk: <a href="/blog/karugyintezes-ceges-flotta/">kárügyintézés flottánál</a>.</p>`,
  },
  {
    slug: "ev-vegi-eszkozleltar",
    date: "2026-10-22",
    minutes: 4,
    category: "equipment",
    solution: "leltar",
    title: "Év végi leltár kkv-knak: a leltározás menete és leltárív minta",
    excerpt: "Év végi eszközleltár kkv-knak lépésről lépésre: előkészítés, felelősök, felvétel, eltérések kezelése és lezárás, a végén kinyomtatható leltárívvel.",
    body: `
<p>Az év végi leltár sok kkv-nál ugyanúgy zajlik: december közepén valaki kinyomtatja a tavalyi listát, és a csapat két napig keresi a gépeket, a szerszámokat és a laptopokat. Ez az útmutató a tárgyi eszközök – gépek, szerszámok, IT-eszközök és járművek – fizikai számbavételéről szól: hogyan készítse elő, kik végezzék, hogyan rögzítsék, és mi legyen az eltérésekkel. A cikk végén egy azonnal használható leltárívet is talál.</p>
<h2>Mit ír elő a számviteli törvény a leltárról?</h2>
<p>A <a href="https://njt.jog.gov.hu/jogszabaly/2000-100-00-00">számviteli törvény</a> (2000. évi C. törvény) 69. § (1) bekezdése szerint a könyvek év végi zárásához és a mérleg tételeinek alátámasztásához olyan leltárt kell összeállítani, amely tételesen, ellenőrizhető módon tartalmazza a mérleg fordulónapján meglévő eszközöket és forrásokat, mennyiségben és értékben. Az üzleti év főszabályként a naptári év (11. § (1)), így a fordulónap a legtöbb cégnél december 31.</p>
<p>A törvény két esetet különböztet meg:</p>
<ul>
<li><strong>Ha a cég folyamatos mennyiségi nyilvántartást vezet</strong>, a leltározást a leltározási szabályzatban meghatározott időszakonként, de legalább háromévente mennyiségi felvétellel kell elvégezni (69. § (3)).</li>
<li><strong>Ha nincs ilyen nyilvántartás</strong>, vagy nem folyamatosan vezetik, a mérlegfordulónapra vonatkozó leltározást mennyiségi felvétellel kell elvégezni (69. § (4)).</li>
</ul>
<p>Az egyéni vállalkozóra a törvény hatálya nem terjed ki (2. § (3)). A szabályokat a cikk írásakor (2026. október) hatályos szöveg alapján idéztük. Hogy az Ön cégére melyik eset vonatkozik, és mit ír elő a saját <a href="/blog/leltarozasi-szabalyzat/">leltározási szabályzata</a>, azt egyeztesse a könyvelőjével.</p>
<h2>A leltározás menete öt lépésben</h2>
<h3>1. Előkészítés novemberben</h3>
<p>Kérje el a könyvelőtől a tárgyieszköz-listát, és vesse össze a saját, operatív nyilvántartásával. Ami az egyikben szerepel, a másikban nem, azt már most jelölje meg. Gyűjtse össze a helyszíneket (telephely, raktár, helyiség), és nézze át, van-e minden eszközön olvasható azonosító. A hiányzó címkéket a leltár előtt pótolja, ne közben.</p>
<h3>2. Ütemezés és felelősök</h3>
<p>Döntse el, ki leltároz, melyik helyszínen és melyik napon. Jól bevált gyakorlat, hogy a felvételt ne egyedül az végezze, aki az eszközökért felel: legyen mellette egy független kolléga is. Jelöljön ki egy leltárfelelőst, aki az eredményt összesíti, és a vitás kérdésekben dönt. Az ütemtervben szerepeljen a felvétel napja, a kiértékelés és a lezárás határideje is.</p>
<h3>3. Felvétel</h3>
<p>A leltározók helyiségenként, sorban haladjanak, és minden tételnél négy dolgot rögzítsenek: megvan-e, hol van, kinél van, és milyen állapotban. A pontosabb eredményhez érdemes <a href="/blog/vak-leltar/">vak leltárt</a> tartani: ilyenkor a leltározó nem látja előre, mit kellene találnia. Külön kezelje azokat az eszközöket, amelyek nincsenek a telephelyen: a szervizben lévő gépet, a munkavállalónál lévő laptopot, a terepen dolgozó céges autót. Ezekről kérjen visszaigazolást, például a szerviz munkalapját vagy a kolléga fotóját az eszköz címkéjéről.</p>
<h3>4. Eltérések kezelése</h3>
<p>Az eltérés nem feltétlenül veszteség. Az alábbi csoportok segítenek eldönteni, mi a teendő:</p>
<ul>
<li><strong>Nem található:</strong> keresse meg a felelőssel együtt, nézze meg a szerviz- és a kiadási előzményeket. Adjon határidőt, ne hagyja nyitva januárra.</li>
<li><strong>Többlet:</strong> olyan eszköz, amely nincs a listán. Vegye fel, és tisztázza, honnan került oda.</li>
<li><strong>Rossz helyen vagy rossz felelősnél:</strong> ilyenkor a nyilvántartást kell javítani, nem az eszközt keresni.</li>
<li><strong>Selejtezendő:</strong> jelölje meg, és indítsa el a selejtezés belső rendjét.</li>
</ul>
<p>Hogy a hiánynak vagy a többletnek mi a számviteli következménye, azt a könyvelő dönti el a leltár alapján.</p>
<h3>5. Lezárás</h3>
<p>A leltárívet a leltározók és a leltárfelelős aláírják. Készüljön egy összesítő az eltérésekről és a megtett lépésekről, ezt adja át a könyvelőnek. Végül frissítse a nyilvántartást: helyek, felelősök, állapotok. Ez lesz a jövő évi leltár kiindulópontja.</p>
<h2>Leltárív: minta, amelyet azonnal használhat</h2>
<p>Az alábbi szerkezet nyomtatva és táblázatban is működik. Helyszínenként egy ív készüljön.</p>
<div class="template">
<p><strong>Leltárív – tárgyi eszközök</strong></p>
<p>Cég: ……………… · Fordulónap: 2026. december 31. · Helyszín (telephely › raktár › helyiség): ………………</p>
<p>Leltározók: ……………… · Leltárfelelős: ……………… · A felvétel kezdete és vége: ………………</p>
<table>
<thead><tr><th>Azonosító / QR</th><th>Megnevezés</th><th>Helyszín</th><th>Felelős</th><th>Állapot</th><th>Talált / nem talált</th><th>Megjegyzés</th></tr></thead>
<tbody>
<tr><td>IT-00234</td><td>Laptop</td><td>Iroda › 2. emelet</td><td>N. P.</td><td>Használatban</td><td>Talált</td><td>–</td></tr>
<tr><td>SZR-01087</td><td>Akkus fúró-csavarozó</td><td>Raktár › B polc</td><td>K. G.</td><td>Használatban</td><td>Nem talált</td><td>A kiadási napló szerint a 2. csapatnál</td></tr>
<tr><td>GEP-00012</td><td>Állványos fúrógép</td><td>Műhely</td><td>K. G.</td><td>Javítás alatt</td><td>Talált</td><td>Selejtezésre javasolt</td></tr>
<tr><td>TRG-00003</td><td>Targonca</td><td>Raktár</td><td>Sz. L.</td><td>Használatban</td><td>Talált</td><td>A címke sérült, pótolni kell</td></tr>
</tbody>
</table>
<p>Eltérések száma: …… · Ebből tisztázva: ……</p>
<p>Aláírások: leltározó(k) ……………… · leltárfelelős ……………… · dátum ………………</p>
</div>
<p>Az Állapot oszlopban előre megadott értékeket használjon (például Használatban, Javítás alatt, Selejtezésre vár), különben az összesítésnél tízféle írásmód jön össze.</p>
<h2>Mit segít a Yardly, és mit nem?</h2>
<p>A leltárnak két fele van. A fizikai számbavétel azt mondja meg, hogy az eszköz megvan-e, hol van és kinél van. Az értékelés azt, hogy mennyit ér: bekerülési érték, értékcsökkenés, könyv szerinti érték. A Yardly az első felét segíti. Az értékelés és a könyvelés a könyvelőprogram dolga, a Yardly nem számol értékcsökkenést. A két rendszer szerepéről bővebben: <a href="/blog/eszkoznyilvantartas-vagy-targyi-eszkoz-konyveles/">eszköznyilvántartás vagy tárgyi eszköz könyvelés</a>.</p>
<h2>Mikor nem elég már az Excel?</h2>
<ul>
<li>Több helyszínen leltároznak egyszerre, és a végén öt fájlt kell összefésülni.</li>
<li>Több száz tétel van, és a kinyomtatott lista pipálása napokig tart.</li>
<li>Nem látszik, ki és mikor módosította egy eszköz helyét vagy felelősét.</li>
<li>A címkéket nem lehet beolvasni, minden azonosítót kézzel kell begépelni.</li>
<li>Év közben senki nem frissíti a fájlt, így decemberben a tavalyi állapotot leltározzák.</li>
</ul>
<h2>Így segít a Yardly az év végi leltárban</h2>
<p>A Yardly <a href="/megoldasaink/leltar/">telefonos leltárában</a> kiválasztja az eszközöket és a járműtartozékokat kategória, típus, állapot, telephely, raktár vagy helyiség szerint, és elküldi a leltárt egy kollégának. Ő e-mailben kap egy 14 napig érvényes linket, amely a telefonon megnyitja a kamerát; bejelentkezni és alkalmazást telepíteni nem kell. A QR-kódot és a vonalkódot is beolvassa, a telefon pedig nem mutatja előre a listát. A végén látszik, mi került elő és mi nem, a hiányzókhoz megjegyzés írható, az eredmény PDF-ben letölthető. A funkció az Üzleti csomagtól érhető el, a meglévő eszközlistát Excelből töltheti fel.</p>`,
  },
  {
    slug: "leltarozasi-szabalyzat",
    date: "2026-10-27",
    minutes: 5,
    category: "equipment",
    solution: "leltar",
    title: "Leltározási szabályzat mintával: kinek kötelező, mi legyen benne?",
    excerpt: "Kinek kötelező a leltározási szabályzat, mi legyen benne a gyakoriságtól az eltérések kezeléséig, és egy mintavázlat, amelyet a könyvelője véglegesíthet.",
    body: `
<p>A leltározási szabályzat sok kkv-nál egy könyvelő által készített dokumentum, amelyet senki nem olvasott el, és nem is egyezik azzal, ahogyan a cég valójában leltároz. Pedig ha jól van megírva, ez mondja meg, ki, mikor és hogyan számolja meg az eszközöket, és mi a teendő, ha valami hiányzik. Ebben a cikkben összefoglaljuk, kinek kötelező, mit tartalmazzon, és mintát is adunk a leltározási szabályzathoz, amelyet a könyvelőjével véglegesíthet.</p>
<h2>Kinek kötelező a leltározási szabályzat?</h2>
<p>A <a href="https://njt.jog.gov.hu/jogszabaly/2000-100-00-00">számviteli törvény</a> (2000. évi C. törvény) 14. § (3) bekezdése szerint a gazdálkodónak írásba foglalt számviteli politikát kell kialakítania. A 14. § (5) bekezdés a) pontja szerint ennek keretében el kell készíteni az eszközök és a források leltárkészítési és leltározási szabályzatát. A köznyelv ezt hívja leltározási szabályzatnak.</p>
<p>A kötelezettség a törvény hatálya alá tartozó gazdálkodókat érinti, például a kft.-ket, a bt.-ket és a zrt.-ket. Néhány fontos részlet:</p>
<ul>
<li><strong>Egyszerűsített éves beszámoló:</strong> a 14. § (6) bekezdés az ilyen gazdálkodókat az önköltségszámítási szabályzat alól menti fel, a leltározási szabályzat alól nem.</li>
<li><strong>Mikrogazdálkodói beszámoló:</strong> a <a href="https://njt.jog.gov.hu/jogszabaly/2012-398-20-22">398/2012. (XII. 20.) Korm. rendelet</a> 3. § (3) bekezdése szerint a mikrogazdálkodó számviteli politikát nem készít. A rendelet ugyanakkor a számviteli törvény előírásait – a benne foglalt eltérésekkel – alkalmazni rendeli, így a leltár kérdése ilyenkor sem tűnik el.</li>
<li><strong>Egyéni vállalkozó:</strong> a számviteli törvény hatálya rá nem terjed ki (2. § (3)).</li>
<li><strong>Új cég:</strong> a szabályzatokat a megalakulástól számított 90 napon belül kell elkészíteni, törvénymódosításkor pedig a változást 90 napon belül kell átvezetni (14. § (11)).</li>
<li><strong>Felelős:</strong> a számviteli politika elkészítéséért és módosításáért a gazdálkodó képviseletére jogosult személy felel (14. § (12)).</li>
</ul>
<p>A szabályokat a cikk írásakor (2026. október) hatályos szöveg alapján foglaltuk össze. Hogy az Ön cégére pontosan mi vonatkozik, azt a könyvelője tudja megmondani.</p>
<h2>Leltár és leltározás: mi a különbség?</h2>
<p>A <strong>leltár</strong> maga a dokumentum: a törvény 69. § (1) bekezdése szerint tételesen, ellenőrizhető módon tartalmazza a fordulónapon meglévő eszközöket és forrásokat, mennyiségben és értékben. A <strong>leltározás</strong> az a munka, amellyel meggyőződnek az adatok valódiságáról: mennyiségi felvétellel vagy egyeztetéssel (46. § (3)). A szabályzatnak mindkettőről szólnia kell. Ez a cikk a tárgyi eszközök mennyiségi felvételére fókuszál; a pénzeszközök, a követelések és a kötelezettségek egyeztetésének szabályait a könyvelő írja meg. Ha a gyakorlati lépésekre kíváncsi, olvassa el az <a href="/blog/ev-vegi-eszkozleltar/">év végi eszközleltárról</a> szóló cikkünket.</p>
<h2>Mit tartalmazzon a leltározási szabályzat?</h2>
<ul>
<li><strong>Hatály:</strong> mely eszközcsoportokra (gépek, járművek, IT-eszközök, szerszámok, készletek) és mely telephelyekre vonatkozik.</li>
<li><strong>Gyakoriság és időpont:</strong> fordulónapi vagy folyamatos leltár, eszközcsoportonként. Ha a cég folyamatos mennyiségi nyilvántartást vezet, a törvény szerint legalább háromévente kell mennyiségi felvétel (69. § (3)); a szabályzat ennél gyakoribbat is előírhat.</li>
<li><strong>Módszer:</strong> mennyiségi felvétel vagy egyeztetés; listás vagy <a href="/blog/vak-leltar/">vak leltár</a>; papíron vagy telefonos beolvasással.</li>
<li><strong>Felelősök:</strong> a leltárért felelős vezető, a leltárbizottság összetétele, a leltározók és az eszközök kezelői. Rögzítse, hogy a kezelő a saját területét egyedül ne leltározhassa.</li>
<li><strong>Ütemterv:</strong> az előkészítés, a felvétel, a kiértékelés és a lezárás határideje.</li>
<li><strong>Bizonylatok:</strong> leltárív, felvételi jegyzőkönyv, eltéréslista, záró jegyzőkönyv: ki írja alá őket, és hol őrzik.</li>
<li><strong>Idegen helyen lévő eszközök:</strong> szervizben, munkavállalónál, bérbe adva. Hogyan igazolják a meglétüket?</li>
<li><strong>Eltérések kezelése:</strong> ki vizsgálja a hiányt és a többletet, milyen határidővel, és ki dönt a rendezésről.</li>
</ul>
<h2>Leltározási szabályzat: mintavázlat</h2>
<p>Az alábbi vázlat kiindulópont. A szögletes zárójelben lévő részeket töltse ki a cég adataival.</p>
<div class="template">
<p><strong>[Cég neve] – Az eszközök és a források leltárkészítési és leltározási szabályzata</strong></p>
<p><strong>1. Általános rendelkezések.</strong> A szabályzat célja, hogy meghatározza a leltár elkészítésének és a leltározásnak a rendjét. Hatálya kiterjed [a cég összes telephelyére] és a következő eszközcsoportokra: [tárgyi eszközök, járművek, járműtartozékok, IT-eszközök, szerszámok, készletek]. Jogszabályi alap: a számvitelről szóló 2000. évi C. törvény. Hatályos: [dátum]-tól.</p>
<p><strong>2. Fogalmak.</strong> Leltár, leltározás, mennyiségi felvétel, egyeztetés, fordulónap, leltáreltérés (hiány, többlet).</p>
<p><strong>3. A leltározás gyakorisága és időpontja.</strong></p>
<ul>
<li>[Tárgyi eszközök]: [évente], a fordulónapra vonatkozóan, [november 15. és január 15.] között.</li>
<li>[IT-eszközök és kéziszerszámok]: [félévente], folyamatos leltárral.</li>
<li>Rendkívüli leltár: az eszközök kezelőjének változásakor, költözéskor, lopás vagy káresemény után.</li>
</ul>
<p><strong>4. A leltározás módja.</strong> Mennyiségi felvétel helyszínenként, [vak módszerrel: a leltározó nem látja előre a nyilvántartás szerinti listát]. Az eszközöket a címkén lévő azonosító alapján kell felvenni; címke nélküli eszköznél a gyári szám a döntő.</p>
<p><strong>5. Felelősök.</strong> A leltár elkészítéséért [az ügyvezető] felel. A leltárbizottság elnöke: [név, beosztás]; tagjai: [név, beosztás]. Az eszközök kezelője a felvételnél jelen lehet, de egyedül nem leltározhat.</p>
<p><strong>6. Ütemterv.</strong> A leltárutasítás kiadása: [dátum]. Előkészítés, a címkék ellenőrzése: [dátum]-ig. Felvétel: [dátum]–[dátum]. Kiértékelés: [dátum]-ig. Lezárás és átadás a könyvelésnek: [dátum]-ig.</p>
<p><strong>7. Bizonylatok.</strong> Leltárív helyszínenként, felvételi jegyzőkönyv, eltéréslista, záró jegyzőkönyv. Aláírja: [a leltározók és a bizottság elnöke]. Őrzés helye: [hely vagy rendszer].</p>
<p><strong>8. Eltérések kezelése.</strong> A hiányt és a többletet [5] munkanapon belül ki kell vizsgálni. A vizsgálat eredményét [a bizottság elnöke] jegyzőkönyvezi; a rendezésről [az ügyvezető] dönt, a számviteli elszámolást a könyvelés végzi.</p>
<p><strong>9. Záró rendelkezések.</strong> A szabályzatot [évente] felül kell vizsgálni. Kelt: [hely, dátum]. Aláírás: [a cég képviselője].</p>
</div>
<p>A minta nem jogi vagy számviteli tanácsadás. A végleges szöveget könyvelő vagy számviteli szakember véglegesítse, mert neki kell összhangba hoznia a cég értékelési szabályzatával és beszámolási formájával.</p>
<h2>Mikor nem elég már az Excel?</h2>
<p>A szabályzat leírja, ki mikor leltároz. Egy táblázat viszont nem szól, ha közeleg a félévente esedékes leltár, nem tudja, melyik eszköz melyik helyiségben van éppen, és nem őrzi meg, ki írta át a felelőst. Ha a szabályzatban folyamatos leltár szerepel, de senki nem emlékszik, melyik raktár következik, az Excel már nem elég.</p>
<h2>Hogyan segít a Yardly?</h2>
<p>A Yardly eszköznyilvántartásában minden eszközhöz rögzíthető a leltári száma, a pontos helye (telephely › raktár › helyiség › polc), a felelőse és a használója. A <a href="/megoldasaink/leltar/">telefonos leltár</a> vak: a leltározó a kamerával olvassa be a címkéket, a telefon nem mutatja előre a listát, az eredmény PDF-ben letölthető, a korábbi leltárak pedig a Leltár előzményekben visszakereshetők. A <a href="/megoldasaink/folyamatok/">folyamatok</a> között időzítve, például negyedévente vagy évente indíthat leltárt, egy lezárt leltár pedig maga is elindíthat egy folyamatot, például az eltérések kivizsgálását. A szabályzatot nem a Yardly írja meg, de a benne leírt rendet könnyebb vele betartani.</p>`,
  },
  {
    slug: "flottakezeles-vagy-jarmukovetes",
    date: "2026-10-29",
    minutes: 4,
    category: "fleet",
    solution: "jarmunyilvantartas",
    title: "Flottakezelés vs. járműkövetés: mikor elég GPS nélkül?",
    excerpt: "A GPS azt mutatja, hol jár az autó. A flottakezelő szoftver azt, mikor jár le a műszaki és mennyibe kerül. Kinek melyik kell, és mikor kell mindkettő?",
    body: `
<p>Aki flottakezelő programot keres, hamar két nagyon különböző termékkel találkozik: a GPS-es járműkövetővel és a nyilvántartó, adminisztrációs rendszerrel. A „flottakezelés vs. járműkövetés” kérdés ezért jogos. A két megoldás mást mér, másba kerül, és más problémát old meg. Ez a cikk őszintén összeveti őket, és segít eldönteni, mikor elég egy flottakezelő szoftver GPS nélkül, és mikor kell mellé járműkövetés is.</p>
<h2>Mit csinál egy GPS-es járműkövető?</h2>
<p>A járműkövető egy autóba szerelt vagy csatlakoztatott fedélzeti egységből és egy online felületből áll. Az egység mobilhálózaton küldi a helyadatokat. Jellemző funkciói:</p>
<ul>
<li>valós idejű helyzet a térképen,</li>
<li>útvonal-előzmények: merre járt az autó, hol és mennyit állt,</li>
<li>sok rendszerben automatikusan készülő elektronikus útnyilvántartás,</li>
<li>riasztás, ha egy autó elhagy egy kijelölt területet, vagy munkaidőn kívül mozdul,</li>
<li>egyes rendszerekben vezetési stílus, üzemanyagszint és egyéb járműadatok.</li>
</ul>
<p>Cserébe hardver kell hozzá. Az egységet meg kell venni vagy bérelni, be kell szerelni, és autónként havi díjjal kell számolni. Új autónál és autócserénél a telepítés megismétlődik.</p>
<h2>Mit csinál egy flottakezelő szoftver GPS nélkül?</h2>
<p>A nyilvántartó flottakezelő szoftver nem azt figyeli, hol jár az autó, hanem azt, ami körülötte történik. Hardver nem kell hozzá, böngészőből és telefonról használható, és jellemzően a meglévő Excel-listából tölthető fel. Tipikus feladatai:</p>
<ul>
<li>járművenkénti adatlap, előzményekkel,</li>
<li>forgalmi, műszaki, kötelező, casco és jogosítvány lejárattal és riasztással,</li>
<li>km vagy idő szerinti karbantartási ütemterv és szerviznapló,</li>
<li>tankolások, üzemanyagkártyás tranzakciók, fogyasztás és Ft/km,</li>
<li>kárügyek, bírságok, biztosítási díjak,</li>
<li>jóváhagyások és feladatok a csapatnak.</li>
</ul>
<h2>Flottakezelés vs. járműkövetés egy táblázatban</h2>
<table>
<thead>
<tr><th>Szempont</th><th>GPS-es járműkövető</th><th>Nyilvántartó flottakezelő szoftver</th></tr>
</thead>
<tbody>
<tr><td>Hardver, telepítés</td><td>Kell, autónként</td><td>Nem kell</td></tr>
<tr><td>Valós idejű helyzet</td><td>Igen</td><td>Nem</td></tr>
<tr><td>Útvonal, útnyilvántartás</td><td>Igen, sok rendszerben automatikusan</td><td>Jellemzően nem</td></tr>
<tr><td>Km-óraállás</td><td>A mért futásból</td><td>Tankoláskor vagy kézzel rögzítve</td></tr>
<tr><td>Lejáratok, dokumentumok</td><td>Rendszerenként eltér, sokszor kiegészítő funkció</td><td>Fő feladat</td></tr>
<tr><td>Szerviz és karbantartás</td><td>Rendszerenként eltér</td><td>Fő feladat</td></tr>
<tr><td>Költségek, Ft/km</td><td>Részben, főleg az üzemanyag</td><td>Fő feladat, minden költségelemmel</td></tr>
<tr><td>Gépek, eszközök</td><td>Csak ha azokra is egységet szerelnek</td><td>Szoftverenként eltér</td></tr>
<tr><td>Bevezetés</td><td>Telepítési időpont autónként</td><td>Adatfeltöltés, hardver nélkül</td></tr>
<tr><td>Költségszerkezet</td><td>Hardver, telepítés és előfizetés</td><td>Jellemzően csak előfizetés</td></tr>
</tbody>
</table>
<h2>Kinek melyik kell?</h2>
<h3>Elég a nyilvántartás, ha…</h3>
<ul>
<li>az autókat állandó beosztással a saját kollégák használják, és nem kell percre tudni, hol vannak,</li>
<li>a fő gond az elcsúszó határidő, a szétszórt szervizadat, és hogy senki nem tudja egy autó valós költségét,</li>
<li>az útnyilvántartás kérdését a könyvelőjükkel már rendezték,</li>
<li>targoncát, szerszámot vagy IT-eszközt is nyilván kell tartani, nem csak autót.</li>
</ul>
<h3>Járműkövetés kell, ha…</h3>
<ul>
<li>a diszpécsernek valós időben kell látnia, melyik autó van a legközelebb a következő címhez,</li>
<li>útvonallal kell igazolni, hol járt az autó, például egy ügyfél felé vagy vitás esetben,</li>
<li>automatikus, GPS-alapú útnyilvántartást szeretnének,</li>
<li>a lopás vagy a jogosulatlan használat valós kockázat.</li>
</ul>
<h3>Mindkettő kell, ha…</h3>
<p>nagyobb, sokat mozgó flottáról van szó, ahol a diszpécsernek a térkép kell, a flottavezetőnek pedig a határidők, a szervizek és a költségek. A két rendszer ilyenkor nem versenytársa egymásnak: a GPS a mozgást, a nyilvántartás az autó teljes életét kezeli. Gyakori hiba, hogy a cég GPS-t vesz, és azt várja tőle, hogy a műszaki lejáratára is figyeljen. A fordítottja is előfordul: nyilvántartó rendszert vezetnek be, és útnyilvántartást várnak tőle.</p>
<p>Egy kitalált példa: egy 25 autós szerelőcégnél a diszpécser a GPS-térképen osztja ki a napi címeket. A flottavezető közben a nyilvántartó rendszerben látja, hogy két autónak a jövő hónapban lejár a műszakija, egy furgon 1000 km-en belül olajcserére megy, és melyik autó Ft/km-e lóg ki a flottaátlagból. Egyik rendszer sem pótolja a másikat; a kérdés az, hogy melyik problémára van ma égetőbb szükség.</p>
<h2>Három kérdés a döntés előtt</h2>
<ol>
<li><strong>Mi okozta az elmúlt év legdrágább hibáit?</strong> Ha egy lejárt műszaki, egy elmaradt szerviz vagy egy elkallódott számla, akkor nyilvántartás kell. Ha egy jogosulatlan út vagy egy ellopott autó, akkor követés.</li>
<li><strong>Ki fogja naponta használni?</strong> A térképet a diszpécser nézi. A lejáratokat és a költségeket a flottavezető és a pénzügy.</li>
<li><strong>Mennyi a teljes költség?</strong> Járműkövetésnél a hardver és a telepítés is beleszámít, nyilvántartásnál jellemzően csak az előfizetés. Az árazási modellekről a <a href="/blog/flottakezelo-szoftver-ara/">flottakezelő szoftver áráról</a> szóló cikkben írtunk.</li>
</ol>
<p>Ha a helyadatok gyűjtése mellett dönt, gondoljon arra, hogy a kollégák mozgásának követése személyes adatok kezelésével jár. A bevezetés előtt kérje adatvédelmi szakember véleményét, és tájékoztassa a munkatársakat.</p>
<h2>A Yardly melyik kategória?</h2>
<p>A Yardly nyilvántartó flottakezelő szoftver, GPS nélkül. Nem követi a járművek helyzetét, és nem vezet útnyilvántartást vagy menetlevelet. Ha erre van szüksége, ahhoz GPS-es vagy útnyilvántartó rendszer kell.</p>
<p>Amit a Yardly ad: a járművek és az eszközök (targonca, szerszám, IT-eszköz) egy rendszerben, dokumentumok lejárati riasztással, km vagy idő szerinti karbantartási ütemterv, tankolási napló, a DKV-kártyás tranzakciók 6 óránkénti automatikus behúzása, kárügyek, bírságok és járművenkénti Ft/km. A km-óraállás a tankolásokkal és a kézi rögzítésekkel frissül. Részletek a <a href="/megoldasaink/jarmunyilvantartas/">járműnyilvántartás</a> oldalán. Ha a választás szempontjait gyűjti, nézze meg a <a href="/blog/flottakezelo-szoftver-valasztas/">kiválasztási ellenőrzőlistánkat</a> is.</p>`,
  },
  {
    slug: "vak-leltar",
    date: "2026-11-03",
    minutes: 4,
    category: "equipment",
    solution: "leltar",
    title: "Vak leltár, fordulónapi és folyamatos leltár: mi a különbség?",
    excerpt: "Mi a vak leltár, miért pontosabb a listás pipálásnál, mik a hátrányai, és mi a különbség a fordulónapi és a folyamatos leltár között? Gyakorlati útmutató.",
    body: `
<p>A vak leltár olyan leltározási módszer, amelyben a leltározó nem látja előre, mit és mennyit kellene találnia. Csak azt rögzíti, ami ténylegesen előtte van, a nyilvántartással való összevetés pedig utólag történik. Ebben a cikkben megnézzük, miért pontosabb ez a módszer, mik a hátrányai, mikor érdemes alkalmazni, és mi a különbség a fordulónapi és a folyamatos leltár között.</p>
<h2>Mi a vak leltár?</h2>
<p>A hagyományos, listás leltárnál a leltározó kézben tartja a nyilvántartás kivonatát, és kipipálja, amit talál. Készletnél a lista az elvárt mennyiséget is mutatja: „B polc, 40 doboz”. A vak leltárnál ez a lista nincs a leltározónál. Készletnél üres mennyiségi oszlopot kap, eszközöknél pedig csak a helyszínt, amelyet végig kell járnia. Amit talál, azt felírja vagy beolvassa; hogy ez egyezik-e a nyilvántartással, az csak a felvétel után derül ki.</p>
<h2>Miért pontosabb a vak leltár?</h2>
<ul>
<li><strong>Nincs megerősítési torzítás.</strong> Aki a listát látja, hajlamos azt is kipipálni, amiről „tudja”, hogy ott van. Vakon csak az kerül be, amit tényleg látott.</li>
<li><strong>A számlálás nem igazodik az elvárt számhoz.</strong> Ha a lista 40-et mond, a 38 könnyen 40 lesz. Üres oszlopnál a leltározó a valós számot írja be.</li>
<li><strong>A hiány és a többlet is látszik.</strong> A listán nem szereplő, de a helyszínen lévő eszköz is bekerül, és kiderül, ha rossz helyen van nyilvántartva.</li>
<li><strong>Független ellenőrzés.</strong> Ha az eszközök kezelője is leltároz, a vak módszer csökkenti a kockázatát, hogy a saját területén egy hiány rejtve maradjon.</li>
</ul>
<h2>A vak leltár hátrányai</h2>
<ul>
<li><strong>Jó azonosítás kell hozzá.</strong> Ha az eszközökön nincs címke, a leltározónak minden tételt ki kell bogarásznia, és a munka lelassul.</li>
<li><strong>A keresés a végére marad.</strong> A leltározó felvétel közben nem tudja, mi hiányzik, ezért a hiányzó tételekre általában egy második kör kell.</li>
<li><strong>A többletet fel kell dolgozni.</strong> Minden ismeretlen eszközről utólag kell eldönteni, mi az, és kié.</li>
<li><strong>Bizalmatlanságnak tűnhet.</strong> Mondja el a csapatnak, hogy a módszer a lista hibáit keresi, nem az embereket ellenőrzi.</li>
</ul>
<h2>Mikor érdemes vak leltárt tartani?</h2>
<ul>
<li>Az <a href="/blog/ev-vegi-eszkozleltar/">év végi leltárnál</a>, amikor a pontosság a legfontosabb.</li>
<li>Amikor az eszközök felelőse változik, például kilép a raktárvezető.</li>
<li>Költözés, átszervezés vagy lopás gyanúja után.</li>
<li>Kis méretű, könnyen mozgó és értékes eszközöknél: laptopoknál, mérőműszereknél, akkus kéziszerszámoknál.</li>
</ul>
<p>Gyors, napi ellenőrzésnél, például egy szerszámláda tartalmánál, a listás pipálás is elég lehet. A lényeg, hogy a cég tudatosan döntsön, és a döntését a <a href="/blog/leltarozasi-szabalyzat/">leltározási szabályzatban</a> rögzítse.</p>
<h2>Fordulónapi vs. folyamatos leltár</h2>
<p>A vak vagy listás módszer azt mondja meg, hogyan számolnak. A fordulónapi vagy folyamatos leltár azt, hogy mikor.</p>
<table>
<thead><tr><th>Szempont</th><th>Fordulónapi leltár</th><th>Folyamatos leltár</th></tr></thead>
<tbody>
<tr><td>Időzítés</td><td>Egy adott napra vonatkozik, jellemzően a mérleg fordulónapjára</td><td>Az év során, helyszínenként vagy kategóriánként sorban</td></tr>
<tr><td>Munkateher</td><td>Rövid idő alatt sok munka, gyakran év végén</td><td>Kisebb, rendszeres adagok</td></tr>
<tr><td>Előfeltétel</td><td>Pontos lista a fordulónapra</td><td>Folyamatosan vezetett nyilvántartás, amely a mozgásokat is rögzíti</td></tr>
<tr><td>Erőssége</td><td>Egy időpontra teljes kép</td><td>A hibák hamarabb kiderülnek, nem halmozódnak egy évig</td></tr>
<tr><td>Gyengesége</td><td>Kapkodás, és a hibák egy évig rejtve maradnak</td><td>Fegyelem kell hozzá, különben elmarad egy-egy kör</td></tr>
</tbody>
</table>
<p>A <a href="https://njt.jog.gov.hu/jogszabaly/2000-100-00-00">számviteli törvény</a> 69. §-a a cikk írásakor (2026. október) hatályos szöveg szerint így kezeli a kérdést: ha a cég folyamatos mennyiségi nyilvántartást vezet, a mennyiségi felvételt a leltározási szabályzatban meghatározott időszakonként, de legalább háromévente kell elvégezni (69. § (3)). Ha nem vezet ilyet, vagy nem folyamatosan vezeti, a fordulónapra vonatkozó leltározást mennyiségi felvétellel kell elvégezni (69. § (4)). Hogy a számviteli leltárhoz ez Önnél mit jelent, azt a könyvelőjével egyeztesse.</p>
<h2>Egy gyakorlati felosztás</h2>
<p>Egy kitalált, négy telephelyes cég például így oszthatja el a munkát:</p>
<ul>
<li>negyedévente egy telephely vak leltára, így évente mindegyik sorra kerül;</li>
<li>az IT-eszközök félévente, mert gyakran cserélnek gazdát;</li>
<li>a járműtartozékok (téli gumi, tolatókamera, utánfutó-horog) az évszakos gumicsere idején;</li>
<li>év végén az eltérések és a nagy értékű eszközök célzott ellenőrzése.</li>
</ul>
<p>Ez csak akkor működik, ha a nyilvántartást közben is folyamatosan vezetik: minden kiadás, áthelyezés és selejtezés bekerül. Ha nem, a hibák ugyanúgy összegyűlnek, mint egy éves leltárnál.</p>
<h2>Hogyan működik a vak leltár a Yardlyban?</h2>
<p>A Yardly <a href="/megoldasaink/leltar/">telefonos leltára</a> eleve vak: a telefon nem mutatja előre a listát.</p>
<ol>
<li>Kiválasztja az eszközöket és a járműtartozékokat, kategória, típus, állapot, telephely, raktár vagy helyiség szerint szűrve, és elküldi a leltárt egy kollégának.</li>
<li>A kolléga e-mailben 14 napig érvényes linket kap, amely a telefonon azonnal megnyitja a kamerát. Bejelentkezni és alkalmazást telepíteni nem kell, iPhone-on és Androidon is működik.</li>
<li>Minden beolvasott QR-kód vagy vonalkód kipipálja a tételt. A címke nélküli tételekhez kézi beírás van, sötét helyen a vaku közvetlenül bekapcsolható.</li>
<li>A végén látszik, mi került elő és mi nem. A hiányzókhoz megjegyzés írható, majd a leltár rögzíthető. Ha közben megszakad, a haladás a telefonon megmarad.</li>
<li>Ön a Leltár előzményekben látja az eredményt, és PDF-ben letöltheti.</li>
</ol>
<p>A folyamatos leltárhoz a folyamatok között időzítve is indíthat leltárt, például negyedévente. A címkézés alapjairól a <a href="/blog/qr-kodos-leltar/">QR-kódos leltárról szóló cikkünkben</a> olvashat. A funkció az Üzleti csomagtól érhető el.</p>`,
  },
  {
    slug: "flottakezelo-szoftver-ara",
    date: "2026-11-05",
    minutes: 4,
    category: "costs",
    solution: "jarmunyilvantartas",
    title: "Flottakezelő szoftver ára: árazási modellek és megtérülés",
    excerpt: "Járművenkénti díj, sávos csomag vagy hardver plusz előfizetés? Mitől függ egy flottakezelő szoftver ára, mik a rejtett költségek, és mikor térül meg?",
    body: `
<p>A „flottakezelő szoftver ára” kérdésre ritkán van egyetlen szám. A flottakezelő rendszer árak több, egymástól eltérő modellre épülnek, és ugyanaz a havidíj az egyik cégnek olcsó, a másiknak drága. Ez a cikk sorra veszi a jellemző árazási modelleket és a rejtett költségeket, és ad egy egyszerű megtérülési számítást is.</p>
<h2>A jellemző árazási modellek</h2>
<h3>Járművenkénti havi díj</h3>
<p>A legegyszerűbb modell: minden aktív jármű után fix havi díjat fizet. Jól tervezhető, és kis flottánál olcsó indulást jelent. A díj viszont a járműszámmal egyenesen arányosan nő, ezért nagyobb flottánál érdemes rákérdezni a mennyiségi kedvezményre.</p>
<h3>Sávos csomag</h3>
<p>A csomag egy adott járműszámig fix díjú. Felette járművenként számolnak, vagy nagyobb csomagra kell váltani. A csomagok általában funkciókban is eltérnek. Itt két kérdés számít: hol van a flottája a sávhatárokhoz képest, és melyik csomagban van meg minden, amire szüksége van.</p>
<h3>GPS-es rendszerek: hardver, telepítés, előfizetés</h3>
<p>A járműkövetőknél az ár több részből áll: a fedélzeti egység ára vagy bérleti díja, a beszerelés, és a havi előfizetés, amely gyakran az adatforgalmat is tartalmazza. Autócserénél a ki- és beszerelés újra felmerül. A két rendszertípus különbségéről a <a href="/blog/flottakezeles-vagy-jarmukovetes/">flottakezelés vs. járműkövetés</a> cikkünk szól.</p>
<h3>Egyedi ajánlat</h3>
<p>Nagy flottáknál és egyedi igényeknél gyakori, hogy nincs nyilvános ár. Ilyenkor kérjen tételes ajánlatot, külön sorban a licencdíjjal, a bevezetéssel és a támogatással.</p>
<h2>Mitől függ a flottakezelő szoftver ára?</h2>
<ul>
<li><strong>Járműszám:</strong> általában ez a fő tényező. Számoljon a következő egy-két év bővülésével is.</li>
<li><strong>Funkciók:</strong> a telefonos állapotfelmérés, a leltár, a jóváhagyási folyamatok és az analitika gyakran csak a nagyobb csomagokban érhető el.</li>
<li><strong>Felhasználók és telephelyek:</strong> egyes rendszerek ezek számát is korlátozzák vagy külön számlázzák.</li>
<li><strong>Integrációk:</strong> az üzemanyagkártya-kapcsolat lehet alapfunkció vagy fizetős kiegészítő.</li>
<li><strong>Eszközök:</strong> ha targoncát, szerszámot, IT-eszközt is nyilván tartana, nézze meg, beleférnek-e a keretbe.</li>
<li><strong>Támogatás:</strong> csak e-mailes támogatás vagy kijelölt kapcsolattartó, és milyen válaszidővel.</li>
<li><strong>Havi vagy éves előfizetés:</strong> éves előfizetésnél sok szolgáltató kedvezményt ad.</li>
</ul>
<h2>Rejtett költségek, amelyekre kérdezzen rá</h2>
<ul>
<li><strong>Bevezetési díj:</strong> van-e egyszeri beállítási vagy aktiválási díj?</li>
<li><strong>Adatmigráció:</strong> ki tölti fel a meglévő adatokat? Van-e Excel-import, vagy ez külön megrendelendő szolgáltatás?</li>
<li><strong>Oktatás:</strong> benne van-e az árban, vagy óradíjas?</li>
<li><strong>Belső munkaidő:</strong> gyakran ez a legnagyobb rejtett tétel. Az adatok összegyűjtése, a dokumentumok beszkennelése és a folyamatok beállítása a saját kollégák idejét viszi.</li>
<li><strong>A keret túllépése:</strong> mi történik, ha a flotta túlnő a csomagon? Automatikus felár, kötelező csomagváltás vagy egyedi ajánlat?</li>
<li><strong>Hűségidő és kilépés:</strong> van-e hűségidő, és kilépéskor kiviheti-e az összes adatát?</li>
<li><strong>Hardver (GPS-nél):</strong> csere, javítás, ki- és beszerelés.</li>
</ul>
<h2>Megtérülés: egyszerű példaszámítás</h2>
<p>A megtérülés legkézzelfoghatóbb része az adminisztrációs idő. Mérje fel egy hónapra, mennyi időt visz el a táblázatok frissítése, a lejáratok keresése, a tankolások bevitele és a költségek összeszedése.</p>
<p>Egy kitalált, 30 autós cég adatai:</p>
<ul>
<li>havi flottaadminisztráció ma: 20 óra,</li>
<li>ebből szoftverrel megspórolható: 12 óra,</li>
<li>a kolléga teljes óraköltsége (bér és járulékok): 6 000 Ft.</li>
</ul>
<p class="formula">havi megtakarítás = megspórolt órák × óraköltség = 12 óra × 6 000 Ft = 72 000 Ft</p>
<p>Ha a szoftver havidíja ennél kevesebb, az adminisztráció már önmagában kifizeti. A példában nem számoltunk az elkerült hibák árával: egy lejárt műszaki miatt kieső munkanappal, egy elmaradt szerviz utáni drágább javítással, vagy egy olyan számlával, amelyet egy jóváhagyási lépés kiszűrt volna. Ezek nehezebben mérhetők, de gyakran nagyobbak. A saját számításához ezt a képletet használja:</p>
<p class="formula">havi haszon = (megspórolt órák × óraköltség) + elkerült hibák becsült költsége − a szoftver havidíja</p>
<h2>A Yardly árai</h2>
<p>A Yardly sávos csomagokkal dolgozik, nyilvános árral. ${NO_VAT} Éves fizetésnél ${ANNUAL_FREE_MONTHS} hónap ingyenes, ezt mutatja a második sor.</p>
<table>
<thead>
<tr><th></th>${plans.map((p) => `<th>${p.name}</th>`).join("")}</tr>
</thead>
<tbody>
<tr><td>Havidíj</td>${plans.map((p) => `<td>${huf(p.monthly)}</td>`).join("")}</tr>
<tr><td>Éves fizetésnél havonta</td>${plans.map((p) => `<td>${huf(p.annualMonthly)}</td>`).join("")}</tr>
<tr><td>Aktív jármű a díjban</td>${plans.map((p) => `<td>${p.included}</td>`).join("")}</tr>
<tr><td>További jármű</td>${plans.map((p) => `<td>${huf(p.extra)}/hó, legfeljebb ${p.ceiling}-ig</td>`).join("")}</tr>
<tr><td>Eszköz</td>${plans.map((p) => `<td>${p.equipment === null ? "korlátlan" : num(p.equipment)}</td>`).join("")}</tr>
<tr><td>Felhasználó</td>${plans.map((p) => `<td>${p.users === null ? "korlátlan" : num(p.users)}</td>`).join("")}</tr>
<tr><td>Telephely</td>${plans.map((p) => `<td>${p.sites === null ? "korlátlan" : num(p.sites)}</td>`).join("")}</tr>
<tr><td>DKV-integráció</td>${plans.map((p) => `<td>${p.key === DKV_ADDON.plan ? `kiegészítő: +${huf(DKV_ADDON.monthly)}/hó` : "benne van"}</td>`).join("")}</tr>
</tbody>
</table>
<p>Az Excel-import és -export minden csomagban benne van. Az Üzleti csomagtól elérhető a telefonos állapotfelmérés és a QR-leltár, a Prémiumban az analitika és a csereajánlások. Eszközből az Alap és az Üzleti csomag keretén felül ${priceFacts.equipmentAddOn} bővítés vehető. A kivont járművek nem számítanak bele a keretbe, és hűségidő nincs.</p>
<p>A fenti ${EXAMPLE_CARS} autós példában ${exampleText()} A csomagok részleteit az <a href="/arak/">árak oldalán</a> találja; a ${TRIAL_DAYS} napos próbaidő alatt ${the(TRIAL_PLAN)} csomag minden funkciója kipróbálható. Ha még a szempontokat gyűjti, a <a href="/blog/flottakezelo-szoftver-valasztas/">kiválasztási ellenőrzőlistánk</a> segít.</p>`,
  },
  {
    slug: "qr-cimke-eszkozokre",
    date: "2026-11-10",
    minutes: 4,
    category: "equipment",
    solution: "leltar",
    title: "QR-kód eszközökre: azonosító-séma, címkeanyag, elhelyezés",
    excerpt: "Azonosító-séma, címkeanyag, elhelyezés eszköztípusonként és a sérült címkék pótlása: így tegyen QR-kódot az eszközökre, hogy évekig olvasható maradjon.",
    body: `
<p>A QR-kód eszközökre ragasztva akkor ér valamit, ha a leltározó egy pillantással megtalálja, a telefon elsőre beolvassa, és évek múlva is olvasható. A <a href="/blog/qr-kodos-leltar/">QR-kódos leltárról szóló cikkünk</a> a leltár menetét mutatja be; ez a cikk magáról a címkéről szól: milyen azonosító kerüljön rá, milyen anyagból készüljön, hova tegye az egyes eszközökön, és mi legyen, ha megsérül.</p>
<h2>Eszköznyilvántartás QR-kóddal: mi kerüljön a kódba?</h2>
<p>A kódba elég egyetlen adat: az eszköz egyedi azonosítója, például a leltári száma. Ne írja bele a megnevezést, a helyet vagy a felelőst. Ezek változnak, a címke viszont marad. Minél rövidebb a kód tartalma, annál egyszerűbb a QR-kód mintázata, és annál kisebb méretben is jól olvasható. A kód alá vagy mellé nyomtassa ki az azonosítót olvashatóan is, hogy kézzel is beírható legyen, ha a kód megsérül.</p>
<p>A legfontosabb szabály: a kódban pontosan ugyanaz az érték álljon, mint a nyilvántartásban. Egy elírt vagy eltérő formátumú azonosító (például szóközzel vagy más kötőjellel) a beolvasásnál „ismeretlen” tételként jelenik meg.</p>
<h2>Azonosító-séma: öt szabály</h2>
<ol>
<li><strong>Egyedi és végleges.</strong> Egy azonosító egy eszközé, és selejtezés után sem kapja meg más.</li>
<li><strong>Nincs benne változó adat.</strong> A hely és a felelős ne legyen az azonosító része, különben költözéskor minden címkét cserélni kell.</li>
<li><strong>Rövid kategória-előtag.</strong> Két-három betű elég, hogy a címkéről is látszódjon, miről van szó.</li>
<li><strong>Fix hosszú sorszám.</strong> Vezető nullákkal (00234), így a lista rendezhető, és nem lesz egyszerre „IT-234” és „IT-0234”.</li>
<li><strong>Nincs összetéveszthető karakter.</strong> Kerülje az ékezetet és a szóközt, és ha a sorszámban betű is van, az O/0 és az I/1 párost.</li>
</ol>
<p>Egy egyszerű séma így nézhet ki:</p>
<table>
<thead><tr><th>Kategória</th><th>Előtag</th><th>Példa</th></tr></thead>
<tbody>
<tr><td>Targonca, emelőgép</td><td>TRG</td><td>TRG-00003</td></tr>
<tr><td>Gépek</td><td>GEP</td><td>GEP-00012</td></tr>
<tr><td>Kéziszerszám</td><td>SZR</td><td>SZR-01087</td></tr>
<tr><td>IT-eszköz</td><td>IT</td><td>IT-00234</td></tr>
<tr><td>Bútor, berendezés</td><td>BUT</td><td>BUT-00410</td></tr>
</tbody>
</table>
<p>Ha több cég eszközeit kezeli egy rendszerben, egy céges előtag is kerülhet elé, például A-IT-00234.</p>
<h2>Meglévő vonalkódok: nem kell mindent újracímkézni</h2>
<p>Ha a könyvelés már kiadott leltári számokat, és azok vonalkóddal fel vannak ragasztva, használja tovább őket. A gyári címkéknél viszont figyeljen egy különbségre. A dobozon vagy a terméken lévő kereskedelmi vonalkód a termék típusát azonosítja, így tíz egyforma fúrón ugyanaz. Egyedi azonosításra a gyári szám alkalmas, mert az eszközönként más.</p>
<h2>Címkeanyagok: melyik mire jó?</h2>
<table>
<thead><tr><th>Anyag</th><th>Jellemzően</th><th>Mire jó</th></tr></thead>
<tbody>
<tr><td>Papír</td><td>Olcsó, de a nedvességet és a kopást rosszul bírja</td><td>Száraz irodai környezet, átmeneti címke</td></tr>
<tr><td>Műanyag fólia</td><td>Vízálló, rugalmas, ívelt felületre is ráfekszik</td><td>Laptopok, monitorok, bútorok, beltéri gépek</td></tr>
<tr><td>Poliészter</td><td>Tartós, jól bírja a kopást és sok vegyszert, védőréteggel még inkább</td><td>Műhelygépek, kéziszerszámok, raktári eszközök</td></tr>
<tr><td>Fém (eloxált alumínium)</td><td>A legtartósabb, a hőt, a vegyszereket és a kültéri használatot is jól bírja, de drágább</td><td>Targoncák, kültéri és nagy igénybevételű gépek</td></tr>
</tbody>
</table>
<p>Az anyag mellett a ragasztó is számít: olajos, poros vagy érdes felületen a legjobb címke is leválik. Ragasztás előtt tisztítsa és zsírtalanítsa a felületet. Kérje a címke szállítóját, hogy a tervezett felülethez ajánljon anyagot és ragasztót, és először néhány darabbal próbálja ki, mielőtt több százat rendel.</p>
<h2>QR-kód eszközökre: hova kerüljön a címke?</h2>
<p>Az alapszabály: egy eszköztípuson mindig ugyanott legyen, látható és elérhető helyen, hogy a leltározónak ne kelljen megemelnie vagy szétszednie az eszközt.</p>
<ul>
<li><strong>Laptop:</strong> az alsó burkolaton, a szellőzőnyílásoktól és a csavaroktól távol.</li>
<li><strong>Monitor, nyomtató, asztali gép:</strong> a hátoldalon vagy az oldallapon, ahonnan az íróasztal mellől is beolvasható.</li>
<li><strong>Mobiltelefon, tablet:</strong> ne a tokra, mert az cserélődik. Ha a készülékre nem tud címkét tenni, azonosítsa a gyári számával.</li>
<li><strong>Kéziszerszám:</strong> a ház sima részén, a gyári adattábla közelében, ne a markolaton, ahol a kéz koptatja.</li>
<li><strong>Gép, targonca:</strong> az adattábla mellett, a mosásnak, a hőnek és a kopásnak kevésbé kitett helyen, minden gépen ugyanott.</li>
<li><strong>Bútor:</strong> egységes helyen, például az asztallap alatt jobb oldalt: nem zavar, de gyorsan megtalálható.</li>
<li><strong>Járműtartozék:</strong> a szezonális gumigarnitúrát például a tárolásnál egy tartós függőcímkével azonosítsa.</li>
</ul>
<h2>A címkézés ütemezése</h2>
<p>Több száz eszközt nem kell egy nap alatt felcímkézni. Egy bevált sorrend:</p>
<ol>
<li>Rögzítse a sémát, és adjon azonosítót minden eszköznek a nyilvántartásban.</li>
<li>Nyomtassa ki a címkéket helyszínenként csoportosítva.</li>
<li>Haladjon helyiségenként, és a címkézés legyen egyben az első leltár: amit felcímkéz, annál azonnal rögzítse, hol van és kinél.</li>
<li>Kezdje a legértékesebb és a leggyakrabban mozgó eszközökkel.</li>
<li>Az új eszköz a beérkezéskor kapjon címkét, még mielőtt kiadják valakinek.</li>
</ol>
<h2>Sérült vagy hiányzó címke pótlása</h2>
<ul>
<li>A pótcímke ugyanazt az azonosítót kapja, soha nem újat, különben az eszköz előzményei kettéválnak.</li>
<li>Leltár közben a sérült címkéjű eszközt az olvasható azonosító vagy a gyári szám alapján vegye fel, és írjon hozzá megjegyzést.</li>
<li>A leltár végén gyűjtse össze a pótlandó címkéket, és egy körben nyomtassa újra őket.</li>
<li>Ha egy helyen rendszeresen sérül a címke, ott váltson tartósabb anyagra vagy más elhelyezésre.</li>
</ul>
<h2>Hogyan kapcsolódik ez a Yardlyhoz?</h2>
<p>A Yardly <a href="/megoldasaink/eszkoznyilvantartas/">eszköznyilvántartásában</a> minden eszközhöz rögzíthető gyári szám, leltári szám, belső azonosító és vonalkód, a meglévő lista pedig Excel-sablonnal tölthető fel. A <a href="/megoldasaink/leltar/">telefonos leltár</a> a telefon kamerájával olvassa a QR-kódot és a vonalkódot, és a leltári számot, a vonalkódot, a gyári számot és a belső azonosítót is felismeri, így a meglévő címkéket is használhatja. A címke nélküli tételekhez kézi beírás van, sötét helyen a vaku közvetlenül bekapcsolható. A címkéket bármilyen címkenyomtatóval vagy nyomdával elkészítheti; a lényeg, hogy a kódban ugyanaz az azonosító álljon, mint a Yardlyban. Hogy miért érdemes a leltárt vakon végezni, arról a <a href="/blog/vak-leltar/">vak leltárról</a> szóló cikkünkben írtunk.</p>`,
  },
  {
    slug: "karugyintezes-ceges-flotta",
    date: "2026-11-12",
    minutes: 4,
    category: "fleet",
    solution: "karugyek-biztositas-tartozekok",
    title: "Kárügyintézés flottánál: kárbejelentés céges autóval lépésenként",
    excerpt: "Mit tegyen a sofőr a helyszínen, mikor kell bejelenteni a kárt, és hogyan követi a flottakezelő a költséget és az önrészt? Lépésről lépésre, céges autókra.",
    body: `
<p>A kárügyintézés flottánál nem kivételes esemény, hanem napi rutin. Egy nagy hazai flottakezelő és lízingcég adatai szerint (economx.hu, 2026. február) a több ezer autós flottájában 2025-ben több mint 4 700 káresemény történt, és az autók közel fele legalább egyszer kár miatt került szervizbe. Az alábbiakban végigvesszük, mit tegyen a sofőr a helyszínen, milyen határidőkkel kell számolni a kárbejelentésnél céges autóval, és hogyan követheti a flottakezelő a költséget és az önrészt.</p>
<h2>Mi okozza a legtöbb kárt a flottákban?</h2>
<p>Ugyanezen adatok szerint a károk több mint 60%-a nem közúti balesetből, hanem a mindennapi használatból ered. A leggyakoribb kártípusok:</p>
<ul>
<li>kőfelverődés: 37,3%,</li>
<li>parkolási kár: 23,1%,</li>
<li>tolatás: 3,7%,</li>
<li>sávot váltó másik jármű: 3,4%,</li>
<li>ráfutásos baleset: 3,3%,</li>
<li>vadelütés: 3,3%.</li>
</ul>
<p>A tanulság: a sok kis kár együtt többe kerülhet, mint egy ritka nagy baleset, és mindegyik ugyanannyi adminisztrációval jár. Ezért kell egy egyszerű folyamat, amelyet minden sofőr ismer.</p>
<h2>Kárbejelentés céges autóval: teendők a helyszínen</h2>
<ol>
<li><strong>Megállás és segítségnyújtás.</strong> A balesetben érintett jármű vezetőjének azonnal meg kell állnia, segítséget kell nyújtania, és mindent meg kell tennie a további balesetek elkerüléséért (KRESZ 58. §).</li>
<li><strong>Személyi sérülésnél rendőrség.</strong> Ha a baleset halált vagy sérülést okozott, a rendőrséget haladéktalanul értesíteni kell, a nyomokat lehetőség szerint meg kell őrizni, és a helyszínt csak a rendőr engedélyével szabad elhagyni.</li>
<li><strong>Adatcsere.</strong> Rendőri intézkedés nélkül a felek kölcsönösen igazolják a személyazonosságukat, és megnevezik a biztosítójukat (KRESZ 58. §). A helyszínen át kell adni a személy, a jármű és a biztosítási szerződés azonosításához szükséges adatokat és a baleset lényeges körülményeit (Gfbt. 29. §).</li>
<li><strong>Baleseti bejelentő.</strong> Töltsék ki közösen az európai baleseti bejelentőt (a „kék-sárga” nyomtatványt), vagy használják a MABISZ által üzemeltetett e-kárbejelentőt. Minden céges autóban legyen üres nyomtatvány.</li>
<li><strong>Fotók.</strong> Áttekintő kép a helyszínről, közeli képek a sérülésekről, mindkét autó rendszáma, a jelzőtáblák és az útburkolati jelek, az útviszonyok. Az eredeti fájlokat küldje be, ne képernyőképet.</li>
<li><strong>Ha a másik autó vezetője nincs ott,</strong> például parkolási kárnál: a károkozónak a helyszínen kell hagynia az adatait és a biztosítója nevét, és be kell jelentenie a kárt a biztosítójának (KRESZ 58. §).</li>
<li><strong>Azonnali jelzés a cégnek.</strong> A sofőr még aznap jelezze a kárt a flottakezelőnek, a fotókkal együtt.</li>
</ol>
<h2>Bejelentési határidők</h2>
<p>A kötelező biztosításnál a <a href="https://njt.jog.gov.hu/jogszabaly/2009-62-00-00">Gfbt.</a> két határidőt ír elő:</p>
<ul>
<li><strong>Ha az Ön autója okozta a kárt:</strong> a biztosított köteles a káreseményt 5 munkanapon belül írásban bejelenteni a saját biztosítójának, a kárrendezéshez szükséges adatokkal, a lényeges körülmények leírásával és az eljáró hatóság megjelölésével (30. §).</li>
<li><strong>Ha az Ön autóját érte a kár:</strong> a károsultnak 30 napon belül kell bejelentenie a kárt a biztosítónak. Ha elmulasztja, a késedelem idejére nem érvényesítheti a késedelmes teljesítés jogkövetkezményeit, kivéve, ha bizonyítja, hogy önhibáján kívül késett (29. §).</li>
<li><strong>Casco:</strong> a bejelentési határidőt a casco-szerződés feltételei határozzák meg. Nézze meg, és írja bele a belső kárszabályzatba.</li>
<li><strong>Lízingelt autó:</strong> a lízingszerződés további bejelentési kötelezettséget írhat elő a lízingcég felé.</li>
</ul>
<p>Kőfelverődésnél a károkozó ritkán azonosítható, ezért ilyenkor jellemzően a saját casco- vagy üvegbiztosítás feltételei a mérvadók. Az okozott károk a kötelező biztosítás bónusz-málusz besorolását is érintik; erről a <a href="/blog/kgfb-evfordulo-flottabiztositas/">KGFB-évfordulóról szóló cikkünkben</a> írunk.</p>
<h2>Ki felel a kárügyért a cégen belül?</h2>
<p>A leggyakoribb hiba nem a rossz kárbejelentés, hanem az, hogy senki nem viszi végig az ügyet. Jelöljön ki egy felelőst, és írja le, mi a sofőr dolga, és mi a többieké:</p>
<ul>
<li><strong>Sofőr:</strong> helyszíni teendők, fotók, bejelentő, azonnali jelzés.</li>
<li><strong>Kárügyintéző vagy flottakezelő:</strong> bejelentés a biztosítónak határidőben, a kárszám rögzítése, kapcsolattartás, szemle, a javítás megszervezése.</li>
<li><strong>Jóváhagyó:</strong> a javítási árajánlat jóváhagyása egy összeghatár felett.</li>
<li><strong>Pénzügy:</strong> a számlák, az önrész és a biztosítói térítés egyeztetése.</li>
</ul>
<p>A javítások jóváhagyásáról <a href="/blog/javitasok-jovahagyasa/">ebben a cikkben</a> írtunk részletesen.</p>
<h2>Költség és önrész nyomon követése</h2>
<p>Egy kárügy akkor zárható le, ha minden szám a helyén van. Ehhez kárügyenként érdemes egy rövid kárlapot vezetni:</p>
<div class="template">
<p><strong>Belső kárlap – minta</strong></p>
<ul>
<li>Belső azonosító és biztosítói kárszám</li>
<li>Rendszám, sofőr, dátum és időpont, helyszín</li>
<li>Kártípus: baleset, parkolási kár, kőfelverődés, vadelütés, lopás, rongálás, egyéb</li>
<li>Felelősség: mi okoztuk / minket ért / ismeretlen a károkozó</li>
<li>Volt-e rendőri intézkedés, és ha igen, az ügyszám</li>
<li>A bejelentés dátuma (kötelező, casco), a biztosító döntése</li>
<li>Becsült kár, javítási árajánlat, a jóváhagyás dátuma</li>
<li>Szerviz, a javítás kezdete és vége, kiesett munkanapok</li>
<li>Tényleges javítási költség, önrész, biztosítói térítés</li>
<li>Egyéb, nem térített költség (például csereautó)</li>
<li>A lezárás dátuma, a fotók és a dokumentumok helye</li>
</ul>
</div>
<p>Egy kitalált példa a cég saját költségére: a javítás 380 000 Ft, a casco-szerződés szerinti önrész 100 000 Ft, a háromnapos csereautó 45 000 Ft, amelyet a biztosítás nem térít meg.</p>
<p class="formula">a cég saját költsége = önrész + nem térített tételek = 100 000 Ft + 45 000 Ft = 145 000 Ft</p>
<p>Ha ezt minden kárnál rögzíti, egy év után látszik, melyik autó, melyik telephely vagy melyik kártípus viszi el a legtöbbet, és hol érdemes megelőzésre költeni.</p>
<h2>Mikor nem elég már az Excel?</h2>
<p>Ha évente csak néhány kár van, egy táblázat elég. Ha viszont havonta több, a fotók a sofőrök telefonján maradnak, a kárszámok e-mailekben, a számlák a pénzügyön, és egy lezáratlan kárügyről senki nem tud. Ilyenkor az számít, hogy a kár, a fotó és a költség egy helyen legyen, és a nyitott ügyek maguktól előkerüljenek.</p>
<h2>Hogyan segít a Yardly?</h2>
<p>A Yardlyban a <a href="/megoldasaink/karugyek-biztositas-tartozekok/">kárügy</a> a jármű adatlapjára kerül típussal, dátummal, helyszínnel és az érintett kollégával, a fotókat pedig telefonról is fel lehet tölteni. A biztosítói ügy állapotát (nincs bejelentve, bejelentve, folyamatban, jóváhagyva, elutasítva, lezárva), a kárszámot, a becsült kárt és a javítási költséget is rögzítheti, a nyitott kárügyek pedig az irányítópulton látszanak. A <a href="/megoldasaink/folyamatok/">folyamatokkal</a> a kárügy rögzítése magától elindíthatja a javítási folyamatot, összeghatáros jóváhagyással, és egy lépés az önrész összegét is bekérheti.</p>`,
  },
  {
    slug: "eszkoznyilvantartas-vagy-targyi-eszkoz-konyveles",
    date: "2026-11-17",
    minutes: 4,
    category: "equipment",
    solution: "eszkoznyilvantartas",
    title: "Eszköznyilvántartás vs. tárgyi eszköz könyvelés: mi a különbség?",
    excerpt: "A könyvelés az eszköz értékét tartja nyilván, az eszköznyilvántartás azt, hol van, kinél van és mikor esedékes a szerviz. Így kapcsolhatja össze a kettőt.",
    body: `
<p>Ha egy kkv-ban szóba kerül az eszköznyilvántartás, gyakran ez a válasz: „Megvan, a könyvelő vezeti.” Ez csak részben igaz. A könyvelésben valóban szerepel minden tárgyi eszköz, de egészen más kérdésekre ad választ, mint amire a raktárvezetőnek, az IT-felelősnek vagy a műszakvezetőnek szüksége van. Az eszköznyilvántartás vs. tárgyi eszköz könyvelés ezért nem verseny. Két külön nyilvántartásról van szó, amelyek jól kiegészítik egymást, ha van köztük közös kapocs.</p>
<h2>Két nyilvántartás, két kérdés</h2>
<p>A legrövidebben így foglalható össze: a könyvelőprogram az eszköz értékét tartja nyilván, az operatív eszköznyilvántartás azt, hogy hol van, kinél van és mikor esedékes a szerviz.</p>
<ul>
<li><strong>Tárgyi eszköz könyvelés (analitikus nyilvántartás):</strong> mennyibe került az eszköz, mennyi az értékcsökkenése, mennyi a nyilvántartási értéke, és mikor vezették ki a könyvekből.</li>
<li><strong>Operatív eszköznyilvántartás:</strong> hol van most az eszköz, ki használja, ki felel érte, milyen állapotban van, mikor volt szervizben, és mikor esedékes a következő karbantartás vagy vizsgálat.</li>
</ul>
<p>Az első a pénzügy és a beszámoló eszköze, a második a napi működésé. Ugyanarról a targoncáról vagy laptopról szólnak, de mást rögzítenek.</p>
<h2>Mit tart nyilván a tárgyi eszköz könyvelés?</h2>
<p>A könyvelés célja, hogy a beszámoló valós képet adjon a cég vagyonáról. A tárgyi eszköz analitika ezért jellemzően ezeket tartalmazza:</p>
<ul>
<li>a bekerülési értéket és a beszerzés dátumát, a számla adataival,</li>
<li>a használatbavétel napját,</li>
<li>az értékcsökkenési leírás módját és a már elszámolt összeget,</li>
<li>a nettó (nyilvántartási) értéket,</li>
<li>a kivezetés okát és dátumát: értékesítés, selejtezés, hiány.</li>
</ul>
<p>Ezek az adatok az év végi zárásnál kerülnek igazán előtérbe. A számvitelről szóló 2000. évi C. törvény 69. § (2) bekezdése előírja, hogy a vállalkozó a mérleg fordulónapjára egyeztesse a főkönyvi könyvelés és az analitikus nyilvántartások adatait.</p>
<h2>Mit tart nyilván az operatív eszköznyilvántartás?</h2>
<p>Az operatív nyilvántartás a mindennapi kérdésekre felel. Eszközönként ezeket rögzíti:</p>
<ul>
<li>az azonosítókat: leltári szám, gyári szám, belső azonosító, vonalkód vagy QR-kód,</li>
<li>a pontos helyet: telephely, raktár, helyiség, polc,</li>
<li>a felelőst és a tényleges használót,</li>
<li>az állapotot, például „Használatban”, „Javítás alatt”, „Selejtezésre vár”,</li>
<li>a szerviztörténetet és a karbantartási ütemtervet,</li>
<li>a kapcsolódó dokumentumokat lejárattal: gépkönyv, garancialevél, vizsgálati jegyzőkönyv.</li>
</ul>
<p>Ezek az adatok akár naponta változnak. Egy laptop gazdát cserél, egy fúrógép átkerül a másik telephelyre, egy targonca szervizbe megy. A könyvelésnek ezekről nem kell tudnia, a műszakvezetőnek viszont igen.</p>
<h2>Eszköznyilvántartás vs. tárgyi eszköz könyvelés egy táblázatban</h2>
<table>
<thead><tr><th>Szempont</th><th>Tárgyi eszköz könyvelés</th><th>Operatív eszköznyilvántartás</th></tr></thead>
<tbody>
<tr><td>Fő kérdés</td><td>Mennyit ér?</td><td>Hol van, kinél van, milyen állapotban?</td></tr>
<tr><td>Ki használja</td><td>Könyvelő, pénzügy</td><td>Raktárvezető, IT, műszakvezető, kollégák</td></tr>
<tr><td>Fő adatok</td><td>Bekerülési érték, értékcsökkenés, nettó érték</td><td>Hely, felelős, használó, állapot, szerviz, lejáratok</td></tr>
<tr><td>Milyen gyakran változik</td><td>Beszerzéskor, év végén, kivezetéskor</td><td>Akár naponta</td></tr>
<tr><td>Ki rögzít</td><td>A könyvelés</td><td>Aki az eszközt kiadja, átveszi vagy javíttatja</td></tr>
<tr><td>Kis értékű eszköz</td><td>200 000 Ft alatt egy összegben leírható</td><td>Ugyanúgy nyilván kell tartani</td></tr>
<tr><td>Selejtezés</td><td>Kivezetés a könyvekből</td><td>Állapotváltás, a selejtezés okának és dátumának rögzítése</td></tr>
</tbody>
</table>
<h2>A kis értékű eszközök csapdája</h2>
<p>A számviteli törvény 80. § (2) bekezdése szerint (a cikk írásakor, 2026 októberében hatályos szöveg alapján) a 200 000 Ft egyedi beszerzési érték alatti tárgyi eszközök bekerülési értéke – a vállalkozó döntésétől függően – a használatbavételkor egy összegben elszámolható értékcsökkenési leírásként. Egy telefon, egy akkus fúrógép vagy egy mérőműszer értéke így a könyvekben hamar nullára fut.</p>
<p>Operatív szempontból viszont semmi nem változik. A telefon ugyanúgy egy kollégánál van, a fúrógépet ugyanúgy vissza kell hozni a munkáról, a mérőműszer kalibrálása ugyanúgy esedékes. Ha csak a könyvelés tartja nyilván őket, éppen ezek tűnhetnek el a legkönnyebben, hiszen „a könyvekben már nem érnek semmit”. Hogy a kis értékű eszközöket a cég hogyan kezeli a könyvelésben, azt a számviteli politika és a könyvelő határozza meg.</p>
<h2>Hogyan kapcsolja össze a kettőt?</h2>
<p>A két nyilvántartást nem kell összeolvasztani, de érdemes összekötni. Négy lépés elég hozzá:</p>
<ol>
<li><strong>Közös azonosító.</strong> Minden eszköz kapjon leltári számot, és ez ugyanabban a formában szerepeljen a könyvelésben és az operatív nyilvántartásban is. E nélkül év végén nevek és típusok alapján kell párosítani, ami lassú és hibás.</li>
<li><strong>Beszerzési adatok mindkét helyen.</strong> A beszerzés dátuma, értéke és a számla száma az operatív nyilvántartásban is legyen meg. Így egy új eszköz a könyvelésben is azonnal visszakereshető.</li>
<li><strong>Selejtezés egy úton.</strong> Döntse el, ki indítja a selejtezést. Bevált sorrend: az eszköz az operatív nyilvántartásban „Selejtezésre vár” állapotba kerül, elkészül a selejtezési jegyzőkönyv, és ennek alapján a könyvelés kivezeti.</li>
<li><strong>Év végi egyeztetés.</strong> Exportálja az operatív eszközlistát, és a leltári szám alapján vesse össze a könyvelés analitikájával. Három listát keressen: ami csak a könyvelésben szerepel (lehet, hogy elveszett vagy már selejtezték), ami csak az operatív nyilvántartásban van (lehet, hogy nem aktiválták), és ahol az állapot ellentmond (a könyvekben aktív, a valóságban selejtezésre vár).</li>
</ol>
<p>Ha az év végi leltárt is az operatív nyilvántartásból indítja, a mennyiségi felvétel eredménye közvetlenül összevethető a könyvelés adataival. Hogy a cég leltározási szabályzata szerint mi fogadható el, azt a könyvelővel egyeztesse. A leltár menetéről az <a href="/blog/ev-vegi-eszkozleltar/">év végi eszközleltárról szóló cikkünkben</a> írtunk részletesen.</p>
<h2>Mit csinál és mit nem a Yardly?</h2>
<p>A Yardly operatív eszköznyilvántartó, nem könyvelőprogram. Nem számol értékcsökkenést, nem könyvel, és nem helyettesíti a tárgyi eszköz analitikát. Abban segít, ami a könyvelésből kimarad. Az <a href="/megoldasaink/eszkoznyilvantartas/">eszköznyilvántartásban</a> minden eszköznek van leltári száma, gyári száma, belső azonosítója és vonalkódja, pontos helye a polcig, felelőse és használója, saját állapota, szerviznaplója és ütemterve. A beszerzés dátumát, értékét, helyét és számlaszámát is rögzítheti, így az egyeztetéshez megvan a közös alap. Az eszközlistát bármikor exportálhatja Excelben, a leltárt pedig telefonnal, QR- vagy vonalkóddal végezheti (<a href="/megoldasaink/leltar/">leltár telefonnal</a>, Üzleti csomagtól).</p>`,
  },
  {
    slug: "abroncsnyilvantartas-flotta",
    date: "2026-11-19",
    minutes: 4,
    category: "fleet",
    solution: "szerviz-karbantartas",
    title: "Abroncsnyilvántartás flottának: gumicsere nyilvántartás mintával",
    excerpt: "Melyik autón milyen gumi van, hol a másik garnitúra, mennyi rajta a profil? Abroncsnyilvántartás minta flottáknak, a jogszabályi profilmélységgel.",
    body: `
<p>Az abroncsnyilvántartás hiánya akkor derül ki, amikor a szezonális cserénél senki nem tudja, hol van a másik garnitúra, és mennyi profil maradt rajta. Egy 20 autós flottánál ez 40 garnitúra, vagyis 160 abroncs. A gumicsere nyilvántartás ezt teszi követhetővé: mi van az autón, mi van a raktárban vagy a gumihotelben, és mikor kell újat venni. Alább bemutatjuk, mit érdemes rögzíteni, és adunk hozzá egy mintát is.</p>
<h2>Miért éri meg a gumicsere nyilvántartás?</h2>
<ul>
<li><strong>Megtalálja a garnitúrát.</strong> Nem a cserenapon derül ki, hogy a téli gumi melyik telephelyen vagy gumihotelben van.</li>
<li><strong>Tervezhető a beszerzés.</strong> A profil- és km-adatokból előre látszik, hány garnitúrát kell venni a következő szezonra.</li>
<li><strong>Nincs felesleges vásárlás.</strong> Nem vesznek új garnitúrát olyan autóra, amelynek a régije még jó, csak nem találták meg.</li>
<li><strong>Ellenőrizhető a számla.</strong> A gumihotel és a szerviz számláját össze lehet vetni a saját listájával.</li>
</ul>
<h2>Mit érdemes autónként vezetni az abroncsnyilvántartásban?</h2>
<ul>
<li><strong>Garnitúra-azonosító:</strong> például „ABC-123 / T1” a téli és „ABC-123 / N1” a nyári garnitúrára, hogy a tárolóban is egyértelmű legyen.</li>
<li><strong>Típus:</strong> nyári, téli vagy négyévszakos, a jelöléssel együtt (például „M+S” felirat vagy hópihe-ábra).</li>
<li><strong>Méret és index:</strong> például 205/55 R16 91H, mert a terhelési és a sebességindex is számít.</li>
<li><strong>Gyártási idő (DOT):</strong> az oldalfalon lévő DOT-jelölés utolsó négy számjegye a gyártás hetét és évét mutatja; a „2423” például a 2023. év 24. hetét jelenti.</li>
<li><strong>Profilmélység:</strong> mm-ben, a mérés dátumával. Több ponton mérjen, és a legkisebb értéket írja fel.</li>
<li><strong>Felni:</strong> acél- vagy alufelni, és saját felnin van-e a garnitúra.</li>
<li><strong>Tárolási hely:</strong> telephely és polc, vagy a gumihotel neve és a tárolási szám.</li>
<li><strong>Csere:</strong> dátum, km-óraállás, ki végezte, mennyibe került.</li>
<li><strong>Megjegyzés:</strong> javítás, defekt, sérült oldalfal.</li>
</ul>
<h2>Profilmélység: mit ír elő a jogszabály?</h2>
<p>A <a href="https://njt.jog.gov.hu/jogszabaly/1990-6-20-5E">6/1990. (IV. 12.) KöHÉM rendelet</a> szerint:</p>
<ul>
<li>személyautón, kisteherautón és könnyű pótkocsin (M1, N1, O1 és O2 kategória) a mintázat mélységének a teljes futófelületen el kell érnie az <strong>1,6 mm</strong>-t, az abroncs átmérőjétől függetlenül (36. §);</li>
<li>más járműveken a 0,75 méternél nem nagyobb átmérőjű abroncsnál 1,6 mm, a nagyobbaknál <strong>3 mm</strong> a minimum (36. §);</li>
<li>téli gumiabroncs az, amelyet a gyártó téli jelöléssel látott el, és amelynek mintázatmélysége <strong>meghaladja a 4 mm-t</strong> (2. §);</li>
<li>az azonos tengelyen lévő kerekekre csak azonos méretű, szerkezetű, teherbírású és mintázatú (nyári vagy téli) gumik szerelhetők (36. §).</li>
</ul>
<p>A jogszabályi minimum nem cél. A nyilvántartásban érdemes egy saját, magasabb cserejelzést meghatározni, hogy a beszerzést ne egy ellenőrzés kényszerítse ki. Ausztriában például 3,5 tonnáig a téli gumi csak legalább 4 mm-es profillal számít téli gumiabroncsnak; erről a <a href="/blog/teli-felkeszules-ceges-flotta/">téli felkészülésről szóló cikkünkben</a> írtunk.</p>
<h2>Abroncsnyilvántartás minta</h2>
<div class="template">
<p><strong>Abroncs-garnitúrák – garnitúránként egy sor</strong></p>
<table>
<thead><tr><th>Rendszám</th><th>Garnitúra</th><th>Típus</th><th>Méret</th><th>DOT</th><th>Profil (mm) / mérés napja</th><th>Hol van most</th><th>Utoljára felszerelve (dátum, km)</th><th>Megjegyzés</th></tr></thead>
<tbody>
<tr><td>ABC-123</td><td>T1</td><td>téli</td><td>205/55 R16 91H</td><td>3823</td><td>6,5 / 2026. 11. 10.</td><td>az autón</td><td>2026. 11. 10., 84 210 km</td><td>–</td></tr>
<tr><td>ABC-123</td><td>N1</td><td>nyári</td><td>205/55 R16 91V</td><td>1122</td><td>3,2 / 2026. 11. 10.</td><td>gumihotel, 112-es tárolási szám</td><td>2026. 04. 08., 71 900 km</td><td>tavaszra új garnitúra</td></tr>
</tbody>
</table>
<p><strong>Gumicsere-napló – cserénként egy sor</strong></p>
<table>
<thead><tr><th>Dátum</th><th>Rendszám</th><th>Fel</th><th>Le</th><th>Km-óraállás</th><th>Szerviz</th><th>Költség</th></tr></thead>
<tbody>
<tr><td>2026. 11. 10.</td><td>ABC-123</td><td>T1</td><td>N1</td><td>84 210</td><td>…</td><td>… Ft</td></tr>
</tbody>
</table>
</div>
<p>A két táblából kiszámolható, mennyit futott egy garnitúra egy szezonban:</p>
<p class="formula">futott km = km-óraállás leszereléskor − km-óraállás felszereléskor = 84 210 km − 71 900 km = 12 310 km</p>
<p>Ha ezt a profilkopással együtt nézi, előre látszik, melyik garnitúra bírja ki a következő szezont, és melyikre kell keretet tervezni. A példában a nyári garnitúra egy szezon után 3,2 mm-en áll, ezért tavaszra érdemes újat betervezni.</p>
<h2>Gumicsere nyilvántartás a gyakorlatban</h2>
<ul>
<li>Minden cserénél ugyanaz rögzítsen: a szerviz vagy a sofőr adja le az adatokat, de egy ember írja be.</li>
<li>A gumihotel listáját szezononként egyeztesse a saját nyilvántartásával.</li>
<li>A profilt mérje meg leszereléskor is: akkor dönthet a pótlásról, amikor még van idő.</li>
<li>Ha egy abroncsot cserélnek, nézze meg, egyezik-e a tengely másik oldalán lévővel.</li>
</ul>
<h2>Mikor nem elég már az Excel?</h2>
<p>A minta néhány tucat autóig jól működik. Gond akkor van, ha a cserét a szerviz végzi, az autót a sofőr viszi, a gumihotel listája pedig e-mailben jön: a táblázat ilyenkor mindig a valóság mögött jár. Akkor is érdemes váltani, ha a szezonális cseréről emlékeztető kell, vagy ha a raktárban tárolt garnitúrákat időnként le is kell leltározni.</p>
<h2>Hogyan segít a Yardly?</h2>
<p>A Yardlyban nincs külön abroncsmodul, de a gumicsere nyilvántartás a meglévő funkciókkal jól vezethető. A garnitúrákat <a href="/megoldasaink/karugyek-biztositas-tartozekok/">tartozékként</a> rögzítheti a járműhöz, saját kategóriában (például „Téli gumi”), névvel, gyári számmal, beszerzési dátummal és értékkel; a méretet, a DOT-ot, a profilt és a tárolási helyet a megjegyzésbe írhatja. A tartozékok a telefonos leltárban (Üzleti csomagtól) is számba vehetők, így a raktárban álló garnitúrák is ellenőrizhetők. A cserét a <a href="/megoldasaink/szerviz-karbantartas/">szerviznaplóba</a> rögzíti dátummal, km-rel, költséggel és szervizpartnerrel, a következő szezonális cseréről pedig ismétlődő emlékeztető szól e-mailben.</p>`,
  },
  {
    slug: "flottakezelo-szoftver-valasztas",
    date: "2026-11-24",
    minutes: 4,
    category: "fleet",
    solution: "jarmunyilvantartas",
    title: "Flottakezelő szoftver kiválasztása: ellenőrzőlista és tesztterv",
    excerpt: "Milyen adatokat kezel, mit tud telefonon, hogyan exportál? Ellenőrzőlista a flottakezelő szoftver kiválasztásához, és teszt-forgatókönyv a próbaidőre.",
    body: `
<p>Egy flottakezelő szoftver kiválasztásánál könnyű elveszni a funkciólistákban. Minden rendszer tud „járműnyilvántartást” és „riasztást”, a különbség a részletekben van: mit kell kézzel bevinni, ki látja az adatokat, és mi történik, ha egyszer váltani szeretne. Ez az ellenőrzőlista abban segít, hogy a flottakezelő program kiválasztása a cég saját működéséből induljon, ne a reklámszövegekből.</p>
<h2>Először: mit kell kezelni?</h2>
<p>Mielőtt bármelyik rendszert megnézi, írja le egy lapra:</p>
<ul>
<li>hány és milyen járművük van (személyautó, furgon, teherautó), és milyen üzemeltetési formában (saját, bérelt, lízing),</li>
<li>milyen dokumentumokat és lejáratokat figyelnek ma (forgalmi, műszaki, kötelező, casco, jogosítvány, tachográf),</li>
<li>honnan jönnek a költségadatok (üzemanyagkártya, szervizszámlák, biztosítási díjak),</li>
<li>kik dolgoznak az adatokkal: flottavezető, diszpécser, sofőr, pénzügy, vezetőség,</li>
<li>vannak-e nem jármű jellegű eszközök, amelyeket szintén nyilván kell tartani.</li>
</ul>
<p>Ha az autók helyzetét valós időben kell látnia, vagy útnyilvántartásra van szüksége, az járműkövető rendszer feladata. A különbséget a <a href="/blog/flottakezeles-vagy-jarmukovetes/">flottakezelés vs. járműkövetés</a> cikkünk részletezi.</p>
<h2>Ellenőrzőlista a flottakezelő program kiválasztásához</h2>
<h3>Adatok és funkciók</h3>
<ul>
<li><strong>Járművek és eszközök együtt:</strong> a targonca, a szerszám és a laptop is ugyanabban a rendszerben lehet-e, saját jellemzőkkel? Két külön program két adatbázist és két előfizetést jelent.</li>
<li><strong>Lejáratfigyelés:</strong> beállítható-e, hány nappal előtte és kinek szóljon a riasztás? Személyhez, például jogosítványhoz is köthető-e dokumentum?</li>
<li><strong>Karbantartás:</strong> km és idő szerint is ütemezhető-e, „amelyik előbb jön” alapon?</li>
<li><strong>Költségek:</strong> járművenként és Ft/km-ben is látszanak-e, kézi összesítés nélkül?</li>
<li><strong>Kárügyek és bírságok:</strong> hozzárendelhetők-e a sofőrhöz?</li>
</ul>
<h3>Integrációk</h3>
<ul>
<li><strong>Üzemanyagkártya:</strong> mely kártyakibocsátók adatait tudja behúzni, és hogyan: automatikusan, időzítve vagy fájlimporttal? A különbség havonta órákat jelenthet.</li>
<li><strong>Import és export:</strong> van-e Excel-import sablonnal, és kivihető-e az összes adat egyben?</li>
<li><strong>Értesítések:</strong> e-mailben jönnek-e, és összesítve vagy tételenként?</li>
</ul>
<h3>Használat</h3>
<ul>
<li><strong>Mobil:</strong> a sofőr telefonról is rögzíthet-e tankolást, hibát vagy kárt? Kell-e ehhez alkalmazást telepíteni?</li>
<li><strong>Jogosultságok:</strong> beállítható-e, hogy a sofőr csak a saját autóját lássa, a pénzügy pedig a költségeket? Látszik-e, ki mit módosított?</li>
<li><strong>Magyar nyelv és ügyfélszolgálat:</strong> magyar-e a felület és a támogatás, és milyen válaszidővel dolgoznak?</li>
</ul>
<h3>Biztonság és adatvédelem</h3>
<ul>
<li>Van-e kétlépcsős belépés?</li>
<li>Hogyan különítik el a cégek adatait egymástól?</li>
<li>A rendszer személyes adatokat is kezel (a sofőrök nevét, jogosítványát, bírságait). Kérje el az adatfeldolgozásra vonatkozó szerződést, kérdezze meg, hol tárolják az adatokat, és a GDPR szerinti teendőket egyeztesse az adatvédelmi felelősükkel.</li>
<li>Kilépéskor megkapja-e az összes adatát, olvasható formátumban?</li>
</ul>
<h3>Ár és feltételek</h3>
<ul>
<li>Van-e nyilvános ár, és pontosan mi van a csomagban? Az árazási modellekről a <a href="/blog/flottakezelo-szoftver-ara/">flottakezelő szoftver áráról</a> szóló cikk szól.</li>
<li>Mi történik, ha a flotta nő? Van-e hűségidő?</li>
<li>Van-e ingyenes próbaidő, és milyen funkciókkal?</li>
</ul>
<h2>Teszt-forgatókönyv a próbaidőre</h2>
<p>A demó azt mutatja meg, mit tud a rendszer. A próbaidő azt, hogy a saját adataikkal is működik-e. Egy-két hét alatt az alábbi lépéseken érdemes végigmenni:</p>
<ol>
<li><strong>Import:</strong> töltse fel a meglévő Excel-listát, legalább 10 járművel. Mennyi kézi javítás kellett utána?</li>
<li><strong>Lejárat:</strong> vegyen fel egy dokumentumot néhány napon belüli lejárattal, és nézze meg, megérkezik-e a riasztás.</li>
<li><strong>Karbantartás:</strong> állítson be egy km-alapú ütemtervet, rögzítsen egy új km-óraállást, és ellenőrizze, frissül-e az esedékesség.</li>
<li><strong>Tankolás:</strong> ha a próbaidőben lehet, kösse be az üzemanyagkártyát, és három tranzakción ellenőrizze, hogy a jó autóhoz kerültek-e.</li>
<li><strong>Sofőrszemmel:</strong> hívjon meg egy sofőrt, és kérje meg, hogy telefonról rögzítsen egy tankolást vagy egy hibabejelentést.</li>
<li><strong>Jogosultság:</strong> ellenőrizze, hogy a sofőr valóban nem látja-e a többi autót.</li>
<li><strong>Riport:</strong> kérjen le egy havi költségösszesítőt, és vesse össze a saját számaival.</li>
<li><strong>Export:</strong> exportáljon ki mindent, és nyissa meg Excelben.</li>
<li><strong>Támogatás:</strong> tegyen fel egy valódi kérdést az ügyfélszolgálatnak, és mérje a válaszidőt.</li>
</ol>
<p>Pontozza a rendszereket 1-től 5-ig minden lépésnél. A legjobb pontszámot ritkán a leghosszabb funkciólistájú termék kapja.</p>
<h2>Gyakori hibák a választásnál</h2>
<ul>
<li><strong>Csak a demót nézik meg.</strong> A bemutató adatai mindig szépek; a saját, hiányos Excel-lista mutatja meg a valóságot.</li>
<li><strong>Kihagyják a sofőröket.</strong> Az adatok nagy részét ők rögzítik. Ha nekik nehézkes, a rendszer üres marad.</li>
<li><strong>Mindent át akarnak vinni.</strong> Elég azt áthozni, amit ténylegesen használnak; a többi később is pótolható.</li>
<li><strong>Nem kérdeznek rá a kilépésre.</strong> Az adatexport és a felmondási feltételek a választás előtt számítanak, nem utána.</li>
</ul>
<h2>Hogyan felel meg ennek a Yardly?</h2>
<p>A Yardly nyilvántartó flottakezelő szoftver, GPS és útnyilvántartás nélkül. A fenti lista szerint:</p>
<ul>
<li>a járművek és az eszközök egy rendszerben vannak, az eszközök kategóriánként saját jellemzőkkel,</li>
<li>a dokumentumok járműhöz, eszközhöz vagy személyhez csatolhatók, a lejáratról e-mail megy (alapértelmezés szerint 30, 14, 7 és 1 nappal előtte), naponta egy összesített levélben,</li>
<li>a karbantartás km vagy idő szerint ütemezhető, amelyik hamarabb teljesül,</li>
<li>az üzemanyagkártyák közül a DKV-tranzakciókat húzza be automatikusan, 6 óránként,</li>
<li>van Excel-import sablonnal és teljes adatexport Excelben,</li>
<li>a felület telefonra szabott és magyar nyelvű; szerepkörök vannak, az Üzleti csomagtól saját szerepkörökkel és jogosultsági mátrixszal,</li>
<li>kétlépcsős belépés és cégenként elkülönített adatok.</li>
</ul>
<p>A ${TRIAL_DAYS} napos próbaidő alatt ${the(TRIAL_PLAN)} csomag minden funkciója elérhető, így a fenti forgatókönyv lépései is kipróbálhatók. Részletek a <a href="/megoldasaink/jarmunyilvantartas/">járműnyilvántartás</a>, illetve a <a href="/megoldasaink/csapat-biztonsag/">jogosultságok és biztonság</a> oldalán.</p>`,
  },
  {
    slug: "nav-uzemanyagar-flotta",
    date: "2026-11-26",
    minutes: 4,
    category: "costs",
    solution: "tankolas-dkv",
    title: "NAV üzemanyagár: mire való, és miért számoljon valós tankolásból?",
    excerpt: "A NAV havonta közzéteszi az elszámolható üzemanyagárat. Mire való, mikor jelenik meg, és miért a valós tankolásokból számolja a flotta Ft/km-ét?",
    body: `
<p>A NAV üzemanyagár minden hónapban sokakat érdekel: könyvelők, vállalkozók és flottavezetők is keresik. Ez a cikk elmagyarázza, mi ez az ár, mikor jelenik meg, mire használják általában, és miért nem érdemes ebből számolni egy céges autó valós üzemanyagköltségét.</p>
<h2>Mi a NAV üzemanyagár?</h2>
<p>A személyi jövedelemadóról szóló 1995. évi CXVII. törvény 82. § (2) bekezdése előírja, hogy a NAV havonta tegye közzé azt az üzemanyagárat, amely az adott hónapban a fogyasztási norma szerinti üzemanyagköltség-elszámolásnál alkalmazható.</p>
<p>A NAV tájékoztatása szerint az ár így jön ki: három belföldi üzemanyag-forgalmazó társaság a tárgyhónapot megelőző hónap első napján érvényes fogyasztói árának számtani átlaga, literenként, illetve kilogrammonként egy forinttal növelve, forintra kerekítve. A táblázat külön oszlopot ad az ESZ-95 benzinre, a gázolajra, a keverékre, valamint az LPG és a CNG autógázra. A hivatalos értékek a <a href="https://nav.gov.hu/ugyfeliranytu/uzemanyag/2026-ban-alkalmazhato-uzemanyagarak">NAV oldalán</a> érhetők el.</p>
<h2>Mikor jelenik meg?</h2>
<p>A NAV a hónapra vonatkozó árat jellemzően az előző hónap vége felé teszi közzé. A 2026-os táblázat októberi sort tartalmazó frissítésének dátuma például 2026. szeptember 25., a 2025-ös táblázat decemberi soráé 2025. november 25. A pontos napot mindig a NAV oldalán ellenőrizze.</p>
<p>A cikk írásakor (2026. október) a legfrissebb közzétett érték a 2026. októberi: piaci árszabás szerint az ESZ-95 benzin 605 Ft/l, a gázolaj 681 Ft/l. A 2026-os táblázatban májusra, júniusra és júliusra külön „védett ár” oszlop is szerepel. Hogy egy elszámolásnál melyik értéket kell használni, azt egyeztesse a könyvelőjével.</p>
<h2>Mire használják általában?</h2>
<p>A NAV-ár adózási célú elszámolási ár. Akkor van szerepe, amikor egy magánszemély (például a saját autóját hivatali célra használó munkavállaló vagy egy egyéni vállalkozó) üzemanyagköltségét nem a tankolási számla, hanem a megtett út és a jogszabályi fogyasztási norma alapján számolják el. A NAV tájékoztatója szerint ha a magánszemély az üzemanyagköltséget a közleményben szereplő árak szerint számolja el, nem szükséges az üzemanyagról számlát beszereznie.</p>
<p>A normákat a 60/1992. (IV. 1.) Korm. rendelet tartalmazza. A NAV tájékoztatója szerint például egy 1501–2000 cm³ közötti, gázolajüzemű személyautó alapnorma-átalánya 6,7 liter/100 km. Ezek az elszámolások útnyilvántartást igényelnek, és a könyvelés körébe tartoznak; a részleteket a könyvelőjével beszélje meg.</p>
<h2>Miért nem jó a NAV-ár a flotta Ft/km-éhez?</h2>
<p>Ha egy céges autó üzemanyagköltségét a NAV-árral és a normával becsüli, a szám mögött két feltételezés van: hogy az autó pontosan annyit fogyaszt, amennyi a norma, és hogy pontosan a NAV havi áráért tankolt. A gyakorlatban egyik sem teljesül:</p>
<ul>
<li><strong>A fogyasztás autónként eltér.</strong> A városi forgalom, a terhelés, a vezetési stílus, a téli gumi és a műszaki állapot is számít. A flottavezető éppen ezt az eltérést szeretné látni.</li>
<li><strong>A tankolt ár is eltér.</strong> A kút helye, a tankolás ideje és a kártyás kedvezmény mind eltolja a valós literárat.</li>
<li><strong>A NAV-ár késve követi a piacot.</strong> A tárgyhónapot megelőző hónap első napjának áraiból számolják, így gyorsan változó piacon a valós ár el is térhet tőle.</li>
</ul>
<h2>Példa: norma kontra valós adat</h2>
<p>Egy kitalált, 1,6 literes dízelmotoros autó egy hónapja:</p>
<ul>
<li>futás: 2 800 km,</li>
<li>tankolás az üzemanyagkártya szerint: 205 liter, összesen 136 940 Ft (átlagosan 668 Ft/l).</li>
</ul>
<p class="formula">norma szerinti becslés = 6,7 l/100 km × 681 Ft/l ≈ 45,6 Ft/km</p>
<p class="formula">valós üzemanyagköltség = 136 940 Ft ÷ 2 800 km ≈ 48,9 Ft/km</p>
<p>A valós fogyasztás 205 ÷ 2 800 × 100 ≈ 7,3 l/100 km. A különbség kilométerenként csak 3,3 Ft, de egy 20 autós flottában, autónként évi 30 000 km-rel számolva:</p>
<p class="formula">20 autó × 30 000 km × 3,3 Ft/km ≈ 1 980 000 Ft évente</p>
<p>Ennyivel tévedne egy költségterv vagy egy autócsere-döntés. Egy hónap tankolásaiból számolt fogyasztás csak közelítés, mert a tank töltöttsége a hónap elején és végén eltérhet. Több hónap átlaga pontosabb.</p>
<h2>Hogyan számoljon valós adatból?</h2>
<ol>
<li>Kösse az üzemanyagkártyákat a járművekhez, hogy minden tranzakció a megfelelő autóhoz kerüljön.</li>
<li>Kérje, hogy a sofőr tankoláskor mindig adja meg a km-óraállást. E nélkül nincs pontos fogyasztás.</li>
<li>Válassza külön a nem üzemanyag tételeket (AdBlue, olaj, mosás), mert torzítják az összeget.</li>
<li>Havonta nézze meg autónként a l/100 km-t és az üzemanyag Ft/km-ét, és vesse össze a flottaátlaggal.</li>
<li>A teljes Ft/km-hez adja hozzá a szervizt, a biztosítást és a bérleti díjat is. Ennek módját a <a href="/blog/ceges-auto-ft-km-koltseg/">céges autó Ft/km-költségéről</a> szóló cikkünk mutatja be.</li>
</ol>
<h2>Ebben segít a Yardly</h2>
<p>A Yardly nem végez útnyilvántartást, kiküldetési vagy norma szerinti elszámolást; ezekhez útnyilvántartó program és könyvelő kell. A valós üzemanyagköltséget viszont kézi munka nélkül adja. A DKV-kártyás tranzakciók 6 óránként maguk kerülnek a járművekhez. A rendszer az AdBlue-t, az olajat és a mosást nem számolja tankolásnak, a hiányzó vagy elgépelt km-órát az előző adatokból becsüli, és járművenként mutatja a fogyasztást és a Ft/km-t. A kártya nélküli tankolás telefonról is rögzíthető.</p>
<p>Szabályokat is beállíthat: a rendszer szólhat, ha egy tankolás nagyobb, mint amennyi a tankba fér, ha hétvégén, éjszaka vagy külföldön történt, vagy ha túllépi a havi keretet. A kapcsolat működését a <a href="/blog/dkv-integracio/">DKV-integrációról</a> szóló cikkünk írja le, a részletek a <a href="/megoldasaink/tankolas-dkv/">Tankolás és DKV-kártya</a> oldalon találhatók.</p>`,
  },
  {
    slug: "cegautoado-2027-plug-in-hibrid",
    date: "2026-12-01",
    minutes: 4,
    category: "costs",
    solution: "koltsegek-riportok",
    title: "Cégautóadó 2027: lejár a régebbi plug-in hibridek mentessége",
    excerpt: "2026. december 31-én lejár a 2025 előtt forgalomba helyezett plug-in hibridek cégautóadó-mentessége. Mit jelent ez 2027-től, és mit tegyen most?",
    body: `
<p>Mit hoz a cégautóadó 2027-ben a flottáknak? Sok cégnél egy új tételt. A 2025. január 1. előtt forgalomba helyezett plug-in hibrid autók eddig mentesek voltak a cégautóadó alól, de ez az átmeneti mentesség 2026. december 31-én megszűnik. Ez a cikk összefoglalja, mit mond a jogszabály, mit nem tudunk még a cikk írásakor (2026. október), és mi a teendő most. Adótanácsot nem ad: a saját helyzetét mindenképp egyeztesse a könyvelőjével.</p>
<h2>Mit mond a szabály?</h2>
<p>A cégautóadót a gépjárműadóról szóló <a href="https://njt.jog.gov.hu/jogszabaly/1991-82-00-00">1991. évi LXXXII. törvény</a> IV. fejezete szabályozza. A NAV 2026. január 22-én közzétett információs füzete és a <a href="https://nav.gov.hu/ado/egyeb/A_cegautoadot_erinto_valtozasok">NAV tájékoztatója</a> szerint:</p>
<ul>
<li>2025. január 1-jétől környezetkímélő gépkocsinak a tisztán elektromos (5E) és a nulla emissziós (5Z) autó minősül. Ezek nem tartoznak a cégautóadó hatálya alá.</li>
<li>2025. január 1-jétől a cégautóadó hatálya alá tartoznak az 5P (külső töltésű hibrid elektromos, azaz plug-in hibrid) és az 5N (növelt hatótávolságú hibrid elektromos) környezetvédelmi osztályjelzésű személygépkocsik is.</li>
<li>A törvény 19/D. §-a szerint a 2025. január 1-je előtt 5P vagy 5N osztályjelzéssel forgalomba helyezett vagy hatósági nyilvántartásba bejegyzett autók 2026. december 31-ig nem tartoznak a cégautóadó hatálya alá.</li>
</ul>
<p>Vagyis 2027. január 1-jétől a régebbi plug-in hibridek után is cégautóadót kell fizetni. Ugyanez a paragrafus a gépjárműadó-mentességüket is 2026. december 31-ig tartja fenn. A 2025-ben vagy később forgalomba helyezett 5P és 5N autók már most is adókötelesek.</p>
<h2>Plug-in hibrid cégautóadó: mennyi lesz 2027-ben?</h2>
<p>A cégautóadó havi összege a motor teljesítményétől (kW) és a környezetvédelmi osztályjelzéstől függ. A törvény szerint 2025 után a tételeket minden évben a KSH által közzétett, előző év júliusi fogyasztóiár-index változásával kell valorizálni, 500 vagy 1000 forintra kerekítve. A következő évi tételeket a NAV a honlapján október 31-ig teszi közzé.</p>
<p><strong>A 2027-es tételek a cikk írásakor (2026. október) még nem jelentek meg.</strong> Mire ezt olvassa, valószínűleg már elérhetők a nav.gov.hu-n; a tervezéshez azokat használja. Becsült 2027-es számot ezért nem közlünk.</p>
<p>Kiindulópontnak a 2026-os tételek használhatók. A NAV füzetének táblázatában az „5”-ös osztályjelzés a „14–15”-ös osztályokkal együtt a legalacsonyabb tételű oszlopban szerepel:</p>
<table>
<thead>
<tr><th>Teljesítmény</th><th>2026-os havi tétel („5”; „14–15” osztály)</th></tr>
</thead>
<tbody>
<tr><td>0–50 kW</td><td>17 500 Ft</td></tr>
<tr><td>51–90 kW</td><td>20 000 Ft</td></tr>
<tr><td>91–120 kW</td><td>25 000 Ft</td></tr>
<tr><td>120 kW felett</td><td>51 000 Ft</td></tr>
</tbody>
</table>
<p>Hogy egy adott autóra melyik sor és oszlop vonatkozik, azt a forgalmi engedély adatai alapján a könyvelője tudja megerősíteni. A törvény 17/F. §-a szerint a gépjárműadó bizonyos feltételekkel levonható a cégautóadóból; ennek kiszámítása szintén a könyvelő feladata.</p>
<h2>Cégautóadó 2027: mikor kell bevallani és fizetni?</h2>
<p>A cégautóadót önadózással, negyedévenként kell megállapítani, bevallani és megfizetni, a negyedévet követő hónap 20. napjáig (17/G. §). 2026-ban erre a 2601-es bevallás szolgál. A negyedéves határidők tehát január 20., április 20., július 20. és október 20. Az érintett plug-in hibridek első, 2027. I. negyedévi adóját 2027. április 20-ig kell bevallani és megfizetni.</p>
<h2>Teendők most: lista, költségvetés, döntés</h2>
<h3>1. Készítse el az érintett autók listáját</h3>
<ul>
<li>Gyűjtse ki a flottából az 5P és 5N környezetvédelmi osztályjelzésű személygépkocsikat, a forgalmi engedély vagy a hatósági nyilvántartás adatai alapján.</li>
<li>Nézze meg mindegyiknél a forgalomba helyezés dátumát: a 2025. január 1. előttiek érintettek.</li>
<li>Jegyezze fel a teljesítményt (kW) és a tulajdonviszonyt. Saját autónál a tulajdonos, pénzügyi lízingnél a lízingbe vevő az adó alanya. Tartós bérletnél a tulajdonos, ilyenkor nézze meg a bérleti szerződésben, hogyan érinti ez a díjat.</li>
</ul>
<p>Ugyanezeknél az autóknál a zöld rendszám cseréje is aktuális; erről külön cikkünk szól: <a href="/blog/zold-rendszam-csere-plug-in-hibrid/">zöld rendszám csere plug-in hibrideknél</a>.</p>
<h3>2. Tervezze be a költséget</h3>
<p>Egy kitalált példa: a flottában öt, 2024-ben forgalomba helyezett, 91–120 kW-os plug-in hibrid van. A 2026-os tétellel számolva:</p>
<p class="formula">5 autó × 25 000 Ft × 12 hónap = 1 500 000 Ft évente</p>
<p>Ha ugyanezek az autók a 120 kW feletti sávba esnek, a 2026-os tétellel 5 × 51 000 Ft × 12 = 3 060 000 Ft jön ki. A 2027-es tétel a valorizáció miatt ettől eltérhet, ezért amint a NAV közzétette, számoljon újra.</p>
<h3>3. Döntsön: megtartás vagy csere</h3>
<p>Az adó önmagában ritkán indokolja a cserét, de a teljes képbe bele kell számolni. Autónként érdemes összevetni:</p>
<ul>
<li>a jelenlegi Ft/km-et (üzemanyag, töltés, szerviz, biztosítás, bérleti díj) és a 2027-től hozzájövő adót,</li>
<li>a lízing- vagy bérleti szerződés hátralévő idejét és a korai kilépés költségét,</li>
<li>a tisztán elektromos vagy a hagyományos alternatíva várható költségét; a tisztán elektromos autó a NAV füzete szerint jelenleg nem tartozik a cégautóadó hatálya alá,</li>
<li>a valós tankolási adatokat: belőlük látszik, hogy az autót ténylegesen töltik-e, vagy főleg benzinnel fut.</li>
</ul>
<p>Szempontokat a <a href="/blog/mikor-csereld-le-a-flotta-autoit/">flottaautók cseréjéről</a> szóló cikkünkben talál. A végső számítást és az adózási következményeket egyeztesse a könyvelőjével.</p>
<h2>Ebben segít a Yardly</h2>
<p>A Yardly nem számol adót és nem könyvel, a döntéshez szükséges adatokat viszont egy helyen tartja. A járműtípusokat Ön határozza meg, így felvehet egy „plug-in hibrid” típust, és egy szűréssel látja az érintett autókat. A forgalmi engedély a jármű adatlapjára tölthető fel. A <a href="/megoldasaink/koltsegek-riportok/">költségek és riportok</a> járművenként mutatják a havi, éves és Ft/km költséget, ez a megtartás vagy csere alapja. A negyedéves bevallásra háromhavonta ismétlődő emlékeztetőt állíthat be, és a <a href="/megoldasaink/riasztasok/">riasztások</a> e-mailben szólnak előtte.</p>`,
  },
  {
    slug: "munkaeszkoz-atadas-atvetel",
    date: "2026-12-03",
    minutes: 4,
    category: "equipment",
    solution: "eszkoznyilvantartas",
    title: "Eszköz átadás-átvételi nyilatkozat minta laptopra, telefonra",
    excerpt: "Mit tartalmazzon az eszköz átadás-átvételi nyilatkozat, ha laptopot, telefont vagy szerszámot ad ki? Kitölthető minta és kilépéskori visszavételi lista.",
    body: `
<p>Amikor egy új kolléga megkapja a laptopját, a telefonját vagy a szerszámkészletét, sokszor csak egy kézfogás és egy e-mail marad utána. Fél év múlva már senki nem tudja, járt-e hozzá töltő, milyen állapotban volt a kijelző, és ki írta alá az átvételt. Egy egyszerű eszköz átadás-átvételi nyilatkozat ezt rendezi. Az alábbiakban megmutatjuk, mit tartalmazzon, adunk egy kitölthető eszköz átadás-átvételi nyilatkozat mintát, és egy listát a kilépéskori visszavételhez.</p>
<h2>Miért kell írásos nyilatkozat?</h2>
<p>Elsősorban azért, hogy mindkét fél tudja, mi van a munkavállalónál, és milyen állapotban kapta. De jogi oldala is van. A Munka Törvénykönyve (2012. évi I. törvény) 180. §-a szabályozza a megőrzési felelősséget. A cikk írásakor (2026. október) hatályos szöveg szerint:</p>
<ul>
<li>a munkavállaló köteles megtéríteni a kárt a megőrzésre átadott, visszaszolgáltatási vagy elszámolási kötelezettséggel átvett olyan dologban bekövetkezett hiány esetén, amelyet állandóan őrizetben tart, kizárólagosan használ vagy kezel (180. § (1) bek.);</li>
<li>mentesül, ha bizonyítja, hogy a hiányt részéről elháríthatatlan ok idézte elő (180. § (2) bek.);</li>
<li>a kárt akkor köteles megtéríteni, ha a dolgot jegyzék vagy elismervény alapján, aláírásával igazoltan vette át (180. § (3) bek.);</li>
<li>a feltételek meglétét és a kárt a munkáltató bizonyítja (180. § (5) bek.);</li>
<li>ha az eszköz nem hiányzik, hanem megrongálódik, a munkavállaló az általános szabály (179. §) szerint felel, azzal, hogy mentesül, ha bizonyítja: úgy járt el, ahogy az adott helyzetben általában elvárható (180. § (6) bek.).</li>
</ul>
<p>A gyakorlati tanulság: aláírt átvételi elismervény nélkül a munkáltató nehezen hivatkozhat a megőrzési felelősségre. Hogy egy adott eszköznél és munkakörnél a feltételek teljesülnek-e, és pontosan mi kerüljön a nyilatkozatba, azt munkajogász tudja megmondani. A lenti mintát ezért a saját helyzetére szabva, jogi átnézés után használja.</p>
<h2>Mit tartalmazzon az eszköz átadás-átvételi nyilatkozat?</h2>
<ul>
<li><strong>A felek adatai:</strong> a munkáltató neve, a munkavállaló neve, munkaköre, törzsszáma.</li>
<li><strong>Az eszköz azonosítói:</strong> megnevezés, gyártó, típus, gyári szám (sorozatszám), leltári szám; telefonnál az IMEI-szám is.</li>
<li><strong>Tartozékok tételesen:</strong> töltő, táska, egér, dokkoló, SIM-kártya, akkumulátorok, koffer.</li>
<li><strong>Állapot átadáskor:</strong> új vagy használt, látható sérülések, karcok. Érdemes fotót is készíteni.</li>
<li><strong>Az átadás dátuma és helye.</strong></li>
<li><strong>Rendeltetésszerű használat:</strong> mire használható az eszköz, használhatja-e más, vihető-e haza, és mi a teendő hiba, kár vagy lopás esetén.</li>
<li><strong>Visszaadás:</strong> mikor kell visszaadni (kérésre, cserekor, a munkaviszony végén), és kinek.</li>
<li><strong>Aláírások:</strong> az átadó és az átvevő aláírása, dátummal.</li>
</ul>
<h2>Eszköz átadás-átvételi nyilatkozat minta</h2>
<p>Az alábbi minta laptopra, telefonra és szerszámra is használható. Másolja át egy dokumentumba, és töltse ki a pontozott részeket.</p>
<div class="template">
<p><strong>ESZKÖZ ÁTADÁS-ÁTVÉTELI NYILATKOZAT</strong></p>
<p>Munkáltató (név, székhely): ………………………………</p>
<p>Átadó (név, beosztás): ………………………………</p>
<p>Átvevő munkavállaló (név, munkakör, törzsszám): ………………………………</p>
<p>Az átadás helye és dátuma: ………………, 20…. ……………… hó …… nap</p>
<p><strong>Átadott eszközök</strong></p>
<table>
<thead><tr><th>Megnevezés, típus</th><th>Gyári szám / IMEI</th><th>Leltári szám</th><th>Tartozékok</th><th>Állapot átadáskor</th></tr></thead>
<tbody>
<tr><td>pl. laptop, ………………</td><td>………………</td><td>………………</td><td>pl. töltő, táska</td><td>új / használt, sérülések: ………</td></tr>
<tr><td>………………</td><td>………………</td><td>………………</td><td>………………</td><td>………………</td></tr>
</tbody>
</table>
<p><strong>Nyilatkozat</strong></p>
<p>Alulírott munkavállaló aláírásommal igazolom, hogy a fenti eszközöket a felsorolt tartozékokkal, a leírt állapotban átvettem. Tudomásul veszem, hogy az eszközöket a munkavégzéshez, rendeltetésszerűen használom, a munkáltató belső szabályai szerint őrzöm, és harmadik személynek nem adom át. Az eszköz meghibásodását, sérülését, elvesztését vagy eltulajdonítását haladéktalanul jelzem a(z) ……………………………… részére. Az eszközöket a munkáltató kérésére, az eszköz cseréjekor, illetve a munkaviszonyom megszűnésekor tartozékaikkal együtt, hiánytalanul visszaadom.</p>
<p>Magáncélú használat: megengedett / nem megengedett / a(z) ……………………… szabályzat szerint.</p>
<p>Átadó aláírása: ……………………… Átvevő aláírása: ………………………</p>
<p><strong>Visszavétel</strong> (a visszaadáskor kell kitölteni)</p>
<p>A visszavétel dátuma: ……………… Állapot, hiányzó tartozék: ………………………………</p>
<p>Visszavevő aláírása: ……………………… Munkavállaló aláírása: ………………………</p>
</div>
<p>A mintában szándékosan nincs kártérítési összeg vagy bérlevonás. A munkabérből való levonás feltételeit a Munka Törvénykönyve 161. §-a szabályozza, ilyen kikötést csak jogi egyeztetés után írjon a nyilatkozatba.</p>
<h3>Laptop átadás-átvételi nyilatkozat: amire külön figyeljen</h3>
<ul>
<li>A gyári számot a gép alján lévő címkéről vagy a rendszerinformációk közül vegye át, ne a típusszámot írja be helyette.</li>
<li>Rögzítse, milyen céges fiókkal kapja meg a gépet a kolléga, de jelszót soha ne írjon a nyilatkozatba.</li>
<li>Telefonnál írja fel az IMEI-számot és a SIM-kártyához tartozó telefonszámot is.</li>
<li>Ha a kolléga otthonról is dolgozik a géppel, a nyilatkozat utaljon a távmunkára vonatkozó belső szabályokra.</li>
</ul>
<h2>Visszavétel kilépéskor: ellenőrzőlista</h2>
<p>A Munka Törvénykönyve 80. § (1) bekezdése szerint a munkavállaló a munkaviszony megszűnésekor köteles munkakörét az előírt rendben átadni és a munkáltatóval elszámolni, ennek feltételeit pedig a munkáltató köteles biztosítani. Az eszközök visszavétele ennek része. Egy bevált lista:</p>
<ol>
<li>Még az utolsó munkanap előtt kérje le a nyilvántartásból, milyen eszközök vannak a kollégánál.</li>
<li>Vesse össze a listát az aláírt nyilatkozatokkal, a tartozékokkal együtt.</li>
<li>Ellenőrizze az eszközök állapotát, és írja fel az eltéréseket az átvételkori állapothoz képest.</li>
<li>Laptopnál és telefonnál: a céges adatok mentése, a fiókok letiltása, a készülék adatainak törlése az IT szabályai szerint.</li>
<li>Kérje vissza a kulcsokat, a belépőkártyát és az üzemanyagkártyát is, ha van.</li>
<li>Mindkét fél írja alá a visszavételt, az eszköz pedig a nyilvántartásban kerüljön vissza a raktárba vagy a következő használóhoz.</li>
</ol>
<h2>Mikor nem elég már az Excel?</h2>
<p>Néhány eszköznél elég egy táblázat és egy mappa a beszkennelt nyilatkozatokkal. A gond akkor kezdődik, amikor:</p>
<ul>
<li>egy kilépésnél nem lehet egy kattintással megmondani, mi van a kollégánál,</li>
<li>az eszközök gyakran cserélnek gazdát, és a táblázat lemarad,</li>
<li>a nyilatkozatok külön mappában vannak, nem az eszköz mellett,</li>
<li>több telephelyen többen vezetik ugyanazt a fájlt,</li>
<li>nem látszik, ki és mikor írta át a „kinél van” oszlopot.</li>
</ul>
<h2>Hogyan segít a Yardly?</h2>
<p>A Yardly <a href="/megoldasaink/eszkoznyilvantartas/">eszköznyilvántartásában</a> minden eszköznél külön megadható a felelős és a használó, a kolléga adatlapján pedig egy helyen látszik, mi van nála. Az aláírt nyilatkozatot dokumentumként az eszközhöz csatolhatja. A <a href="/megoldasaink/folyamatok/">folyamatok</a> elindulhatnak, amikor egy eszköz birtokosa változik vagy egy kolléga távozik, és automatikus lépésként átadás-átvételi elismervényt készíthetnek PDF-ben. A laptopok és telefonok teljes életciklusáról az <a href="/blog/it-eszkoz-laptop-nyilvantartas/">IT eszköz nyilvántartásról szóló cikkünkben</a> írtunk. A céges autók átadásáról külön cikkben olvashat: <a href="/blog/gepjarmu-atadas-atveteli-jegyzokonyv/">gépjármű átadás-átvételi jegyzőkönyv</a>.</p>`,
  },
  {
    slug: "gepjarmu-atadas-atveteli-jegyzokonyv",
    date: "2026-12-08",
    minutes: 4,
    category: "fleet",
    solution: "allapotfelmeres",
    title: "Gépjármű átadás-átvételi jegyzőkönyv: minta céges autóhoz",
    excerpt: "Mit rögzítsen, amikor céges autót ad át egy munkavállalónak: km-óra, üzemanyag, kulcsok, tartozékok, sérülések fotóval. Azonnal használható mintával.",
    body: `
<p>A gépjármű átadás-átvételi jegyzőkönyv az a fél oldal, amelyre csak akkor gondolunk, amikor már vita van: ki húzta meg a lökhárítót, hol a második kulcs, kinél volt az autó, amikor a gyorshajtási bírság készült. Ha a céges autó átadás-átvétele minden alkalommal ugyanazzal a listával történik, ezek a kérdések egy perc alatt eldőlnek. Az alábbiakban összegyűjtöttük, mit és mikor rögzítsen, és egy jegyzőkönyvmintát is adunk, amelyet azonnal használhat.</p>
<h2>Miért érdemes a céges autó átadás-átvételét jegyzőkönyvezni?</h2>
<ul>
<li><strong>Felelősség.</strong> A <a href="https://njt.jog.gov.hu/jogszabaly/2012-1-00-00">munka törvénykönyve</a> (2012. évi I. törvény) 180. §-a a munkavállaló megőrzési felelősségéről szól. A (3) bekezdés szerint ennek egyik feltétele, hogy a munkavállaló a dolgot jegyzék vagy elismervény alapján, aláírásával igazoltan vette át. A megrongálódás miatti kárra a 180. § (6) bekezdése a 179. § szabályait rendeli alkalmazni. Hogy ez az Ön céges autóira hogyan alkalmazható, azt egyeztesse munkajogásszal.</li>
<li><strong>Bírságok.</strong> Ha pontosan tudja, ki mikor vette át az autót, a bírság időpontjából kiderül, ki használta. Ezért az átadás időpontját óra-perc pontossággal írja fel.</li>
<li><strong>Kiinduló állapot.</strong> A km-óra, az üzemanyagszint és a meglévő sérülések rögzítése nélkül a következő átadáskor nem lehet megmondani, mi változott.</li>
</ul>
<p>A szabályokat a cikk írásakor (2026. október) hatályos szöveg alapján idéztük.</p>
<h2>Mikor kell jegyzőkönyv?</h2>
<ul>
<li>amikor új munkavállaló kap autót;</li>
<li>autócserénél és helyettesítő autónál;</li>
<li>szervizbe adáskor és visszavételkor, ha közben más viszi el az autót;</li>
<li>hosszabb távollét előtt, ha az autót addig más használja;</li>
<li>kilépéskor, legkésőbb az utolsó munkanapon;</li>
<li>bérelt vagy lízingelt autó visszaadásakor.</li>
</ul>
<p>Az átadás mindig kétirányú: amikor az autó visszaérkezik, ugyanazzal a listával vegye vissza, amellyel kiadta.</p>
<h2>Mit rögzítsen a jegyzőkönyv?</h2>
<ul>
<li><strong>Felek és időpont:</strong> átadó, átvevő, dátum, óra, perc, helyszín.</li>
<li><strong>A jármű adatai:</strong> rendszám, gyártmány, típus, alvázszám.</li>
<li><strong>Km-óraállás és üzemanyagszint</strong>, elektromos autónál a töltöttség százalékban.</li>
<li><strong>Figyelmeztető lámpák:</strong> világít-e valamelyik a műszerfalon gyújtás után.</li>
<li><strong>Kulcsok:</strong> hány darab, van-e pótkulcs, és hol van.</li>
<li><strong>Okmányok és kártyák:</strong> forgalmi engedély, üzemanyagkártya. A kártya PIN-kódja soha ne kerüljön a jegyzőkönyvre.</li>
<li><strong>Tartozékok:</strong> elakadásjelző háromszög és elsősegélynyújtó felszerelés (a <a href="https://njt.jog.gov.hu/jogszabaly/1990-6-20-5E">6/1990. (IV. 12.) KöHÉM rendelet</a> 103. és 106. §-a szerint ezeket a járművön készenlétben kell tartani), fényvisszaverő mellény, pótkerék vagy defektjavító készlet, emelő, kerékkulcs, szezonális gumigarnitúra, elektromos autónál töltőkábel. A tartozékok rendszeres ellenőrzéséről az <a href="/blog/sofor-indulas-elotti-ellenorzes/">indulás előtti ellenőrzésről</a> szóló cikkünkben írtunk.</li>
<li><strong>Sérülések:</strong> hely, leírás, a fotó sorszáma.</li>
<li><strong>Tisztaság, megjegyzés, aláírások.</strong></li>
</ul>
<h2>Fotók: így érnek valamit vita esetén</h2>
<ol>
<li>Négy sarokfotó és mindkét oldal, nappali fényben vagy jól megvilágított helyen.</li>
<li>Minden meglévő sérülésről egy közeli fotó, és mellé egy távolabbi, amelyen látszik, hol van az autón.</li>
<li>Egy fotó a műszerfalról gyújtás után: a km-óra, az üzemanyagszint és a figyelmeztető lámpák egy képen.</li>
<li>Az utastér és a csomagtartó a tartozékokkal.</li>
<li>A fotók a jármű nyilvántartásához kerüljenek, ne maradjanak valakinek a saját telefonján.</li>
</ol>
<p>A fotók sorszámát írja be a jegyzőkönyv sérüléstáblázatába, így a kép és a sor összetartozik.</p>
<h2>Gépjármű átadás-átvételi jegyzőkönyv: minta</h2>
<div class="template">
<p><strong>Gépjármű átadás-átvételi jegyzőkönyv</strong></p>
<p>Az átadás jellege: ☐ kiadás munkavállalónak · ☐ visszavétel · ☐ autócsere · ☐ egyéb: ……………</p>
<p><strong>1. Felek és időpont</strong></p>
<ul>
<li>Átadó (név, beosztás): ……………</li>
<li>Átvevő (név, beosztás, törzsszám): ……………</li>
<li>Dátum, időpont (óra:perc), helyszín: ……………</li>
</ul>
<p><strong>2. A jármű</strong></p>
<ul>
<li>Rendszám: …………… · Gyártmány, típus: ……………</li>
<li>Alvázszám: ……………</li>
</ul>
<p><strong>3. Állapot az átadáskor</strong></p>
<ul>
<li>Km-óraállás: …………… km</li>
<li>Üzemanyagszint: ☐ ¼ · ☐ ½ · ☐ ¾ · ☐ tele · elektromos autónál töltöttség: …… %</li>
<li>Világító figyelmeztető lámpa gyújtás után: ☐ nincs · ☐ van: ……………</li>
<li>Tisztaság: ☐ rendben · ☐ megjegyzés: ……………</li>
</ul>
<p><strong>4. Kulcsok, okmányok, kártyák</strong></p>
<ul>
<li>Kulcsok száma: …… db · a pótkulcs helye: ……………</li>
<li>Forgalmi engedély: ☐ átadva</li>
<li>Üzemanyagkártya (a kártyaszám utolsó 4 jegye): …… ☐ átadva (a PIN-kódot nem rögzítjük)</li>
</ul>
<p><strong>5. Tartozékok</strong></p>
<table>
<thead><tr><th>Tartozék</th><th>Megvan</th><th>Hiányzik</th><th>Megjegyzés</th></tr></thead>
<tbody>
<tr><td>Elakadásjelző háromszög</td><td>☐</td><td>☐</td><td></td></tr>
<tr><td>Elsősegélynyújtó felszerelés (lejárat: ……)</td><td>☐</td><td>☐</td><td></td></tr>
<tr><td>Fényvisszaverő mellény</td><td>☐</td><td>☐</td><td></td></tr>
<tr><td>Pótkerék vagy defektjavító készlet</td><td>☐</td><td>☐</td><td></td></tr>
<tr><td>Emelő, kerékkulcs</td><td>☐</td><td>☐</td><td></td></tr>
<tr><td>Szezonális gumigarnitúra (tárolás helye: ……)</td><td>☐</td><td>☐</td><td></td></tr>
<tr><td>Töltőkábel (elektromos autónál)</td><td>☐</td><td>☐</td><td></td></tr>
<tr><td>Egyéb: ……</td><td>☐</td><td>☐</td><td></td></tr>
</tbody>
</table>
<p><strong>6. Sérülések</strong></p>
<table>
<thead><tr><th>Sorszám</th><th>Helye</th><th>Leírás</th><th>Fotó száma</th></tr></thead>
<tbody>
<tr><td>1.</td><td>pl. jobb hátsó lökhárító</td><td>pl. 5 cm-es karc</td><td>pl. 03</td></tr>
<tr><td>2.</td><td></td><td></td><td></td></tr>
<tr><td>3.</td><td></td><td></td><td></td></tr>
</tbody>
</table>
<p><strong>7. Megjegyzés:</strong> ……………</p>
<p><strong>8. Nyilatkozat:</strong> Az átvevő a járművet a fenti állapotban, a felsorolt kulcsokkal, okmányokkal és tartozékokkal átvette. [A cég gépjármű-használati szabályzatát megismerte.]</p>
<p>Átadó aláírása: …………… · Átvevő aláírása: ……………</p>
</div>
<p>A nyilatkozat szövegét és a felelősségi szabályokat a cég gépjármű-használati szabályzatával összhangban, szükség esetén munkajogász bevonásával véglegesítse. A szabályzat tartalmáról <a href="/blog/gepjarmu-hasznalati-szabalyzat/">külön cikkben</a> írtunk.</p>
<h2>Mikor nem elég már a papír és az Excel?</h2>
<ul>
<li>A jegyzőkönyvek egy mappában vannak, a fotók pedig a kollégák telefonján.</li>
<li>Egy bírságnál fél napig tart kideríteni, kinél volt az autó egy adott napon.</li>
<li>Az Excelben átírták a sofőrt, de nem látszik, ki és mikor.</li>
<li>Tíz autó felett már nem lehet fejben tartani, melyikből hiányzik egy tartozék.</li>
</ul>
<h2>Hogyan segít a Yardly?</h2>
<p>A Yardly <a href="/megoldasaink/allapotfelmeres/">telefonos állapotfelmérésében</a> összeállíthatja a saját átadás-átvételi ellenőrzőlistáját húzással, hat mezőtípussal (címke, szöveg, jelölőnégyzet, rádiógomb, legördülő lista, választó). Az átadáskor a linket kézzel is kiküldheti a jármű új sofőrjének: ő e-mailben kapja, és a telefonján tölti ki, bejelentkezés és alkalmazás nélkül. A link 30 napig érvényes. A kitöltés tartalmazza az eredményt (Rendben vagy Hibát találtunk), a km-óraállást, a megjegyzést és a lista válaszait. Az előzmények a jármű Állapotfelmérés fülén látszanak, és minden kitöltés PDF-ben letölthető. A fotókat a jármű dokumentumai közé töltheti fel JPG vagy PNG formátumban, a károkat pedig fotóval együtt kárügyként rögzítheti.</p>
<p>A <a href="/megoldasaink/folyamatok/">folyamatok</a> elindulhatnak, amikor egy jármű sofőrje változik, és automatikus lépésként átadás-átvételi elismervényt is készíthetnek PDF-ben. A bírságoknál a rendszer a jármű sofőrváltásaiból, a bírság időpontja alapján keresi meg a sofőrt. Az állapotfelmérés az Üzleti csomagtól érhető el.</p>`,
  },
  {
    slug: "it-eszkoz-laptop-nyilvantartas",
    date: "2026-12-10",
    minutes: 4,
    category: "equipment",
    solution: "eszkoznyilvantartas",
    title: "IT eszköz nyilvántartás: így kövesse a laptopokat és telefonokat",
    excerpt: "Sorozatszám, garancia, kinél van, mikor kell cserélni: mit rögzítsen az IT eszköz nyilvántartásban, és hogyan kövesse a laptopok teljes életciklusát?",
    body: `
<p>Egy 30 fős cégnél könnyen összejön 30 laptop, 30 telefon, monitorok, dokkolók és néhány tartalék gép. A legtöbb helyen ezeket egy táblázat vagy az informatikus emlékezete tartja nyilván. Ez addig működik, amíg valaki ki nem lép, el nem lopják a gépét, vagy le nem jár a garancia egy drága javítás előtt. Az IT eszköz nyilvántartás arra ad választ, melyik gép kinél van, milyen állapotban, és mi vár rá a következő hónapokban.</p>
<h2>Mit érdemes rögzíteni az IT eszköz nyilvántartásban?</h2>
<table>
<thead><tr><th>Adat</th><th>Példa</th><th>Mire jó</th></tr></thead>
<tbody>
<tr><td>Gyártó, modell, típus</td><td>14 colos üzleti laptop</td><td>Csere, alkatrész, töltő azonosítása</td></tr>
<tr><td>Gyári szám (sorozatszám)</td><td>A gép alján lévő címkéről</td><td>Garancia, szerviz, lopás bejelentése</td></tr>
<tr><td>Leltári szám, címke</td><td>IT-0042</td><td>Gyors azonosítás, leltár</td></tr>
<tr><td>Beszerzés</td><td>Dátum, érték, szállító, számlaszám</td><td>A garancia kezdete, egyeztetés a könyveléssel</td></tr>
<tr><td>Garancia lejárata</td><td>2028. március 15.</td><td>Javítás előtt tudja, kinek a költsége</td></tr>
<tr><td>Műszaki jellemzők</td><td>Processzor, memória, tárhely</td><td>A csere tervezése</td></tr>
<tr><td>Használó és felelős</td><td>Név, részleg</td><td>Kinél van, ki felel érte</td></tr>
<tr><td>Hely</td><td>Telephely, iroda, tartalékszekrény</td><td>A ki nem osztott gépek megtalálása</td></tr>
<tr><td>Állapot</td><td>Használatban, tartalék, javítás alatt, selejtezésre vár</td><td>Áttekintés egy pillantással</td></tr>
<tr><td>Szerviztörténet</td><td>Akkumulátorcsere, billentyűzetcsere</td><td>Javítás vagy csere döntés</td></tr>
</tbody>
</table>
<p>Telefonnál ugyanez érvényes, kiegészítve az IMEI-számmal és a hozzá tartozó telefonszámmal. A szoftverlicenceket érdemes külön kezelni: egy licenc gyakran nem egy géphez, hanem felhasználóhoz vagy szerződéshez kötődik, és a feltételeit a licencszerződés határozza meg. A laptop nyilvántartásban legfeljebb azt jelölje, milyen fontosabb szoftver fut egy gépen.</p>
<p>Nem minden tételt kell egyenként nyilvántartani. A laptop, a telefon, a monitor és a dokkoló egyedi eszköz, saját gyári számmal. A töltők, egerek, kábelek és fejhallgatók inkább tartozékok: elég, ha az átadási nyilatkozaton tételesen szerepelnek, és a visszavételkor ellenőrzik őket.</p>
<h2>Az IT-eszközök életciklusa</h2>
<ol>
<li><strong>Beszerzés.</strong> A gép még a kiadás előtt bekerül a nyilvántartásba gyári számmal, beszerzési adatokkal és garanciával. Ekkor kap leltári számot és címkét.</li>
<li><strong>Kiadás.</strong> A munkavállaló aláírja az átvételt, a nyilvántartásban megjelenik a használó, az állapot „Használatban” lesz. Az átadásról és a nyilatkozat tartalmáról a <a href="/blog/munkaeszkoz-atadas-atvetel/">munkaeszköz átadás-átvételéről szóló cikkünkben</a> írtunk, mintával.</li>
<li><strong>Használat és szerviz.</strong> Minden javítás bekerül az eszköz előzményei közé, költséggel. Ha egy gépen sorozatban jönnek a hibák, ez így látszik.</li>
<li><strong>Csere.</strong> Az új gép kiadásakor a régi visszajön, a nyilvántartásban megváltozik a használó, a régi gép pedig tartalék vagy selejtezésre váró lesz.</li>
<li><strong>Visszavétel.</strong> Kilépéskor, cserekor vagy tartós távollétnél. Ellenőrizze a tartozékokat és az állapotot.</li>
<li><strong>Selejtezés és adatmentes törlés.</strong> Mielőtt egy gép elhagyja a céget (eladás, selejtezés, újrahasznosítás), gondoskodjon róla, hogy ne maradjon rajta céges vagy személyes adat: az adathordozót törölje visszaállíthatatlanul, vagy semmisítse meg. A módszert az IT-felelős vagy az adatvédelmi szakember határozza meg. Rögzítse, ki, mikor és hogyan végezte, és őrizze meg az igazolást.</li>
</ol>
<h2>A garancia lejáratának figyelése</h2>
<p>A garancia lejárata az egyik leggyakrabban elfelejtett dátum. Ha nem tudja, hogy egy gép még garanciális, könnyen kifizet egy javítást, amelyet a gyártó vagy a forgalmazó elvégzett volna. Három jó gyakorlat:</p>
<ul>
<li>A garancialevelet vagy a számlát csatolja a géphez, a lejárati dátummal együtt.</li>
<li>Kérjen emlékeztetőt a lejárat előtt, például 30 nappal: ekkor még van idő bejelenteni az ismert hibákat.</li>
<li>Ha a cég kiterjesztett garanciát vásárol, annak a lejáratát rögzítse, ne az eredetiét.</li>
</ul>
<h2>Ki vezesse, és mikor frissüljön?</h2>
<p>Legyen egy név szerinti felelős, jellemzően az informatikus vagy az irodavezető. A nyilvántartás ne év végén frissüljön, hanem minden eseménynél: beszerzéskor, kiadáskor, cserekor, javításkor és visszavételkor. Egy eszközmozgás rögzítése egy percig tart, utólag kinyomozni viszont órákig. Évente egyszer, például az év végi leltárnál, vesse össze a nyilvántartást a valósággal: minden gépet kézbe kell venni, vagy legalább a címkéjét beolvasni. Ami nem kerül elő, annak a használóját keresse meg még aznap.</p>
<h2>Kilépő dolgozó: így ne vesszen el a laptop</h2>
<p>Az IT-eszközök szempontjából a kilépés az egyik legkockázatosabb pillanat. Ritkán rossz szándék a gond, inkább az, hogy senki nem kéri vissza a gépeket időben. Ha a nyilvántartásban a használó név szerint szerepel, a kilépés előtt egy szűréssel megvan a teljes lista: laptop, telefon, monitor, dokkoló, töltők. Érdemes ezt a kilépési folyamat kötelező lépésévé tenni: a HR értesítése automatikusan jusson el az informatikushoz is, aki a fiókok letiltását és az eszközök visszavételét egy listán, egy időben intézi.</p>
<h2>Laptop nyilvántartás a Yardlyban</h2>
<p>A Yardly <a href="/megoldasaink/eszkoznyilvantartas/">eszköznyilvántartásában</a> az IT-eszközöknek külön kategóriát hozhat létre saját jellemzőkkel (például processzor, memória, garancia), amelyek oszlopként jelennek meg, és kereshetők. Minden gépnek van gyári száma, leltári száma, vonalkódja, beszerzési adata, felelőse és használója, a kolléga adatlapján pedig látszik, mi van nála. A garancialevelet dokumentumként, lejárattal csatolhatja, és a <a href="/megoldasaink/riasztasok/">riasztások</a> a beállított napokkal előtte e-mailt küldenek. Egy folyamat elindulhat, amikor egy kolléga távozik, vagy amikor egy eszköz gazdát cserél. Az éves leltárhoz a gépek QR- vagy vonalkódos címkéit telefonnal olvashatja be (Üzleti csomagtól). A címkézésről a <a href="/blog/qr-cimke-eszkozokre/">QR-címkékről szóló cikkünkben</a> olvashat.</p>`,
  },
  {
    slug: "soforok-okmanyainak-lejarata",
    date: "2026-12-15",
    minutes: 4,
    category: "deadlines",
    solution: "dokumentumok",
    title: "Jogosítvány lejárat figyelése a sofőröknél: okmányok, határidők",
    excerpt: "Jogosítvány, orvosi alkalmasság, GKI, tachográfkártya, ADR: mely sofőrokmányok mikor járnak le, és hogyan épít rájuk megbízható figyelési rendszert.",
    body: `
<p>A jogosítvány lejárat figyelése a sofőröknél ritkán kerül az első helyre, amíg egy ellenőrzésnél vagy egy kár után ki nem derül, hogy valakinek lejárt az okmánya. Ilyenkor az autó áll, a fuvar csúszik, és utólag nehéz megmagyarázni, miért nem tudott róla senki. A vezetői engedély mellett más, sofőrhöz kötött okmányok is lejárnak, eltérő ritmusban. Ez a cikk a cikk írásakor (2026. október) hatályos szabályok szerint összefoglalja, melyek ezek, és hogyan épít fel rájuk egy figyelési rendszert. A járművek határidőiről a <a href="/blog/lejarati-naptar-ceges-flotta/">lejárati naptárról szóló cikkünkben</a> írtunk.</p>
<h2>Mely sofőrokmányok járnak le?</h2>
<h3>Vezetői engedély és egészségi alkalmasság</h3>
<p>A vezetői engedély kategóriánként jogosít vezetésre: az érvényesség a hátoldalon, kategóriánként külön szerepel, és az egészségi alkalmassági vizsgálaton megállapított időponthoz igazodik (<a href="https://njt.jog.gov.hu/jogszabaly/2011-326-20-22">326/2011. (XII. 28.) Korm. rendelet</a> 5. és 29. §). A C1, C1E, C, CE, D1, D1E, D és DE kategória legfeljebb öt évre, a többi legfeljebb tíz évre szól, és a lejárat hónapja és napja általában a születésnaphoz igazodik. Egy sofőrnél tehát a B és a C kategória más napon is lejárhat.</p>
<p>Az időszakos orvosi vizsgálat gyakoriságát a <a href="https://njt.jog.gov.hu/jogszabaly/1992-13-20-3D">13/1992. (VI. 26.) NM rendelet</a> 5. §-a határozza meg:</p>
<table>
<thead><tr><th>Alkalmassági csoport</th><th>Életkor</th><th>Vizsgálat</th></tr></thead>
<tbody>
<tr><td>1. csoport (például A, B, BE)</td><td>50 év alatt</td><td>10 évenként</td></tr>
<tr><td>1. csoport</td><td>50 és 60 év között</td><td>5 évenként</td></tr>
<tr><td>1. csoport</td><td>60 és 70 év között</td><td>3 évenként</td></tr>
<tr><td>1. csoport</td><td>70 éves kortól</td><td>2 évenként</td></tr>
<tr><td>2. csoport (például C, CE, D)</td><td>60 év alatt</td><td>5 évenként</td></tr>
<tr><td>2. csoport</td><td>60 éves kortól</td><td>2 évenként</td></tr>
</tbody>
</table>
<p>Fontos részlet: a 2. csoportba tartozik az is, akit közúti járművezetői munkakörben foglalkoztatnak, függetlenül a vezetett jármű kategóriájától (3. §). Az orvos egészségi okból rövidebb határidőt is megállapíthat, ezért mindig az okmányon szereplő dátumot vegye fel.</p>
<h3>Gépjárművezetői képesítési igazolvány (GKI)</h3>
<p>A tehergépkocsi- és autóbuszvezetői alap- és továbbképzési képesítést igazoló, 95-ös uniós kódot tartalmazó GKI öt évig hatályos. Ha a sofőr a továbbképzést a lejárat előtti 6 hónapban teljesíti, az új igazolványt a régi lejáratától számított öt évre állítják ki (<a href="https://njt.jog.gov.hu/jogszabaly/2005-24-20-0L">24/2005. (IV. 21.) GKM rendelet</a> 33/F. §). A továbbképzést tehát érdemes ebbe az ablakba időzíteni.</p>
<h3>Tachográfkártya (járművezetői kártya)</h3>
<p>A digitális tachográfhoz tartozó járművezetői kártya a 165/2014/EU rendelet szerint legfeljebb öt évig érvényes (26. cikk), a megújítását pedig legkésőbb 15 munkanappal a lejárat előtt kell kérni (28. cikk).</p>
<h3>ADR-bizonyítvány</h3>
<p>Veszélyes árut szállító sofőrnél az ADR szerinti járművezetői képzési bizonyítvány is lejár. Öt évre szól, a megújításához továbbképzés és sikeres vizsga kell (ADR 8.2.2.8.2).</p>
<h3>Munkaköri orvosi alkalmasság</h3>
<p>A foglalkozás-egészségügyi (munkaköri) alkalmassági vizsgálat független a jogosítványhoz szükséges vizsgálattól. Ennek is van következő esedékessége, amelyet külön dátumként érdemes figyelni.</p>
<h2>Jogosítvány lejárat figyelése: így épül fel a rendszer</h2>
<ol>
<li><strong>Gyűjtse össze az okmányokat sofőrönként.</strong> Az eredeti okmányról vegye fel a típust, a kategóriákat és a lejárati dátumot.</li>
<li><strong>Tegye egy helyre.</strong> Egy lista legyen, ne sofőrönként külön fájlok, és legyen egy felelőse.</li>
<li><strong>Adjon okmánytípusonként előrejelzési időt</strong> (lásd a lenti táblázatot).</li>
<li><strong>Döntse el, ki kapja a jelzést.</strong> A sofőr és a flottakezelő is: a sofőrnek kell elmennie, a flottakezelőnek pedig tudnia kell róla.</li>
<li><strong>Zárja le a tételt.</strong> Az új dátumot csak akkor rögzítse, ha látta az új okmányt.</li>
<li><strong>Legyen szabály arra az esetre, ha nem sikerül.</strong> Lejárt okmánnyal a sofőr ne kapjon autót abban a kategóriában, amíg nincs új.</li>
</ol>
<h2>Milyen előrejelzési idők jók?</h2>
<div class="template">
<p><strong>Sofőrokmány-figyelés – javasolt előrejelzés</strong></p>
<table>
<thead><tr><th>Okmány</th><th>Mi kell a megújításhoz</th><th>Első jelzés</th><th>További jelzések</th></tr></thead>
<tbody>
<tr><td>Vezetői engedély (1. csoport)</td><td>orvosi vizsgálat, majd okmánycsere</td><td>60 nappal előtte</td><td>30, 14, 7 nap</td></tr>
<tr><td>Vezetői engedély (2. csoport)</td><td>orvosi vizsgálat, majd okmánycsere</td><td>90 nappal előtte</td><td>60, 30, 14 nap</td></tr>
<tr><td>GKI</td><td>továbbképzés, lehetőleg a lejárat előtti 6 hónapban</td><td>8 hónappal előtte</td><td>6 hónap, 90, 30 nap</td></tr>
<tr><td>Tachográfkártya</td><td>kérelem legkésőbb 15 munkanappal előtte</td><td>60 nappal előtte</td><td>45, 30 nap</td></tr>
<tr><td>ADR-bizonyítvány</td><td>továbbképzés és vizsga</td><td>6 hónappal előtte</td><td>90, 30 nap</td></tr>
<tr><td>Munkaköri alkalmasság</td><td>időpont a foglalkozás-egészségügyi orvosnál</td><td>45 nappal előtte</td><td>14, 7 nap</td></tr>
</tbody>
</table>
<p>Az előrejelzési idők javaslatok, nem jogszabályi határidők. Igazítsa őket ahhoz, mennyi idő alatt jut a cégnél egy sofőr orvoshoz, tanfolyamra vagy ügyfélszolgálatra.</p>
</div>
<h2>Adatvédelem: csak azt tárolja, ami szükséges</h2>
<p>A sofőrök okmányai személyes adatok, ezért a figyelést az adattakarékosság elve szerint érdemes felépíteni (GDPR 5. cikk). A munka törvénykönyve szerint a munkáltató csak olyan adat közlését kérheti, amely a munkaviszony szempontjából lényeges (Mt. 10. §).</p>
<ul>
<li>A figyeléshez elég az okmány típusa, a kategóriák és a lejárati dátum.</li>
<li>Egészségügyi adatot ne tároljon: az orvosi vizsgálatból csak az számít, hogy a sofőr alkalmas-e, és meddig.</li>
<li>Ha másolatot is őriz, korlátozza, ki férhet hozzá.</li>
<li>Határozza meg, meddig őrzi az adatokat a munkaviszony vége után, és tájékoztassa erről a kollégákat.</li>
</ul>
<p>Az adatkezelés részleteit egyeztesse adatvédelmi szakemberrel.</p>
<h2>Mikor nem elég már az Excel?</h2>
<p>Öt sofőr és két okmánytípus mellett egy táblázat elég. Húsz sofőrnél, négy-öt okmánytípussal és eltérő előrejelzési időkkel viszont valakinek minden héten végig kell néznie a listát, és ha szabadságon van, a figyelés is szünetel. A táblázat ráadásul nem korlátozza, ki látja a többiek adatait.</p>
<h2>Hogyan segít a Yardly?</h2>
<p>A Yardlyban a <a href="/megoldasaink/dokumentumok/">dokumentumokat</a> közvetlenül a kollégához csatolhatja, lejárati dátummal: a jogosítvány és a sofőrkártya mellé saját dokumentumtípusként a GKI-t vagy az ADR-bizonyítványt is felveheti. A <a href="/megoldasaink/riasztasok/">riasztás</a> a beállított napokon e-mailt küld a flottavezetőnek, az érintett kollégának vagy mindkettőnek, naponta egy összesített levélben; a hosszabb előkészítést igénylő tételekhez, például a GKI-továbbképzéshez, személyhez kötött emlékeztetőt is beállíthat. A felhasználói adatlapon egy helyen látszanak a kolléga jogosítvány-kategóriái és dokumentumai, a <a href="/megoldasaink/csapat-biztonsag/">jogosultsági mátrixszal</a> (Üzleti csomagtól) pedig beállíthatja, ki láthatja ezeket. A fájlok csak bejelentkezve tölthetők le.</p>`,
  },
  {
    slug: "gepjarmu-hasznalati-szabalyzat",
    date: "2026-12-17",
    minutes: 5,
    category: "fleet",
    solution: "folyamatok",
    title: "Gépjármű használati szabályzat minta kkv-knak (car policy)",
    excerpt: "Ki vezethet, hogyan adják át az autót, ki rendezi a bírságot? Gépjármű használati szabályzat minta kkv-knak, átvehető vázlattal és bevezetési lépésekkel.",
    body: `
<p>A legtöbb kkv-nál a céges autók használatának szabályai szóban élnek: „mindenki tudja”, kinél van a kulcs, és mi a teendő egy koccanás után. Öt autónál ez még működik, tíz autónál és három telephelynél már nem. Egy írásos gépjármű-használati szabályzat (angolul car policy) nem bürokrácia, hanem az a lap, amelyre vita esetén mindenki ránézhet. Ebben a cikkben gépjármű használati szabályzat mintát adunk kkv-knak, amelyet a saját működésükre szabhatnak.</p>
<p>Fontos: a minta kiindulópont, nem jogi tanács. A végleges szöveget nézesse át jogásszal, az adózási kérdéseket pedig a könyvelőjével.</p>
<h2>Mit tartalmazzon a szabályzat?</h2>
<ul>
<li><strong>Hatály és jogosultak:</strong> mely autókra vonatkozik, ki vezethet, milyen vezetői engedéllyel, és hogyan ellenőrzik annak érvényességét.</li>
<li><strong>Kiadás és foglalás:</strong> állandó hozzárendelés vagy közös autók, ki dönt, és hol rögzítik, kinél van az autó.</li>
<li><strong>Átadás-átvétel:</strong> km-óraállás, üzemanyagszint, sérülések, tartozékok, fotók, mindkét fél aláírásával.</li>
<li><strong>Tankolás és üzemanyagkártya:</strong> ki használhatja a kártyát, mire igen és mire nem, és kötelező-e megadni a km-óraállást.</li>
<li><strong>Karbantartás és hibabejelentés:</strong> kinek, milyen határidővel, és ki viszi szervizbe az autót.</li>
<li><strong>Kár és baleset:</strong> teendők a helyszínen, bejelentés, dokumentumok.</li>
<li><strong>Bírság:</strong> hogyan azonosítják a vezetőt, és hogyan rendezik a bírságot.</li>
<li><strong>Magánhasználat:</strong> megengedett-e, és ha igen, milyen feltétellel.</li>
<li><strong>Tiltások:</strong> alkohol, harmadik személy vezetése, dohányzás és a cég saját szabályai.</li>
<li><strong>Ellenőrzés és megszűnés:</strong> időszakos ellenőrzés, és a teendők, ha a munkaviszony vagy a jogosultság megszűnik.</li>
</ul>
<h2>Két kényes pont: magánhasználat és áthárítás</h2>
<p>A magánhasználat engedélyezése adózási és elszámolási kérdéseket vet fel, például a cégautóadó, a személyi jövedelemadó és az útnyilvántartás terén. Mielőtt bármit a szabályzatba ír, egyeztesse a könyvelőjével. A kár és a bírság munkavállalóra hárítását a munkajogi szabályok korlátozzák, ezért ezt a pontot jogásszal ellenőriztesse.</p>
<h2>Gépjármű használati szabályzat minta</h2>
<div class="template">
<h3>[Cégnév] – Gépjármű-használati szabályzat</h3>
<p><strong>Hatályos:</strong> [dátum]-tól. <strong>Felelős:</strong> [flottavezető neve, beosztása].</p>
<h3>1. Cél és hatály</h3>
<p>1.1. A szabályzat a [Cégnév] tulajdonában, bérletében vagy lízingjében lévő gépjárművek használatát szabályozza.</p>
<p>1.2. A szabályzat minden munkavállalóra vonatkozik, aki céges gépjárművet vezet vagy kezel.</p>
<h3>2. Jogosultak</h3>
<p>2.1. Céges gépjárművet az vezethet, akinek ezt a [munkáltatói jogkör gyakorlója] írásban engedélyezte, és a járműkategóriának megfelelő, érvényes vezetői engedéllyel rendelkezik.</p>
<p>2.2. A vezető köteles a vezetői engedélye lejáratát, bevonását vagy korlátozását haladéktalanul jelezni a flottavezetőnek.</p>
<p>2.3. A flottavezető a vezetői engedélyek érvényességét [évente / a lejárat előtt] ellenőrzi.</p>
<h3>3. Kiadás és átadás-átvétel</h3>
<p>3.1. A gépjármű [állandó hozzárendeléssel / igénylés alapján] kerül kiadásra. Az igénylést [kinek, milyen módon] kell benyújtani.</p>
<p>3.2. Minden átadáskor átadás-átvételi jegyzőkönyv készül: dátum, km-óraállás, üzemanyagszint, látható sérülések fotóval, tartozékok és dokumentumok, mindkét fél aláírása.</p>
<p>3.3. Az átvevő az átvételkor ellenőrzi a gépjármű állapotát, és az eltérést a jegyzőkönyvben rögzíti.</p>
<h3>4. Tankolás és üzemanyagkártya</h3>
<p>4.1. Az üzemanyagkártya kizárólag a hozzá rendelt gépjármű tankolására használható, a jármű üzemanyagának megfelelő üzemanyagra. [Egyéb engedélyezett tételek, pl. AdBlue, mosás.]</p>
<p>4.2. Tankoláskor a vezető megadja a pontos km-óraállást.</p>
<p>4.3. A kártya elvesztését vagy ellopását haladéktalanul jelezni kell [kinek], hogy a kártyát letiltsák.</p>
<h3>5. Karbantartás és hibabejelentés</h3>
<p>5.1. A vezető a hibát, a figyelmeztető jelzést vagy a rendellenességet [24 órán belül] jelzi [kinek, milyen módon].</p>
<p>5.2. Az ütemezett szervizt a flottavezető szervezi; a vezető a gépjárművet a megadott időpontban rendelkezésre bocsátja.</p>
<p>5.3. [Összeghatár] Ft feletti javítás csak előzetes jóváhagyással rendelhető meg.</p>
<h3>6. Kár és baleset</h3>
<p>6.1. Baleset esetén a vezető a szükséges helyszíni teendők után fényképeket készít, és rögzíti a résztvevők és a tanúk adatait.</p>
<p>6.2. A kárt [24 órán belül] be kell jelenteni a flottavezetőnek, a fotókkal és a dokumentumokkal együtt.</p>
<p>6.3. A kár megtérítésének szabályait [a jogász által jóváhagyott pont / külön megállapodás] tartalmazza.</p>
<h3>7. Bírságok</h3>
<p>7.1. A gépjárművel kapcsolatos bírságot (gyorshajtás, parkolás, útdíj) a flottavezető nyilvántartásba veszi, és a kiadási nyilvántartás alapján azonosítja, ki vezette akkor a gépjárművet.</p>
<p>7.2. A bírság rendezésének módja: [jogásszal egyeztetett szabály].</p>
<h3>8. Magánhasználat</h3>
<p>8.1. A gépjármű magáncélú használata [nem engedélyezett / a következő feltételekkel engedélyezett: …].</p>
<p>8.2. A magánhasználat elszámolásának módja: [a könyvelővel egyeztetett eljárás].</p>
<h3>9. Tiltások</h3>
<p>9.1. Tilos a gépjárművet alkoholos vagy bódult állapotban vezetni, illetve jogosulatlan személynek átadni.</p>
<p>9.2. [Egyéb tiltások, pl. dohányzás a járműben, engedély nélküli utánfutó, külföldi út előzetes engedély nélkül.]</p>
<h3>10. Ellenőrzés</h3>
<p>10.1. A flottavezető a gépjárművek állapotát [havonta / negyedévente] ellenőrzi, vagy ellenőrzőlista kitöltését kéri a vezetőtől.</p>
<h3>11. A jogosultság megszűnése</h3>
<p>11.1. A munkaviszony megszűnésekor, a vezetői engedély bevonásakor vagy a jogosultság visszavonásakor a gépjárművet, a kulcsokat, az üzemanyagkártyát és a dokumentumokat [határidő]-ig vissza kell adni, átadás-átvételi jegyzőkönyvvel.</p>
<h3>12. Záró rendelkezés</h3>
<p>A munkavállalók a szabályzatot [aláírással / elektronikusan] tudomásul veszik. A szabályzatot [évente] felül kell vizsgálni.</p>
</div>
<h2>Hogyan vezesse be?</h2>
<ol>
<li>Igazítsa a mintát a saját működéséhez, és húzza ki, ami nem releváns.</li>
<li>Nézesse át jogásszal és könyvelővel.</li>
<li>Ismertesse a kollégákkal, és kérje az aláírásukat.</li>
<li>Jelöljön ki egy felelőst, aki a szabályzatot naprakészen tartja.</li>
</ol>
<p>Az átadás-átvételi jegyzőkönyvhöz külön mintát is talál: <a href="/blog/gepjarmu-atadas-atveteli-jegyzokonyv/">gépjármű átadás-átvételi jegyzőkönyv</a>.</p>
<h2>Mikor nem elég már az Excel?</h2>
<p>A szabályzat önmagában csak papír. Az, hogy működik-e, a nyilvántartáson múlik: kinél volt az autó egy adott napon, mikor jár le a sofőr jogosítványa, ki jelentette a hibát. Egy táblázat addig elég, amíg kevés az autó, és egy ember kezeli. Ezek a jelek mutatják, hogy már nem:</p>
<ul>
<li>egy bírságnál napokig tart kideríteni, ki vezette az autót,</li>
<li>a jogosítványok lejáratát senki nem figyeli,</li>
<li>a hibabejelentések e-mailben és telefonon szóródnak szét,</li>
<li>az átadás-átvételi jegyzőkönyvek papíron, fotók nélkül vannak egy mappában,</li>
<li>ugyanabból a táblázatból több „aktuális” verzió él.</li>
</ul>
<p>Erről részletesebben a <a href="/blog/flottakezeles-excelben/">flottakezelés Excelben</a> cikkünk szól.</p>
<h2>Ebben segít a Yardly</h2>
<p>A Yardly a szabályzat több pontját le tudja képezni. A sofőr hozzárendelése és az előzményei a járműnél vannak; egy bírságnál a rendszer a bírság időpontja alapján megkeresi, ki vezette az autót, és értesítést is küldhet neki. A jogosítvány a kollégához csatolható, lejárati riasztással. A sofőr a jármű adatlapján jelentheti a hibát vagy a kárt, sürgősséggel, és ebből javítási folyamat indulhat összeghatáros jóváhagyással. Sofőrváltáskor elindulhat egy folyamat, amely átadás-átvételi elismervényt készít PDF-ben, a telefonos állapotfelméréssel (Üzleti csomagtól) pedig a rendszeres ellenőrzés is ütemezhető. A szerepkörökkel beállítható, hogy a sofőr csak a saját autóját lássa. Részletek a <a href="/megoldasaink/folyamatok/">folyamatok és automatizálás</a> oldalon.</p>`,
  },
  {
    slug: "szerszamnyilvantartas",
    date: "2026-12-22",
    minutes: 4,
    category: "equipment",
    solution: "eszkoznyilvantartas",
    title: "Szerszámnyilvántartás: kiadási napló minta és bevált szabályok",
    excerpt: "Miért tűnnek el a szerszámok, és hogyan vezessen szerszámkiadás nyilvántartást? Kiadási napló minta, címkézés és felülvizsgálatok építőipari cégeknek.",
    body: `
<p>Az építőipari és szervizcégeknél ismerős a helyzet: hétfő reggel nincs meg a fúrókalapács, a lézeres szintező „valamelyik autóban van”, a hosszabbítókból pedig három hiányzik. A szerszámnyilvántartás nem bizalmatlanság. Arról szól, hogy a szerszám ott legyen, ahol a munka van, és kiderüljön, ha nincs meg. Ebben a cikkben megmutatjuk, hogyan működik egy egyszerű szerszámkiadás nyilvántartás, és adunk hozzá kiadási napló mintát.</p>
<h2>Miért vesznek el a szerszámok?</h2>
<ul>
<li><strong>Nincs gazdája.</strong> Ha a szerszám „mindenkié”, senki nem felel azért, hogy visszakerüljön.</li>
<li><strong>Munkáról munkára vándorol.</strong> A raktár helyett az egyik munkáról egyenesen a következőre megy, vagy a kollégák autójában marad.</li>
<li><strong>Kölcsönadják.</strong> Az alvállalkozó vagy a másik brigád „csak egy napra” elviszi.</li>
<li><strong>Nem azonosítható.</strong> Öt egyforma sarokcsiszoló közül nem tudni, melyik a cégé, és melyik a kolléga sajátja.</li>
<li><strong>A hibás szerszám eltűnik.</strong> Aki elrontja, inkább félreteszi, mint hogy jelezze.</li>
</ul>
<h2>A szerszámkiadás nyilvántartás alapja: a kiadási napló</h2>
<p>A kiadási napló minden mozgásnál öt kérdésre felel:</p>
<ol>
<li><strong>Ki</strong> vitte el? Név, és ha van, a brigád.</li>
<li><strong>Mit</strong> vitt el? Megnevezés és azonosító: leltári vagy gyári szám.</li>
<li><strong>Mikor</strong> vitte el?</li>
<li><strong>Hova</strong> vitte? Melyik munkára, címre vagy autóba.</li>
<li><strong>Mikor hozta vissza</strong>, és milyen állapotban?</li>
</ol>
<p>A szabály egyszerű: szerszám csak bejegyzéssel hagyhatja el a raktárt, és csak bejegyzéssel kerülhet vissza. A drágább vagy kritikus szerszámoknál a kolléga aláírásával igazolja az átvételt. Ha egy szerszám tartósan egy kollégánál van (például a saját szerszámkészlete), azt ne a naplóban, hanem átadás-átvételi nyilatkozattal rendezze.</p>
<h2>Kiadási napló minta</h2>
<div class="template">
<p><strong>SZERSZÁMKIADÁSI NAPLÓ</strong></p>
<p>Telephely / raktár: ……………………… A napló vezetője: ………………………</p>
<table>
<thead><tr><th>Kiadás dátuma</th><th>Szerszám és azonosító</th><th>Átvevő</th><th>Munka / helyszín</th><th>Várható visszahozás</th><th>Visszahozva</th><th>Állapot visszahozáskor</th><th>Aláírás (ki / vissza)</th></tr></thead>
<tbody>
<tr><td>2026. dec. 7.</td><td>Akkus fúró-csavarozó, 2 akkuval, töltővel – SZ-0117</td><td>pl. brigádvezető neve</td><td>Fő utca 12., felújítás</td><td>2026. dec. 11.</td><td>2026. dec. 11.</td><td>Rendben, 1 akku hiányzik</td><td>……… / ………</td></tr>
<tr><td>………………</td><td>………………</td><td>………………</td><td>………………</td><td>………………</td><td>………………</td><td>………………</td><td>……… / ………</td></tr>
<tr><td>………………</td><td>………………</td><td>………………</td><td>………………</td><td>………………</td><td>………………</td><td>………………</td><td>……… / ………</td></tr>
</tbody>
</table>
<p>Hiány vagy sérülés esetén írja a bejegyzés mellé, kinek jelezte, és milyen intézkedés történt. A „Várható visszahozás” oszlop alapján hetente nézze át, mi késik.</p>
</div>
<h2>Címkézés: minden szerszámnak legyen azonosítója</h2>
<p>A napló csak akkor működik, ha a szerszámok megkülönböztethetők. Minden nagyobb értékű vagy gyakran mozgó szerszám kapjon leltári számot és tartós címkét, lehetőleg vonalkóddal vagy QR-kóddal. A kisebb, olcsó tételeket (bitkészlet, kézi fogók) elég csoportosan kezelni, ezeknél a darabszám a fontos, nem az egyed. A címke anyagáról és elhelyezéséről a <a href="/blog/qr-cimke-eszkozokre/">QR-címkékről szóló cikkünkben</a> írtunk.</p>
<h2>Időszakos felülvizsgálatot igénylő eszközök</h2>
<p>Egyes eszközöknél nem elég tudni, hol vannak: időnként felül is kell vizsgálni őket. A munkavédelemről szóló 1993. évi XCIII. törvény 23. § (1) bekezdése szerint (a cikk írásakor, 2026 októberében hatályos szöveg alapján) időszakos biztonsági felülvizsgálat alá kell vonni a veszélyes munkaeszközöket, továbbá azokat a munkaeszközöket, amelyek időszakos biztonsági felülvizsgálatát jogszabály, szabvány vagy a rendeltetésszerű és biztonságos használatra vonatkozó dokumentáció előírja. Ide tartozhat például számos elektromos kéziszerszám, vagy az emeléshez használt teherfelvevő eszközök (ezek vizsgálatáról az Emelőgép Biztonsági Szabályzat is rendelkezik).</p>
<p>Hogy pontosan melyik eszközére milyen felülvizsgálat vonatkozik, milyen gyakorisággal és ki végezheti, azt munkavédelmi szakemberrel tisztázza, és nézze meg a gyártói dokumentációt is. A nyilvántartásban a lényeg:</p>
<ul>
<li>jelölje meg, mely eszközök felülvizsgálat-kötelesek,</li>
<li>rögzítse az utolsó felülvizsgálat dátumát és a következő esedékességet,</li>
<li>csatolja a jegyzőkönyvet az eszközhöz,</li>
<li>a lejárt felülvizsgálatú szerszám ne legyen kiadható, ezt külön állapottal jelölje.</li>
</ul>
<h2>Ki felel a szerszámért?</h2>
<p>Érdemes kettéválasztani a felelőst és a használót. A <strong>felelős</strong> (például a raktáros vagy a brigádvezető) gondoskodik arról, hogy a szerszám megvan, működik, és időben felülvizsgálják. A <strong>használó</strong> az, akinél éppen van. A kiadáskor a szerszám a használóhoz kerül, a visszavételkor vissza a felelőshöz. A munkavállaló kártérítési felelősségének szabályait a Munka Törvénykönyve tartalmazza. A megőrzési felelősségről és a nyilatkozat tartalmáról a <a href="/blog/munkaeszkoz-atadas-atvetel/">munkaeszköz átadás-átvételéről szóló cikkünkben</a> írtunk. Mielőtt kártérítést érvényesítene, kérjen munkajogi tanácsot.</p>
<h2>Mikor nem elég már az Excel?</h2>
<ul>
<li>Több raktárból vagy autóból adnak ki szerszámot, és mindenhol más fájl él.</li>
<li>A napló a raktárban van, a szerszám a munkán, a bejegyzés pedig utólag, emlékezetből készül.</li>
<li>Nem látszik egy pillantással, mi van kint, és mi késik.</li>
<li>A felülvizsgálatok dátumai nem szólnak maguktól.</li>
<li>Egy szerszám előéletét (kiadások, javítások, költségek) nem lehet visszakeresni.</li>
</ul>
<h2>Szerszámnyilvántartás a Yardlyban</h2>
<p>A Yardly <a href="/megoldasaink/eszkoznyilvantartas/">eszköznyilvántartásában</a> a szerszámok saját kategóriát kaphatnak saját jellemzőkkel, és minden szerszámnál megadható a pontos hely, a felelős és a használó. A változások a változásnaplóban visszakövethetők (Üzleti csomagtól), a birtokos változása pedig elindíthat egy folyamatot, például egy átadás-átvételi elismervény elkészítését PDF-ben. A felülvizsgálati jegyzőkönyvet lejárattal csatolhatja, és a lejárat előtt e-mail érkezik. A hibát a kolléga az eszköz adatlapján jelentheti be, az éves leltárt pedig telefonnal, a címkék beolvasásával végezheti (<a href="/megoldasaink/leltar/">leltár telefonnal</a>, Üzleti csomagtól). A Prémium csomag analitikája jelzi azt az eszközt, amely 4-nél többször volt szervizben, vagy amelynek javítása már többe került, mint a beszerzése.</p>`,
  },
  {
    slug: "sofor-indulas-elotti-ellenorzes",
    date: "2026-12-29",
    minutes: 5,
    category: "fleet",
    solution: "allapotfelmeres",
    title: "Indulás előtti ellenőrzés: napi ellenőrző lista sofőröknek",
    excerpt: "Napi és heti ellenőrző lista sofőröknek a gumiktól a kötelező tartozékokig, bevezetési tippek, és mi legyen a talált hibával. Jogszabályi hivatkozásokkal.",
    body: `
<p>Az indulás előtti ellenőrzés két-három perc, és a legtöbb hibát még az udvaron kiszűri: a lapos gumit, a kiégett féklámpát, a hiányzó elakadásjelző háromszöget. A sofőr napi ellenőrző listája attól működik, hogy rövid, mindig ugyanaz, és következménye van, ha valaki hibát talál. Ebben a cikkben adunk egy napi és egy heti listát, megmutatjuk, mit ír elő a jogszabály a kötelező tartozékokról, és azt is, hogyan vezesse be úgy, hogy tényleg kitöltsék.</p>
<h2>Mit ír elő a jogszabály?</h2>
<p>A <a href="https://njt.jog.gov.hu/jogszabaly/1975-1-20-24">KRESZ</a> (1/1975. (II. 5.) KPM–BM együttes rendelet) 5. § (1) c) pontja szerint a közlekedésben csak olyan járművel szabad részt venni, amelynek műszaki, biztonsági és környezetvédelmi jellemzői megfelelnek a jogszabályban meghatározott feltételeknek. A felszereltségről a <a href="https://njt.jog.gov.hu/jogszabaly/1990-6-20-5E">6/1990. (IV. 12.) KöHÉM rendelet</a> rendelkezik. A cikk írásakor (2026. október) hatályos szöveg szerint:</p>
<ul>
<li><strong>Elakadásjelző háromszög:</strong> az oldalkocsi nélküli motorkerékpár kivételével minden gépjárművön készenlétben kell tartani egyet, jóváhagyási jellel (103. §).</li>
<li><strong>Elsősegélynyújtó felszerelés:</strong> a rendeletben meghatározott tartalommal, portól és víztől védett csomagolásban, a járművezető számára jól hozzáférhető helyen (106. §). Az egyes tartalmi elemek a gyártó által meghatározott időpontig alkalmazhatók, ezért a lejáratot is érdemes nézni.</li>
<li><strong>Kerékkitámasztó ék:</strong> legalább egy kell minden 3500 kg-ot meghaladó megengedett legnagyobb össztömegű járművön, és azon, amely ilyen pótkocsit vontathat (104. §).</li>
<li><strong>Tűzoltó készülék:</strong> a 3500 kg-ot meghaladó össztömegű tehergépkocsin 12 000 kg-ig legalább egy 6 kg-os, felette egy legalább 12 kg-os vagy két legalább 6 kg-os hordozható készülék (107. § (1)).</li>
<li><strong>Gumiabroncs:</strong> az előírt nyomást kell tartani (36. § (3)). Az M1 és N1 kategóriájú járműveken (személygépkocsi, legfeljebb 3,5 tonnás tehergépkocsi) a mintázat magasságának a teljes felületen el kell érnie az 1,6 mm-t (36. § (4)).</li>
</ul>
<p>A fényvisszaverő mellényről a KRESZ 21. § (12) bekezdése szól: lakott területen kívül az úttesten, a leállósávon vagy az útpadkán tartózkodó személynek éjszaka és korlátozott látási viszonyok esetén fényvisszaverő mellényt kell viselnie. Ezért érdemes minden autóban tartani egyet. Az Ön járműkategóriájára vonatkozó pontos előírásokat a rendelet szövegében ellenőrizze.</p>
<h2>A sofőr napi ellenőrző listája</h2>
<p>Az alábbi lista személyautóra és kisteherautóra készült. A napi rész két-három perc, a heti öt-tíz.</p>
<div class="template">
<p><strong>Indulás előtti ellenőrzés – napi</strong> (minden pontnál: Rendben / Hiba)</p>
<ol>
<li>Gumik: nincs lapos vagy láthatóan sérült abroncs.</li>
<li>Világítás: a tompított fényszóró, a helyzetjelző, a féklámpa és az irányjelző működik.</li>
<li>Figyelmeztető lámpák: gyújtás után nem marad égve piros vagy sárga jelzés.</li>
<li>Kilátás: a szélvédő ép, az ablaktörlő és a tükrök rendben vannak, van ablakmosó folyadék.</li>
<li>Az autó alatt nincs friss folt (olaj, hűtőfolyadék).</li>
<li>Rakomány: rögzítve van.</li>
<li>Km-óraállás: …………… km</li>
</ol>
<p><strong>Heti kiegészítés</strong></p>
<ol>
<li>Abroncsnyomás a gyártó által előírt értéken.</li>
<li>Mintázatmélység legalább 1,6 mm, nincs egyenetlen kopás.</li>
<li>Motorolaj, hűtőfolyadék és fékfolyadék a jelzések között, a kezelési útmutató szerint mérve.</li>
<li>Elakadásjelző háromszög megvan.</li>
<li>Elsősegélynyújtó felszerelés megvan, és nem járt le.</li>
<li>Fényvisszaverő mellény megvan.</li>
<li>3,5 tonna feletti tehergépkocsin: kerékkitámasztó ék és tűzoltó készülék megvan.</li>
<li>A rendszámtábla és a lámpák tiszták.</li>
</ol>
<p>Hiba esetén: mi a hiba, mikor vette észre, és egy fotó róla.</p>
</div>
<h2>Hogyan vezesse be, hogy tényleg megcsinálják?</h2>
<ul>
<li><strong>Rövid lista.</strong> A napi rész ne legyen hosszabb hét-nyolc pontnál. Ami ritkán változik, az kerüljön a heti listára.</li>
<li><strong>Telefonon, nem papíron.</strong> A papír a kesztyűtartóban marad, a telefon a sofőr zsebében van. Egy link, amely azonnal megnyílik, jobb, mint egy alkalmazás, amelybe be kell lépni.</li>
<li><strong>Fotó csak hibánál.</strong> Ha minden ponthoz fotó kell, a két percből tíz lesz. A hibáról viszont kérjen képet, mert a szerviznek is segít.</li>
<li><strong>Mindig ugyanakkor.</strong> Az első indulás előtt, a műszak kezdetén.</li>
<li><strong>Legyen következménye a jelzésnek.</strong> Ha a jelzett hibát kijavítják, és a sofőr erről visszajelzést kap, legközelebb is szólni fog. Ha semmi nem történik, abbahagyja.</li>
<li><strong>Ne büntesse a jelzést.</strong> A hibát bejelentő sofőr segít; az a kockázat, aki elhallgatja.</li>
<li><strong>Nézzen bele.</strong> A flottavezető hetente egyszer nézze át, ki mikor töltötte ki, és szóljon, ha valaki kimarad.</li>
</ul>
<h2>Mi legyen a talált hibával?</h2>
<p>A KRESZ 56. §-a szerint a vezető köteles a járművet haladéktalanul megállítani, ha olyan hibát észlel, amely balesethez vezethet, különösen ha elromlott a kormányszerkezet, az üzemi fékberendezés, az összes féklámpa, az irányjelző vagy a bal oldali első vagy hátsó helyzetjelző lámpa (a rendeletben felsorolt kivételekkel). Ilyen hibával a hiba elhárításáig közlekedni nem szabad. A közlekedés biztonságát közvetlenül nem veszélyeztető hibával fokozott óvatossággal a legközelebbi olyan helyig szabad menni, ahol a hiba elhárítható.</p>
<p>Erre építve érdemes három kategóriát előre rögzíteni a cég szabályai között:</p>
<table>
<thead><tr><th>Kategória</th><th>Példa</th><th>Teendő</th></tr></thead>
<tbody>
<tr><td>Nem indulhat</td><td>Fék, kormány, az összes féklámpa, irányjelző, lapos vagy sérült gumi, piros figyelmeztető lámpa, hiányzó kötelező tartozék</td><td>Az autó addig nem indul, amíg a hibát el nem hárítják, vagy a tartozékot nem pótolják; a flottavezető dönt a cserejárműről</td></tr>
<tr><td>Indulhat, de javítani kell</td><td>Egy kiégett izzó, amely nem tartozik a fenti körbe; a kezelési útmutató szerint nem sürgős sárga jelzés</td><td>Javítás határidővel, például 1–2 munkanapon belül</td></tr>
<tr><td>Következő szervizig</td><td>Kisebb karc, kopott ablaktörlő lapát</td><td>Feljegyzés, a következő szervizen elvégzik</td></tr>
</tbody>
</table>
<p>Minden hibának legyen gazdája és határideje, és a javítás kerüljön be a szerviznaplóba. Így a következő ellenőrzésnél látszik, hogy a hibát kijavították, és nem jelentik be újra.</p>
<h2>Mikor nem elég a papír vagy az Excel?</h2>
<p>Amíg öt autó van, egy papírlista is működhet. Ha viszont nem látszik, ki töltötte ki ma és ki nem, a hibajelzések SMS-ben és szóban érkeznek, és senki nem tudja visszakeresni, mikor jelezték először a kopó fékbetétet, akkor a lista már csak papíron létezik.</p>
<h2>Hogyan segít a Yardly?</h2>
<p>A Yardly <a href="/megoldasaink/allapotfelmeres/">telefonos állapotfelmérésében</a> a fenti listát a saját ellenőrzőlistájaként építheti fel, húzással, hat mezőtípussal. Járművenként ütemezheti: naponta, hetente, havonta, a hónap N-edik munkanapján vagy a hét egy adott napján. A sofőr e-mailben kap egy linket, és a telefonján tölti ki, bejelentkezés és alkalmazás nélkül; a link 30 napig érvényes. A kitöltésben szerepel az eredmény (Rendben vagy Hibát találtunk), a km-óraállás és a megjegyzés. Az előzmények a jármű adatlapján látszanak, minden kitöltés PDF-ben letölthető, a késedelmes felmérés pedig az irányítópulton és a riasztásokban is megjelenik.</p>
<p>Egy rögzített állapotfelmérés <a href="/megoldasaink/folyamatok/">folyamatot</a> is indíthat, például egy feladatot a flottavezetőnek, a javítást lezáró lépés pedig beírja a munkát a <a href="/megoldasaink/szerviz-karbantartas/">szerviznaplóba</a>. A bejelentkezett sofőr a jármű adatlapján bejelentést is tehet sürgősséggel (Ráér, Normál, Sürgős). Az állapotfelmérés az Üzleti csomagtól érhető el. A téli időszak teendőiről a <a href="/blog/teli-felkeszules-ceges-flotta/">téli felkészülésről szóló cikkünkben</a> olvashat.</p>`,
  },
  {
    slug: "raktarprogram-vagy-eszkoznyilvantarto",
    date: "2027-01-05",
    minutes: 4,
    category: "equipment",
    solution: "eszkoznyilvantartas",
    title: "Raktárprogram vagy eszköznyilvántartó: melyik kell a cégének?",
    excerpt: "Cikkszámos készlet vagy egyedi eszközök? Mikor kell raktárprogram, mikor eszköznyilvántartó, és mikor mindkettő – döntési kérdésekkel és táblázattal.",
    body: `
<p>„Kellene egy program a raktárra.” Ez a mondat két nagyon különböző igényt takarhat. Az egyik cég azt akarja tudni, hány doboz csavar és hány méter kábel van a polcon. A másik azt, hogy hol van a 3-as targonca, kinél van a lézeres szintező, és mikor esedékes a kompresszor szervize. Az első raktárprogramot (készletkezelőt) keres, a második eszköznyilvántartót. A „raktárprogram vagy eszköznyilvántartó” kérdést érdemes a választás előtt tisztázni, mert a rossz döntés mindkét irányban sok bosszúságot okoz.</p>
<h2>A különbség: mennyiség vagy egyed</h2>
<p>A készletkezelés <strong>mennyiségben</strong> gondolkodik. Egy cikkszámhoz tartozik egy darabszám, amely bevételezéskor nő, kivételezéskor csökken. Hogy melyik csavar melyik, az nem érdekes.</p>
<p>Az eszköznyilvántartás <strong>egyedekben</strong> gondolkodik. Minden eszköz önálló tétel saját gyári számmal, hellyel, felelőssel, állapottal és előélettel. Két ugyanolyan fúrógép két külön sor, mert az egyik szervizben van, a másik egy kollégánál.</p>
<h2>Mit tud egy raktárprogram?</h2>
<ul>
<li>cikkszámos törzsadatokat, mértékegységgel (db, m, kg, liter),</li>
<li>bevételezést szállítólevél vagy számla alapján,</li>
<li>kivételezést munkára, költséghelyre vagy vevőre,</li>
<li>aktuális készletszintet raktáranként,</li>
<li>minimumkészletet és utánrendelési jelzést,</li>
<li>készletmozgási kimutatásokat.</li>
</ul>
<p>Ez a fogyóanyagok, alkatrészek és áruk világa: ami elfogy, beépül vagy továbbértékesítik.</p>
<h2>Mit tud egy eszköznyilvántartó?</h2>
<ul>
<li>egyedi azonosítókat: gyári szám, leltári szám, vonalkód vagy QR-kód,</li>
<li>pontos helyet: telephely, raktár, helyiség, polc,</li>
<li>felelőst és használót, és hogy az eszköz mikor kihez került,</li>
<li>állapotot: használatban, javítás alatt, selejtezésre vár,</li>
<li>szervizbejegyzéseket, karbantartási ütemtervet, vizsgálatokat,</li>
<li>dokumentumokat lejárattal: gépkönyv, garancia, vizsgálati jegyzőkönyv.</li>
</ul>
<p>Ez a tartósan használt dolgok világa: targonca, gép, szerszám, laptop, mérőműszer. Ezek nem fogynak el, hanem gazdát cserélnek, elromlanak, javítják őket, és egyszer kiselejtezik.</p>
<h2>Raktárprogram vagy eszköznyilvántartó: összehasonlítás</h2>
<table>
<thead><tr><th>Szempont</th><th>Raktárprogram (készletkezelő)</th><th>Eszköznyilvántartó</th></tr></thead>
<tbody>
<tr><td>Egy tétel</td><td>Cikkszám, mennyiséggel</td><td>Egy konkrét, azonosítható eszköz</td></tr>
<tr><td>Fő kérdés</td><td>Mennyi van belőle?</td><td>Hol van, kinél van, milyen állapotban?</td></tr>
<tr><td>Tipikus tételek</td><td>Csavar, kábel, alkatrész, csomagolóanyag, áru</td><td>Targonca, gép, szerszám, laptop, mérőműszer</td></tr>
<tr><td>Mozgás</td><td>Bevételezés, kivételezés, átvezetés</td><td>Kiadás, visszavétel, áthelyezés, szerviz</td></tr>
<tr><td>Előzmények</td><td>Készletmozgások</td><td>Kinél volt, mikor javították, mennyibe került</td></tr>
<tr><td>Határidők</td><td>Utánrendelés</td><td>Karbantartás, vizsgálat, garancia lejárata</td></tr>
<tr><td>Leltár</td><td>Mennyiség számlálása cikkszámonként</td><td>Minden eszköz egyenkénti azonosítása</td></tr>
</tbody>
</table>
<h2>Döntési segéd: hat kérdés</h2>
<ol>
<li><strong>Számít, melyik darab melyik?</strong> Ha két darab között nincs különbség, készletről van szó. Ha számít, eszközről.</li>
<li><strong>Elfogy vagy visszajön?</strong> Ami beépül vagy elfogy, készlet. Ami használat után visszakerül, eszköz.</li>
<li><strong>Van gyári száma, és fontos?</strong> Ha a garancia, a szerviz vagy a vizsgálat miatt kell a gyári szám, az szinte mindig eszközt jelez.</li>
<li><strong>Gyakran kérdés, hogy kinél van?</strong> Ha ez naponta felmerül, eszköznyilvántartásra van szükség.</li>
<li><strong>Van karbantartása vagy időszakos vizsgálata?</strong> A fogyóanyagnak nincs, a targoncának, a kompresszornak és sok elektromos szerszámnak van.</li>
<li><strong>Mennyiségben rendel utána?</strong> Ha minimumkészletet figyel és rendszeresen utánrendel, készletkezelő kell.</li>
</ol>
<p>Ha a válaszok többsége az eszköz felé mutat, eszköznyilvántartóra van szüksége. Ha a készlet felé, raktárprogramra. Ha vegyes a kép, valószínűleg mindkettőre.</p>
<h2>A két leggyakoribb hiba</h2>
<p><strong>Az eszközt készletként vezetik.</strong> A táblázatban az áll: „fúrógép: 6 db”. Leltárkor kiderül, hogy csak négy van meg. De azt már senki nem tudja megmondani, melyik kettő hiányzik, kinél volt utoljára, és garanciális-e még. A mennyiség stimmelhet is, miközben a gépek fele javításra vár.</p>
<p><strong>A készletet eszközként vezetik.</strong> Ha minden doboz csavart, tekercs kábelt és csomag kesztyűt egyedi tételként vesz fel, a nyilvántartás könnyen több ezer sorra nő. Ezt senki nem fogja naprakészen tartani, és a fontos eszközök elvesznek a sorok között.</p>
<h3>Határesetek</h3>
<p>Vannak tételek, amelyek mindkét oldalra eshetnek: a targonca cserélhető akkumulátora, a tartalék alkatrész vagy egy mérőeszköz. Egy egyszerű szabály segít: ha gyári száma van, és figyelni kell a garanciáját, a karbantartását vagy azt, hogy kinél van, kezelje eszközként. Ha csak az számít, hány darab van belőle, kezelje készletként.</p>
<h2>Ha mindkettő kell</h2>
<p>Egy villanyszerelő cégnél a kábel, a kötőelem és a kismegszakító készlet, a fúrókalapács, a mérőműszer és a létra eszköz. Egy logisztikai cégnél a raklapfólia készlet, a targonca és a kézi vonalkódolvasó eszköz. Ilyenkor ne erőltesse a kettőt egy rendszerbe. Egy készletkezelőben az egyedi eszközök elvesznek a mennyiségek között, egy eszköznyilvántartóban pedig a fogyóanyag darabszámai nem követhetők rendesen. Ami közös lehet: ugyanazok a telephely- és raktárnevek, és ugyanaz a címkézési logika.</p>
<h2>Hol áll ebben a Yardly?</h2>
<p>A Yardly eszköznyilvántartó, nem raktári készletkezelő. Nincs benne cikkszámos, mennyiségi készlet, sem bevételezés és kivételezés, ezért fogyóanyagra és árukészletre nem ajánljuk. Az egyedi eszközöknél viszont ebben erős: az <a href="/megoldasaink/eszkoznyilvantartas/">eszköznyilvántartásban</a> kategóriánként saját jellemzőket adhat meg, és minden eszköznek van pontos helye a polcig, felelőse, használója, saját állapota, szerviznaplója és ütemterve. A leltárt telefonnal végezheti, QR- vagy vonalkóddal (<a href="/megoldasaink/leltar/">leltár telefonnal</a>, Üzleti csomagtól). Ha a szerszámai miatt keres megoldást, olvassa el a <a href="/blog/szerszamnyilvantartas/">szerszámnyilvántartásról szóló cikkünket</a>. Ha pedig a könyveléshez való viszony a kérdés, az <a href="/blog/eszkoznyilvantartas-vagy-targyi-eszkoz-konyveles/">eszköznyilvántartás és a tárgyi eszköz könyvelés különbségéről</a> is írtunk.</p>`,
  },
  {
    slug: "targonca-idoszakos-vizsgalat",
    date: "2027-01-07",
    minutes: 4,
    category: "equipment",
    solution: "eszkoznyilvantartas",
    title: "Targonca időszakos vizsgálat: határidők és nyilvántartás",
    excerpt: "Milyen vizsgálatok vonatkoznak a targoncára, mit kell dokumentálni, és hogyan figyelje a határidőket? Gyakorlati útmutató a targonca nyilvántartáshoz.",
    body: `
<p>A targonca a raktár egyik legfontosabb és legveszélyesebb munkaeszköze. Üzemeltetéséhez nem elég, hogy működik: időszakos vizsgálatok, karbantartás, kezelői jogosultságok és dokumentumok tartoznak hozzá. Ebben a cikkben megnézzük, miből áll a targonca időszakos vizsgálat, és hogyan érdemes a határidőket és a papírokat nyilvántartani. Fontos: ez gyakorlati áttekintés, nem szakértői vélemény. A saját targoncáira vonatkozó konkrét kötelezettségeket emelőgép-szakértővel tisztázza.</p>
<h2>Milyen szabály vonatkozik a targoncára?</h2>
<p>Az Emelőgép Biztonsági Szabályzatot a 47/1999. (VIII. 4.) GM rendelet adta ki. A szabályzat III. fejezete a gépi hajtású emelőberendezésekre terjed ki, a fogalmai között szerepel a gépi hajtású emelővillás targonca, és az emelőtargoncák kezeléséről külön pont szól. Az alábbiak a rendeletnek a <a href="https://njt.jog.gov.hu/jogszabaly/1999-47-20-83">Nemzeti Jogszabálytárban</a> olvasható, a cikk írásakor (2026. október) hatályos szövegén alapulnak. A szabályzat több ponton a vonatkozó nemzeti szabványokra és a gyártó utasításaira utal, ezeket is figyelembe kell venni.</p>
<h2>A targonca időszakos vizsgálat fajtái</h2>
<p>A szabályzat szerint időszakos vizsgálat az időszakos biztonsági felülvizsgálat, a szerkezeti vizsgálat és a fővizsgálat is. Ezek elvégzéséről vagy elvégeztetéséről – eltérő megállapodás hiányában – az emelőgép tulajdonosa gondoskodik.</p>
<ul>
<li><strong>Időszakos biztonsági felülvizsgálat:</strong> legalább ötévenként, illetve az emelőgép környezetének megváltozásakor kell elvégezni, kivéve, ha a gyártó ennél rövidebb gyakoriságot ír elő. Jegyzőkönyv készül róla, amelyet a vizsgálatot végző az aláírásával hitelesít.</li>
<li><strong>Szerkezeti vizsgálat és fővizsgálat:</strong> a módjukra és gyakoriságukra az adott emelőgépfajtára vonatkozó nemzeti szabványt vagy a gyártó utasítását kell figyelembe venni. A pontos gyakoriságot ezért a targonca típusa alapján, szakértővel vagy a gyártói dokumentációból állapítsa meg.</li>
</ul>
<p>A szabályzat azt is meghatározza, ki végezheti az egyes vizsgálatokat: emelőgép-szakértő, bizonyos esetekben emelőgép-ügyintéző vagy emelőgép-vizsgáló. A vizsgálatot végzőnek a vizsgálatot az emelőgép dokumentációjában kell rögzítenie, a jegyzőkönyv azonosítójára utalva. Az üzemeltetőnek pedig az ütemterv szerinti időszakos vizsgálatok és a javítások idejére fel kell függesztenie az emelőgép üzemeltetését.</p>
<h2>Műszakonkénti ellenőrzés és emelőgépnapló</h2>
<p>A gépi hajtású emelőgéphez naplót kell rendszeresíteni, és abban rögzíteni kell a műszakonkénti vizsgálatokat, az esetleges meghibásodásokat és azok elhárításának tényét. A kezelőnek minden műszak megkezdése előtt meg kell vizsgálnia a biztonságot érintő berendezések hatékonyságát. A hiányosságot jelentenie kell a felettesének, és be kell jegyeznie a naplóba. Ha a hiba a biztonságos üzemeltetést veszélyezteti, a gépet csak a hiba megszüntetése után helyezheti üzembe.</p>
<p>Hogy a naplót milyen formában vezeti, azt egyeztesse a szakértővel. Egy általános nyilvántartó szoftver nem helyettesíti automatikusan az emelőgépnaplót.</p>
<h2>Üzemóra alapú karbantartás</h2>
<p>A szabályzat szerint az üzemeltető gondoskodik a karbantartás szakszerű és rendszeres elvégzéséről, a karbantartó pedig bizonylatolja az elvégzett munkát, az időpontot, a felhasznált anyagokat, valamint a munkát végzők és az ellenőrzők nevét. A targoncák karbantartását a gyártók jellemzően üzemórához kötik, nem naptárhoz. A tervezéshez három adat kell: a gyártó által előírt intervallum, az aktuális üzemóraállás és az átlagos havi használat. Ezekből megbecsülhető, mikor esedékes a következő szerviz:</p>
<p class="formula">hátralévő idő (hónap) = hátralévő üzemóra ÷ átlagos havi üzemóra</p>
<p>Egy kitalált példa: ha a következő karbantartásig 360 üzemóra van hátra, és a targonca havonta átlagosan 120 üzemórát dolgozik, a szerviz nagyjából három hónap múlva esedékes. Az üzemóraállást érdemes rendszeresen, például hetente és minden szervizkor rögzíteni, különben a becslés elcsúszik.</p>
<h2>Kezelők jogosultságai</h2>
<p>Az üzemeltetőnek gondoskodnia kell arról, hogy az emelőgép kezelője a vonatkozó jogszabály szerint képesített személy legyen. A szabályzat szerint emelőgépet önállóan az kezelhet, aki betöltötte a 18. életévét vagy szakmunkás, előzetes és időszakos orvosi vizsgálat alapján alkalmas, és rendelkezik a szükséges gépkezelői jogosítvánnyal. A kezelőt munkába állás előtt és legalább hat hónapos távollét után munkavédelmi oktatásban kell részesíteni, ismétlődő, illetve rendkívüli oktatásban pedig évente legalább egyszer, valamint egy általa korábban nem kezelt típus kezelése előtt.</p>
<p>Kezelőnként ezért érdemes nyilvántartani a gépkezelői jogosítvány adatait, az orvosi alkalmasság érvényességét és az utolsó munkavédelmi oktatás dátumát. Azt is rögzítse írásban, név szerint, ki melyik targoncát kezelheti.</p>
<h2>Targonca nyilvántartás: mit őrizzen meg, és meddig?</h2>
<p>A szabályzat szerint az üzemeltető az emelőgép okmányait a kiselejtezéséig köteles megőrizni, különösen az időszakos vizsgálatok eredményeit, a karbantartási munkák és cserék bizonylatait és az emelőgépnaplókat. Az üzemeltetési dokumentációt és a nyilvántartást naprakészen kell vezetni, a használati utasításnak pedig a kiselejtezésig a kezelő rendelkezésére kell állnia. Targoncánként egy jó nyilvántartás tartalmazza:</p>
<ul>
<li>az azonosító adatokat: gyártó, típus, gyári szám, teherbírás, belső azonosító,</li>
<li>a használati utasítást és a gépkönyvet,</li>
<li>a munkavédelmi üzembe helyezés dokumentumait,</li>
<li>az időszakos vizsgálatok jegyzőkönyveit és a következő esedékességet,</li>
<li>a karbantartási bizonylatokat, üzemóraállással,</li>
<li>az emelőgépnaplót,</li>
<li>a kezelők listáját a jogosultságaikkal.</li>
</ul>
<h2>Mikor vonjon be emelőgép-szakértőt?</h2>
<ul>
<li>Új vagy használt targonca üzembe helyezésekor.</li>
<li>Amikor meg kell határozni, melyik vizsgálat milyen gyakorisággal esedékes az Ön gépeinél.</li>
<li>Ha a targonca környezete vagy felhasználása megváltozik.</li>
<li>Ha bizonytalan, megfelel-e a dokumentáció a szabályzatnak.</li>
</ul>
<p>A szabályzat szerint az üzemeltető a feladatait írásban átruházhatja az irányítása alá tartozó, megfelelő műszaki képesítésű személyre (például emelőgép-ügyintézőre), erre szakosodott szervezetre vagy emelőgép-szakértőre.</p>
<h2>Hogyan segít a Yardly?</h2>
<p>A Yardly nem végez vizsgálatot, és nem helyettesíti a szakértőt vagy az emelőgépnaplót. Abban segít, hogy a határidők és a dokumentumok ne csússzanak el. Az <a href="/megoldasaink/eszkoznyilvantartas/">eszköznyilvántartásban</a> a targoncák saját kategóriát kapnak saját jellemzőkkel (például teherbírás, üzemóraállás), szerviznaplóval és időalapú karbantartási ütemtervvel. A vizsgálati jegyzőkönyvet és a gépkönyvet a targoncához, a kezelők jogosítványát a kollégához csatolhatja <a href="/megoldasaink/dokumentumok/">dokumentumként</a>, lejárattal, és a lejárat előtt e-mailes riasztás érkezik. Üzemóra szerinti ütemtervet a Yardly nem számol: az üzemórás intervallumot a fenti képlettel váltsa át hónapokra, és ennek megfelelően állítsa be az ütemtervet. A használati adatokból való tervezésről a <a href="/blog/szervizidopontok-elorejelzese/">szervizidőpontok előrejelzéséről szóló cikkünkben</a> írtunk.</p>`,
  },
];
