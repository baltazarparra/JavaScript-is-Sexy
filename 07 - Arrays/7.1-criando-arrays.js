/**
 * Created by baltazar on 02/03/16.
 */

// CRIANDO

var empty = [];

// LENDO E GRAVANDO

var a = ['world'];
var value = a[0];

// ADICIONAR E EXCLUIR

a = [];
a[0] = 'zero';
a[1] = 'one';
console.log(a);

a.push('three');

a.push('four', 'five');

console.log(a);

delete a[0];

console.log(a);

//	Exercicio

var ola = ['ola mundo'];
var hello = ola.toString();
var cut = hello.split('');
var final = cut.reverse();
console.log(final);

//-------------------//