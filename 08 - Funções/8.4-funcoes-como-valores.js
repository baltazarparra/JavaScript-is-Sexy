/**
 * Created by baltazar on 11/03/16.
 */

function square(x) { return x*x; }

var s = square;

var r = square(4);
var l = s(2);
console.log(r);
console.log(l);

//------------------//

var o = {square: function(x) {return x*x;}};
var y = o.square(16);
console.log(y);

//----------------------//

var a = [function(x) {return x*x; }, 20];
var arr = a[0](a[1]);
console.log(arr);