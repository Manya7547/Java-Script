/*
Falsy values are values that are considered false when evaluated in a boolean context. 
JavaScript has a specific set of values that are falsy: false, 0, -0, 0n (BigInt zero), "", null, undefined
NaN (Not-a-Number) 

Truthy Values - Any value that is not falsy is considered truthy. This includes:
true, Any non-zero number (e.g., 1, -1, 3.14), Any non-empty string (e.g., "hello", "false", "0")
Objects (e.g., {}, [], function() {}), Any non-zero BigInt (e.g., 1n, -1n). Special values like Infinity and -Infinity
*/

const userEmail = []  //empty array - falsy

if (userEmail) {
    console.log("Got user email");
} else {
    console.log("Don't have user email");
}


// if (userEmail.length === 0) {
//     console.log("Array is empty");
// }

// how to detect if an object is empty or not
const emptyObj = {} // falsy

if (Object.keys(emptyObj).length === 0) {
    console.log("Object is empty");
}

// Nullish Coalescing Operator (??): - returns the right-hand operand when 
// the left-hand operand is null or undefined, and otherwise returns the left-hand operand. This operator is useful for providing default values in cases where a variable might be null or undefined.

// let val1;
// val1 = 5 ?? 10  // 5 
// val1 = null ?? 10  //10
// val1 = undefined ?? 15  //15
// val1 = null ?? 10 ?? 20  //10

// console.log(val1);

// Terniary Operator - if else 

// condition ? true : false

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80")