var step = 5;
for (s=0; s<app.selection.length; s++) {
	var sel, tint;
	if (app.strokeFillProxySettings.target == StrokeFillTargetOptions.FORMATTING_AFFECTS_CONTAINER) {
		sel = app.selection[s];
	} else {
		sel = app.selection[s].texts[0];
	}
	if (app.strokeFillProxySettings.active == StrokeFillProxyOptions.FILL) {
		if (sel.fillTint < (100 - (step - 1)) && sel.fillTint > -1) {
			sel.fillTint += step;
		} else if (sel.fillTint < 100 || sel.fillTint === -1) {
			sel.fillTint = -1;
		}
	} else {
		if (sel.strokeTint < (100 - (step - 1)) && sel.strokeTint > -1) {
			sel.strokeTint += step;
		} else if (sel.strokeTint < 100 || sel.strokeTint === -1) {
			sel.strokeTint = -1;
		}
	}

}