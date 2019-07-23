
//DECLARE VARIABLES
var numOfWins = 0;
var numOfLoses = 0;
var guesses_remaining = 15;
var letters_already_guessed = [];
var fruit_words = ["banana", "orange", "apples", "pineapple", "pear", "mango", "dragonfruit", "kiwi", "strawberries", "raspberries", "cantaloupe", "honeydew"]
var selected_word = "";
var dashes = [];
var selected_word_array = [];
var message = "";

function pickRandomFruitWord() {
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

    //change the innerHTML of the random word to the string contained in dash variable
    document.getElementById("randomWord").innerHTML = dashes.join(" ");


}
//javascript logic to capture keystrock

document.onkeyup = function (event) {
    console.log(event)
    var userKey = event.key
    userKey = event.key;

    //change to make to lower case in case player has cap lock on
    userKey.toLowerCase();



    //check to make sure keys are only in Alphabet
    if (userKey.match(/^[abcdefghijjklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ]+$/)) {

        //Player selects correct letter
        if (selected_word.includes(userKey)) {
            console.log("correct guess");
            displayMessage("You guessed ' " + userKey + "', correct.");


            //loop through the selected word chars for matching key and update the dash array
            for (var i = 0; i < count_of_letters; i++) {
                if (selected_word_array[i] == userKey) {
                    dashes[i] = selected_word_array[i];
                }
            }

        }
        //PLayer selects wrong letter
        else {

            console.log("incorrect guess");
            displayMessage("You guessed ' " + userKey + "', incorrect.");

        }
        //decrease the guess count by one
        guesses_remaining -= 1;

        //Add the guessed letter to the array pf already guessed letters
        letters_already_guessed.push(userKey);

        //Appear user guesses, number or guesses remaining.
        updateGameLogic();
        checkWinLose();
    }

}
//check whether we win or lose
function checkWinLose() {
    //if player is out of guesses display loses message
    if (guesses_remaining == 0) {
        numOfLoses += 1;
        displayMessage("You LOSE the game!!!!!!!.<br> The word was ' " + selected_word + "'.<br> Press any key to start a new game. ");
        resetGame();
    }
    //if player guessed all the letters display win message
    else if (dashes.join("") == selected_word) {
        numOfWins += 1;
        displayMessage("You WIN the game!!!!!!!.<br> The word was ' " + selected_word + "'.<br> Press any key to start a new game. ");
        resetGame();
    }
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

//Display the Message to the html Box
function displayMessage(msg) {
    document.getElementById("game_message").innerHTML = msg;
}

// starts the game
function startGame() {
    console.log("Press Any Key To Start Game!");
    resetGame();
}

// reset the game when player wins/loses
function resetGame() {
    //reinitialize value but keeps wins/loses
    guesses_remaining = 20;
    letters_already_guessed = [];
    dashes = [];
    selected_word = "";
    selected_word_array = [];

    pickRandomFruitWord();
    updateGameLogic();

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