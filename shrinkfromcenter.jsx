var currentPoint = app.activeWindow.transformReferencePoint;
app.activeWindow.transformReferencePoint = AnchorPoint.CENTER_ANCHOR;

app.selection[0].geometricBounds = [
	app.selection[0].geometricBounds[0] + 1, //ul y
	app.selection[0].geometricBounds[1] + 1, //ul x
	app.selection[0].geometricBounds[2] - 1, //lr y
	app.selection[0].geometricBounds[3] - 1 //lr x
];

app.activeWindow.transformReferencePoint = currentPoint;