// One path per page. The site is Hungarian only.
export const ROUTES = {
  home: "/",
  solutions: "/megoldasok/",
  warehouse: "/megoldasok/raktari-folyamatok/",
  transport: "/megoldasok/fuvarozas-es-flotta/",
  maintenance: "/megoldasok/karbantartas/",
  services: "/szolgaltatasok/",
  consulting: "/szolgaltatasok/tanacsadas/",
  delivery: "/szolgaltatasok/kivitelezes/",
  method: "/modszertan/",
  references: "/referenciak/",
  company: "/cegunk/",
  contact: "/kapcsolat/",
  privacy: "/adatkezeles/",
  imprint: "/impresszum/",
};

export const route = (key) => ROUTES[key];
