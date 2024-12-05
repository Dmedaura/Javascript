const prompt = require('prompt-sync')()
/*Ejercicio 13: Contar vocales en una cadena
Dada una cadena de texto, usa un ciclo para contar cuántas vocales tiene.
 */

let frase = prompt("Ingrese una frase o palabra: ")
let vocales = "aeiouAEIOU"
let contador = 0

for (let index = 0; index < vocales.length; index++) {
    for (let i = 0; i < frase.length; i++) {
        if (vocales[index] === frase[i]) {
            contador++
        }
    }
}

console.log("La frase o palabra contiene:",contador,"vocales")
