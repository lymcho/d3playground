function showChart(){  

    //get value from form submission
    var a = document.forms["lingskill"]["sum1"].value;
    var b = document.forms["lingskill"]["sum2"].value;
    var c = document.forms["lingskill"]["sum3"].value;
    var d = document.forms["lingskill"]["sum4"].value;
    var e = document.forms["lingskill"]["sum5"].value;
    //get integers from the value
    var ai=parseInt(a,10);
    var bi=parseInt(b,10);
    var ci=parseInt(c,10);
    var di=parseInt(d,10);
    var ei=parseInt(e,10);



//put the integers in the array
var data =[ai,bi,ci,di,ei];
//use d3 to display the chart
d3.select(".chart")
  .selectAll("div")
  .data(data)
    .enter()
    .append("div")
    .style("width", function(d) { return d*10 + "px"; })
    .text(function(d) { return d });

}