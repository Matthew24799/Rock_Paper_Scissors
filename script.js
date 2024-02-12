let wins = 0; // amount of wins the player has 
let loss = 0; // amount of losses the player has 
const div = document.querySelector("#container");
const btns = document.querySelectorAll("button");
const winText = document.querySelector("#wins");
const lossText = document.querySelector("#losses");
const winner = document.querySelector("#winner")
const tie = document.createElement("h2");
btns.forEach((btns) => {
    btns.addEventListener("click", () => {
        tie.remove();
        let computerChoice = getComputerChoice();                                                 
        let playerChoice = btns.value;
        console.log("player picked: " +playerChoice);

playRound(playerChoice, computerChoice);    
winText.textContent = `Player's Wins: ${wins}`; 
lossText.textContent = `Computer's Wins: ${loss}`;                       
console.log("Player Score: " + wins);                                                       
console.log("Computer Score: " + loss);
    
    
if (wins == 3) {     
    winner.textContent = "PLAYER WINS";                                                       
    console.log("You Won The Game");
    div.remove();
} else if (loss == 3) {
    winner.textContent = "COMPUTER WINS";
    console.log("You Lost The Game");
                                
};


    function getComputerChoice() {                                                    // a function to create an array and then pick one of the three choices from it 
        let computerChoices = ["rock", "paper", "scissors"];                           // creates array
       let random = Math.floor(Math.random() * computerChoices.length);                // randomly assigns random to a number between 1-3
       let computerChoice = computerChoices[random];                                   // assigns computerChoice to one of the arrays items depending on the value of the variable above
       console.log("Computer picked: " + computerChoice);                              // logs it 
       return computerChoice;                                                          // returns the value 
    
    
    }
    
    
    function playRound(playerChoice, computerChoice) {                                // function to play a single round with the game rule set built in and also keeps counts of wins and losses
        if (playerChoice == computerChoice) {
            tie.textContent = "IT'S A TIE!";
            results.appendChild(tie);
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
    });
});

