const prompt = require ('prompt-sync')()
/*Promedio de Notas:
Pide al usuario que ingrese las notas de varios estudiantes hasta que ingrese -1 para finalizar, 
y luego calcula y muestra el promedio de las notas ingresadas. */

let sumaNotas = 0
let nota, cantidadNotas=0
do {
    nota = parseInt(prompt("Ingrese la nota (Ingrese -1 para finalizar): "))
    if (nota>0) {
        sumaNotas += nota
        cantidadNotas ++
    }
} while (nota != -1);

console.log("El promedio de las notas es: ", sumaNotas/cantidadNotas)