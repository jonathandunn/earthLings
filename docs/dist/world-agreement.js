// We define a variable holding the current key to visualize on the map.
var currentColumn = "Agreement";


var format_small = function(d) {
    return numberWithCommas(Math.round(d));
}

var format_hhi = function(d) {
    return (Math.round(d * 100) / 100).toFixed(2);
}

var format_mil = function(d) {
    d = d;
    return d3.format(',.00f')(d);
}

var format_dec = function(d) {
    d = d;
    return (Math.round(d * 100) / 100).toFixed(2);
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

d3.csv("/data/map.agreement.csv").then(data => {
    map.draw(d3.select("#map").datum(data));
});