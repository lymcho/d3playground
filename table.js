var ling = {
	s1:3,
	s2:2,
	s3:4,
	s4:1,
	s5:2,
	hr:20
}

var darin = {
	s1:3,
	s2:3,
	s3:1,
	s4:1,
	s5:2,
	hr:10,
}

var skill1 = ling.s1*ling.hr+darin.s1*darin.hr
var skill2 = ling.s2*ling.hr+darin.s2*darin.hr


var data =[skill1,skill2]

d3.select(".chart")
  .selectAll("div")
  .data(data)
    .enter()
    .append("div")
    .style("width", function(d) { return d/2 + "px"; })
    .text(function(d) { return d });

