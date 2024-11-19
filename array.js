const myArr = [0, 1, 2, 3, 4]
// const myHeroes = ['superman', 'batman', 'spiderman']

// const myArr2 = new Array(1, 2, 3, 4, 5)
// console.log(myArr2[0])
// console.log(myHeroes[2])

// myArr.push(5)
//console.log(myArr)

// myArr.unshift(9)
// myArr.shift()

// console.log(myArr)

console.log("A ", myArr)

const myn1 = myArr.slice(1, 3)
console.log("B ", myArr)
console.log(myn1)

const myn2 = myArr.splice(1, 3)
console.log("C ", myArr) // deleted from the original array to [1, 2, 3]
console.log(myn2)