
var wins = 0;
var loses = 0;
var guesses_remaining =20;
var letters_already_guessed; []
var fruit_words = ["banana", "orange", "apples", "pineapple", "pear", "mango", "dragonfruit", "kiwi", "strawberries", "raspberries", "cantaloupe", "honeydew"]

function pick_a_random_fruit_word() {
    var totalwords = fruit_words.length;
    var randomNumber = Math.floor(Math.random()*totalwords);
    document.getElementById("randomWord").innerHTML= fruit_words [randomNumber];

}

function pickRandomFruit(){

}

//updates the game logic when player chooses a letter
function updateGameLogic() {

}
// starts the game
function startGame() {
    alert("press any key to start");
    document.getElementById("wins").innerHTML= wins;
    document.getElementById("loses").innerHTML= loses;
    document.getElementById("guessesRemaining").innerHTML= guesses_remaining;
    document.getElementById("lettersGuessed").innerHTML= letters_already_guessed;
    document.getElementById("randomWord").innerHTML= fruit_words [0];

    pick_a_random_fruit_word();
}
// reset the game when player wins/loses
function resetGame() {

}