/* reduce function in javaScript: execute a reducer function on each element of the array, 
resulting in a single output value. It's a powerful tool for transforming an array into a single 
value, such as a sum, product, or a more complex structure.

array.reduce(callback(accumulator, currentValue, index(optional), array(optional)), initialValue);

the parameters of the callback funciton are 
    1) accumulator - The accumulated result of the previous executions of the callback.
    2) currentValue - element value

initialValue - A value to use as the first argument to the first call of the callback. 
If no initialValue is supplied, the first element in the array will be used as the initial 
accumulator value, and currentValue will start from the second element.

Application - shopping cart - add all the prices for finding total 
*/

const numbers = [1, 2, 3];

const myTotal = numbers.reduce((acc, curr) => {
    //console.log(`accumulator: ${acc}, current: ${curr} `)
    return acc + curr;  //this result is passed to acc in the next execution
}, 0);  // first time the value of acc is 0 

//console.log(myTotal);  // gives the sum of numbers in an array


// arrow function syntax 
const result = numbers.reduce((acc, curr)=> acc+curr,0);
//console.log(result);


// Using Objects.
// given a a shopping cart array having objects. Give the sum of all the item's prices

const shoppingCart = [
    {
        item: "JS course",
        price: 2000
    },
    {
        item: "Java course",
        price: 4000
    },
    {
        item: "DSA course",
        price: 3000
    },
    {
        item: "c++ course",
        price: 1000
    },
    {
        item: "Python course",
        price: 3500
    }
];

const bill = shoppingCart.reduce((acc, item)=> acc + item.price, 0);  // here parameter is the object 
console.log(bill);