var map = d3.geomap()
    .geofile('/earthLings/dist/topojson/world/countries.json')
    .draw(d3.select('#map'));
