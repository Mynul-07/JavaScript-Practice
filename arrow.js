// defining a object
const user = {
    username: 'mynul',
    price: '99',

    welcomeMessage: function () {
        console.log(`${this.username}, welcome to website`); // if I want to access current context/values then we have to use `${this.__}`
        //console.log(this);
    }

}

// user.welcomeMessage()
// user.username = 'Mynul Ahsan'
// user.welcomeMessage()


// we can't use (this) inside the function 
// function chai() {
//     let username = 'mynul'
//     console.log(this.username);
// }

// chai()

// const chai = function () {
//     let username = 'mynul'
//     console.log(this.username);
// }

// chai()


//arrow function
// const chai = () => {
//     let username = 'mynul'
//     console.log(this.username);
// }

// chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// console.log(addTwo(2, 3))

//implicit return
// const addTwo = (num1, num2) => num1 + num2
// console.log(addTwo(2, 3))

// using object
//when we returning object we have to use inside of 1st bracket
const addTwo = (num1, num2) => ({ username: 'mynul' })
console.log(addTwo(2, 3))