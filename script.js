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
function playGame(){

    //Declare variables for human and computer score
    let humanScore = 0;
    let computerScore = 0;
    let round = 5;

    //Function to play a single round of game
    function playRound(humanChoice, computerChoice) {
        
        if (humanChoice === computerChoice){
            humanScore = humanScore + 1;
            computerScore = computerScore + 1;
            return("Tie");
        }
        else if (humanChoice === "Rock"){
            if (computerChoice === "Paper"){
                computerScore = computerScore + 1;
                return(`You lose. ${computerChoice} beats ${humanChoice}`);
            }
            else {
                humanScore = humanScore + 1;
                return(`You won! ${humanChoice} beats ${computerChoice}`);
            }
        }
        else if (humanChoice === "Paper"){
            if (computerChoice === "Scissor"){
                computerScore = computerScore + 1;
                return(`You lose. ${computerChoice} beats ${humanChoice}`)
            }
            else {
                humanScore = humanScore + 1;
                return(`You won! ${humanChoice} beats ${computerChoice}`);
            }
        }
        else {
            if (computerChoice === "Rock"){         
                computerScore = computerScore + 1;
                return(`You lose. ${computerChoice} beats ${humanChoice}`)
            }
            else {
                humanScore = humanScore + 1;
                return(`You won! ${humanChoice} beats ${computerChoice}`);
            }
        }
    }

    //Call playRound using iteration
    for(i=1; i<=round; i++){
        let humanChoice = getHumanChoice();
        let computerChoice = getComputerChoice();

        console.log(humanChoice);
        console.log(computerChoice);
        
        result = playRound(humanChoice, computerChoice);
        alert(`${result} \nYour score: ${humanScore} \nComputer Score: ${computerScore}`);
    }
}

playGame();