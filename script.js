const rock = "rock";
const paper = "paper";
const scissors = "scissors";
let computerChoice

let humanChoice = prompt("What do you choose?", "rock/paper/scissors").toLowerCase();


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
console.log(computerChoice)
console.log(humanChoice)

function playRound(humanChoice, computerChoice) {
    if (humanChoice === "rock" && computerChoice === "paper") { computerScore++; console.log("You lose! Paper beats Rock");}
    else if (humanChoice === "rock" && computerChoice === "scissors") { humanScore++; console.log("You win! Rock beats Scissors");}
    else if (humanChoice === "paper" && computerChoice === "rock") { humanScore++; console.log("You win! Paper beats Rock");}
    else if (humanChoice === "paper" && computerChoice === "scissors") { computerScore++; console.log("You lose! Scissors beats Paper");}
    else if (humanChoice === "scissors" && computerChoice === "rock") { computerScore++; console.log("You lose! Rock beats Scissors");}
    else if (humanChoice === "scissors" && computerChoice === "paper") { humanScore++; console.log("You win! Scissors beats Paper");}
    else {window.alert("Tie");}
  }
  
  playRound(humanChoice,computerChoice)
  console.log("Human: " + humanScore);
  console.log("Computer: " + computerScore);

// const humanSelection = humanChoice;
// const computerSelection = computerChoice;
  
// playRound(humanSelection, computerSelection);

  