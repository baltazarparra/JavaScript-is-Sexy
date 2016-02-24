function test(o) {
  var i = 0;                                // i está definida para toda a função
  if (typeof o == "object") {
    var j = 0;                              // j está sendo definida por toda parte e não apenas no bloco

    for(var k=0; k < 10; k++) {             // k está sendo definida por toda parte, não apenas no laço

      console.log(k);                       // imprime os numeros de 0 a 9
    }
    console.log(k);                         // k ainda está definida, imprime '10'
  }
  console.log(j);                           // j está definida, mas não pode ser inicializada
}

//-------------------//

var scope = "global";
function f() {
  console.log(scope);                      // Imprime 'undefined' e não 'global'
  var scope = "local";                     // Variavel inicializada aqui, mas não definida por toda parte
}

//-------------//

function f() {
  var scope;                                // A variavel local é declarada por todo corpo da funcao
  console.log(scope);                       // Ela existe aqui, mas ainda tem o valor indefinido
  scope = "local";                          // Agora a inicializamos e fornecemos a ela um valor
  console.log(scope);                       // E aqui ela tem o valor que esperamos
}
