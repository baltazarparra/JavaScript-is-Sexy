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

f = [5, 4, 3, 2, 1];
smallvalues = f.filter(function(x) { return x < 3 });
console.log(smallvalues);
everyother = f.filter(function(x, i) { return i%2==0 });
console.log(everyother);

// EVERY E SOME

e = [1, 2, 3, 4, 6];
var s = e.every(function(x) {return x < 10;});
console.log(s);
var fal = e.every(function(x) {return x % 2 === 0;});
console.log(fal);

//-----------------//

som = [1, 2, 3, 4, 5];
som.some(function(x) {return x%2===0; });

// REDUCE

function extend(o, p) {
	for(prop in p) {
		o[prop] = p[prop];
	}
	return o;
}

function union(o,p) { return extend(extend({},o), p); }

var objects = [{x:1}, {y:2}, {z:3}];
var merged = objects.reduce(union);
console.log(objects);
console.log(merged);

// INDEXOF

a = [0, 1, 2, 1, 0];
console.log(a.indexOf(1));
console.log(a.lastIndexOf(1));
console.log(a.indexOf(3));