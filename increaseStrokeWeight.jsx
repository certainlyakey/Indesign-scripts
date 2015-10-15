for (s=0; s<app.selection.length; s++) {
	sel = app.selection[s];
	var strokeWeight = app.selection[s].strokeWeight;
	app.selection[s].strokeWeight = strokeWeight + 0.5;
}