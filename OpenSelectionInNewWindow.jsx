// var mySelection=app.layoutWindows.firstItem().selection;
app.documents[0].pageItems.everyItem().label = '';
app.selection[0].label = 'selected';
app.layoutWindows.firstItem().selection = null;

app.menuActions.itemByID(258).invoke();

var document = app.documents.item(0); // active document

do {
	if (app.documents.length == 0) {break;}

	var document = app.activeDocument;
	if (! (document instanceof Document)) {break;}

	var currentItem = null;
	if (app.selection.length > 0) {
		currentItem = app.selection[0];
	}

	var undoneItems = [];
	for (var idx = 0; idx < document.allPageItems.length; idx++) {
		var pageItem = document.allPageItems[idx];
		if (pageItem.label == "selected") {
			undoneItems.push(pageItem);
		}
	}
	if (undoneItems.length <= 0) {break;}

	var nextItemIdx = 0;

	if (currentItem != null) {
		var currentItemIdx = -1;
		var searchItemIdx = 0;
		while (currentItemIdx == -1 && searchItemIdx < undoneItems.length) {
			if (undoneItems[searchItemIdx] == currentItem) {
				currentItemIdx = searchItemIdx;
			}
			searchItemIdx++;
		}
		if (currentItemIdx >= 0) {
			nextItemIdx = currentItemIdx + 1;
			if (nextItemIdx >= undoneItems.length) {
				nextItemIdx = 0;
			}
		}
	}

	app.select(undoneItems[nextItemIdx]);
}
while (false);

var currentwindow = app.layoutWindows.firstItem();
currentwindow.bounds = [500, 800, 800, 1200]; //y1,x1,y2,x2
currentwindow.zoom(ZoomOptions.FIT_SPREAD);
//Fit selection to window
app.menuActions.itemByID(118790).invoke();
//Zoom out thrice
app.menuActions.itemByID(118786).invoke();
app.menuActions.itemByID(118786).invoke();
app.menuActions.itemByID(118786).invoke();

