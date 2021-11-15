var url = "https://raw.githubusercontent.com/A-Noe-NU/A-Noe-NU.github.io/main/banner.png";
d3.json(url, function(error, data) {

  if (!error) {
    d3.select("#banner")
      .style("background-image", "url('" + data[0].url + "')");
  }

});

d3.select(window)
  .on("scroll", function() {
    console.log(window.scrollY);
  });

  var bannerPosition = d3.scaleLinear()
  .domain([0, window.innerHeight])
  .range([0, 100]);
    
  d3.select(window)
  .on("scroll", function() {

    var y = bannerPosition(window.scrollY);
    d3.select("#banner")
      .style("background-position", "0% " + y + "%");

  });