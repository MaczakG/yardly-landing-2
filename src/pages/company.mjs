import { config } from "../config.mjs";
import { route } from "../routes.mjs";
import { esc, glue, icon, photo, heading, ctaBand, pageHero, button, CTA_LABEL } from "../ui.mjs";

// ---------------------------------------------------------------------------

const PHASES = [
  { title: "Konzultáció", text: "Díjtalan első beszélgetés a céljairól, a csapatáról és a legnagyobb elakadásokról.", out: "Közös kép a kiindulásról" },
  { title: "Folyamatelemzés", text: "Feltérképezzük a munkafolyamatokat és a rendszereket, és kiszámoljuk, mi mennyi időt visz el.", out: "Ütemterv és egyedi ajánlat" },
  { title: "Fejlesztés és integráció", text: "Folyamatonként építünk és élesítünk, a meglévő rendszerek mellé.", out: "Élesített automatizálás" },
  { title: "Üzemeltetés", text: "Figyeljük, javítjuk és a működés változásával együtt továbbfejlesztjük a rendszert.", out: "Havi fix díjas támogatás" },
];

export const method = () => ({
  key: "method",
  title: "Módszertan: így vezetjük be az automatizálást | Yardly",
  description:
    "A díjtalan konzultációtól az üzemeltetésig: így halad egy automatizálási projekt nagy logisztikai cégeknél, rögzített tartalommal és havi fix üzemeltetési díjjal.",
  body: `
${pageHero({
  label: "Módszertan",
  title: "Lépésről lépésre, mérhető eredményekkel.",
  lead: "Nem egy nagy, évekig tartó projektet indítunk. Azzal a folyamattal kezdünk, amely ma a legtöbb kézi munkát viszi el, és onnan haladunk tovább.",
  image: "floor-team",
  imageAlt: "Munkatársak egy világos, nagy alapterületű raktár főfolyosóján.",
})}

<section class="section" aria-labelledby="phases-title">
  <div class="container">
    ${heading({ id: "phases-title", title: "Egy projekt négy szakasza" })}
    <ol class="timeline reveal">
      ${PHASES.map(
        (p) => `<li class="timeline__step">
        <h3 class="h3">${p.title}</h3>
        <p>${glue(p.text)}</p>
        <p class="timeline__out">${icon("check", "icon icon--sm")}${p.out}</p>
      </li>`
      ).join("")}
    </ol>
  </div>
</section>

<section class="section section--tint" aria-labelledby="principles-title">
  <div class="container two-col">
    ${heading({ id: "principles-title", title: "Amit minden projektben tartunk" })}
    <dl class="principles reveal">
      <div><dt>A meglévő rendszerek maradnak</dt><dd>${glue("Összekötjük őket, nem cseréljük le. Nincs nagy átállás, nincs párhuzamos működés hónapokig.")}</dd></div>
      <div><dt>Folyamatonként élesítünk</dt><dd>${glue("Minden szakasz végén működő eredmény van, nem csak dokumentáció.")}</dd></div>
      <div><dt>Rögzített tartalom</dt><dd>${glue("A projekt tartalmát az ajánlatban rögzítjük, a változásokat előre egyeztetjük.")}</dd></div>
      <div><dt>Egy felelős</dt><dd>${glue("A felméréstől az üzemeltetésig ugyanaz a csapat felel a rendszerért.")}</dd></div>
    </dl>
  </div>
</section>

${ctaBand({
  title: "Az első lépés egy díjtalan konzultáció.",
  text: "Egy rövid beszélgetés kötelezettség nélkül arról, mi viszi el ma a legtöbb időt.",
})}`,
});

// ---------------------------------------------------------------------------

