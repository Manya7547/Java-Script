//use of underscores before a property name is a common convention to indicate that the property is intended to be private or for internal use within the class.
// here we a setting the password peoperty twice - in settier and in constructor - to avoid abmiguity and race condition we use _ underscore
class User{
    constructor(username, password, email){
        this.username = username;
        this.password = password;
        this.email = email;
    }

    get email(){
        return this._email.toUpperCase();
    }

    set email(value){
        this._email = value;
    }

    get password(){
        return `${this._password}manyasohal`; 
    }

    set password(value){
        this._password = value; 
    }
}

const manya = new User("manys7547", "1234", "msohal@google.com");

console.log(manya.password);

// we want fine grain control over password. I don't want to show the password.
// if you define a getter you also need to define a setter. 

manya.password = "hhuuii";
console.log(manya.password);

console.log(manya.email);
