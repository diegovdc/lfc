export function init() {
  const computeAngle = function (coord1, coord2) {
    var a = { x: coord1.lat, y: coord1.lng };
    var b = { x: coord2.lat, y: coord2.lng };
    return (Math.atan2(b.y - a.y, b.x - a.x) * 180) / Math.PI;
  };

  const destination = function (latlng, heading, distance) {
    heading = (heading + 360) % 360;
    var rad = Math.PI / 180,
      radInv = 180 / Math.PI,
      R = 6378137, // approximation of Earth's radius
      lon1 = latlng.lng * rad,
      lat1 = latlng.lat * rad,
      rheading = heading * rad,
      sinLat1 = Math.sin(lat1),
      cosLat1 = Math.cos(lat1),
      cosDistR = Math.cos(distance / R),
      sinDistR = Math.sin(distance / R),
      lat2 = Math.asin(
        sinLat1 * cosDistR + cosLat1 * sinDistR * Math.cos(rheading)
      ),
      lon2 =
        lon1 +
        Math.atan2(
          Math.sin(rheading) * sinDistR * cosLat1,
          cosDistR - sinLat1 * Math.sin(lat2)
        );
    lon2 = lon2 * radInv;
    lon2 = lon2 > 180 ? lon2 - 360 : lon2 < -180 ? lon2 + 360 : lon2;
    return L.latLng([lat2 * radInv, lon2]);
  };

  const map = L.map("map").setView([19, -99.16320173025815], 9);

  const tiles = L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 20,
  }).addTo(map);

  function gradualZoom(map, startZoom, targetZoom, increment, intervalTime) {
    var currentZoom = startZoom;

    var interval = setInterval(function () {
      if (currentZoom < targetZoom) {
        currentZoom += increment;
        map.flyTo(map.getCenter(), currentZoom, { animate: true });
      } else {
        clearInterval(interval);
      }
    }, intervalTime);
  }

  function gradualMove(map, targetLatLng, dur) {
    map.panTo(targetLatLng, { animate: true, duration: dur });
  }

  function gradualFly(
    map,
    targetLatLng,
    startZoom,
    targetZoom,
    increment,
    intervalTime
  ) {
    var currentZoom = startZoom;

    var interval = setInterval(function () {
      if (currentZoom < targetZoom) {
        currentZoom += increment;
        map.flyTo(targetLatLng, currentZoom, { animate: true });
      } else {
        clearInterval(interval);
      }
    }, intervalTime);
  }

  //// get distances from stations to points of view ////////
  function printDistanceandOrientation(object1, object2, name1, name2) {
    const distance = map.distance(object1, object2);
    const angle = computeAngle(object1, object2);
    console.log(
      `(name: "${name1}To${name2}" , distance: ${distance} , angle:${angle})`
    );
  }

  const ao = { name: "AOVM", coords: L.latLng(19.267567, -99.3219) };
  const bj = { name: "BJVM", coords: L.latLng(19.374986, -99.17069) };
  const cj = { name: "CJVM", coords: L.latLng(19.361647, -99.285089) };
  const co = { name: "COVM", coords: L.latLng(19.3511, -99.156167) };
  const ct = { name: "CTVM", coords: L.latLng(19.443032, -99.165502) };
  const mh = { name: "MHVM", coords: L.latLng(19.407983, -99.209083) };
  const mp = { name: "MPVM", coords: L.latLng(19.201013, -99.011447) };
  const th = { name: "THVM", coords: L.latLng(19.311011, -98.973198) };
  const tl = { name: "TLVM", coords: L.latLng(19.209389, -99.153727) };
  const vr = { name: "VRVM", coords: L.latLng(19.41785, -99.1144) };

  const stations = [ao, bj, cj, co, ct, mh, mp, th, tl, vr];

  const pointsOfView = [
    {
      coords: L.latLng(19.361810914799786, -99.16320173025815),
      name: "CasaDeLosPueblos",
    },
    {
      coords: L.latLng(19.253745663777, -99.05703864990892),
      name: "Atlapulco",
    },
    {
      coords: L.latLng(19.42257963096786, -99.13966766085785),
      name: "Chimalpopoca",
    },
  ];

  stations.forEach((station) => {
    pointsOfView.forEach((ptOfV) => {
      printDistanceandOrientation(
        ptOfV.coords,
        station.coords,
        ptOfV.name,
        station.name
      );
    });
  });

  const r = 3;

  L.circleMarker([19.267567, -99.3219])
    .addTo(map)
    .bindPopup("Álvaro Obregón Station", { radius: r })
    .setStyle({ color: "red" });
  L.circleMarker([19.374986, -99.17069])
    .addTo(map)
    .bindPopup("Benito Juárez Station", { radius: r })
    .setStyle({ color: "red" });
  L.circleMarker([19.361647, -99.285089])
    .addTo(map)
    .bindPopup("Cuajimalpa Station", { radius: r })
    .setStyle({ color: "red" });
  L.circleMarker([19.3511, -99.156167])
    .addTo(map)
    .bindPopup("Coyoacán Station", { radius: r })
    .setStyle({ color: "red" });
  L.circleMarker([19.443032, -99.165502])
    .addTo(map)
    .bindPopup("Cuauhtémoc Station", { radius: r })
    .setStyle({ color: "red" });
  L.circleMarker([19.407983, -99.209083])
    .addTo(map)
    .bindPopup("Miguel Hidalgo Station", { radius: r })
    .setStyle({ color: "red" });
  L.circleMarker([19.201013, -99.011447])
    .addTo(map)
    .bindPopup("Milpa Alta Station", { radius: r })
    .setStyle({ color: "red" });
  L.circleMarker([19.311011, -98.973198])
    .addTo(map)
    .bindPopup("Tláhuac Station", { radius: r })
    .setStyle({ color: "red" });
  L.circleMarker([19.209389, -99.153727])
    .addTo(map)
    .bindPopup("Tlalpan Station", { radius: r })
    .setStyle({ color: "red" });
  L.circleMarker([19.41785, -99.1144])
    .addTo(map)
    .bindPopup("Venustiano Carranza Station", { radius: r })
    .setStyle({ color: "red" });

  L.circleMarker([19.42257963096786, -99.13966766085785])
    .addTo(map)
    .bindPopup("Bolívar y Chimalpopoca", { radius: r })
    .setStyle({ color: "purple" });
  L.circleMarker([19.253745663777, -99.05703864990892])
    .addTo(map)
    .bindPopup("San Gregorio Atlapulco", { radius: r })
    .setStyle({ color: "green" });
  L.circleMarker([19.361810914799786, -99.16320173025815])
    .addTo(map)
    .bindPopup(
      "Casa De los Pueblos y Comunidades Indigenas “Samir Flores Soberanes”",
      { radius: r }
    )
    .setStyle({ color: "blue" });

  /// some collapsed building were hard coded then I decided to do the better way
  L.circleMarker([19.296956, -99.130508])
    .addTo(map)
    .bindPopup("Colegio Enrique Rébsamen. 26 fatalities.", { radius: r })
    .setStyle({ color: "black" });

  L.circleMarker([19.412814, -99.171028])
    .addTo(map)
    .bindPopup("Amsterdam 107, colonia Condesa. 5 fatalities.", { radius: r })
    .setStyle({ color: "black" });

  L.circleMarker([19.366753, -99.156981])
    .addTo(map)
    .bindPopup("Eje 7, Emiliano Zapata. 7 people rescued, 10 fatalities.", {
      radius: r,
    })
    .setStyle({ color: "black" });

  L.circleMarker([19.303875, -99.122617])
    .addTo(map)
    .bindPopup(
      "Calzada del Hueso y Rancho Del Arco. 21 people rescued, 8 fatalities.",
      { radius: r }
    )
    .setStyle({ color: "black" });

  L.circleMarker([19.387725, -99.163794])
    .addTo(map)
    .bindPopup("Escocia 4. 17 fatalities.", { radius: r })
    .setStyle({ color: "black" });

  L.circleMarker([19.4163, -99.168417])
    .addTo(map)
    .bindPopup("Alvaro Obregon 286. 28 rescued people.", { radius: r })
    .setStyle({ color: "black" });

  L.circleMarker([19.284392, -99.136892])
    .addTo(map)
    .bindPopup(
      "Tecnológico de Monterrey, Campus Ciudad de México. 5 fatalities, 40 people wounded.",
      { radius: r }
    )
    .setStyle({ color: "black" });

  L.circleMarker([19.417514, -99.169025])
    .addTo(map)
    .bindPopup("Salamanca 107. 6 fatalities.", { radius: r })
    .setStyle({ color: "black" });

  L.circleMarker([19.413261, -99.164764])
    .addTo(map)
    .bindPopup("Eje 3, Medellin 107. 1 fatality.", { radius: r })
    .setStyle({ color: "black" });

  L.circleMarker([19.3383, -99.142106])
    .addTo(map)
    .bindPopup("Multifamiliar Tlalpan. 9 fatalities.19 people rescued.", {
      radius: r,
    })
    .setStyle({ color: "black" });

  L.circleMarker([19.493453, -99.122933])
    .addTo(map)
    .bindPopup("Coquimbo 911.", { radius: r })
    .setStyle({ color: "black" });

  L.circleMarker([19.373167, -99.137297])
    .addTo(map)
    .bindPopup("Bretaña 90.", { radius: r })
    .setStyle({ color: "black" });

  L.circleMarker([19.364156, -99.143203])
    .addTo(map)
    .bindPopup("Emiliano Zapata 56, 2 fatalities.", { radius: r })
    .setStyle({ color: "black" });

  L.circleMarker([19.399200035780765, -99.15892810405198])
    .addTo(map)
    .bindPopup("Enrique Rebsamen 241, 2 fatalities.", { radius: r })
    .setStyle({ color: "black" });

  const edificios = [
    {
      name: "Niños Héroes de Chapultepec 177",
      coords: L.latLng(19.3875778, -99.1460611),
    },
    {
      name: "Puebla 282. 2 fatalities.",
      coords: L.latLng(19.4211167, -99.1690778),
    },
    {
      name: "Avenida Sonora 149. 1 fatality.",
      coords: L.latLng(19.4145722, -99.1692278),
    },
    {
      name: "Viaducto Presidente Miguel Alemán 106. 1 fatality.",
      coords: L.latLng(19.402325, -99.1614194),
    },
    {
      name: "Paseo Galias 47. 4 fatalities.",
      coords: L.latLng(19.3207333, -99.0973833),
    },
    {
      name: "Avenida Santa Ana 300. 3 fatalities.",
      coords: L.latLng(19.3295417, -99.1249778),
    },
    {
      name: "Concepción Beistegui 1465.",
      coords: L.latLng(19.3874583, -99.1570778),
    },
    { name: "Saratoga 714.", coords: L.latLng(19.3695972, -99.150722) },
    {
      name: "Avenida 314 y Avenida 323.",
      coords: L.latLng(19.502996443604033, -99.08298130832412),
    },
    {
      name: "Avenida de las Torres 2050. 1 fatality.",
      coords: L.latLng(19.3429833, -99.141225),
    },
    {
      name: "Balsas 18. 4 fatalities.",
      coords: L.latLng(19.36045, -99.1399056),
    },
    {
      name: "Calzada de la Viga 1756.",
      coords: L.latLng(19.3593167, -99.121775),
    },
    {
      name: "Avenida de las Trancas 40. 3 fatalities",
      coords: L.latLng(19.2928444, -99.1236028),
    },
    {
      name: "Calzada Nueva Xochimilco-Tulyehualco 191. 1 fatality",
      coords: L.latLng(19.2477472, -99.0913028),
    },
    {
      name: "Vicente Guerrero 40. 1 fatality",
      coords: L.latLng(19.2541167, -99.058425),
    },
    {
      name: "Avenida México s/n. 7 fatalities.",
      coords: L.latLng(19.2534472, -99.0578806),
    },
    {
      name: "Cacaloac 4.",
      coords: L.latLng(19.318770879593163, -99.29248781274323),
    },
    {
      name: "Coahuila 10.",
      coords: L.latLng(19.412892435070084, -99.15529836172276),
    },
    {
      name: "Edimburgo 4.",
      coords: L.latLng(19.38788058503327, -99.1632681819632),
    },
    {
      name: "Av. Hidalgo 62.",
      coords: L.latLng(19.35063155073876, -99.15637221754618),
    },
    {
      name: "Cuautemoc 75.",
      coords: L.latLng(19.3524395077499, -99.15954499730627),
    },
    { name: "Dakota 45.", coords: L.latLng(19.347267, -99.146402) },
    {
      name: "Av. División del Nte. 2863.",
      coords: L.latLng(19.344951, -99.149667),
    },
    { name: "Escocia 29.", coords: L.latLng(19.348397, -99.146253) },
    { name: "California 17 a 19", coords: L.latLng(19.348899, -99.147436) },
    {
      name: "Calle de Antigua Taxqueña 1116",
      coords: L.latLng(19.342896, -99.147323),
    },
    {
      name: "Calle de Antigua Taxqueña 70",
      coords: L.latLng(19.343556, -99.149753),
    },
    { name: "Av.Pacífico 223", coords: L.latLng(19.340167, -99.153164) },
    { name: "Av.Pacífico 250", coords: L.latLng(19.334897, -99.147812) },
    // <!--    {name: "Paseos de Taxqueña", coords: L.latLng(xxxx, xxxx)}, // what number??? -->
    { name: "Cerro del Sombrero 107", coords: L.latLng(19.341387, -99.140984) },
    {
      name: "Av. Real de los Reyes 77",
      coords: L.latLng(19.341907, -99.156799),
    },
    { name: "Jardín Centenario 8", coords: L.latLng(19.348936, -99.162259) },
    { name: "Fernández Leal 137", coords: L.latLng(19.342732, -99.159887) },
    { name: "Av Pacífico 35", coords: L.latLng(19.345409, -99.157731) },
    { name: "Calz de Tlalpan 2015", coords: L.latLng(19.342913, -99.141627) },
    { name: "Calz de Tlalpan 2015", coords: L.latLng(19.342913, -99.141627) },
    { name: "Melchor Ocampo 202", coords: L.latLng(19.349709, -99.170431) },
    {
      name: "Calzada de Miramontes 1868",
      coords: L.latLng(19.342575029912656, -99.13721002656983),
    },
    { name: "Arturo Ibáñez 2-209", coords: L.latLng(19.34824, -99.1607) },
    {
      name: "Av Miguel Ángel de Quevedo 981",
      coords: L.latLng(19.343375, -99.152261),
    },
    {
      name: "San Francisco Figuraco 23",
      coords: L.latLng(19.347207, -99.160694),
    },
  ];

  edificios.forEach((ed) => {
    L.circleMarker(ed.coords)
      .addTo(map)
      .bindPopup(ed.name, { radius: r })
      .setStyle({ color: "black" });
  });

  // epicentre
  L.circleMarker([18.4, -98.72])
    .addTo(map)
    .bindPopup(
      "Epicentre of earthquake: The seismic event occurred at 1:14:40 p.m. on September 19, 2017, and had a magnitude of 7.1Mw; The epicenter was located on the border between the states of Puebla and Morelos, 12 km southeast of Axochiapan, Morelos and 120 km from Mexico City. The coordinates of the epicenter were 18.40 N latitude and -98.72 W longitude and a depth of 57 km.",
      { radius: r }
    )
    .setStyle({ color: "brown" });
}
