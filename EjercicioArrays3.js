const prompt = require ('prompt-sync')()
/*Ejercicio 3: Encontrar el número mayor
Escribe un ciclo que encuentre el número más grande en un array de números.
*/


let numeros = [1,2,3,4,5,6,45,78,12,54,78,65,32]
let mayor = 0

for (let index = 0; index < numeros.length; index++) {
    if (mayor < numeros[index]) {
        mayor = numeros[index]
    }
}

console.log("El mayor de los numeros del arreglo es: ", mayor)