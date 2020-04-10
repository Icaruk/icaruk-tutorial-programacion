
// ############################################################
// Resolución ejercicio
// ############################################################

/*
	Vamos a crear una función llamada "partidor".
	Y la función hará lo siguiente:
	
	- Le darás un string por argumentos
	- Partirá el string por la MITAD. Si tiene 10 caracteres, hará 5 y 5.
	- Hará un console log diciendo las dos mitades.
	
	Por ejemplo:
	
	partidor("hola"); // saldrá un console.log diciendo: "ho / la"
	partidor("holaquetal"); // saldrá un console.log diciendo: "holaq / uetal"
	
	
	Sé que esto es algo difícil, así que os voy a ayudar un poco.
	
	Problema principal:
	- Tengo que partir un string por la mitad, y obtener 2 trozos
	
	Fragmentamos el problema en trozos más pequeños:
	- Necesito obtener la longitud del string, es decir, cuántos caracteres tiene
	- Una vez obtenida, partiré el string desde el 0 hasta la mitad, ahí tendré mi primera mitad
	- La segunda mitad la haré partiendo el string desde la mitad hasta el final
	
	Con esto ya tenéis casi todo hecho, sólo falta... hacerlo.
	¡Suerte y paciencia!
	
*/

const partidor = function(string = "") {
	
	const longitud = string.length;
	const mitad = longitud / 2;
	
	let parte1 = string.slice(0, mitad);
	let parte2 = string.slice(mitad, longitud);
	
	console.log( `${parte1} / ${parte2}` );
	
};

partidor("hola");
partidor("holaque")



// ***********************************************************
// Longitud de un array
// ***********************************************************

// Funciona de la misma forma que un string
["uno", "dos", "tres"].length // 3
[1, 2, 3].length // 3
[[1, 2, 3], [1, 2, 3], [1, 2, 3]].length // 3



// ***********************************************************
// Acceder a un elemento de un array
// ***********************************************************

// Pongamos que tengo este array:
let listaDeLaCompra = ["patatas", "cebollas", "agua"];


// ¿Cómo accedo a sus elementos?


// >>> INICIO EJECUCIÓN >>>

let listaDeLaCompra = ["patatas", "cebollas", "agua"];
console.log( "Elemento 0: " + listaDeLaCompra[0] );
console.log( "Elemento 1: " + listaDeLaCompra[1] );
console.log( "Elemento 2: " + listaDeLaCompra[2] );

// --- FIN EJECUCIÓN ---


// Cómo accedo al último elemento del array si el array es muy muy largo
// y no sé exactamente si es 8567 o 9612


// >>> INICIO EJECUCIÓN >>>

let listaDeLaCompra = ["patatas", "cebollas", "agua"];
console.log( "Último elemento: " + listaDeLaCompra[listaDeLaCompra.length - 1] );

// --- FIN EJECUCIÓN ---


// Supongamos que no sabemos los elementos que tiene
// Pues hacemos un listaDeLaCompra.length
// Y restamos 1 porque los arrays empiezan desde 0 y no desde 1



// ***********************************************************
// Manipular arrays
// ***********************************************************

// Push insertará un elemento al final del array:

// >>> INICIO EJECUCIÓN >>>

let listaDeLaCompra = ["patatas", "cebollas", "agua"];
listaDeLaCompra.push("leche");

console.log( listaDeLaCompra );

// --- FIN EJECUCIÓN ---



// Unshift lo hará al principio

// >>> INICIO EJECUCIÓN >>>

let listaDeLaCompra = ["patatas", "cebollas", "agua"];
listaDeLaCompra.unshift("leche");

console.log( listaDeLaCompra );

// --- FIN EJECUCIÓN ---



// shift sacará el primer elemento y lo pondrá en la variable que le digamos


// >>> INICIO EJECUCIÓN >>>

let listaDeLaCompra = ["patatas", "cebollas", "agua"];
let primerElemento = listaDeLaCompra.shift();

console.log( listaDeLaCompra );
console.log( primerElemento );

// --- FIN EJECUCIÓN ---



// pop sacará el último elemento y lo pondrá en la variable que le digamos


// >>> INICIO EJECUCIÓN >>>

let listaDeLaCompra = ["patatas", "cebollas", "agua"];
let ultimoElemento = listaDeLaCompra.pop();

console.log( listaDeLaCompra );
console.log( ultimoElemento );

// --- FIN EJECUCIÓN ---



// reverse le dará la vuelta


// >>> INICIO EJECUCIÓN >>>

let listaDeLaCompra = ["patatas", "cebollas", "agua"];
listaDeLaCompra.reverse();

console.log( listaDeLaCompra );

// --- FIN EJECUCIÓN ---



// Slice funcionará igual que con los strings
["a", "b", "c", "d"].slice(0, 1); // ["a"]
["a", "b", "c", "d"].slice(0, 2); // ["a", "b"]
["a", "b", "c", "d"].slice(0, 3); // ["a", "b", "c"]
["a", "b", "c", "d"].slice(1, 2); // ["b", "c"]
["a", "b", "c", "d"].slice(2, 4); // ["c", "d"]



// También se pueden sumar arrays:
["a", "b"].concat(["c", "d"]); // ["a", "b", "c", "d"]



// ############################################################
// Ejercicio
// ############################################################

/*
	Vamos a crear un pequeño sistema que hará estas cosas:
	
	- Añadir un elemento a la lista de la compra.
		Cada vez que se añade un elemento, imprime todos los elementos que hay actualmente.
	- Eliminar el último elemento de la lista de la compra.
		Cada vez que se elimine un elemento, imprime todos los elementos que hay actualmente.
	- Que no se pueda eliminar ningún elemento si la lista tiene 0 elementos.
	- Que no entren más de 5 elementos en la lista de la compra.
	
	Vamos a crear dos funciones: 
	
	- meteLista
	- sacaLista
	
	Y funcionaría así:
	
*/

let listaDeLaCompra = []; // lo declaro vacío para que empiece sin nada

meteLista("patatas"); // añado un elemento
meteLista("leche"); // añado otro elemento
meteLista("agua"); // añado otro elemento
meteLista("cebolla"); // añado otro elemento
meteLista("sal"); // añado otro elemento
meteLista("azúcar"); // añado otro elemento, pero me daría error ya que tengo 5 elementos

sacaLista(); // elimino el último, en este caso sería "sal"
meteLista("azúcar"); // añado el azúcar, esta vez sí que cabría

// Y a estas alturas mi array tendría que ser así:
["patatas", "leche", "agua", "cebolla", "azúcar"]


// Suerte y paciencia, recuerda desgranar el gran problema en problemas más pequeños
// ve por partes, es más fácil.
