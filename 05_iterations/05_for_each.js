const coding = ["js", "ruby", "java", "python", "cpp"]

// we will us a call back function. Call back functions are functions that are 
// passed as arguments to other functions and are executed after some operation has been completed.
// Callback fuycntion doesnt have a name
// here we do some operation on each iteam of coding array
coding.forEach(function (item){
//    console.log(`I am learning ${item}`);
});


// using arrow function - same things but syntax is different 
coding.forEach((item)=>{
//    console.log(item);
});


// defining a function separately
function printMe(value){
//   console.log(value);
}

coding.forEach(printMe); // pass the reference of the function

// when we pass a callback function inside a forEach function, there could be more parameters we can pass in a call back function 
// (item, index, arrayList) -
// the order in which you pass these parameters is crucial.
// 
coding.forEach((item, index, arrayList) => {
//    console.log(item, index, arrayList);
});

// using forEach for an array of objects [{ },{ },{ }]

const myCoding = [
    {
        languageName: "JavaScript",
        languageFileName: "js"
    },
    {
        languageName: "Java",
        languageFileName: "java"
    },
    {
        languageName: "C++",
        languageFileName: "cpp"
    },
    {
        languageName: "Dart",
        languageFileName: "dart"
    }
];

myCoding.forEach((item)=>{
    //console.log(item.languageName, item.languageFileName);  
    console.log(item["languageName"], item["languageFileName"]);  // both work
});