const name = "manya"
const repoCount = 50

//concatenated string - old syntax
console.log(name + repoCount + "Value"); 

//string interpolation using back ticks - injects variables
console.log(`hello my name is ${name} and my repo count is ${repoCount}`);

const game = new String('volley ball game');

console.log(game[0]);
console.log(game.__proto__); //?
console.log(game.length);
console.log(game.toUpperCase());
console.log(game.charAt(2));
console.log(game.indexOf('l'));

const subGame = game.substring(0,6); //can't use -ve values
console.log(subGame);

const newName = game.slice(-8, 4); //counts pos from end
console.log(newName);

const name1 = " manya ";
console.log(name1);
console.log(name1.trim());  //removes end spaces 

//replace "%20" inside url with a "-" (real world example)
const url = "https://manya.com/manya%20sohal"
console.log(url.replace('%20','-'));

console.log(url.includes('manya'));

const words = game.split(' ');
console.log(words);

