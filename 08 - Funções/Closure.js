/**
 * Created by baltazar on 13/03/16.
 */

function showName (firstName, lastName) {
	var nameIntro = "Your name is ";

	//esta função interior tem acesso as variáveis da função exterior, incluindo os parâmetros
	function makeFullName () {
		return nameIntro + firstName + " " + lastName;
	}

	return makeFullName ();
}

showName ("Michael", "Jackson");

console.log(showName ("Michael", "Jackson"));

//- Closures tem acesso a variável das funções exteriores mesmo após o retorno da função exterior -//

function celebrityName (firstName) {
	var nameIntro = "This celebrity is ";

	//essa função interior tem acesso as variáveis da função exterior, incluindo os parâmetros
	function lastName (theLastName) {
		return nameIntro + firstName + " " + theLastName;
	}
	return lastName;
}

var mjName = celebrityName ("Michael");
//Nesta conjuntura, a função exterior celebrityName foi retornada

//O closure (lastName) é chamado aqui depois da função exterior ter retornado acima
//Sim, o closure continua tendo acesso as variáveis da função exterior e parâmetros

mjName ("Jackson"); //This celebrity is Michael Jackson

console.log(mjName ("Jackson"));