export const references = () => ({
  key: "references",
  title: "Referenciák: karbantartás-automatizálás egy logisztikai szolgáltatónál | Yardly",
  description:
    "Négy rendszert kötöttünk össze egy logisztikai szolgáltatónál, és automatizáltuk a targoncák és a gépjárműpark karbantartását. A havi adminisztráció 8 óráról 10 percre csökkent.",
  body: `
${pageHero({
  label: "Referenciák",
  title: "Egy táblázatból négy összekötött rendszer.",
  lead: "Hogyan automatizáltuk a targoncák és a gépjárműpark karbantartását egy gyógyszer-, növényvédőszer- és italáru-logisztikai szolgáltatónál.",
  image: "forklift",
  imageAlt: "Targonca egy magas raktári állványsor mellett.",
  position: "50% 78%",
})}

<section class="stat-bar" aria-label="Az eset számokban">
  <div class="container stat-bar__grid">
    <div><span class="stat-bar__num stat-bar__num--before">8 óra</span><span>havi adminisztráció előtte</span></div>
    <div><span class="stat-bar__num">10 perc</span><span>havi adminisztráció most</span></div>
    <div><span class="stat-bar__num">4</span><span>összekötött rendszer</span></div>
  </div>
</section>

<section class="section" aria-labelledby="case-title">
  <div class="container case">
    <aside class="case__facts reveal" aria-label="Az ügyfél">
      <dl>
        <div><dt>Ügyfél</dt><dd>Logisztikai szolgáltató, név nélkül</dd></div>
        <div><dt>Iparág</dt><dd>Gyógyszer-, növényvédőszer- és italáru-logisztika</dd></div>
        <div><dt>Terület</dt><dd><a href="${route("maintenance")}">Karbantartás</a></dd></div>
        <div><dt>Rendszerek</dt><dd>GLPI, Therefore, DKV, MNB</dd></div>
      </dl>
    </aside>
    <div class="case__story">
      <h2 class="visually-hidden" id="case-title">Az eset</h2>
      <article class="reveal">
        <h3 class="h3-lg">A kihívás</h3>
        <p>${glue("A raktári targoncák, eszközök és a gépjárműpark karbantartását egyetlen, évek alatt egyre bonyolultabbá vált táblázat tartotta össze. Az esedékességeket kézzel kellett figyelni, az adatokat több rendszerből átmásolni.")}</p>
        <p>${glue("Az adminisztráció havonta egy teljes munkanapot vett el, és a tábla tartalmát csak néhány kolléga értette igazán.")}</p>
      </article>
      <article class="reveal">
        <h3 class="h3-lg">A megoldás</h3>
        <p>${glue("Összekötöttük a cég eszköznyilvántartását (GLPI), dokumentumkezelőjét (Therefore), az üzemanyagkártya-adatokat (DKV) és az MNB árfolyamadatait. A karbantartási folyamat erre az egységes adatra épül.")}</p>
        <p>${glue("A rendszer a futásadatokból és a használati szokásokból előre megbecsüli a kötelező szervizek időpontját, értesíti a felelősöket, és folyamatosan riportot készít a költségekről.")}</p>
      </article>
      <article class="reveal">
        <h3 class="h3-lg">Az eredmény</h3>
        <p class="case__highlight">${glue("A karbantartás havi adminisztrációja 8 óráról 10 percre csökkent.")}</p>
        <p>${glue("A határidők nem csúsznak el észrevétlenül, a vezetés pedig mindig friss kimutatásból dolgozik. A meglévő rendszerek változatlanul maradtak.")}</p>
      </article>
    </div>
  </div>
</section>

${ctaBand({
  title: "Önöknél is van egy ilyen táblázat?",
  text: "Mutassa meg, és egy konzultáción felvázoljuk, hogyan lehetne automatizálni.",
})}`,
});

// ---------------------------------------------------------------------------

const VALUES = [
  { icon: "users-three", title: "Az emberek munkáját könnyítjük", text: "Az automatizálás a gépies, hibára hajlamos feladatokat veszi át, hogy a csapat arra figyelhessen, amihez szakértelem kell." },
  { icon: "flow-arrow", title: "A működéséből indulunk ki", text: "Nem dobozos szoftvert illesztünk a cégre, hanem a cég valós folyamataihoz építünk megoldást." },
  { icon: "plugs-connected", title: "Ami működik, az marad", text: "A bevált rendszereket nem cseréljük le. Összekötjük őket, és a köztük lévő kézi munkát szüntetjük meg." },
  { icon: "receipt", title: "Kiszámíthatóan dolgozunk", text: "Rögzített projekttartalom és havi fix üzemeltetési díj, hogy a költség tervezhető legyen." },
];

