// We define a variable holding the current key to visualize on the map.
var currentColumn = "PER_CAPITA_GDP";

// Listen to changes of the dropdown to select the key to visualize on the map.
d3.select("#select-key").on("change", function(a) {
  // Change the current key and call the function to update the colors.
  currentColumn = d3.select(this).property("value");
  // Redo map
  map.column(currentColumn).update();
});

var quantize = d3.scaleQuantize()
    .ticks(25);

var map = d3.choropleth()
    .geofile("/earthLings/dist/topojson/world/countries.json")
    .rotate([0,0,0])
    .column(currentColumn)
    .legend(true)
    .valueScale(d3.scaleQuantize)
    .unitId("iso3");

d3.csv("/earthLings/data/map.countries.csv").then(data => {
    map.draw(d3.select("#map").datum(data));
});
