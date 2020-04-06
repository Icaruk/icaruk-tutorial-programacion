
// Me gustaría que al terminar este capítulo te tomaras un par de minutos en hacer 
// una pequeña encuesta, será de mucha utilidad a la hora de elaborar los siguientes tutoriales,
// o para modificar cosas de los anteriores.



// Las funciones tienen este aspecto


// >>> INICIO EJECUCIÓN >>>

function saludo() {
	console.log("Hola 1");
};

saludo();

// --- FIN EJECUCIÓN ---


// A eso se le llama "named function" o "función con nombre".

// Se escribe "function" seguido del nombre que le vas a dar a la función.
// Y luego se ponen los argumentos entre () pero ahora no tenemos ningún argumento.

// Una función se usa para meter código en una "cajita" y poder llamarlo más tarde.
// Si queremos saludar 2 veces, llamaremos a la función "saludo" dos veces, en lugar de 
// escribir su contenido dos veces.

// saludo sería la función en sí.
// saludo() sería la forma de llamar a la función.

// Otra forma de declarar funciones es guardándolas en una variable:


// >>> INICIO EJECUCIÓN >>>

const saludo = function() {
	console.log("Hola 2");
};

saludo();

// --- FIN EJECUCIÓN ---


// A eso se le llama "anonymous function" o "función anónima".
// Porque la función no tiene nombre, pero la guardamos en una variable con nombre.
// Usamos const porque la función no va a cambiar.


// Usemos los argumentos:


// >>> INICIO EJECUCIÓN >>>

function saludo (nombre) {
	console.log( "Hola ", nombre );
};

saludo("Pepe");

// --- FIN EJECUCIÓN ---


// Ahora tenemos un argumento: "nombre".
// Al hacer saludo("Pepe")
// Estamos dando "Pepe" como argumento.

// Entonces la movida es la siguiente:

// 1. Declaro la función saludo
function saludo() {
	
};

// 2. Hago que admita un argumento llamado "nombre".
function saludo (nombre) {
	
};

// 3. Hago que imprima en pantalla "Hola" + el valor de la variable "nombre".
function saludo (nombre) {
	console.log( "Hola ", nombre );
};

// 4. Llamo a la función pasando "Juan" como argumento
saludo("Juan");


// Digamos que en el momento en el que lanzamos la función con argumentos, es como si hiciésemos
let nombre = "Juan";

// Y a partir de ese momento, mientras estemos dentro de la función, la variable "nombre" tendrá ese valor.
// Vamos a practicar dando más de 1 argumento:


// >>> INICIO EJECUCIÓN >>>

function suma (a, b) {
	let resultado = a + b;
	console.log("El resultado es: ", resultado);
};

suma(1, 2);
suma(2, 2);
suma(3, 5);

// --- FIN EJECUCIÓN ---


// Podemos hacer lo que queramos dentro de una función.
// Más ejemplos:


// >>> INICIO EJECUCIÓN >>>

const gritar = function (mensaje) {
	console.log( "¡¡¡ ", mensaje, "!!!" );
};

const suma = function (a, b) {
	gritar(a + b);
};

suma(1, 2);
suma(3, 4);

// --- FIN EJECUCIÓN ---



// ############################################################
// Ejercicio
// ############################################################

/*
	1. Crea una función que haga lo que más te apetezca. Pero que tenga 1 o más argumentos.
	2. Llama a la función.
	3. Acuérdate de la encuesta, por favor https://forms.gle/jqe1A9gA36q6qMFu9
*/
