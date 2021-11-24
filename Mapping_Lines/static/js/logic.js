// 13.4.3 Map Lines
// Add console.log to check to see if our code is working.
console.log("working");
console.log(API_KEY)
// Create the map object with a center and zoom level.
let map = L.map('mapid').setView([37.6213, -122.3790], 5);
var accessToken = API_KEY;

// Coordinates for each point to be used in the line.
let line = [
    [33.9416, -118.4085],
    [37.6213, -122.3790],
    [40.47899, -111.9791],
    [47.4502, -122.3088]
  ];

// Create a polyline using the line coordinates and make the line red.
L.polyline(line, {
    color: "yellow"
    mapStyle: "satellite-streets-v11"
  }).addTo(map);


// We create the tile layer that will be the background of our map.
L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/static/-122.3486,37.8169,9,0/300x200?access_token=pk.eyJ1IjoiZXN0cm9iYWNoIiwiYSI6ImNrdzFiYW94cTAxbnQybm1teHNrMHQzOWcifQ.upxd6BqjfLicz0i00nXCTw&SameSite=None').addTo(map)
L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: API_KEY
}).addTo(map);

// Then we add our 'graymap' tile layer to the map.
// streets.addTo(map);

// Get data from cities.js
let cityData = cities;

// Loop through the cities array and create one marker for each city.
cityData.forEach(function(city) {
    console.log(city)
    L.circleMarker(city.location, {
        radius: city.population/100000
    })
    // L.marker(city.location)
    .bindPopup("<h2>" + city.city + ", " + city.state + "</h2> <hr> <h3>Population " + city.population.toLocaleString() + "</h3>")
  .addTo(map);
});




