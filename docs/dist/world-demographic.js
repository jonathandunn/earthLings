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
    .geofile("/dist/topojson/world/countries.json")
    .rotate([0,0,0])
    .column(currentColumn)
    .legend(true)
    .colors(['#ffffcc','#ffeda0','#fed976','#feb24c','#fd8d3c','#fc4e2a','#e31a1c','#bd0026','#800026'])
    .unitId("iso3");

d3.csv("/data/map.countries.csv").then(data => {
    map.draw(d3.select("#map").datum(data));
});
