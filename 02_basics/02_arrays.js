const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros)  //second array is considered as a single elements and pushed inside the array as a whole
// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

// concat will concatenate the two arrays

// const allHeros = marvel_heros.concat(dc_heros)
// console.log(allHeros);

// spread operator is preferred as we can concat more arrays 
const all_new_heros = [...marvel_heros, ...dc_heros];
//console.log(all_new_heros);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity) //parameter - depth can be 1, 2 or any hack - put infinity
//console.log(real_another_array);

// while scraping data we can get a diffrent format of data but ultimately we want array
// converting into array 

console.log(Array.isArray("Manya")) // returns false
console.log(Array.from("Manya")) // converts to array
console.log(Array.from({name: "hitesh"})) //given object - result is an empty array 

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));  //returns an array from a set of elements





