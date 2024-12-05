const prompt = require ('prompt-sync')()
/*EJERCICIO 1:
Imprimir Números Impares
Escribe un ciclo for que imprima los números impares del 1 al 19. */

for (let index = 0; index < 20; index++) {
    if (index%2 !== 0) {
        console.log(index)
    }
}