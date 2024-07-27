
// parameters for callback function inside promise- resolve, reject
// async tasks like DB calls (inject, recieve), cryptography related, network related
//
const promiseOne = new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("async task completed");
        resolve();  // we need to connect promise with then
    },1000);
})

// we need to consume the promise 
// .then() has direct connection with resolve - it specifies what should happen once a promise is resolved
promiseOne.then(function(){
    console.log("promise consumed");
})

// run this using node filename

// Instead of doing this in parts we can do it together 

new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Async Task 2");
        resolve();
    }, 1000)
}).then(function(){
    console.log("Async 2 is resolved");
});


// promise 3 - passing data in resolve function so it can be used in then() callback

const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({username:'Manya', email:'manya7547@gmail.com'})
    },1000)
});

// we will receive the data from resolve while consuming the promise 
promiseThree.then(function(user){
    console.log(user.username);
    console.log(user.email);
})


// promise 4 - using then(), catch() and finally()

const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true;
        if(!error){
            resolve({username:"Manya", pass:"123"});
        }
        else{
            reject('ERROR: something went wrong');
        }
    },1000);    
})

// when async is resolved, the callback inside then() will be executed 
// when async is rejected, the callback inside catch() will be execute
// the callback inside finally() will be executed everytime by default in both cases

promiseFour
.then(function(user){
    console.log(user);
    return user.username; // this username is now passed to the chained then()'s callback function
})
.then((username) => {
    console.log(username);
})
.catch(function(error){
    console.log(error);
})
.finally(function(){
    console.log("promise is either resolved or rejected")
});


// promise 5 - promise can be handled using async() and await() also. In this way we dont handle catch very gracefully.
// Using async and await is a modern way to handle promises in JavaScript.

const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true;
        if(!error){
            resolve({username:'JS',password:'lalala'});
        }
        else{
            reject("ERROR: JS went wrong");
        }
    },1000);
});

// we use the await keyword inside the async function. We need to use try catch block inside to gracefully handle errors
async function consumePromiseFive(){
    try {
        const response = await promiseFive;
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}

consumePromiseFive();


// fetch() is used to make network requests to retrieve resources.It returns a Promise that resolves to the Response object representing the response to the request. 
// It is widely used for making API calls and fetching data from servers.
// it is a network request, will take time, so we add await

// async function getAllUsers(){
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users');
//         const data = await response.json(); // conversion  also takes time
//         console.log(data);
        
//     } catch (error) {
//         console.log("E: ", error);
//     }
    
// }

// getAllUsers();


// promise 6 - using fetch().then().then().catch() to get all users. since fetch() returns a promise we can chain then and catch and also finally after it
// why this code's output if displayed first???

fetch('https://jsonplaceholder.typicode.com/users')
.then((response)=>{
    return response.json();
})
.then((data)=>{
    console.log(data);
})
.catch((error)=>{
    console.log(error);
}); 





