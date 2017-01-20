window.onload = function () {

	var data = {
		labels : ["January","February","March","April","May","June","July"],
		datasets : [
			{
				fillColor : "rgba(151,187,205,0.5)",
				strokeColor : "rgba(151,187,205,1)",
				pointColor : "rgba(151,187,205,1)",
				pointStrokeColor : "#fff",
				data : [28,48,40,19,96,27,100],
				title : "Year 2013"
			},
			{
				fillColor : "rgba(220,220,220,0.5)",
				strokeColor : "rgba(220,220,220,1)",
				pointColor : "rgba(220,220,220,1)",
				pointStrokeColor : "#fff",
				data : [65,59,90,81,56,55,40],
				title: "Year 2014"
			}
		]
	};
	
	var options = { graphTitle:"Bar Chart with simple animation", legend: true };
	new Chart(document.getElementById("barChart").getContext("2d")).Bar(data, options);  
  
};