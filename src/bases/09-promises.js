import { getHeroById } from "./bases/08-imports";

const getHeroByIdAsync = (id) =>{
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const hero = getHeroById(id)
            hero ? resolve(hero) : reject('Cant find hero')
        }, 1000)     
    })
}

getHeroByIdAsync(1)
    // .then((hero) => console.log('Hero:', hero.name))
    .then(console.log)
    // .catch(err => console.warn(err))
    .catch(console.warn)