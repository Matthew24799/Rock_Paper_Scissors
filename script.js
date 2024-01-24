function getComputerChoice() {
    let computerChoices = ["rock", "paper", "scissors"];
   let random = Math.floor(Math.random() * computerChoices.length);
   let computerChoice = computerChoices[random];
   console.log("Computer picked: " + computerChoice);
   return computerChoice;


}



getComputerChoice();