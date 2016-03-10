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

// Copia os length elements do array from para o array to
// começa a copia com o elemento from_start no array from
// e copie esse elemento em to_start no array to

function arraycopy(/* array */ from, /* indice */ from_start,
									 /* array */ to, /* indice */ to_start,
									 /* intereger */ length)
{
	// o codigo fica aqui
}

// esta versao é um pouco menos eficiente, mas nao é precisa lembrar a ordem dos argumentos
function easycopy(args) {
	arraycopy(args.from,
						args.from_start || 0,/* Observe o valor padrão fornecido*/
						args.to,
						args.to_start || 0,
						args.length);
}

var easy = [1,2,3,4], b =[];
easycopy({from: easy, to: b, length: 4});


