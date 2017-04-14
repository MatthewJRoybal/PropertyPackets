function drawChart(dataResults) {
  console.log(dataResults);
  // Use dataResults obj to begin visualization process*
  var value2012 = Number(dataResults[2012][1][1]);
  var value2013 = Number(dataResults[2013][1][1]);
  var value2014 = Number(dataResults[2014][1][1]);
  var value2015 = Number(dataResults[2015][1][1]);
  
  
  // Create the chart/graph data
  var data = new google.visualization.DataTable();
  data.addColumn('string', 'Year');
  data.addColumn('number', 'Units');
  data.addRows([
    ['2012', value2012],
    ['2013', value2013],
    ['2014', value2014],
    ['2015', value2015],
  ]);
  
  // Create options for a title and subtitle on the chart
  var options = {
    chart: {
      title: 'Total Housing Units 2012-2015',
      // Create a subtitle to show place name match
      subtitle: dataResults[2015][1][0],
    },
    // Add some color
    backgroundColor: {
      stroke: 'limegreen',
      strokeWidth: 15
    },
    // A little animation
    animation: {
      startup: true,
      duration: 2000,
      easing: 'out',
    },
    // And some labels with a size
    vAxis: {title: "Units"},
    hAxis: {title: "Year"},
    width: 800,
  };
  // Prepare the column chart on the results ID
  var chart = new google.visualization.ColumnChart(
    // Get the element ID where chart will be drawn
    document.getElementById('results'));
  // At last, draw the chart
  chart.draw(data, options);
} // End drawChart Function
