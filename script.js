//Computer Choice
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

//Human Choice
function getHumanChoice() {
    //prompt user for input
    let choice = prompt("Rock, Paper or Scissor?");

    //fix camelCase
    choice = choice.toLowerCase();
    firstLetter = choice.at(0).toUpperCase();
    choice = firstLetter + choice.slice(1);

    return choice;
}

//Game Logic
function playGame(event){

    //Declare variables for human and computer score
    let humanScore = 0;
    let computerScore = 0;
    let round = 5;
    let result = '';


    let humanChoice = event.target.id;
    //Capitalize first letter
    humanChoice = humanChoice.toLowerCase();
    firstLetter = humanChoice.at(0).toUpperCase();
    humanChoice = firstLetter + humanChoice.slice(1);


    let computerChoice = getComputerChoice();
    
    [result, humanScore, computerScore] = playRound(humanChoice, computerChoice, humanScore, computerScore);
    alert(`Round: ${i} \nYou: ${humanChoice}, Computer: ${computerChoice} \n${result} \nYour score: ${humanScore} \nComputer Score: ${computerScore}`);

}

//Function to play a single round of game
function playRound(humanChoice, computerChoice, humanScore, computerScore) {
    let result = '';
    if (humanChoice === computerChoice){
        humanScore = humanScore + 1;
        computerScore = computerScore + 1;
        result = "Tie";
    }
    else if (humanChoice === "Rock"){
        if (computerChoice === "Paper"){
            computerScore = computerScore + 1;
            result = `You lose. ${computerChoice} beats ${humanChoice}`;
        }
        else {
            humanScore = humanScore + 1;
            result = `You won! ${humanChoice} beats ${computerChoice}`;
        }
    }
    else if (humanChoice === "Paper"){
        if (computerChoice === "Scissor"){
            computerScore = computerScore + 1;
            result = `You lose. ${computerChoice} beats ${humanChoice}`;
        }
        else {
            humanScore = humanScore + 1;
            result = `You won! ${humanChoice} beats ${computerChoice}`;
        }
    }
    else {
        if (computerChoice === "Rock"){         
            computerScore = computerScore + 1;
            result = `You lose. ${computerChoice} beats ${humanChoice}`;
        }
        else {
            humanScore = humanScore + 1;
            result = `You won! ${humanChoice} beats ${computerChoice}`;
        }
    }
    return [result, humanScore, computerScore];
}

let buttons = document.querySelectorAll('button');
buttons.forEach( (button) => button.addEventListener('click', playGame));

