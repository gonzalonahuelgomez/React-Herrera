import '@testing-library/jest-dom'
import { getHeroeById, getHeroesByOwner } from '../../base/08-imp-exp'
import heroes from '../../data/heroes'

describe('pruebas 08-imp-exp', () => { 
   test('should return a hero by id', () => { 
        const id = 1
        const hero = getHeroeById(id)

        const heroData = heroes.find(hero => hero.id === id)

        expect(typeof hero).toBe('object')
        expect(hero).toEqual(heroData)
    }) 

    test('should return an undefined if hero dont exist', () => { 
        const id = 10
        const hero = getHeroeById(id)

        const heroData = heroes.find(hero => hero.id === id)

        expect(typeof hero).toBe('undefined')
        expect(hero).toBe(undefined)
    }) 

    test('should return a hero by owner == DC', () => { 
        const owner = 'DC'
        const hero = getHeroesByOwner(owner)

        const heroData = heroes.filter(hero => hero.owner === owner)

        expect(hero).toEqual(heroData)
    }) 

    test('should return a hero by owner == Marvel', () => { 
        const owner = 'Marvel'
        const hero = getHeroesByOwner(owner)

        const heroData = heroes.filter(hero => hero.owner === owner)

        expect(hero.length).toBe(2)
        expect(hero.length).toBe(heroData.length)
    }) 
 })