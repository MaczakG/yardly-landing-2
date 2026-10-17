import { config } from "../config.mjs";
import { route } from "../routes.mjs";
import { esc, glue, icon, ctaButton, textLink, photo, ctaBand } from "../ui.mjs";

const BENEFITS = [
  {
    icon: "flow-arrow",
    title: "A rutinmunkát a rendszer végzi",
    text: "Rendelésfeldolgozás, fuvarszervezés, karbantartás, határidők, riportok: ami ma e-mailben és táblázatban fut, az szabályok szerint, magától halad tovább.",
  },
  {
    icon: "plugs-connected",
    title: "Egy adat, egyszer rögzítve",
    text: "Összekötjük az ERP-t, a raktárkezelőt, a fuvarszervező rendszert és a táblázatokat. Mindenki ugyanabból a friss adatból dolgozik, átvezetés nélkül.",
  },
  {
    icon: "shield-check",
    title: "Kevesebb hiba, nyugodtabb műszakok",
    text: "Beépített ellenőrzések és időben kiküldött értesítések. A lejáró határidő, a hiányzó irat vagy a késő szállítmány nem a hónap végén derül ki.",
  },
];

const FAQ = [
  {
    q: "Le kell cserélnünk a jelenlegi rendszereinket?",
    a: "Nem. Az automatizálást a meglévő ERP, WMS, TMS és egyéb rendszerei köré építjük. Ami jól működik, az marad, mi a köztük lévő kézi munkát szüntetjük meg.",
  },
  {
    q: "Mekkora cégeknek dolgoznak?",
    a: "Elsősorban közepes és nagy logisztikai, raktározási és fuvarozó cégeknek, ahol több telephely, több rendszer és sok ismétlődő adminisztráció találkozik.",
  },
  {
    q: "Mennyi idő alatt látszik az eredmény?",
    a: "Nem egy nagy projekt végén. Azzal a folyamattal kezdünk, amely ma a legtöbb kézi munkát viszi el, azt élesítjük elsőként, és onnan lépésről lépésre haladunk.",
  },
  {
    q: "Hol futnak a rendszerek, és ki fér hozzá az adatokhoz?",
    a: "Választhat: az Amazon Web Services frankfurti, EU-s adatközpontjában, dedikált környezetben, vagy a saját szerverén. A hozzáférést szerepkörök szerint állítjuk be, minden módosítás naplózva.",
  },
  {
    q: "Mi történik az élesítés után?",
    a: "Velünk marad a felelősség: üzemeltetjük, figyeljük és javítjuk a rendszert, és a működés változásával együtt fejlesztjük tovább.",
  },
  {
    q: "Hogyan áraznak?",
    a: "Projektenként adunk ajánlatot, egy díjtalan első konzultáció és felmérés után. Az üzemeltetés és a támogatás havi fix, előre egyeztetett díjjal fut, rejtett tételek nélkül.",
  },
];

export const home = () => ({
  key: "home",
  title: "Folyamat-automatizálás logisztikai cégeknek | Yardly",
  description:
    "Tanácsadás és kivitelezés nagy logisztikai cégeknek: felmérjük a munkafolyamatokat, összekötjük a meglévő rendszereket, és automatizáljuk a kézi adminisztrációt.",
  jsonLd: {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Yardly",
    url: config.siteUrl,
    logo: `${config.siteUrl}/assets/brand/yardly-vizszintes-szines.svg`,
    email: config.email,
    address: { "@type": "PostalAddress", addressLocality: "Budapest", addressCountry: "HU" },
  },
  body: `
<section class="hero" aria-labelledby="hero-title">
  <div class="hero__frame">
    ${photo("aerial-hub", "Logisztikai központ felülnézetből, rakodó kamionokkal.", { eager: true, cls: "hero__img" })}
    <div class="container hero__inner">
      <div class="hero__copy">
        <h1 class="display load-in" id="hero-title">${glue("Ami ma kézzel fut, holnap magától megy.")}</h1>
        <p class="hero__lead load-in">${glue("Felmérjük a logisztikai munkafolyamatait, és automatizált rendszert építünk a meglévő szoftverei köré.")}</p>
        <div class="hero__actions load-in">
          ${ctaButton("light")}
          <a class="hero__link" href="${route("services")}">Szolgáltatásaink${icon("arrow-right", "icon icon--sm")}</a>
        </div>
      </div>
    </div>
  </div>
</section>

<section class="section" aria-labelledby="benefits-title">
  <div class="container benefits">
    <figure class="benefits__media reveal">
      ${photo("aisle", "Magas raktári állványsor raklapokkal egy elosztóközpontban.", { sizes: "(min-width: 960px) 40vw, 100vw" })}
    </figure>
    <div class="benefits__body">
      <h2 class="h2 reveal" id="benefits-title">${glue("Három dolog, ami az első automatizált folyamat után megváltozik.")}</h2>
      <ol class="benefit-list">
        ${BENEFITS.map(
          (b) => `<li class="benefit reveal">
          <span class="benefit__icon">${icon(b.icon)}</span>
          <div>
            <h3 class="h3">${b.title}</h3>
            <p>${glue(b.text)}</p>
          </div>
        </li>`
        ).join("")}
      </ol>
    </div>
  </div>
</section>

<section class="section section--navy" aria-labelledby="proof-title">
  <div class="container proof">
    <div class="proof__copy reveal">
      <p class="label label--on-navy">Ügyféleredmény</p>
      <h2 class="h2" id="proof-title">${glue("Egy teljes munkanap helyett tíz perc havonta.")}</h2>
      <p>${glue("Egy gyógyszer-, növényvédőszer- és italáru-logisztikai szolgáltatónál a targoncák és a gépjárműpark karbantartását egy összetett táblázat tartotta össze. Négy rendszert kötöttünk össze, és a folyamat ma automatikusan fut.")}</p>
      ${textLink("Az eset részletei", route("cases"))}
    </div>
    <div class="proof__figure reveal">
      <dl class="metric">
        <div class="metric__item">
          <dt>Havi adminisztráció előtte</dt>
          <dd>8 óra</dd>
        </div>
        <div class="metric__item metric__item--after">
          <dt>Havi adminisztráció most</dt>
          <dd>10 perc</dd>
        </div>
      </dl>
      <ul class="proof__systems" aria-label="Összekötött rendszerek">
        <li>GLPI</li><li>Therefore</li><li>DKV</li><li>MNB</li>
      </ul>
    </div>
  </div>
</section>

<section class="section" aria-labelledby="faq-title">
  <div class="container faq">
    <div class="faq__head reveal">
      <h2 class="h2" id="faq-title">Gyakori kérdések</h2>
      <p>${glue("Amit a döntéshozók az első egyeztetés előtt kérdezni szoktak.")}</p>
    </div>
    <div class="faq__list reveal">
      ${FAQ.map(
        (f) => `<details class="faq-item">
        <summary><span>${esc(f.q)}</span><span class="faq-item__toggle">${icon("plus")}</span></summary>
        <p>${glue(f.a)}</p>
      </details>`
      ).join("")}
    </div>
    <p class="faq__more reveal">${glue("Más kérdése van?")} <a href="mailto:${config.email}">${config.email}</a></p>
  </div>
</section>

${ctaBand({
  title: "Nézzük meg együtt, mi automatizálható Önöknél.",
  text: "Egy rövid konzultáción végigmegyünk a legidőigényesebb folyamatain, és megmutatjuk, hol kezdenénk.",
})}`,
});
