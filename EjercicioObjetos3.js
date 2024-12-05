/*
Ejercicio 3: Creación de la clase Estudiante
Crea una clase llamada Estudiante con los siguientes atributos:

Nombre
Edad
Calificación1
Calificación2
La clase debe tener los siguientes métodos:

Un método para calcular el promedio de las calificaciones.
Un método para determinar si el estudiante aprueba o reprueba.
Instancia dos objetos de la clase Estudiante y calcula su promedio y su estado de aprobación. */

class Estudiante {
    constructor(nombre, edad, calificacion1, calificacion2) {
        this.nombre=nombre
        this.edad=edad
        this.calificacion1=calificacion1
        this.calificacion2=calificacion2        
    }

    calcularPromedio(nota1,nota2){
        let promedio= ((nota1+nota2)/2)
        return promedio;
    }
    aprobadoReprobado(promedio){
        if (promedio > 60) {
            console.log("El estudiante",this.nombre,"aprobó la materia")
        }
        else{
            console.log("El estudiante",this.nombre,"reprobó la materia")
        }
    }
}

let estudiante1 = new Estudiante ("Daniel",29,55.6,84.4)
let estudiante2 = new Estudiante ("Pablo",27,45.9,22.1)

//estudiante1.calcularPromedio(calificacion1,calificacion2)
console.log("El promedio del estudiante",estudiante1.nombre,"es:",estudiante1.calcularPromedio(estudiante1.calificacion1,estudiante1.calificacion2))
console.log("El promedio del estudiante",estudiante2.nombre,"es:",estudiante2.calcularPromedio(estudiante2.calificacion1,estudiante2.calificacion2))
estudiante1.aprobadoReprobado(estudiante1.calcularPromedio(estudiante1.calificacion1,estudiante1.calificacion2))
estudiante2.aprobadoReprobado(estudiante2.calcularPromedio(estudiante2.calificacion1,estudiante2.calificacion2))