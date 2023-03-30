function getComputerChoice() {
  let rpsChoices = ['Rock', 'Paper', 'Scissors']
  let computerChoice = rpsChoices[Math.floor(Math.random() * 3)]
  return computerChoice
}
function getResult(playerChoice, computerChoice) {
  
  let s;

  if (playerChoice === computerChoice) {
    s = 0

  
  } else if (playerChoice === 'Rock' && computerChoice === 'Scissors') {
    s = 1

  } else if (playerChoice === "Paper" && computerChoice === "Rock") {
    s = 1

  } else if (playerChoice === "Scissors" && computerChoice === "Paper") {
    s = 1

  } else {
    s = -1
  }

  // return score
  return s
}

function showResult(point, playerChoice, computerChoice) {
  // Hint: on a score of -1
  // You should do result.innerText = 'You Lose!'
  let result = document.getElementById('result')
  switch (point) {
    case -1:
      result.innerText = `You Lose!`
      break;
    case 0:
      result.innerText = `It's a Draw!`
      break;
    case 1:
      result.innerText = `You Win!`
      break;
  }

  let playerScore = document.getElementById('player-score')
  let hands = document.getElementById('hands')
  //update 
  playerScore.innerText = `${Number(playerScore.innerText) + point}`
    hands.innerText = `👱 ${playerChoice} vs 🤖 ${computerChoice}`
}

function onClickRPS(playerChoice) {
  const computerChoice = getComputerChoice()
  const score = getResult(playerChoice.value, computerChoice)
  showResult(score, playerChoice.value, computerChoice)
}

function playGame() {
  let rpsButtons = document.querySelectorAll('.rpsButton')

  
  rpsButtons.forEach(rpsButton => {
    rpsButton.onclick = () => onClickRPS(rpsButton)
  })

  let endGameButton = document.getElementById('endGameButton')
  endGameButton.onclick = () => endGame()
}

function endGame() {
  let playerScore = document.getElementById('player-score')
  let hands = document.getElementById('hands')
  let result = document.getElementById('result')
  playerScore.innerText = ''
  hands.innerText = ''
  result.innerText = ''
}

playGame()
