import * as mapLib from "./map.js";

const locations = {
  casaDeLosPueblos: {
    en: 'Casa de los Pueblos y Comunidades Indígenas "Samir Flores Soberanes"',
    es: 'Casa de los Pueblos y Comunidades Indígenas "Samir Flores Soberanes"',
    latlan: [19.361810914799786, -99.16320173025815],
  },
  corazonOtomi: {
    en: "La Casona, a house occupied by the Otomí community since 1996.",
    es: "La Casona, una casa ocupada por la comunidad Otomí desde 1996.",
    latlan: [19.42282088386217, -99.16495620901033],
  },
  roma18: {
    en: "Roma 18",
    es: "Roma 18",
    latlan: [19.429208211985507, -99.1571165572578],
  },
  zacatecas74: {
    en: "Zacatecas 74",
    es: "Zacatecas 74",
    latlan: [19.41593525360464, -99.15766371492477],
  },
  guanajuato200: {
    en: "Guanajuato 200",
    es: "Guanajuato 200",
    latlan: [19.416236298309073, -99.163346191453],
  },
  londres7: {
    en: "Londres 7",
    es: "Londres 7",
    latlan: [19.422541846316363, -99.17128230405147],
  },
  mexquititlan: {
    en: "Santiago Mexquititlán (Querétaro, México)",
    es: "Santiago Mexquititlán (Querétaro, México)",
    latlan: [20.052380597481378, -100.0659327939473],
    radius: 5,
  },
  amilcingo: {
    en: "Amilcingo",
    es: "Amilcingo",
    latlan: [18.739449507337913, -98.77132690768327],
    radius: 5,
  },
};

export function init() {
  //- window.setupFlashNotice(); // FIXME
  mapLib.initMap(locations);
}
