const Biblioteca = require('./Biblioteca');
const Libro = require('./Libro');

const prompt = require ('prompt-sync')()
/*EJERCICIOS DE RELACIONES ENTRE CLASES

1- Biblioteca y Libro
Crea las clases Biblioteca y Libro.

Una biblioteca tiene un nombre y una lista de libros.
Un libro tiene un título, autor y número de páginas.
Agrega métodos en la clase Biblioteca para:
Añadir un libro.
Listar todos los libros.
Agrega un método para buscar un libro por título. */

let ciclo = true
let biblioteca1= new Biblioteca("El Libro Viejo",)

while (ciclo === true) {
    const opcion = parseInt(prompt("Ingrese la opcion que desea: \n 1. Agregar un libro \n 2. Mostrar libros \n 3. Buscar un libro: "))
    switch (opcion) {
        case 1:
            biblioteca1.añadirLibro = ingresarLibro()
            break;
        case 2:
            biblioteca1.mostrarLibros()
            break;
        case 3:
            
    
        default:
            break;
    }
}

function ingresarLibro () {
    let titulo = prompt("Ingrese el titulo del libro")
    let autor = prompt("Ingrese el autor del libro")
    let anio = prompt("ingrese el año de publicacion del libro")
    let libro = new Libro(titulo, autor, anio)
    return libro
}