export const company = () => ({
  key: "company",
  title: "Cégünk: folyamat-automatizálás Budapestről | Yardly",
  description:
    "A Yardly budapesti csapata logisztikai cégek munkafolyamatait automatizálja: tanácsadással kezdünk, és a megépített rendszert üzemeltetjük is.",
  body: `
${pageHero({
  label: "Cégünk",
  title: "A logisztika gyors. Az adminisztrációja is lehetne az.",
  lead: "A Yardly azért jött létre, hogy a logisztikai cégeknél a táblázatok közti másolgatás, az e-mailes egyeztetés és a kézi határidőfigyelés helyett a rendszerek dolgozzanak.",
  image: "meeting",
  imageAlt: "Üzleti megbeszélés egy világos irodában.",
})}

<section class="split" aria-labelledby="story-title">
  <div class="split__media">${photo("aerial-hub", "Logisztikai központ felülnézetből, rakodó kamionokkal.", { sizes: "(min-width: 960px) 50vw, 100vw" })}</div>
  <div class="split__body">
    <div class="split__content reveal">
      <h2 class="h2" id="story-title">${glue("Egy udvar, sok eszköz, rengeteg határidő.")}</h2>
      <p>${glue("A yard angolul udvart, telephelyet jelent: azt a helyet, ahol egy logisztikai cég járművei, targoncái és gépei dolgoznak, és ahol minden mozdulat mögött adminisztráció áll.")}</p>
      <p>${glue("A céget Maczák Gergő alapította Budapesten. Minden együttműködést személyesen indít: megismeri a csapatot, a folyamatot és azt a táblázatot, amelyből az egész kiindul.")}</p>
      <dl class="mini-facts">
        <div><dt>Alapító</dt><dd>Maczák Gergő</dd></div>
        <div><dt>Székhely</dt><dd>Budapest</dd></div>
      </dl>
    </div>
  </div>
</section>

<section class="section section--tint" aria-labelledby="values-title">
  <div class="container">
    ${heading({ id: "values-title", title: "Ahogyan dolgozunk" })}
    <div class="feature-grid">
      ${VALUES.map(
        (v) => `<article class="feature reveal">
        <span class="feature__icon">${icon(v.icon)}</span>
        <h3 class="h3">${v.title}</h3>
        <p>${glue(v.text)}</p>
      </article>`
      ).join("")}
    </div>
  </div>
</section>

${ctaBand({
  title: "Ismerjük meg egymást.",
  text: "Egy rövid konzultáción kiderül, miben tudunk segíteni, és miben nem.",
})}`,
});

// ---------------------------------------------------------------------------

const SIZES = ["250 fő alatt", "250-999 fő", "1000-4999 fő", "5000 fő felett"];
const TOPICS = ["Raktári folyamatok", "Fuvarozás és flotta", "Karbantartás", "Riportálás", "Rendszerintegráció", "Még nem tudom"];

const field = ({ id, label, type = "text", required, autocomplete, error }) => `<div class="field">
  <label for="${id}">${label}${required ? ' <span class="req" aria-hidden="true">*</span>' : ""}</label>
  <input id="${id}" name="${id}" type="${type}"${required ? " required" : ""}${autocomplete ? ` autocomplete="${autocomplete}"` : ""}${error ? ` aria-describedby="${id}-error"` : ""}>
  ${error ? `<p class="field__error" id="${id}-error">${error}</p>` : ""}
</div>`;

