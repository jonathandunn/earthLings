// We define a variable holding the current key to visualize on the map.
var currentColumn = 'Total Words in Web Corpus eng';
var currentLanguage = 'eng_inner';

// Listen to changes of the dropdown to select the key to visualize on the map.
d3.select('#select-language').on('change', function(a) {
  // Change the current key and call the function to update the colors.
  currentLanguage = d3.select(this).property('value');
  currentColumn = currentLanguage;
  // Redo map
  map.column(currentColumn).update()
});

var format_mil = function(d) {
    d = d / 1000000;
    return d3.format(',.02f')(d) + 'M';
}

var map = d3.choropleth()
    .geofile('/dist/topojson/world/countries.json')
    .rotate([0,0,0])
    .column(currentColumn)
    .colors(['#ffffcc','#ffeda0','#fed976','#feb24c','#fd8d3c','#fc4e2a','#e31a1c','#bd0026','#800026'])
    .legend(true)
    .format(format_mil)
    .unitId('iso3');

d3.csv('/data/map.geowac.csv').then(data => {
    map.draw(d3.select('#map').datum(data));
});
