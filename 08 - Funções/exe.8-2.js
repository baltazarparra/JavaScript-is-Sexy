/**
 * Created by baltazar on 09/03/16.
 */

// Definimos algumas funções simples aqui
function add(x,y) { return x + y; }
function subtract(x,y) { return x - y; }
function multiply(x,y) { return x * y; }
function divide(x,y) { return x / y; }

var a = add(6,6);
console.log(a);

// Aqui está uma função que recebe uma das funções anteriores como argumento
// e chama em dois operadores.
function operate(operator, operand1, operand2) {
	return operator(operand1, operand2);
}

// poderiamos chamar essa função como segue, para calcularmos o valor (2+3) + (4*5):
var i = operate(add, operate(add, 2, 3), operate(multiply, 4, 5));
console.log(i);

// para ajudar no exemplo, implementamos as funções simples novamente, desta vez
// usando funções literais dentro de um objeto literal
var operators = {
	add:      function(x,y) { return x+y; },
	subtract: function(x,y) { return x-y; },
	multiply: function(x,y) { return x*y; },
	divide:   function(x,y) { return x/y; },
	pow:      Math.pow  // tambem funciona pra funcoes pre definidas
};

// esta funcao recebe o nome de um operador, procura esse operador no objeto
// e entao chama os operandos fornecidos, observe a sintaxe usada para chamar a funcao operator
function operate2(operation, operand1, operand2) {
	if (typeof operators[operation] === "function")
		return operators[operation](operand1, operand2);
	else throw "unknown operator";
}

// Calcula o valor de (hello world) como segue:
var j = operate2("add", "hello", operate2("add", " ", "world"));
console.log(j);

var k = operate2("pow", 10, 2);
console.log(k);