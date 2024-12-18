// const {name1,name2,myFunc} = require('./app-module')

// console.log(name1)
// console.log(name2)
// console.log(myFunc("aleqsandre"))



// console.log(path)



const path = require("path")
const {readFileSync,writeFileSync} = require("fs")

const first = path.join("./folder","subfolder","first.txt")
const second = path.join("./folder","subfolder","second.txt")



const firsttext = readFileSync(first,"utf8")
const secondtext = readFileSync(second,"utf8")

console.log(firsttext)
console.log(secondtext)

// console.log(first)
// console.log(second)