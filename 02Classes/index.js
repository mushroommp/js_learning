class Vector {
    constructor(vecX){
        if(!Array.isArray(vecX)){
            throw new Error('Could not create vector')
        }

        this.vectorArray = vecX
    }

    isValid(newVec){
        return ((newVec instanceof Vector) && (this.vectorArray.length === newVec.vectorArray.length))
    }
    
    addVectors(newVec){
        if(!this.isValid(newVec)){
            console.log(" COULD NOT ADD BOTH VECTORS ")
            return;
        }
 
        // let ans = []

        // for(let i = 0; i < this.vectorArray.length; i++){
        //     ans[i] = this.vectorArray[i] + newVec.vectorArray[i]
        // }

        return this.vectorArray.map((value, index) => value + newVec.vectorArray[index])
    }

    subtractVectors(newVec){
        if(Array.isArray(this.vectorArray) && Array.isArray(newVec.vectorArray) && (this.vectorArray.length === newVec.vectorArray.length)){
            let ans = []

            for(let i = 0; i < this.vectorArray.length; i++){
                ans[i] = this.vectorArray[i] - newVec.vectorArray[i]
            }

            return ans
        }else{
            console.log(" COULD NOT SUBTRACT BOTH VECTORS ")
        }
    }

    dotVectors(newVec){
        if(Array.isArray(this.vectorArray) && Array.isArray(newVec.vectorArray) && (this.vectorArray.length === newVec.vectorArray.length)){
            let ans = 0

            for(let i = 0; i < this.vectorArray.length; i++){
                ans += this.vectorArray[i] * newVec.vectorArray[i]
            }

            return ans
        }else{
            console.log(" COULD NOT MULTIPLY BOTH VECTORS ")
        }
    }

    normVector(){
        let ans = 0

        for(let i = 0; i < this.vectorArray.length; i++){
            ans += this.vectorArray[i] * this.vectorArray[i]
        }

        return Math.sqrt(ans)
    }
}

var	a	=	new	Vector([1,	2,	3]);
var	b	=	new Vector([3, 4,	5]);
var	c	=	new	Vector([5,	6,	7,	8])
// var d = new Vector(1);

console.log(" Vector Add", a.addVectors(b))
console.log(" Vector Subtract", a.subtractVectors(b))
console.log(" Vector Dot", a.dotVectors(b))
console.log(" Vector Norm", a.normVector())
console.log(" Vector Add 2", a.addVectors(c))