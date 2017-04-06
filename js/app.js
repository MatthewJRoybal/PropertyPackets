function main() {
  $('#search').submit(function(event) {
    event.preventDefault();
    // Get the values
    var searchPlaceValue = $('#search-place').val();
    var searchStateValue = $('#search-state').val();
    var searchDataTypeValue = $('#search-data-type').val();
    // Convert them to string
		  var searchPlace = searchPlaceValue.toString();
    var searchState = searchStateValue.toString();
    var searchDataType = searchDataTypeValue.toString();
    // Run the search request for data and display it
    fipsData(function(data) {
      var fipsCodes = fipsSearch(data, searchState, searchPlace);
      var apiObject = api(fipsCodes, searchDataType, function(data) {
        if(Object.keys(data).length) {
          drawChart(data);
        } else {
          var message = "<h3>Sorry, this place doesn't have the data you've requested. Choose a place with a larger population."
          $('#chart').append(message);
        }
      }); // End api function
		  });	// End fipsData function
  }); // End submit search
} // End main function
// Google Charts on page load
google.charts.load('current', {packages: ['corechart', 'bar']});
// Create our main function on page load
main();