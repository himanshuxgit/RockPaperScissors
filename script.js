function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

function playRound(playerSelection, computerSelection) {
  if (
    (computerSelection === "scissors" && playerSelection === "rock") ||
    (computerSelection === "rock" && playerSelection === "paper") ||
    (computerSelection === "paper" && playerSelection === "scissors")
  ) {
    return "You win!";
  } else if (
    (playerSelection === "scissors" && computerSelection === "rock") ||
    (playerSelection === "rock" && computerSelection === "paper") ||
    (playerSelection === "paper" && computerSelection === "scissors")
  ) {
    return "You lose!";
  } else {
    return "It's a tie";
  }
}

function game(playerSelection) {
  const computerSelection = getComputerChoice();

  const result = playRound(playerSelection, computerSelection);
  const resultsDiv = document.getElementById("results");
  resultsDiv.textContent = `You chose: ${playerSelection}. The computer chose: ${computerSelection}. ${result}`;

  let playerScore = parseInt(document.getElementById("player-score").textContent);
  let computerScore = parseInt(document.getElementById("computer-score").textContent);

  if (result.includes("win")) {
    playerScore++;
  } else if (result.includes("lose")) {
    computerScore++;
  }

  document.getElementById("player-score").textContent = playerScore;
  document.getElementById("computer-score").textContent = computerScore;

  if (playerScore === 5) {
    resultsDiv.textContent += "\n\nYou won the game!";
    disableButtons();
  } else if (computerScore === 5) {
    resultsDiv.textContent += "\n\nYou lost the game!";
    disableButtons();
  }
}

function disableButtons() {
  const buttons = document.querySelectorAll(".choices button");
  buttons.forEach(button => button.removeEventListener("click", handleClick));
}

function handleClick(event) {
  const playerSelection = event.target.id;
  game(playerSelection);
}

function resetGame() {
  const resultsDiv = document.getElementById("results");
  const buttons = document.querySelectorAll(".choices button");
  buttons.forEach(button => button.addEventListener("click", handleClick));

  document.getElementById("player-score").textContent = "0";
  document.getElementById("computer-score").textContent = "0";
  resultsDiv.textContent = "";


  buttons.forEach(button => button.disabled = false);
}

const buttons = document.querySelectorAll(".choices button");
buttons.forEach(button => button.addEventListener("click", handleClick));

const resetButton = document.getElementById("reset");
resetButton.addEventListener("click", resetGame);