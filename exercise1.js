/*
	Exercise 1
	The following code should print "Homer", "Barney", "Marge"
	How should we fix this?
*/
function createCharacter(width, height, color, name) {
	widget = {
		width: width,
		height: height,
		color: color,
		name: name
	};
	return widget;
}

widget = createCharacter(10, 12, "yellow", "Homer");
widget2 = createCharacter(12, 18, "blue", "Barney");
widget3 = createCharacter(4, 7, "red", "Marge");

//Hey! Don't re-order these.
console.log(widget.name);
console.log(widget2.name);
console.log(widget3.name);
