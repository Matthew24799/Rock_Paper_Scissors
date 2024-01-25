

function getComputerChoice() {
    let computerChoices = ["rock", "paper", "scissors"];
   let random = Math.floor(Math.random() * computerChoices.length);
   let computerChoice = computerChoices[random];
   console.log("Computer picked: " + computerChoice);
   return computerChoice;


}


function playRound(playerChoice, computerChoice) {
    if (playerChoice == computerChoice) {
        return "IT'S A TIE";
    } else if ( (playerChoice == "rock" && computerChoice == "scissors") ||
              (playerChoice == "paper" && computerChoice == "rock") ||
              (playerChoice == "scissors" && computerChoice == "paper") ) 
              {

                return "YOU WIN";
              }  else {
                return "YOU LOSE";
              }
}

let computerChoice = getComputerChoice();

let playerChoice = prompt("Enter Rock, Paper, or Scissors");
playerChoice = playerChoice.toLocaleLowerCase();
console.log("Player picked: " + playerChoice);


console.log(playRound(playerChoice, computerChoice));

