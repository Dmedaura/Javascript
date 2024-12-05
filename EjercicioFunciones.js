const prompt = require('prompt-sync')()
/***EJERCICIOS DE FUNCIONES**

**********Ejercicios Básicos*********


Ejercicio1: Suma de dos números
Crea una función que reciba dos números y retorne su suma.

Ejercicio2: Resta de dos números**
Crea una función que reciba dos números y retorne su resta.

Ejercicio3: Multiplicación de dos números**
Crea una función que reciba dos números y retorne su multiplicación.

Ejercicio4: División de dos números**
Crea una función que reciba dos números y retorne su división (asegúrate de no dividir por cero).

Ejercicio5: Calculadora simple**
Crea una función que reciba tres parámetros: dos números y una operación ("suma", "resta", "multiplicación", "división") y retorne el resultado correspondiente.

Ejercicio6: Elevar un número al cuadrado**
Crea una función que reciba un número y retorne su cuadrado.

Ejercicio7: Comprobar si un número es par o impar**
Crea una función que reciba un número y retorne si es par o impar.

Ejercicio8: Número mayor**
Crea una función que reciba dos números y retorne el mayor de los dos.

Ejercicio9: Número menor**
Crea una función que reciba dos números y retorne el menor de los dos.

Ejercicio10: Promedio de tres números**
Crea una función que reciba tres números y retorne su promedio.

**************Ejercicios Intermedios**************

Convertir grados Celsius a Fahrenheit
Crea una función que reciba una temperatura en grados Celsius y la convierta a Fahrenheit.

**Convertir grados Fahrenheit a Celsius**
Crea una función que reciba una temperatura en grados Fahrenheit y la convierta a Celsius.

**Calcular el área de un triángulo**
Crea una función que reciba la base y la altura de un triángulo y retorne su área (fórmula: área = base * altura / 2).

**Calcular el área de un círculo**
Crea una función que reciba el radio de un círculo y retorne su área (fórmula: área = π * radio²).

**Generar el factorial de un número**
Crea una función que reciba un número y retorne su factorial (n!).

**Generar una secuencia Fibonacci**
Crea una función que genere los primeros n números de la secuencia Fibonacci.

**Comprobar si un número es primo**
Crea una función que reciba un número y retorne si es primo o no.

**Contar las vocales en una cadena**
Crea una función que reciba una cadena de texto y cuente cuántas vocales (a, e, i, o, u) tiene.

**Inversión de una cadena**
Crea una función que reciba una cadena de texto y retorne la misma cadena pero invertida.

**Comprobar si una palabra es un palíndromo**
Crea una función que reciba una palabra y retorne si es un palíndromo (se lee igual de izquierda a derecha que de derecha a izquierda).

*****************Ejercicios Avanzados*************************

**Sumar todos los números de un array**
Crea una función que reciba un array de números y retorne la suma de todos sus elementos.

**Encontrar el valor máximo en un array**
Crea una función que reciba un array de números y retorne el valor máximo en el array.

**Encontrar el valor mínimo en un array**
Crea una función que reciba un array de números y retorne el valor mínimo en el array.

**Promedio de los números en un array**
Crea una función que reciba un array de números y retorne su promedio.

**Eliminar valores duplicados de un array**
Crea una función que reciba un array y retorne un nuevo array sin los valores duplicados.

**Multiplicar los elementos de un array por un número**
Crea una función que reciba un array y un número, y retorne un nuevo array con los elementos multiplicados por ese número.

**Ordenar un array de menor a mayor**
Crea una función que reciba un array de números y lo ordene de menor a mayor.

**Invertir un array**
Crea una función que reciba un array y retorne el mismo array invertido.

**Filtrar los números mayores a un valor**
Crea una función que reciba un array de números y un valor, y retorne un nuevo array con los números mayores al valor dado.

**Transformar un array de objetos**
Crea una función que reciba un array de objetos y retorne un nuevo array con solo una propiedad de cada objeto.
 */


function sumarNumeros (a, b) {
    console.log("La suma es:",a + b)
}
function restarNumeros(c, d) {
    console.log("La resta es:",c - d)
}

let a = parseInt(prompt("Ingrese un numero: "))
let b = parseInt(prompt("Ingrese otro numero: "))
sumarNumeros (a, b)
restarNumeros (a, b)

