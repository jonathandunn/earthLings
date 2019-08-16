var map = d3.geomap()
    .geofile('https://jonathandunn.github.io/earthLings/dist/topojson/world/countries.json')
    .draw(d3.select('#map'));
