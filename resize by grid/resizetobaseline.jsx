//Try to make it work while text editing mode

var myDocument = app.activeDocument;
var baseline = myDocument.gridPreferences.baselineDivision;

var lowerY = Math.round(app.selection[0].geometricBounds[2]);
var linesNumber = lowerY / baseline;
var higherLinesNumber = Math.ceil(linesNumber);
if (Number(higherLinesNumber) === Number(linesNumber)) {
	lowerY += baseline;
} else {
	lowerY = baseline * higherLinesNumber;
}

app.selection[0].geometricBounds = [
	app.selection[0].geometricBounds[0],
	app.selection[0].geometricBounds[1],
	lowerY,
	app.selection[0].geometricBounds[3]
];

