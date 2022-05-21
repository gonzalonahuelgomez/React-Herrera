import heroes from '../data/heroes'

// console.log(heroes)

const getHeroById = (id) => 
    heroes.find(hero => hero.id === id)

// console.log(getHeroById(2))

const getHeroesByOwner = (owner) => 
    heroes.filter(heroes => heroes.owner === owner)

// console.log(getHeroesByOwner('DC'))
// console.log(getHeroesByOwner('Marvel'))


export {
    getHeroById,
    getHeroesByOwner
}