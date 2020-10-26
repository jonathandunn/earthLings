// We define a variable holding the current key to visualize on the map.
var currentColumn = "Twitter: Change During COVID";

// Listen to changes of the dropdown to select the key to visualize on the map.
d3.select("#select-key").on("change", function(a) {
  // Change the current key and call the function to update the colors.
  currentColumn = d3.select(this).property("value");
  // Change number format
  if (["Twitter: Change During COVID"].includes(currentColumn)) {
      var format = format_dec;
  } else if (["Per Capita GDP", "Population Adjusted for GDP", "Twitter Adjusted for GDP", "Web Adjusted for GDP"].includes(currentColumn)) {
      var format = format_small;
  } else {
      var format = format_dec;
  }
  // Redo map
  map.column(currentColumn).format(format).update();
});

var format_small = function(d) {
    return numberWithCommas(Math.round(d));
}

var format_dec = function(d) {
    d = d;
    return (Math.round(d * 100) / 100).toFixed(2);
}

var format_mil = function(d) {
    d = d;
    return d3.format(',.00f')(d);
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
    .format(format_dec)
    .valueScale(d3.scaleQuantile)
    .colors(['#0c6051', '#0d4761', '#116270', '#147e7b', '#198c75', '#1d9a6c', '#30a46b', '#43ae6c', '#56b870', '#6ac276', '#7ecb7f', '#99d492', '#b3dda6', '#cae5bb', '#deedcf'])
    .unitId("iso3");

d3.csv("/data/map.diversity.csv").then(data => {
    map.draw(d3.select("#map").datum(data));
});
