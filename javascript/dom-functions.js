import { submitButton } from "./index.js";

// function to end the game
export function endGame() {
  submitButton.disabled = true;
}

// functionality to add something when you win:
//      use javascript to create a paragraph (maybe change later to a card).
//      use javascript to add some text to this paragraph ie., "Sorry, Game Over!"
//      use Javascript to add this paragraph to the message div.

export function createWinMessage() {
  const para = document.createElement("p");
  const node = document.createTextNode("This is a win message ^,^");
  para.appendChild(node);
  const element = document.getElementById("message");
  element.appendChild(para);
}

// functionality to add something when you lose
export function createLoseMessage() {
  const para = document.createElement("p");
  const node = document.createTextNode("This is a lose message :-|");
  para.appendChild(node);
  const element = document.getElementById("message");
  element.appendChild(para);
}

// functionality to add something when the guess is incorrect 
export function createOtherMessage() {
  const para = document.createElement("p");
  const node = document.createTextNode("incorrect guess!");
  para.appendChild(node);
  const element = document.getElementById("message");
  element.appendChild(para);
}
