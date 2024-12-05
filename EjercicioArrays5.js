const prompt = require ('prompt-sync')()
/*Ejercicio 5: Contar números pares
Dado un array de números, usa un ciclo para contar cuántos de ellos son pares.
*/

let numeros = [1,2,3,4,5,6,45,78,12,54,78,65,32]
let cantPares=0

for (let index = 0; index < numeros.length; index++) {
    if (numeros[index]%2 == 0) {
        cantPares++
    }
}

console.log("La cantida de pares en el arreglo es: ",cantPares)