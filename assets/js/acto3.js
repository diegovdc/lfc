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
    displayArea.innerHTML =
      "Green - historic site of garment production, purple - sites related to the 1985 earthquake, blue - sites related to the 2017 earthquake";
  });

  document.getElementById("zoomIn").addEventListener("click", function () {
    map.zoomIn(3);
  });

  document.getElementById("oldAbbey").addEventListener("click", function () {
    var targetLatLng = L.latLng(19.421575765959087, -99.13345684132634);
    gradualMove(map, targetLatLng, 6);
    displayArea.innerHTML =
      '<div class="texto"> The traditional garment production district in the Obrera Neighbourhood (The worker’s neighbourhood) was stroke catastrophically.</div> <div class="texto">The factories in this neighbourhood exists since the 19 c. In 1822, at the end of the independence war against Spain multiple buildings, of religious origin, were turned into artisanal textile workshops. This one was an abbey (San Antonio’s Abbey) transformed into a workshop for textile manufacturing. Now it is social housing for victims of the 85 earthquake.</div><div class="texto">As modernity kicked-in in the 20 century, gradually many similar building sprout for industrial textile work. Most of the workers were racialised woman. Some of them immigrants from Central America, many of them indigenous or peasant-origin from rural Mexico. The processes of land dispossession were slowly now manifesting in the form of an exploited working class.</div>';
  });

  L.circleMarker([19.421575765959087, -99.13345684132634])
    .addTo(map)
    .bindPopup("Old location of the San Antonio Abad Textile Workshop", {
      radius: 0.1,
    })
    .setStyle({ color: "green" });

  document.getElementById("metro").addEventListener("click", function () {
    var targetLatLng = L.latLng(19.4156137682026, -99.13482011994381);
    // if distance is less than X then pan else fly
    gradualMove(map, targetLatLng, 2);
    displayArea.innerHTML =
      '<div class="texto">  On September 23 of 1985, several surviving companions of the Topeka factory disaster set up camp on the only road open to traffic on Calzada de Tlalpan – where several textile factories were located – protecting the machinery. Under the slogan “A costurera is worth more than all the machinery in the world!”, they demanded payment of their settlements and compensation for the families of the victims. </div> <div class="texto"> The women textile workers organised and founded the Sindicato de Costureras «19 de Septiembre» (Union of Textile Workers 19th of September). The maquilas that NAFTA imposed on Mexican women will meet resistance from this union during the Neoliberal era.</div>';
  });

  L.circleMarker([19.4156137682026, -99.13482011994381])
    .addTo(map)
    .bindPopup("Outside San Antonio Abad Metro Station", { radius: 0.1 })
    .setStyle({ color: "purple" });

  document.getElementById("topeka").addEventListener("click", function () {
    var targetLatLng = L.latLng(19.414905456991544, -99.13533510405162);
    // if distance is less than X then pan else fly
    gradualMove(map, targetLatLng, 2);
    displayArea.innerHTML =
      '<div class="texto"> The earthquake of 85 collapsed many textile workshops, prominently the Topeka factory in the street Manuel José Othón almost at San Antonio Abad St. in the Obrera neighbourhood. Between 600 and 1600 women workers died after the 12 story building crushed them. With evidence of women being alive and trapped in the factory, the government used heavy machinery to clear the site; The (living and dead) bodies of women were removed as debris in an attempt from the government and industry leaders to rescue the \'valuable\' machinery of the recently modernised factory. </div> <div class="texto"> In 2006 the union of textile workers found by the 85 survivors was extinguished for lack of members. The prominent leaders of the 85, that had won important battles for workers and have stand as a global symbol of women worker struggle around the world, were either retired, dead or became professional politicians. Some others formed a Civil Association to empower young women interested in textile work with workshops and other alternatives to unionised work. In January, 2024, the building that hosted the September 19th union was given to the surviving activists and now is going to be used permanently for support of textile workers.</div> ';
  });

  L.circleMarker([19.414905456991544, -99.13533510405162])
    .addTo(map)
    .bindPopup("Topeka Factory Distaster Site.", { radius: 0.1 })
    .setStyle({ color: "purple" });

  document.getElementById("bolivar").addEventListener("click", function () {
    var targetLatLng = L.latLng(19.42257963096786, -99.13966766085785);
    // if distance is less than X then pan else fly (not implemented)
    gradualMove(map, targetLatLng, 2);
    displayArea.innerHTML =
      '<div class="texto"> After commemorating the earthquake of 1985 with a massive city-wide earthquake drill, on September 19th of 2017, at 13:14 hours, the earth shook again. A new earthquake collapsed the building at Bolívar and Chimalpopoca under the weight of transnational capitalism. Between 50 and 100 people were trapped inside the building. There is no way to know exactly who was inside because the people working there were doing it in unregulated conditions of abuse and exploitation. Here many of you would expect to read about corruption of Mexican authorities. But there is no point to repeat that trope. The perceived corruption of the global south can only exist in relationship to the actual, pervasive and deadlier corruption that has one name only: (global, patriarchal, imperial, white-supremacist) capitalism. </div> <div class="texto">The building had a textile factory as well as offices owned by Argentinian-Israeli and Taiwanese-Paraguayan business owners. Both lived off the exploitation of immigrant woman from Asia, Central America and other parts of Mexico. </div> <div class="texto"> In the days to come, the site of the factory bloomed with art-works, offerings, flower arrangements, colours and all kind of signs allowing women to mourn, love, think, organise, rage and whatever was necessary to heal their wounds.  </div>';
  });

  L.circleMarker([19.42257963096786, -99.13966766085785])
    .addTo(map)
    .bindPopup("Zacatecas 74", { radius: 0.1 });

  document
    .getElementById("puntoGozadera")
    .addEventListener("click", function () {
      var targetLatLng = L.latLng(19.43003296539544, -99.14382650360163);
      // if distance is less than X then pan else fly
      gradualMove(map, targetLatLng, 2);
      displayArea.innerHTML =
        '<div class="texto"> The memory of 85 keeps resonating within people in Mexico City. Not only because support and efforts were given from what remained of the organised workers of 85. Close to the site of the factory, Punto Gozadera, a feminist-anarchist cultural and political centre, informed by the memory of 85, organised feminist brigades as well as functioned as an operation centre for other brigades of volunteers to help in the removal of debris in search of life. </div> <div class="texto"> The military and police, pressured by big financial interest, attempted to take command of the rescue efforts in order to obscure the irregularities of 168 Bolívar’s building, and recover (and guard) as much merchandise, materials, documents that could benefit the businesses and their (new) owners. The authorities tried to dissuade volunteers using the same disinformation tactics used on 85. They tried to discourage people from gathering in the site arguing how dangerous it was, how useless and that volunteers were ‘on the way’ of professional rescue teams. </div> <div class="texto"> The order to stay at home was superseded by the duty to help each other as has been before and will be in the crises to come.</div> <div class="texto"> The battle of information was lost by the government and industry as the presence of memories that refuse to be forgotten. At the end, the authorities were only able to use force to disperse the feminist brigade and the rest of the volunteers. </div>';
    });

  L.circleMarker([19.43003296539544, -99.14382650360163])
    .addTo(map)
    .bindPopup("Punto Gozadera", { radius: 0.1 });
}
