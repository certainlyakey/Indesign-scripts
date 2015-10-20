var myDocument = app.activeDocument;
var baseline = myDocument.gridPreferences.baselineDivision;

var lowerY = Math.round(app.selection[0].geometricBounds[2]);
var linesNumber = lowerY / baseline;
var lowerLinesNumber = Math.floor(linesNumber);
if (Number(lowerLinesNumber) === Number(linesNumber)) {
	lowerY -= baseline;
} else {
	lowerY = baseline * lowerLinesNumber;
}
app.selection[0].geometricBounds = [
	app.selection[0].geometricBounds[0],
	app.selection[0].geometricBounds[1],
	lowerY,
	app.selection[0].geometricBounds[3]
];

