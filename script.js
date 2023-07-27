function getComputerChoice() {
    const choices = (["Rock", "Paper", "Scissors"]).map(el => el.toLowerCase());
    const randomIndex = (Math.floor(Math.random() * 3));
    return choices[randomIndex];
  }
  
  function playRound(playerSelection, computerSelection) {
    if (
      (computerSelection === 'scissors' && playerSelection === 'rock') ||
      (computerSelection === 'rock' && playerSelection === 'paper') ||
      (computerSelection === 'paper' && playerSelection === 'scissors')
    ) {
      return 'You win!';
  
 
    } else if (
      (playerSelection === 'scissors' && computerSelection === 'rock') ||
      (playerSelection === 'rock' && computerSelection === 'paper') ||
      (playerSelection === 'paper' && computerSelection === 'scissors')
    ) {
      return 'You lose!';
  
    } else {
      return "It's a tie"
    }
  
  }