// Interview Question : 

console.log(Math.PI); 
Math.PI = 4;
console.log(Math.PI); // can't be overwritted

// getOwnPropertyDescriptor is a method in JavaScript is used to return a property descriptor for a specific property on an object. 
// parameters: obj- The object on which to look for the property and prop - The name or Symbol of the property to get the descriptor for.

const descriptor = Object.getOwnPropertyDescriptor(Math, "PI");
console.log(descriptor);