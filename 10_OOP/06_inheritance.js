class User{
    constructor(username){
        this.username = username;
    }
    logMe(){
        console.log(`username is ${this.username}`);
    }
}

class Teacher extends User{
    // overriding the constructor of User. 
    constructor(username, email, password){
        super(username); // used to call the constructor of the parent class.
        this.email = email;
        this.password = password;
    }

    addCourse(){
        console.log(`A new course was added by ${this.username}`);
    }
}

const userOne = new Teacher("Aman", "m7547@uber.com","123456");
userOne.logMe();
userOne.addCourse();

// Teacher is inheriting from User -> teacher has properties of user.
// User does not have properties of Teacher.

console.log(userOne instanceof User); // true
console.log(userOne instanceof Teacher); // true
console.log(Teacher instanceof User); // false