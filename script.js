console.log("Hello World!");

// Computers function for rock, paper, scissors

function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
    };

// log to ensure function is working

console.log(getComputerChoice());

// Humans choice for rock, paper, scissors

function getHumanChoice() {
    let humanChoice = prompt("Choose your weapon: rock, paper, or scissors?").toLowerCase();

// validate the input to make sure it's a valid choice
    while (humanChoice !== "rock" && humanChoice !== "paper" && humanChoice !== "scissors") {
        alert("invalid choice! please enter 'rock', 'paper', or 'scissors'.");
        humanChoice = prompt("choose your weapon: rock, paper, or scissors?").toLowerCase;
    };
};

// log to ensure that function is working

console.log(getHumanChoice());

// function for playing a round of rock, paper, scissors

function playRound(humanChoice, computerChoice) {
    const human = humanChoice.toLowerCase();

    if (human === computerChoice) {
        return "it's a tie!";
    } else if (
        (human === "rock" && computerChoice === "scissors") ||
         (human === "paper" && computerChoice === "rock") ||
         (human === "scissors" && computerChoice === "paper")
    ) {
        //increment human score
        return `You win! ${human} beats ${computerChoice}`;
    } else {
        //increment computer score
        return `you lose! ${computerChoice} beats ${human}`;
    };

    };
    
// function for playing the game rock, paper, scissors

function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    for (let i = 0; 1 < 5; i++) {
        const humanSelection = prompt('rock, paper, or scissors?');
        const computerSelection = getComputerChoice;
        const result = playRound(humanSelection, computerSelection);


    if (result.includes('you win!')) {
        humanScore++;
    } else if (result.includes('you lose!')) {
        computerScore++;
    };
    console.log(result);
    console.log(`Score: Human - ${humanScore}, Computer - ${computerScore}`);
    };

    if (humanScore > computerScore) {
        console.log('you win the game!');
    } else if (computerScore > humanScore) {
        console.log('Computer wins the game');
    } else {
        console.log('it/s a tie game!');
    };
};
