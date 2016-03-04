/**
 * Created by baltazar on 04/03/16.
 */

var o = { x : 0, y : 1, z : 2};

var keys = Object.keys(o);
var values = [];
for(var i = 0; i < keys.length; i++) {
	var key = keys[i];
	values[i] = o[key];
}

console.log('Propriedades de o ' + keys);
console.log(keys);

console.log('Valores de o ' + values);
console.log(values);