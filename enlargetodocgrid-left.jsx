var myDocument = app.activeDocument;
var gridcellWidth = myDocument.gridPreferences.horizontalGridlineDivision;

var newWidth = app.selection[0].geometricBounds[1];

newWidth = newWidth - gridcellWidth;

app.selection[0].geometricBounds = [
	app.selection[0].geometricBounds[0],
	newWidth,
	app.selection[0].geometricBounds[2],
	app.selection[0].geometricBounds[3]
];