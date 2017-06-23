$(document).ready(function() { // On page load
  $('#js-app').hide().fadeIn(500).html(templates.landing);
  google.charts.load('current', {packages: ['corechart', 'bar']});
  showSearch();
  doSearch();
  redoSearch();
});

function showSearch() { // Display search
  $('#js-app').on('click', '#landing', function() {
    $('#js-app').hide().fadeIn(500).html(templates.search);
  })
}

function doSearch() { // Perform search
  $('#js-app').on('click', '#search-btn', function(event) {
    event.preventDefault();
    
    // Get form values & convert to string
    var place = ($('#place').val()).toString();
    var state = ($('#state').val()).toString();
    var types = ($('#type').val()).toString();
    // Run values through fips data & return fips codes.
    fipsData(function(data) { 
      var fipsCodes = fipsSearch(data, state, place);
      if (!fipsCodes) { // If no match return error msg
        $('#js-app').hide().fadeIn(500).html(templates.noMatch); 
      } else { // If fipsCodes match...
        api(fipsCodes, types, function(data) {
          if (Object.keys(data).length > 0) {
            $('#js-app').hide().fadeIn(500);
            drawChart(data); // Draw chart
            $('#js-app').append(templates.resetButton);
          } else { // Return error msg
            $('#js-app').hide().fadeIn(500).html(templates.tooSmall);
          }
        }); // End api function                      
      }
    }); // End fipsData function
  }); // End click event
}; // End doSearch

function redoSearch() { // Reset & display search
  $('#js-app').on('click', '.results-reset-btn', function() {
    $('#js-app').hide().fadeIn(500).html(templates.search);
    $('#search').find('form')[0].reset();
  });
}