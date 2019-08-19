// We define a variable holding the current key to visualize on the map.
var currentColumn = 'N_CC4_aai';
var currentType = 'N_';
var currentData = 'CC4_';
var currentLanguage = 'aai';

// Listen to changes of the dropdown to select the key to visualize on the map.
d3.select('#select-type').on('change', function(a) {
  // Change the current key and call the function to update the colors.
  currentType = d3.select(this).property('value');
  currentColumn = currentType + currentData + currentLanguage;
  // Redo map
  map.column(currentColumn).update()
});

// Listen to changes of the dropdown to select the key to visualize on the map.
d3.select('#select-data').on('change', function(a) {
  // Change the current key and call the function to update the colors.
  currentData = d3.select(this).property('value');
  currentColumn = currentType + currentData + currentLanguage;
  // Redo map
  map.column(currentColumn).update()
});

// Listen to changes of the dropdown to select the key to visualize on the map.
d3.select('#select-language').on('change', function(a) {
  // Change the current key and call the function to update the colors.
  currentLanguage = d3.select(this).property('value');
  currentColumn = currentType + currentData + currentLanguage;
  // Redo map
  map.column(currentColumn).update()
});

var map = d3.choropleth()
    .geofile('/earthLings/dist/topojson/world/countries.json')
    .rotate([0,0,0])
    .column(currentColumn)
    .colors(['#ffffcc','#ffeda0','#fed976','#feb24c','#fd8d3c','#fc4e2a','#e31a1c','#bd0026','#800026'])
    .legend(true)
    .unitId('iso3');

d3.csv('/earthLings/data/map.languages_minor.csv').then(data => {
    map.draw(d3.select('#map').datum(data));
});
