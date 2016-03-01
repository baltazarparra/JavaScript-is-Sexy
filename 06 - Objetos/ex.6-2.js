/**
 * Created by baltazar on 01/03/16.
 */

/*
 * copia as propriedades enumeraveis de p em o e retorna o
 * se o e p tem uma propriedade de mesmo nome, sobrescreve
 * essa função não manipula getter e setter, nem copia atributos
 */
function extend(o, p) {
	for(prop in p) {                         // para todas propriedades em p
		o[prop] = p[prop];                   // adiciona propriedades em o
	}
	return o;
}

/*
 * copia as propriedades enumeraveis de p em o, e retorna o
 * se o e p tem propriedades de mesmo nome, ela permanece intacta
 * essa função não manipula getter e setter, nem copia atributos
 */
function merge(o, p) {
	for(prop in p) {                           // para todas propriedades p
		if (o.hasOwnProperty[prop]) continue;  // exceto as que já estão em o
		o[prop] = p[prop];                     // adiciona em o
	}
	return o;
}

/*
 * remove as propriedades de o, se nao existe uma com o mesmo nome em p
 * retorna o
 */
function restrict(o, p) {
	for(prop in o) {                         // para propriedades de o
		if (!(prop in p)) delete o[prop];    // deleta se nao tem em p
	}
	return o;
}

/*
 * para cada propriedade de p, exclui de o se tiver o mesmo nome
 * retorna o
 */
function subtract(o, p) {
	for(prop in p) {                         // para propriedades em p
		delete o[prop];                      // deleta de o

	}
	return o;
}

/*
 * retorna um novo objeto contento as propriedades de o e p
 * se o e p tem propriedades iguais, os valores de p são usados
 */
function union(o,p) { return extend(extend({},o), p); }

/*
 * retorna um novo objeto contendo apenas as propriedades de o que tem em p
 */
function intersection(o,p) { return restrict(extend({}, o), p); }

/*
 * retorna um array contendo os nomes das propriedades proprias numeraveis de o
 */
function keys(o) {
	if (typeof o !== "object") throw TypeError();  // exige object
	var result = [];                 // cria o array
	for(var prop in o) {             // para todas propriedades
		if (o.hasOwnProperty(prop))  // se ela for propria
			result.push(prop);       // adiciona no array
	}
	return result;                   // retorna o array
}