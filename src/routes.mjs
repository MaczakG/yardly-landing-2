export const LANGS = ["hu", "en", "de"];
export const DEFAULT_LANG = "hu";

export const LANG_META = {
  hu: { name: "Magyar", locale: "hu_HU", htmlLang: "hu" },
  en: { name: "English", locale: "en_GB", htmlLang: "en" },
  de: { name: "Deutsch", locale: "de_DE", htmlLang: "de" },
};

// One entry per page; each language has its own path.
export const ROUTES = {
  home: { hu: "/", en: "/en/", de: "/de/" },
  solutions: { hu: "/megoldasok/", en: "/en/solutions/", de: "/de/loesungen/" },
  cases: { hu: "/esettanulmanyok/", en: "/en/case-studies/", de: "/de/fallstudien/" },
  blog: { hu: "/blog/", en: "/en/blog/", de: "/de/blog/" },
  about: { hu: "/rolunk/", en: "/en/about/", de: "/de/ueber-uns/" },
  contact: { hu: "/kapcsolat/", en: "/en/contact/", de: "/de/kontakt/" },
  privacy: { hu: "/adatkezeles/", en: "/en/privacy/", de: "/de/datenschutz/" },
  imprint: { hu: "/impresszum/", en: "/en/imprint/", de: "/de/impressum/" },
};

export const route = (key, lang) => ROUTES[key][lang];

export const postRoute = (post, lang) => `${ROUTES.blog[lang]}${post.slug[lang]}/`;
