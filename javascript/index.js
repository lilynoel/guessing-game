import { generateRandomNumber } from "./utility-functions.js";
import {
  endGame,
  clearMessageBox,
  createMessageNode,
} from "./dom-functions.js";

// constant variables linking to buttons in HTML page
export const submitButton = document.getElementById("submitButton");
export const resetButton = document.getElementById("resetButton");

// variable to store number of guesses
let guesses = 0;

// variable to hold random number generator with chosen parameters
let randomNumber = generateRandomNumber(1, 20);

// check to see if it works: it does :-)
console.log(randomNumber);

// event for submit button
submitButton.addEventListener("click", (event) => {
  event.preventDefault();
  clearMessageBox();

  console.log("You clicked the submit button");

  // capture input somehow
  let userGuess = document.getElementById("guess").value;

  // increase number of guesses
  guesses++;

  if (userGuess == randomNumber) {
    // check if guess is correct
    // if correct, end game and display win message
    createMessageNode("You won!");
    endGame();

    // if not correct, check if number of guesses is > 3
  } else if (guesses > 3) {
    // if number of guesses is > 3: end game & display lose message
    createMessageNode("You did not win");
    endGame();
  } else {
    createMessageNode("incorrect guess");
  }
});

// event for reset button
resetButton.addEventListener("click", () => {
  console.log("You clicked the reset button");
});
