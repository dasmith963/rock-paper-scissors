let playerScore = 0;
let computerScore = 0;
const playerScoreBoard = document.querySelector('.player-score');
const computerScoreBoard = document.querySelector('.computer-score');
const roundResult = document.querySelector('.round-result');
const finalResult = document.querySelector('.final-result');
const newGame = document.querySelector('.new-game')
const choiceButtons = document.querySelectorAll('.player-choice');

choiceButtons.forEach(button => button.addEventListener('click', playRound));

newGame.addEventListener('click', () =>{
  playerScore = 0;
  computerScore = 0;
  choiceButtons.forEach(button => button.disabled = false);
  playerScoreBoard.textContent = playerScore;
  computerScoreBoard.textContent = computerScore;
  roundResult.textContent = 'Please Make A Selection'
  finalResult.textContent = 'Let\'s play a game, first to score 5 points wins!'
})

function getComputerChoice() {
  const choices = ['rock', 'paper', 'scissors'];
  const randomNumber = Math.floor(Math.random() * 3);
  return choices[randomNumber];
}

function checkWinner(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    roundResult.textContent = `It's a tie! You both picked ${playerSelection}`;
  } 
  else if (playerSelection === 'rock' && computerSelection === 'scissors'){
    roundResult.textContent = 'You win! Rock crushes scissors';
    return 'player';
  }
  else if (playerSelection === 'paper' && computerSelection === 'rock'){
    roundResult.textContent = 'You win! Paper covers rock';
    return 'player';
  }
   else if (playerSelection === 'scissors' && computerSelection === 'paper'){
    roundResult.textContent = 'You win! Scissors cuts paper';
    return 'player';
   }
  else {
      roundResult.textContent = `You lost, ${computerSelection} beats ${playerSelection}`;
      return 'computer';
    }
}

function updateScore(winner) {
  if (winner === 'player') playerScoreBoard.textContent = ++playerScore;
  if (winner === 'computer') computerScoreBoard.textContent = ++computerScore;
}

function declareWinner() {
  if (playerScore === 5) {
    finalResult.textContent = 'Congratulations!! You win!';
    choiceButtons.forEach(button => button.disabled = true);
  }
  
  if (computerScore === 5){
    finalResult.textContent = 'You lose. Would you like a rematch?';
    choiceButtons.forEach(button => button.disabled = true);
  }
}

function playRound(ev) {
  playerSelection = ev.target.id;
  computerSelection = getComputerChoice();
  winner = checkWinner(playerSelection, computerSelection);
  updateScore(winner);
  declareWinner();
}

