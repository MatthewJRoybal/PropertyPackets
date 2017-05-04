function showSearch() {
  $('#content').on('click', '#landing', function() {
    $(this).fadeOut(500).addClass('hidden');
    $('#search').delay(500).fadeIn(500);
  })
}

function doSearch() {
  $('#content').on('click', '#search-btn', function(event) {
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
			if (!fipsCodes) {
				// Hide the search form
				$('#search').hide();
        // Show the check spelling message
				$('#results-message-two').fadeIn(500).removeClass('hidden');
				// Show reset button
				$('.results-reset-btn').fadeIn(500).removeClass('hidden');
				// If fips codes exist, keep going!!
			}
      var apiObject = api(fipsCodes, searchDataType, function(data) {
        if(Object.keys(data).length) {
          $('#search').hide();
          drawChart(data);
          // Remove results-chart hidden class and display chart
          $('#results-chart').fadeIn(500).removeClass('hidden');
          // Display reset button
          $('.results-reset-btn').fadeIn(500).removeClass('hidden');
        } else {
          $('#search').hide();
          // Remove results-message hidden class and display message
          $('#results-message').fadeIn(500).removeClass('hidden');
          // Show reset button
          $('.results-reset-btn').fadeIn(500).removeClass('hidden');
        }
      }); // End api function
		});	// End fipsData function
  }); // End submit search
} // End main function

// Provide the user with a way to start a new search
function redisplaySearch() {
  $('#content').on('click', '.results-reset-btn', function() {
		$('#results-chart').fadeOut(500).addClass('hidden');
    $('#results-message').fadeOut(500).addClass('hidden');
		$('#results-message-two').fadeOut(500).addClass('hidden');
    $('.results-reset-btn').fadeOut(500).addClass('hidden');
    $('#search').delay(500).fadeIn(500);
    $('#search').find('form')[0].reset();
  });
}

$(document).ready(function() {
  google.charts.load('current', {packages: ['corechart', 'bar']});
  showSearch();
  doSearch();
  redisplaySearch();
});
