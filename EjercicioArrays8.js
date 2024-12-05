const prompt = require('prompt-sync')()
/*Ejercicio 8: Contar ocurrencias de un número
Dado un array de números y un número objetivo, 
usa un ciclo para contar cuántas veces aparece el número objetivo en el array.
 */

let numeros = [
    15, -3, 22, 7, -19, 40, 11, -5, 8, 2,
    37, -15, 0, -22, 3, 10, -8, 45, -12, 6,
    -30, 18, 14, 29, -6, 25, 9, -50, 20, 12,
    34, -17, 5, 13, -9, 23, 39, -1, 27, 4,
    10, 31, -28, 33, -24, 21, -10, 16, -7, 28
];
let num = 0
let objetivo = [5, 10, -12, 0]

for (let i = 0; i < objetivo.length; i++) {
    if (numeros.includes(objetivo[i])) {
        for (let index = 0; index < numeros.length; index++) {
            if (objetivo[i] == numeros[index]) {
                num++
            }
        }
        console.log("La cantida de veces que se encuentra el numero ", objetivo[i], " es: ", num)
    }else {
        console.log("El arreglo no contiene el numero")
    }
    num = 0
}

