let playerScore = 0;
let computerScore = 0;
const playerScoreBoard = document.querySelector('.player-score');
const computerScoreBoard = document.querySelector('.computer-score');
const roundResult = document.querySelector('.round-result');
const matchChoices = document.querySelector('.match-choices');
const finalResult = document.querySelector('.final-result');
const newGame = document.querySelector('.new-game');
const playerCardText = document.querySelector('.player-choice-text');
const computerCardText = document.querySelector('.computer-choice-text');
const playerIcon = document.querySelector('.player-icon');
const computerIcon = document.querySelector('.computer-icon');
const choiceButtons = document.querySelectorAll('.player-choice');

choiceButtons.forEach(button => button.addEventListener('click', playRound));

function capitalizeFirstLetter (string){
  return string.toUpperCase().charAt(0) + string.substring(1).toLowerCase();
}

function getComputerChoice() {
  const choices = ['rock', 'paper', 'scissors'];
  const randomNumber = Math.floor(Math.random() * 3);
  return choices[randomNumber];
}

function checkWinner(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    roundResult.textContent = 'It\'s a tie!';
    matchChoices.textContent = `You both picked ${playerSelection}`;
  } 
  else if (playerSelection === 'rock' && computerSelection === 'scissors'){
    roundResult.textContent = 'You win!';
    matchChoices.textContent = 'Rock crushes scissors';
    playerScoreBoard.textContent = ++playerScore;
  }
  else if (playerSelection === 'paper' && computerSelection === 'rock'){
    roundResult.textContent = 'You win!';
    matchChoices.textContent = 'Paper covers rock';
    playerScoreBoard.textContent = ++playerScore;
  }
   else if (playerSelection === 'scissors' && computerSelection === 'paper'){
    roundResult.textContent = 'You win!';
    matchChoices.textContent = 'Scissors cuts paper';
    playerScoreBoard.textContent = ++playerScore;
   }
  else {
    roundResult.textContent = 'You lost.';
    matchChoices.textContent = `${capitalizeFirstLetter(computerSelection)} beats ${playerSelection}`;
    computerScoreBoard.textContent = ++computerScore;
    }
}

function updatePlayerCard(playerSelection){
  if (playerSelection === 'rock'){
    playerIcon.innerHTML = '<i class="fa-regular fa-hand-back-fist fa-2xl"></i>';
    playerCardText.textContent = 'Rock';
  }
  if (playerSelection === 'paper'){
    playerIcon.innerHTML = '<i class="fa-regular fa-hand fa-2xl"></i>';
    playerCardText.textContent = 'Paper';
  }
  if (playerSelection === 'scissors'){
    playerIcon.innerHTML = '<i class="fa-regular fa-hand-scissors fa-flip-horizontal fa-2xl"></i>';
    playerCardText.textContent = 'Scissors';
  }
}

function updateComputerCard(computerSelection){
  if (computerSelection === 'rock'){
    computerIcon.innerHTML = '<i class="fa-regular fa-hand-back-fist fa-2xl"></i>';
    computerCardText.textContent = 'Rock';
  }
  if (computerSelection === 'paper'){
    computerIcon.innerHTML = '<i class="fa-regular fa-hand fa-2xl"></i>';
    computerCardText.textContent = 'Paper';
  }
  if (computerSelection === 'scissors'){
    computerIcon.innerHTML = '<i class="fa-regular fa-hand-scissors fa-2xl"></i>';
    computerCardText.textContent = 'Scissors';
  }
}

function isGameOver() {
  if (playerScore === 5) {
    finalResult.textContent = 'Congratulations! You won the game!';
    choiceButtons.forEach(button => button.disabled = true);
  }
  
  if (computerScore === 5){
    finalResult.textContent = 'You lost the game. Would you like a rematch?';
    choiceButtons.forEach(button => button.disabled = true);
  }
}

function playRound(ev) {
  playerSelection = ev.target.id;
  computerSelection = getComputerChoice();
  checkWinner(playerSelection, computerSelection);
  updatePlayerCard(playerSelection);
  updateComputerCard(computerSelection);
  isGameOver();
}

newGame.addEventListener('click', () =>{
  playerScore = 0;
  computerScore = 0;
  choiceButtons.forEach(button => button.disabled = false);
  playerScoreBoard.textContent = playerScore;
  computerScoreBoard.textContent = computerScore;
  playerCardText.textContent = '';
  computerCardText.textContent = '';
  playerIcon.innerHTML = '<i class="fa-solid fa-question fa-bounce fa-2xl"></i>';
  computerIcon.innerHTML = '<i class="fa-solid fa-question fa-bounce fa-2xl"></i>';
  roundResult.textContent = '';
  matchChoices.textContent = '';
  finalResult.textContent = 'Let\'s play a game, first to score 5 points wins!';
})



