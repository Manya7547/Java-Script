// ES6 syntax 

// we don't need to write the keyword 'function' while defining a function inside a class
// class User {
//     constructor(username, email, password){
//         this.username = username;
//         this.email = email;
//         this.password = password;
//     }

//     encryptPassword(){
//         return `${this.password}abc`
//     }

//     changeUsername(){
//         return `${this.username.toUpperCase()}`
//     }
// }

// const userOne = new User("Manya", "manya@meta.com", "1234");
// console.log(userOne.encryptPassword());
// console.log(userOne.changeUsername());


// BEHIND THE SCENE, exactly what is happening??
// User class can be equivalent to user function, we're adding properties to it's prototype 

function User(username, email, password){
    this.username = username;
    this.email = email;
    this.password = password
}

User.prototype.encryptPassword = function(){
    return `${this.password}abc`
}
User.prototype.changeUsername = function(){
    return `${this.username.toUpperCase()}`
}


const userTwo = new User("tea", "tea@gmail.com", "123")

console.log(userTwo.encryptPassword());
console.log(userTwo.changeUsername());