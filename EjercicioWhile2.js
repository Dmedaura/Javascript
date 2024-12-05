const prompt = require ('prompt-sync')()
/*Suma de Números Ingresados
Crea un programa que pida al usuario que ingrese números hasta que ingrese un número negativo, 
y luego muestre la suma de todos los números ingresados. */

let suma = 0
let numero
do {
    numero = parseInt(prompt("Ingrese un numero: "))
    if (numero>0) {
        suma += numero
    }
} while (numero > 0);

console.log("La suma de los numeros ingresados es: ", suma)
