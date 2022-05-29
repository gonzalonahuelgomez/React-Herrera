import '@testing-library/jest-dom'
import { getSaludo } from "../../base/02-template-string"


describe('Pruebas en 02-template-string', () => {
    test('prueba getSaludo ', () => {
        const nombre = 'Robert'
        const saludo = getSaludo(nombre)
        console.log(saludo)
        expect(saludo).toBe('Hola '+nombre )
    })

    test('prueba getSaludo sin argumento', () => {
        const saludo = getSaludo()
        console.log(saludo)
        expect(saludo).toBe('Hola Carlos')
    })
})