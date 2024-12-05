const prompt = require ('prompt-sync')()
/*
Ejercicio 4: Pedir por consola la edad de una persona y clasificarla cómo 'niño',
'adolescente', 'adulto', 'anciano'. 
(Pueden usar su propio criterio para definir cada una)
*/

let edad = parseInt(prompt ("Ingrese su edad: "))

switch (true) {
    case (0 <= edad && edad < 10):
        console.log("La persona es un niño")
        break;

    case ((10 <= edad) && (edad < 18)): 
        console.log("La persona es adolecente")
        break

    case ((18 <= edad) && (edad < 60)):
        console.log("La persona es adulta")
        break

    case (60 <= edad):
        console.log("La persona es anciana")
        break

    default:
        break;
}
