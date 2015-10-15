for (s=0; s<app.selection.length; s++) {
	sel = app.selection[s];
	if (typeof sel !== 'undefined') {
		var strokeWeight = sel.strokeWeight; 
		var step = 0.5;
		if (strokeWeight <= step && strokeWeight > 0) {
			sel.strokeWeight = 0;
		} else if (strokeWeight > step) {
			sel.strokeWeight = strokeWeight - step;
		}
	}
}