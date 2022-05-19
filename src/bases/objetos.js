//Objetos
const persona = {
    nombre: 'Gonzalo',
    apellido: 'Gomez',
    edad: 25,
    direccion: {
        ciudad: 'CABA',
        zip: 'C1433'
    }
}

const persona2 = {...persona}
persona2.nombre = 'Roberto'

// console.table(persona)
console.log(persona)
console.log(persona2)