let currValue = 0
let count = 0

function rAverageFunction(){
    return function average(val){
        count++
        if(count === 1){
            return currValue = val
        }else{
            return (currValue + val) / 2
        }
    }
}

let rAvg = rAverageFunction()
console.log(rAvg(10))
console.log(rAvg(11))
console.log(rAvg(12))

function sum(a, b){
    return a + b
    // return args.reduce((a,b) => a + b, 0)
}

function curryFunction(func){
    return function curried(args){
        
    }
}

let curriedSum = curryFunction(sum)

console.log(" SUM", sum(2,3))
console.log(" SUM", curriedSum(2)(3))
// console.log(" SUM", curriedSum(1)(2)(3)(4))