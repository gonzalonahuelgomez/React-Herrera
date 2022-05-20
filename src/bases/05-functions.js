//Funciones
// function saludar(nombre) {
//     return `Hola, ${nombre}`
// }
const saludar = (nombre) => `Hola, ${nombre}`

console.log(saludar('Albert'))

//Tarea
//Transformar a arrow fuction
//Retorna objeto implícito

// function getActiveUser( name ){
//     return {
//         uid: 'ABC567',
//         username: name
//     }
// }


const getActiveUser = (name) => ({
    uid: 'ABC567',
    username: name
})
const activeUser = getActiveUser('Gonzalo')
console.log(activeUser)

