// we have a function which also behaves as an object. we define properties and create getters and setters using defineProperty
// here we can alter getter accordingly so that we have fine grained control over our information
// Similarly we can make it an object based syntax instead of function. everything remains the same.
function User(email, password){
    this._email = email;
    this._password = password

    Object.defineProperty(this, 'email', {
        get: function(){
            return this._email.toUpperCase()
        },
        set: function(value){
            this._email = value
        }
    })
    Object.defineProperty(this, 'password', {
        get: function(){
            return this._password.toUpperCase()
        },
        set: function(value){
            this._password = value
        }
    })

}

const obj = new User("manya67@gmail.com", "lalalala")

console.log(obj.email);