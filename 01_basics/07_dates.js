// Date objects encapsulate an integral number that represents milliseconds since the 
// midnight at the beginning of January 1, 1970, UTC (the epoch).

// let myDate = new Date();
// console.log(myDate.toString());
// console.log(myDate.getTime());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());

//we can pass value to the date constructor
// let newDate = new Date(2024, 0, 23); //can also give time in parameter
// console.log(newDate.toDateString());

// let newDate = new Date("2024-03-09"); // YYYY-MM-DD
// console.log(newDate.toDateString());

// let newDate = new Date("09-03-2024"); // MM-DD-YYYY
// console.log(newDate.toDateString());
// console.log(newDate.getTime()); //miliseconds - Application - hotel booking timings compare


//Timestamps:
// let myTimeStap = Date.now();
// console.log(myTimeStap); //gives a long value (miliseconds)
// console.log(Math.floor(myTimeStap/1000)); //to get value in seconds
 

//customizing the date representation in the object 
let newdate = Date.now();
console.log(newdate.toLocaleString('default',{
    weekday: "long",
}));

/* Notes:
months start from 0 
day starts from 1
*/