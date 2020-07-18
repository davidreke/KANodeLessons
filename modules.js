// 2. create the const XYZ and use require on ./people to set the value to xyz
// const xyz = require('./people');
// 3. then console.log(xyz)
const {people, ages} = require('./people');

// 8. lets use dot notation to export xyz.ages and xyz.people
// console.log(xyz.ages);
// note you can't console.log(people)
// console.log(people)

// 9. Now we will use destructuring to get people and ages from the require method
console.log(people, ages)

// 10 now lets require a built in node module and console.log it. OS stands for operating sytem.

const os = require('os');
// console.log(os);

// 11. now lets console.log os.platform() and os.homedir()
console.log(os.platform(), os.homedir());