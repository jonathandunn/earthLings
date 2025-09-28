
// We define a variable holding the current key to visualize on the map.
var currentColumn = "facebook_opt-2.7b";

// Listen to changes of the dropdown to select the key to visualize on the map.
d3.select('#select-key').on('change', function(a) {
  // Change the current key and call the function to update the colors.
  currentType = d3.select(this).property('value');
  currentColumn = currentType
  // Redo map
  map.column(currentColumn).update()
});

var format_dec = function(d) {
    d = d;
    return (Math.round(d * 100) / 100).toFixed(3);
}

var map = d3.choropleth()
    .geofile("/dist/topojson/world/countries.json")
    .rotate([0,0,0])
    .column(currentColumn)
    .legend(true)
    .format(format_dec)
    .valueScale(d3.scaleQuantile)
    .colors(['#deedcf', '#cae5bb', '#b3dda6', '#99d492', '#7ecb7f', '#6ac276', '#56b870', '#43ae6c', '#30a46b', '#1d9a6c', '#198c75', '#147e7b', '#116270', '#0d4761', '#0c6051'])
    .unitId("iso3");

d3.csv("/data/map.llm.csv").then(data => {
    map.draw(d3.select("#map").datum(data));
});
