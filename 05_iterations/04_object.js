// Iterating inside an object usinf for in

const myObj = {
    js: "Javascript",
    cpp: "c++",
    rb: "ruby",
    swift: "swift by apple"
};

for(const key in myObj){   
    //console.log(key,myObj[key]);
}

// can we iterate through an array using for in? Yes it works

const arr = ['js','cpp', 'ruby', 'swift'];

for(const element in arr){
    // console.log(element);  // this outputs only the indices
    // console.log(arr[element]);  // this outputs the value
}


// iterating through a map. Map is not iterable so we can't iterate it using for in 

const map = new Map();
map.set('IN', "India");
map.set('USA', "United States of America");
map.set('Fr', "France");
map.set('IN', "India");

for(const key in map){
    //console.log(key);   // no output 
}


