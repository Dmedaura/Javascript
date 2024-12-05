const prompt = require ('prompt-sync')()
/*Ejercicio 5: Conversión de divisas. 
Ingresá por consola un valor en pesos, luego, ingresa por consola una divisa 
(Por ejemplo dólar oficial, dólar blue, euro, etc. Las que a ustedes se les ocurran). 
Dentro de cada condición del switch van a hacer los calculos necesarios para transformar
el valor en pesos al valor en la divisa que seleccione el usuario
*/

let pesos = parseFloat(prompt("Ingrese la cantidad en pesos: "))
let op = parseInt(prompt("Ingrese a que divisa quiere convertir: (1.Dolar Oficial, 2.Dolar Blue, 3.Euro)    "))

switch (op) {
    case 1:
        let dolarOficial = pesos / 980
        console.log("La cantidad de pesos $",pesos,"equivalen a U$D",dolarOficial,"Dolares Oficiales")
        break;
    case 2:
        let dolarBlue = pesos / 1250
        console.log("La cantidad de pesos $",pesos,"equivalen a U$D",dolarBlue,"Dolares en Blue")
        break
    case 3:
        let euro = pesos / 1345
        console.log("La cantida de pesos $",pesos,"equivalen a €",euro,"Euros")

    default:
        break;
}