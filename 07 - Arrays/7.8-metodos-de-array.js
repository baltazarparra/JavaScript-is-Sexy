/**
 * Created by baltazar on 06/03/16.
 */

// JOIN

var a = [1, 2, 3];
a.join();
console.log(a);
var b = a.join(' ');
console.log(b);
var c = a.join('');
console.log(c);
var d = new Array(10);
var e = d.join('-');
console.log(d);
console.log(e);

// REVERSE

var r = [1, 2, 3];
var f = r.reverse();
console.log(f);
var g = r.reverse().join();
console.log(g);

// SORT

var s = ['banana', 'cherry', 'apple'];
var h = s.sort();
console.log(h);
var j = h.join(', ');
console.log(j);

//--------------//

var n = [33, 4, 1111, 222];
n.sort();
n.sort(function(a, b) {
	return a-b;
});
console.log(n);
var m = n.sort(function(a, b){return b-a;});
console.log(m);

//--------------//

