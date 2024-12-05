const prompt = require ('prompt-sync')()
/*Cuenta ascendente:
Crea un programa que pida al usuario dos números, 
uno desde dónde va a empezar una cuenta ascendente, 
y otro dónde va a terminar la misma, e ir imprimiendo la cuenta por pantalla. 
Es decir, si ingreso 3 y 8, el programa debería imprimir. 3, 4, 5, 6, 7, 8. */

let numi = parseInt(prompt("Ingrese el numero de partida: "))
let numf = parseInt(prompt("Ingrese el numero de finalización: "))

if (numi < numf) {
    while (numi < numf) {
        numi++
        console.log(numi)
    }
}