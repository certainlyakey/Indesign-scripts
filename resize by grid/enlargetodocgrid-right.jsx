var myDocument = app.activeDocument;
var gridCellWidth = myDocument.gridPreferences.horizontalGridlineDivision;
var gridCellDiv = myDocument.gridPreferences.horizontalGridSubdivision;
var gridUnit = gridCellWidth/gridCellDiv; 

var lowerX = Math.round(app.selection[0].geometricBounds[3]);
var subCellsNumber = lowerX / gridCellWidth * gridCellDiv;
var higherSubCellsNumber = Math.ceil(subCellsNumber);
if (Number(higherSubCellsNumber) === Number(subCellsNumber)) {
	lowerX += gridUnit;
} else {
	lowerX = higherSubCellsNumber * gridUnit;
}

app.selection[0].geometricBounds = [
	app.selection[0].geometricBounds[0],
	app.selection[0].geometricBounds[1],
	app.selection[0].geometricBounds[2],
	lowerX
];
