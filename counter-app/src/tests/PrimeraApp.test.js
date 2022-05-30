import React from 'react'
import { render } from '@testing-library/react'
import PrimeraApp from "../PrimeraApp";

describe('Pruebas PrimeraApp', () => {
    test('debe de mostrar el mensaje "Hola Mundo"', () => {
        const saludo = "Hola Mundo"

        const { getByText } = render(<PrimeraApp saludo={ saludo }/>)
        expect( getByText(saludo) ).toBeInTheDocument()
    });
});