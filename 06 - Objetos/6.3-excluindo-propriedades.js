/**
 * Created by baltazar on 01/03/16.
 */

delete book.author;                                       // deleta a propriedade author
delete book['main title'];                                // deleta main title

//---------------------------//

o = { x : 1 };                                            // cria a propriedade
delete o.x;                                               // deleta e retorna true
delete o.x;                                               // não faz nada
delete o.toString;                                        // não faz nada, toString não é dele
delete 1;                                                 // não faz sentido, mas é avaliada como true

//----------------------//

delete Object.prototype;                                  // não exclui, propriedade não configuravel
var x = 1;                                                // variavel global
delete this.x;                                            // não pode excluir
function f() {}                                           // declara função global
delete this.f;                                            // não pode excluir

//----------------//

this.x = 1;                                               // cria propriedade global (sem var)
delete x;                                                 // agora ela pode ser exluida

delete x;                                                 // SyntaxError no scrict mode
delete this.x;                                            // Forma correta
