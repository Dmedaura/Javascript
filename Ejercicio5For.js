const prompt = require ('prompt-sync')()
/*EJERCICIO 1:
Calcular el promedio desde 0 hasta N, que sería un número ingresado por el usuario. */

let numero = parseInt(prompt("Ingrese un numero: "))

for (let index = 0; index <= numero; index++) {
    let promedio = index/2
    console.log("El promedio hasta "+index+": "+promedio)    
}