
var numOfWins = 0;
var numOfLoses = 0;

var gameOver = 0;


var guesses_remaining = 15;
var letters_already_guessed = [];
var fruit_words = ["banana", "orange", "apples", "pineapple", "pear", "mango", "dragonfruit", "kiwi", "strawberries", "raspberries", "cantaloupe", "honeydew"]
var selected_word;

var dashes = [];
var selected_word_array = [];

function pickRandomFruitWord() {3
    //the number of words in the Fruit_word Array

    var totalwords = fruit_words.length;

    //randomNumber generator between the number of words
    var randomNumber = Math.floor(Math.random() * totalwords);
    selected_word = fruit_words[randomNumber];
    console.log(selected_word);


    //count of how many letters in the chosen random word
    count_of_letters = selected_word.length;
    console.log(count_of_letters);

    //initialized temporary variable for dashes
    dashes = new Array(count_of_letters);

    // Add dashes to the random word element to equal the number of letters in the selected word
    for (var i = 0; i < count_of_letters; i++) {
        dashes[i] = "-";
        selected_word_array[i] = selected_word.charAt(i);

    }

    document.getElementById("randomWord").innerHTML = dashes.join(" ");


    //change the innerHTML of the random word to the string contained in dash variable
}
//javascript logic to capture keystrock

document.onkeyup = function (event) {
    console.log(event)
    var userKey = event.key

    if (selected_word.includes(userKey)) {
        console.log("correct guess");



        for (var i = 0; i < count_of_letters; i++) {
            if (selected_word_array[i] == userKey) {
                dashes[i] = selected_word_array[i];
            }
        }

    }
    else {

        console.log("incorrect guess");

    }
    //decrease the guess count by one
    guesses_remaining -= 1;
    letters_already_guessed.push(userKey);

    //if player is out of guesses, increase lost count, an reset the game
    if (guesses_remaining == 0) {
        numOfLoses += 1;
        alert("You Loss The Game, Resetting");
        resetGame();
    }
    else if (guesses_remaining > 0) {
        if (dashes.join("") == selected_word) {
            numOfWins += 1;
            alert("You Win The Game, Resetting");
            resetGame();
        }
    }


    //Appear user guesses, number or guesses remaining.
    updateGameLogic();

}
//update the game logic when players chooses a letter
function pickRandomFruit() {

    var x = 0;

    // Keep looping this function until player wins or loses the game
    while (gameOver != 1) {
        updateGameLogic();
        x = x + 1;


        gameOver = 1;
    }

    //If letters already guessed contain the random word, then player wins the game, increase number of wins
    //<CODE TO WIN>
}

//updates the game logic when player chooses a letter
function updateGameLogic() {

    //Update the HTML element values

    document.getElementById("wins").innerHTML = numOfWins;
    document.getElementById("loses").innerHTML = numOfLoses;
    document.getElementById("guessesRemaining").innerHTML = guesses_remaining;
    document.getElementById("lettersGuessed").innerHTML = letters_already_guessed;
    document.getElementById("randomWord").innerHTML = dashes.join("");

}
// starts the game
function startGame() {
    console.log("Press Any Key To Start");

    updateGameLogic();
    pickRandomFruitWord();
}

// reset the game when player wins/loses
function resetGame() {
    guesses_remaining = 20;
    pickRandomFruitWord();

}

// [==== STEPS ====]
// 1. go to the web page
// 2. game tells them "press any key to get started"
// 3. player presses a key and the game starts
// 4. when the game starts, we pick a random fruit word.
// 5. the box containing the dashes updates to how many letters the fruit word is.



// 6. we determine if they picked a letter in the word or not.
    // 6a. player picks the right letter,
        // the letters replaces a dash.
        // letters already guessed updates.
        // number of guesses remaining stays the same.
        // player can pick another letter, if all letters in the word are picked, player wins the game.
    // 6b. player picks the wrong letter,
        // dash remains.
        // letters already guessed updates.
        // number of guesses decreases.
        // player can pick another letter, if number of guesses == 0, player loses the game.
// 7. player wins/loses and then "game restarts" and a new word is chosen.