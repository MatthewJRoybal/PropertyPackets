function api(fipsCodes, searchDataType, apiCallBack) {
  // Get array data
  var stateCode = fipsCodes[0];
  var placeCode = fipsCodes[1];
  // Start year counter
  var counter = 0;
  // Results storage
  var apiObject = {};
  // Loop through API by year
  // changed to https
  
  for( year = 2012; year < 2016; year++ ) {
    var url = ('https://api.census.gov/data/' + year + '/acs1?get=NAME,' + searchDataType + '&for=place:' + placeCode + '&in=state:' + stateCode + '&key=463ceaca9227b02f83061924598f5d9b4f50a118');
    // Make API request during loop to force a/synchronous pause
    result(url, year);
    }
  function result(url, year) {
    // Finally, get the data by url
    $.getJSON(url, function(data) {
      // If data is truthy, store it. Otherwise leave empty
      if (data) {
        apiObject[year] = data;
      }         
      counter += 1;
      // If counter hits 4, use apiCallBack
      if (counter === 4) {
        apiCallBack(apiObject);
        }
      }); // End getJSON
    }; // End callback function
} // End api function