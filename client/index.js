const mapboxgl = require("mapbox-gl");
const buildMarker = require("./marker.js");

mapboxgl.accessToken = "pk.eyJ1Ijoic253b290ZW4iLCJhIjoiY2pkMXVvY2d6MWhqMjMzbzQwZWNqbWJyNiJ9.kUYt_xOxJSW-n4ZxjFckmA";

const fullstackCoords = [-74.009, 40.705]

const map = new mapboxgl.Map({
  container: "map",
  center: fullstackCoords, // FullStack coordinates
  zoom: 12, // starting zoom
  style: "mapbox://styles/mapbox/streets-v10" // mapbox has lots of different map styles available.
});

const marker = buildMarker("activities", fullstackCoords);
marker.addTo(map);
