import { setupFlashNotice } from "./helpers.js";
import * as mapLib from "./map.js";

const locations = {
  oldAbbey: {
    en: "Old location of the San Antonio Abad Textile Workshop",
    es: "Antigua ubicación del Taller Textil San Antonio Abad",
    latlan: [19.421575765959087, -99.13345684132634],
  },
  metro: {
    en: "Outside San Antonio Abad Metro Station",
    es: "Fuera de la Estación de Metro San Antonio Abad",
    latlan: [19.4156137682026, -99.13482011994381],
  },
  topeka: {
    en: "Topeka Factory Disaster Site.",
    es: "Sitio del Desastre de la Fábrica Topeka.",
    latlan: [19.414905456991544, -99.13533510405162],
  },
  bolivar: {
    en: "Zacatecas 74",
    es: "Zacatecas 74",
    latlan: [19.42257963096786, -99.13966766085785],
  },
  puntoGozadera: {
    en: "Punto Gozadera",
    es: "Punto Gozadera",
    latlan: [19.43003296539544, -99.14382650360163],
  },
};

export function init() {
  setupFlashNotice();
  mapLib.initMap(locations);
}
