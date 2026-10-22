// Blog posts, newest first. `solution` is the related solution page (content/solutions.mjs).
// Old URLs of removed posts are redirected in routes.mjs.

export const blog = {
  title: "Blog – flotta- és eszközkezelés a gyakorlatban",
  description: "Tippek, számolások és ellenőrzőlisták flottavezetőknek és raktárvezetőknek.",
  eyebrow: "Blog",
  h1: "Flotta- és eszközkezelés a gyakorlatban",
  lead: "Tippek, számolások és ellenőrzőlisták flottavezetőknek, raktárvezetőknek és mindenkinek, akinek elege van a táblázatokból.",
  all: "Összes",
  postCta: {
    title: "Ezt a Yardly magától csinálja.",
    text: "Próbálja ki 14 napig ingyen, a Prémium csomag minden funkciójával.",
    more: "Részletek",
  },
  relatedTitle: "Kapcsolódó cikkek",
};

export const categories = {
  fleet: "Flottakezelés",
  equipment: "Eszközpark és leltár",
  deadlines: "Határidők és dokumentumok",
  costs: "Költségek",
  news: "Termékújdonságok",
};

export const posts = [
  {
    slug: "dkv-integracio",
    date: "2026-10-20",
    minutes: 2,
    category: "news",
    solution: "tankolas-dkv",
    title: "Megérkezett a DKV-integráció: tankolások kézi rögzítés nélkül",
    excerpt: "A DKV-kártyás tankolások mostantól 6 óránként maguk kerülnek a járművekhez a Yardlyban.",
    body: `
<p>Eddig a DKV-kártyás tankolásokat kézzel vagy Excel-importtal kellett bevinni. Mostantól a Yardly maga hívja le őket a DKV-tól, és a megfelelő jármű tankolásai közé írja.</p>
<h2>Mit csinál?</h2>
<ul>
<li>6 óránként lekéri az új tranzakciókat, és bármikor kézzel is indítható.</li>
<li>A kártyát a DKV-nál rögzített rendszám alapján köti a járműhöz; ahol ez nem egyezik, kézzel választhat.</li>
<li>Minden tranzakcióból tankolás lesz a jármű adatlapján (mennyiség, összeg, kút, km-óra), „DKV” jelöléssel, így a költségekbe és a fogyasztásba is beleszámít.</li>
<li>Az AdBlue, az olaj és a mosás nem számít tankolásnak, az elektromos töltés külön jelölést kap.</li>
</ul>
<h2>Hogyan kapcsolja be?</h2>
<p>A Beállítások → Integrációk fülön adja meg a DKV-tól kapott API-hozzáférést, és egy gombbal próbálja ki a kapcsolatot. A titkos kulcsokat a rendszer titkosítva tárolja. Megadhatja azt is, melyik naptól hívja le a korábbi tranzakciókat.</p>
<h2>Melyik csomagban érhető el?</h2>
<p>Az Üzleti és a Prémium csomag tartalmazza. Az Alap csomaghoz kiegészítőként vehető meg, +9 990 Ft/hó + ÁFA áron.</p>`,
  },
  {
    slug: "flottakezeles-excelben",
    date: "2026-10-20",
    minutes: 5,
    category: "fleet",
    solution: "jarmunyilvantartas",
    title: "Flottakezelés Excelben: meddig működik, és mikor érdemes váltani?",
    excerpt: "Az Excel tíz autóig remek. Utána a verziók szaporodnak, a határidők csúsznak, és senki nem tudja, melyik a jó fájl.",
    body: `
<p>Szinte minden flotta egy táblázattal indul. Ez nem hiba: egy kis flottánál egy jól felépített Excel gyors, ingyenes és mindenki ért hozzá. Egy ponton túl viszont több időt visz el, mint amennyit megspórol. Az alábbi öt jel azt mutatja, hogy ez a pont már eljött.</p>
<h2>Öt jel, hogy kinőtte a táblázatot</h2>
<ol>
<li><strong>Több verzió él egyszerre.</strong> A flottavezetőnél, a pénzügyön és a telephelyen is van egy „aktuális” fájl, és nem egyeznek.</li>
<li><strong>A határidők fejben vannak.</strong> A táblázat tudja, mikor jár le a műszaki, de nem szól. Ha valaki szabadságra megy, a határidő vele megy.</li>
<li><strong>A költség becslés.</strong> A tankolás, a szerviz és a biztosítás külön fájlokban van, így egy autó valós havi költségét senki nem tudja megmondani.</li>
<li><strong>Nincs előzmény.</strong> Ki írta át a km-óraállást? Mikor volt az utolsó olajcsere? Egy táblázatban ezt nehéz visszakeresni.</li>
<li><strong>A terepen nem használható.</strong> A sofőr nem fogja telefonon egy 30 oszlopos táblázatban rögzíteni a tankolást.</li>
</ol>
<h2>Mibe kerül egy elfelejtett határidő?</h2>
<p>Egy lejárt műszaki miatt az autó nem mehet forgalomba, amíg nincs új vizsga. Ez kieső munkanapot, átszervezést és sürgősségi időpontot jelent, és ha az ellenőrzésnél derül ki, bírságot is. Egy elfelejtett biztosítási évforduló vagy szerviz ugyanígy többe kerül, mint a figyelése.</p>
<h2>Mit tudjon egy flottakezelő rendszer?</h2>
<ul>
<li>Minden jármű egy kereshető listában, saját adatlappal és előzményekkel.</li>
<li>Dokumentumok lejárattal, és riasztás e-mailben, mielőtt bármi lejár.</li>
<li>Km vagy idő szerinti karbantartási ütemterv.</li>
<li>Költségek automatikusan, járművenként, Ft/km-ben.</li>
<li>Telefonról is használható felület a sofőröknek.</li>
<li>Szerepkörök: mindenki azt látja, amire szüksége van.</li>
</ul>
<h2>Hogyan vigye át az adatokat egy délután alatt?</h2>
<p>A legtöbb rendszer, így a Yardly is, Excel-sablonnal tölthető fel. Töltse le a sablont, másolja bele a meglévő listáját (rendszám, márka, típus, évjárat, km-óra, telephely), és töltse fel. A Yardly a hiányzó telephelyeket és típusokat magától létrehozza, a hibás sorokat pedig soronként jelzi. Utána már csak a dokumentumokat és az ütemterveket kell feltenni, és a rendszer onnantól figyel Ön helyett.</p>`,
  },
  {
    slug: "lejarati-naptar-ceges-flotta",
    date: "2026-10-20",
    minutes: 5,
    category: "deadlines",
    solution: "dokumentumok",
    title: "Lejárati naptár céges flottának: forgalmi, műszaki, kötelező, casco",
    excerpt: "Egy 20 autós flottánál könnyen 80 határidő jön össze egy évben. Mutatjuk, hogyan lesz ebből egyetlen lista.",
    body: `
<p>Ha autónként csak négy évente ismétlődő dátummal számol (műszaki vizsga, kötelező biztosítási évforduló, casco és egy szerviz), egy 20 autós flottánál ez már 80 határidő egy évben. A téli és nyári gumicserét, a tachográf-kalibrálást és a sofőrök jogosítványait még nem is számoltuk.</p>
<h2>Mit érdemes nyilvántartani?</h2>
<p><strong>Járművenként:</strong></p>
<ul>
<li>forgalmi engedély,</li>
<li>műszaki vizsga,</li>
<li>kötelező gépjármű-felelősségbiztosítás és casco,</li>
<li>zöldkártya, ha az autó külföldre is jár,</li>
<li>bérleti vagy lízingszerződés,</li>
<li>időszakos szervizek és egyéb vizsgák (például tachográf).</li>
</ul>
<p><strong>Sofőrönként:</strong></p>
<ul>
<li>jogosítvány és kategóriái,</li>
<li>sofőrkártya és egyéb szakmai igazolványok, ha a munkához szükségesek.</li>
</ul>
<p>Az érvényességi időket és az Önre vonatkozó szabályokat mindig az aktuális jogszabályok és a szerződései alapján ellenőrizze. A lényeg az, hogy minden dátum egy helyen legyen, és a dokumentum is mellette.</p>
<h2>Hány nappal előtte szóljon a riasztás?</h2>
<p>Egy jól bevált beosztás: 30, 14, 7 és 1 nappal előtte. A 30 nap elég egy szervizidőpont vagy egy biztosítási ajánlat beszerzésére, az utolsó kettő pedig emlékeztető, ha valami mégis elcsúszott. A km-alapú szervizeknél a kilométer a fontos: érdemes 1000 km-rel előtte jelezni.</p>
<h2>Ki kapja az értesítést?</h2>
<p>A flottavezető mindig. A sofőrt akkor érdemes bevonni, ha neki is van teendője, például a saját jogosítványa vagy a hozzá rendelt autó műszakija miatt. Napi egy összesített e-mail jobb, mint tíz külön levél: azt elolvassák.</p>
<h2>Ellenőrzőlista az induláshoz</h2>
<ul>
<li>Gyűjtse össze az összes forgalmit, kötvényt és szerződést, autónként egy mappába.</li>
<li>Írja fel minden dokumentum lejárati dátumát.</li>
<li>Rögzítse a sofőrök jogosítványainak lejáratát.</li>
<li>Döntse el, hány nappal előtte és kinek szóljon a riasztás.</li>
<li>Jelöljön ki egy felelőst, aki a lejárt tételeket lezárja.</li>
</ul>
<p>A Yardlyban mindezt egy helyen teheti meg: a dokumentum a járműhöz vagy a sofőrhöz kerül, a lejáratot a rendszer figyeli, és a beállított napokon e-mailt küld.</p>`,
  },
  {
    slug: "ceges-auto-ft-km-koltseg",
    date: "2026-10-20",
    minutes: 6,
    category: "costs",
    solution: "koltsegek-riportok",
    title: "Mennyibe kerül valójában egy céges autó? A Ft/km kiszámítása",
    excerpt: "Az üzemanyag csak a költség egy része. A szerviz, a biztosítás és a bérleti díj nélkül a Ft/km sokkal szebb, mint a valóság.",
    body: `
<p>A céges autók költségéről a legtöbb helyen az üzemanyagszámla alapján beszélnek, mert az látszik minden hónapban. A teljes kép azonban ennél nagyobb, és csak akkor lehet jó döntést hozni, ha minden tétel egy helyen van.</p>
<h2>A költség elemei</h2>
<ul>
<li><strong>Üzemanyag vagy töltés:</strong> literben vagy kWh-ban, a tankolásokból.</li>
<li><strong>Szerviz és javítás:</strong> a szerviznapló tételei.</li>
<li><strong>Biztosítás:</strong> kötelező és casco.</li>
<li><strong>Bérleti vagy lízingdíj:</strong> ha nem saját az autó.</li>
<li><strong>Egyéb:</strong> gumi, tartozékok, kárügyek önrésze.</li>
</ul>
<h2>Példaszámítás egy autóra</h2>
<p>Egy kitalált, évi 40 000 km-t futó furgon egy évének költségei:</p>
<ul>
<li>üzemanyag: 2 000 000 Ft,</li>
<li>szerviz és javítás: 350 000 Ft,</li>
<li>biztosítás: 250 000 Ft,</li>
<li>bérleti díj: 12 × 120 000 Ft = 1 440 000 Ft.</li>
</ul>
<p class="formula">Ft/km = éves összes költség ÷ éves futás = 4 040 000 Ft ÷ 40 000 km ≈ 101 Ft/km</p>
<p>Ha csak az üzemanyagot nézzük, a szám 50 Ft/km lenne. A különbség kétszeres, és pont ez az, ami egy csere- vagy bérlési döntésnél számít.</p>
<h2>Hogyan hasonlítsa össze a flottát?</h2>
<p>Ugyanazzal a módszerrel számoljon minden autóra, ugyanarra az időszakra. Utána rangsorolja őket Ft/km szerint. A lista eleje és vége azonnal megmutatja, hol érdemes vizsgálódni. A flottaátlag is hasznos: ahhoz képest látszik, mi számít kiugrónak.</p>
<h2>Mikor gyanús egy kiugró érték?</h2>
<ul>
<li>Ha egy autó Ft/km-e legalább másfélszerese a flottaátlagnak.</li>
<li>Ha 12 hónap alatt 4-nél többször volt szervizben.</li>
<li>Ha a fogyasztása hirtelen megugrik: ez lehet műszaki hiba, de rossz rögzítés is.</li>
</ul>
<p>A Yardly ezt a számítást magától végzi a rögzített tankolásokból, szervizekből, biztosításokból és bérleti díjakból, és járművenként mutatja a havi, éves és teljes költséget, valamint a Ft/km-t.</p>`,
  },
  {
    slug: "qr-kodos-leltar",
    date: "2026-10-20",
    minutes: 5,
    category: "equipment",
    solution: "leltar",
    title: "Leltár egy óra alatt: QR-kódos eszköznyilvántartás lépésről lépésre",
    excerpt: "A leltár nem attól lesz pontos, hogy tovább tart. Hanem attól, hogy a leltározó nem látja előre a listát.",
    body: `
<p>A klasszikus leltár így néz ki: valaki kinyomtatja a listát, végigmegy a raktáron, és kipipálja, amit talál. Ez lassú, és van egy rejtett hibája is: aki a listát nézi, hajlamos azt is kipipálni, amit csak „biztosan ott van”.</p>
<h2>1. Címkézés</h2>
<p>Minden eszközre kerüljön egy címke QR-kóddal vagy vonalkóddal. Ha már van leltári szám vagy gyári vonalkód, nem kell újat nyomtatni: a Yardly a leltári számot, a vonalkódot, a gyári számot és a belső azonosítót is felismeri. A címkére érdemes a kód mellé olvashatóan is ráírni a leltári számot, hogy kézzel is beírható legyen.</p>
<h2>2. Kategóriák és helyek</h2>
<p>Építse fel a kategóriákat (targonca, kéziszerszám, informatika…) és a helyeket (telephely › raktár › helyiség › polc). Így a leltárt részletekben is el lehet végezni, például csak egy raktárra vagy egy kategóriára.</p>
<h2>3. A „vak” leltár</h2>
<p>A leltározó telefonja nem mutatja előre, mit kellene találnia. Csak beolvassa, ami előtte van. A rendszer a háttérben pipálja ki a tételeket, és a végén mutatja meg, mi került elő és mi nem. Így a számlálás valós, nem a lista megerősítése.</p>
<h2>4. A hiányzó tételek</h2>
<p>Ami nem került elő, nem feltétlenül veszett el. Lehet szervizben, kölcsönben vagy rossz helyen. A leltár végén minden hiányzó tételhez írjon megjegyzést, és jelölje meg, ha mégis megvan. A végeredmény PDF-ben is letölthető.</p>
<h2>Hogyan megy ez a Yardlyban?</h2>
<ol>
<li>Kiválasztja az eszközöket, és elküldi a leltárt egy kollégának.</li>
<li>Ő e-mailben kap egy linket, amely a telefonon azonnal megnyitja a kamerát. Bejelentkezni nem kell.</li>
<li>Végigmegy a raktáron, és beolvassa a címkéket. Címke nélküli tételhez kézi beírás, sötét helyen lámpa is van.</li>
<li>A végén rögzíti a leltárt, Ön pedig látja az eredményt.</li>
</ol>`,
  },
  {
    slug: "mikor-csereld-le-a-flotta-autoit",
    date: "2026-10-20",
    minutes: 4,
    category: "fleet",
    solution: "analitika",
    title: "Mikor cserélje le a flotta autóit? Adatalapú szempontok",
    excerpt: "Az „egész jól megy még” nem döntési szempont. A Ft/km és a szervizgyakoriság az.",
    body: `
<p>Egy autó cseréje drága döntés, ezért gyakran halogatjuk. Közben a régi autó egyre többe kerül: szervizben áll, javítani kell, és többet fogyaszt. A jó hír: a döntéshez szükséges adatok többnyire már megvannak, csak egy helyre kell tenni őket.</p>
<h2>A két legerősebb jel</h2>
<ol>
<li><strong>A Ft/km legalább másfélszerese a flottaátlagnak.</strong> Ha egy autó kilométerenként jóval többe kerül, mint a többi, az ritkán véletlen.</li>
<li><strong>12 hónap alatt 4-nél több szerviz.</strong> A gyakori szerviz nemcsak pénz, hanem kieső munkanap is.</li>
</ol>
<p>Egyik sem jelenti automatikusan, hogy cserélni kell. Azt jelentik, hogy érdemes megnézni az autót, és utánaszámolni.</p>
<h2>Egy példa</h2>
<p>Egy kitalált flottában az átlag 80 Ft/km. Az egyik furgon 130 Ft/km-en fut, és az elmúlt évben ötször volt szervizben. Ha a következő javítás ára közelít egy éves bérleti díjhoz, a csere valószínűleg olcsóbb.</p>
<h2>Javítás vagy csere?</h2>
<ul>
<li>Mennyibe kerül a következő javítás, és mennyit ér még az autó?</li>
<li>Hány munkanap esett ki szerviz miatt az elmúlt évben?</li>
<li>Mennyivel olcsóbb egy újabb autó fogyasztása és szervize?</li>
</ul>
<h2>Ugyanez targoncákra és gépekre</h2>
<p>Az eszközöknél a legjobb jel az, ha a javítási költség már meghaladta a beszerzési árat, vagy ha egy gép 4-nél többször volt szervizben. Ilyenkor ritkán éri meg tovább javítani.</p>
<p>A Yardly Prémium csomagja ezeket a szabályokat magától alkalmazza: a csereajánlások mellett az „Indoklás” oszlop megmondja, miért került egy jármű vagy eszköz a listára.</p>`,
  },
  {
    slug: "javitasok-jovahagyasa",
    date: "2026-10-20",
    minutes: 5,
    category: "fleet",
    solution: "folyamatok",
    title: "Jóváhagyás a javításokra: így tartsa kordában a szervizköltséget",
    excerpt: "Nem kell minden olajcserét jóváhagyni. De a 300 000 Ft-os javítást igen. Egy jól beállított folyamat ezt magától eldönti.",
    body: `
<p>A szervizköltség ott szokott elszaladni, ahol nincs szabály: valaki elviszi az autót, a szerviz megjavítja, és a számla utólag érkezik. Egy egyszerű jóváhagyási folyamat ezt megfordítja.</p>
<h2>Árajánlat, összeghatár, jóváhagyó</h2>
<p>A folyamat három kérdésre ad választ:</p>
<ul>
<li><strong>Ki kér árajánlatot?</strong> Általában a jármű felelőse vagy a diszpécser.</li>
<li><strong>Mekkora összegtől kell jóváhagyás?</strong> Például 100 000 Ft felett.</li>
<li><strong>Ki hagyja jóvá?</strong> A flottavezető, nagyobb összegnél az ügyvezető.</li>
</ul>
<h2>Kötelező dokumentumok</h2>
<p>A jóváhagyáshoz legyen kötelező az árajánlat feltöltése, a lezáráshoz pedig a számláé. Így minden javítás mögött ott a papír, és a könyvelésnek sem kell utánajárni.</p>
<h2>Mi történjen elutasításkor?</h2>
<p>Három jó válasz van: visszakerül javításra (például új árajánlatot kell kérni), egy külön ágon megy tovább (például másik szervizhez), vagy a folyamat lezárul. Érdemes előre eldönteni, melyik illik a céghez.</p>
<h2>Egy minta folyamat</h2>
<ol>
<li><strong>Indítás:</strong> bejelentésből vagy egy esedékes ütemtervből.</li>
<li><strong>Árajánlat kérése:</strong> a felelős feltölti az ajánlatot és beírja az összeget.</li>
<li><strong>Feltétel:</strong> 100 000 Ft felett jóváhagyás kell, alatta mehet tovább.</li>
<li><strong>Vezetői jóváhagyás:</strong> jóváhagyja vagy elutasítja.</li>
<li><strong>Javítás:</strong> szervizbe vinni, javítás.</li>
<li><strong>Lezárás:</strong> a számla feltöltése, és a munka bekerül a szerviznaplóba.</li>
</ol>
<p>A Yardly folyamatszerkesztőjében ezt egy vásznon rakja össze, vagy a kész „Járműjavítás jóváhagyással” sablonból indul. Minden lépés a felelőse Teendőim listájában vár, a lezárás pedig magától beírja a munkát és a költséget a szerviznaplóba.</p>`,
  },
  {
    slug: "szervizidopontok-elorejelzese",
    date: "2026-10-12",
    minutes: 4,
    category: "fleet",
    solution: "szerviz-karbantartas",
    title: "Szervizidőpontok előrejelzése a meglévő használati adatokból",
    excerpt: "A km- vagy üzemóra-alapú karbantartás nehezen tervezhető naptárban. Egy egyszerű, átlátható számítással mégis megbecsülhető, mikor esedékes a következő szerviz.",
    body: `
<p>A járművek és targoncák karbantartása jellemzően nem naptári dátumhoz, hanem futásteljesítményhez kötött: egy olajcsere bizonyos kilométerenként, egy targoncaszerviz bizonyos üzemóránként esedékes. Ez műszakilag pontos, a tervezést viszont megnehezíti. A kérdés ugyanis nem az, hány kilométer van hátra, hanem az, hogy melyik héten kell a gépet kivenni a munkából.</p>
<h2>A számítás egyszerűbb, mint gondolná</h2>
<p>Ha megvannak a korábbi km-óraállások vagy üzemóra-adatok, a becslés egyetlen osztás:</p>
<p class="formula">becsült hátralévő idő = hátralévő futásteljesítmény ÷ átlagos havi futásteljesítmény</p>
<p>Ha például egy járműnek 2 000 km van hátra a következő olajcseréig, és havonta átlagosan 1 850 km-t fut, akkor nagyjából egy hónap múlva esedékes a szerviz. Ezt a dátumot már be lehet tervezni, egyeztetni lehet a szervizpartnerrel, és időben lehet helyettesítő járművet szervezni.</p>
<h2>Miért fontos, hogy átlátható legyen?</h2>
<p>Egy előrejelzés csak akkor hasznos, ha a karbantartási felelős megérti és elfogadja. Ezért jobb a saját, historikus adatokból számolt, ellenőrizhető becslés, mint egy fekete doboz. Ha egy jármű szokatlanul sokat fut egy hónapban, a becsült dátum is közelebb kerül, és látszik, miért.</p>
<h2>Mire van szükség hozzá?</h2>
<ul>
<li>rendszeresen rögzített km-óraállásra vagy üzemórára, például tankoláskor,</li>
<li>karbantartási ütemtervre: mi és milyen gyakorisággal esedékes,</li>
<li>egy helyre, ahol az adatok összeérnek, és a számítás naponta frissül.</li>
</ul>
<p>Egyik logisztikai partnerünknél a gépjárműpark kötelező szervizeinek időpontját a meglévő futásadatokból és a használati szokásokból becsüljük. A karbantartás így tervezhető feladat lett, nem meglepetés.</p>`,
  },
];
