for (s=0; s<app.selection.length; s++) {
	var currentopacity = app.selection[s].transparencySettings.blendingSettings.opacity;
	if (currentopacity > 4) {
		app.selection[s].transparencySettings.blendingSettings.opacity -= 5;
	} else if (currentopacity > 0) {
		app.selection[s].transparencySettings.blendingSettings.opacity = 0;
	} else {
		//
	}
}