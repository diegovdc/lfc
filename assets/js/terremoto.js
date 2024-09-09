import { setupFlashNotice } from "./helpers.js";
import * as mapLib from "./map.js";

const locations = {
  alvaroObregonStation: {
    en: "Álvaro Obregón Station",
    es: "Estación Álvaro Obregón",
    latlan: [19.267567, -99.3219],
    style: { color: "red" },
  },
  benitoJuarezStation: {
    en: "Benito Juárez Station",
    es: "Estación Benito Juárez",
    latlan: [19.374986, -99.17069],
    style: { color: "red" },
  },
  cuajimalpaStation: {
    en: "Cuajimalpa Station",
    es: "Estación Cuajimalpa",
    latlan: [19.361647, -99.285089],
    style: { color: "red" },
  },
  coyoacanStation: {
    en: "Coyoacán Station",
    es: "Estación Coyoacán",
    latlan: [19.3511, -99.156167],
    style: { color: "red" },
  },
  cuauhtemocStation: {
    en: "Cuauhtémoc Station",
    es: "Estación Cuauhtémoc",
    latlan: [19.443032, -99.165502],
    style: { color: "red" },
  },
  miguelHidalgoStation: {
    en: "Miguel Hidalgo Station",
    es: "Estación Miguel Hidalgo",
    latlan: [19.407983, -99.209083],
    style: { color: "red" },
  },
  milpaAltaStation: {
    en: "Milpa Alta Station",
    es: "Estación Milpa Alta",
    latlan: [19.201013, -99.011447],
    style: { color: "red" },
  },
  tlahuacStation: {
    en: "Tláhuac Station",
    es: "Estación Tláhuac",
    latlan: [19.311011, -98.973198],
    style: { color: "red" },
  },
  tlalpanStation: {
    en: "Tlalpan Station",
    es: "Estación Tlalpan",
    latlan: [19.209389, -99.153727],
    style: { color: "red" },
  },
  venustianoCarranzaStation: {
    en: "Venustiano Carranza Station",
    es: "Estación Venustiano Carranza",
    latlan: [19.41785, -99.1144],
    style: { color: "red" },
  },
  bolivarYChimalpopoca: {
    en: "Bolívar y Chimalpopoca",
    es: "Bolívar y Chimalpopoca",
    latlan: [19.42257963096786, -99.13966766085785],
    style: { color: "purple" },
  },
  sanGregorioAtlapulco: {
    en: "San Gregorio Atlapulco",
    es: "San Gregorio Atlapulco",
    latlan: [19.253745663777, -99.05703864990892],
    style: { color: "green" },
  },
  casaDeLosPueblos: {
    en: "Casa De los Pueblos y Comunidades Indigenas “Samir Flores Soberanes”",
    es: "Casa De los Pueblos y Comunidades Indigenas “Samir Flores Soberanes”",
    latlan: [19.361810914799786, -99.16320173025815],
    style: { color: "blue" },
  },
  colegioEnriqueRebsamen: {
    en: "Colegio Enrique Rébsamen. 26 fatalities.",
    es: "Colegio Enrique Rébsamen. 26 fallecidos.",
    latlan: [19.296956, -99.130508],
    style: { color: "black" },
  },
  amsterdam107: {
    en: "Amsterdam 107, colonia Condesa. 5 fatalities.",
    es: "Amsterdam 107, colonia Condesa. 5 fallecidos.",
    latlan: [19.412814, -99.171028],
    style: { color: "black" },
  },
  eje7EmilianoZapata: {
    en: "Eje 7, Emiliano Zapata. 7 people rescued, 10 fatalities.",
    es: "Eje 7, Emiliano Zapata. 7 personas rescatadas, 10 fallecidos.",
    latlan: [19.366753, -99.156981],
    style: { color: "black" },
  },
  calzadaDelHueso: {
    en: "Calzada del Hueso y Rancho Del Arco. 21 people rescued, 8 fatalities.",
    es: "Calzada del Hueso y Rancho Del Arco. 21 personas rescatadas, 8 fallecidos.",
    latlan: [19.303875, -99.122617],
    style: { color: "black" },
  },
  escocia4: {
    en: "Escocia 4. 17 fatalities.",
    es: "Escocia 4. 17 fallecidos.",
    latlan: [19.387725, -99.163794],
    style: { color: "black" },
  },
  alvaroObregon286: {
    en: "Alvaro Obregon 286. 28 rescued people.",
    es: "Alvaro Obregon 286. 28 personas rescatadas.",
    latlan: [19.4163, -99.168417],
    style: { color: "black" },
  },
  tecnologicoDeMonterrey: {
    en: "Tecnológico de Monterrey, Campus Ciudad de México. 5 fatalities, 40 people wounded.",
    es: "Tecnológico de Monterrey, Campus Ciudad de México. 5 fallecidos, 40 heridos.",
    latlan: [19.284392, -99.136892],
    style: { color: "black" },
  },
  salamanca107: {
    en: "Salamanca 107. 6 fatalities.",
    es: "Salamanca 107. 6 fallecidos.",
    latlan: [19.417514, -99.169025],
    style: { color: "black" },
  },
  eje3Medellin107: {
    en: "Eje 3, Medellin 107. 1 fatality.",
    es: "Eje 3, Medellin 107. 1 fallecido.",
    latlan: [19.413261, -99.164764],
    style: { color: "black" },
  },
  multifamiliarTlalpan: {
    en: "Multifamiliar Tlalpan. 9 fatalities. 19 people rescued.",
    es: "Multifamiliar Tlalpan. 9 fallecidos. 19 personas rescatadas.",
    latlan: [19.3383, -99.142106],
    style: { color: "black" },
  },
  coquimbo911: {
    en: "Coquimbo 911.",
    es: "Coquimbo 911.",
    latlan: [19.493453, -99.122933],
    style: { color: "black" },
  },
  bretana90: {
    en: "Bretaña 90.",
    es: "Bretaña 90.",
    latlan: [19.373167, -99.137297],
    style: { color: "black" },
  },
  emilianoZapata56: {
    en: "Emiliano Zapata 56, 2 fatalities.",
    es: "Emiliano Zapata 56, 2 fallecidos.",
    latlan: [19.364156, -99.143203],
    style: { color: "black" },
  },
  enriqueRebsamen241: {
    en: "Enrique Rebsamen 241, 2 fatalities.",
    es: "Enrique Rebsamen 241, 2 fallecidos.",
    latlan: [19.399200035780765, -99.15892810405198],
    style: { color: "black" },
  },
};

