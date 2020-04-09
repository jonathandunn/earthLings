// We define a variable holding the current key to visualize on the map.
var currentColumn = "Uniqueness Values for English (Web)";

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
    .valueScale(d3.scaleQuantile)
    .colors(['#deedcf', '#cae5bb', '#b3dda6', '#99d492', '#7ecb7f', '#6ac276', '#56b870', '#43ae6c', '#30a46b', '#1d9a6c', '#198c75', '#147e7b', '#116270', '#0d4761', '#0c6051'])
    .legend(true)
    .unitId("iso3");

d3.csv("/data/map.dialects.csv").then(data => {
    map.draw(d3.select("#map").datum(data));
});
