const rock = "rock";
const paper = "paper";
const scissors = "scissors";


function getComputerChoice() {
    let zeroToThree=(Math.floor(Math.random() * 3))
    if (zeroToThree === 0) { computerChoice = "rock" ;}
    else if (zeroToThree === 1) { computerChoice = "paper";}
    else if (zeroToThree === 2) { computerChoice = "scissors";}
    return computerChoice
}

let humanScore = 0
let computerScore = 0

computerChoice = getComputerChoice();

function playRound(humanChoice, computerChoice) {
    if (humanChoice === "rock" && computerChoice === "paper") { computerScore++; console.log("You lose! Paper beats Rock");}
    else if (humanChoice === "rock" && computerChoice === "scissors") { humanScore++; console.log("You win! Rock beats Scissors");}
    else if (humanChoice === "paper" && computerChoice === "rock") { humanScore++; console.log("You win! Paper beats Rock");}
    else if (humanChoice === "paper" && computerChoice === "scissors") { computerScore++; console.log("You lose! Scissors beats Paper");}
    else if (humanChoice === "scissors" && computerChoice === "rock") { computerScore++; console.log("You lose! Rock beats Scissors");}
    else if (humanChoice === "scissors" && computerChoice === "paper") { humanScore++; console.log("You win! Scissors beats Paper");}
    else {console.log("Tie");}
  }
  
function playGame() {
    function roundOne() {
        let humanChoice = prompt("What do you choose for round 1?", "rock/paper/scissors").toLowerCase();
        let computerChoice = getComputerChoice()
        playRound(humanChoice, computerChoice)
    }
    roundOne();
    console.log("Human: " + humanScore);
    console.log("Computer: " + computerScore);

    function roundTwo() {  
    let humanChoice = prompt("What do you choose for round 2?", "rock/paper/scissors").toLowerCase();
    let computerChoice = getComputerChoice()
    playRound(humanChoice, computerChoice)
    console.log("Human: " + humanScore);
    console.log("Computer: " + computerScore);
    }
    roundTwo();
    console.log("Human: " + humanScore);
    console.log("Computer: " + computerScore);

    function roundThree() {  
        let humanChoice = prompt("What do you choose for round 3?", "rock/paper/scissors").toLowerCase();
        let computerChoice = getComputerChoice()
        playRound(humanChoice, computerChoice)
        console.log("Human: " + humanScore);
        console.log("Computer: " + computerScore);
        }
        roundThree();
        console.log("Human: " + humanScore);
        console.log("Computer: " + computerScore);

        function roundFour() {
            let humanChoice = prompt("What do you choose for round 4?", "rock/paper/scissors").toLowerCase();
            let computerChoice = getComputerChoice()
            playRound(humanChoice, computerChoice)
        }
        roundFour();
        console.log("Human: " + humanScore);
        console.log("Computer: " + computerScore);
    
        function roundFive() {  
        let humanChoice = prompt("What do you choose for round 5?", "rock/paper/scissors").toLowerCase();
        let computerChoice = getComputerChoice()
        playRound(humanChoice, computerChoice)
        console.log("Human: " + humanScore);
        console.log("Computer: " + computerScore);
        }
        roundFive();
        console.log("Human: " + humanScore);
        console.log("Computer: " + computerScore);
}

playGame()