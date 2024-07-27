// Functions are objects and can have properties just like any other object.

function multiplyByFive(num){
    return num * 5;
}

// user defined property '.power' added to the function. Function behaves like an object here. 
multiplyByFive.power = 2;

console.log(multiplyByFive(7));
console.log(multiplyByFive.power);
console.log(multiplyByFive.prototype); // context of the method

// this.username -> current context
function createUser(username, score){
    this.username = username;
    this.score = score;
}

// adding my own functionality into prototype of createUser. 

// Adding custom property increment is injected inside the prototype.
createUser.prototype.increment = function(){
    this.score++;
}

// Adding custom property printMe is injected inside the prototype.
createUser.prototype.printMe = function(){
    console.log(`${this.username}'s score is ${this.score}`);
}

// new keyword is important 
const user1 = new createUser("KRSNA",3);
const user2 = new createUser("Encore",8);

// we don't need to write prototype while calling the function
user1.increment();
user1.printMe();

user2.increment();
user2.printMe();

/*

Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.

*/


