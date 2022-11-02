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