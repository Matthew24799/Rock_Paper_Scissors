let wins = 0;
let loss = 0;

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
                wins++
                return "You won the round";
              }  else {
                loss++
                return "You lost the round";
              }
}


while (wins < 3 && loss < 3) {
    let playerChoice = prompt("Enter Rock, Paper, or Scissors");
playerChoice = playerChoice.toLocaleLowerCase();
console.log("Player picked: " + playerChoice);
let computerChoice = getComputerChoice();


console.log(playRound(playerChoice, computerChoice));
console.log("Player Score: " + wins);
console.log("Computer Score: " + loss);


}

if (wins == 3) {
    console.log("You Won The Game");
} else if (loss == 3) {
    console.log("You Lost The Game");
}
