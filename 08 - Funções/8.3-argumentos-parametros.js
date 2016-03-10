/**
 * Created by baltazar on 10/03/16.
 */

var o = {x:1, y:2, z:3};

var p = {s:6, a:6, t:6};

// Anexa os nomes das propriedades enumaráveis do objeto, no array e retorna.
// Se o parametro for omitido, retorna um array vazio
function getPropertyNames(o, /* opicional */ a) {
	if (a === undefined) a = [];
	for(var property in o) a.push(property);
	return a;
}

var a = getPropertyNames(o);
var z = getPropertyNames(p, a);

console.log(a);

console.log(z);

// O OBJETO ARGUMENTS

function f(x, y, z) {
	if (arguments.length != 3) {
		throw new Error("function f called with " + arguments.length + "arguments, but it expect 3 arguments");
	}
}

var x = f(6,6,6);

console.log(x);

var y = f(6,6);

console.log(y);
