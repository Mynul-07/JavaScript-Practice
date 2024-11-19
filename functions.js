// function addTwoNumbers(num1, num2){  //parameters
//     console.log(num1 + num2)
// }

function addTwoNumbers(num1, num2){
    // let result = num1 + num2
    // console.log('Mynul')
    // return result
    return num1 + num2
    
}


const result = addTwoNumbers(2, 6) // arguments
//console.log('Result is: ', result)


function loginUserMessage(username){
    if(username === undefined){
        console.log('Please enter a username')
        return
    }
    return `${username} just logged in`
}

console.log(loginUserMessage('Mynul'))


function calculateCartPrice(val1, val2, val3, ...num){
    return num
}

console.log(calculateCartPrice(100, 200, 300, 400))

const user = {
    username: 'Mynul',
    price: 199
}

function handleObject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`)
}

//handleObject(user)

handleObject({
    username: 'sam',
    price:399
})

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[2]
}

//console.log(returnSecondValue(myNewArray))
console.log(returnSecondValue([200, 100, 300, 400]))