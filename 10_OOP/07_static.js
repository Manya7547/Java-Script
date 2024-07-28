class User{
    constructor(username){
        this.username = username;
    }

    logMe(){
        console.log(`Username: ${this.username}`);
    }

    static createId(){
        return `123`;
    }
}


// Static methods and properties are called on the class itself, rather than on instances of the class. 
// This means that they are not accessible through an instance of the class, but rather directly through the class.
const userOne = new User("Manyata");
// console.log(userOne.createId()); // gives an error because createId is static method, cannot be called by an instance

// If we call a static method from an instance of child class:

class Teacher extends User{
    constructor(username, email){
        super(username);
        this.email = email;
    }
}

const userTwo = new Teacher("Anant", "anant@jio.com");
userTwo.logMe();
// console.log(userTwo.createId()); gives an error

