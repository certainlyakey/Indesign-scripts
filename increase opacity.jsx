for (s=0; s<app.selection.length; s++) {
	var currentopacity = app.selection[s].transparencySettings.blendingSettings.opacity;
	if (currentopacity < 96) {
		app.selection[s].transparencySettings.blendingSettings.opacity += 5;
	} else if (currentopacity < 100) {
		app.selection[s].transparencySettings.blendingSettings.opacity = 100;
	} else {
		//
	}
}