/**
 * Created by baltazar on 28/02/16.
 */


var author = book.author;             // Obtém a propriedade author de book.
var name = author.surname             // Obtem surname de author.
var title = book['main title']        // Obtem main title de book.

//---------------//

book.edition = 6;                     // Cria uma propriedade 'edition' de book.
book['main title'] = 'ECMAScript';    // Configura 'main title'