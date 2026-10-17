import { config } from "../config.mjs";
import { route } from "../routes.mjs";
import { esc, glue, icon, ctaBand, pageHero, button, CTA_LABEL } from "../ui.mjs";

// ---------------------------------------------------------------------------

export const cases = () => ({
  key: "cases",
  title: "Esettanulmány: karbantartás-automatizálás egy logisztikai szolgáltatónál | Yardly",
  description:
    "Négy rendszert kötöttünk össze egy logisztikai szolgáltatónál, és automatizáltuk a targoncák és a gépjárműpark karbantartását. A havi adminisztráció 8 óráról 10 percre csökkent.",
  body: `
${pageHero({
  label: "Esettanulmány",
  title: "Egy táblázatból négy összekötött rendszer.",
  lead: "Hogyan automatizáltuk a targoncák és a gépjárműpark karbantartását egy gyógyszer-, növényvédőszer- és italáru-logisztikai szolgáltatónál.",
  image: "forklift",
  imageAlt: "Targonca egy magas raktári állványsor mellett.",
})}

<section class="section" aria-label="Az eset számokban">
  <div class="container case-top">
    <dl class="metric metric--light reveal">
      <div class="metric__item">
        <dt>Havi adminisztráció előtte</dt>
        <dd>8 óra</dd>
      </div>
      <div class="metric__item metric__item--after">
        <dt>Havi adminisztráció most</dt>
        <dd>10 perc</dd>
      </div>
    </dl>
    <dl class="case-facts reveal">
      <div><dt>Ügyfél</dt><dd>Logisztikai szolgáltató, név nélkül</dd></div>
      <div><dt>Terület</dt><dd>Targonca-, eszköz- és flottakarbantartás</dd></div>
      <div><dt>Összekötött rendszerek</dt><dd>GLPI, Therefore, DKV, MNB</dd></div>
    </dl>
  </div>
</section>

<section class="section section--flush-top" aria-labelledby="story-title">
  <div class="container">
    <h2 class="visually-hidden" id="story-title">Az eset</h2>
    <div class="chapters">
      <article class="chapter reveal">
        <h3 class="chapter__title">A kihívás</h3>
        <div class="chapter__body">
          <p>${glue("A raktári targoncák, eszközök és a gépjárműpark karbantartását egyetlen, évek alatt egyre bonyolultabbá vált táblázat tartotta össze. Az esedékességeket kézzel kellett figyelni, az adatokat több rendszerből átmásolni.")}</p>
          <p>${glue("Az adminisztráció havonta egy teljes munkanapot vett el, és a tábla tartalmát csak néhány kolléga értette igazán.")}</p>
        </div>
      </article>
      <article class="chapter reveal">
        <h3 class="chapter__title">A megoldás</h3>
        <div class="chapter__body">
          <p>${glue("Összekötöttük a cég eszköznyilvántartását (GLPI), dokumentumkezelőjét (Therefore), az üzemanyagkártya-adatokat (DKV) és az MNB árfolyamadatait. A karbantartási folyamat erre az egységes adatra épül.")}</p>
          <p>${glue("A rendszer a futásadatokból és a használati szokásokból előre megbecsüli a kötelező szervizek időpontját, értesíti a felelősöket, és folyamatosan riportot készít a költségekről.")}</p>
        </div>
      </article>
      <article class="chapter reveal">
        <h3 class="chapter__title">Az eredmény</h3>
        <div class="chapter__body">
          <p class="chapter__highlight">${glue("A karbantartás havi adminisztrációja 8 óráról 10 percre csökkent.")}</p>
          <p>${glue("A határidők nem csúsznak el észrevétlenül, a vezetés pedig mindig friss kimutatásból dolgozik. A meglévő rendszerek változatlanul maradtak.")}</p>
        </div>
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
  { title: "Az emberek munkáját könnyítjük", text: "Az automatizálás a gépies, hibára hajlamos feladatokat veszi át, hogy a csapat arra figyelhessen, amihez szakértelem kell." },
  { title: "A működéséből indulunk ki", text: "Nem dobozos szoftvert illesztünk a cégre, hanem a cég valós folyamataihoz építünk megoldást." },
  { title: "Ami működik, az marad", text: "A bevált rendszereket nem cseréljük le. Összekötjük őket, és a köztük lévő kézi munkát szüntetjük meg." },
  { title: "Kiszámíthatóan dolgozunk", text: "Rögzített projekttartalom és havi fix üzemeltetési díj, hogy a költség tervezhető legyen." },
];

export const about = () => ({
  key: "about",
  title: "Rólunk: folyamat-automatizálás Budapestről | Yardly",
  description:
    "A Yardly budapesti csapata logisztikai cégek munkafolyamatait automatizálja: tanácsadással kezdünk, és a megépített rendszert üzemeltetjük is.",
  body: `
${pageHero({
  label: "Rólunk",
  title: "A logisztika gyors. Az adminisztrációja is lehetne az.",
  lead: "A Yardly azért jött létre, hogy a logisztikai cégeknél a táblázatok közti másolgatás, az e-mailes egyeztetés és a kézi határidőfigyelés helyett a rendszerek dolgozzanak.",
  image: "floor-team",
  imageAlt: "Munkatársak egy világos, nagy alapterületű raktár főfolyosóján.",
})}

<section class="section" aria-labelledby="story-title">
  <div class="container story">
    <h2 class="h2 reveal" id="story-title">${glue("Egy udvar, sok eszköz, rengeteg határidő.")}</h2>
    <div class="story__body reveal">
      <p>${glue("A yard angolul udvart, telephelyet jelent: azt a helyet, ahol egy logisztikai cég járművei, targoncái és gépei dolgoznak, és ahol minden mozdulat mögött adminisztráció áll.")}</p>
      <p>${glue("A céget Maczák Gergő alapította Budapesten. Minden együttműködést személyesen indít: megismeri a csapatot, a folyamatot és azt a táblázatot, amelyből az egész kiindul.")}</p>
    </div>
  </div>
</section>

<section class="section section--soft" aria-labelledby="values-title">
  <div class="container">
    <h2 class="h2 section-title reveal" id="values-title">Ahogyan dolgozunk</h2>
    <ol class="values">
      ${VALUES.map(
        (v) => `<li class="value reveal">
        <h3 class="h3">${v.title}</h3>
        <p>${glue(v.text)}</p>
      </li>`
      ).join("")}
    </ol>
  </div>
</section>

${ctaBand({
  title: "Ismerjük meg egymást.",
  text: "Egy rövid konzultáción kiderül, miben tudunk segíteni, és miben nem.",
  image: "docks",
})}`,
});

// ---------------------------------------------------------------------------

const SIZES = ["250 fő alatt", "250-999 fő", "1000-4999 fő", "5000 fő felett"];
const TOPICS = ["Rendeléskezelés", "Fuvarszervezés", "Raktári folyamatok", "Karbantartás", "Riportálás", "Rendszerintegráció", "Még nem tudom"];

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
<section class="contact" aria-labelledby="page-title">
  <div class="container contact__grid">
    <div class="contact__side">
      <p class="label">Kapcsolat</p>
      <h1 class="h1" id="page-title">${glue("Kérjen díjtalan konzultációt.")}</h1>
      <p class="lead">${glue("Pár mondat elég arról, mivel dolgoznak és mi akad el. A többit a konzultáción beszéljük át.")}</p>
      <div class="contact__person">
        <p><strong>Maczák Gergő</strong><span>alapító, személyesen válaszol</span></p>
        <a href="mailto:${config.email}">${icon("envelope-simple", "icon icon--sm")}${config.email}</a>
        <span>${icon("map-pin", "icon icon--sm")}Budapest</span>
      </div>
    </div>

    <div class="form-panel" id="urlap">
      <form id="enquiry-form" novalidate
        data-subject="Konzultációkérés a yardly.hu oldalról"
        data-sending="Küldés…"
        data-mailto-title="Már csak el kell küldenie."
        data-mailto-text="Megnyitottuk az e-mail-programját a kitöltött üzenettel. Ha nem nyílt meg, írjon közvetlenül a(z) {email} címre."
        data-error-text="Az üzenetet most nem sikerült elküldeni. Kérjük, írjon közvetlenül a(z) {email} címre.">
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
        <p class="form-panel__note">A csillaggal jelölt mezők kötelezők. Kötelezettség nélkül.</p>
      </form>
      <div class="form-success" id="enquiry-success" tabindex="-1" hidden>
        <span class="output__icon">${icon("check")}</span>
        <h2 class="h3-lg" data-success-title>Köszönjük, megkaptuk.</h2>
        <p data-success-text>Hamarosan jelentkezünk, hogy egyeztessünk egy időpontot.</p>
        ${button("Vissza a kezdőlapra", route("home"), "ghost")}
      </div>
    </div>
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
<section class="intro intro--empty" aria-labelledby="page-title">
  <div class="container">
    <p class="label">404</p>
    <h1 class="h1" id="page-title">Ezt az oldalt nem találjuk.</h1>
    <p class="lead">Lehet, hogy elköltözött, vagy elírás van a címben.</p>
    <div class="intro__actions">${button("Vissza a kezdőlapra", route("home"))}</div>
  </div>
</section>`,
});
