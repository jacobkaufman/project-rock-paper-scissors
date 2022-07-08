// Create a function called "computerPlay that will randomly return 'Rock', 'Paper' or 'Scissors'."
// computerPlay should pick randomly between 1 to 3 and depending on which number it selects it will correspond to 'Rock', 'Paper' or 'Scissors'

// Return random number between 1 and 3
function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

function computerPlay() {
    let pick = randomInt(1, 3)
    if (pick === 1) {
        pick = "rock"
        return pick
    }
    else if (pick === 2) {
        pick = "paper"
        return pick
    }
    else {
        pick = "scissors"
        return pick
    }
}

// Write a function that plays a single round of Rock Paper Scissors. The function should take two parameters - the playerSelection and computerSelection - and then return a string that declares the winner of the round like so: "You Lose! Paper beats Rock"

// Make your function’s playerSelection parameter case-insensitive (so users can input rock, ROCK, RocK or any other variation).

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return `Tie! You both picked ${playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1)}!`
    }
    else if (playerSelection === "rock" && computerSelection === "paper") {
        computerScore++
        return "You lose! Paper beats Rock!"
    }
    else if (playerSelection === "rock" && computerSelection === "scissors") {
        playerScore++
        return "You win! Rock beats Scissors!"
    }
    else if (playerSelection === "paper" && computerSelection === "rock") {
        playerScore++
        return "You win! Paper beats Rock!"
    }
    else if (playerSelection === "paper" && computerSelection === "scissors") {
        computerScore++
        return "You lose! Scissors bests Paper!"
    }
    else if (playerSelection === "scissors" && computerSelection === "rock") {
        computerScore++
        return "You lose! Rock beats Scissors"
    }
    else if (playerSelection === "scissors" && computerSelection === "paper") {
        playerScore++
        return "You win! Scissors beats Paper!"
    }
    else {
        return "Invaild player selection!"
    }
}

// Write a NEW function called game(). Call the playRound function inside of this one to play a 5 round game that keeps score and reports a winner or loser at the end

function game() {
    for (let i = 0; i < 5; i++) {
        let playerSelection = prompt("Rock, paper or scissors?");
        playerSelection = playerSelection.toLowerCase();
        let computerSelection = computerPlay();
        console.log(playRound(playerSelection, computerSelection));
    }
    if (playerScore > computerScore) {
        console.log(`You win! With a score of: ${playerScore} to ${computerScore}!` );
    }
    else {
        console.log(`You lose! With a score of: ${playerScore} to ${computerScore}`);
    }
}

let playerScore = 0;
let computerScore = 0;

console.log(game());
console.log(playerScore);
