// for ... of - iterate over iterable objects, such as arrays, strings, maps, sets, and more.
/* 
syntax :
    for (const element of iterable) {
        // Use element
    }
*/

const arr = [1, 2, 3, 4, 5];

for (const num of arr) {
    //console.log(num);
}


// string - seperates into characters 
const greeting = "Hello good morning";

for(const greet of greeting){
    //console.log(` haha ${greet}`);
}


// iterating through a map. Map hold key, value pairs

const map = new Map();
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")
console.log(map);

// [key, value] is wil be the iterator
// if we use only key then it will return only keys
for (const [key, value] of map) {
    //console.log(key, ':-', value);
}

// iterating through an object??? Object is not iterable using for of. 

const myObject = {
    game1: 'NFS',
    game2: 'Spiderman'
}

for (const [key, value] of myObject) {
    console.log(key, ':-', value);
    
}
