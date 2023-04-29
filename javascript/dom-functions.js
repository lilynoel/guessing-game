import { submitButton, guessInput } from "./index.js";

// function to end the game
export function endGame() {
  submitButton.disabled = true;
}

// functionality to add something when you win:
//      use javascript to create a paragraph (maybe change later to a card).
//      use javascript to add some text to this paragraph ie., "Sorry, Game Over!"
//      use Javascript to add this paragraph to the message div.

// Message Function
export function createMessageNode(message, className = "info-message") {
  const para = document.createElement("p");
  const node = document.createTextNode(message);
  para.appendChild(node);
  const element = document.getElementById("message");
  element.className = "";
  element.appendChild(para);
  element.classList.add("message-box");
  element.classList.add(className);
}

export function clearMessageBox() {
  // empty out an element
  const element = document.getElementById("message");
  element.textContent = "";
  guessInput.value = "";
}
