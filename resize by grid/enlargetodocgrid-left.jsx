var myDocument = app.activeDocument;
var gridCellWidth = myDocument.gridPreferences.horizontalGridlineDivision;
var gridCellDiv = myDocument.gridPreferences.horizontalGridSubdivision;
var gridUnit = gridCellWidth/gridCellDiv; 

var upperX = Math.round(app.selection[0].geometricBounds[1]);
var subCellsNumber = upperX / gridCellWidth * gridCellDiv;
var lowerSubCellsNumber = Math.floor(subCellsNumber);
if (Number(lowerSubCellsNumber) === Number(subCellsNumber)) {
	upperX -= gridUnit;
} else {
	upperX = lowerSubCellsNumber * gridUnit;
}

app.selection[0].geometricBounds = [
	app.selection[0].geometricBounds[0],
	upperX,
	app.selection[0].geometricBounds[2],
	app.selection[0].geometricBounds[3]
];
