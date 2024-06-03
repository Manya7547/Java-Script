function addTwoNum(num1, num2) {
    return num1+num2;
}

const result = addTwoNum(3, 4);
//console.log("Result: ", result);

// function loginUserMessage(username){
//     return `${username} just logged in`;
// }

//when no value is passed then it returns undefined. So we check if it is undefined or not 
// const str = loginUserMessage("Manya Sohal");
// console.log(str);

// function loginUserMessage(username){
//     if(!username){  //undefine is a false value so it can be checked like this (username == undefined)
//         console.log('Please enter a username');
//         return;
//     }
//     return `${username} just logged in`;
// }
// const str = loginUserMessage("");

// console.log(str);

//we can also add a default value for a parameter, if we dont pass an argument then 
//the default value will be used otherwise the passed value will ve overwritten

function loginUserMessage(username="Manya"){
    if(!username){  //undefine is a false value so it can be checked like this (username == undefined)
        console.log('Please enter a username');
        return;
    }
    return `${username} just logged in`;
}



// application in ecommerce website 
// We want to return a number given multiple args and single parameter
// We will use the rest operator ... (just like spread operator )
// rest operator bundles the multiple args into the parameter

function calculateCartPrice(...num1) {
    return num1; //will be an array of all the numbers 
}

console.log(calculateCartPrice(100, 200, 70)); 


// passing object in a function

const user = {
    username: "Manya",
    age: 24
};

function handleObjects(anyobject){
    return `the name of user is ${anyobject.username} and her/his age is ${anyobject.age}`;
}

console.log(handleObjects(user)); // we can directly send object declaration as args


// passing an array inside function

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));  // we can pass an array inside a variable 
console.log(returnSecondValue([200, 400, 500, 1000]));  //we can also pass is directly 

