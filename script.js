const optionBtn = document.querySelectorAll('div.optionBtn button');
const roundResults = document.querySelector('#roundResults');
const playerPoints = document.querySelector('#playerScore');
const computerPoints = document.querySelector('computerScore');
const resetBtn = document.querySelector('#reset');

// Refresh page for a new game
resetBtn.addEventListener('click', () => location.reload());

optionBtn.forEach(button => { button.addEventListener('click', getPlayerChoice) });

let computerChoices = [{choice: 'Rock', value: 0}, {choice: 'Paper', value: 1}, {choice: 'Scissors', value: 2}];
let playerScore = 0;
let compScore = 0;
let playerChoice;

function computerPlay () {
    let result = computerChoices[Math.floor(Math.random() * computerChoices.length)];
    return result;
};

