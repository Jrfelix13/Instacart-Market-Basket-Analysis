const url = "https://raw.githubusercontent.com/Jrfelix13/Final-Project/master/data-sitio/department.json";

// Fetch the JSON data and console log it

d3.json(url).then(function(json) {
    console.log(json);
    var departments = [];
    var total_count = [];
    json.forEach(function(data) {
        departments.push(data.department);
        total_count.push(data.Total_Count_by_departments);
    });
    console.log(departments)

    var labels = departments;

    function init() {
        var data = [{
            values: total_count,
            labels: labels,
            type: "pie"
        }];

        var layout = {
            height: 500,
            width: 700
        };

        Plotly.newPlot("pie1", data, layout);
    }
    init();
});

// Create an array of music provider labels