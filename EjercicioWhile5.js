const prompt = require ('prompt-sync')()
/*Iniciar Sesión
Crea un programa que simule un inicio de sesión. 
Pide al usuario que ingrese su nombre de usuario y contraseña y valida si son correctos. 
Repite hasta que lo logre.
*/

let contraseñaIngresada, nombreUsuarioIngresado
let nombreUsuarioPatron = prompt("Ingrese un nombre de usuario patron: ")
let contraseñaPatron = prompt("Ingrese una contraseña patron: ")

while (contraseñaIngresada != contraseñaPatron || nombreUsuarioPatron != nombreUsuarioIngresado) {
    nombreUsuarioIngresado = prompt("Ingrese su nombre de usuario: ")
    contraseñaIngresada = prompt("Ingrese la contraseña: ")
    if (contraseñaIngresada == contraseñaPatron && nombreUsuarioPatron == nombreUsuarioIngresado) {
        break;
    }
    console.log("Nombre de usuario o contraseña incorrecto")
}

console.log("El nombre de usuario y la contraseña son correctos")