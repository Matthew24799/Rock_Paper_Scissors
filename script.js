let wins = 0; // amount of wins the player has 
let loss = 0; // amount of losses the player has 

function getComputerChoice() {                                                    // a function to create an array and then pick one of the three choices from it 
    let computerChoices = ["rock", "paper", "scissors"];                           // creates array
   let random = Math.floor(Math.random() * computerChoices.length);                // randomly assigns random to a number between 1-3
   let computerChoice = computerChoices[random];                                   // assigns computerChoice to one of the arrays items depending on the value of the variable above
   console.log("Computer picked: " + computerChoice);                              // logs it 
   return computerChoice;                                                          // returns the value 


}


function playRound(playerChoice, computerChoice) {                                // function to play a single round with the game rule set built in and also keeps counts of wins and losses
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


while (wins < 3 && loss < 3) {                                                      // a loop for the game to play a best of 3
    let playerChoice = prompt("Enter Rock, Paper, or Scissors");                       // ask player for an input
playerChoice = playerChoice.toLocaleLowerCase();                                        // makes it lowercase so theres no mistake
console.log("Player picked: " + playerChoice);                                          // logs it
let computerChoice = getComputerChoice();                                                  // makes a variable to store the computerChoice from the function


console.log(playRound(playerChoice, computerChoice));                                       // calls the playRound function with the parameters 
console.log("Player Score: " + wins);                                                       // logs win
console.log("Computer Score: " + loss);                                                     // logs losses


}

if (wins == 3) {                                                                // states the winner 
    console.log("You Won The Game");
} else if (loss == 3) {
    console.log("You Lost The Game");                                           // states the loser 
}
