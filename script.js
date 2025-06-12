const rock = "rock";
const paper = "paper";
const scissors = "scissors";
// var playButton = document.querySelector('button.playRound');
var instructions = document.querySelector('div.instruction');
var score = document.querySelector('div.score');
var results = document.querySelector('div.results');
var winner = document.querySelector('div.winner');
var playRock = document.querySelector("button.rock");
var playPaper = document.querySelector("button.paper");
var playScissors = document.querySelector("button.scissors");


function getComputerChoice() {
    let zeroToThree=(Math.floor(Math.random() * 3))
    if (zeroToThree === 0) { computerChoice = "rock" ;}
    else if (zeroToThree === 1) { computerChoice = "paper";}
    else if (zeroToThree === 2) { computerChoice = "scissors";}
    return computerChoice
}

let humanScore = 0;
let computerScore = 0;

let newGame = document.createElement("div");

// computerChoice = getComputerChoice();
function winCheck() {
    if (humanScore === 5) {winner.innerHTML = '<h2 style="color: white;">You win!</h2>';}
    else if (computerScore === 5) {winner.innerHTML = '<h3 style="color: white;">You lose</h3>';
       
    }   if (humanScore === 5 || computerScore === 5) {newGame.innerHTML = '<button class="button" onClick="window.location.href=window.location.href">New Game</button>'; instructions.appendChild(newGame);}
}

function playRound(humanChoice) {
    let computerChoice = getComputerChoice();
    if (humanChoice === "rock" && computerChoice === "paper") { computerScore++; results.innerText = "You lose this round! Paper beats Rock";}
    else if (humanChoice === "rock" && computerChoice === "scissors") { humanScore++; results.innerText = "You win this round! Rock beats Scissors";}
    else if (humanChoice === "paper" && computerChoice === "rock") { humanScore++; results.innerText = "You win this round! Paper beats Rock";}
    else if (humanChoice === "paper" && computerChoice === "scissors") { computerScore++; results.innerText = "You lose this round! Scissors beats Paper";}
    else if (humanChoice === "scissors" && computerChoice === "rock") { computerScore++; results.innerText = "You lose this round! Rock beats Scissors";}
    else if (humanChoice === "scissors" && computerChoice === "paper") { humanScore++; results.innerText = "You win this round! Scissors beats Paper";}
    else {results.innerText = "Tie";}
    score.innerHTML = '<h4>You: '+humanScore+'<p> Computer: '+computerScore+'</p></h4>';
    winCheck();
}



// playButton.addEventListener('click', playRound);
playRock.addEventListener('click', () => playRound('rock'));
playPaper.addEventListener('click', () => playRound('paper'));
playScissors.addEventListener('click', () => playRound('scissors'));

// function playGame() {
//     function roundOne() {
//         let humanChoice = prompt("What do you choose for round 1?", "rock/paper/scissors").toLowerCase();
//         let computerChoice = getComputerChoice()
//         playRound(humanChoice, computerChoice)
//     }
//     roundOne();
//     console.log("Human: " + humanScore);
//     console.log("Computer: " + computerScore);

//     function roundTwo() {  
//     let humanChoice = prompt("What do you choose for round 2?", "rock/paper/scissors").toLowerCase();
//     let computerChoice = getComputerChoice()
//     playRound(humanChoice, computerChoice)
//     console.log("Human: " + humanScore);
//     console.log("Computer: " + computerScore);
//     }
//     roundTwo();
//     console.log("Human: " + humanScore);
//     console.log("Computer: " + computerScore);

//     function roundThree() {  
//         let humanChoice = prompt("What do you choose for round 3?", "rock/paper/scissors").toLowerCase();
//         let computerChoice = getComputerChoice()
//         playRound(humanChoice, computerChoice)
//         console.log("Human: " + humanScore);
//         console.log("Computer: " + computerScore);
//         }
//         roundThree();
//         console.log("Human: " + humanScore);
//         console.log("Computer: " + computerScore);

//         function roundFour() {
//             let humanChoice = prompt("What do you choose for round 4?", "rock/paper/scissors").toLowerCase();
//             let computerChoice = getComputerChoice()
//             playRound(humanChoice, computerChoice)
//         }
//         roundFour();
//         console.log("Human: " + humanScore);
//         console.log("Computer: " + computerScore);
    
//         function roundFive() {  
//         let humanChoice = prompt("What do you choose for round 5?", "rock/paper/scissors").toLowerCase();
//         let computerChoice = getComputerChoice()
//         playRound(humanChoice, computerChoice)
//         console.log("Human: " + humanScore);
//         console.log("Computer: " + computerScore);
//         }
//         roundFive();
//         console.log("Human: " + humanScore);
//         console.log("Computer: " + computerScore);


// playGame()