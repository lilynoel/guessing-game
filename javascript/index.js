// variable to store number of guesses
let guesses = 0

// function to generate a random number
function generateRandomNumber(min, max) {
    return Math.floor(Math.random() * max + min);
}

// variable to hold random number generator with chosen parameters
let randomNumber = generateRandomNumber(1, 20)

// check to see if it works: it does :-) 
console.log(randomNumber)

