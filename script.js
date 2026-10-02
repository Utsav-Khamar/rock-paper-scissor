//Computer Choice
function getComputerChoice() {
    // choose a random integer among 0,1 and 2
    let choice = Math.floor(Math.random() * 3)
    if (choice === 0) {
        return "Rock";
    }
    else if (choice === 1) {
        return "Paper";
    }
    else {
        return "Scissors";
    }
}

//Human Choice
function getHumanChoice(event) {
    let choice = event.target.id;

    //Capitalize first letter
    choice = choice.toLowerCase();
    firstLetter = choice.at(0).toUpperCase();
    choice = firstLetter + choice.slice(1);

    return choice;
}

//Game Logic
function playGame(event) {
    event.preventDefault();
    let humanChoice = getHumanChoice(event);
    let computerChoice = getComputerChoice();

    console.log(humanChoice);
    console.log(computerChoice);
    // Replace placeholder in table according to player-computer move
    let playerMove = document.querySelector('.player-move');
    let computerMove = document.querySelector('.computer-move');

    playerMove.src = `assets/${humanChoice}.png`;
    computerMove.src = `assets/${computerChoice}.png`;
    console.log(computerMove.src);
    console.log(playerMove.src);

    [result, humanScore, computerScore] = playRound(humanChoice, computerChoice, humanScore, computerScore);
    resultText.innerText = `You: ${humanChoice}, Computer: ${computerChoice} \n${result} \nYour score: ${humanScore} \nComputer Score: ${computerScore}`;

    if (humanScore === 5 || computerScore === 5) {
        humanScore = 0;
        computerScore = 0;
    }

}

//Function to play a single round of game
function playRound(humanChoice, computerChoice, humanScore, computerScore) {
    let result = '';
    if (humanChoice === computerChoice) {
        result = "Tie";
    }
    else if (humanChoice === "Rock") {
        if (computerChoice === "Paper") {
            computerScore = computerScore + 1;
            result = `You lose. ${computerChoice} beats ${humanChoice}`;
        }
        else {
            humanScore = humanScore + 1;
            result = `You won! ${humanChoice} beats ${computerChoice}`;
        }
    }
    else if (humanChoice === "Paper") {
        if (computerChoice === "Scissors") {
            computerScore = computerScore + 1;
            result = `You lose. ${computerChoice} beats ${humanChoice}`;
        }
        else {
            humanScore = humanScore + 1;
            result = `You won! ${humanChoice} beats ${computerChoice}`;
        }
    }
    else {
        if (computerChoice === "Rock") {
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

//Declare variables for human and computer score
let humanScore = 0;
let computerScore = 0;
let result = '';

let resultText = document.querySelector('.display');
let buttons = document.querySelectorAll('a');
buttons.forEach((button) => button.addEventListener('click', playGame));



