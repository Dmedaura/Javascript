const prompt = require ('prompt-sync')()
/*Ejercicio 2: Sumar los elementos de un array
Dado un array de números, utiliza un ciclo para calcular la suma de todos los elementos.
*/

let numeros = [1,2,3,4,5,6,45,78,12,54,78,65,32]
let suma = 0

for (let index = 0; index < numeros.length; index++) {
    suma += numeros[index]
}

console.log("La suma de los numeros del arreglo es: ", suma)