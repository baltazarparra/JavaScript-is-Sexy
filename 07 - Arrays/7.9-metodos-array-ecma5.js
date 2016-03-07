/**
 * Created by baltazar on 07/03/16.
 */

// FOR EACH

var data = [1,2,3,4,5];
var sum = 0;
data.forEach(function(value) { sum += value; });
console.log(sum);

data.forEach(function(v, i, a) { a[i] = v + 1; });
console.log(data);

//------------------//

function foreach(a, f, t) {
	try { a.forEach(f, t); }
	catch(e) {
		if (e === foreach.break) return;
		else {throw e};
	}
}
foreach.break = new Error('Stop Iteraction');

// MAP

m = [1, 2, 3];
p = m.map(function(x) {return x*x; });
console.log(p);

// FILTER