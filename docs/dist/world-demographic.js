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
    .colors(['#ffffff', '#543005','#8c510a','#bf812d','#dfc27d','#f6e8c3','#f5f5f5','#c7eae5','#80cdc1','#35978f','#01665e','#003c30'])
    .unitId("iso3");

d3.csv("/earthLings/data/map.countries.csv").then(data => {
    map.draw(d3.select("#map").datum(data));
});
