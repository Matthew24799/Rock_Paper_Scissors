

function getComputerChoice() {
    let computerChoices = ["rock", "paper", "scissors"];
   let random = Math.floor(Math.random() * computerChoices.length);
   let computerChoice = computerChoices[random];
   console.log("Computer picked: " + computerChoice);
   return computerChoice;


}

let playerChoice = prompt("Enter Rock, Paper, or Scissors");
playerChoice = playerChoice.toLocaleLowerCase();
console.log("Player picked: " + playerChoice);

getComputerChoice();