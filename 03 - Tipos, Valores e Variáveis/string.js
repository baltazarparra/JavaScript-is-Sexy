// Api String

var s = "hello, world"                    // Começa com um texto
console.log(s.charAt(0));                 // O primeiro caractere
console.log(s.charAt(s.length-1));        // O último caractere
console.log(s.substring(1,4));            // 0 2º, 3º e 4º caractere
console.log(s.slice(1,4));                // Mesma coisa
console.log(s.slice(-3));                 // Os últimos três caracteres
console.log(s.indexOf('l'));              // Posição da primeira letra 'l'
console.log(s.lastIndexOf('l'));          // Posição da última letra 'l'
console.log(s.indexOf('l', 3));           // Posição da primeira letra 'l' em ou após 3
console.log(s.split(", "));               // Divide em substring
console.log(s.replace("h", "H"));         // Substitui todas instancias
console.log(s.replace("w", "W"));         // Substitui todas instancias
console.log(s.toUpperCase());             // Tudo em caixa alta

window.onload = function() {
    document.getElementById('contact-number').innerHTML = s;
}

// Arrays Strings

console.log(s[0]);
console.log(s[s.length-1]);
