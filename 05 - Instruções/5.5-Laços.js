/**
 * Created by baltazar on 2/25/16.
 */

// WHILE

var count = 0;
while (count < 10) {
    console.log(count);
    count++;
}

// DO WHILE

function printArray(a) {
    var len = a.length, i=0;
    if (len == 0)
        console.log('empty array');
    else {
        do {
            console.log(a[i]);
        } while (++i < len);
    }
}

printArray('6');

// FOR

var i, j;
for(i = 0, j = 10; i < 10; i++, j--)
    sum += i * j;

//-------------------------//

function tail (o) {
    for(; o.next; o = o.next) ;
}

// FOR IN

for (var p in o)
    console.log(o[p]);

//------------------//

var o = {x:1, y:2, z:3};
var a = [], i = 0;
for (a[i++] in o)