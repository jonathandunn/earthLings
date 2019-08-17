var map = d3.choropleth()
    .geofile('/earthLings/dist/topojson/world/countries.json')
    .colors(['red'])
    .column('POPULATION')
    .legend(true)
    .unitId('ISO3');

d3.csv('/earthLings/data/map.countries.csv').then(data => {
    map.draw(d3.select('#map').datum(data));
});
