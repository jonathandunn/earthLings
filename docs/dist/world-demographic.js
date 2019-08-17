var map = d3.choropleth()
    .geofile('/earthLings/dist/topojson/world/countries.json')
    .colors(['green','red'])
    .column('PCT_POPULATION')
    .legend(true)
    .unitId('ISO3');

d3.csv('/earthLings/data/map.countries.csv').then(data => {
    map.draw(d3.select('#map').datum(data));
});
