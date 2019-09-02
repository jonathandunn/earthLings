// We define a variable holding the current key to visualize.
var currentColumn = 'NZL';

// Listen to changes of the dropdown to select the key to visualize.
d3.select('#select-country').on('change', function(a) {
  // Change the current key and call the function to update the colors.
  currentType = d3.select(this).property('value');
  currentColumn = currentType;
});
                                
// Parse the Data
var dataset = d3.csvParse("/data/map.countries.csv");
var currentData = filterObject(currentColumn);

function filterObject(fooValue) {
    return dataset.objects.filter(function(item) {
        return item.foo == fooValue;
    })
}
console.log(currentColumn)
