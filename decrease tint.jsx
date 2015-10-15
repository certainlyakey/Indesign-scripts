var step = 5;
for (s=0; s<app.selection.length; s++) {
	var sel, tint;
	if (app.strokeFillProxySettings.target == StrokeFillTargetOptions.FORMATTING_AFFECTS_CONTAINER) {
		sel = app.selection[s];
	} else {
		sel = app.selection[s].texts[0];
	}
	if (app.strokeFillProxySettings.active == StrokeFillProxyOptions.FILL) {
		if (sel.fillTint > (step - 1)) {
			sel.fillTint -= step;
		} else if (sel.fillTint > 0) {
			sel.fillTint = 0;
		} else if (sel.fillTint === -1) {
			sel.fillTint = 100 - step;
		}
	} else {
		if (sel.strokeTint > (step - 1)) {
			sel.strokeTint -= step;
		} else if (sel.strokeTint > 0) {
			sel.strokeTint = 0;
		} else if (sel.strokeTint === -1) {
			sel.strokeTint = 100 - step;
		}
	}

}