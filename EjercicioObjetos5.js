const prompt = require('prompt-sync')()
/*Ejercicio 5: Creación de la clase CuentaBancaria
Crea una clase llamada CuentaBancaria con los siguientes atributos:

Titular (nombre de la persona)
Número de cuenta
Saldo
La clase debe tener los siguientes métodos:

Un método para ingresar dinero a la cuenta.
Un método para retirar dinero de la cuenta (debe verificar que haya suficiente saldo).
Instancia dos objetos de la clase CuentaBancaria, realiza un ingreso y un retiro en cada una, 
y muestra el saldo final. */

module.exports = class CuentaBancaria {
    constructor(titular, numeroCuenta, saldo) {
        this.titular=titular
        this.numeroCuenta=numeroCuenta
        this.saldo=saldo
    }

    ingresarDinero (dinero){
        this.saldo+=dinero
        console.log("Dinero correctamente ingresado, su saldo actual es:",this.saldo)
    }

    retirarDinero (dinero){
        if (dinero <= this.saldo) {
            console.log("Dinero retirado exitosamente, su saldo actual es:",this.saldo)
        }
    }
}