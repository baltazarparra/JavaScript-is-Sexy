/**
 * Created by baltazar on 08/03/16.
 */

// FUNCOES ANINHADAS

function hypotenuse (a, b) {
	function square(x) {return x*x; }
	return Math.sqrt(square(a) + square(b));
}

console.log(hypotenuse(8, 8));

// CHAMADA DE METODO

var calculator = {
	ope1: 1,
	ope2: 1,
	add: function() {
		this.result = this.ope1 + this.ope2;
	}
};
calculator.add();
console.log(calculator.result);