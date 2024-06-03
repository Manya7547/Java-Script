/* Immediately Invoked Function Expressions (IIFE)
As soon as you declare a function, you execute it. 
example - as soon as you start your application, you want to start the database connection.
example - when we don't want pollution from global scope - so we define another scope
Definition syntax- (function definition)();  
*/

// wrapping the function in () 
(function func(){  // this is a named iife
    console.log("DB CONNECTED");
})();

// using arrow function as iife. Also using a parameter and argument in the function.
((name) => console.log(`DB CONNECTED 2 ${name}`))('Manya');  // unnamed iife, parameterized iife

