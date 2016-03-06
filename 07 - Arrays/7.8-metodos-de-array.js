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

var i = ['ant', 'Beatle', 'caterpilar', 'Dump'];
i.sort();
console.log(i);
i.sort(function(s,t) {
	var a = s.toLowerCase();
	var b = t.toLowerCase();
	if (a < b) return -1;
	if (a > b) return 1;
	return 0;
});
console.log(i);

// CONCAT

var conca = [5,6,7];
var cc = conca.concat(8,9);
console.log(cc);
var dd = conca.concat([10,11]);
console.log(dd);
var ee = conca.concat([12,13],[14,15]);
console.log(ee);
var ff = conca.concat(12,13,[14,[15]]);
console.log(ff);

// SLICE

var sli = [1,2,3,4,5];
var sl = sli.slice(0,3);
console.log(sl);
var sll = sli.slice(1,-1);
console.log(sll);

// SPLICE

var spli = [1,2,3,0,5,6,7,8,9];
spli.splice(4);
console.log(spli);
spli.splice(1,2);
console.log(spli);
spli.splice(1,1);
console.log(spli);

var splic = [1,2,3,0,5,6,7,8,9];
splic.splice(1,0,'a','b');
console.log(splic);
splic.splice(2,2,[1,2],3);
console.log(splic);

// PUSH AND POP

var stack = [];
stack.push(6,6);
console.log(stack);
stack.pop();
console.log(stack);
stack.push(9);
console.log(stack);
stack.pop();
console.log(stack);
stack.push([4,5]);
console.log(stack);
stack.pop();
console.log(stack);
stack.pop();
console.log(stack);

// UNSHIFT E SHIFT

var shif = [];
shif.unshift(666);
console.log(shif);
shif.unshift(171);
console.log(shif);
shif.shift();
console.log(shif);
shif.unshift(171, [155,69]);
console.log(shif);
shif.shift();
console.log(shif);
shif.shift();
console.log(shif);
shif.shift();
console.log(shif);

// TOSTRING

var to = [1,2,3].toString();
console.log(to);
var abc = ['a', 'b', 'c'].toString();
console.log(abc);
var mix = [1, [2, 'c']].toString();
console.log(mix);