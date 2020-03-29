# ¡Hola!

Soy Adrián "Icaruk" y te doy la bienvenida a mi tutorial de Javascript + HTML + CSS.
Este tutorial te sirve si no sabes NADA de programación porque voy a empezar de 0.

Voy a intentar transmitir mis conocimientos y mi forma de hacer las cosas de la forma más efectiva posible.

La metodología que voy a seguir es la siguiente:

- Voy al grano.
- 90% práctica y 10% teoría.
- Ejemplos absurdos y divertidos que te ayudarán a memorizar las cosas.
- Repasaremos constantemente todos los conceptos ya aprendidos. Lo que aprendiste ayer te servirá hoy.
- Después de cada capítulo mandaré un ejercicio, que tendrá su resolución en el siguiente capítulo.
- Escribiremos código lo más útil posible, que puedas ver en la vida real.

Primero tenemos que descargar un [IDE](https://es.wikipedia.org/wiki/Entorno_de_desarrollo_integrado), es decir una movida donde
podremos escribir nuestro código.
En este tutorial usaremos Visual Studio Code que podremos descargar [aquí](https://code.visualstudio.com/download).

Después instalaremos Node.js, que básicamente es para poder ejecutar Javascript fuera del navegador.
Y lo podremos descargar [aquí](https://nodejs.org/es/download/).



# Configurando Visual Studio Code

Cuando abramos VSC veremos algo así:

![](https://i.gyazo.com/a15e317bc967ee5752d46540b20784bb.png)

Para descargar extensiones vamos a la parte izquierda y hacemos click en este icono:

![](https://i.gyazo.com/9463158a9e58e0bab6a15170cc4bb5eb.png)

Y descargamos las siguientes extensiones:

**Code runner**
Sirve para ejecutar todo el código del documento actual, o sólo la selección que tengamos.
![](https://i.gyazo.com/a18ab74dd919b1141640648b6ce240ec.png)


**Bracket pair colorizer**
Sirve para ver más fácilmente los inicios y finales de cada paréntesis, corchete y llave cuando están tal que así (()) [[]] {{}}.
Lo veremos cuando avancemos.
![](https://i.gyazo.com/9a5ba46d8b9b1fd88a84da59932125db.png)

¿Cómo? Simplemente escribimos el nombre en la parte superior donde dice "Buscar extensiones en Marketplace"
y pulsando el botón verde que dice "Install".


## Comprobando que todo funciona bien

1. Archivo >>> Nuevo archivo

2. Abajo a la derecha del todo hacemos click donde pone "Texto sin formato". Escribimos Javascript y seleccionamos la opción.

3. Escribimos lo siguiente:
`console.log("Todo funciona guay")`

4. Hacemos click en el icono con forma de play arriba a la derecha del todo:
![](https://i.gyazo.com/096a722659dd27171e3b7c83c1787519.png)

5. Deberíamos de ver el texto en la parte inferior tal que así:
![](https://i.gyazo.com/e53d09f52c63981f980ac2ddf77f7080.png)


Si algo ha salido mal comprueba si tienes Node.js intalado correctamente, reinicia VSC o reinicia el ordenador.



# Cómo va a funcionar esta movida

Ya hemos ejecutado código con la extensión Code Runner.
Ahora vamos a ejecutar sólo el código seleccionado.
Primero escribimos lo siguiente:

	console.log("Hola");
	console.log("Adiós");
	
Después seleccionamos la primera línea y le damos al play de antes para ejecutar el código, y deberíamos ver lo siguiente:
![](https://i.gyazo.com/70145933757053d6d5fe8907b5e364a7.png)

Después hacemos lo mismo para ejecutar la segunda línea.

De esta forma podremos ejecutar código selectivamente, lo que nos servirá para seguir el tutorial.

Si no seleccionamos nada y ejecutamos, veremos Hola y Adiós con un solo click:
![](https://i.gyazo.com/1aff41c05ae5fdeb0d3439b625014b81.png)

Porque hemos ejecutado TODO el código y no una selección.



# Ya estamos listos
Para superar esta aventura necesitarás **paciencia y perseverancia**.
Te vas a equivocar, mucho y vas a cometer errores, muchos.
A veces va a ser frustrante y no vas a tener ni puta idea de qué coño está ocurriendo ni cómo seguir.
Es parte del **aprendizaje**, permítete equivocarte y hacer las cosas mal, no pasa nada. Los "sabios" conocen millones de formas de cómo NO hacer las cosas, por eso son sabios.

Así que... ¡tu aventura empieza en el capítulo 1!

El primer capítulo estará en un archivo con extensión .js así que tendrás que abrirlo con VSC (Visual Studio Code).
