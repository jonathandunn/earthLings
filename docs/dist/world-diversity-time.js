// We define a variable holding the current key to visualize on the map.
var currentColumn = "N_Languages_TW";

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
    .format(format_mil)
    .colors(['#ffffcc','#ffeda0','#fed976','#feb24c','#fd8d3c','#fc4e2a','#e31a1c','#bd0026','#800026'])
    .unitId("iso3");

d3.csv("/data/map.diversity.time.csv").then(data => {
    map.draw(d3.select("#map").datum(data));
});