export const contact = () => ({
  key: "contact",
  title: "Kapcsolat: kérjen díjtalan konzultációt | Yardly",
  description: "Kérjen díjtalan konzultációt: átnézzük a legidőigényesebb logisztikai folyamatait, és megmutatjuk, hol kezdenénk az automatizálást.",
  body: `
${pageHero({
  label: "Kapcsolat",
  title: "Kérjen díjtalan konzultációt.",
  lead: "Pár mondat elég arról, mivel dolgoznak és mi akad el. A többit a konzultáción beszéljük át.",
  image: "docks",
  imageAlt: "Rakodókapuk egy logisztikai központ épületén.",
})}

<section class="section contact" aria-label="Kapcsolatfelvétel">
  <div class="container contact__grid">
    <div class="form-panel" id="urlap">
      <form id="enquiry-form" novalidate
        data-subject="Konzultációkérés a yardly.hu oldalról"
        data-sending="Küldés…"
        data-mailto-title="Már csak el kell küldenie."
        data-mailto-text="Megnyitottuk az e-mail-programját a kitöltött üzenettel. Ha nem nyílt meg, írjon közvetlenül a(z) {email} címre."
        data-error-text="Az üzenetet most nem sikerült elküldeni. Kérjük, írjon közvetlenül a(z) {email} címre.">
        <h2 class="h3-lg">Üzenet</h2>
        <p class="form-panel__intro">A csillaggal jelölt mezők kötelezők.</p>
        <div class="form-grid">
          ${field({ id: "name", label: "Név", required: true, autocomplete: "name", error: "Kérjük, adja meg a nevét." })}
          ${field({ id: "email", label: "Céges e-mail-cím", type: "email", required: true, autocomplete: "email", error: "Kérjük, adjon meg egy érvényes e-mail-címet." })}
          ${field({ id: "company", label: "Cég", required: true, autocomplete: "organization", error: "Kérjük, adja meg a cég nevét." })}
          ${field({ id: "role", label: "Beosztás", autocomplete: "organization-title" })}
          <div class="field field--full">
            <label for="size">Létszám <span class="req" aria-hidden="true">*</span></label>
            <select id="size" name="size" required aria-describedby="size-error">
              <option value="">Válasszon…</option>
              ${SIZES.map((s) => `<option>${s}</option>`).join("")}
            </select>
            <p class="field__error" id="size-error">Kérjük, válassza ki a létszámot.</p>
          </div>
          <fieldset class="field field--full">
            <legend>Mely területről beszélnénk? <span class="field__hint-inline">Több is választható</span></legend>
            <div class="chips">
              ${TOPICS.map((s, i) => `<label class="chip"><input type="checkbox" name="systems" value="${esc(s)}" id="topic-${i}"><span>${esc(s)}</span></label>`).join("")}
            </div>
          </fieldset>
          <div class="field field--full">
            <label for="message">Mi viszi el ma a legtöbb időt?</label>
            <textarea id="message" name="message" rows="5" aria-describedby="message-hint"></textarea>
            <p class="field__hint" id="message-hint">Például: a fuvarmegrendeléseket e-mailből másoljuk át a TMS-be, napi két órában.</p>
          </div>
          <div class="field field--full">
            <label class="check">
              <input type="checkbox" name="consent" required aria-describedby="consent-error">
              <span>Hozzájárulok, hogy a Yardly a megadott adatokat a megkeresésem megválaszolására használja. Részletek az <a href="${route("privacy")}">adatkezelési tájékoztatóban</a>. <span class="req" aria-hidden="true">*</span></span>
            </label>
            <p class="field__error" id="consent-error">A válaszhoz szükségünk van a hozzájárulására.</p>
          </div>
          <div class="hp" aria-hidden="true"><label>Weboldal <input type="text" name="website" tabindex="-1" autocomplete="off"></label></div>
        </div>
        <p class="form-error" role="alert" hidden></p>
        <button class="btn btn--primary btn--block" type="submit"><span>${CTA_LABEL}</span>${icon("arrow-right", "btn__icon")}</button>
      </form>
      <div class="form-success" id="enquiry-success" tabindex="-1" hidden>
        <span class="feature__icon">${icon("check")}</span>
        <h2 class="h3-lg" data-success-title>Köszönjük, megkaptuk.</h2>
        <p data-success-text>Hamarosan jelentkezünk, hogy egyeztessünk egy időpontot.</p>
        ${button("Vissza a kezdőlapra", route("home"), "ghost")}
      </div>
    </div>

    <aside class="contact__aside" aria-label="Elérhetőség">
      <div class="contact__card">
        <h2 class="h3">Közvetlen elérhetőség</h2>
        <p><strong>Maczák Gergő</strong><br><span>alapító, személyesen válaszol</span></p>
        <a href="mailto:${config.email}">${icon("envelope-simple", "icon icon--sm")}${config.email}</a>
        <p class="contact__line">${icon("map-pin", "icon icon--sm")}Budapest</p>
      </div>
      <div class="contact__card contact__card--navy">
        <h2 class="h3">Mi történik ezután?</h2>
        <ol>
          <li>Személyesen jelentkezünk, és egyeztetünk egy időpontot.</li>
          <li>A konzultáción átnézzük a legidőigényesebb folyamatokat.</li>
          <li>Ha van értelme, felmérést és egyedi ajánlatot javaslunk.</li>
        </ol>
      </div>
    </aside>
  </div>
</section>`,
});

// ---------------------------------------------------------------------------

export const notFound = () => ({
  key: "",
  path: "/404.html",
  noindex: true,
  title: "Az oldal nem található | Yardly",
  description: "Az oldal nem található.",
  body: `
<section class="section not-found" aria-labelledby="page-title">
  <div class="container">
    <p class="kicker kicker--dark">404</p>
    <h1 class="h1" id="page-title">Ezt az oldalt nem találjuk.</h1>
    <p class="lead">Lehet, hogy elköltözött, vagy elírás van a címben.</p>
    <div class="not-found__actions">${button("Vissza a kezdőlapra", route("home"))}</div>
  </div>
</section>`,
});
