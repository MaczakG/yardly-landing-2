// URLs. The site is Hungarian only; the former English and German pages and the removed
// Hungarian pages redirect to their nearest Hungarian page (see REDIRECTS).

export const ROUTES = {
  home: "/",
  solutions: "/megoldasaink/",
  pricing: "/arak/",
  enterprise: "/vallalati-megoldas/",
  contact: "/kapcsolat/",
  blog: "/blog/",
  privacy: "/adatkezeles/",
  imprint: "/impresszum/",
};

export const route = (key) => ROUTES[key];
export const solutionRoute = (slug) => `${ROUTES.solutions}${slug}/`;
export const postRoute = (post) => `${ROUTES.blog}${post.slug}/`;

// Old path → new path. Each old path gets a small page that forwards the visitor (and tells
// search engines the new address). Kept so links and search results to the old site keep working.
export const REDIRECTS = {
  "/megoldasok/": "/megoldasaink/",
  "/esettanulmanyok/": "/megoldasaink/",
  "/blog/karbantartas-nyilvantartasa-excel-helyett/": "/blog/flottakezeles-excelben/",
  "/blog/kiegeszites-vagy-csere/": "/blog/",
  "/rolunk/": "/",
  // The self-hosted offer is off for now (only the SaaS is sold); its copy and template stay in
  // content/pages.mjs and pages.mjs for when it comes back.
  "/vallalati-megoldas/": "/arak/#ajanlat",

  "/en/": "/",
  "/en/solutions/": "/megoldasaink/",
  "/en/case-studies/": "/megoldasaink/",
  "/en/blog/": "/blog/",
  "/en/blog/maintenance-tracking-beyond-excel/": "/blog/flottakezeles-excelben/",
  "/en/blog/forecasting-service-dates/": "/blog/szervizidopontok-elorejelzese/",
  "/en/blog/extend-or-replace/": "/blog/",
  "/en/about/": "/",
  "/en/contact/": "/kapcsolat/",
  "/en/privacy/": "/adatkezeles/",
  "/en/imprint/": "/impresszum/",

  "/de/": "/",
  "/de/loesungen/": "/megoldasaink/",
  "/de/fallstudien/": "/megoldasaink/",
  "/de/blog/": "/blog/",
  "/de/blog/wartungsdokumentation-statt-excel/": "/blog/flottakezeles-excelben/",
  "/de/blog/servicetermine-prognostizieren/": "/blog/szervizidopontok-elorejelzese/",
  "/de/blog/erweitern-oder-ersetzen/": "/blog/",
  "/de/ueber-uns/": "/",
  "/de/kontakt/": "/kapcsolat/",
  "/de/datenschutz/": "/adatkezeles/",
  "/de/impressum/": "/impresszum/",
};
