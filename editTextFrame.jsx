//TODO:
//when graphic frame with contents is selected, make the script select its contents and vice versa


if (app.documents.length > 0 && app.selection.length == 1) {
	if (app.selection[0].hasOwnProperty('parentStory')){
		app.selection[0].insertionPoints[0].select(); 
		//app.select(theObj,SelectionOptions.replaceWith);
	} else {
		if( app.selection[0].properties.hasOwnProperty('imageTypeName') ) {
			app.selection[0].parent.select();
		} else {

		}
	}
} 