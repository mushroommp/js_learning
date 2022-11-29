'use strict'

function myFunctionOne(a, b, c){
    console.log(arguments)
    console.log(myFunctionOne.length)
}

const myFunctionTwo = (...args) => {
    console.log(args)
    console.log(myFunctionTwo.length)
}

myFunctionOne(1, 2, 3, 4, 5) // 1, 2, 3
myFunctionOne(1) // 1

myFunctionTwo(1, 2, 3) // null
myFunctionTwo(1) // null