// One path per page. The site is Hungarian only.
export const ROUTES = {
  home: "/",
  services: "/szolgaltatasok/",
  consulting: "/szolgaltatasok/tanacsadas/",
  delivery: "/szolgaltatasok/kivitelezes/",
  cases: "/esettanulmanyok/",
  about: "/rolunk/",
  contact: "/kapcsolat/",
  privacy: "/adatkezeles/",
  imprint: "/impresszum/",
};

export const route = (key) => ROUTES[key];
