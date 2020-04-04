
// Hola, esto que estás leyendo es un comentario de una línea. Y cuando se ejecuta el código se ignora.

/*
	Y todo esto
	también
	es un 
	comentario
	pero es
	multilínea
*/

// Los comentarios para comentar. Y hasta aquí el tutorial, gracias y un saludo.
// *aplausos*

// Los comentarios aparecen de otro color para hacerte ver que es código que se va a ignorar.



// ############################################################
// Cómo declarar una variable
// ############################################################

var dinero = 100;

// Ponemos "var" para declarar una variable, seguido del nombre que tendrá la variable.
// Después ponemos el signo "=" para darle un valor.
// En este caso hemos declarado la variable "dinero" y le hemos asignado un valor de 100.

// El nombre de una variable tiene que contener letras y números, pero no puede contener la letra ñ ni tildes, así que verás "dia mes ano".
// Además no puede comenzar con números.

123variable = 100; // MAL y saldrá subrayado en rojo, pon el ratón encima del error y te dirá más información.
variable123 = 100; // bien
_variable = 100; // bien
_123 = 100; // bien
año = 100; // no dice que está mal, pero se recomienda 1000% NO usar la Ñ
camión = 100; // lo mismo que arriba



// Imagínate que "declarar la variable" es poner una caja en tu mesa.
// Y que el nombre de la variable, es una etiqueta que le pegas a la caja, para indicar su contenido.
// El valor que se le asigna con el signo "=" es lo que metes dentro de la caja.

// Más tarde veremos más tipos de variables.

// Lo malo de esto es que no acabas de ganar 100€, pero sigamos igualmente.



// ############################################################
// Tipos de variables
// ############################################################

// No vamos a profundizar en todos los tipos, pero sí que los vamos a ver para poder reconocerlos.

/* 
	BOOL
	
	Se usa para contener true o false, es decir sí o no.
*/

var vivo = true;
var muerto = false;
var aprendiendo = true;



/* 
	NUMBER
	
	Se usa para contener números con y sin decimales.
*/

var dinero = 100;
var edad = 25;
var precio = 39.99;



/* 
	STRING
	
	Está rodeado de comillas.
	Se usa para contener texto.
	
	Las comillas que usa son las siguientes:
	
	"hola"
	'hola'
	`hola`
	
*/

var letra = "a";
var saludo = "Hola";
var nombre = "Pepito";
var nombreCompleto = "Pepito Gómez";
var edadPepito = "33"; // Esto NO es un número, porque está rodeado de comillas.
var pepitoEstudiando = "true"; // Esto NO es un bool, porque está rodeado de comillas.



/* 
	ARRAY
	
	Está rodeado de corchetes [].
	Se usa para contener una lista de datos separados por una coma
	Los datos pueden ser de cualquier tipo, un array puede incluso contener más arrays.
	
*/

var arrayVacio = [];
var listaDeNumeros = [2, 4, 6, 8, 10];
var listaDeLaCompra = ["Patatas", "Huevos", "Tomates", "Agua", "Leche"];
var listaDePrecios = [12, 19.99, 1.99, 5, 46.95];
var listaDeBools = [true, false, false, true];
var alumnosVacios = [[], []];
var alumnos = [["Pepe", "Pablo", "Pedro"], ["Felipe", "Antonio", "Manolo"]]; // madre mía qué lío, abajo vamos a ver cómo hacerlo más legible sin cambiar el contenido

var alumnosBien = [
	["Pepe", "Pablo", "Pedro"],
	["Felipe", "Antonio", "Manolo"]
];

// El primer grupo de alumnos está desplazado a la derecha usando la tecla TAB (tabulación). 
// De esta forma los datos son más legibles, más tarde veremos porqué esto es una buena práctica.
// Se podría incluso ordenar de una forma más clara, pero ocupando más espacio:

var alumnosBienBien = [
	[
		"Pepe",
		"Pablo",
		"Pedro"
	],
	[
		"Felipe",
		"Antonio",
		"Manolo"
	]
];

// Ya sabemos que la variable alumnos, alumnosBien y alumnosBienBien son lo mismo, pero con una disposición diferente.



/* 
	OBJECT
	
	Los objetos están rodeados con llaves {}.
	Se usa para contener una lista propiedades que describen el objeto.
	Las propiedades son parejas de key-value (clave-valor) separadas por comas.
	
	La key y el value están separados por dos puntos.
		nombre: "Pepe"
	La key sigue las mismas normas que los nombres de variable.
	El value puede ser cualquier tipo de dato.
	
*/

var persona = {nombre: "Pepe", edad: 30}; // de normal se ordenan, como hemos hecho antes con los arrays

var personaOrdenada = {
	nombre: "Pepe",
	edad: 30,
	habilidades: ["comer", "dormir", "respirar"],
	vivo: true,
	enfermo: false
};



// Seguro que has visto el punto y coma y estás pensado qué coño es eso y porqué siempre lo veo al final.
// Bueno, sirve para separar una "orden" de otra. Por ejemplo:

var numero1 = 10 var numero2 = 20; // esto estará mal
var numero1 = 10; var numero2 = 20; // y esto estará bien

// Lo que pasa es que siempre le damos un intro para que se lea mejor
var numero1 = 10;
var numero2 = 20;



// ############################################################
// Ejercicio
// ############################################################

/*
	Crea variables que contengan los siguientes datos:
	
	1. Tu nombre
	2. Año en el que naciste
	3. Tu edad
	4. El nombre de tu perro, si no tienes perro puedes usar el de un amigo. Si tu amigo no tiene perro usa el nombre de tu amigo.
	5. Una lista con lo próximo que vas a comprar en el supermercado.
	6. Un objeto que contenga propiedades del perro/amigo del punto 4.

*/

// Voy a ayudarte un poco...

var miNombre = "Adrián";
var anoNacimiento = 1990; // sí, pone ano

// ... y ahora sigues tú :D
