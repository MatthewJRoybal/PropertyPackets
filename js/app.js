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
          drawChart(data);
          // Remove results-chart hidden class and display chart
          $('#results-chart').fadeIn(1000).removeClass('hidden');
          // Display reset button
          $('.results-reset-btn').fadeIn(1000).removeClass('hidden');
        } else {
          $('#search').hide();
          // Remove results-message hidden class and display message
          $('#results-message').fadeIn(1000).removeClass('hidden');
          // Show reset button
          $('.results-reset-btn').fadeIn(1000).removeClass('hidden');
        }
      }); // End api function
		});	// End fipsData function
  }); // End submit search
} // End main function

// Provide the user with a way to start a new search
function redisplaySearch() {
  $('#content').on('click', 'input:reset', function() {
		$('#results-chart').fadeOut(1000).addClass('hidden');
    $('#results-message').fadeOut(1000).addClass('hidden');
    $('.results-reset-btn').fadeOut(1000).addClass('hidden');
    $('#search').delay(1000).fadeIn(1000);
    $('#search').find('form')[0].reset();
  });
}

$(document).ready(function() {
  google.charts.load('current', {packages: ['corechart', 'bar']});
  showSearch();
  doSearch();
  redisplaySearch();
});
