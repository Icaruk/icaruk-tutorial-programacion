
// ############################################################
// Resolución ejercicio
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

var miNombre = "Adrián";
var anoNacimiento = 1990;
var edad = 29;
var nombreDeMiPerro = "Nala";
var listaDeLaCompra = ["Agua", "cebolla", "leche", "zumos"];
var miPerro = {
	nombre: "Nala",
	color: "Marrón",
	peso: 19,
	ojos: 2,
	patas: 4
};



// No tienes que tener exactamente esto, pero el concepto es que no pongas nombre como NUMBER ni edad como STRING, por ejemplo.
// También estaría bien que a la variable que contiene tu nombre, no la llames "edad", "silla", "mesa" ni "coche".
// Lo ideal sería que contuviese "nombre" para identificar su valor más fácilmente y minimizar las confusiones.


// Ahora vamos a ver operadores lógicos, es decir cosas que se "resuelven" en true o false...
// La forma de trabajar va a ser la siguiente: cada vez que ponga esto...

// --- INICIO EJECUCIÓN ---

console.log("Esto sale");
console.log("Esto también");

// --- FIN EJECUCIÓN ---

console.log("¡¡¡ Pero esto NO debería salir !!!");



// Tendrás que seleccionar desde el inicio hasta el fin marcado
// y ejecutar con el botón del play arriba a la izquierda.
// Vídeo explicativo: https://i.gyazo.com/e5bb0c3c4f8406a0fcf6392b2393525c.mp4


// Por fin vamos a explicar qué hace el dichoso "console.log".
// Básicamente imprime en pantalla lo que le pongas entre paréntesis.
// Si le pones un STRING lo muestra, si le ponges una variable te dice su valor
// Si le pones alguna expresión como 1+1 te devolverá el resultado.

// Una vez aprendido esto vamos a hacer lo siguiente:


// >>> INICIO EJECUCIÓN >>>

var resultado = 1 + 1;
console.log(resultado);

// --- FIN EJECUCIÓN ---


// Nos debería de imprimir 2.
// Bien.
// Ya sabemos sumar.


// >>> INICIO EJECUCIÓN >>>

var estado = "vivo";
var estoyVivo = true;
console.log(estado);
console.log(estoyVivo);
console.log(1 + 1);

// --- FIN EJECUCIÓN ---


// Podríamos juntar los 3 console.log en uno solo...


// >>> INICIO EJECUCIÓN >>>

var estado = "vivo";
var estoyVivo = true;
console.log(estado, estoyVivo, 1 + 1);

// --- FIN EJECUCIÓN ---


// Basta ya de pruebas, sigamos.
// Vamos a ver qué tipos de operadores hay.


var esMayor = 3 > 1; // ¿3 es mayor que 1?
var esMenor = 3 < 1; // ¿3 es menor que 1?
var esIgual = 3 == 1; // ¿3 es igual que 1?

// esMayor sería true
// esMenor sería false
// y esIgual sería false
// ¿Quieres probarlo?


// >>> INICIO EJECUCIÓN >>>

var esMayor = 3 > 1;
var esMenor = 3 < 1;
var esIgual = 3 == 1;
console.log( esMayor, esMenor, esIgual );

// --- FIN EJECUCIÓN ---


// Debería dar: true false false
// Sigamos...

3 >= 3; // ¿3 es mayor o igual que 3? true
3 > 3; // ¿3 es mayor que 3? false

// Y lo mismo con < y <=


// A parte del == existe el ===
// Veamos la diferencia:

1 == 1; 	// true
1 == "1"; 	// true también, "1" se convierte automáticamente a 1

1 === 1; 	// true
1 === "1"; 	// false, porque al no hacerse conversión automática, no son del mismo tipo, por lo tanto no son iguales



// Lo mismo ocurre con el resto de tipos de datos. Pero no voy a ir uno a uno, iremos viendo sobre la marcha.
// Bueno ahora que sabemos cómo comparar cosas, vamos a darle una utilidad... el if.

// Básicamente se escribe if (condicion) {ejecutasCosasAquiDentro};
// Si se cumple la condición (es decir, si se resuelve en true), se ejecutará lo de dentro.


// >>> INICIO EJECUCIÓN >>>

var salud = 100;

if (salud >= 100) {
	console.log("Estás en perfectas condiciones.");
};

// --- FIN EJECUCIÓN ---


// Dentro de los paréntesis se tiene que poner algo que se resuelva en true o false.
// Veamos otro ejemplo:


// >>> INICIO EJECUCIÓN >>>

var salud = 99;

if (salud >= 100) {
	console.log("Tienes 100 o más de salud. Estás en perfectas condiciones.");
};
if (salud < 100) {
	console.log("Tienes menos de 100 de salud. Podrías estar herido.");
};

// --- FIN EJECUCIÓN ---


// El primer if no se resuelve en true (se resuelve en false), por lo tanto lo que esté entre las llaves {} no se ejecutará.
// El segundo if sí que se resuelve en true, por lo tanto se ejecuta lo de las llaves.
// También podríamos poner directamente...


// >>> INICIO EJECUCIÓN >>>

if (true) {
	console.log( "Esto saldrá" );
};
if (false) {
	console.log( "Esto no" );
};

// --- FIN EJECUCIÓN ---


// De hecho, nuestro IDE nos indicará que lo de dentro del segundo if es "código inaccesible",
// porque al estar la condición en false, nunca se ejecutará.
// Vamos a hacer algo útil, y al mismo tiempo aprenderemos qué es el "if else".


// >>> INICIO EJECUCIÓN >>>

var num1 = 2;
var num2 = 3;
var limite = 5;

if ((num1 + num2) <= limite) {
	console.log( "El resultado está por debajo del límite." );
} else {
	console.log( "¡El resultado ha sobrepasado el límite!" );
};

// --- FIN EJECUCIÓN ---


// Primero se resuelve (num1 + num2)
// Que el resultado sería 5 y nos quedaría...
// if (5 <= limite) ...

// Si límite es 5, nos quedaría...
// if (5 <= 5) ...

// ¿5 es menor o igual que 5? Sí, es decir, true.

// Entonces quedaría...
// if (true)...

// Por lo tanto, se ejecuta lo de "El resultado está por debajo del límite."
// ¿Y para qué queremos el "else"?
// En caso de que la condición del "if" no sea true, en lugar de no hacer nada,
// ejecutará lo que tiene el "else".


// >>> INICIO EJECUCIÓN >>>

var num1 = 20;
var num2 = 30;
var limite = 5;

if ((num1 + num2) <= limite) {
	console.log( "El resultado está por debajo del límite." );
} else {
	console.log( "¡El resultado ha sobrepasado el límite!" );
};

// --- FIN EJECUCIÓN ---


// 20 y 30 son 50, que NO son menor o igual que el límite (5).
// Así que se ejecutaría el "else".



