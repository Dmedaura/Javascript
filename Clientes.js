module.exports = class Cliente {
    constructor(id, nombre, apellido, []) {
        this.id = id
        this.nombre = nombre
        this.apellido = apellido
        this.libros = []
    }

    pedirLibro(Libro){
        this.libros.push(Libro)
        console.log("A pedido el libro de titulo '", Libro.titulo, "' pa el cliente",this.nombre)
        console.log("Ahora el cliente tiene la siguiente lista de libros:",this.libros)
    }

    devolverLibro(Libro){
        let indice = this.libros.findIndex (Libro => Libro === Libro)
        this.libros.splice(indice)
    }
}