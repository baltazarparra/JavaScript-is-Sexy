/**
 * Created by baltazar on 2/25/16.
 */

// BREAK

var matrix = getData();                           // Obtem um array 2d
var sum = 0, sucess = false;                      //Soma os numeros matriz
compute_sum: if (matrix) {                        // Começa com uma instrução rotulada da qual podemos sair
    for (var x = 0; x < matrix.length; x++) {
        var row = matrix[x];
        if (!row) break compute_sum;
        for (var y = 0; y < row.length; y++) {
            var cell = row[y];
            if (isNAN(cell)) break compute_sum;
            sum += cell;
        }
    }
    sucess = true;
}
// As intruções pulam pra ca, se chegamos aqui com sucess == false,
// entao algo deu errado com a matriz que recebemos,
// caso contrario, sum contem a soma das celular.

// CONTINUE

for(i = 0; i < data.length; i++) {
    if(!data[i]) continue;                      // Não prossegue com dados indefinidos
    total += data[i];
}