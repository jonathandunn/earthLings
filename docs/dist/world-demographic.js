// We define a variable holding the current key to visualize on the map.
var currentColumn = 'PCT_WORDS_CC4';

// Listen to changes of the dropdown to select the key to visualize on the map.
d3.select('#select-key').on('change', function(a) {
  // Change the current key and call the function to update the colors.
  currentColumn = d3.select(this).property('value');
  // Redo map
  d3.csv('/earthLings/data/map.countries.csv').then(data => {
    map.draw(d3.select('#map').datum(data));
});

var map = d3.choropleth()
    .geofile('/earthLings/dist/topojson/world/countries.json')
    .column(currentColumn)
    .legend(true)
    .unitId('iso3');

d3.csv('/earthLings/data/map.countries.csv').then(data => {
    map.draw(d3.select('#map').datum(data));
});
