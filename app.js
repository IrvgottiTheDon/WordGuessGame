 WordGuessGame
 //VARIABLES

 // user guesses
var userGuess = 0;
// correct guesses
var correctGuesses = [];
// incorrect guesses
var incorrectGuesses =[];
// guesses remaining
var guessesRemaining = 0;
// wins
var wins = 0;
// losses
var losses = 0;
// space
// possible computer guesses
// computer word

// DOM variables
var winsDOM = document.getElementById("wins");
var lossesDOM = document.getElementById("losses");
var guesses =document.getElementById("guesses");


// FUNCTIONS
word selection (computer words)
function generateWord() {
computerWord = computerWords
[Math.floor(Math.random() *
computerWords.length)];
console.log(computerWord);
}

// generateWord();
document.onkeyup = function(event) {
    var userGuuesses = event.key;
    console.log(event);
}