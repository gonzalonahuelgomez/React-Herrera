import { getHeroeByIdAsync } from "../../base/09-promesas";
import heroes from '../../data/heroes'

describe('Prueba 09-promesas', () => {
    test('promesa debe de retornar un heroe async', (done) => { 
        const id = 1
        getHeroeByIdAsync(id)
            .then(hero => {
                expect(hero).toBe(heroes[id - 1])
                done()
            })
    })

    test('promesa debe de retornar un error si id no existe', (done) => { 
        const id = 10
        getHeroeByIdAsync(id)
            .catch(error => {
                expect(error).toBe('No se pudo encontrar el héroe')
                done()
            })
    })
});