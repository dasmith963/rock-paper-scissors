  let playerScore = 0
  let computerScore = 0
  let result;
  let winnerIs;

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


function game(){


  for (let i = 0; i < 5; i++){
    playRound();
  }
  console.log (`Player: ${playerScore} | Computer ${computerScore}`);
}

game();