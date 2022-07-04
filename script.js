// Create a function called "computerPlay that will randomly return 'Rock', 'Paper' or 'Scissors'."
// computerPlay should pick randomly between 1 to 3 and depending on which number it selects it will correspond to 'Rock', 'Paper' or 'Scissors'
let computerSelection = '';
let playerSelection = '';

function computerPlay() {
    const randomNumber = Math.floor(Math.random() * 3) + 1;
    if (randomNumber === 1) {
        computerSelection = 'rock';
    }
    else if (randomNumber === 2) {
        computerSelection = 'paper';
    }
    else {
        computerSelection = 'scissors';
    }
    return computerSelection;
}

// Write a function that gets player selection and makes it lower case

function playerPlay() {
    playerSelection = prompt("Rock, paper or scissors?");
    playerSelection = playerSelection.toLowerCase();
    console.log(playerSelection);
    return playerSelection;
}

// Write a function that plays a single round of Rock Paper Scissors. The function should take two parameters - the playerSelection and computerSelection - and then return a string that declares the winner of the round like so: "You Lose! Paper beats Rock"

function playRockPaperScissors(playerSelection, computerSelection) {

}


computerPlay();
playerPlay();
