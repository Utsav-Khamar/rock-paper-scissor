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
    let choice = prompt("Rock, Paper or Scissor?");
    return choice;
}
console.log(getHumanChoice());
console.log(getComputerChoice());