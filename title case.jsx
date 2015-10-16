// code mostly from http://graphicdesign.stackexchange.com/questions/47366
if (app.documents.length > 0) {
	if (app.selection.length > 0) {
		if (app.selection[0].constructor.name == "InsertionPoint") {
			var ip = app.selection[0];
			var story = app.selection[0].parentStory;
			var twoCharactersBefore = story.characters[(ip.index - 1)];
			var twoCharactersAfter = story.characters[(ip.index)];
			try {
				app.select(twoCharactersBefore.words[0], SelectionOptions.REPLACE_WITH);
			} catch (e) {}
			try {
				app.select(twoCharactersAfter.words[0], SelectionOptions.ADD_TO);
			} catch (e) {}
			var text = app.selection[0].contents;
			var chars = text.split("");
			chars[0] = chars[0].toUpperCase();
			var result = chars.join("");
			app.selection[0].contents = result;
			var oldcursorpos = story.characters.itemByRange(ip.index, ip.index-1);
			app.select(oldcursorpos);
		}
	}
}