// Interview Question : Can you change the value of Math.PI? Can you overwrite it?

// console.log(Math.PI); 
// Math.PI = 4;
// console.log(Math.PI); // can't be overwritted

// getOwnPropertyDescriptor is a method in JavaScript is used to return a property descriptor for a specific property on an object. 
// parameters: obj- The object on which to look for the property and prop - The name or Symbol of the property to get the descriptor for in quotes.

// const descriptor = Object.getOwnPropertyDescriptor(Math, "PI");
// console.log(descriptor);
// This is descriptor output:
/*
{
  value: 3.141592653589793,
  writable: false,
  enumerable: false, -> allowed to enumerate/ iterate over the object
  configurable: false
}
*/

const obj1 = {
    username: "Manya Sohal",
    city: "SF",
    isAvailable: true
}

console.log(obj1);

// const d = Object.getOwnPropertyDescriptor(obj1, "username");
// console.log(d);

// we can define properties as well

Object.defineProperty(obj1,'username',{
    value: 'xyz',
    writable: false,
    enumerable: false,
    configurable: false
})

console.log(Object.getOwnPropertyDescriptor(obj1, "username"));

// iterate over the object
// can't directly iterate over object - we need to convert it into Object.entries(obj1)
for(let [key, value] of Object.entries(obj1)){
    if(typeof value !== 'function'){  // so that it only prints keys and values and not functions
        console.log(`${key}: ${value}`);
    }
}

// enumerable peroperty for username is set to false so when I apply a loop it won't show username as we can't iterate to it.
// it is no longer a part of the loop. 