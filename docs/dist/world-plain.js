var map = d3.geomap()
    .geofile('https://raw.githubusercontent.com/jonathandunn/earthLings/master/docs/dist/topojson/world/countries.json')
    .draw(d3.select('#map'));
