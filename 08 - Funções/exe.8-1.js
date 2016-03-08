/**
 * Created by baltazar on 08/03/16.
 */

// Imprime o nome e o valor de cada propriedade de o.
function printprops(o) {
	for(var p in o)
		console.log(p + ": " + o[p] + "\n");
}

// calcula a distancia entre os pontos
function distance(x1, y1, x2, y2) {
	var dx = x2 - x1;
	var dy = y2 - y1;
	return Math.sqrt(dx*dx + dy*dy);
}

// Uma funcao recursiva (que chama ela mesma)
// lembre-se que x! é o produto de x e todos os inteiro positivos menores que ele
function factorial(x) {
	if (x <= 1) return 1;
	return x * factorial(x-1);
}

// essa expressao define uma funcao que eleva seu argumento ao quadrado
// note que a atribuimos a uma variavel
var square = function(x) { return x*x; };

// as expressoes podem incluir nome, oque é util para recursividade
var f = function fact(x) { if (x <= 1) return 1; else return x*fact(x-1); };

// as expressoes tambem podem servir como argumento para outras expressoes
data.sort(function(a,b) { return a-b; });

// as vezes as expressoes sao definidas, e chamadas imediatamente
var tensquared = (function(x) {return x*x;}(10));