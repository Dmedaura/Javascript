class Persona {
    constructor(nombre,edad,profesion,telefono) {
        this.nombre = nombre
        this.edad = edad
        this.profesion = profesion
        this.telefono = telefono
    }

    saludar(){
        console.log("Hola, soy",this.nombre,"es un gusto conocerte.")
    }

    decirProfesion(){
        if(this.edad < 18){
            this.profesion= "Estudiante"
            console.log("Hola soy",this.nombre,"y soy",this.profesion)
        }
        else{
            console.log("Hola soy",this.nombre,"y soy",this.profesion)
        }
    }
}


let persona1 = new Persona ("Daniel Medaura",29,"Programador","354351534")
let persona2 = new Persona ("Pablo Medaura",17,"Ingeniero","154615343")

persona1.saludar()
persona2.decirProfesion()