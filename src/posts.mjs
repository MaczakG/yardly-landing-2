// Blog posts. Each post has a slug, title, excerpt and body per language.
// Newest first. Bodies are trusted HTML.
export const posts = [
  {
    id: "excel",
    date: "2026-10-12",
    minutes: 4,
    slug: {
      hu: "karbantartas-nyilvantartasa-excel-helyett",
      en: "maintenance-tracking-beyond-excel",
      de: "wartungsdokumentation-statt-excel",
    },
    title: {
      hu: "Karbantartás nyilvántartása Excel helyett: mikor érdemes váltani?",
      en: "Tracking maintenance beyond Excel: when is it time to switch?",
      de: "Wartung jenseits von Excel: Wann lohnt sich der Umstieg?",
    },
    excerpt: {
      hu: "Az Excel jó kiindulópont, de egy ponton túl több időt visz el, mint amennyit megspórol. Öt jel, hogy ideje rendszerbe szervezni a karbantartást.",
      en: "Excel is a good place to start, but at some point it costs more time than it saves. Five signs it's time to put maintenance into a system.",
      de: "Excel ist ein guter Anfang, kostet aber irgendwann mehr Zeit, als es spart. Fünf Anzeichen dafür, dass die Wartung in ein System gehört.",
    },
    body: {
      hu: `
<p>A legtöbb cégnél a karbantartás nyilvántartása egy táblázattal kezdődik. Ez érthető: gyorsan elkészül, mindenki ismeri, és eleinte bőven elég. A gond akkor kezdődik, amikor a járművek, targoncák és gépek száma nő, és a táblázatot már csak egy-két ember érti igazán.</p>
<h2>Öt jel, hogy kinőtték az Excelt</h2>
<ol>
<li><strong>Egy ellenőrzés fél napig tart.</strong> Ha az áttekintéshez több fület, szűrőt és kézi számolást kell végigjárni, az idő nem a karbantartásra megy el, hanem az adminisztrációra.</li>
<li><strong>Nincs kimutatás.</strong> Arra a kérdésre, hogy mennyibe kerül egy targonca évente, vagy melyik jármű áll a legtöbbet szervizben, csak órák munkájával lehet válaszolni.</li>
<li><strong>Nem nyúlhat bele bárki.</strong> A tábla annyira összetett, hogy egy rossz helyre írt érték elronthat egy képletet, ezért csak kevesen szerkeszthetik.</li>
<li><strong>A határidőket fejben kell tartani.</strong> A táblázat nem szól, ha lejár egy vizsga, vagy közeleg egy szerviz. Ha a felelős szabadságra megy, a figyelés is megáll.</li>
<li><strong>Ugyanazt több helyre kell beírni.</strong> Az alapadatok egy része már megvan más rendszerekben, mégis kézzel kerülnek át a táblázatba.</li>
</ol>
<h2>Mit érdemes elvárni egy rendszertől?</h2>
<p>Nem feltétlenül egy új, mindent lecserélő szoftverre van szükség. Sokszor elég, ha a meglévő adatok egy helyre kerülnek, és a rendszer elvégzi a gépies részt:</p>
<ul>
<li>kiszámolja az esedékességet km-óraállás, üzemóra vagy dátum alapján,</li>
<li>időben és több lépcsőben értesít,</li>
<li>megőrzi az elvégzett munkák és a költségek előzményeit,</li>
<li>gombnyomásra kimutatást készít,</li>
<li>szerepkörönként szabályozza, ki mit láthat és módosíthat.</li>
</ul>
<h2>Egy példa a gyakorlatból</h2>
<p>Egy gyógyszer-, növényvédőszer- és italáru-logisztikával foglalkozó partnerünk a raktári targoncák és eszközök karbantartását egy összetett Excel-táblában vezette. A folyamat automatizálása után a karbantartás havi adminisztrációja 8 óráról 10 percre csökkent.</p>
<h2>Hogyan érdemes elkezdeni?</h2>
<p>Az első lépés egy egyszerű felmérés: mely eszközökről, milyen határidőkről és milyen adatforrásokról van szó. Ebből kiderül, hol vész el a legtöbb idő, és melyik folyamatot érdemes elsőként automatizálni.</p>`,
      en: `
<p>At most companies, maintenance tracking starts with a spreadsheet. That makes sense: it's quick to set up, everyone knows how to use it, and at first it's more than enough. The trouble starts when the number of vehicles, forklifts and machines grows and only one or two people really understand the file.</p>
<h2>Five signs you've outgrown Excel</h2>
<ol>
<li><strong>A check takes half a day.</strong> If a review means going through several tabs, filters and manual calculations, the time goes into admin, not maintenance.</li>
<li><strong>There are no reports.</strong> Answering how much a forklift costs per year, or which vehicle spends the most time in the workshop, takes hours of work.</li>
<li><strong>Not everyone can touch it.</strong> The file is so complex that one value in the wrong cell can break a formula, so only a few people are allowed to edit it.</li>
<li><strong>Deadlines live in someone's head.</strong> A spreadsheet doesn't warn you when an inspection expires or a service is due. When the person in charge is on holiday, the monitoring stops too.</li>
<li><strong>The same data is typed in several times.</strong> Part of the master data already exists in other systems, yet it is copied into the spreadsheet by hand.</li>
</ol>
<h2>What to expect from a system</h2>
<p>You don't necessarily need new software that replaces everything. Often it's enough to bring existing data into one place and let the system do the repetitive part:</p>
<ul>
<li>calculate due dates by mileage, operating hours or calendar,</li>
<li>send reminders in good time and in several steps,</li>
<li>keep the history of completed work and costs,</li>
<li>produce reports at the push of a button,</li>
<li>control who can see and change what, per role.</li>
</ul>
<h2>An example from practice</h2>
<p>A logistics client handling pharmaceuticals, crop protection products and beverages tracked maintenance for its warehouse forklifts and equipment in a complex spreadsheet. After the process was automated, monthly maintenance admin went from 8 hours to 10 minutes.</p>
<h2>How to get started</h2>
<p>The first step is a simple assessment: which assets, which deadlines and which data sources are involved. That shows where most time is lost and which process is worth automating first.</p>`,
      de: `
<p>In den meisten Unternehmen beginnt die Wartungsdokumentation mit einer Tabelle. Das ist verständlich: Sie ist schnell angelegt, alle kennen sie, und anfangs reicht sie völlig aus. Schwierig wird es, wenn die Zahl der Fahrzeuge, Stapler und Maschinen wächst und nur noch ein oder zwei Personen die Datei wirklich verstehen.</p>
<h2>Fünf Anzeichen, dass Sie Excel entwachsen sind</h2>
<ol>
<li><strong>Eine Prüfung dauert einen halben Tag.</strong> Wenn eine Übersicht mehrere Reiter, Filter und Handrechnungen erfordert, fließt die Zeit in die Verwaltung statt in die Wartung.</li>
<li><strong>Es gibt keine Auswertungen.</strong> Was ein Stapler pro Jahr kostet oder welches Fahrzeug am häufigsten in der Werkstatt steht, lässt sich nur mit stundenlanger Arbeit beantworten.</li>
<li><strong>Nicht jeder darf daran arbeiten.</strong> Die Datei ist so komplex, dass ein Wert in der falschen Zelle eine Formel zerstören kann. Deshalb dürfen nur wenige sie bearbeiten.</li>
<li><strong>Fristen stecken im Kopf.</strong> Eine Tabelle meldet sich nicht, wenn eine Prüfung abläuft oder ein Service ansteht. Ist die zuständige Person im Urlaub, ruht auch die Überwachung.</li>
<li><strong>Dieselben Daten werden mehrfach erfasst.</strong> Ein Teil der Stammdaten liegt bereits in anderen Systemen und wird trotzdem von Hand übertragen.</li>
</ol>
<h2>Was ein System leisten sollte</h2>
<p>Es muss nicht unbedingt eine neue Software sein, die alles ersetzt. Oft reicht es, die vorhandenen Daten an einem Ort zusammenzuführen und dem System die Routinearbeit zu überlassen:</p>
<ul>
<li>Fälligkeiten nach Kilometerstand, Betriebsstunden oder Datum berechnen,</li>
<li>rechtzeitig und mehrstufig erinnern,</li>
<li>die Historie erledigter Arbeiten und Kosten bewahren,</li>
<li>Berichte auf Knopfdruck erstellen,</li>
<li>pro Rolle regeln, wer was sehen und ändern darf.</li>
</ul>
<h2>Ein Beispiel aus der Praxis</h2>
<p>Ein Logistikkunde für Arzneimittel, Pflanzenschutzmittel und Getränke führte die Wartung seiner Stapler und Lagertechnik in einer komplexen Excel-Tabelle. Nach der Automatisierung sank der monatliche Verwaltungsaufwand für die Wartung von 8 Stunden auf 10 Minuten.</p>
<h2>Wie Sie am besten anfangen</h2>
<p>Der erste Schritt ist eine einfache Bestandsaufnahme: Um welche Geräte, Fristen und Datenquellen geht es? Daraus wird sichtbar, wo die meiste Zeit verloren geht und welcher Ablauf sich zuerst zu automatisieren lohnt.</p>`,
    },
  },
  {
    id: "forecast",
    date: "2026-10-12",
    minutes: 3,
    slug: {
      hu: "szervizidopontok-elorejelzese",
      en: "forecasting-service-dates",
      de: "servicetermine-prognostizieren",
    },
    title: {
      hu: "Szervizidőpontok előrejelzése a meglévő használati adatokból",
      en: "Forecasting service dates from the usage data you already have",
      de: "Servicetermine aus vorhandenen Nutzungsdaten prognostizieren",
    },
    excerpt: {
      hu: "A km- vagy üzemóra-alapú karbantartás nehezen tervezhető naptárban. Egy egyszerű, átlátható számítással mégis megbecsülhető, mikor esedékes a következő szerviz.",
      en: "Mileage- or hours-based maintenance is hard to plan in a calendar. A simple, transparent calculation shows when the next service will be due.",
      de: "Kilometer- oder stundenbasierte Wartung lässt sich schwer im Kalender planen. Eine einfache, nachvollziehbare Rechnung zeigt, wann der nächste Service fällig ist.",
    },
    body: {
      hu: `
<p>A járművek és targoncák karbantartása jellemzően nem naptári dátumhoz, hanem futásteljesítményhez kötött: egy olajcsere bizonyos kilométerenként, egy targoncaszerviz bizonyos üzemóránként esedékes. Ez műszakilag pontos, a tervezést viszont megnehezíti. A kérdés ugyanis nem az, hány kilométer van hátra, hanem az, hogy melyik héten kell a gépet kivenni a munkából.</p>
<h2>A számítás egyszerűbb, mint gondolná</h2>
<p>Ha rendelkezésre állnak a korábbi km-óraállások vagy üzemóra-adatok, a becslés egyetlen osztás:</p>
<p class="formula">becsült hátralévő idő = hátralévő futásteljesítmény ÷ átlagos havi futásteljesítmény</p>
<p>Ha például egy járműnek 2 000 km van hátra a következő olajcseréig, és havonta átlagosan 1 850 km-t fut, akkor nagyjából egy hónap múlva esedékes a szerviz. Ezt a dátumot már be lehet tervezni, egyeztetni lehet a szervizpartnerrel, és időben lehet helyettesítő járművet szervezni.</p>
<h2>Miért fontos, hogy átlátható legyen?</h2>
<p>Egy előrejelzés csak akkor hasznos, ha a karbantartási felelős megérti és elfogadja. Ezért jobb a saját, historikus adatokból számolt, ellenőrizhető becslés, mint egy fekete doboz. Ha egy jármű szokatlanul sokat fut egy hónapban, a becsült dátum is közelebb kerül, és látszik, miért.</p>
<h2>Mire van szükség hozzá?</h2>
<ul>
<li>rendszeresen rögzített km-óraállásra vagy üzemórára, például tankoláskor vagy a meglévő rendszerekből,</li>
<li>karbantartási ütemtervre: mi és milyen gyakorisággal esedékes,</li>
<li>egy helyre, ahol az adatok összeérnek, és a számítás naponta frissül.</li>
</ul>
<p>Egyik logisztikai partnerünknél a gépjárműpark kötelező szervizeinek időpontját a meglévő futásadatokból és a használati szokásokból becsüljük. A karbantartás így tervezhető feladat lett, nem meglepetés.</p>`,
      en: `
<p>Maintenance for vehicles and forklifts is usually tied to usage rather than to a calendar date: an oil change is due after a certain mileage, a forklift service after a certain number of operating hours. That's technically correct, but it makes planning hard. The real question isn't how many kilometres are left, but in which week the machine has to come out of service.</p>
<h2>The calculation is simpler than you think</h2>
<p>If you have past odometer readings or operating hours, the estimate is a single division:</p>
<p class="formula">estimated time remaining = usage remaining ÷ average monthly usage</p>
<p>For example, if a vehicle has 2,000 km left until its next oil change and covers 1,850 km a month on average, the service will be due in roughly a month. That date can go in the calendar, be agreed with the workshop, and a replacement vehicle can be arranged in time.</p>
<h2>Why it needs to be transparent</h2>
<p>A forecast is only useful if the maintenance lead understands and trusts it. That's why an estimate calculated from your own history, which anyone can check, beats a black box. If a vehicle runs unusually far one month, the estimated date moves closer, and it's clear why.</p>
<h2>What you need</h2>
<ul>
<li>regularly recorded mileage or operating hours, for example at refuelling or from existing systems,</li>
<li>a maintenance schedule: what is due, and how often,</li>
<li>one place where the data comes together and the calculation updates every day.</li>
</ul>
<p>For one of our logistics clients, we estimate the dates of mandatory fleet services from existing mileage data and usage patterns. Maintenance has become something you plan, not a surprise.</p>`,
      de: `
<p>Die Wartung von Fahrzeugen und Staplern hängt meist nicht an einem Kalenderdatum, sondern an der Nutzung: Ein Ölwechsel ist nach einer bestimmten Kilometerzahl fällig, ein Staplerservice nach einer bestimmten Zahl von Betriebsstunden. Das ist technisch korrekt, erschwert aber die Planung. Denn die eigentliche Frage ist nicht, wie viele Kilometer noch bleiben, sondern in welcher Woche die Maschine aus dem Betrieb genommen werden muss.</p>
<h2>Die Rechnung ist einfacher, als man denkt</h2>
<p>Liegen frühere Kilometerstände oder Betriebsstunden vor, genügt für die Schätzung eine einzige Division:</p>
<p class="formula">geschätzte Restzeit = verbleibende Laufleistung ÷ durchschnittliche Laufleistung pro Monat</p>
<p>Hat ein Fahrzeug zum Beispiel noch 2.000 km bis zum nächsten Ölwechsel und fährt im Schnitt 1.850 km im Monat, ist der Service in etwa einem Monat fällig. Dieser Termin lässt sich einplanen, mit der Werkstatt abstimmen, und ein Ersatzfahrzeug kann rechtzeitig organisiert werden.</p>
<h2>Warum Nachvollziehbarkeit wichtig ist</h2>
<p>Eine Prognose nützt nur, wenn die Wartungsverantwortlichen sie verstehen und ihr vertrauen. Deshalb ist eine Schätzung aus den eigenen Verlaufsdaten, die jeder prüfen kann, besser als eine Blackbox. Fährt ein Fahrzeug in einem Monat ungewöhnlich viel, rückt der geschätzte Termin näher, und man sieht, warum.</p>
<h2>Was Sie dafür brauchen</h2>
<ul>
<li>regelmäßig erfasste Kilometerstände oder Betriebsstunden, etwa beim Tanken oder aus bestehenden Systemen,</li>
<li>einen Wartungsplan: was fällig ist und in welchem Abstand,</li>
<li>einen Ort, an dem die Daten zusammenlaufen und die Berechnung täglich aktualisiert wird.</li>
</ul>
<p>Bei einem unserer Logistikkunden schätzen wir die Termine der Pflichtservices für den Fuhrpark aus vorhandenen Kilometerdaten und Nutzungsmustern. Wartung ist dadurch planbar geworden, statt zu überraschen.</p>`,
    },
  },
  {
    id: "extend",
    date: "2026-10-12",
    minutes: 4,
    slug: {
      hu: "kiegeszites-vagy-csere",
      en: "extend-or-replace",
      de: "erweitern-oder-ersetzen",
    },
    title: {
      hu: "Kiegészíteni vagy lecserélni? A meglévő rendszerek bővítése egyedi modulokkal",
      en: "Extend or replace? Adding custom modules to the systems you already run",
      de: "Erweitern oder ersetzen? Bestehende Systeme mit individuellen Modulen ergänzen",
    },
    excerpt: {
      hu: "Ha egy vállalati rendszer nem tud mindent, amire szükség van, nem kell feltétlenül lecserélni. Gyakran olcsóbb és gyorsabb kiegészíteni.",
      en: "If a business system can't do everything you need, it doesn't have to be replaced. Extending it is often cheaper and faster.",
      de: "Wenn ein Unternehmenssystem nicht alles kann, was Sie brauchen, muss es nicht ersetzt werden. Eine Ergänzung ist oft günstiger und schneller.",
    },
    body: {
      hu: `
<p>Szinte minden cégnél előfordul: a vállalatirányítási rendszer, a raktárkezelő vagy a dokumentumkezelő jól végzi a dolgát, de egy-egy folyamatot nem fed le. A hiányzó részt ilyenkor táblázatok, e-mailek és kézi egyeztetések pótolják.</p>
<h2>Miért nem mindig a csere a megoldás?</h2>
<p>Egy nagy rendszer lecserélése vagy átszabása hosszú és költséges projekt. A meglévő rendszerek mögött évek tapasztalata, betanított munkatársak és jól működő folyamatok állnak. Ha csak egy szelet hiányzik, aránytalan az egészet felforgatni. A nagy szoftverek gyártói ráadásul ritkán fejlesztenek egyetlen ügyfél kedvéért.</p>
<h2>Mit jelent a kiegészítés a gyakorlatban?</h2>
<p>A kiegészítő alkalmazás a meglévő rendszerek mellé épül. Onnan veszi az alapadatokat, ahol azok ma is vannak, és csak azt teszi hozzá, ami hiányzik:</p>
<ul>
<li>a cég saját üzleti szabályait, például hogy mikor, kinek és milyen jóváhagyással induljon egy karbantartás,</li>
<li>az automatikus értesítéseket és a határidők figyelését,</li>
<li>átlátható felületet azoknak, akik a folyamatot napi szinten viszik,</li>
<li>riportokat, amelyek több rendszer adatait összesítik.</li>
</ul>
<h2>Mikor jó választás?</h2>
<p>A kiegészítés akkor működik jól, ha a meglévő rendszerek stabilak, és a hiány egy jól körülhatárolható folyamatban jelentkezik. Ha viszont maga a fő rendszer is elavult vagy nem bővíthető, érdemes nagyobb lépésben gondolkodni. Ezt a felmérés során közösen tisztázzuk.</p>
<h2>Egy példa</h2>
<p>Egyik logisztikai partnerünknél az eszköznyilvántartás, a dokumentumkezelés, az üzemanyagkártya-adatok és az árfolyamadatok már különböző rendszerekben voltak meg. A Yardly ezek mellé épült be: összeköti az adatokat, automatizálja a karbantartási folyamatot, és folyamatosan riportot készít.</p>`,
      en: `
<p>It happens at almost every company: the ERP, the warehouse system or the document management system does its job well, but doesn't cover one particular process. The gap gets filled with spreadsheets, e-mails and manual coordination.</p>
<h2>Why replacing isn't always the answer</h2>
<p>Replacing or reworking a large system is a long and expensive project. Existing systems carry years of experience, trained staff and processes that work. If only one piece is missing, overhauling everything is out of proportion. And vendors of large software rarely build features for a single client.</p>
<h2>What extending means in practice</h2>
<p>An extension is built alongside your existing systems. It takes master data from where it already lives and adds only what's missing:</p>
<ul>
<li>your own business rules, such as when, for whom and with which approval a maintenance job starts,</li>
<li>automatic notifications and deadline tracking,</li>
<li>a clear interface for the people who run the process every day,</li>
<li>reports that combine data from several systems.</li>
</ul>
<h2>When it's the right choice</h2>
<p>Extending works well when the existing systems are stable and the gap sits in a clearly defined process. If the main system itself is outdated or can't be extended, it's worth thinking bigger. We clarify this together during the assessment.</p>
<h2>An example</h2>
<p>At one of our logistics clients, the asset register, document management, fuel card data and exchange rates already lived in separate systems. Yardly was added alongside them: it connects the data, automates the maintenance process and produces continuous reports.</p>`,
      de: `
<p>Das kennt fast jedes Unternehmen: Das ERP, die Lagerverwaltung oder das Dokumentensystem erfüllt seine Aufgabe gut, deckt aber einen bestimmten Ablauf nicht ab. Die Lücke füllen dann Tabellen, E-Mails und manuelle Abstimmungen.</p>
<h2>Warum Ersetzen nicht immer die Lösung ist</h2>
<p>Ein großes System zu ersetzen oder umzubauen, ist ein langes und teures Projekt. Hinter bestehenden Systemen stehen jahrelange Erfahrung, geschulte Mitarbeitende und funktionierende Abläufe. Fehlt nur ein Baustein, ist es unverhältnismäßig, alles umzukrempeln. Zudem entwickeln Hersteller großer Software selten Funktionen für einen einzelnen Kunden.</p>
<h2>Was Ergänzen in der Praxis bedeutet</h2>
<p>Eine Ergänzung entsteht neben Ihren bestehenden Systemen. Sie übernimmt die Stammdaten dort, wo sie heute liegen, und fügt nur hinzu, was fehlt:</p>
<ul>
<li>Ihre eigenen Geschäftsregeln, etwa wann, für wen und mit welcher Freigabe ein Wartungsauftrag startet,</li>
<li>automatische Benachrichtigungen und Fristüberwachung,</li>
<li>eine übersichtliche Oberfläche für alle, die den Ablauf täglich betreuen,</li>
<li>Berichte, die Daten aus mehreren Systemen zusammenführen.</li>
</ul>
<h2>Wann es die richtige Wahl ist</h2>
<p>Eine Ergänzung funktioniert gut, wenn die bestehenden Systeme stabil sind und die Lücke in einem klar abgegrenzten Ablauf liegt. Ist das Hauptsystem selbst veraltet oder nicht erweiterbar, lohnt sich ein größerer Schritt. Das klären wir gemeinsam in der Analyse.</p>
<h2>Ein Beispiel</h2>
<p>Bei einem unserer Logistikkunden lagen Geräteverwaltung, Dokumentenverwaltung, Tankkartendaten und Wechselkurse bereits in getrennten Systemen. Yardly wurde daneben eingeführt: Es verbindet die Daten, automatisiert den Wartungsablauf und erstellt laufende Berichte.</p>`,
    },
  },
];
