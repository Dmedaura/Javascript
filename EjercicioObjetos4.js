/*
Ejercicio 4: Creación de la clase Libro
Crea una clase llamada Libro con los siguientes atributos:

Título
Autor
Año de publicación
Género
La clase debe tener los siguientes métodos:

Un método para mostrar la información del libro (título, autor, año de publicación, género).
Un método que indique si el libro es "clásico" (si tiene más de 50 años de antigüedad).
Instancia dos objetos de la clase Libro y muestra su información y si son clásicos o no. */

class Libro {
    constructor(titulo, autor, anioPublicacion, genero) {
        this.titulo=titulo
        this.autor=autor
        this.anioPublicacion=anioPublicacion
        this.genero=genero
    }

    mostrarLibro (){
        console.log("Titulo:",this.titulo,"\nAutor:",this.autor,"\nAño de Publicacion:",this.anioPublicacion,"\nGenero:",this.genero)
    }

    categoria (){
        if (this.anioPublicacion <= 1974) {
            console.log("El libro",this.titulo,"es un clásico.")
        } else{
            console.log("El libro",this.titulo,"tiene menos de 50 años.")
        }
    }
}

let libro1 = new Libro ("Harry Potter","J.K. Rowling",1997,"Fantasía")
let libro2 = new Libro ("Cien años de soledad","Gabriel García Marquez",1967,"Novela")

libro1.mostrarLibro()
libro2.mostrarLibro()
libro1.categoria()
libro2.categoria()


