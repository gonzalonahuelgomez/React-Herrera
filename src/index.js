///desestructuracion de arrays

const characters = ['Goku','Vegeta','Trunks']
// console.log(characters[0],characters[1],characters[2])

// const [c1] = characters
// console.log(c1)
// const [, c2] = characters
// console.log(c2)
// const [ , , c3] = characters
// console.log(c3)

const returnArray = () => {
    return ['ABC', 123]
}

// const arr = returnArray()
const [letters, numbers] = returnArray()

console.log(letters, numbers)
