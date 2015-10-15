var myDocument = app.activeDocument;
var gridcellWidth = myDocument.gridPreferences.horizontalGridlineDivision;

var newWidth = app.selection[0].geometricBounds[3];

newWidth = newWidth + gridcellWidth;

app.selection[0].geometricBounds = [
	app.selection[0].geometricBounds[0],
	app.selection[0].geometricBounds[1],
	app.selection[0].geometricBounds[2],
	newWidth
];