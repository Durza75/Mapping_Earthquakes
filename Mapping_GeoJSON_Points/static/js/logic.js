// 13.5.6 Mp GeoJSON Polygons
// Add console.log to check to see if our code is working.
console.log("working");

// We create the tile layer that will be the background of our map.
L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

// Create a base layer that holds both maps.
let baseMaps = {
  "Streets": streets,
  "Satellite Streets": satelliteStreets
};

// Create the map object with center, zoom level, and default layer.
let map = L.map('mapid', {
  center: [43.7, -79.3],
  zoom: 11,
  layers: [satelliteStreets]
});

// Pass our map layers into our layer control and add the layer control to the map.
L.control.layers(baseMaps).addTo(map);

// Accessing the Toronto neighborhoods GeoJSON URL.
let torontoHoods = "https://raw.githubusercontent.com/Durza75/Mapping_Earthquakes/main/torontoNeighborhoods.json";

// Grabbing our GeoJSON data.
d3.json(torontoHoods).then(function(data) {
  console.log(data);
  // Creating a GeoJSON layer with the retrieved data.
  L.geoJSON(data).addTo(map);
});