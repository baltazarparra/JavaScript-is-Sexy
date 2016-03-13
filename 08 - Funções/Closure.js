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

//- Closures armazenam referências para as variáveis da função exterior -//

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

//- Closures que deram errado -//

//Este exemplo é explicado em detalhe abaixo (logo após este bloco de código)
function celebrityIDCreator (theCelebrities) {
	var i;
	var uniqueID = 100;
	for (i = 0; i < theCelebrities.length; i += 1) {
		theCelebrities[i]["id"] = function () {
			return uniqueID + i;
		};
	}

	return theCelebrities;
}

var actionCelebs = [{name:"Stallone", id:0}, {name:"Cruise", id:0}, {name:"Willis", id:0}];

var createIdForActionCelebs = celebrityIDCreator(actionCelebs);

var stalloneID = createIdForActionCelebs[0];

console.log(stalloneID.id()); //103

//- Forma correta -//

function celebrityIDCreator (theCelebrities) {
	var i;
	var uniqueID = 100;
	for (i = 0; i < theCelebrities.length; i += 1) {
		theCelebrities[i]["id"] = function (j) { //a variável paramétrica j é o i passado na invocação da IIFE
			return function () {
				return uniqueID + j;
				//cada iteração do loop for passa no valor atual de i dentro desta IIFE e salva o valor correto no array
			} () //Adicionando () no fim da função, nós estamos executando-a imediatamente e retornando somente o valor de uniqueID + j, ao invés de retornar uma função
		} (i); //invocando imediatamente a função passando a variável i como um parâmetro
	}
	return theCelebrities;
}

var actionCelebs = [{name: "Stallone", id:0}, {name: "Cruise", id:0}, {name: "Willis", id:0}];

var createIdForActionCelebs = celebrityIDCreator (actionCelebs);

var stalloneID = createIdForActionCelebs [0];
console.log(stalloneID.id); //100

var cruiseID = createIdForActionCelebs [1];
console.log(cruiseID.id); //101