if (app.selection[0].hasOwnProperty("textFramePreferences")) {
	if (app.selection[0].textFramePreferences.verticalJustification == VerticalJustification.TOP_ALIGN) {
		app.selection[0].textFramePreferences.verticalJustification = VerticalJustification.CENTER_ALIGN;
	} else if (app.selection[0].textFramePreferences.verticalJustification == VerticalJustification.CENTER_ALIGN) {
		app.selection[0].textFramePreferences.verticalJustification = VerticalJustification.BOTTOM_ALIGN;
	} else if (app.selection[0].textFramePreferences.verticalJustification == VerticalJustification.BOTTOM_ALIGN) {
		app.selection[0].textFramePreferences.verticalJustification = VerticalJustification.TOP_ALIGN;
	}
}