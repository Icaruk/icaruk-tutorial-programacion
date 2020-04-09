
// ############################################################
// Resolución ejercicio
// ############################################################

/*
	1. Crea una función que haga lo que más te apetezca. Pero que tenga 1 o más argumentos.
	2. Llama a la función.
	3. Acuérdate de la encuesta, por favor https://forms.gle/jqe1A9gA36q6qMFu9
*/


function resta (a = 0, b = 0, c = 0) {
	return a - b - c;
};

let resultado1 = resta(10, 5, 1);
let resultado2 = resta(10, 5);
let resultado3 = resta(10, undefined, 1);

console.log( resultado1, resultado2, resultado3);


// ¿Qué he hecho en los argumentos?
// ¿a = 0? ¿b = 0? ¿c = 0? ¿Qué es esoooo?

// Son argumentos por defecto, en caso de que no se rellenen
// O sean undefined, se establecerán con ese valor por defecto.

// De forma que, en el ejemplo de arriba con resultado3
// a = 10, b = undefined, c = 1
// como b es undefined, coge su valor por defecto: 0
// entonces:
// a = 10, b = 0, c = 1

// ¡Y ya hemos aprendido algo nuevo!
// Ahora vamos aprender a hacer cosas con strings.


// >>> INICIO EJECUCIÓN >>>

console.log( "Ho" + "la" );

// --- FIN EJECUCIÓN ---



// ***********************************************************
// Sumar strings
// ***********************************************************

// Podemos sumar strings igual que hacemos con los números.
// Es decir:

let texto1 = "Ho";
let texto2 = "la";
let saludo = texto1 + texto2; // esto da "Hola"

// Ahora tú:


// >>> INICIO EJECUCIÓN >>>

const saludo = function(nombre) {
	let texto = "¡Hola " + nombre + "!";
	console.log( texto );
};

saludo("Pepe");
saludo("Antonio");

// --- FIN EJECUCIÓN ---


// ***********************************************************
// Longitud de un string
// ***********************************************************

"hola".length; 			// 4
"hola ".length; 		// 5
"hola que tal".length; 	// 12


// >>> INICIO EJECUCIÓN >>>

let string = "hola que tal soy una frase larga.";
console.log( "La variable tiene " + string.length + " caracteres." );

// --- FIN EJECUCIÓN ---



// ***********************************************************
// Interpolación
// ***********************************************************

// La alternativa a lo que acabamos de hacer arriba es la siguiente:


// >>> INICIO EJECUCIÓN >>>

let string = "hola que tal soy una frase larga.";
console.log( `La variable tiene ${string.length} caracteres.`);

// --- FIN EJECUCIÓN ---


// Lo que esté ${aquí dentro} se ejecutará y devolverá su resultado
// Pero tenemos que usar `` para crear el string en lugar de "" o ''

// Más ejemplos:

// >>> INICIO EJECUCIÓN >>>

let nombre = "Pepe";
console.log( `1+1 es ${1+1} y mi nombre es ${nombre}` );

// --- FIN EJECUCIÓN ---



// ***********************************************************
// Recortar un string
// ***********************************************************

// El primer argumento indica desde dónde va a empezar el recorte
// El segundo argumento indica dónde terminará el recorte

"hola".slice(0, 1); // "h"
"hola".slice(0, 2); // "ho"
"hola".slice(0, 3); // "hol"
"hola".slice(0, 4); // "hola"
"hola".slice(1, 2); // "o"
"hola".slice(1, 3); // "ol"



// ***********************************************************
// Separar un string
// ***********************************************************

// split lo que hará es separar un string según unas reglas que tú le marques
// por lo tanto pasará de string a array
// vamos a ver varios ejemplos


// >>> INICIO EJECUCIÓN >>>

let a = "hola.que.tal".split(".");
let b = "15/05/1853".split("/");
let c = "hola que tal".split("");

console.log(a);
console.log(b);
console.log(c);

// --- FIN EJECUCIÓN ---


// En el ejemplo "a", aplicará una separación cada vez que encuentre un punto
// En el ejemplo "b", la aplicará cada vez que encuentre una barra
// En el ejemplo "c", la aplicará siempre, todos los caracteres estarán separados



// ############################################################
// Ejercicio
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