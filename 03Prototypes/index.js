
function Person	(name,	age) {
    this.name	=	name;
    this.age	=	age;
}
Person.prototype.introduce	=	function(){
    return	'My	name	is	'	+	this.name	+	'	and	I	am	'	+	this.age;
};

var	john = new Person('John', 30);
var	jack = new Person('Jack', 40);
// console.log(	john.introduce()	);	//	My	name	is	John	and	I	am	30
// console.log(	john	);	//	My	name	is	John	and	I	am	30
// console.log(	jack.introduce()	);	//	My	name	is	Jack	and	I	am	40

const person = {
    name: 'Michelle',
    age: 30
}



function Bird (color) {
    this.color = color.toUpperCase()
}
Bird.prototype.fly = function(){
    return 'My' + this.color + 'bird is flying';
}

function Dog (name, color) {
    Bird.call(this, color)
    this.name = name
}
Dog.prototype = Object.create(Bird.prototype)
Dog.prototype.constructor = Dog
Dog.prototype.bark = function(){
    return 'My' + this.name + 'is barking';
}

const myDog = new Dog('Wolfie', 'Brown')
console.log(" Dog flying ", myDog)

// class Dog extends Bird {
//     constructor(){
//         super(color)
//     }
// }


