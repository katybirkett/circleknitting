$("h1").css("color", "blue");

$("button").click(function () {
    let stitchGauge = $("input[type=number][name=stitchGauge]").val();
    let rowGauge = $("input[type=number][name=rowGauge]").val()
    let diameter = $("input[type=number][name=diameter]").val()

    let radius = diameter / 2;

    let stitches = [];

    const rows = Math.round((radius / 10) * rowGauge);
    const cmPerRow = radius / rows;

    //console.log(rows)

    // for loop to spit out how many stitches to increase for each half of a semi circle
    // pythagorus theorum
    // hypotenuse = radius
    // length = radius - current length of circle
    // solve for width
    let circleLength = cmPerRow;
    for (let i = 0; i < rows; i++) {

        let l = radius - circleLength;
        let width = Math.sqrt((radius * radius) - (l * l));
        if (width > 0) {
            let newStitches = Math.round(((width / 10) * stitchGauge) * 2);
            stitches.push(newStitches);
        }
        circleLength = circleLength + cmPerRow;
    }
    console.log(stitches)



});
