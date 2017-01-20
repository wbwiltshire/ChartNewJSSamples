window.onload = function () {

	var data = {
		labels : ["January","February","March","April","May","June","July"],
		datasets : [
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
	var options = { graphTitle:"Line Chart with simple animation", legend: true };		
	new Chart(document.getElementById("lineChart").getContext("2d")).Line(data, options);  
  
};