export function init() {
  //- window.setupFlashNotice(); // FIXME
  const map = L.map("map").setView([19.361810914799786, -99.16320173025815], 3);
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
    var targetLatLng = L.latLng(19.361810914799786, -99.16320173025815);
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
      displayArea.innerHTML = `<div class="texto"> October 12, 2020 – The Otomies in Mexico City, with other indigenous comunities within the city, control and occupy the building of the Federal National Institute for Indigenous People (INPI) in the south of the city. \“In the face of government indifference, we have resolved that we remove this property from the assets of the federal government and become the assets of the Indigenous Peoples and Communities that make up the National Indigenous Congress – Indigenous Government Council\” </div> <div class="texto"> August 13, 2021 – Almost one year after the take-over of the INPI, the building, and its activities towards fair housing for Mexico City is renamed as The House of Peoples and Indigenous Communities Samir Flores Soberanes. </div> <div class="texto"> February, 2022 – The Mexican Government and the City Government are called to a dialogue with the leaders in control of the House of the Peoples and Indigenous Communities Samir Flores Soberanes. The government expresses an interest to recuperate some ‘invaluable indigenous art pieces’ safeguarded in the building.</div> <div class="texto"> July 22, 2023. Government cuts the electricity at the House of the Samir Flores Soberanes in an attempt to draw them out. </div> <div class="texto"> October 15, 2023 – Two days after the two year anniversary of the take-over of the INPI and the establishment of the Samir Flores House of the People, the police attacks the house in an attempt to take back the building, they fail. The people is in control of the house and, from there, they organise and strategise for better housing conditions for everybody in Mexico City. </div>`;
    });
  L.circleMarker([19.361810914799786, -99.16320173025815])
    .addTo(map)
    .bindPopup(
      "Casa de los Pueblos y Comunidades Indígenas Samir Flores Soberanes",
      { radius: 0.1 }
    );
  document
    .getElementById("corazonOtomi")
    .addEventListener("click", function () {
      var targetLatLng = L.latLng(19.42282088386217, -99.16495620901033);
      // if distance is less than X then pan else fly
      gradualMove(map, targetLatLng, 2);
      displayArea.innerHTML = `<div class="texto"> Febrero 15, 2008 – Two explosions caused by anonymous agents ‘force’ authorities to raid the property and arrest some Otomí people living at the location known as La Casona in Av. Chapultepec 380. </div> <div class="texto"> September 19, 2017 – The earthquake pushed to the streets the inhabitants of the properties (Roma 18, Zacatecas 74 and Guanajuato 200) in Roma and Zona Rosa neighborhoods. </div> <div class="texto"> "We know that big capital and the State are taking advantage of the tragedy generated by the earthquakes of September 7 and 19, 2017 to try to establish social and territorial control over the victims. Mexicans already know that the State favors the real estate cartel and can strip them of their land for the benefit of speculation and capitalist profit." </div>`;
    });
  L.circleMarker([19.42282088386217, -99.16495620901033])
    .addTo(map)
    .bindPopup(
      "La Casona, a house occupied by the Otomí community since 1996.",
      {
        radius: 0.1,
      }
    );
  document.getElementById("roma18").addEventListener("click", function () {
    var targetLatLng = L.latLng(19.429208211985507, -99.1571165572578);
    // if distance is less than X then pan else fly
    gradualMove(map, targetLatLng, 2);
    displayArea.innerHTML = `<div class="texto"> September 19, 2017 – The earthquake pushed to the streets the inhabitants of the properties (Roma 18, Zacatecas 74 and Guanajuato 200) in Roma and Zona Rosa neighborhoods. </div> <div class="texto"> September, 2018 – Otomies are violently removed from their camps in front of the damaged house where they wished to resume their communal residencies in the Roma and Zona Rosa neighbourhoods.</div>`;
  });
  L.circleMarker([19.429208211985507, -99.1571165572578])
    .addTo(map)
    .bindPopup("Roma 18", { radius: 0.1 });
  document.getElementById("zacatecas74").addEventListener("click", function () {
    var targetLatLng = L.latLng(19.41593525360464, -99.15766371492477);
    // if distance is less than X then pan else fly
    gradualMove(map, targetLatLng, 2);
    displayArea.innerHTML = `<div class="texto"> September 19, 2017 – The earthquake pushed to the streets the inhabitants of the properties (Roma 18, Zacatecas 74 and Guanajuato 200) in Roma and Zona Rosa neighborhoods. </div> <div class="texto"> March 2020 – The start of the global pandemic freezes the normalisation of Otomies housing process breaking any possibility for a peaceful recognition of their communities and their belonging to Mexico City. </div> <div class="texto"> December, 2020 – The Mexican government recognises the people’s expropriation of the property in Zacatecas 74. </div>`;
  });
  L.circleMarker([19.41593525360464, -99.15766371492477])
    .addTo(map)
    .bindPopup("Zacatecas 74", { radius: 0.1 });
  document
    .getElementById("guanajuato200")
    .addEventListener("click", function () {
      var targetLatLng = L.latLng(19.416236298309073, -99.163346191453);
      // if distance is less than X then pan else fly
      gradualMove(map, targetLatLng, 2);
      displayArea.innerHTML = `<div class="texto"> September 19, 2017 – The earthquake pushed to the streets the inhabitants of the properties (Roma 18, Zacatecas 74 and Guanajuato 200) in Roma and Zona Rosa neighborhoods. </div> <div class="texto"> March 2020 – The start of the global pandemic freezes the normalisation of Otomies housing process breaking any possibility for a peaceful recognition of their communities and their belonging to Mexico City. </div>`;
    });
  L.circleMarker([19.416236298309073, -99.163346191453])
    .addTo(map)
    .bindPopup("Guanajuato 200", { radius: 0.1 });
  document.getElementById("londres7").addEventListener("click", function () {
    var targetLatLng = L.latLng(19.422541846316363, -99.17128230405147);
    // if distance is less than X then pan else fly
    gradualMove(map, targetLatLng, 2);
    displayArea.innerHTML = `<div class="texto"> 1985 – The building hosting the Spanish Second Republic on Exile is damaged and the last vestiges of the Socialist Government Resisting Franquismo are lost in the debris. </div> <div class="texto"> 1996 – Otomi immigrants occupy several houses in la Zona Rosa and La Roma. One of this houses is the old building of the Spanish Republic. </div> <div class="texto"> September, 2017 – The former embassy and government house of the Spanish Republic among other houses occupied by Otomies are deemed inhabitable. The communities demand the government to make the house habitable once again and regularise their housing situation. </div>`;
  });
  L.circleMarker([19.422541846316363, -99.17128230405147])
    .addTo(map)
    .bindPopup("Londres 7", { radius: 0.1 });
  document
    .getElementById("mexquititlan")
    .addEventListener("click", function () {
      var targetLatLng = L.latLng(20.052380597481378, -100.0659327939473);
      // if distance is less than X then pan else fly
      gradualFly(map, targetLatLng, 3, 14, 0.01, 1);
      displayArea.innerHTML = `<div class="texto"> September 19, 1985 – After the earthquake, middle-class inhabitants of Mexico City would move away from downtown Mexico City, as deemed insecure. A Otomí group of people from Santiago Mexquititlán (Querétaro, México) slowly but steadily migrated to the city’s rotting core attempting to live a better life </div> <div class="texto"> "We came to the city because on the ranch we are in poverty; For nine years I lived on the street, we slept in the Angel de la Independencia and in the median of Chapultepec Avenue, next to the Insurgentes metro. We asked for water in stores to wash clothes and bathe, and we cooked in the street with firewood. In 1996, twelve families got together and we came to move into this property, which was empty at the time. We went inside to have a place to protect ourselves, because in the street it is very cold or hot, or it is raining; Furthermore, the children suffered a lot and we always carried the clothes, blankets, tortillas and dolls that we sell in the Zona Rosa. The land was full of rubble, stones, poles and beams: in a few weeks we already had about 16 families inside. One early Sunday, when some of us were cleaning and fixing a floor, a fence fell over us; One person died and two of us ended up in the hospital, and since then I became crippled. That's why we are here." </div>`;
    });
  L.circleMarker([20.052380597481378, -100.0659327939473])
    .addTo(map)
    .bindPopup("Santiago Mexquititlán (Querétaro, México)", { radius: 5 });
  document.getElementById("amilcingo").addEventListener("click", function () {
    var targetLatLng = L.latLng(18.739449507337913, -98.77132690768327);
    // if distance is less than X then pan else fly
    gradualFly(map, targetLatLng, 3, 14, 0.01, 1);
    displayArea.innerHTML = `<div class="texto"> February 20, 2019 – Samir Flores Soberanes, Nahua activist in defence of land and water, is murdered. He was blocking a so-called mega-project of infrastructure promoted by the current government. </div>`;
  });
  L.circleMarker([18.739449507337913, -98.77132690768327])
    .addTo(map)
    .bindPopup("Amilcingo", { radius: 5 });
}
