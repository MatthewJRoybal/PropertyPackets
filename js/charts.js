function drawChart(dataResults) {
  // Use dataResults obj to begin visualization process*
  	
	function helper(year, dataType) {
		return Number(dataResults[dataType][year][1][1]);
	}
	
	var data = google.visualization.arrayToDataTable([
		['Year', 'Total Housing', 'Owner Occupied Housing', 'Renter Occupied Housing'],
		['2012', helper(2012, 'totalHousing'), helper(2012, 'ownerOccupiedHousing'), helper(2012, 'renterOccupiedHousing')],
    ['2013', helper(2013, 'totalHousing'), helper(2013, 'ownerOccupiedHousing'), helper(2013, 'renterOccupiedHousing')],
    ['2014', helper(2014, 'totalHousing'), helper(2014, 'ownerOccupiedHousing'), helper(2014, 'renterOccupiedHousing')],
    ['2015', helper(2015, 'totalHousing'), helper(2015, 'ownerOccupiedHousing'), helper(2015, 'renterOccupiedHousing')]
	]);

//  // Create the chart/graph data
//  var data = new google.visualization.DataTable();
//  data.addColumn('string', 'string','string','Year');
//  data.addColumn('number', 'number','number', 'Units');
//  data.addRows([
//    ['2012', helper(2012, 'totalHousing'), helper(2012, 'ownerOccupiedHousing'), helper(2012, 'renterOccupiedHousing')],
//    ['2013', helper(2013, 'totalHousing'), helper(2013, 'ownerOccupiedHousing'), helper(2013, 'renterOccupiedHousing')],
//    ['2014', helper(2014, 'totalHousing'), helper(2014, 'ownerOccupiedHousing'), helper(2014, 'renterOccupiedHousing')],
//    ['2015', helper(2015, 'totalHousing'), helper(2015, 'ownerOccupiedHousing'), helper(2015, 'renterOccupiedHousing')],
//  ]);
  
  // Create options for a title and subtitle on the chart
  var options = {
//    chart: {
//      title: 'Total Housing Units 2012-2015',
//      // Create a subtitle to show place name match
//      subtitle: dataResults[2015][1][0],
//    },
    // Add some color
    backgroundColor: {
      stroke: 'orange',
      strokeWidth: 15
    },
    // A little animation
    animation: {
      startup: true,
      duration: 2000,
      easing: 'out',
    },
		width: 800,
    height: 400,
    chartArea: {  width: "50%", height: "70%" },
    // And some labels with a size
    vAxis: {title: "Units",
			textStyle: {
				fontSize: 16,
				bold: true,
				italic: false
			},
			titleTextStyle: {
				fontSize: 16,
				bold: true,
				italic: false
			}
		},
    hAxis: {title: "Year", 
			textStyle: {
				fontSize: 16,
				bold: true,
				italic: false
			},
			titleTextStyle: {
				fontSize: 16,
				bold: true,
				italic: false
			}
		}

  };
  // Prepare the column chart on the results ID
  var chart = new google.visualization.ColumnChart(
    // Get the element ID where chart will be drawn
    document.getElementById('app'));
  // At last, draw the chart
  chart.draw(data, options);
} // End drawChart Function
