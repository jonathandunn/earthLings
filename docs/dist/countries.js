// We define a variable holding the current key to visualize.
var currentColumn = 'NZL';
var dataset;

// Function to trigger reading the data
function run(dataStuff, currentColumn) {
   console.log(dataStuff[0]);
}

// Listen to changes of the dropdown to select the key to visualize.
d3.select('#select-country').on('change', function(a) {
  // Change the current key and call the function to update the colors.
  currentType = d3.select(this).property('value');
  currentColumn = currentType;
});
          
// Parse the Data
d3.csv("/data/map.countries.csv") 
         .then(function(data){var dataset = data;})
         .then(run(dataset, currentColumn));
