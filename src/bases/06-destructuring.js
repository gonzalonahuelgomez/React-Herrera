//desestructuracion de objetos
const person = {
    name: 'Tony',
    age: 45,
    key: 'Ironman',
    latlng: {
        lat: 14.254,
        lng: -12.3232
    }
}

console.log(person.name, person.age, person.key)

const {name, age, key, latlng: {lat, lng}} = person

console.log(name, age, key, lat, lng)

// const returnPerson = (user) => console.log(user)
const returnPersonName = ({name = 'Pepper'}) => console.log(name)

returnPersonName(person)

const person2 = {
    age: 45,
    key: 'Ironman'
}

returnPersonName(person2)

