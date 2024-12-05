const prompt = require ('prompt-sync')()
/*Validación de Contraseña
Pide al usuario que ingrese una contraseña y valida que sea correcta. 
Si no lo es, pide que vuelva a intentar hasta que ingrese la contraseña correcta.*/

let contraseñaIngresada 
let contraseñaPatron = prompt("Ingrese una contraseña patron: ")

while (contraseñaIngresada != contraseñaPatron) {
    contraseñaIngresada = prompt("Ingrese la contraseña: ")
    if (contraseñaIngresada == contraseñaPatron) {
        break;
    }
    console.log("La contraseña ingresada no es la correcta")
}

console.log("La contraseña es correcta")