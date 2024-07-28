// When you call setUsername(username) within createUser, this inside setUsername does not refer to the instance of createUser. 
// Instead, it refers to the global object (in non-strict mode) or undefined (in strict mode).
function setUsername(username){
    this.username = username;
    console.log(`called`);  // when this method goes out of context then the username variable also gets removed, we want to hold this reference
}

function createUser(username, email, password){
    setUsername.call(this, username);  // we will provide our current context to the other method
    this.email = email;
    this.password = password;
}

const user1 = new createUser("Manya", "manya@fb.com", "1234");
console.log(user1);
