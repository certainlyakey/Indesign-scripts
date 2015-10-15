var sel = app.selection; 
if (sel[0].allGraphics.length > 0) {
	if (sel[0].allGraphics[0].localDisplaySetting == ViewDisplaySettings.OPTIMIZED) {
		sel[0].allGraphics[0].localDisplaySetting = ViewDisplaySettings.TYPICAL; 
	} else if (sel[0].allGraphics[0].localDisplaySetting == ViewDisplaySettings.TYPICAL) {
		sel[0].allGraphics[0].localDisplaySetting = ViewDisplaySettings.HIGH_QUALITY; 
	} else if (sel[0].allGraphics[0].localDisplaySetting == ViewDisplaySettings.HIGH_QUALITY) {
		sel[0].allGraphics[0].localDisplaySetting = ViewDisplaySettings.OPTIMIZED; 
	}
} else {
	if (sel[0].localDisplaySetting == ViewDisplaySettings.OPTIMIZED) {
		sel[0].localDisplaySetting = ViewDisplaySettings.TYPICAL; 
	} else if (sel[0].localDisplaySetting == ViewDisplaySettings.TYPICAL) {
		sel[0].localDisplaySetting = ViewDisplaySettings.HIGH_QUALITY; 
	} else if (sel[0].localDisplaySetting == ViewDisplaySettings.HIGH_QUALITY) {
		sel[0].localDisplaySetting = ViewDisplaySettings.OPTIMIZED; 
	}
}