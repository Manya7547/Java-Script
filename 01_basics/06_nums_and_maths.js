const score = 400;
console.log(score);

const balance = new Number(100);
console.log(balance);

console.log(balance.toString());
console.log(balance.toFixed(2)); //giving a precision of 2 values - application in ecommerce

const otherNumber = 298.7896;
console.log(otherNumber.toPrecision(3)); //precision starts before the decimal

//100,000,000
const money = 100000000;
console.log(money.toLocaleString());  //US system
console.log(money.toLocaleString('en-IN'));  //Indian std

//Max and min value
console.log(Number.MAX_VALUE);

// +++++++++++++ Maths +++++++++++++++++++++++++++++

console.log(Math);  //Math is an object 
console.log(Math.abs(-4)); //absolute value
console.log(Math.round(4.87)); //round off
console.log(Math.ceil(4.87))
console.log(Math.floor(4.87))
console.log(Math.floor(4.87))

console.log(Math.min(4, 3, 6, 8));
console.log(Math.max(4, 3, 6, 8));

//math lib mostly used when using random
console.log(Math.random()); // range is 0 to 1
console.log((Math.random()*10) + 1); //range 1 to 10 with decimals
console.log(Math.floor(Math.random()*10) + 1); //range 1 to 10 with no decimals - floor

const min = 10
const max = 20

//learn this formula!!!
console.log(Math.floor(Math.random()*(max - min + 1)) + min);