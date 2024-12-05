const prompt = require ('prompt-sync')()
/*EJERCICIO 3:
Tabla de Multiplicar
Genera la tabla de un número ingresado por consola utilizando un ciclo for. */

let numero = prompt ("Ingrese un numero: ")

for (let index = 0; index <= 10; index++) {
    console.log(numero*index)    
}