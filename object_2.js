// const tinderUser = new Object() //single turn object
const tinderUser2 = {} // non single

tinderUser2.id = "201-15-13953"
tinderUser2.name = 'Mynul'
tinderUser2.age = '24'
tinderUser2.isLoggedIn = false

// console.log(tinderUser2)
const regularUser = {
    email : 'ahmedmynul18@gmail.com',
    fullname : {
        userfullname : {
            firstname : 'Mynul',
            lastname : 'Ahasan'
        }
    }
}
// console.log(regularUser.fullname.userfullname.firstname)

const obj1 = {
    1 : 'a',
    2 : 'b'
}
const obj2 = {
    3 : 'a',
    4 : 'b'
}

const obj4 = {
    5 : 'A',
    6 : 'B'
}

//const obj3 = { obj1, obj2}

// const obj3 = Object.assign({},obj1,obj2,obj4) // {} = target, obj1,obj2,obj4 = source

const obj3 = {...obj1, ...obj2, ...obj4}

//console.log(obj3)

//console.log(tinderUser2)

// console.log(Object.keys(tinderUser2))
// console.log(Object.values(tinderUser2))

//console.log(Object.entries(tinderUser2))

//console.log(tinderUser2.hasOwnProperty('email'))

const course = {
    courseName: 'Js',
    courseInstructor:'Mynul'
}

const {courseInstructor} = course

//console.log(courseInstructor)

const {courseInstructor: instructor} = course

console.log(instructor)