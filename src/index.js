import { getHeroById } from "./bases/08-imports";

const getHeroByIdAsync = (id) =>{
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const hero = getHeroById(id)
            resolve(hero)
            reject('Cant find hero')
        }, 1000);
    })
}

getHeroByIdAsync(3)
    .then((hero) => console.log('Hero:', hero.name))
    .catch(err => console.warn(err))