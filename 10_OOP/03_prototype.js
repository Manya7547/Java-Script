let myHeros = ["thor", "loki"];

let heroPower = {
    thor: "Hammer",
    loki: "Shape Shifting",

    getThorPower: function(){
        console.log(`Thor's power is ${this.thor} `);
    }
};

// if I inject a custom function in Object's prototype, will myHeros array be able to call it? Yes!
// When you add a function to Object.prototype, all objects, including arrays (since arrays are objects), can access this function.
Object.prototype.customOne = function(){
    console.log(`Hey! customOne is present in all  objects`);
}
myHeros.customOne(); // shows the message 

// if I inject a custome function in Array's prototype, will my object heroPower be able to call this function? No 
// When you add a function to Array.prototype, only arrays can access this function because it specifically extends the Array object prototype.

Array.prototype.customTwo = function(){
    console.log(`Hey this is custom two`);
}

myHeros.customTwo(); // runs 
// heroPower.customTwo(); // error 


// Function, String, Array, Number, Obj ---> Object ---> null 


// Inheritance 

const User = {
    name: "xyz"
}

const Teacher = {
    makeVideo : true
}

const TeachingSupport = {
    isAvailable: false
}


// TSSupport will inherit properties from TeachingSupport
const TASupport = {
    makeAssignment : 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport
}

// When an object inherits properties and methods from another object, it does so via its prototype. 
// The __proto__ property is an internal link that points to the object's prototype.
// This approach is a little outdated!!!

Teacher.__proto__ = User; // can also define outside the object



// Another way to inherit an object's property. Modern Approach 

Object.setPrototypeOf(TeachingSupport, Teacher); 


// Define a custom property/method .truelength() that returns the actual length of the string not counting the spaces.
// we define this function and inject it in String's prototype so that all strings cann access this method

let anotherUsername = "seedhemaut   ";
String.prototype.truelength = function(){
    console.log(`${this}`);  // gives the username value. Current context's value 
    console.log(`True length is ${this.trim().length}`);
}

anotherUsername.truelength();
"Manya   ".truelength();
"Sohal ".truelength();

