class Persona {
    constructor(nombre, edad, telefono) {
        this.nombre = nombre
        this.edad = edad
        this.telefono = telefono
    }
    //METODOS
    agregarAuto(auto){
        this.auto = auto
    }
    caminar() {
        console.log("Hola, estoy caminando")
    }
    mostrarAuto(){
        console.log(this.nombre,"tiene un auto marca",this.auto.marca,"de modelo",this.auto.modelo,"y color",this.auto.color)
    }
}

class Auto {
    constructor(color, marca, modelo) {
        this.color = color
        this.marca = marca
        this.modelo = modelo
    }
}

let auto = new Auto("Rojo","Chevrolet","corsa")
let persona1 = new Persona("Daniel Medaura","29","135456413")

persona1.agregarAuto(auto)

persona1.mostrarAuto()



//Objetos de forma simple que se utiliza mas para el front-end
//Porque solo sirve para instanciar y crear un solo objeto
/*
const ObjetoAuto = {
    color: "verde",
    marca: "Toyota",
    modelo: "corolla"
}

console.log("El auto es de color: ",ObjetoAuto.color)*/