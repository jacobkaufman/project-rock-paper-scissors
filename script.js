// Create a function called "computerPlay that will randomly return 'Rock', 'Paper' or 'Scissors'."
// computerPlay should pick randomly between 1 to 3 and depending on which number it selects it will correspond to 'Rock', 'Paper' or 'Scissors'
let computerSelection = '';
let playerSelection = '';

function computerPlay() {
    const randomNumber = Math.floor(Math.random() * 3) + 1;
    if (randomNumber === 1) {
        computerSelection = 'Rock';
    }
    else if (randomNumber === 2) {
        computerSelection = 'Paper';
    }
    else {
        computerSelection = 'Scissors';
    }
    return computerSelection;
}

// Write a function that plays a single round of Rock Paper Scissors. The function should take two parameters - the playerSelection and computerSelection - and then return a string that declares the winner of the round like so: "You Lose! Paper beats Rock"



computerPlay();
