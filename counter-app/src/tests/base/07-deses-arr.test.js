import '@testing-library/jest-dom'
import { retornaArreglo } from '../../base/07-deses-arr'

describe('Prueba 07-des-arr', () => { 
   test('retorna str y num', () => { 
       const [str, num] = retornaArreglo()

    //    expect( arr ).toEqual(['ABC', 123])
       expect( str ).toBe('ABC')
       expect( typeof str ).toBe('string')
       expect( num ).toBe(123)
       expect( typeof num ).toBe('number')
    }) 
 })