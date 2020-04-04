// (En proceso)

// ############################################################
// Resolución ejercicio
// ############################################################

/*
	Vamos a crear 3 variables (y tú les vas a poner nombre):
	
	1. El dinero que tienes.
	2. El dinero que te acabas de encontrar.
	3. El dinero que acabas de perder por ir corriendo a por el dinero que te acabas de encontrar.
	4. El precio de la entrada a... lo que quieras.
	
	Vamos a calcular el dinero que se nos quedaría y vamos a comprobar si podemos comprar la entrada.
	En el caso de que podamos comprarla el mensaje va a ser: "Has podido comprar la entrada, ¡bien!".
	En el caso de que NO podamos comprarla: "Vaya, no tienes suficiente dinero...".
	
	La cosa es que tienes que cuadrar los números para que consigas comprar la entrada.

*/

// ***********************************************************
// Posible solución 1
// ***********************************************************

var dinero = 10;
var dineroGanado = 2;
var dineroPerdido = 1;
var precio = 5;

if ((dinero + dineroGanado - dineroPerdido) >= precio) {
	console.log( "Has podido comprar la entrada, ¡bien!" );
} else {
	console.log( "Vaya, no tienes suficiente dinero..." );
};



// ***********************************************************
// Posible solución 2
// ***********************************************************

var dinero = 10;
var dineroGanado = 2;
var dineroPerdido = 1;
var precio = 5;

var dineroFinal = dinero + dineroGanado - dineroPerdido;

if (dineroFinal >= precio) {
	console.log( "Has podido comprar la entrada, ¡bien!" );
} else {
	console.log( "Vaya, no tienes suficiente dinero..." );
};



// ***********************************************************
// Posible solución 3
// ***********************************************************

var dinero = 10;
var dineroGanado = 2;
var dineroPerdido = 1;
var precio = 5;

var dineroFinal = dinero + dineroGanado - dineroPerdido;
var puedoEntrar = dineroFinal >= precio;

if (puedoEntrar) {
	console.log( "Has podido comprar la entrada, ¡bien!" );
} else {
	console.log( "Vaya, no tienes suficiente dinero..." );
};



// Si te fijas, cada vez he ido simplificando más y más las operaciones hasta que al final
// es simplemente leer algo tan fácil como "if puedo entrar"...



// ############################################################
// Tipos de variables
// ############################################################


// Sólo hemos visto cómo declarar una variable, es decir:

var variable = "valor";

// Pero para reasignar un valor a una variable no podemos volver a re-declararla, daría error, aunque seguramente con Code Runner no salga.
// El error saldría de esta forma:

var variable = "uno";
var variable = "dos";

// Así que la forma correcta sería la siguiente:

var variable = "uno";
variable = "dos";


// Una vez aprendido esto, prosigamos.
// Hasta hora hemos visto "var", pero tenemos "let" y "const".
// A partir de este momento no vamos a volver a usar "var" casi casi casi nunca, luego veremos porqué.


// >>> INICIO EJECUCIÓN >>>

let saludo = "hola";
console.log(saludo);

// --- FIN EJECUCIÓN ---


// Podemos comprobar que funciona exactamente igual. Luego veremos su diferencia respecto a "let".


// >>> INICIO EJECUCIÓN >>>

const PI = 3.14; 
console.log( PI ); 

// --- FIN EJECUCIÓN ---


// Las constantes se suelen poner en mayúsculas para indicar que son constantes
// pero no dejan de funcionar si no lo haces.

// Por el momento todo es exactamente igual, bueno... una constante... no es variable.


// >>> INICIO EJECUCIÓN >>>

const PI = 3.14;
PI = 100;
console.log( PI );

// --- FIN EJECUCIÓN ---


// TypeError: Assignment to constant variable.
// No puedes reasignar el valor de una constante, porque es... constante XD.
// ¿Para qué se usa esto? Pues para valores que sabes que no van a cambiar nunca, es (en teoría) un poco más óptimo a nivel de ram.
// Además te aseguras de que nadie cambie por error el valor de una constante.


// Luego hay una movida llamada "scope", que es algo complicada de entender.
// Vayamos poco a poco...


// >>> INICIO EJECUCIÓN >>>

let dinero = 10;

if (true) { // pondremos algo sencillo porque ahora la condición no es importante
	console.log( dinero ); // imprimimos en pantalla la variable dinero
};

// --- FIN EJECUCIÓN ---



// He hecho un esquema:
// https://i.gyazo.com/3a7b1df7f712dd7ed4ad2e452789ae2b.png

// Podemos ver que hay como 2 profundidades... pues eso es el scope (traducido: alcance).
// ¿Porqué hacemos...

if (true) {
	console.log( "asdf" );
};

// ... y no esto?

if (true) {
console.log( "asdf" );
};


