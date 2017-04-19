function api(fipsCodes, searchDataType, apiCallBack) {
  // Get array data
  var stateCode = fipsCodes[0];
  var placeCode = fipsCodes[1];
  // Start year counter
  var counter = 0;
  // Results storage
  var dataType = "Vacancy";
  
  var apiObject = {
    2012: {
      Vacancy: {
        Total: "",
        Owner: "",
        Tenant: ""
      }
    }
  };
  
  // Loop through each dataType
  // Loop through 4 years for that type
  // Repeat process for next dataType
  
  
  for( year = 2012; year < 2016; year++ ) {
    var totalVacancyURL = ('https://api.census.gov/data/' + year + '/acs1?get=NAME,B25004_001E&for=place:' + placeCode + '&in=state:' + stateCode + '&key=463ceaca9227b02f83061924598f5d9b4f50a118');
    // Make API request during loop to force a/synchronous pause
    var dataName = "Total";
    result(totalVacancyURL, year);
  }
  
  for( year = 2012; year < 2016; year++ ) {
    var ownerVacancyURL = ('https://api.census.gov/data/' + year + '/acs1?get=NAME,B25005_001E&for=place:' + placeCode + '&in=state:' + stateCode + '&key=463ceaca9227b02f83061924598f5d9b4f50a118');
    result(ownerVacancyURL, year);
    }
  
  for( year = 2012; year < 2016; year++ ) {
    var tenantVacancyURL = ('https://api.census.gov/data/' + year + '/acs1?get=NAME,B25004_002E&for=place:' + placeCode + '&in=state:' + stateCode + '&key=463ceaca9227b02f83061924598f5d9b4f50a118');
    result(tenantVacancyURL, year);
    }
  
  function result(url, year) {
    // Finally, get the data by url
    $.getJSON(url, function(data) {
      // If data is truthy, store it. Otherwise leave empty
      if (data) {
        apiObject[year][dataType][dataName] = data;
      }         
      counter += 1;
      // If counter hits 12, use apiCallBack
      if (counter === 12) {
        apiCallBack(apiObject);
        }
      }); // End getJSON
    }; // End callback function
  console.log(apiObject);
} // End api function