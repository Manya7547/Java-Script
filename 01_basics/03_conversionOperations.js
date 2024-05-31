/*
converting string, boolean, null, undefined into Number
*/

// let score = false;
// let scoreInNumber = Number(score);
// console.log(typeof scoreInNumber); //still shows the datatype as number 
// console.log(scoreInNumber); //shows 1 for true and 0 for false

/*
Notes: converting each into a Number

"33" => 33
"33abc" => NaN
true => 1
false => 0
undefined => Nan
null => 0
*/


//converting number, string, null, undefined  into boolean

// let loggedIn = undefined;
// console.log(typeof loggedIn);
// let isLoggedIn = Boolean(loggedIn);
// console.log(typeof isLoggedIn);
// console.log(isLoggedIn); 

/*
0 => false
any number => true
"manya" => true
"" => false
null => false
undefined => false
*/


//converting number, boolean, null, undefined  into string

// let someVar = undefined;
// console.log(typeof someVar);
// let changed = String(someVar);
// console.log(typeof changed);
// console.log(changed); 

/*
12 => "12"
true => "true"
null => "null"
undefined = "undefined"
*/

/******************************* Operations ******************************/

// let x = 9;
// let negativex = -x;
// console.log(negativex);
// console.log(2+2);
// console.log(2-2);
// console.log(2/2);
// console.log(2%2);


// string operations 

str1 = "Hello";
str2 = "Manya";
console.log(str1 + str2);

console.log("1" + 2 + 2); // 122
console.log(1 + 2 + "2"); // 32 why?

console.log(+true); //1
console.log(+""); //0


