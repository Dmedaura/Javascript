const prompt = require ('prompt-sync')()
/*Ejercicio 6: Sumar solo los números impares
Dado un array de números, usa un ciclo para sumar solo los números impares.
 */

let numeros = [1,2,3,4,5,6,45,78,12,54,78,65,32]
let sumaImpares=0

for (let index = 0; index < numeros.length; index++) {
    if (numeros[index]%2 != 0) {
        sumaImpares+=numeros[index]
    }
}

console.log("La suma de los impares: ",sumaImpares)