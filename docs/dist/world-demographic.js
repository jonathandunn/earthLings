// We define a variable holding the current key to visualize on the map.
var currentColumn = "PER_CAPITA_GDP";

// Listen to changes of the dropdown to select the key to visualize on the map.
d3.select("#select-key").on("change", function(a) {
  // Change the current key and call the function to update the colors.
  currentColumn = d3.select(this).property("value");
  // Redo map
  map.column(currentColumn).update();
});

var map = d3.choropleth()
    .geofile("/earthLings/dist/topojson/world/countries.json")
    .rotate([0,0,0])
    .column(currentColumn)
    .legend(true)
    .colors(['#fff7fb','#ece2f0','#d0d1e6','#a6bddb','#67a9cf','#3690c0','#02818a','#016c59','#014636'])
    .unitId("iso3");

d3.csv("/earthLings/data/map.countries.csv").then(data => {
    map.draw(d3.select("#map").datum(data));
});
