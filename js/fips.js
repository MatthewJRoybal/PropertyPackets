function fipsData(dataCallback) {
  $.ajax('fips.txt', {
		  success: function(data) {
        // Split on line breaks
		    var rawArray = data.split('\n');
			  // Remove empty array items
        var filterArray = rawArray.filter(function(items) {
        var filteredItems = (items.trim() != '');
          return filteredItems;
        });
		    return dataCallback(filterArray);
		  }  // End anon function
  });// End ajax
}; // End Function

function fipsSearch(fipsData, searchState, searchPlace) {
	// Loop through each array item
  for (var i = 0; i < fipsData.length; i++) {
    // Store arrayItem = ["KY|21|58116|Onton CDP|Census Designated Place|S|Webster County"];
    var arrayItem = fipsData[i];
    // Split arrayItem on | symbol and store in new array
    var arrayItemSplit = arrayItem.split('|');
    // Get values by index. Example:
    // KY|21|58116|Onton CDP|Census Designated Place|S|Webster County
    //  0| 1|    2|        3|											 4|5|							6
		
    var arrayState = arrayItemSplit[0];
    var arrayStateCode = arrayItemSplit[1];
    var arrayPlaceCode = arrayItemSplit[2];
    var arrayPlaceCapitalized = arrayItemSplit[3];
		var arrayPlace = arrayPlaceCapitalized.toLowerCase();
		var searchPlaceLower = searchPlace.toLowerCase();
		
    if (arrayState === searchState) {
      if (arrayPlace.substring(0, searchPlace.length) === searchPlaceLower) {
				// convert both city sides to lowercase to get exact matches
				var arrayFipsCodes = [arrayStateCode, arrayPlaceCode];
				return arrayFipsCodes; // Verified returning data
			} // End IF City
    } // End IF State
  } // End For Loop
} // End function