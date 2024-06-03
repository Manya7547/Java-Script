// .map() - It allows you to apply a function to each element of an array and create a new array with 
// the results, all without modifying the original array. This makes it ideal for scenarios where 
// you need to transform data, such as converting values, extracting properties from objects, or
// generating new arrays based on existing data.

const myNums = [1, 2, 3, 4, 5, 6, 7, 7, 8, 10];

// const newArr = myNums.map((item)=> item+10 );  // adds 10 to each element. here return is not a boolean (test condition)
// console.log(newArr);


// Chaining - multiple methods 
const newArr = myNums
                .map((item) => item+10)   
                .map((item) => item+1)  // the result from prev map will be provided to this map
                .map((item) => item*2);

console.log(newArr);

