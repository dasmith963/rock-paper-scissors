let playerScore = 0
let computerScore = 0

function getComputerChoice() {
  const randomNumber = Math.floor((Math.random() * 3) + 1);

  if (randomNumber === 1) {
    return 'rock';
  } else if (randomNumber === 2) {
    return 'paper';
  } else {
    return 'scissors';
  }
}

function playRound(playerSelection, computerSelection) {
  playerSelection = prompt('What will you choose, Rock, Paper or Scissors?').toLowerCase();
  computerSelection = getComputerChoice();

  if (playerSelection === '' || playerSelection === null){
    return 'Please make a selection'
  }else if(playerSelection === computerSelection){
    return `It's a tie! You both picked ${playerSelection}`
  } else if (playerSelection === 'rock' && computerSelection === 'scissors'){
    playerScore++
    return 'You win! Rock crushes scissors';
  } else if (playerSelection === 'paper' && computerSelection === 'rock'){
    playerScore++
    return 'You win! Paper covers rock';
  } else if (playerSelection === 'scissors' && computerSelection === 'paper'){
    playerScore++
    return 'You win! Scissors cuts paper';
  } else {
    computerScore++
    return `You lost, ${computerSelection} beats ${playerSelection}`;
  }

}

// “best of 5” While counter is smaller than 5 increment the counter by one
// Print the value of the counter variable