import { generateRandomNumber } from "./utility-functions.js";
import {
  endGame,
  clearMessageBox,
  createMessageNode,
} from "./dom-functions.js";

// constant variables linking to buttons in HTML page
export const submitButton = document.getElementById("submitButton");
export const resetButton = document.getElementById("resetButton");
export const guessInput = document.getElementById("guess")
  
// variable to store number of guesses
let guesses = 0;

// variable to hold random number generator with chosen parameters
let randomNumber = generateRandomNumber(1, 20);

// check to see if it works: it does :-)
console.log(randomNumber);

// event for submit button
submitButton.addEventListener("click", (event) => {
  event.preventDefault();
  

  console.log("You clicked the submit button");

  // capture input somehow
  let userGuess = guessInput.value;
  clearMessageBox();

  // increase number of guesses
  guesses++;

  if (userGuess == randomNumber) {
    // check if guess is correct
    // if correct, end game and display win message
    createMessageNode("You won!");
    endGame();

    // if not correct, check if number of guesses is > 3
  } else if (guesses >= 3) {
    // if number of guesses is > 3: end game & display lose message
    createMessageNode("You did not win.");
    endGame();
  } else {
    let hint =
      userGuess > randomNumber
        ? "Your guess was too high!"
        : "Your guess was too low!";
    createMessageNode(`${hint} Remaining guesses: ${3 - guesses}`);
  }
});

// event for reset button
resetButton.addEventListener("click", () => {
  console.log("You clicked the reset button");
  // clear message box
  clearMessageBox();
  // generate new random number
  randomNumber = generateRandomNumber(1, 20);
  // set guesses back to zero
  guesses = 0;
  console.log(randomNumber);
  // message
  createMessageNode(`Game is reset :-D Guesses remaining: ${3 + guesses}`);
  // enable submit button
  submitButton.disabled = false;
});

// check if userGuess > randomNumber

// if userGuess is greater than randomNumber,
// display a message 'your guess was too high!'

// if the userGuess is less than randomNumber,
// display a different message 'your guess was too low!'

// store message in a variable, so we can add it to the end
// of remaining guesses message.
