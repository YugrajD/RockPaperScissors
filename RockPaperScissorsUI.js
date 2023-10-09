let choices = ["rock", "paper", "scissors"]

playerWins = 0;
comWins = 0;
ties = 0;

function playRound(playerChoice, comChoice) {
  playerChoice = prompt("Rock Paper Scissors Shoot!: ")
  comChoice = Math.floor(Math.random() * choices.length);

  if (playerChoice.toLowerCase() === "rock" & comChoice === 1) {
      console.log("They chose paper, you lose!");
      comWins += 1
  } else if (playerChoice.toLowerCase() === "paper" & comChoice === 1) {
      console.log("They chose paper, it's a tie")
      ties += 1
  }
    else if (playerChoice.toLowerCase() === "scissors" & comChoice === 1) {
      console.log("They chose paper, you won!")
      playerWins += 1
  }
    else if (playerChoice.toLowerCase() === "paper" & comChoice === 2) {
      console.log("They chose scissors, you lose!")
      comWins += 1
  }
    else if (playerChoice.toLowerCase() === "scissors" & comChoice === 2) {
      console.log("They chose scissors, it's a tie")
      ties += 1
  }
    else if (playerChoice.toLowerCase() === "rock" & comChoice === 2) {
      console.log("They chose scissors, you won!")
      playerWins += 1
  }
    else if (playerChoice.toLowerCase() === "scissors" & comChoice === 0) {
      console.log("They chose rock, you lose!")
      comWins += 1
  } else if (playerChoice.toLowerCase() === "rock" & comChoice === 0) {
      console.log("They chose rock, it's a tie")
      ties += 1
  }
    else if (playerChoice.toLowerCase() === "paper" & comChoice === 0) {
      console.log("They chose rock, you won!")
      playerWins += 1
  }

}


function game() {
    for (i = 0; i < 5; i++) {
        playRound()
    }
}
game();
console.log("The record was", playerWins,"-",comWins,"-",ties);
