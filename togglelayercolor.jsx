function propName(prop, value){
	for(var i in prop) {
		if (prop[i] == value){
			 return i;
		}
	}
	return false;
}

var myDocument = app.documents.item(0);
var myLayer = myDocument.activeLayer;
var layerColor = myLayer.layerColor;
var layerColorAsString = '';
// alert(app.activeDocument.swatches.item('Paper').colorValue);
if (layerColor != UIColors.WHITE) {
	layerColorAsString = propName(UIColors,layerColor);
	myLayer.insertLabel('initialLayerColor', layerColorAsString);
	myLayer.layerColor = UIColors.WHITE;
} else {
	var initialLayerColor = myLayer.extractLabel('initialLayerColor');
	myLayer.layerColor = UIColors[initialLayerColor];
}

