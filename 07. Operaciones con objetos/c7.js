
// ############################################################
// Resolución ejercicio
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

const meteLista = function(producto) {
	
	// Pregunto si hay demasiados elementos
	if (listaDeLaCompra.length >= 5) {
		
		console.log( "Sólo pueden entrar 5 productos en la lista de la compra." );
		
	// Todo guay, sigo
	} else {
		
		// Meto el producto e informo
		listaDeLaCompra.push(producto);
		console.log( "Lista de la compra actual: ", listaDeLaCompra );
		
	};
	
};

const sacaLista = function(producto) {
	
	// Pregunto si hay 0 elementos
	if (listaDeLaCompra.length <= 0) {
		
		console.log( "No puedes eliminar elementos de la lista si está vacía." );
		
	// Todo guay, sigo
	} else {
		
		// Elimino el producto e informo
		listaDeLaCompra.pop();
		console.log( "Lista de la compra actual: ", listaDeLaCompra );
		
	};
	
};



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



// ***********************************************************
// Acceder a las propiedades de un objeto
// ***********************************************************

// Recordemos qué era un objeto
let persona = {
	nombre: "Pepe",
	raza: "Humano",
	edad: 25
};


// Para acceder a sus propiedades, tenemos que escribir objeto.key así:


// >>> INICIO EJECUCIÓN >>>

let persona = {
	nombre: "Pepe",
	raza: "Humano",
	edad: 25
};

console.log("Nombre: ", persona.nombre);
console.log("Raza: ", persona.raza);
console.log("Edad: ", persona.edad);

// --- FIN EJECUCIÓN ---


// También podemos acceder usando un string escribiendo objeto["key"] así:


// >>> INICIO EJECUCIÓN >>>

let persona = {
	nombre: "Pepe",
	raza: "Humano",
	edad: 25
};
let key2 = "raza";
let key3 = "edad";

console.log("Nombre: ", persona["nombre"]);
console.log("Raza: ", persona[key2]);
console.log("Edad: ", persona[key3]);

// --- FIN EJECUCIÓN ---


// Lo que puede ser útil para acceder dinámicamente a las propiedades de los objetos, por ejemplo:


// >>> INICIO EJECUCIÓN >>>

let producto = {
	precio1: 100,
	precio2: 50,
	precio3: 25
};

function dimePrecio(numeroPrecio) {
	let precio = producto[`precio${numeroPrecio}`];
	console.log(precio);
};

dimePrecio(1);
dimePrecio(2);
dimePrecio(3);

// --- FIN EJECUCIÓN ---


// Para cambiar una propiedad de "producto" es tan fácil como:
producto.precio1 = 200;


// Ahora precio1 será 200 en lugar de 100.
// Y para añadir una nueva, es lo mismo, si existe se cambia, si no existe, se crea:
producto.precio4 = 12;



// >>> INICIO EJECUCIÓN >>>

let producto = {
	precio1: 100,
	precio2: 50,
	precio3: 25
};
producto.precio1 = 200;
producto.precio4 = 12;

console.log( producto );

// --- FIN EJECUCIÓN ---



// ***********************************************************
// Obtener keys (claves) de un objeto
// ***********************************************************

// Obtendremos un array de todas las keys de un objeto


// >>> INICIO EJECUCIÓN >>>

let persona = {
	nombre: "Pepe",
	raza: "Humano",
	edad: 25
};

let arrayKeys = Object.keys(persona);
console.log( arrayKeys );

// --- FIN EJECUCIÓN ---


// Daría ["nombre", "raza", "edad"]



// ***********************************************************
// Obtener values (valores) de un objeto
// ***********************************************************

// Obtendremos un array de todas los values de un objeto


// >>> INICIO EJECUCIÓN >>>

let persona = {
	nombre: "Pepe",
	raza: "Humano",
	edad: 25
};

let arrayValues = Object.values(persona);
console.log( arrayValues );

// --- FIN EJECUCIÓN ---


// Daría ["Pepe", "Humano", "25"]



// ***********************************************************
// Obtener propiedades de un objeto
// ***********************************************************

// Obtendremos un array de todas las propiedades de un objeto


// >>> INICIO EJECUCIÓN >>>

let persona = {
	nombre: "Pepe",
	raza: "Humano",
	edad: 25
};

let arrayEntries = Object.entries(persona);
console.log( arrayEntries );

// --- FIN EJECUCIÓN ---


// Daría [ [ "nombre", "Pepe" ], [ "raza", "Humano" ], [ "edad", 25 ] ]



// ***********************************************************
// Comprobar si un objeto tiene una propiedad
// ***********************************************************

// Devolverá true o false


// >>> INICIO EJECUCIÓN >>>

let persona = {
	nombre: "Pepe",
	raza: "Humano",
	edad: 25
};

let tienePerro = persona.hasOwnProperty("perro");
let tieneNombre = persona.hasOwnProperty("nombre");
console.log( tienePerro );
console.log( tieneNombre );

// --- FIN EJECUCIÓN ---



// Daría false y true
// NO tiene la propiedad perro, pero sí que tiene la propiedad nombre.



// ***********************************************************
// Sumar dos objetos
// ***********************************************************

// Object.assign tomará dos argumentos:
// El primero es el objeto que recibirá las propiedades del objeto fuente
// El segundo es el objeto fuente, es el que dará sus propiedades


// >>> INICIO EJECUCIÓN >>>

let persona1 = {
	nombre: "Pepe",
	edad: 20
};

let persona2 = {
	nombre: "Juan",
	perro: "Nala",
	edad: 30
};

Object.assign(persona1, persona2);
console.log( persona1 );

// --- FIN EJECUCIÓN ---


// Vale, tenemos a dos personas:
// Pepe, de 20 años
// Juan, de 30 años con una perra que se llama Nala.

// Como hemos metido las propiedades de persona2 (Juan) a persona1 (Pepe)
// persona1 ha sido el objeto que recibe propiedades, así que ha pasado lo siguiente:

// Era Pepe, pero ahora es Juan
// Tenía 20 años, pero ahora tiene 30
// No tenía perro, pero ahora tiene una y se llama Nala



// ############################################################
// Ejercicio
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



// Puede que a primera vista no sepas hacerlo, pero en realidad ya has hecho anteriormente
// todas y cada una de las piezas pequeñas.
// Suerte y paciencia, recuerda desgranar el gran problema en problemas más pequeños
// ve por partes, es más fácil.

// Te ayudaré dándote una lista de tareas:
// - Función para meter objetos en la mochila
// - Función para restar dinero
// - Función para comprar en la tienda


