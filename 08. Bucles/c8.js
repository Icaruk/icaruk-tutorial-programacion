// ############################################################
// Resolución ejercicio
// ############################################################

/*
	Vamos a crear un pequeño sistema que hará estas cosas:
	
	- Usar las propiedades del objeto "tienda" (que está debajo) para comprar productos.
	- Tener una función para comprar productos a la tienda que haga lo siguiente:
		- Restar el precio del producto del dinero de nuestra persona (que está debajo)
		- Añadir el producto a persona.mochila
		- Informar de qué has comprado, cuánto te ha costado, cuánto dinero te queda y qué tienes en la mochila
		- Llamarías a la función usando la key del producto de la tienda, por ejemplo comprar("pan")
	- Que no se pueda comprar ningún producto si no se tiene dinero.
	- Que no se pueda comprar ningún producto si tienes 5 o más elementos en la mochila.
	
*/

// Este es el objeto tienda, de aquí se sacará la información de los productos
const tienda = {
	pan: {
		nombre: "Pan de pueblo",
		precio: 10
	},
	agua: {
		nombre: "Agua embotellada",
		precio: 2
	},
	arroz: {
		nombre: "Arroz tres delicias",
		precio: 15
	},
	ferrari: {
		nombre: "Ferrari F8",
		precio: 240000
	}
}


// Este eres tú, de aquí sacarás dinero y pondrás productos en tu array mochila
const persona = {
	nombre: "Escribe aquí tu nombre",
	dinero: 50,
	mochila: []
};


function meteMochila(producto) {
	
	if (persona.mochila.length >= 5) {
		console.log( "Tienes la mochila llena" );
	} else {	
		persona.mochila.push(producto)
		
		console.log( `Has añadido ${producto} a tu mochila.` );
		console.log( `Tu mochila actualmente tiene: ${persona.mochila}` );
		
	};
};

function restaDinero(cantidad) {
	persona.dinero = persona.dinero - cantidad; // opción 1
	// persona.dinero -= cantidad; // opción 2
	
};

function compra(producto) {
	let nombre = tienda[producto].nombre;
	let precio = tienda[producto].precio;
	
	if (precio > persona.dinero) {
		console.log( `No tienes suficiente dinero para comprar ${nombre}` );
	} else {
		restaDinero(precio);
		meteMochila(nombre);
	};
	
};



compra("pan");
compra("agua");
compra("arroz");
compra("ferrari");
compra("pan");
compra("pan");
compra("pan");



// Agárrate a la silla porque este capítulo va a ser un poco largo, no difícil, largo.
// Hay varias cosas que tenemos que ver:

// while do
// do while
// for
// for of
// for in



// ***********************************************************
// While do
// ***********************************************************

// Empecemos por while do, que funciona así:


// >>> INICIO EJECUCIÓN >>>

let patatas = 0;

console.log( "Bucle empezado" );

while (patatas < 10) {
	patatas ++;
	console.log( patatas );
};

console.log( "Bucle terminado" );

// --- FIN EJECUCIÓN ---


// Digo que patatas vale 0
// Imprimo "Bucle empezado"

// --- Entro en el bucle ---
// Compruebo que patatas sea menor que 10
// Sumo 1 patata
// Imprimo las patatas
// --- Aquí entro en el bucle hasta dejar de cumplir la condición (patatas < 10) ---

// Salgo del loop
// Imprimo "Bucle terminado"


// ¿Y para qué vale esta movida? 
// Bueno, primero vamos a ver todos los bucles, luego veremos sus utilidades.



// ***********************************************************
// Do while
// ***********************************************************

// Este bucle es exactamente igual que while do, pero es do while.
// La diferencia es que while do primero hace el "while" (comprueba la condición) y luego el "do" (ejecuta el bucle).
// El do while, primero hace el "do" y luego el "while".


// >>> INICIO EJECUCIÓN >>>

let patatas = 0;

console.log( "Bucle empezado" );

do {
	patatas ++;
	console.log( patatas );	
} while (patatas < 10);

console.log( "Bucle terminado" );

// --- FIN EJECUCIÓN ---



// Y tu pensarás, joder, es lo mismo. Vamos a ejecutar 2 casos y veremos la diferencia perfectamente.


// >>> INICIO EJECUCIÓN >>>

let patatas = 10;

console.log( "Bucle empezado" );

while (patatas < 10) {
	patatas ++;
	console.log( patatas );
};

console.log( "Bucle terminado" );

// --- FIN EJECUCIÓN ---


// Hemos visto como el bucle empieza y termina, no vemos que se imprima el valor de patatas.


