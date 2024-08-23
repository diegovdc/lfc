import * as mapLib from "./map.js";

const locationsPart1 = {
  atlapulco: {
    en: "San Gregorio Atlapulco",
    es: "San Gregorio Atlapulco",
    latlan: [19.253905359048904, -99.0567149166776],
  },
  ejido: {
    es: "Ejido de San Gregorio Atlapulco",
    en: "Ejido de San Gregorio Atlapulco",
    latlan: [19.267011814138918, -99.05368880287611],
  },
  bloqueo: {
    es: "Sitio de Bloqueo",
    en: "Site of Blockage",
    latlan: [19.255150683877645, -99.06637646172592],
  },
};

export function init() {
  mapLib.initMap(locationsPart1);
}

const locationsPart2 = {
  casaDeLosPueblos: {
    en: "Casa de los Pueblos y Comunidades Indígenas Samir Flores Soberanes",
    es: "Casa de los Pueblos y Comunidades Indígenas Samir Flores Soberanes",
    latlan: [19.361810914799786, -99.16320173025815],
  },
  mexquititlan: {
    en: "Santiago Mexquititlán (Querétaro, México)",
    es: "Santiago Mexquititlán (Querétaro, México)",
    latlan: [20.052380597481378, -100.0659327939473],
  },
  zacatepec: {
    en: "Santa María Zacatepec (Puebla, México)",
    es: "Santa María Zacatepec (Puebla, México)",
    latlan: [19.120567487062814, -98.35780597531962],
  },
  atlapulco: {
    en: "San Gregorio Atlapulco, Mexico City",
    es: "San Gregorio Atlapulco, Ciudad de México",
    latlan: [19.253905359048904, -99.0567149166776],
  },
};

export function init2() {
  mapLib.initMap(locationsPart2);
}
