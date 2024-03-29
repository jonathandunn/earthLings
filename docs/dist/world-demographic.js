// We define a variable holding the current key to visualize on the map.
var currentColumn = "4.3 Total Words Per Country";

// Listen to changes of the dropdown to select the key to visualize on the map.
d3.select("#select-key").on("change", function(a) {
  // Change the current key and call the function to update the colors.
  currentColumn = d3.select(this).property("value");
  // Change number format
  if (["Percent Internet Access", "Web Adjusted for Population", "Twitter Adjusted for Population"].includes(currentColumn)) {
      var format = format_per;
  } else if (["Per Capita GDP", "Population Adjusted for GDP", "Twitter Adjusted for GDP", "Web Adjusted for GDP"].includes(currentColumn)) {
      var format = format_small;
  } else {
      var format = format_mil;
  }
  // Redo map
  map.column(currentColumn).format(format).update();
});

var format_small = function(d) {
    return numberWithCommas(Math.round(d));
}

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

function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

var map = d3.choropleth()
    .geofile("/dist/topojson/world/countries.json")
    .rotate([0,0,0])
    .column(currentColumn)
    .legend(true)
    .format(format_mil)
    .valueScale(d3.scaleQuantile)
    .colors(['#deedcf', '#cae5bb', '#b3dda6', '#99d492', '#7ecb7f', '#6ac276', '#56b870', '#43ae6c', '#30a46b', '#1d9a6c', '#198c75', '#147e7b', '#116270', '#0d4761', '#0c6051'])
    .unitId("iso3");

d3.csv("/data/map.countries.csv").then(data => {
    map.draw(d3.select("#map").datum(data));
});
