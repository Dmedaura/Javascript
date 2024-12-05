const prompt = require ('prompt-sync')()
/*EJERCICIO 4:
Ingresar 4 números por consola, y con un ciclo for determinar cuál de ellos es el mayor. 
También pueden hacerlo con el menor. */

let num0 = parseInt(prompt("Ingrese el primer numero: "))
let num1 = parseInt(prompt("Ingrese el segundo numero: "))
let num2 = parseInt(prompt("Ingrese el tercer numero: "))
let num3 = parseInt(prompt("Ingrese el cuarto numero: "))

let numeros = [num0, num1, num2, num3]
let menor=0, mayor=0


for (let index = 0; index <= numeros.length; index++) {
    if (numeros[index] >= mayor) {
        mayor = numeros[index]
    }
    if (numeros[index] <= menor) {
        menor = numeros[index]
    }
    
}
console.log("El mayor numero de los numeros es: " + mayor)
console.log("El menor de los numeros es: " + menor)