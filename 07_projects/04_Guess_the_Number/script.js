// generate a random number from 1 to 100 
let random = parseInt(Math.random(100) * 100 + 1);

// write all selectors
const submit = document.querySelector('#subt');  // select id subt where type is submit 
const userInput = document.querySelector('#guessField');  // users input 
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas'); // when now remaining tried 

// creating a paragraph to inject 
const p = document.createElement('p');

// create an array to store the guesses submitted by the user

let prevGuess = [];
let numGuesses = 1; 
let playGame = true;  // allows you to play game. Checks before playing a game. 

// functions 

// if we can play the game, we can listen to submit button and capture the user input
if(playGame){
    submit.addEventListener('click',function(e){
        e.preventDefault()
        const guess = parseInt(userInput.value);
        console.log(guess);
        validGuess(guess)
    })
}

// validate guess - submit a number and validate it - non negative, <100, >0, valid int 
function validGuess(guess){
    if(isNaN(guess)){
        alert('please enter a valid number')
    }
    else if(guess<1){
        alert('please enter a number greater than 1')
    }
    else if(guess>100){
        alert('please enter a number less than 100')
    }
    else{
        prevGuess.push(guess);

        // if it exceeds the last attempt
        if(numGuesses === 11){
            displayGuess(guess);
            displayMessage(`game over. Random number was: ${random}`);
            endGame();
        }

        else{
            displayGuess(guess);
            checkGuess(guess);

        }
        
        
    }
}

// check guess - if guess value if correct, low or higher 
function checkGuess(guess){
    if(guess === random){
        displayMessage('You guessed it right!');
        endGame();
    }
    if(guess < random){
        displayMessage(`Number is too low `);
    }
    if(guess > random){
        displayMessage(`Number is too high`);
    }

}

// display guess - result of check guess, clean up the input, add to the previous guesses
function displayGuess(guess){
    userInput.value = '';  //clean up
    guessSlot.innerHTML += `${guess} `;  //inject the guess value
    numGuesses++;
    remaining.innerHTML = `${11 - numGuesses}`;
 
}

// display message -  empty the input, remaining guess decrement, 
function displayMessage(message){
    lowOrHi.innerHTML = `<h2>${message}</h2>`;
}


function newGame() {
    const newGameButton = document.querySelector('#newGame');
    newGameButton.addEventListener('click', function (e) {
      randomNumber = parseInt(Math.random() * 100 + 1);
      prevGuess = [];
      numGuesses = 1;
      guessSlot.innerHTML = '';
      remaining.innerHTML = `${11 - numGuesses} `;
      userInput.removeAttribute('disabled');
      startOver.removeChild(p);
  
      playGame = true;
    });
  }

// create a button
function endGame(){
    userInput.value = '';
    userInput.setAttribute('disabled','');
    p.classList.add('button')
    p.innerHTML = `<h2 id="newGame"> Start New Game</h2>`
    startOver.appendChild(p);  // added class button
    playGame = false;
    newGame();
}
