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