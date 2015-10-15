//found here http://indisnip.wordpress.com/2010/07/26/document-swatches-selector/
//to be remade into Select next swatch command

swatchSelect();

if (myReturn) {
	if (app.selection[0].fillColor.name == app.activeDocument.swatches[mySwatchesResult].name) {
		alert('same color');
	} else {
		// var output = '';
		// for (var property in app.selection[0].fillColor) {
		//   output += property + ': ' + app.selection[0].fillColor[property]+'; ';
		// }
		var settings = app.strokeFillProxySettings;
		if (app.strokeFillProxySettings.target == StrokeFillTargetOptions.FORMATTING_AFFECTS_CONTAINER) {
			sel = app.selection[0];
		} else {
			sel = app.selection[0].texts[0];
		}
		switch(settings.active){
			case StrokeFillProxyOptions.STROKE:
				sel.strokeColor = app.activeDocument.swatches[mySwatchesResult].name;
				break;
			case StrokeFillProxyOptions.FILL:
				sel.fillColor = app.activeDocument.swatches[mySwatchesResult].name;
				break;
		}
	}
} 
 
function swatchSelect(){
	var activeColorType = "fill";
	var settings = app.strokeFillProxySettings;
	switch(settings.active){
		case StrokeFillProxyOptions.STROKE:
			activeColorType = "stroke";
			break;
		case StrokeFillProxyOptions.FILL:
			activeColorType = "fill";
			break;
	}
	with(myDialog = app.dialogs.add({name:"Swatches in the active document"})){
		myDialogColumn = dialogColumns.add();
		with(myDialogColumn){
			with(borderPanels.add()){
				staticTexts.add({staticLabel:"Swatches "});
				mySwatches = app.activeDocument.swatches;
				myDropdown = dropdowns.add();
				myDropdown.stringList = mySwatches.everyItem().name;
				myDropdown.selectedIndex = 0;
				staticTexts.add({staticLabel:"Active: "+activeColorType});
		 }
		}
		myReturn = myDialog.show();
		if (myReturn == true){
			mySwatchesResult = myDropdown.selectedIndex;
			myDialog.destroy;
			return mySwatchesResult;
		} else {
			myDialog.destroy();
		}
	}
}

