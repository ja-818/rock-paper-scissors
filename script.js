//store the result of the game
let computerScore = 0;
let playerScore = 0;

function determineScore(){

  //player choses between rock-paper-scissors
  //the selection is stored as lower case
  let playerSelection = window.prompt("Rock, paper, or scissors?").toLowerCase();

  //computer choses between rock-paper-scissors

  let computerSelection = selectOption();

  function selectOption(choice, random){
      random = Math.random();
        if (random < 0.33) {
              choice = "rock";
    } 
    else if (0.33 < random && random < 0.64){
      choice = "paper";
    }
    else {
      choice = "scissors";
    }

    return choice;
  }

  //player plays rock-paper-scissors against computer, the result is stored

  if (playerSelection == "rock" && computerSelection == "paper"){
    computerScore++;
    console.log("Paper beats rock, point for Computer!");
  }
  else if (playerSelection == "paper" && computerSelection == "scissors"){
    computerScore++;
    console.log("Scissores beats paper, point for Computer!");
  }
  else if (playerSelection == "scissors" && computerSelection == "rock"){
    computerScore++;
    console.log("Rock beat scissors, point for Computer!");
  }
  else if (playerSelection == "rock" && computerSelection == "scissors"){
    playerScore++;
    console.log("Rock beats scissors, point for Player!");
  }
  else if (playerSelection == "paper" && computerSelection == "rock"){
    playerScore++;
    console.log("Paper beats rock, point for Player!");
  }
  else if (playerSelection == "scissors" && computerSelection == "paper"){
    playerScore++;
    console.log("Scissors beats paper, point for Player!");
  }
  else {
    console.log("Tie!");
  }
}

//plays until one wins 3 out of 5

while (computerScore < 3 && playerScore < 3){
  determineScore();
}

//print the winner

if (computerScore == 3){
  console.log("Computer wins");
}

if (playerScore == 3){
  console.log("Player wins");
}