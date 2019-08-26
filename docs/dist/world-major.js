// We define a variable holding the current key to visualize on the map.
var currentColumn = 'N_CC4_eng';
var currentType = 'N_';
var currentData = 'CC4_';
var currentLanguage = 'eng';

// Listen to changes of the dropdown to select the key to visualize on the map.
d3.select('#select-type').on('change', function(a) {
  // Change the current key and call the function to update the colors.
  currentType = d3.select(this).property('value');
  currentColumn = currentType + currentData + currentLanguage;
  // Get the right format
  if (currentType == 'N_') {
    var format = format_mil;
} else {
    var format = format_per;
}
  // Redo map
  map.column(currentColumn).format(format).update()
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

var format_mil = function(d) {
    d = d / 1000000;
    return d3.format(',.02f')(d) + 'M';
}

var format_per = function(d) {
    d = d * 100;
    return d3.format(',.01f')(d) + '%';
}

var map = d3.choropleth()
    .geofile('/dist/topojson/world/countries.json')
    .rotate([0,0,0])
    .column(currentColumn)
    .colors(['#ffffcc','#ffeda0','#fed976','#feb24c','#fd8d3c','#fc4e2a','#e31a1c','#bd0026','#800026'])
    .legend(true)
    .format(format_mil)
    .unitId('iso3');

d3.csv('/data/map.languages_major.csv').then(data => {
    map.draw(d3.select('#map').datum(data));
});
