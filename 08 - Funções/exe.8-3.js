/**
 * Created by baltazar on 09/03/16.
 */

// define uma funcao extend que copia as propriedades do seu segundo argumento
// e dos subsequentes em seu primeiro argumento.
// Resolvemos um erro do IE aqui, em muitas versoes do IE o laço for/in
// não enumera uma propriedade enumeravel, se o prototipo tem uma propriedade nao enumeravel de mesmo nome
// isso significa que propriedades como toString não são manipuladas corretamente

var extend = (function() {  // atribui o valor de retorno
	// Verifica a presença do erro
	for(var p in {toString:null}) {
		// se chegamos aqui entao o laco esta funcionando
		return function extend(o) {
			for(var i = 1; i < arguments.length; i++) {
				var source = arguments[i];
				for(var prop in source) o[prop] = source[prop];
			}
			return o;
		};
	}
	// se chegarmos aqui, significa que o laço não funcionou
	// portanto, retorna uma versao da funcao que testa as propriedades

	return function patched_extend(o) {
		for(var i = 1; i < arguments.length; i++) {
			var source = arguments[i];
			// copia as propriedades enumeraveis
			for(var prop in source) o[prop] = source[prop];

			for(var j = 0; j < protoprops.length; j++) {
				prop = protoprops[j];
				if (source.hasOwnProperty(prop)) o[prop] = source[prop];
			}
		}
		return o;
	};

	// lista de propriedades do caso especial que verificamos
	var protoprops = ["toString", "valueOf", "constructor", "hasOwnProperty",
		"isPrototypeOf", "propertyIsEnumerable","toLocaleString"];
}());