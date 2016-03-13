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

//- Closures tem acesso a variável das funções exteriores mesmo após o retorno da função exterior -//

function celebrityID () {
	var celebrityID = 999;
	//Nós retornamos um objeto com algumas funções interiores
	//Todas as funções interiores têm acesso as variáveis'da função exterior
	return {
		getID: function () {
			//Esta função interior vai retornar a variável celebrityID ATUALIZADA
			return celebrityID;
		},
		setID: function (theNewId) {
			//Esta função interior vai mudar a variável da função exterior a qualquer hora
			celebrityID = theNewId;
		}
	};
}

var mjID = celebrityID (); //Nesta atual conjuntura, a função exterior celebrityID já retornou
mjID.getID(); //999
console.log(mjID.getID());

mjID.setID(567); //Muda a variável da função exterior
console.log(mjID.setID(567));

mjID.getID(); //567 - retorna o valor atualizado da variável celebrityID
console.log(mjID.getID());