var text = app.selection[0].contents; 
var chars = text.split("");
for (s=0; s<chars.length; s++) {
	if (chars[s] === chars[s].toUpperCase()) {
		chars[s] = chars[s].toLowerCase();
	} else {
		chars[s] = chars[s].toUpperCase();
	}
}
var result = chars.join("");
app.selection[0].contents = result;
