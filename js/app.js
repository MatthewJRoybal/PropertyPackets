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
					
					
          $('#results').fadeIn(1000).removeClass('hidden');
					var resetBtn = ('<div id="reset2-btn">' +
          	'<input type="reset" class="reset-btn">' +
            '</div>');
          $('#square-me').append(resetBtn);
        } else {
          var message = ('<div id="message">' +
                         "<h2>Sorry, this town doesn't have the data you've requested. Remember, you must choose a city with a population of 65,000 or greater.</h2>" + 
                         '<input type="reset" class="reset-btn">' +
                        '</div>');
          $('#search').hide();
          $('#square-me').append(message);
        }
      }); // End api function
		});	// End fipsData function
  }); // End submit search
} // End main function


// Show search
// Do search
// Hide Search
// Show Chart or message
// Reset
// Remove Chart or message
// Show search
// Hide Search
// Show Chart or message

// Provide the user with a way to start a new search
function redisplaySearch() {
  $('#content').on('click', 'input:reset', function() {
		$('#results').fadeOut(1000).addClass('hidden');
    $('#message').fadeOut(1000).remove();
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
