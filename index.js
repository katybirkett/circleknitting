Vue.createApp({
    data() {
        return {
            diameterValue: '',
            stitchValue: '',
            rowValue: '',
            calcValue: ''
        }
    },
    methods: {
        calcCircle() {
            const stitchGauge = parseInt(this.stitchValue);
            const rowGauge = parseInt(this.rowValue);
            const diameter = parseInt(this.diameterValue);
            let textValue = '';
            const rows = Math.round((diameter / 10) * rowGauge);
            const maxStitch = Math.round((diameter / 10) * stitchGauge);

            if (rows < 4 || maxStitch < 4) {
                textValue = 'Cannot make a circle with those values'
            } else {

                let radius = diameter / 2;
                let stitches = [];
                const cmPerRow = diameter / rows;
                // for loop to spit out how many stitches to increase for each half of a semi circle
                // pythagorus theorum
                // hypotenuse = radius
                // length = radius - current length of circle
                // solve for width
                let circleLength = cmPerRow;


                for (let i = 0; i < (rows - 1); i++) {

                    let l = radius - circleLength;
                    let width = Math.sqrt((radius * radius) - (l * l));
                    if (width > 0) {
                        let newStitches = Math.round(((width / 10) * stitchGauge) * 2);
                        stitches.push(newStitches);
                    }
                    circleLength = circleLength + cmPerRow;
                }
                textValue = ("You will need to knit " + rows + " rows. Here are the stitches needed for each of these rows to make a circle: "
                    + stitches.join(", ") + ". Spread the increases and decreases as evenly as possible throughout the rows.")
            }
            this.calcValue = textValue;
            this.diameterValue = "";
            this.stitchValue = "";
            this.rowValue = "";

        }
    }
}).mount('#app');


