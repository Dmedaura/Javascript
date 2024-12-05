const prompt = require ('prompt-sync')()
/*Ejercicio 7: Encontrar el número menor
Escribe un ciclo que encuentre el número más pequeño en un array de números.
 */

let numeros = [1,2,3,4,5,6,45,78,12,54,78,65,32,-15]
let menor = 99999
for (let index = 0; index < numeros.length; index++) {
    if (numeros[index] < menor) {
        menor = numeros[index]
    }
}

console.log("El menor numero del arreglo es: ",menor)