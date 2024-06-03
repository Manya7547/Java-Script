// let, var, const 
// inside { } there is block scope. Outside it is global scope  

if(true){  //block scope
    let a = 10;
    const b = 20;
    var c = 3;  
}


// console.log(a);  // not defined
// console.log(b);  // not defined
// console.log(c);  // var is defined out of scope so that is why it is not preferred


// nested scope in nested function
// what is closure? prereq - DOM


function one(){
    const username = "manya";

    function two(){
        const website = "youtube";
        console.log(username);  //username can be accessed from this scope 
    }
    //console.log(website);  //website cannot be accessed from this scope
    two();
}

//one();

// closure - child function can access the parent function variables but parent function cannot access child functions variable 
// a child can take ice cream from the parent but parent cannot snatch an ice cream from a child 

if(true){
    const username = "manya";
    if(username=="manya"){
        const website = "youtube";
        // console.log(username + website); // this can be accessed
    }
    //console.log(website); // cannot be accessed 
}

//console.log(username);  // cannot be accessed


console.log(addOne(5));  // I can call the below function even before i declare it. 

function addOne(num){
    return num + 1;
}


// but if I decalre a function using an expression where i store the function in a variable, I cannot call it before declaration

//console.log(addTwo(7));  // cannot be accessed 

const addTwo = function(num){
    return num + 2;
}
console.log(addTwo(7));  // only be accessed after declaration






