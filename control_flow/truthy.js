// const userEmail = 'mynul@gmail.com'

// if (userEmail) {
//     console.log('Got User mail');
// } else {
//     console.log("Don't have user mail");

// }

// const userEmail = []

// if (userEmail.length === 0) {
//     console.log('Array is empty');
// }

// //how to check Empty  obj
// const emptyObj = {}
// if (Object.keys(emptyObj).length === 0) {
//     console.log('Object is empty');
// }

// === it checks value with type
// == but it checks only value


//Ternary Operator

//Condition ? true : false

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log('less than 80') : console.log('more than 80')


// Nullish Coalescing Operator (??): null undefined

let val1;
//val1 = 5 ?? 10
//val1 = null ?? 10
//val1 = undefined ?? 15
val1 = null ?? 10 ?? 20


console.log(val1)
