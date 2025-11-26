console.log("Hello, World!");

const gameChoices = ["rock", "paper", "scissors"];
let gameMessage = "";
let battleText = "";
let playerChoice = "";
let computerChoice = "";
let wins = 0;
let losses = 0;

document.getElementById('button-rock').addEventListener('click', function () {
    playerChoice = "rock";
    console.log('Rock Button pressed.');
    gameMessage = 'You have chosen Rock!';
    startMatch(playerChoice);
});

document.getElementById('button-paper').addEventListener('click', function () {
    playerChoice = "paper";
    console.log('Paper Button pressed.');
    gameMessage = 'You have chosen Paper!';
    startMatch(playerChoice);
});

document.getElementById('button-scissors').addEventListener('click', function () {
    playerChoice = "scissors";
    console.log('Scissors Button pressed.');
    gameMessage = 'You have chosen Scissors!';
    startMatch(playerChoice);
});

function startMatch(playerChoice) {
    var randomIdx = Math.floor(Math.random() * gameChoices.length);
    let computerChoice = gameChoices[randomIdx];
    console.log(`The Computer chose ${computerChoice}.`);

    if (playerChoice == computerChoice) {
        // alert(`You both chose ${playerChoice}! Try again!`);
        battleText = `You both chose ${playerChoice}! Try again!`;
    }

    if (playerChoice == 'rock' && computerChoice == 'scissors') {
        console.log(`WIN: ${playerChoice} wins over ${computerChoice}`);
        battleText = `Your rock smashes the scissors! YOU WIN!`;
        ++wins;
    } else if (playerChoice == 'rock' && computerChoice == 'paper') {
        console.log(`LOSS: ${playerChoice} loses to ${computerChoice}`);
        battleText = `Your rock is smothered by the paper! YOU LOSE!`;
        ++losses;
    }

    if (playerChoice == 'paper' && computerChoice == 'rock') {
        console.log(`WIN: ${playerChoice} wins over ${computerChoice}`);
        battleText = `Your paper smothers the rock! YOU WIN!`;
        ++wins;
    } else if (playerChoice == 'paper' && computerChoice == 'scissors') {
        console.log(`LOSS: ${playerChoice} loses to ${computerChoice}`);
        battleText = `Your paper is cut to ribbons by the scissors! YOU LOSE!`;
        ++losses;
    }

    if (playerChoice == 'scissors' && computerChoice == 'paper') {
        console.log(`WIN: ${playerChoice} wins over ${computerChoice}`);
        battleText = `Your scissors shred the paper! YOU WIN!`;
        ++wins;
    } else if (playerChoice == 'scissors' && computerChoice == 'rock') {
        console.log(`LOSS: ${playerChoice} loses to ${computerChoice}`);
        battleText = `Your scissors are smashed by the rock! YOU LOSE!`;
        ++losses;
    }

    console.log(`losses: ${losses} | wins: ${wins}`);
    document.getElementById('game-battle-result').innerHTML = battleText;
    statsMessage = `Wins: ${wins} | Losses: ${losses}`
    document.getElementById('stats-text').innerHTML = statsMessage;


};

