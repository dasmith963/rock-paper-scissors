let playerScore = 0;
let computerScore = 0;
const playerScoreBoard = document.querySelector('.player-score');
const computerScoreBoard = document.querySelector('.computer-score');
const roundResult = document.querySelector('.round-result');
const choiceButtons = document.querySelectorAll('.player-choice');

choiceButtons.forEach(button => button.addEventListener('click', playRound));

function getComputerChoice() {
  const choices = ['rock', 'paper', 'scissors'];
  const randomNumber = Math.floor(Math.random() * 3);
  return choices[randomNumber];
}

function checkWinner(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    roundResult.textContent = `It's a tie! You both picked ${playerSelection}`;
  } else if (playerSelection === 'rock'){
    if (computerSelection === 'scissors') {
      roundResult.textContent = 'You win! Rock crushes scissors';
      return 'player';
    } 
  } else if (playerSelection ==='paper'){
    if (computerSelection === 'rock'){
      roundResult.textContent = 'You win! Paper covers rock';
      return 'player';
    }
  } else if (playerSelection === 'scissors'){
    if (computerSelection === 'paper'){
      roundResult.textContent = 'You win! Scissors cuts paper';
      return 'player';
    }
  } else{
    roundResult.textContent = `You lost, ${computerSelection} beats ${playerSelection}`;
    return 'computer';
  }
}

function playRound(ev) {
  playerSelection = ev.target.id;
  computerSelection = getComputerChoice();
  
  

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
