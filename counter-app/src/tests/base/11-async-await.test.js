import { getImagen } from "../../base/11-async-await";

describe('Pruebas con async-await y fetch', () => {
    test('retorna url img', async() => {
        const url = await getImagen()

        expect(url.includes('https://')).toBe(true)
    });
});