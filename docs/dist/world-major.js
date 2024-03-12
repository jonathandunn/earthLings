// We define a variable holding the current key to visualize on the map.
var currentColumn = 'Total Words in Web4.3 eng';
var currentType = 'Total Words in ';
var currentData = 'Web4.3 ';
var currentLanguage = 'eng';

// Listen to changes of the dropdown to select the key to visualize on the map.
d3.select('#select-type').on('change', function(a) {
  // Change the current key and call the function to update the colors.
  currentType = d3.select(this).property('value');
  currentColumn = currentType + currentData + currentLanguage;
  // Get the right format
  if (currentType == 'Total Words in ') {
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

function intlFormat(num) {
  return new Intl.NumberFormat().format(Math.round(num*10)/10);
}

var format_mil = function(num) {
  if(num >= 1000000000)
    return intlFormat(num/1000000000)+'B';
  if(num >= 1000000)
    return intlFormat(num/1000000)+'M';
  if(num >= 1000)
    return intlFormat(num/1000)+'k';
  return intlFormat(num); 
}

var format_per = function(d) {
    d = d * 100;
    return d3.format(',.01f')(d) + '%';
}

var map = d3.choropleth()
    .geofile('/dist/topojson/world/countries.json')
    .rotate([0,0,0])
    .column(currentColumn)
    .valueScale(d3.scaleQuantile)
    .colors(['#deedcf', '#cae5bb', '#b3dda6', '#99d492', '#7ecb7f', '#6ac276', '#56b870', '#43ae6c', '#30a46b', '#1d9a6c', '#198c75', '#147e7b', '#116270', '#0d4761', '#0c6051'])
    .legend(true)
    .format(format_mil)
    .unitId('iso3');

d3.csv('/data/map.languages_major.csv').then(data => {
    map.draw(d3.select('#map').datum(data));
});
