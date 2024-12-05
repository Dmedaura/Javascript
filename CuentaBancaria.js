const CuentaBancaria = require('./EjercicioObjetos5')

const prompt = require ('prompt-sync')()

let nombre,nroCuenta,saldo,i=0
let cuenta=[]

while (true) {
    nombre= prompt("Ingrese su nombre: ")
    nroCuenta= prompt("Ingrese su numero de cuenta: ")
    saldo=0
    cuenta.push[i] = new CuentaBancaria (nombre,nroCuenta,saldo)
    i++
    if (i === 2) {
        break
    }
}

console.log

