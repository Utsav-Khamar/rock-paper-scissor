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

    // Replace placeholder in table according to player-computer move


    playerMove.src = `assets/${humanChoice}.png`;
    computerMove.src = `assets/${computerChoice}.png`;


    [result, humanScore, computerScore] = playRound(humanChoice, computerChoice, humanScore, computerScore);


    humanScoreText.innerText = humanScore;
    computerScoreText.innerText = computerScore;
    resultDialogue.innerText = `${result}`;

    if (humanScore === 5 || computerScore === 5) {
        stopGame();
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

function stopGame() {
    //disable play buttons
    buttons.forEach((button) => { button.disabled = true; })


    let playAgainBtn = document.createElement('button');
    playAgainBtn.classList.add('play-again')
    playAgainBtn.innerText = `Play Again`;
    display.appendChild(playAgainBtn);
    playAgainBtn.addEventListener('click', () => {
        humanScore = 0;
        computerScore = 0;
        console.log('button ' + playAgainBtn.disabled);
        playAgainBtn.remove();

        buttons.forEach((button) => { button.disabled = false; });

        humanScoreText.innerText = humanScore;
        computerScoreText.innerText = computerScore;
        resultDialogue.innerText = 'Click on any icon to start the game.'

        playerMove.src = `assets/question-mark.png`;
        computerMove.src = `assets/question-mark.png`;
    })

}

//Declare variables for human and computer score
let humanScore = 0;
let computerScore = 0;
let result = '';

// let resultText = document.querySelector('.display');
let display = document.querySelector('.display');
let humanScoreText = document.querySelector('.human');
let computerScoreText = document.querySelector('.computer');
let resultDialogue = document.querySelector('.dialogue');

let playerMove = document.querySelector('.player-move');
let computerMove = document.querySelector('.computer-move');

let buttons = document.querySelectorAll('.game-btn');
buttons.forEach((button) => button.addEventListener('click', playGame));



