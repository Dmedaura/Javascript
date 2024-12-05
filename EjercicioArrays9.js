const prompt = require('prompt-sync')()
/*Ejercicio 9: Comprobar si un array está ordenado
Dado un array de números, usa un ciclo para comprobar si los números están ordenados de menor a mayor.
 */

//let numeros = [1,2,3,4,5,6,45,78,12,54,78,65,32,-15]
let numeros = [1,2,3,4,5,6,45,78]
let bin = true;

for (let index = 1; index < numeros.length; index++) {
    if (numeros[index] < numeros[index-1]) {
        console.log("El arreglo no está ordenado")
        bin = false
        break
    }

}
if (bin) {
    console.log("El arreglo está ordenado de menor a mayor: ",numeros)
}