// Porque con las tabulaciones (pulsando la tecla TAB) identamos el código mostrando así las diferentes profundidades (scope).
// Voy a poner un ejemplo y lo veréis bien.

if (true) {
	if (true) {
		if (true) {
			if (true) {
				console.log("hola");
			};
		};
	};
};

// Si no tabuláramos se vería este monstruo:

if (true) {
if (true) {
if (true) {
if (true) {
console.log("hola");
};
};
};
};

// Completamente ilegible, y no sabrías en qué scope estás.
// ¿Pero me quieres contar ya qué es el scope? Voooooooooy, primero tenía que preparar el terreno.


// Vamos a hacer una cosa con var:


// >>> INICIO EJECUCIÓN >>>

var superficie = "superficie"; // creo esta variable en profundidad 0

if (true) {
	var cueva = "cueva"; // creo esta variable en profundidad 1
};

console.log(superficie);
console.log(cueva);

// --- FIN EJECUCIÓN ---


// Podremos ver que tanto superficie como cueva se imprimen en pantalla.
// Pero ahora vamos a hacer lo mismo pero cambiando var por let.


// >>> INICIO EJECUCIÓN >>>

let superficie = "superficie"; // creo esta variable en profundidad 0

if (true) {
	let cueva = "cueva"; // creo esta variable en profundidad 1
};

console.log(superficie);
console.log(cueva);

// --- FIN EJECUCIÓN ---


// ReferenceError: cueva is not defined
// cueva se define con let en una profundidad 1, así que en las profundidades anteriores existe, pero sí en las siguientes.
// Ahora vamos a ver otro ejemplo un poco más complejo...


// >>> INICIO EJECUCIÓN >>>

// Estamos en profundidad 0
var p0 = "p0"; // con "var", la variable "baja" hacia las profundidades, pero también puede subir

if (true) {
	
	// Estamos en profundidad 1
	
	var p1 = "p1"; // Declaro una variable en la profundidad 1
	
	// Aquí existe p1 (se acaba de declarar)
	// Aquí existe p0 (se declaró en la profundidad 0 y ha bajado hasta la 1)
	
	
	if (true) {
		
		// Estamos en profundidad 2
		
		var p2 = "p2"; // Declaro una variable en la profundidad 2
		
		// Aquí existe p2 (se acaba de declarar)
		// Aquí existe p1 (se declaró en la profundidad 1 y ha bajado hasta la 2)
		// Aquí existe p0 (se declaró en la profundidad 0 y ha bajado hasta la 2)
		
	};
	
}


// Hemos vuelto a la profundidad 0

// Aquí existe p0 (se ha declarado en esta profundidad, al principio)
// Aquí existe p1 (se declaró en la profundidad 1 y ha subido hasta la 0)
// Aquí existe p2 (se declaró en la profundidad 2 y ha subido hasta la 0)


// --- FIN EJECUCIÓN ---


// Ahora vamos a ejecutar el mismo código con un pequeño cambio...
// En lugar de var usaremos let.


// >>> INICIO EJECUCIÓN >>>

// Estamos en profundidad 0
let p0 = "p0"; // con "let", la variable "baja" hacia las profundidades, pero NO puede subir

if (true) {
	
	// Estamos en profundidad 1
	
	let p1 = "p1"; // Declaro una variable en la profundidad 1
	
	// Aquí existe p1 (se acaba de declarar)
	// Aquí existe p0 (se declaró en la profundidad 0 y ha bajado hasta la 1)
	
	
	if (true) {
		
		// Estamos en profundidad 2
		
		let p2 = "p2"; // Declaro una variable en la profundidad 2
		
		// Aquí existe p2 (se acaba de declarar)
		// Aquí existe p1 (se declaró en la profundidad 1 y ha bajado hasta la 2)
		// Aquí existe p0 (se declaró en la profundidad 0 y ha bajado hasta la 2)
		
	};
	
}


// Hemos vuelto a la profundidad 0

// Aquí existe p0 (se ha declarado en esta profundidad, al principio)
// Aquí NO existe p1 (se declaró en la profundidad 1, pero no puede subir)
// Aquí NO existe p2 (se declaró en la profundidad 2, pero no puede subir)


// --- FIN EJECUCIÓN ---


// Pues esto es el concepto del scope, alcance, ámbito o como le queramos llamar.
// Cuando veamos las funciones explicaré cómo funciona el scope por allí.

// El resumen es que "var" alcanza todos los scopes (sube y baja en profundidad).
// Y "let" sólo se "extiende" hacia los que tiene en los niveles de scope inferior (baja).


// Esta vez no hay ejercicio, esto ha sido denso y algo aburrido, pero necesario.
// En el próximo capítulo haremos cosas divertidas ¡lo prometo!

