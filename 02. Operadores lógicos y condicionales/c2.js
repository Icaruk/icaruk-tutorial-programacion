
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


// Y por fin vamos a explicar qué hace el dichoso "console.log".
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


// Haz las pruebas que necesites, juega. Y cuando termines seguimos.
// Vamos a ver qué tipos de operadores hay.
// El resultado de cada una de las siguientes expresiones, sería si son verdad o mentira (true o false):

3 > 1; 	// 3 es mayor que 1, true
3 >= 1; // 3 es mayor o igual que 1, true
3 < 1; 	// 3 es menor que 1, false
3 <= 1; // 3 es menor o igual que 1, false
3 == 1; // 3 es igual que 1, false
3 === 1; // 3 es igual y del mismo tipo que 1, false
3 != 1; // 3 NO es igual que 1, true
3 !== 1; // 3 NO es igual ni del mismo tipo que 1, true


// ¿Quieres probarlo?
// Allá vamos:


// >>> INICIO EJECUCIÓN >>>

var esMayor = 3 > 1;
var esMenor = 3 < 1;
var esIgual = 3 == 1;
var noEsIgual = 3 != 1;
console.log( esMayor, esMenor, esIgual, noEsIgual );

// --- FIN EJECUCIÓN ---


// Debería dar: true false false true
// Veamos con más detalle el >= y el <=

3 >= 3; // 3 es mayor o igual que 3: true
3 > 3; 	// 3 es mayor que 3: false

3 <= 3; // 3 es menor o igual que 3: true
3 < 3; 	// 3 es menor que 3: false


// El símbolo se escribe como se lee: "mayor o igual que" , no "igual que o mayor" xD


// Ahora veamos las diferencias de == y ===

1 == 1; 	// true
1 == "1"; 	// true también, "1" se convierte automáticamente a 1

1 === 1; 	// true
1 === "1"; 	// false, porque al no hacerse conversión automática, no son del mismo tipo, por lo tanto no son iguales


// El signo ! habrás visto que es como de negación, pues es eso, una negación:

!true; // true se convierte en false
!false; // false se convierte en true
1 === 1; // como sí que son iguales: true
1 !== 1; // son iguales pero al tener negación true se convierte en false


// Así que se podría decir que == compara valores, y === compara valores y tipos.
// Lo mismo ocurre con el resto de tipos de datos. Pero no voy a ir uno a uno, lo iremos viendo sobre la marcha.


// Bueno ahora que sabemos cómo comparar cosas, vamos a darle una utilidad... el if.
// El concepto sería: "si cumplo las condiciones entonces...""
// Y se escribe: if (condicion) {ejecutasCosasAquiDentro};
// Si se cumple la condición (es decir, si se resuelve en true), se ejecutará lo de dentro.


// >>> INICIO EJECUCIÓN >>>

var dinero = 10; // tengo 10 €

if (dinero >= 8) { // entrar me cuesta 8€, así que necesitaría 8 o más € para poder entrar
	console.log("Entras en la discoteca.");
};

// --- FIN EJECUCIÓN ---


// Dentro de los paréntesis se tiene que poner algo que se resuelva en true o false.
// Veamos otro ejemplo:


// >>> INICIO EJECUCIÓN >>>

var salud = 99;

if (salud >= 100) { // mi salud es 100 o más
	console.log("Tienes 100 o más de salud. Estás en perfectas condiciones.");
};
if (salud < 100) { // mi salud MENOS de 100, no incluyo el 100 porque he hecho < 100 y no <= 100
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


// De hecho, nuestro IDE nos indicará que lo de dentro del segundo if es "código inaccesible" al poner el ratón encima,
// porque al estar la condición en false, nunca se ejecutará.

// Vamos a hacer algo útil, y al mismo tiempo aprenderemos qué es el "if else".
// El concepto sería: "si cumplo las condiciones entonces... y si no...""
// Y se escribe: if (condicion) {ejecutasEsto} else {ejecutasEstoOtro};
// Si se cumple la condición (es decir, si se resuelve en true), se ejecutará lo del if, de lo contrario, lo del else.


// >>> INICIO EJECUCIÓN >>>

var dinero = 10;
var dineroQueMeAcaboDeEncontrar = 1;
var precio = 8;

if ((dinero + dineroQueMeAcaboDeEncontrar) >= precio) { // tengo más dinero que lo que cuesta la entrada
	console.log( "Entras en la discoteca." );
} else { // no tengo más dinero que lo que cuesta la entrada
	console.log( "No tienes dinero para entrar en la discoteca." );
};

// --- FIN EJECUCIÓN ---


// Primero se resuelve (dinero + dineroQueMeAcaboDeEncontrar)
// Sería 10 + 1 = 11 y nos quedaría...
// if (11 >= precio) ...

// Si precio es 8, nos quedaría...
// if (11 >= 8) ...

// ¿11 es mayor o igual que 8? Sí, es decir, true.

// Entonces quedaría...
// if (true)...

// Por lo tanto, entramos a la discoteca.
// ¿Y para qué queremos el "else"?
// En caso de que la condición del "if" no sea true, se ejecutará lo que tiene el "else". Veamos el ejemplo:


// >>> INICIO EJECUCIÓN >>>

var dinero = 8;
var dineroQueAcaboDePerder = 1;
var precio = 8;

if ((dinero - dineroQueAcaboDePerder) >= precio) { // tengo más dinero que lo que cuesta la entrada
	console.log( "Entras en la discoteca." );
} else { // no tengo más dinero que lo que cuesta la entrada
	console.log( "No tienes dinero para entrar en la discoteca." );
};

// --- FIN EJECUCIÓN ---


// Hacemos como antes, paso por paso:
// ((dinero - dineroQueAcaboDePerder) >= precio)
// 8 - 1 = 7
// (7 >= precio)
// (7 >= 8)
// false

// No se ejecuta el contenido del if, pero sí el del else
// Vaya, ese euro que hemos perdido nos venía realmente bien.



// ############################################################
// Ejercicio
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
