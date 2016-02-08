// Api Date

var then = new Date(2016, 0, 17);          // O 1º dia do 17º mês de 2016
console.log(then);
var later = new Date(2016, 0, 17,          // O mesmo dia, ás 5:10:30 da tarde, hora local
                      17, 10, 30);
console.log(later);
var now = new Date();                      // Data e hora atuais
console.log(now);
var elapsed = now - then;                  // Subtração de data, intervalo em milisegundos
console.log(elapsed);

console.log(later.getFullYear());
console.log(later.getMonth());
console.log(later.getDate());
console.log(later.getDay());
console.log(later.getHours());
console.log(later.getUTCHours());

console.log(later.toString());
console.log(later.toUTCString());
console.log(later.toLocaleDateString());
console.log(later.toLocaleTimeString());
console.log(later.toISOString());
