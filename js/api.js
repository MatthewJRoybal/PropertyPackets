function api(fipsCodes, searchDataType, apiCallBack) {
  // Get array data
  var stateCode = fipsCodes[0];
  var placeCode = fipsCodes[1];
  // Create api storage
  var apiObject = {};
  // Start year counter
  var counter = 0;
  // Get matching data set to searchDataType
  var dataSet;
  for (var property in dataSetTemplate) {
    if (dataSetTemplate.hasOwnProperty(property)) {
      if (searchDataType === property) {
        dataSet = dataSetTemplate[searchDataType];        
      }
    }
  }
  // Loop thought specific data set
  for(var dataName in dataSet) {
    if(dataSet.hasOwnProperty(dataName)) {
      apiObject[dataName] = {};
      // Loop Api call for each data set
      for( var year = 2012; year < 2016; year++ ) {
        var URL = ('https://api.census.gov/data/' + year + '/acs1?get=NAME,' + dataSet[dataName] + '&for=place:' + placeCode + '&in=state:' + stateCode + '&key=463ceaca9227b02f83061924598f5d9b4f50a118');
        // Make API request during loop to force a/synchronous pause
        apiCall(URL, dataName, year);
      }
    }
  }
  // Use the api call for data
  function apiCall(url, dataType, year) {
    $.getJSON(url, function(data) {
      if (data) {
        apiObject[dataType][year] = data;
      } else {
          apiObject = {};
        }        
      counter += 1;
      if (counter === 12) {
        console.log(apiObject);
        apiCallBack(apiObject);
        } 
      });
    };
}
  
//  // Run getJSON and recieve data from US Census
//  function apiCall(url, dataType, year) {
//    // Finally, get the data by url
//    $.getJSON(url, function(data) {
//      console.log(data);
//      if (data) { // If truthy, store data
//        apiObject[dataType][year] = data;
//      } else {
//          apiObject = {};
//        }        
//      counter += 1;
//      // If counter hits 4, use apiCallBack
//      if (counter === 12) {
//        apiCallBack(apiObject);
//        } 
//      });
//    };
//  console.log(apiObject);
//}
  
  
  
  
	
  
  
//  // Results storage
//  var apiObject = {
//    totalHousing: {},
//    ownerOccupiedHousing: {},
//    renterOccupiedHousing: {}
//  };
//	for( year = 2012; year < 2016; year++ ) {
//		var dataTypeOne = ('https://api.census.gov/data/' + year + '/acs1?get=NAME,B25001_001E&for=place:' + placeCode + '&in=state:' + stateCode + '&key=463ceaca9227b02f83061924598f5d9b4f50a118');
//    // Make API request during loop to force a/synchronous pause
//    apiCall(dataTypeOne, 'totalHousing', year);
//  }
//	
//	for( year = 2012; year < 2016; year++ ) {
//    var dataTypeTwo = ('https://api.census.gov/data/' + year + '/acs1?get=NAME,B25003_002E&for=place:' + placeCode + '&in=state:' + stateCode + '&key=463ceaca9227b02f83061924598f5d9b4f50a118');
//    // Make API request during loop to force a/synchronous pause
//    apiCall(dataTypeTwo, 'ownerOccupiedHousing', year);
//  }
//	
//	for( year = 2012; year < 2016; year++ ) {
//    var dataTypeThree = ('https://api.census.gov/data/' + year + '/acs1?get=NAME,B25003_003E&for=place:' + placeCode + '&in=state:' + stateCode + '&key=463ceaca9227b02f83061924598f5d9b4f50a118');
//    // Make API request during loop to force a/synchronous pause
//    apiCall(dataTypeThree, 'renterOccupiedHousing', year);
//  }