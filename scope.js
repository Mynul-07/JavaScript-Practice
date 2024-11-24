// function one() {
//     const username = 'MYNUL'

//     function two() {
//         const website = 'chrome'
//         console.log(username);
//     }

//     //console.log(website);

//     //two()
//     two()
// }

// //one()
// one()


if (true) {
    const username = 'Mynul'

    if (username === 'Mynul') {
        const website = ' youtube'
        console.log(username + website)
    }
    //console.log(website)
}

//console.log(username)


console.log(addOne(5))
function addOne(num) {
    return num + 1
}


//+++++++++++ Hoisting +++++++++++++

//addTwo(5)  
//I can't access anything before declaration
const addTwo = function (num) {
    return num + 2
}

addTwo(5)