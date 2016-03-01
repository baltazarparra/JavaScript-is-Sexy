/**
 * Created by baltazar on 28/02/16.
 */


var author = book.author;             // Obtém a propriedade author de book.
var name = author.surname;             // Obtem surname de author.
var title = book['main title'];        // Obtem main title de book.

//---------------//

book.edition = 6;                     // Cria uma propriedade 'edition' de book.
book['main title'] = 'ECMAScript';    // Configura 'main title'

//----------------//

var addr = '';
for(i = 0; i < 4; i++)
	addr += customer['address' + i] + '\n';

//---------------------//

function addstock(portfolio, stockname, shares) {
	portfolio[stockname] = shares;
}

//----------------------------------//

function getvalue(portfolio) {
	var total = 0.0;
	for(stock in portfolio) {                     // para cada ação em portoflio
		var shares = portfolio[stock];              // obtem o numero de quota
		var prices = getquote(stock);               // pesquisa o valor da quota
		total += share * price;                     // soma, valor da ação no total
	}
	return total;
}

// HERANÇA

var o = {};                                     // o herda de Object.prototype
o.x = 1;                                        // o recebe a propriedade 1
var p = inherit(o);                             // p herda o e Object.prototype
p.y = 2;                                        // p recebe uma propriedade
var q = inherit(p);                             // q herda p, o e Object.prototype
q.z = 3;                                        // q recebe uma propriedade
var s = q.toString();                           // toString é herdado de Object.prototype
q.x + q.y;                                      // x e y são herdados de o e p

//-----------------//

var unitcircle = { r : 1 };                     // Um objeto
var c = inherit(unitcircle);                    // c herda r
c.x = 1; c.y = 1;                               // c define duas propriedades
c.r = 2;                                        // altera a propriedade herdada
unitcircle.r;                                   // => 1: o objeto original não é afetado