var jsonCircles = [
    { "x_axis": 10, "y_axis": 15, "radius": 0.5, "color" : "red" },
    { "x_axis": 20, "y_axis": 20, "radius": 0.5, "color" : "red"},
    { "x_axis": 5, "y_axis": 20, "radius": 0.5, "color" : "red"},
    { "x_axis": 7, "y_axis": 4, "radius": 0.5, "color" : "red"},
    { "x_axis": 22, "y_axis": 6, "radius": 0.5, "color" : "red"}];

    var svgContainer = d3.select("body").append("svg")
                                       .attr("width", 250)
                                        .attr("height", 250);
    
    var circles = svgContainer.selectAll("circle")
                             .data(jsonCircles) //place holder 
                             .enter() //reference
                              .append("circle"); //3 circles
    
    var circleAttributes = circles
                           .attr("cx", function (d) { return d.x_axis; })
                           .attr("cy", function (d) { return d.y_axis; })
                           .attr("r", function (d) { return d.radius; })
                           .style("fill", function(d) { return d.color; });
    