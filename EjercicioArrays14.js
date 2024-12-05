const prompt = require('prompt-sync')()
/*Ejercicio 14: Eliminar duplicados
Dado un array de números, usa un ciclo para crear 
un nuevo array que contenga solo los elementos únicos (sin duplicados).
 */

let numeros = [
    15, -3, 22, 7, -19, 40, 11, -5, 8, 2,
    37, -15, 0, -22, 3, 10, -8, 45, -12, 6,
    -30, 18, 14, 29, -6, 25, 9, -50, 20, 12,
    34, -17, 5, 13, -9, 23, 39, -1, 27, 4,
    10, 31, -28, 33, -24, 21, -10, 16, -7, 28
];
let numeritos= []

for (let index = 0; index < numeros.length; index++) {
    if (numeritos.includes(numeros[index])) {
        index++
    }
    numeritos.push(numeros[index])
    
}
//console.log(numeritos.length)

console.log("El array sin numeros repetidos es: ",numeritos)