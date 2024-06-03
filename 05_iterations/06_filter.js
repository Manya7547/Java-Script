/* .forEach() function does not return anything. Even if we write a return statement inside 
the callback function, the forEach function will return an undefined value. 
But we want that we operate an item of an iterable object and then return some value
*/

myNums = [1,2,3,4,5,6,7,8,9,10];

// const result = myNums.forEach((item)=>{
//     console.log(item);
//     return item;  // does not do anything 
// });

// console.log(result); // gives undefined 


// The primary purpose of forEach is to execute a provided function once for each array element. 
// It is intended for side effects and not for generating a new array or value from the existing array.

// We can use forEach by using this technique

// newNums = [];
// const values = myNums.forEach((item)=>{
//     if(item>4){
//         newNums.push(item);
//     }
// });

// console.log(newNums);

// One alternative of using forEach is filter()
// filter returns a new array with all elements that pass the test implemented by the provided function.
// This filters out the array and returns the items that satsfy a given condition

const result = myNums.filter((item)=> item>4 );  // implicit return 
// console.log(result); 



// Example: array of object 

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

  // using a filter in this array of objects 

  // Q1 - list books with genre is history 

  const historyBooks = books.filter((bookObj) => bookObj.genre === 'History');

  //console.log(historyBooks);


  // Q2 - books published in or after 2005

  const res = books.filter((bookObj)=> bookObj.publish >= 2005);
  //console.log(res);

  // Q3 - genre is history and published in or after 1995

  const res2 = books.filter((bookObj)=>{
    return bookObj.genre==='History' && bookObj.publish>=1995;
  });
  console.log(res2);