// >>> INICIO EJECUCIÓN >>>

let patatas = 10;

console.log( "Bucle empezado" );

do {
	patatas ++;
	console.log( patatas );	
} while (patatas < 10);

console.log( "Bucle terminado" );

// --- FIN EJECUCIÓN ---


// Hemos visto cómo el bucle empieza, imprime el valor de patatas, y termina.
// ¡Venga con ritmo!



// ***********************************************************
// For
// ***********************************************************

// Este funciona así:
// Declaramos la variable i con valor 1.
// La condición para que se siga ejecutando este bucle es que i sea menor que 10
// Después de cada "vuelta" al bucle, se hará i++


// >>> INICIO EJECUCIÓN >>>

for (let i = 1; i < 10; i++) {
	console.log( i );
};

// --- FIN EJECUCIÓN ---



// ¿Y para qué nos ha valido todo esto?
// Bueno, si tenemos un array como el de la lista de la compra.
// Podríamos enumerar nuestros ítems...


// Con el while:


// >>> INICIO EJECUCIÓN >>>

let listaCompra = ["patatas", "sal", "azúcar", "agua"];
let i = 0; // esto es el índice del array (0, 1, 2...)

while (i < listaCompra.length) {
	let item = listaCompra[i];
	console.log( `Ítem ${i}: ${item}` );
	i++;
};

// --- FIN EJECUCIÓN ---


// Lo que hemos hecho es:
// Partiendo de que listaCompra es un array
// Y de que la variable i vale 0

// Mientras la variable i sea menor que la cantidad de ítems que tiene listaCompra
// Imprimiremos 2 cosas:
// - El valor de la variable i
// - El elemento de listaCompra al que le corresponde el índice i (primero 0, luego 1, luego 2...)
// Y después hacemos i++


// Ahora lo vamos a ver con el for


// >>> INICIO EJECUCIÓN >>>

let listaCompra = ["patatas", "sal", "azúcar", "agua"];

for (let i = 0; i < listaCompra.length; i++) {
	let item = listaCompra[i];
	console.log( `Ítem ${i}: ${item}` );
};

// --- FIN EJECUCIÓN ---


// Lo que hemos hecho es:
// Partiendo de que listaCompra es un array

// Decimos que i vale 0
// La condición para que se siga repitiendo el bucle es que i sea menos que la cantidad de elementos de listaCompra
// Y que tras cada repetición hacemos i++

// E imprime lo mismo que antes.
// Es un poco engorroso, pero tenemos métodos mejores...



// ***********************************************************
// For of
// ***********************************************************

// For of itera sobre todos los elementos de un array, no tenemos que controlar si nuestra 
// variable i (aunque puede ser cualquiera) es menor que listaCompra.length


// >>> INICIO EJECUCIÓN >>>

let listaCompra = ["patatas", "sal", "azúcar", "agua"];

for (let item of listaCompra) {
	console.log( `Ítem ${i}: ${item}` );
};

// --- FIN EJECUCIÓN ---


// Lo que hemos hecho es:
// Partiendo de que listaCompra es un array

// Decimos que la variable item, va a contener cada uno de los elementos del array listaCompra
// uno por uno, primero valdría "patatas", luego valdría "sal"... y así hasta terminal el array.



// ***********************************************************
// For in
// ***********************************************************

// For in es lo mismo para para objetos:


// >>> INICIO EJECUCIÓN >>>

let listaCompra = {
	patatas: 2,
	sal: 3,
	azúcar: 1,
	agua: 5
};

for (const key in listaCompra) {
	let cantidad = listaCompra[key]; // con esto accedemos a cada propiedad del objeto
	console.log ( `Tenemos ${cantidad} ${key}` ); 
};

// --- FIN EJECUCIÓN ---


// Lo que hemos hecho es:
// Partiendo de que listaCompra es un objeto

// La variable key va a tener el valor de cada una de las keys del objeto listaCompra
// Entonces para acceder a la cantidad tendríamos que hacer listaCompra.patatas
// Pero como key tiene el valor de "patatas" hacemos listaCompra[key]
// es decir: listaCompra["patatas"]

// Luego key será "sal", luego "azúcar", y así hasta el final.



// ############################################################
// Ejercicio
// ############################################################

/*
	Vamos a crear un contador del 1 al 1000 (con un for o con un while)
	
	- Al empezar el bucle imprimirá "Bucle empezado".
	- Al terminal el bucle imprimirá "Bucle terminado".
	- Cada 50 números imprimirá el valor del contador actual.
	
*/


