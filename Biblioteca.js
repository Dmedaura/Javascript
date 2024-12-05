const prompt = require ('prompt-sync')()

module.exports = class Biblioteca {
    constructor(nombre, []) {
        this.nombre = nombre
        this.libros = []
    }
    añadirLibro (Libro){
        this.libros.push(Libro)
        console.log("El libro",this.libros,"se añadió correctamente a la biblioteca",this.nombre)
    }
    mostrarLibros (){
        console.log("Los titulos de la biblioteca",this.nombre,"por el momento son:",this.libros)
    }
    buscarLibro (){
        if (this.libros.includes(Libro.nombre)) {
            console.log("El libro",this.libros,"está en existencia en la biblioteca",this.nombre);
        } else {
            console.log("El libro solicitado",this.libros,"no se encuentra en la biblioteca");
        }
    }
}