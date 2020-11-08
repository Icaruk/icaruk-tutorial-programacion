
// Esta vez no hay ejercicio resuelto porque era libre, así que venga,
// avancemos con velocidad por este capítulo...


// En Javascript las variables se "pasan" por valor o por referencia.
// Te has quedado igual, no te preocupes porque voy a poner varios ejemplos:



// >>> INICIO EJECUCIÓN >>>

let arrayAmigos = [];


function simulacionDeAmistades (array) {
	
	array.push("Juan");
	array.push("Pepe");
	array.push("Felipe");
	array.push("Paco");
	
	console.log( "Tendría", array, "amigos" );
	
};

console.log( "Inicialmente tengo", arrayAmigos, "amigos." );
simulacionDeAmistades(arrayAmigos);
console.log( "Finalmente tengo", arrayAmigos, "amigos." );

// --- FIN EJECUCIÓN ---



// ¡Eh! arrayAmigos inicialmente estaba vacío, ¿porqué se ha modificado?
// Deberíamos haber visto lo siguiente:

// Inicialmente tengo [] amigos.
// Tendría [ 'Juan', 'Pepe', 'Felipe', 'Paco' ] amigos
// Finalmente tengo [] amigos.

// ¿Qué ha pasado?
// Pues que hemos pasado una REFERENCIA al array original,
// y al mutar "array" estamos mutando realmente "arrayAmigos"
// ya que "array" es una referencia de "arrayAmigos"

// Esto también ocurre con objetos:


// >>> INICIO EJECUCIÓN >>>

let mochila = {
	dinero: 10,
	movil: true,
	llaves: true
};


function simuladorDeRiqueza (objeto) {
	objeto.dinero = 999999;
	console.log( "Tengo", objeto.dinero, "€, ¡soy rico!" );
};


console.log( "Mochila al principio: ", mochila );
simuladorDeRiqueza(mochila);
console.log( "Mochila al final: ", mochila );

// --- FIN EJECUCIÓN ---


// Vemos que ha ocurrido lo mismo.
// ¿Cómo podríamos hacer para mutar (modificar) arrays u objetos sin que afecten al original?
// Pues si al pasarlos por referencia da estos problemas... ¡pues los pasamos por valor!

// Error.
// Todos los "primitives" (valor primitivo o tipo de dato primitivo) son inmutables.
// Es decir si yo ahora hago

let puedo = true;

// El valor primitivo true (boolean) está asignado a la variable "puedo".
// Y si hago:

puedo = false;

// No estoy transformando un true en un false, ya que es inmutable.
// Le estoy diciendo: "Oiga señor true, váyase que viene el señor false a ocupar su lugar".
// Entonces viene el señor false y se asigna a nuestra variable "puedo".

/*
	Los los primitives son:
	
	- string
	- number
	- boolean
	- undefined
	- otros (que no hemos visto, pero puedes ver aquí: https://developer.mozilla.org/es/docs/Glossary/Primitivo)
	
*/

// Total, que arrays y objetos NO son primitivos.
// ¿Y todo esto para qué me vale?
// Los primitivos se pasan SIEMPRE por VALOR.
// Los NO primitivos se pasan SIEMPRE por REFERENCIA.

// Pasar por valor se podría explicar como la acción de darte una naranja.
// En cambio, pasar por referencia como sería decirte dónde te he dejado la naranja.

// En ambos casos si te comes la naranja, la naranja desaparece.
// Que es lo que ha pasado con el array de amigos y el objeto de mochila.


// Entonces si queremos hacer alguna modificación en un array u objeto sin alterar el original, primero tenemos que clonarlo.
// Hay muchas formas para clonar arrays u objetos...
// Voy a enseñar la más sencilla aunque forma parte de un capítulo más avanzado
// No voy a explicarlo porque lo haré más adelante, ahora esto es una herramienta y ya está.


// >>> INICIO EJECUCIÓN >>>

let arrayAmigos = [];


function simulacionDeAmistades (array) {
	
	let nuevoArray = [...array]; // clono el array
	
	nuevoArray.push("Juan");
	nuevoArray.push("Pepe");
	nuevoArray.push("Felipe");
	nuevoArray.push("Paco");
	
	console.log( "Tendría", nuevoArray, "amigos" );
	
};

console.log( "Inicialmente tengo", arrayAmigos, "amigos." );
simulacionDeAmistades(arrayAmigos);
console.log( "Finalmente tengo", arrayAmigos, "amigos." );

// --- FIN EJECUCIÓN ---



// Y ahora con objetos



// >>> INICIO EJECUCIÓN >>>

let mochila = {
	dinero: 10,
	movil: true,
	llaves: true
};


function simuladorDeRiqueza (objeto) {
	let nuevoObjeto = {...objeto}; // clono el objeto
	nuevoObjeto.dinero = 999999;
	console.log( "Tengo", nuevoObjeto.dinero, "€, ¡soy rico!" );
};


console.log( "Mochila al principio: ", mochila );
simuladorDeRiqueza(mochila);
console.log( "Mochila al final: ", mochila );

// --- FIN EJECUCIÓN ---



// ############################################################
// Ejercicio
// ############################################################

/*
	Vamos a simular que cambiamos el nombre de una persona por otro, pero sin mutar el objeto original.
	Yo te doy una "plantilla", y tu haces la función.
	Esta es fácil, sólo es para reforzar conceptos.
*/

let persona = {
	nombre: "Juan",
	apellido: "Pérez",
	edad: 35
};

function simulaNombre(objetoPersona, nuevoNombre) {
	// Aquí va tu código
	
	console.log( "Si me cambiara el nombre me llamaría", nuevoNombre );
};


console.log( "Mi nombre es", persona.nombre );
simulaNombre(persona, "Pepe");
console.log( "Pero lamentablemente me sigo llamando", persona.nombre );


