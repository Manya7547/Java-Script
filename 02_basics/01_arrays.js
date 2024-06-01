// arrays are mutable
// can have other datatypes

 const myArr = [0,1,2,3,4,5];  
// const myHeors = ["shaktiman", "naagraj"]
// const myArr2 = new Array(1, 2, 3, 4)
// console.log(myArr[1]);

//array methods

myArr.push(6);  //value is added 
// console.log(myArr);

myArr.pop(); //last value gets deleted
// console.log(myArr);


//  unshift method inserts at the 0 index - shifts all elements to right
myArr.unshift(6);
// console.log(myArr);

// shift method removes the first element from an array and returns it.
myArr.shift();
// console.log(myArr);

// .includes(element) - returs true/false
// indexOf(element) - returns index 

// .join() - converts the array into a comma seperated string of elements

// const newArr = myArr.join();
// console.log(newArr);
// console.log(typeof newArr);

// slice and splice 
// slice - returns a subarray of a range (start, end(exclusive)), does not manipulate the array
// splice - returns a subarray of range (start, end(inclusive)), manipulates the array by removing the returned subarray from the original array

console.log("A ", myArr);

const myn1 = myArr.slice(1, 3)

console.log(myn1);
console.log("B ", myArr);


const myn2 = myArr.splice(1, 3)
console.log("C ", myArr);
console.log(myn2);