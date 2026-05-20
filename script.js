console.log("Hello world!");

//Declare variables for human and computer score
let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    // choose a random interger among 0,1 and 2
    let choice = Math.floor(Math.random() * 3)
    if (choice === 0){
        return "Rock";
    }
    else if (choice === 1){
        return "Paper";
    }
    else {
        return "Scissor";
    }
}

function getHumanChoice() {
    //prompt user for input
    let choice = prompt("Rock, Paper or Scissor?");

    //fix camelCase
    choice = choice.toLowerCase();
    firstLetter = choice.at(0).toUpperCase();
    choice = firstLetter + choice.slice(1);

    return choice;
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice){
        console.log("Tie");
        humanScore = humanScore + 1;
        computerScore = computerScore + 1;
    }
    else if (humanChoice === "Rock"){
        if (computerChoice === "Paper"){
            console.log("You lose. Paper beats Rock");
            computerScore = computerScore + 1;
        }
        else {
            console.log("You won! Rock beats Scissor");
            humanScore = humanScore + 1;
        }
    }
    else if (humanChoice === "Paper"){
        if (computerChoice === "Scissor"){
            console.log("You lose. Scissor beats Paper");
            computerScore = computerScore + 1;
        }
        else {
            console.log("You won! Paper beats Rock");
            humanScore = humanScore + 1;
        }
    }
    else {
        if (computerChoice === "Rock"){
            console.log("You lose. Rock beats Scissor");
            computerScore = computerScore + 1;
        }
        else {
            console.log("You won! Scissor beats Paper");
            humanScore = humanScore + 1;
        }
    }
}
let humanChoice = getHumanChoice();
let computerChoice = getComputerChoice();

console.log(humanChoice);
console.log(computerChoice);
playRound(humanChoice, computerChoice);