const locations2 = {
  ninosHeroesDeChapultepec: {
    en: "Niños Héroes de Chapultepec 177",
    es: "Niños Héroes de Chapultepec 177",
    latlan: [19.3875778, -99.1460611],
    style: { color: "black" },
  },
  puebla282: {
    en: "Puebla 282. 2 fatalities.",
    es: "Puebla 282. 2 fallecidos.",
    latlan: [19.4211167, -99.1690778],
    style: { color: "black" },
  },
  avenidaSonora149: {
    en: "Avenida Sonora 149. 1 fatality.",
    es: "Avenida Sonora 149. 1 fallecido.",
    latlan: [19.4145722, -99.1692278],
    style: { color: "black" },
  },
  viaductoPresidenteMiguelAleman106: {
    en: "Viaducto Presidente Miguel Alemán 106. 1 fatality.",
    es: "Viaducto Presidente Miguel Alemán 106. 1 fallecido.",
    latlan: [19.402325, -99.1614194],
    style: { color: "black" },
  },
  paseoGalias47: {
    en: "Paseo Galias 47. 4 fatalities.",
    es: "Paseo Galias 47. 4 fallecidos.",
    latlan: [19.3207333, -99.0973833],
    style: { color: "black" },
  },
  avenidaSantaAna300: {
    en: "Avenida Santa Ana 300. 3 fatalities.",
    es: "Avenida Santa Ana 300. 3 fallecidos.",
    latlan: [19.3295417, -99.1249778],
    style: { color: "black" },
  },
  concepcionBeistegui1465: {
    en: "Concepción Beistegui 1465.",
    es: "Concepción Beistegui 1465.",
    latlan: [19.3874583, -99.1570778],
    style: { color: "black" },
  },
  saratoga714: {
    en: "Saratoga 714.",
    es: "Saratoga 714.",
    latlan: [19.3695972, -99.150722],
    style: { color: "black" },
  },
  avenida314YAvenida323: {
    en: "Avenida 314 y Avenida 323.",
    es: "Avenida 314 y Avenida 323.",
    latlan: [19.502996443604033, -99.08298130832412],
    style: { color: "black" },
  },
  avenidaDeLasTorres2050: {
    en: "Avenida de las Torres 2050. 1 fatality.",
    es: "Avenida de las Torres 2050. 1 fallecido.",
    latlan: [19.3429833, -99.141225],
    style: { color: "black" },
  },
  balsas18: {
    en: "Balsas 18. 4 fatalities.",
    es: "Balsas 18. 4 fallecidos.",
    latlan: [19.36045, -99.1399056],
    style: { color: "black" },
  },
  calzadaDeLaViga1756: {
    en: "Calzada de la Viga 1756.",
    es: "Calzada de la Viga 1756.",
    latlan: [19.3593167, -99.121775],
    style: { color: "black" },
  },
  avenidaDeLasTrancas40: {
    en: "Avenida de las Trancas 40. 3 fatalities",
    es: "Avenida de las Trancas 40. 3 fallecidos",
    latlan: [19.2928444, -99.1236028],
    style: { color: "black" },
  },
  calzadaNuevaXochimilcoTulyehualco191: {
    en: "Calzada Nueva Xochimilco-Tulyehualco 191. 1 fatality",
    es: "Calzada Nueva Xochimilco-Tulyehualco 191. 1 fallecido",
    latlan: [19.2477472, -99.0913028],
    style: { color: "black" },
  },
  vicenteGuerrero40: {
    en: "Vicente Guerrero 40. 1 fatality",
    es: "Vicente Guerrero 40. 1 fallecido",
    latlan: [19.2541167, -99.058425],
    style: { color: "black" },
  },
  avenidaMexico: {
    en: "Avenida México s/n. 7 fatalities.",
    es: "Avenida México s/n. 7 fallecidos.",
    latlan: [19.2534472, -99.0578806],
    style: { color: "black" },
  },
  cacaloac4: {
    en: "Cacaloac 4.",
    es: "Cacaloac 4.",
    latlan: [19.318770879593163, -99.29248781274323],
    style: { color: "black" },
  },
  coahuila10: {
    en: "Coahuila 10.",
    es: "Coahuila 10.",
    latlan: [19.412892435070084, -99.15529836172276],
    style: { color: "black" },
  },
  edimburgo4: {
    en: "Edimburgo 4.",
    es: "Edimburgo 4.",
    latlan: [19.38788058503327, -99.1632681819632],
    style: { color: "black" },
  },
  avHidalgo62: {
    en: "Av. Hidalgo 62.",
    es: "Av. Hidalgo 62.",
    latlan: [19.35063155073876, -99.15637221754618],
    style: { color: "black" },
  },
  cuautemoc75: {
    en: "Cuautemoc 75.",
    es: "Cuautemoc 75.",
    latlan: [19.3524395077499, -99.15954499730627],
    style: { color: "black" },
  },
  dakota45: {
    en: "Dakota 45.",
    es: "Dakota 45.",
    latlan: [19.347267, -99.146402],
    style: { color: "black" },
  },
  avDivisionDelNte2863: {
    en: "Av. División del Nte. 2863.",
    es: "Av. División del Nte. 2863.",
    latlan: [19.344951, -99.149667],
    style: { color: "black" },
  },
  escocia29: {
    en: "Escocia 29.",
    es: "Escocia 29.",
    latlan: [19.348397, -99.146253],
    style: { color: "black" },
  },
  california17A19: {
    en: "California 17 a 19",
    es: "California 17 a 19",
    latlan: [19.348899, -99.147436],
    style: { color: "black" },
  },
  calleDeAntiguaTaxquena1116: {
    en: "Calle de Antigua Taxqueña 1116",
    es: "Calle de Antigua Taxqueña 1116",
    latlan: [19.342896, -99.147323],
    style: { color: "black" },
  },
  calleDeAntiguaTaxquena70: {
    en: "Calle de Antigua Taxqueña 70",
    es: "Calle de Antigua Taxqueña 70",
    latlan: [19.343556, -99.149753],
    style: { color: "black" },
  },
  avPacifico223: {
    en: "Av.Pacífico 223",
    es: "Av.Pacífico 223",
    latlan: [19.340167, -99.153164],
    style: { color: "black" },
  },
  avPacifico250: {
    en: "Av.Pacífico 250",
    es: "Av.Pacífico 250",
    latlan: [19.334897, -99.147812],
    style: { color: "black" },
  },
  cerroDelSombrero107: {
    en: "Cerro del Sombrero 107",
    es: "Cerro del Sombrero 107",
    latlan: [19.341387, -99.140984],
    style: { color: "black" },
  },
  avRealDeLosReyes77: {
    en: "Av. Real de los Reyes 77",
    es: "Av. Real de los Reyes 77",
    latlan: [19.341907, -99.156799],
    style: { color: "black" },
  },
  jardinCentenario8: {
    en: "Jardín Centenario 8",
    es: "Jardín Centenario 8",
    latlan: [19.348936, -99.162259],
    style: { color: "black" },
  },
  fernandezLeal137: {
    en: "Fernández Leal 137",
    es: "Fernández Leal 137",
    latlan: [19.342732, -99.159887],
    style: { color: "black" },
  },
  avPacifico35: {
    en: "Av Pacífico 35",
    es: "Av Pacífico 35",
    latlan: [19.345409, -99.157731],
    style: { color: "black" },
  },
  calzDeTlalpan2015: {
    en: "Calz de Tlalpan 2015",
    es: "Calz de Tlalpan 2015",
    latlan: [19.342913, -99.141627],
    style: { color: "black" },
  },
  melchorOcampo202: {
    en: "Melchor Ocampo 202",
    es: "Melchor Ocampo 202",
    latlan: [19.349709, -99.170431],
    style: { color: "black" },
  },
  calzadaDeMiramontes1868: {
    en: "Calzada de Miramontes 1868",
    es: "Calzada de Miramontes 1868",
    latlan: [19.342575029912656, -99.13721002656983],
    style: { color: "black" },
  },
  arturoIbanez2209: {
    en: "Arturo Ibáñez 2-209",
    es: "Arturo Ibáñez 2-209",
    latlan: [19.34824, -99.1607],
    style: { color: "black" },
  },
  avMiguelAngelDeQuevedo981: {
    en: "Av Miguel Ángel de Quevedo 981",
    es: "Av Miguel Ángel de Quevedo 981",
    latlan: [19.343375, -99.152261],
    style: { color: "black" },
  },
  sanFranciscoFiguraco23: {
    en: "San Francisco Figuraco 23",
    es: "San Francisco Figuraco 23",
    latlan: [19.347207, -99.160694],
    style: { color: "black" },
  },
};

const epicenter = {
  epicentre: {
    en: "Epicentre of earthquake: The seismic event occurred at 1:14:40 p.m. on September 19, 2017, and had a magnitude of 7.1Mw; The epicenter was located on the border between the states of Puebla and Morelos, 12 km southeast of Axochiapan, Morelos and 120 km from Mexico City. The coordinates of the epicenter were 18.40 N latitude and -98.72 W longitude and a depth of 57 km.",
    es: "Epicentro del terremoto: El evento sísmico ocurrió a la 1:14:40 p.m. el 19 de septiembre de 2017 y tuvo una magnitud de 7.1Mw; El epicentro se ubicó en la frontera entre los estados de Puebla y Morelos, 12 km al sureste de Axochiapan, Morelos y a 120 km de la Ciudad de México. Las coordenadas del epicentro fueron 18.40 N de latitud y -98.72 W de longitud y una profundidad de 57 km.",
    latlan: [18.4, -98.72],
    style: { color: "brown" },
  },
};

export function init() {
  const map = mapLib.initMap(
    { ...locations, ...locations2, ...epicenter },
    { showMXCity: false, locationButtons: false }
  );
  map.setView([19, -99.16320173025815], 9);
}
