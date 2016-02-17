// 3.2.4 Comparação de Padrões

// /^HTML/                    // Corresponde às letras H T M L no início de uma string
// /[1-9][0-9]*/              // Corresponde a um dígito diferente de 0 seguido de qualquer dígito
// /\bjavascript\b/i          // Corresponde a "javascript" como uma palavra, sem considerar letras maiuscular e minusculas


// RegExp

var text = "testing: 1, 2, 3";                    // Exemplo de texto
var pattern = /\d+/g;                             // Corresponde a todas as instancias de um ou mais digitos
console.log(pattern.test(text));                               // Existe uma correspondencia
console.log(text.search(pattern));                             // Posição da primeira correspondencia
console.log(text.match(pattern));                              // Array de todas correspondencias
console.log(text.replace(pattern, "#"));                       // "testing: #, #, #"
console.log(text.split(/\D+/));                                // Divide em não dígitos
