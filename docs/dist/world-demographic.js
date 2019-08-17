var map = d3.choropleth()
    .geofile('/earthLings/dist/topojson/world/countries.json')
    .projection("geoGilbert")
    .column('PCT_WORDS_CC4')
    .legend(true)
    .unitId('iso3');

d3.csv('/earthLings/data/map.countries.csv').then(data => {
    map.draw(d3.select('#map').datum(data));
});
