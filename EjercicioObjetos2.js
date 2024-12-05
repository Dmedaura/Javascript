/*
Ejercicio 2: Creación de la clase Auto.
Crea una clase Auto con 2 atributos y dos métodos. Instancia dos objetos de esa clase.
 */

class Auto {
    constructor(marca,modelo) {
        this.marca = marca
        this.modelo = modelo
    }

    arrancarAuto(llave){
        if (llave) {
            console.log("El auto",this.marca, "arrancó")
        }
        else{
            console.log("El auto",this.marca, "no arrancó")
        }
    }

    tocarBocina(){
        let bocina = "Está sonando la bocina"
        return bocina;
    }
}

let auto1 = new Auto ("Chevrolet","Corsa")
let auto2 = new Auto ("Peugeot", "208")

let llave= false

auto1.arrancarAuto(llave)

console.log(auto2.tocarBocina(),"del auto",auto2.marca)
