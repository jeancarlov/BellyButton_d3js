// Plotly.newPlot("plotArea", [{x: [1, 2, 3], y: [10, 20, 30]}]);

// var trace = {
//     labels: ["nonalcoholic beer", "nonalcoholic wine", "nonalcoholic martini", "nonalcoholic margarita",
//     "ice tea", "nonalcoholic rum & coke", "nonalcoholic mai tai", "nonalcoholic gin & tonic"],
//     values: [22.7, 17.1, 9.9, 8.7, 7.2, 6.1, 6.0, 4.6],
//     type: 'pie'
//    };
//    var data = [trace];
//    var layout = {
//     title: "'Pie' Chart",
//    };
//    Plotly.newPlot("plotArea", data, layout);
// import cityGrowths from "data.js";

// bring the city data and store into an array. Used the maps methos to covert each string into integer
var topFiveCityNames = cityGrowths.map((city) => city.City);

// parseint coverts strings into integers

// render these arrays in Plotly
var topFiveCityGrowths = cityGrowths.map((city) =>
  parseInt(city.Increase_from_2016)
);

// The trace specifies the type of graph as a bar chart as well as defines the x- and y-axis data.
// The variable data encloses trace in an array to meet Plotly's format requirement.
// The variable layout is assigned to an object that specifies the chart's title and axis labels.
// Finally, the graph is rendered with Plotly.newPlot().
var trace = {
  x: topFiveCityNames,
  y: topFiveCityGrowths,
  type: "bar",
};
var data = [trace];
var layout = {
  title: "Most Rapidly Growing Cities",
  xaxis: { title: "City" },
  yaxis: { title: "Population Growth, 2016-2017" },
};
Plotly.newPlot("bar-plot", data, layout);

var trace = {
  x: topFiveCityNames,
  y: topFiveCityGrowths,
  type: "bar",
};
var data = [trace];
var layout = {
  title: "Most Rapidly Growing Cities",
  xaxis: { title: "City" },
  yaxis: { title: "Population Growth, 2016-2017" },
};
Plotly.newPlot("bar-plot", data, layout);
