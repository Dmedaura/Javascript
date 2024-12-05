const prompt = require('prompt-sync')()

/*
Ejercicio 3: Tipo de triangulo. Pedir tres longuitudes de lados 
y determinar de qué tipo es el triangulo (equilatero, isóceles, escaleno)
Los triángulos que enen: 3 lados de igual medida, se llaman equiláteros. 
2 lados de igual medida, se llaman isósceles. 3 lados de diferente medida, se llaman escalenos.
*/

let lado1 = prompt("Ingrese uno de los lados del triangulo: ")
let lado2 = prompt("Ingrese otro de los lados del triangulo: ")
let lado3 = prompt("Ingrese el ultimo de los lados del triangulo: ")

switch (lado1 === lado2) {
    case true: if (lado1 === lado3) {
        console.log("El triangulo es equilatero")
    } else{
        console.log("El triangulo es isosceles")
    }    
        break;
    case false: if (lado1 === lado3) {
        console.log("El triangulo es isosceles")
    } else if (lado2 === lado3){
        console.log("El triangulo es isosceles")
    } else{
        console.log("El triangulo es escaleno")
    }
    break;

    default:
        break;
}

