
// ############################################################
// Ejercicio
// ############################################################

/*
	Vamos a crear un contador del 1 al 1000 (con un for o con un while)
	
	- Al empezar el bucle imprimirá "Bucle empezado".
	- Al terminal el bucle imprimirá "Bucle terminado".
	- Cada 50 números imprimirá el valor del contador actual.
	
*/



// Método while
let i = 1;
console.log( "Bucle empezado" );

while (i <= 1000) {
	
	if (i % 50 === 0) { // si i es múltiplo de 50, dará 0, si da otra cosa es que no es múltiplo
		console.log( i );
	};
	
	i++;
};

console.log( "Bucle terminado" );



// Método for
console.log( "Bucle empezado" );

for (let i = 1; i <= 1000; i ++) {
	
	if (i % 50 === 0) { // si i es múltiplo de 50, dará 0, si da otra cosa es que no es múltiplo
		console.log( i );
	};
	
};

console.log( "Bucle terminado" );






// ***********************************************************
// Return
// ***********************************************************

// Las funciones se quedan un poco sosas sin un return.
// El return sirve para "retornar" un valor al final de su ejecución, por ejemplo:

function suma(a, b) {
	return a + b;
};

suma(3, 2);


// Sabemos que 3 + 2 = 5, pero como no hemos puesto console.log(a + b) no veríamos el valor.
// El truco es este:



// >>> INICIO EJECUCIÓN >>>

	function suma(a, b) {
		return a + b;
	};

	let resultado = suma(3, 2);
	console.log("El resultado es: ", resultado);

// --- FIN EJECUCIÓN ---



// Ahora con esto en lugar de imprimir en pantalla podemos tener el valor final en una variable
// y así poder hacer más cosas:



// >>> INICIO EJECUCIÓN >>>

	function suma(a, b) {
		return a + b;
	};

	let resultado = suma(3, 2); // aquí hacemos 3 + 2 = 5
	resultado = suma(resultado, 10); // aquí hacemos 5 + 10 = 15

	console.log("El resultado es: ", resultado);

// --- FIN EJECUCIÓN ---



// Este ejemplo igual es demasiado sencillo, pero se empieza desde abajo
// más tarde haremos cosas más complejas.

// También hay que añadir que return detiene la ejecución en el momento en el que aparece
// Es decir:


// >>> INICIO EJECUCIÓN >>>

	console.log("1");
	return;
	console.log("2");
	console.log("3");

// --- FIN EJECUCIÓN ---


// Ahí sólo verás el mensaje de 1, el resto no se ejecutarán, de hecho Visual Studio Code te avisará de que hay
// "código inaccesible" y quiere decir que nunca se ejecutará ese código.
// Este ejemplo es absurdo, te pongo uno real:


// >>> INICIO EJECUCIÓN >>>

	function saludo(nombre) {
		if (nombre == "Pepe") {
			console.log("No quiero saludar a Pepe");
			return;
		};
		
		console.log("Hola", nombre);
		
	};

	saludo("Pepe");
	saludo("Antonio");

// --- FIN EJECUCIÓN ---



// Esto puede servir por ejemplo para "blindar" tus funciones ante errores
// Por ejemplo:


// >>> INICIO EJECUCIÓN >>>

	function nombreApellido(nombre, apellido) {
		console.log( nombre + " " + apellido + ".");
	};

	nombreApellido("Juan");

// --- FIN EJECUCIÓN ---


// ¿Quién es Juan undefined?
// Podríamos hacer darle un valor por defecto a apellido para que


// >>> INICIO EJECUCIÓN >>>

	function nombreApellido(nombre, apellido = "") {
		console.log( nombre + " " + apellido + ".");
	};
	
	nombreApellido("Juan");
	
// --- FIN EJECUCIÓN ---


// Pero claro se nos queda Juan . y queda bastante feo
// Ahora vamos a hacer que avise si no hay apellido


// >>> INICIO EJECUCIÓN >>>

	function nombreApellido(nombre, apellido = "") {
		
		if (apellido === "") {
			console.log("Esto no funciona sin apellido");
			return 
		};
		
		console.log( nombre + " " + apellido + ".");
	};

	nombreApellido("Juan");
	nombreApellido("Juan", "Gómez");

// --- FIN EJECUCIÓN ---


// Ahora la primera vez avisará de que no hay apellido, y la segunda todo guay.



