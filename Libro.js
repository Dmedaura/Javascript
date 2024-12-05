const prompt = require ('prompt-sync')()

module.exports = class Libro {
    constructor(titulo, autor, anioPublicacion) {
        this.titulo = titulo
        this.autor = autor
        this.anioPublicacion = anioPublicacion
    }
}