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