// ***********************************************************
// Callback
// ***********************************************************

// Un callback es una "llamada de vuelta".
// Es decir, si a una función le pasas como argumento otra función, es un callback.
// Por ejemplo:



// >>> INICIO EJECUCIÓN >>>


	// Esta función sólo saluda
	function saludo(texto) {
		console.log("¡Hola,", texto, "!")
	};


	// Esta función junta un nombre con su apellido y luego saluda
	function nombreCompleto(nombre, apellido, callback) {
		let texto = nombre + " " + apellido; // Si me viene "Pepe" y "Gómez" yo hago "Pepe Gómez"
		callback(texto); // aquí ejecuto la función callback
	};


	// Así lo hago funcionar
	nombreCompleto("Pepe", "Gómez", saludo);

// --- FIN EJECUCIÓN ---



// ¿Y qué sentido tiene esto? ¿Porqué no hago el saludo dentro de nombreCompleto?
// Porque a veces, vas a tener que usar una función genérica cuando una acción se complete, por ejemplo...

// Supongamos que tenemos una función que busca una película en Netflix.
// La búsqueda tarda unos 2 o 3 segundos, y al final de la búsqueda tienes que lanzar un mensaje al usuario
// que le diga si se han encontrado resultados, entonces...

function busquedaFinalizada(resultados) {
	console.log("La búsqueda ha finalizado con", resultados.length, "resultados");
};


// Llamamos a la función (que no existe, pero supongamos que sí)
buscaPelicula("titanic", busquedaFinalizada);


// buscaPelicula internamente está hecha para ejecutar un callback al final de la búsqueda
// y tomará por argumento un array con todas las películas que coincidan con la búsqueda
// ¿Porqué? Porque yo me habría leído la documentación y me habrían dicho que funciona así
// Si la función no la he hecho yo, alguien te tiene que decir cómo funciona.


// Entonces yo podría anunciar cuántos resultados se han encontrado
// o incluso si los resultados son 0, mostrar películas alternativas
// o no haces nada, simplemente no mandando un callback.

// Más tarde se entenderá mejor con ejemplos reales
// Porque esto es como explicar el universo usando globos de colores xD
// Lo importante es el concepto, que al menos te suene que un callback es una función que le das a otra función.



// ############################################################
// Ejercicio
// ############################################################

/*
	Vamos a crear una función que haga algo, lo que quieras, y que acepte un callback que yo te voy a dar.
	Puedes usar cualquiera de las operaciones que hemos visto en los capítulos 5, 6 y 7.
	
	El callback admitirá 2 argumentos:
		0 (STRING) - Mensaje a mostrar.
		1 (BOOL) - Si hay error se mostrará un mensaje de error.
	
*/


// Esta es a función callback que tienes que usar.
function informeFinal(mensaje = "", hayError = false) {
	
	if (hayError) { // si hay error mostramos mensaje de error genérico
		console.log("¡Ha ocurrido un error!", mensaje);
		return; // detenemos la ejecución de la función aquí
	};
	
	console.log("Todo correcto: ", mensaje);
	
};


// Yo voy a hacer una función que parte un array por la mitad:
function parteArray(array, callback) {
	
	// Primero compruebo posibles errores
	if (array.length % 2 !== 0) { // si no es par
		callback("No puedes partir un array con un número de elementos impar", true);
		return []; // devuelvo un array vacío
	};
	
	
	// Obtengo el centro
	let mitad = array.length / 2;
	
	let mitad1 = array.slice(0, mitad); // corto desde el elemento 0 hasta la mitad
	let mitad2 = array.slice(mitad, array.length); // corto desde la mitad + 1 hasta el final
	
	
	// Devuelvo un array con las 2 mitades
	return [mitad1, mitad2];
	
};



// Esta primera ejecución daría...
let mitades1 = parteArray(["a", "b", "c"], informeFinal); // Valdría: []
console.log(mitades1); // ¡Ha ocurrido un error! No puedes partir un array con un número de elementos impar



// Esta segunda ejecución daría...
let mitades2 = parteArray(["a", "b", "c", "d"], informeFinal); // Valdría: [ [ 'a', 'b' ], [ 'c', 'd' ] ]
console.log(mitades2); // [ [ 'a', 'b' ], [ 'c', 'd' ] ]



// Va, ahora tú.
// La dificultad te la pones tú mismo, pero intenta que no sea algo demasiado fácil xD
