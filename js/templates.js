var templates = {
  tooSmall: ('<div class="errors"><h2>Sorry, this town doesn\'t have the data you\'ve requested. ' + 
           'Remember, you must choose a city with a population of 65,000 or greater.</h2>' + 
             '<div id="results-reset-btn">' + 
               '<button type="reset" class="results-reset-btn">Reset</button>' + 
             '</div></div>'),
  noMatch: ('<div class="errors"><h2>Sorry, it looks like the US Census doesn\'t recognize that city. ' + 
             'Check your spelling and try again.</h2>' + 
             '<div id="results-reset-btn">' + 
               '<button type="reset" class="results-reset-btn">Reset</button>' + 
             '</div></div>'),
  landing: ('<div id="landing">' +
               '<span class="heading line-1">Enter a City and get</span>' +
               '<span class="heading line-2">Market Data</span>' +
               '<h2>With Property Packets, you can search any US city with a population of ' +
               '65,000 or greater and return real estate market data in chart format</h2>' +
               '<button id="start">Start</button>' +
               '</div>'),
  search: ('<div id="search">' +
                '<form id="search-form">' +
                '<div id="search-place" class="search-form-item">' +
                  '<input type="text" name="place" id="place" value="" placeholder="Enter a City" required>' +
                '</div>' +
            
                '<div id="search-state" class="search-form-item">' +
                  '<select name="state" id="state" Placeholder="State" required>' +
                    '<option value="AL">Alabama</option>' +
                    '<option value="AK">Alaska</option>' +
                    '<option value="AZ">Arizona</option>' +
                    '<option value="AR">Arkansas</option>' +
                    '<option value="CA">California</option>' +
                    '<option value="CO">Colorado</option>' +
                    '<option value="CT">Connecticut</option>' +
                    '<option value="DE">Delaware</option>' +
                    '<option value="DC">District of Columbia</option>' +
                    '<option value="FL">Florida</option>' +
                    '<option value="GA">Georgia</option>' +
                    '<option value="HI">Hawaii</option>' +
                    '<option value="ID">Idaho</option>' +
                    '<option value="IL">Illinois</option>' +
                    '<option value="IN">Indiana</option>' +
                    '<option value="IA">Iowa</option>' +
                    '<option value="KS">Kansas</option>' +
                    '<option value="KY">Kentucky</option>' +
                    '<option value="LA">Louisana</option>' +
                    '<option value="ME">Maine</option>' +
                    '<option value="MD">Maryland</option>' +
                    '<option value="MA">Massachusetts</option>' +
                    '<option value="MI">Michigan</option>' +
                    '<option value="MN">Minnesota</option>' +
                    '<option value="MS">Mississippi</option>' +
                    '<option value="MO">Missouri</option>' +
                    '<option value="NT">Montana</option>' +
                    '<option value="NE">Nebraska</option>' +
                    '<option value="NV">Nevada</option>' +
                    '<option value="NH">New Hampshire</option>' +
                    '<option value="NJ">New Jersey</option>' +
                    '<option value="NM">New Mexico</option>' +
                    '<option value="NY">New York</option>' +
                    '<option value="ND">North Dakota</option>' +
                    '<option value="OH">Ohio</option>' +
                    '<option value="OK">Oklahoma</option>' +
                    '<option value="OR">Oregon</option>' +
                    '<option value="PA">Pennsylvania</option>' +
                    '<option value="RI">Rhode Island</option>' +
                    '<option value="SC">South Carolina</option>' +
                    '<option value="SD">South Dakota</option>' +
                    '<option value="TN">Tennessee</option>' +
                    '<option value="TX">Texas</option>' +
                    '<option value="UT">Utah</option>' +
                    '<option value="VT">Vermont</option>' +
                    '<option value="VA">Virginia</option>' +
                    '<option value="WA">Washington</option>' +
                    '<option value="WV">West Virginia</option>' +
                    '<option value="WI">Wisconsin</option>' +
                    '<option value="WY">Wyoming</option>' +
                  '</select>' +
                '</div>' +

                '<div id="search-type" class="search-form-item">' +
                  '<select name="type" id="type" Placeholder="Type" required>' +
                    '<option value="housing">Housing</option>' +
                    '<option value="occupancy">Occupancy</option>' +
                    '<option value="vacancy">Vacancy</option>' +
                    '<option value="mortgage">Mortgages</option>' +
                  '</select>' +
                '</div>' +
            
                '<div class="search-form-item">' +
                  '<button id="search-btn" class="search-form-btn" type="submit">Search</button>' +
                  '<button id="reset-btn" class="search-form-btn" type="reset">Reset</button>' +
                '</div>' +

              '</form>' +
            '</div>'),
  resetButton: ('<div id="results-reset-btn">' + 
                  '<button class="results-reset-btn" type="reset">Reset</button>' + 
                '</div>')
};

  var dataSetTemplate = {
    // B25001_001E = Total Housing Units
    'housing': {
      'Total Housing Units': 'B25001_001E',
      'Total Occupied Housing Units': 'B25002_002E',
      'Total Vacant Housing Units': 'B25002_003E'
    },    
    'occupancy': {
      'Total Occupied Housing Units': 'B25002_002E',
      'Owner Occupied Housing Units': 'B25003_002E',
      'Renter Occupied Housing Units': 'B25003_003E'
    },
    'vacancy': {
      'Vacant Housing Units': 'B25004_001E',
      'Owner Vacancy Rate': 'B25005_002E',
      'Renter Vacancy Rate': 'B25004_002E'
    },
    'mortgage': {
      'Total Mortgage Units': 'B25027_001E',
      'Total Mortgage Count': 'B25027_002E',
      'Total No Mortgage Count': 'B25027_010E'
    }
  };