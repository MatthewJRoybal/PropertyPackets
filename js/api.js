function api(fipsCodes, searchDataType, apiCallBack) {
  // Get array data
  var stateCode = fipsCodes[0];
  var placeCode = fipsCodes[1];
  // Start year counter
  var counter = 0;
  // Results storage
  var apiObject = {
									totalHousing: {},
									ownerOccupiedHousing: {},
									renterOccupiedHousing: {}
									};
	
	// Loop through each year inserting the fipsCodes and searchDataType
//  for( year = 2012; year < 2016; year++ ) {
//    var getRequest = ('https://api.census.gov/data/' + year + '/acs1?get=NAME,' + searchDataType + '&for=place:' + placeCode + '&in=state:' + stateCode + '&key=463ceaca9227b02f83061924598f5d9b4f50a118');
//    // Make API request during loop to force a/synchronous pause
//    var dataName = "Total";
//    result(getRequest, year);
//  }
	
	for( year = 2012; year < 2016; year++ ) {
		var getTotalHousing = ('https://api.census.gov/data/' + year + '/acs1?get=NAME,B25001_001E&for=place:' + placeCode + '&in=state:' + stateCode + '&key=463ceaca9227b02f83061924598f5d9b4f50a118');
    // Make API request during loop to force a/synchronous pause
    result(getTotalHousing, 'totalHousing', year);
  }
	
	for( year = 2012; year < 2016; year++ ) {
    var getOwnerOccupiedHousing = ('https://api.census.gov/data/' + year + '/acs1?get=NAME,B25003_002E&for=place:' + placeCode + '&in=state:' + stateCode + '&key=463ceaca9227b02f83061924598f5d9b4f50a118');
    // Make API request during loop to force a/synchronous pause
    result(getOwnerOccupiedHousing, 'ownerOccupiedHousing', year);
  }
	
	for( year = 2012; year < 2016; year++ ) {
    var getRenterOccupiedHousing = ('https://api.census.gov/data/' + year + '/acs1?get=NAME,B25003_003E&for=place:' + placeCode + '&in=state:' + stateCode + '&key=463ceaca9227b02f83061924598f5d9b4f50a118');
    // Make API request during loop to force a/synchronous pause
    result(getRenterOccupiedHousing, 'renterOccupiedHousing', year);
  }

	// Run getJSON and recieve data from US Census
  function result(url, dataType, year) {
    // Finally, get the data by url
    $.getJSON(url, function(data) {
      // If data is truthy, store it. Otherwise leave empty
      if (data) {
        apiObject[dataType][year] = data;
      }         
      counter += 1;
			console.log(apiObject);
      // If counter hits 4, use apiCallBack
      if (counter === 12) {
        apiCallBack(apiObject);
        }
      }); // End getJSON
    }; // End callback function
} // End api function