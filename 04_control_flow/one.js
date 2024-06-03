// Comparison Operators : <, >, <=, >=, ==, !=, ===, !==
// == only compares the value and not the datatype -> 2=="2" is true
// === for strict checking. compares both value and datatype.
// !== similary for strict checking value and datatype 

//nested if else 
if (balance < 500) {
        console.log("less than 500");
    } else if (balance < 750) {
        console.log("less than 750");
        
    } else if (balance < 900) {
        console.log("less than 750");
        
    } else {
        console.log("less than 1200");
    
    }

// applications - shopping app

const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if (userLoggedIn && debitCard && 2==3) {
    console.log("Allow to buy course");
}

if (loggedInFromGoogle || loggedInFromEmail) {
    console.log("User logged in");
}
