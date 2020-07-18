// 1. set up people, and console.log people

const people = ['yoshi', 'melissa', 'msyelf', 'Blake']
// 6. create a new const called ages.
const ages = [3, 31, 33, 32]

// console.log(people)

// 4. set an export with 'hello' as its value. then run node modules
// 5. replace 'hello' with the people variable.
// module.exports = people;

// 7. now we need to export multiple things, lets use and object for our exports

module.exports = {
    people: people,
    ages: ages
}

// 7. continued, we could also esport {people, ages}

