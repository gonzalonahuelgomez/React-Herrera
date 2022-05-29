import '@testing-library/jest-dom'
import { getUser, getUsuarioActivo } from '../../base/05-funciones'

describe('Prueba 05-funciones', () => {
    test('should return object', () => { 
        const userTest = {
            uid: 'ABC123',
            username: 'El_Papi1502'
        }

        const user = getUser() 
        
        console.log(user)

        expect(user).toEqual(userTest)
     })

    //getUsuarioActivo
    test('should return active object', () => { 
        
        const nombre = 'ElPapo'
        
        const userTest = {
            uid: 'ABC567',
            username: nombre
        }

        const user = getUsuarioActivo(nombre) 
        
        console.log(user)

        expect(user).toEqual(userTest)
     })
})