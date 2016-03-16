/**
 * Created by baltazar on 16/03/16.
 */

var scope = 'global scope';
function checkscope() {
	var scope = 'local scope';
	function f() {return scope;}
	return f;
}

var testscope = checkscope()();

console.log(testscope);
console.log(scope);

//----------------------//

var uniqueInterger = (function() {
	var counter = 0;
	return function() {return counter++;};
}());

uniqueInterger();
uniqueInterger();
console.log(uniqueInterger());

//-----------------------------//

function counter() {
	var n = 0;
	return {
		count: function() {return n++;},
		reset: function() {n = 0;}
	};
}

var c = counter(), d = counter();
var ce = c.count();
console.log(ce);
var de = d.count();
console.log(de);
var ce = c.reset();
console.log(ce);
var ce = c.count();
console.log(ce);
var de = d.count();
console.log(de);

//---------------------//

