let playerScore = 0;
let computerScore = 0;
const choiceBtns = document.querySelectorAll('.player-choice');

choiceBtns.forEach(button => addEventListener('click', playRound));

function getComputerChoice() {
  const choices = ['rock', 'paper', 'scissors'];
  const randomNumber = Math.floor(Math.random() * 3);
  return choices[randomNumber];
}

function playRound(playerSelection, computerSelection) {
  playerSelection = prompt('What will you choose, Rock, Paper or Scissors?');
  computerSelection = getComputerChoice();

  if (playerSelection === '' || playerSelection === null){
    result = 'Please make a selection' 
  }else if(playerSelection.toLowerCase() === computerSelection){
    result = `It's a tie! You both picked ${playerSelection}`
  } else if (playerSelection.toLowerCase() === 'rock' && computerSelection === 'scissors'){
    playerScore++
    result = 'You win! Rock crushes scissors';
  } else if (playerSelection.toLowerCase() === 'paper' && computerSelection === 'rock'){
    playerScore++
    result = 'You win! Paper covers rock';
  } else if (playerSelection.toLowerCase() === 'scissors' && computerSelection === 'paper'){
    playerScore++
    result = 'You win! Scissors cuts paper';
  } else {
    computerScore++
    result = `You lost, ${computerSelection} beats ${playerSelection}`;
  }
  console.log(`${result}, \n Your Score: ${playerScore} | Computer ${computerScore}`);
}

function declareWinner(){
  if (playerScore === 0 && computerScore === 0){
    winnerIs = 'I guess you didn\'t want to play with me.';
  } else if (playerScore > computerScore){
    winnerIs = 'You win!';
  } else if (computerScore > playerScore){
    winnerIs = 'You lose. Would you like a rematch?';
  }else{
    winnerIs = 'It\'s a Draw. Let\'s play again!';
  }
}
