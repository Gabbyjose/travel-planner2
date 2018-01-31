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

const array = ["hotels","activities", "restaurants"]

array.forEach(function(attractionType){

  document.getElementById(`${attractionType}-add`).addEventListener("click", function(){
    element = document.createElement("li")
    currentchoice = document.getElementById(`${attractionType}-choices`).value
    element.innerHTML = currentchoice

    document.getElementById(`${attractionType}-list`).appendChild(element)

    fetch("/api/attractions")
      .then(result=>result.json())
      .then(data=>{
        let index = array.indexOf(`${attractionType}`);

        for(let i =0; i< data[index].length; i++){

          if(data[index][i].name === currentchoice){
            const coords = data[index][i].place.location;
            const marker = buildMarker(`${attractionType}`, coords)
            marker.addTo(map)
            addButton(element, marker);
            map.flyTo({center: coords, zoom: 16});
          }
        }
      })
  })

});

function addButton(element, marker){
  const button = document.createElement("button");
  button.innerHTML = 'x';
  button.attribute = ("class", "cancel");
  button.onclick = function(){
    element.remove();
    marker.remove();
    map.flyTo({center: fullstackCoords, zoom: 12})

  }
  element.appendChild(button);
}


const map = new mapboxgl.Map({
  container: "map",
  center: fullstackCoords, // FullStack coordinates
  zoom: 12, // starting zoom
  style: "mapbox://styles/mapbox/streets-v10" // mapbox has lots of different map styles available.
});

const marker = buildMarker("activities", fullstackCoords);
marker.addTo(map);
