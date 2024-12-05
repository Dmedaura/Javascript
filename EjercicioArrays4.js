const prompt = require ('prompt-sync')()
/*Ejercicio 4: Invertir un array
Dado un array de números, usa un ciclo para invertir el array 
(es decir, que el último elemento pase a ser el primero, y viceversa).
*/


let numeros = [1,2,3,4,5,6,45,78,12,54,78,65,32]
let numerosInvertidos=[]


for (let i = (numeros.length-1); i >= 0; i--) {
    numerosInvertidos.push(numeros[i])
}



console.log("Array original: ", numeros)
console.log("Array invertido: ", numerosInvertidos)