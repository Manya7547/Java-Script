/*
2 ways to create objects - literal and constructor 
singleton object - only one object is created of its type no ther instances can be made. When object it is made out of constructor
when object is made out of a literal then object is not singleton 
*/


/******************* OBJECT LITERALS *******************/ 

// Q) create a symbol and add it in an object 

const mysym = Symbol("key1");


const JsUser = {
    name: "Manya", //by default name is processed as "name" string
    "fullname": "Manya Sohal", //is can only be accessed using ["fullname"] not by dot .
    age: 18,
    [mysym]: "mykey1",  //this is the syntax for declaring a symbol 
    email: "manya@gmail.com",
    isLoggedIn: true,
    lastLoginDays: ['Monday', 'Tuesday']
};

// console.log(JsUser["email"]); 
// console.log(JsUser.email);
// console.log(JsUser["fullname"]); 
// console.log(JsUser["mysym"]); 
// console.log(JsUser[mysym]); 


//modifying the object key value
JsUser.email = "manya@chatgpt.com"
//Object.freeze(JsUser)  //locking the object so that it cannot be changed 
JsUser.email = "hitesh@microsoft.com"
//console.log(JsUser);  //change was not made

JsUser.greeting = function(){
    console.log("Hello user");
}

JsUser.greeting();

//accessing a key value inside the object 
JsUser.greetingTwo = function(){
    console.log(`hey goodmorning ${JsUser["fullname"]}`);  //we can use ${this.name} also 
}

JsUser.greetingTwo();