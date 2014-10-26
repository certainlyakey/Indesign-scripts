var myDocument = app.activeDocument;
var baseline = myDocument.gridPreferences.baselineDivision;

var oldHeight = app.selection[0].geometricBounds[2];
var newHeight = app.selection[0].geometricBounds[2];

var linesNumber = oldHeight / baseline;
var difference = 0;

if (linesNumber === parseInt(linesNumber, 10)) { //if integer
	newHeight = newHeight + baseline;
} else {
	var decimal = linesNumber - Math.floor(linesNumber);
	if (decimal < 0.5) {
		difference = -(baseline*decimal);
	} else {
		difference = baseline*(1-decimal);
	}
	newHeight = newHeight + difference;
}

app.selection[0].geometricBounds = [
	app.selection[0].geometricBounds[0],
	app.selection[0].geometricBounds[1],
	newHeight,
	app.selection[0].geometricBounds[3]
];

