/**
 * Created by baltazar on 04/03/16.
 */

var table = new Array(10);
for(var i = 0, len = table.length; i < len; i++)
	table[i] = new Array(10);

for(var row = 0; row < len; row++) {
	for(col = 0; col < table[row].length; col++) {
		table[row][col] = row*col;
	}
}

var product = table[5][7];

console.log(product);

