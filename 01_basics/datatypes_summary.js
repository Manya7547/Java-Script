//  Two types - Primitive and non Primitive (Reference)

// 1) Primitive 
//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3  //is a number

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123') //unique
const anotherId = Symbol('123') 

console.log(id === anotherId);  //return values are diff for both so false

// const bigNumber = 3456543576654356754n //scientific data. n in the end.



// 2) Reference (Non primitive)
// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];

// key value pairs within curly braces is an object 
let myObj = {
    name: "hitesh",
    age: 22,
}

// function can be treated like a variable in JS 
const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof myFunction); //datatype is a function

// https://262.ecma-international.org/5.1/#sec-11.4.3

/* 
Is JS statically language or dynamically typed language? 
-> JavaScript is a dynamically typed language.
*/

/*
2 memories - stack and heap
- primitive types stored in stack. 
- non-primitive types stored in heap
*/

let name1 = "Manya Sohal" 
let name2 = name1;  //a copy of name1 is assigned to name2
name2 = "Manan Khaneja" //here the copy is changed not the actual value
console.log(name1);
console.log(name2); 


//this object is stored in heap
let user1 = {
    email: "msohal@scu.edu",
    upi:"msohal"
};

let user2 = user1; //here actual reference is given to user2 
user2.email = "manya@gmail";  //so it will be changed for both objects
console.log(user1.email);
console.log(user2.email);
