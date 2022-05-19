const nombre = 'Gonzalo'
const apellido = 'Gomez'

//Template String
const nombreCompleto = `${nombre} ${apellido}`

console.log(nombreCompleto)

function getSaludo(nombre) {
    return `Hola ${nombre} ${apellido}`
}

console.log(`Este es un texto: ${ getSaludo(nombre) }`)