// Creating objects using constructors - singleton

const tinderUser = new Object();  //create an empty object
//console.log(tinderUser);

tinderUser.id = "abcd";
tinderUser.name = "Manan";
tinderUser.isLoggedIn = false;

const regularUser = {
    email: "abc@gmail.com",
    fullname: {
        userFullName: {
            firstName: "Manan",
            lastName: "Khaneja"
        }
    }
}

// console.log(regularUser.fullname);  //gives the nested object
// console.log(regularUser.fullname.userFullName.firstName); // you can access using multiple dot operators


//combining two objects together:

const obj1 = {
    1: "a",
    2: "b"
};

const obj2 = {
    3: "c",
    4: "d"
};

//this will not work 
// const obj3 = {obj1, obj2};  //combine both as nested objects 
// console.log(obj3);

// this will be similar to flat in arrays:

// const obj3 = Object.assign({}, obj2, obj1);   //(target, source1, source2). This is not used much
// console.log(obj3);

//we give an empty object so that the final result stores the flattened and original ones are not modified

//we use the glass operator 90% of the time 

// const obj3 = {...obj1 , ...obj2};
// console.log(obj3);


// real use case: array of objects is given you have to loop through them 
const users = [
    {
        name: 1,
        email: "m@gmail.com"
    },
    {
        name: 2,
        email: "n@gmail.com"
    },
    {
        name: 3,
        email: "o@gmail.com"
    },
    {
        name: 4,
        email: "p@gmail.com"
    }
];

// console.log(users[1].name);

// console.log(tinderUser);
// console.log(Object.keys(tinderUser)); // gives an array of keys in the object - so you can loop through it
// console.log(Object.values(tinderUser));


//enteries method - rarely used. key value pairs form a single array
// console.log(Object.entries(tinderUser));


//objectname.hasOwnProperty(key) - checks if an object has a given key - returns boolean
console.log(tinderUser.hasOwnProperty('age'));