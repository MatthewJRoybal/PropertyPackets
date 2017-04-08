// Why does this run on load, but the function main() does not? But, Function main() used to?
function showSearch() {
  $('#content').on('click', '#landing', function() {
    $(this).fadeOut(1000).addClass('hidden');
    $('#search').delay(1000).fadeIn(1000);
  })
}

function doSearch() {
  $('#content').on('click', '#search-button', function() {
    event.preventDefault();
    // Get the values
    var searchPlaceValue = $('#place').val();
    var searchStateValue = $('#state').val();
    var searchDataTypeValue = $('#type').val();
    // Convert them to string
		var searchPlace = searchPlaceValue.toString();
    var searchState = searchStateValue.toString();
    var searchDataType = searchDataTypeValue.toString();

    // Run the search request for data and display it
    fipsData(function(data) {
      var fipsCodes = fipsSearch(data, searchState, searchPlace);
      var apiObject = api(fipsCodes, searchDataType, function(data) {
        if(Object.keys(data).length) {
          $('#search').hide();
          var result = drawChart(data);
          $('#result').html(result);
        } else {
          var message = "<h3>Sorry, this town doesn't have the data you've requested. Remember, you must choose a city with population of 65,000 or greater."
          $('#search').hide();
          $('#result').html(message);
        }
      }); // End api function
		});	// End fipsData function
  }); // End submit search
} // End main function

$(document).ready(function() {
  google.charts.load('current', {packages: ['corechart', 'bar']});
  showSearch();
  doSearch();
  
});



//$(document).ready(function () {
//  $('#content').on('click', function() {
//    $('#landing').fadeOut(1000).addClass('hidden');
//    $('#search').fadeIn(1000).removeClass('no-show');
//  });
//  $('#search-button').submit(function(event) {
//    event.preventDefault();
//    var searchPlaceValue = $('#place').val();
//    console.log(searchPlaceValue);
//  });
//});

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
          $('#bar-chart').append(message);
        }
      }); // End api function
		  });	// End fipsData function
  }); // End submit search
} // End main function
//// Google Charts on page load
//google.charts.load('current', {packages: ['corechart', 'bar']});
//// Create our main function on page load
//
//main();