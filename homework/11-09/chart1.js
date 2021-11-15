d3.select("#chart1")
  .on("mousemove", function() {
    d3.select("#tooltip")
      .style("display", "block")
      .style("top", d3.event.pageY + 20 + "px")
      .style("left", d3.event.pageX + 20 + "px")
      .html("Bubble chart sized by number of events; colored by number of fatalities; where you can click on a country");
  })
  .on("mouseout", function() {
    d3.select("#tooltip")
      .style("display", "none");
  });

  d3.select("#chart2")
  .on("mousemove", function() {
    d3.select("#tooltip")
      .style("display", "block")
      .style("top", d3.event.pageY + 20 + "px")
      .style("left", d3.event.pageX + 20 + "px")
      .html("Bar chart");
  })
  .on("mouseout", function() {
    d3.select("#tooltip")
      .style("display", "none");
  });