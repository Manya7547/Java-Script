const accountId = 144553; //always used
let accountEmail = "msohal@scu.edu"; //always used
var  accountPassword = "12345"; //not preferred because of issue in block scope and functional scope 
accountCity = "Jaipur"; //can be used but don't
let accountState; //will be undefined by default

//accountId = 223; not allowed, immutable
accountEmail = "abc@gmail.com";
accountPassword = "456";
accountCity = "Kullu";

//console.log(accountId);

//if you don't want to use console.log() again and again use table

console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);
