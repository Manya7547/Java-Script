// object literal - base unit in JS, concise syntax

const user = {
    username: "Manya",
    loginCount: 8,
    signedIn: true,
    getUserDetails: function(){
        console.log("got user details from database");
    }
};

console.log(user.username);
console.log(user.getUserDetails());

// Constructor methods - creates an instance by calling a constructor - inheritance  

function User(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;
    return this;
}

// const userOne = User("Anandita",12,true);

// console.log(userOne); // prints out the global object plus our values 

// const userTwo = User("Aishwarya", 11, false);

// console.log(userOne); // values in userOne are overridden by userTwo values. This happens when we don't use the new keyword while creating an instance.


// we should create an instance using new keyword while calling a constructor. 
// This creates an empty object  

const userThree = new User("Naman", 3, true);
// console.log(userOne);
// console.log(userThree);


// constructor property - returns reference to itself 

console.log(userThree.constructor); 

// 'instanceof' operator in JavaScript is used to check whether an object is an instance of a particular constructor function or class. 

console.log(userThree instanceof User); 
