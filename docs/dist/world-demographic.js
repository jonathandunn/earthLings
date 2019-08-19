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
    .colors(['#a50026','#d73027','#f46d43','#fdae61','#fee090','#ffffbf','#e0f3f8','#abd9e9','#74add1','#4575b4','#313695'])
    .valueScale(d3.scalePow)
    .unitId("iso3");

d3.csv("/earthLings/data/map.countries.csv").then(data => {
    map.draw(d3.select("#map").datum(data));
});
