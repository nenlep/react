// Object destructuring
// const person = {
//   name: 'boy',
//   age: 26,
//   location: {
//     city: 'Philadelphia',
//     temp: 30
//   }
// }
// const {name: firstName = 'girl', age} = person
// // const name = person.name
// // const age = person.age
// console.log(`${firstName} is ${age} years old`)

// const {city, temp: temperature} = person.location
// if(city && temperature){
//   console.log(`its ${temperature} degrees in ${city}`)
// }

// const book = {
//   title: 'Ego is the enemy',
//   author: 'Ryan Holiday',
//   publisher: {
//     name: 'Penguin'
//   }
// }
// const {name: publisherName = 'barnes'} = book.publisher
// console.log(publisherName)

// ===============================================
// Array destructuring
const address = ['1299 S Juniper street', 'Philadelphia', 'Pennsylvania', '12345']

const [, city, state, zip] = address

console.log(`You are in ${city} ${state}`)

const item = ['Coffee (hot)', '$2.00', '$2.80', '$2.75']

const [product, small, medium, large] = item
console.log(`A medium ${product} costs ${large}.`)