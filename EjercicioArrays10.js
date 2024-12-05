const prompt = require('prompt-sync')()
/*Ejercicio 10: Eliminar un elemento de un array
Dado un array de números y un número a eliminar, 
usa un ciclo para crear un nuevo array que no contenga el número objetivo.
 */

let numeros = [
    15, -3, 22, 7, -19, 40, 11, -5, 8, 2,
    37, -15, 0, -22, 3, 10, -8, 45, -12, 6,
    -30, 18, 14, 29, -6, 25, 9, -50, 20, 12,
    34, -17, 5, 13, -9, 23, 39, -1, 27, 4,
    10, 31, -28, 33, -24, 21, -10, 16, -7, 28
];
let numeritos= []
let objetivo = parseInt(prompt("Ingrese un numero: "))

for (let index = 0; index < numeros.length; index++) {
    if (numeros.includes(objetivo)) {
        if (numeros[index] != objetivo) {
            numeritos.push(numeros[index])
        }
    }
}

console.log("El arreglo sin el numero objetivo es: ",numeritos)

