//Arreglos
const arreglo = [1,2,3]
// arreglo[10] = 3
console.log(arreglo);
// console.log(arreglo.length)

let arreglo2 = [...arreglo, 5]

const arreglo3 = arreglo2.map(e => e*2)

console.log(arreglo, arreglo2, arreglo3)