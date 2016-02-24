var scope = "global";                   // Declara uma variavel global
function checkscope() {
  var scope = "local";                  // Declara uma variavel local
  return scope;                         // Retorna o valor local, não o global
}
checkscope()

//----------------//

scope = "global";                       // Declara uma variavel global mesmo sem 'var'
function checkscope2() {
  scope = "local";                      // Alteramos uma variavel global sem 'var'
  myscope = "local";                    // Declaramos uma nova variavel global implicitamente
  return [scope, myscope];              // Retorna dois valores
}
checkscope2()                           // ['local', 'local'] Tem efeitos colaterais
scope                                   // 'local' a variavel global mudou
myscope                                 // 'local' namespace global desordenado

//----------------//

var scope = "global scope";             // Variavel global
function checkscope() {
  var scope = "local scope";            // Uma variavel local
  function nested() {
    var scope = "nested scope";         // Um escopo aninhado de variaveis locais
    return scope;                       // Retorna o valor de scope
  }
  return nested();
}
checkscope()                            // Nested Scope
