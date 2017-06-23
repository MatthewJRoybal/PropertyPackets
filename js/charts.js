function drawChart(dataResults) {
  // Use dataResults obj to begin visualization process*

  var titleOne = (Object.keys(dataResults)[0]);
  var titleTwo = (Object.keys(dataResults)[1]);
  var titleThree = (Object.keys(dataResults)[2]);
  	
	function helper(year, dataType) {
		return Number(dataResults[dataType][year][1][1]);
	}
	
	var data = google.visualization.arrayToDataTable([
		['Year', titleOne, titleTwo, titleThree],
		['2012', helper(2012, titleOne), helper(2012, titleTwo), helper(2012, titleThree)],
    ['2013', helper(2013, titleOne), helper(2013, titleTwo), helper(2013, titleThree)],
    ['2014', helper(2014, titleOne), helper(2014, titleTwo), helper(2014, titleThree)],
    ['2015', helper(2015, titleOne), helper(2015, titleTwo), helper(2015, titleThree)]
	]);
  
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
    document.getElementById('js-app'));
  // At last, draw the chart
  chart.draw(data, options);
} // End drawChart Function
