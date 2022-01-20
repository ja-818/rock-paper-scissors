//store the result of the game
let computerScore = 0;
let playerScore = 0;
let playerSelection = "";
let messages = document.querySelector(".messages");
let message = document.querySelector(".message");
let replay = document.querySelector(".rep");
let title = document.querySelector("h3");

const icons = document.querySelectorAll("i");
const rock = document.querySelector(`i[class="far fa-hand-rock"]`);
const paper = document.querySelector(`i[class="far fa-hand-paper"]`);
const scissors = document.querySelector(`i[class="far fa-hand-scissors"]`);

rock.addEventListener("click", storeChoice);
paper.addEventListener("click", storeChoice);
scissors.addEventListener("click", storeChoice);

rock.classList.remove(".far");
paper.classList.remove(".far");
scissors.classList.remove(".far");

function addRestart(){
  window.addEventListener("keydown", restart);
}

function removeRestart(){
  window.removeEventListener("keydown", restart);
}

function restart(){
  computerScore = 0;
  playerScore = 0;
  playerSelection = "";
  message.textContent = "Best of 5 wins";
  title.textContent = "Could you beat a computer?";
  removeRestart();
}

function storeChoice(e){
  if(this.classList.value == "far fa-hand-rock"){
    playerSelection = "rock";
  } else if(this.classList.value == "far fa-hand-paper"){
    playerSelection = "paper";
  } else if(this.classList.value == "far fa-hand-scissors"){
    playerSelection = "scissors";
  }

  if (computerScore < 3 && playerScore < 3){
    determineScore();
    // title.style.color = "rgb(71, 73, 73)";
  }
}

function determineScore(){

  //computer choses between rock-paper-scissors
  if(computerScore < 3 && playerScore < 3){
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
      message.textContent = "Paper beats rock, point for Computer!";
    }
    else if (playerSelection == "paper" && computerSelection == "scissors"){
      computerScore++;
      message.textContent = "Scissores beats paper, point for Computer!";
    }
    else if (playerSelection == "scissors" && computerSelection == "rock"){
      computerScore++;
      message.textContent = "Rock beat scissors, point for Computer!";
    }
    else if (playerSelection == "rock" && computerSelection == "scissors"){
      playerScore++;
      message.textContent = "Rock beats scissors, point for you!";
    }
    else if (playerSelection == "paper" && computerSelection == "rock"){
      playerScore++;
      message.textContent = "Paper beats rock, point for you!";
    }
    else if (playerSelection == "scissors" && computerSelection == "paper"){
      playerScore++;
      message.textContent = "Scissors beats paper, point for you!";
    }
    else {
      message.textContent = "Tie!";
    }
  }
  else{
    
  }
  if (computerScore == 3 || playerScore == 3){
    addRestart();
    if (computerScore == 3){
      title.textContent = "Computer wins :(";
      message.textContent = "Press any key to try again!"
    } else if (playerScore == 3){
      title.textContent = "You win!";
      message.textContent = "Press any key to play again!";
    }
  }
}



//plays until one wins 3 out of 5



//print the winner

