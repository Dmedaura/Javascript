const prompt = require('prompt-sync')()
/*Ejercicio 12: Crear un array de longitudes
Dado un array de palabras, usa un ciclo para crear un nuevo array que contenga la longitud de cada palabra.
 */

let frase = prompt("Ingrese una frase o palabra: ")
let contador = 0
let numeros = []

for (let index = 0; index <= frase.length; index++) {
    if (frase[index] != " ") {
        contador++
    } 
    if (frase[index] === " " || index === frase.length - 1) {
        numeros.push(contador)
        contador = 0
    }

}

console.log("La cantidad de letras por palabra es: ",numeros)