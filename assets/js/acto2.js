export function init() {
  const map = L.map("map").setView([19.421575765959087, -99.13345684132634], 3);
  const tiles = L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 20,
    attribution:
      '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
  }).addTo(map);
  const isNegative = (number) => number < 0;
  function properIncrement(map, targetLat, increment) {
    if (isNegative(map.getCenter().lat - targetLat)) {
      map.getCenter().lat += increment;
    } else {
      map.getCenter().lat += increment * -1;
    }
  }

  function limitFunction(map, targetLatLng, isTargetGreater) {
    if (isTargetGreater) {
      map.getCenter().lat > targetLatLng.lat;
    } else {
      map.getCenter().lat < targetLatLng.lat;
    }
  }
  // document.getElementById('zoomButton').addEventListener('click', function () {
  //     gradualZoom(map, 3, 17, 0.01, 1);
  // });
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

  function gradualMoveAndFixedZoom(map, targetLatLng, dur) {
    map.panTo(targetLatLng, { animate: true, duration: dur }); // 17 zoom
    map.setZoom(3);
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
  document.getElementById("mxcity").addEventListener("click", function () {
    var targetLatLng = L.latLng(19.421575765959087, -99.13345684132634);
    // if distance is less than X then pan else fly
    gradualFly(map, targetLatLng, 3, 11, 0.0085, 1);
    displayArea.innerHTML = " ";
  });
  document.getElementById("zoomIn").addEventListener("click", function () {
    map.zoomIn(3);
  });
  document.getElementById("atlapulco").addEventListener("click", function () {
    var targetLatLng = L.latLng(19.253905359048904, -99.0567149166776);
    gradualMove(map, targetLatLng, 6);
    displayArea.innerHTML = `<div class="texto"> San Gregorio Atlapulco is a town that pre-dates the imposition of the European colonial order. It is a ‘barrio’ of Mexico City characterised by its relationship with the land and the water and its knowledge of the plants and animals that have been fundamental for the imperial centre of Mexico from the Mexica days to the neoliberal order. </div> <div class="texto"> Days before the 2017 earthquake, rain ‘softened’ the land, which made it vulnerable to the seismic vibrations. More than 300 homes became uninhabitable. Most of the damage was not due to faulty buildings, but to sinkholes provoked by the ‘softness of the land’. The level of the canals of water, characteristic of this town, was diminished - a sign that profoundly worried the inhabitants of Atlapulco.</div> <div class="texto"> “When the 1957 earthquake occurred, I was very little and I don't remember well what happened. But in 1985 it was bigger and I remember that there was a lot of damage in the city. But this 2017 earthquake, this one was very strong here in San Gregorio. My house was very damaged here [sic] and they are working on the demolition. Meanwhile, I have been with some relatives, but I would like to have my house again.” </div>`;
  });
  L.circleMarker([19.253905359048904, -99.0567149166776])
    .addTo(map)
    .bindPopup("San Gregorio Atlapuclo", { radius: 0.1 });
  document.getElementById("ejido").addEventListener("click", function () {
    var targetLatLng = L.latLng(19.267011814138918, -99.05368880287611);
    // if distance is less than X then pan else fly
    gradualMove(map, targetLatLng, 2);
    displayArea.innerHTML = `<div class="texto"> This town, since the land redistribution efforts of the Mexican Revolution in 1922, has had two very different regimes of land ‘ownership’: ejidal (common land for social use) and private. Such arrangement has been severely compromised by the advance of private property in the late 20 century. Here, the chinampas (artificial, floating, patches of land are used to grow food) have historically been the way in which life is sustained by the people living here. Recently, as well, with the growing problem of water supply shortage to the wider Mexico City, the water that shapes the life of people from San Gregorio is being extracted to supply wealthier neighbourhoods.</div> <div class="texto"> Atlapulco had been considered a very productive place that grew lettuce, kale, verdolaga, brocoli, chili chicuarote, epazote, spinach, zucchini, and other legumes and vegetables. Similarly, it is considered an important centre for festivities like el Día de Muertos, el Día de la Candelaria and the patronal party for San Gregorio Magno.  </div>`;
  });
  L.circleMarker([19.267011814138918, -99.05368880287611])
    .addTo(map)
    .bindPopup("Ejid (comunal land) of San Gregorio Atlapulco", {
      radius: 0.1,
    });
  document.getElementById("bloqueo").addEventListener("click", function () {
    var targetLatLng = L.latLng(19.255150683877645, -99.06637646172592);
    // if distance is less than X then pan else fly
    gradualMove(map, targetLatLng, 2);
    displayArea.innerHTML = `<div class="texto"> Things changed considerably after the earthquake. Most of that year’s produce was lost. Because of the impeded mobility, many of the products that were not lost were unable to reach their consumers. Future crops were endangered by the low water flow in the canals.</div> <div class="texto">Sinkholes began appearing not only  because of rain combined with earthquakes. The Federal authorities in Mexico had started to extract water from San Gregorio and use it as a sewer to meet the water and disposal needs of other parts of Mexico City. It remains unclear what was the role of this under-documented and opaque extraction for the consequences of the 2017 earthquake. If extraction continues, other sinkholes will appear and the water levels will diminish further making agriculture impossible.</div>`;
  });
  L.circleMarker([19.255150683877645, -99.06637646172592])
    .addTo(map)
    .bindPopup("Topeka Factory Distaster Site.", { radius: 0.1 });
}

