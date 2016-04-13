/*
	Exercise 2
	How many different variables named "a" are created here?
*/

function createFunction() {
	var a = function() { //2
		var a = "b"; //3
		return a;
	};
	return a;
}
var a = createFunction(); //1
console.log(a());
