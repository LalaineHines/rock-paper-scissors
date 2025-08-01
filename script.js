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

