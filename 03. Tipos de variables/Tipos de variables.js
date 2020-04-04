// (En proceso)

// ############################################################
// Tipos de variables
// ############################################################


// Sólo hemos visto cómo declarar una variable, es decir:

var variable = "valor";

// Pero para reasignar un valor a una variable no podemos volver a re-declararla o dará error
// Así que la forma sería la siguiente:

var variable = "valor uno";
variable = "valor dos";


// Una vez aprendido esto, prosigamos.
// Hasta hora hemos visto "var", pero tenemos "let" y "const".
// A partir de este momento no vamos a volver a usar "var" casi casi casi nunca, luego veremos porqué.


// >>> INICIO EJECUCIÓN >>>

let saludo = "hola";
console.log("hola");

// --- FIN EJECUCIÓN ---


// Podemos comprobar que funciona exactamente igual. Luego veremos su diferencia respecto a "let".


// >>> INICIO EJECUCIÓN >>>

const PI = 3.14; 
console.log( PI ); 

// --- FIN EJECUCIÓN ---


// Las constantes se suelen poner en mayúsculas para indicar que son constantes
// pero no dejan de funcionar si no lo haces.

// Por el momento todo es exactamente igual, bueno una constante... no es variable.


// >>> INICIO EJECUCIÓN >>>

const PI = 3.14;
PI = 100;
console.log( PI );

// --- FIN EJECUCIÓN ---

