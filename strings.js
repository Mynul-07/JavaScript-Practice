const { max, min } = require("./nums_and_math");

const name = "Mynul"
let repoCount = 50;


//console.log(`Hello My name is ${name} and repo count is ${repoCount}`)


console.log(name.charAt(2))
console.log(name.indexOf('l'))

const newString = name.substring(0, 3)
console.log(newString)

const url = "https://mynul%20ahsan"

console.log(url.replace('%20', '-'));
console.log(Math.floor(Math.random() * (max - min + 1)) + min)
