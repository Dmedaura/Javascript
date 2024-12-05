const prompt = require ('prompt-sync')()
/*EJERCICIO 2:
Suma de los Primeros N Números
Crea un programa que sume los primeros N números naturales, 
donde N es un número ingresado por el usuario. */

let numeros = prompt("Ingrese hasta que numero N va a sumar: ")
let suma = 0
for (let index = 0; index <= numeros; index++) {
    suma = index + suma 
}

console.log("La suma de todos los numeros hasta N es: " + suma)