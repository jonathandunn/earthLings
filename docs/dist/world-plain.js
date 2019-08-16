var map = d3.geomap()
    .geofile('/dist/topojson/world/countries.json')
    .draw(d3.select('#map'));