function rAverageFunction(){
    let currValue = 0
    let count = 0
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

let newAvg = rAverageFunction()
console.log(newAvg(1))
console.log(newAvg(2))
console.log(newAvg(3))
