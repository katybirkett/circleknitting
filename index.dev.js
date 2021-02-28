"use strict";

$("button").click(function () {
  var stitchGauge = $("input[type=number][name=stitchGauge]").val();
  var rowGauge = $("input[type=number][name=rowGauge]").val();
  var diameter = $("input[type=number][name=diameter]").val();
  var rows = Math.round(diameter / 10 * rowGauge);

  if (rows < 3) {
    $(".calculation").text("Cannot make a circle with those values");
  } else {
    var radius = diameter / 2;
    var stitches = [];
    var cmPerRow = diameter / rows; // for loop to spit out how many stitches to increase for each half of a semi circle
    // pythagorus theorum
    // hypotenuse = radius
    // length = radius - current length of circle
    // solve for width

    var circleLength = cmPerRow;

    for (var i = 0; i < rows - 1; i++) {
      var l = radius - circleLength;
      var width = Math.sqrt(radius * radius - l * l);

      if (width > 0) {
        var newStitches = Math.round(width / 10 * stitchGauge * 2);
        stitches.push(newStitches);
      }

      circleLength = circleLength + cmPerRow;
    }

    $(".calculation").text("You will need to knit " + rows + " rows. Here are the stitches needed for each of these rows to make a circle: " + stitches.join(", "));
  }
});