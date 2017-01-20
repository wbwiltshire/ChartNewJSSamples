$(document).ready(function () {

	var data = {
		labels : ["2016-12-27","2016-12-28","2016-12-29","2016-12-30","2016-12-31","2017-01-04","2017-01-05","2017-01-06","2017-01-07","2017-01-08","2017-01-10","2017-01-12","2017-01-13","2017-01-14","2017-01-18","2017-01-19","2017-01-20"],
		datasets : [
			{
				fillColor : "rgba(220,220,220,0.5)",
				strokeColor : "rgba(220,220,220,1)",
				pointColor : "rgba(220,220,220,1)",
				pointStrokeColor : "#fff",
				data : [117.38,117.26,116.76,116.73,115.82,116.15,116.02,116.61,117.91,117.91,118.99,119.75,119.25,119.04,120.00,119.99,119.78]
			}		
		]
	};
	
	var data2 = {
		labels : [new Date("2016-12-27 0:0:0"),new Date("2017-01-02 0:0:0"),new Date("2017-01-09 0:0:0"),new Date("2017-01-23 0:0:0")],
		xBegin : new Date("2016-12-27 0:0:0"),
		xEnd : new Date("2017-01-21 0:0:0"),
		datasets : [
			{
				fillColor : "rgba(220,220,220,0.5)",
				strokeColor : "rgba(220,220,220,1)",
				pointColor : "rgba(220,220,220,1)",
				pointStrokeColor : "#fff",
				data : [117.38,117.26,116.76,116.73,115.82,116.15,116.02,116.61,117.91,117.91,118.99,119.75,119.25,119.04,120.00,119.99,119.78],
				xPos : [new Date("2016-12-27 0:0:0"),new Date("2016-12-28 0:0:0"),new Date("2016-12-29 0:0:0"),new Date("2016-12-30 0:0:0"),new Date("2016-12-31 0:0:0"),new Date("2017-01-04 0:0:0"),
					new Date("2017-01-05 0:0:0"),new Date("2017-01-06 0:0:0"),new Date("2017-01-07 0:0:0"),new Date("2017-01-08 0:0:0"),new Date("2017-01-10 0:0:0"),new Date("2017-01-12 0:0:0"),
					new Date("2017-01-13 0:0:0"),new Date("2017-01-14 0:0:0"),new Date("2017-01-18 0:0:0"),new Date("2017-01-19 0:0:0"),new Date("2017-01-20 0:0:0")]
			}
		]
	};

	var options = { graphTitle:"Apple", legend: true };		
	new Chart(document.getElementById("stockChart").getContext("2d")).Line(data, options);  
	var options2 = { 
		graphTitle:"Apple with points not associated",
		legend: true,
		inGraphDataShow: true,
		inGraphDataTmpl : "<%=v3 + ' (' + v2 + ')'%>",
		fmtV2 : "fmtdatetime MM/DD/YYYY",		
		fmtXLabel : "fmtdatetime MM/DD/YYYY",
		yAxisMinimumInterval : .5
	};		
	new Chart(document.getElementById("stockChart2").getContext("2d")).Line(data2, options2);  
});