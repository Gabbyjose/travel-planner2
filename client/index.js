const mapboxgl = require("mapbox-gl");
const buildMarker = require("./marker.js");

mapboxgl.accessToken = "pk.eyJ1Ijoic253b290ZW4iLCJhIjoiY2pkMXVvY2d6MWhqMjMzbzQwZWNqbWJyNiJ9.kUYt_xOxJSW-n4ZxjFckmA";

const fullstackCoords = [-74.009, 40.705]

fetch('/api/attractions')
.then(result => result.json())
.then(data => {
  const elementIds = ["hotels-choices", "activities-choices", "restaurants-choices"]
  for(let i=0; i<data.length; i++){
    for(let x=0; x<data[i].length; x++){
      let option = document.createElement("option");
      option.text = data[i][x].name;
      let select = document.getElementById(elementIds[i]);
      select.appendChild(option);
    }
  }
})
.catch((err) => console.log(err));

document.getElementById("activities-add").addEventListener("click", function() {
  console.log('does this even click tho');
})

document.getElementById("restaurants-add").addEventListener("click", function() {
  console.log('does this even click tho');
})

document.getElementById("hotels-add").addEventListener("click", function() {
  console.log('does this even click tho');
})

const map = new mapboxgl.Map({
  container: "map",
  center: fullstackCoords, // FullStack coordinates
  zoom: 12, // starting zoom
  style: "mapbox://styles/mapbox/streets-v10" // mapbox has lots of different map styles available.
});

const marker = buildMarker("activities", fullstackCoords);
marker.addTo(map);
