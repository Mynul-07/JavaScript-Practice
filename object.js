const mySym = Symbol('key1') // At first defining the symbol

const jsUser = {
    name: "Mynul",
    'full name': 'Mynul Ahsan',
    [mySym]: "key1",    // when we use symbol, then we have to write the key inside [] this
    age : 24,
    location: "Dhaka",
    email: "mynul@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ['Monday', 'Saturday']
}

// console.log(jsUser.name)
// console.log(jsUser['email'])
// console.log(jsUser["full name"])
// console.log(jsUser[mySym])

// jsUser.age = 25
// console.log(jsUser['age'])

// jsUser.email = 'mynulahsan@yahoo.com'
// console.log(jsUser['email'])

// Object.freeze(jsUser)

// jsUser.email = 'mynulahsan344@gmail.com'
// console.log(jsUser['email'])


jsUser.greeting = function(){
    console.log('Hello JS user')
}

console.log(jsUser.greeting())

jsUser.greetingTwo = function(){
    console.log(`Hello Js User, ${this["full name"]}`)
}
console.log(jsUser.greetingTwo())