export function init2() {
  const map = L.map("map").setView([19.253905359048904, -99.0567149166776], 3);

  const tiles = L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 20,
    attribution:
      '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
  }).addTo(map);

  const isNegative = (number) => number < 0;

  function properIncrement(map, targetLat, increment) {
    if (isNegative(map.getCenter().lat - targetLat)) {
      map.getCenter().lat += increment;
    } else {
      map.getCenter().lat += increment * -1;
    }
  }

  function limitFunction(map, targetLatLng, isTargetGreater) {
    if (isTargetGreater) {
      map.getCenter().lat > targetLatLng.lat;
    } else {
      map.getCenter().lat < targetLatLng.lat;
    }
  }

  // document.getElementById('zoomButton').addEventListener('click', function () {
  //     gradualZoom(map, 3, 17, 0.01, 1);
  // });

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

  function gradualMoveAndFixedZoom(map, targetLatLng, dur) {
    map.panTo(targetLatLng, { animate: true, duration: dur }); // 17 zoom
    map.setZoom(3);
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

  document.getElementById("mxcity").addEventListener("click", function () {
    var targetLatLng = L.latLng(19.253905359048904, -99.0567149166776);
    // if distance is less than X then pan else fly
    gradualFly(map, targetLatLng, 3, 11, 0.0085, 1);
    displayArea.innerHTML = " ";
  });

  document.getElementById("zoomIn").addEventListener("click", function () {
    map.zoomIn(3);
  });

  document
    .getElementById("casaDeLosPueblos")
    .addEventListener("click", function () {
      var targetLatLng = L.latLng(19.361810914799786, -99.16320173025815);
      gradualMove(map, targetLatLng, 6);
      displayArea.innerHTML =
        '<div class="texto"> Since 2022 the people of San Gregorio Atlapulco have started to organise against the exploitation of water that endangers life and land in their town. In December 2022, police violently suppressed a protest against the hydro project of the government. </div> <div class="texto"> In a meeting at the Samir Flores House of the People in June 2023, there was a consensus to organise the Third National Assembly for Water and Life. </div>';
    });

  L.circleMarker([19.361810914799786, -99.16320173025815])
    .addTo(map)
    .bindPopup(
      "Casa de los Pueblos y Comunidades Indígenas Samir Flores Soberanes",
      { radius: 0.1 }
    );

  document
    .getElementById("mexquititlan")
    .addEventListener("click", function () {
      var targetLatLng = L.latLng(20.052380597481378, -100.0659327939473);
      // if distance is less than X then pan else fly
      gradualFly(map, targetLatLng, 3, 14, 0.01, 1);
      displayArea.innerHTML =
        '<div class="texto"> The Second National Assembly for Water and Life was held at Santiago Mexquititlán. </div>';
    });

  L.circleMarker([20.052380597481378, -100.0659327939473])
    .addTo(map)
    .bindPopup("Santiago Mexquititlán (Querétaro, México)", { radius: 5 });

  document.getElementById("zacatepec").addEventListener("click", function () {
    var targetLatLng = L.latLng(19.120567487062814, -98.35780597531962);
    // if distance is less than X then pan else fly
    gradualFly(map, targetLatLng, 3, 14, 0.01, 1);
    displayArea.innerHTML =
      '<div class="texto"> The First National Assembly for Water and Life was held at Santa María Zacatepec. </div>';
  });

  L.circleMarker([19.120567487062814, -98.35780597531962])
    .addTo(map)
    .bindPopup("Santa María Zacatepec (Puebla, México)", { radius: 5 });

  document.getElementById("atlapulco").addEventListener("click", function () {
    var targetLatLng = L.latLng(19.253905359048904, -99.0567149166776);
    // if distance is less than X then pan else fly
    gradualFly(map, targetLatLng, 3, 14, 0.01, 1);
    displayArea.innerHTML =
      '<div class="texto"> The Third Assembly for the Water and Life was held here. One topic discussed are the new forms of dispossession experienced in the south of Mexico City, identified as gentrification and turistification.</div> <div class="texto"> “Now they are looking to convert the chinampa into entertainment gardens for foreigners and the privileged.” </div> <div class="texto"> In these assemblies the struggles for housing, land and water are becoming one and the same struggle. Ideas about communal land and the suppression of private property are discussed as a reality grounded in legal, existing figures. </div> <div class="texto"> Land, water and housing are not acknowledged but rather claimed back. </div>';
  });

  L.circleMarker([19.253905359048904, -99.0567149166776])
    .addTo(map)
    .bindPopup("San Gregorio Atlapulco, Mexico City", { radius: 5 });
}
