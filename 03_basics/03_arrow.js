//this keyword - used for current context - the scope of the object

const user = {
    username: "Manya",
    price: 999,
    welcomeMessage: function() {   
        console.log(`${this.username} , welcome to website`);
        console.log(this); // current variables
    }
}

// user.welcomeMessage();
// user.username = "Sam"; // we changed the context in the object 
// user.welcomeMessage();

//console.log(this); // current context is an empty object. But when we run this in browser the output is Window

// function func(){
//     let username = "Manya Sohal";
//     console.log(this.username);  // shows undefined when we access this.username but when we just use this it shows the object properties etc
// }

// func();


// This is an arrow function
// const func = () => {
//     let username = "Manya Sohal";
//     console.log(this);  
// }
// func();  //shows empty object {} 


// const addTwo = (num1, num2) => { // using explicit return 
//     return num1+num2;
// }

//console.log(addTwo(6,7));

 
//Implicit return - no need to use curly braces and return keyword

const addThree = (num1) => num1 + 3;  
//console.log(addThree(6));

// const addTwo = (num1, num2) => ( num1 + num2 )  // can be wrapped in parenthesis 
// but if you use curly braces then you NEED to use the return keyword


// returning an object 
const addTwo = (num1, num2) => ({username: "Manya"})
console.log(addTwo(3, 4))

const myArray = [2, 5, 3, 7, 8]

// myArray.forEach(()=>{}); arrow functions are used a parameter inside loop functions 