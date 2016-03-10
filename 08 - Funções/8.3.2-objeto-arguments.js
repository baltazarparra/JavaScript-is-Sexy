/**
 * Created by baltazar on 10/03/16.
 */

function maxy() {
	var max = Number.NEGATIVE_INFINITY;
	// itera através de argumentos, procurando lembrar o maior
	for(var i = 0; i < arguments.length; i++)
	if (arguments[i] > max) max = arguments[i];
	return max;
}

var largest = maxy(1, 10, 100, 2, 3, 1000, 4, 5, 10666);
console.log(largest);

//----------------//

function f(x) {
	console.log(x);                   // exibe o valor inicial do argumento
	arguments[0] = null;              // muda o elemento do array
	console.log(x);                   // exibe o novo valor
}

f(666);

//----------------//

var factorial = function(x) {
	if (x <= 1) {return 1;}
	return x * arguments.callee(x-1);
};

var fac = factorial(9);
console.log(fac);

//---------------------------//



