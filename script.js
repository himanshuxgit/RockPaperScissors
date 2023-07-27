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
  function game() {
    let playerScore = 0;
    let computerScore = 0;
  
    for (let i = 0; i < 5; i++) {
      const playerSelection = prompt('Enter your choice: ').toLowerCase();
      const computerSelection = getComputerChoice();
  
      console.log('Round ' + (i + 1));
      console.log('You chose: ' + playerSelection);
      console.log('The computer chose: ' + computerSelection);
  
      const result = playRound(playerSelection, computerSelection);
      console.log(result);
  
      if (result.includes('win')) {
        playerScore++;
      } else if (result.includes('lose')) {
        computerScore++;
      }
    }
  
    if (playerScore > computerScore) {
      console.log('You won the game!');
    } else if (playerScore < computerScore) {
      console.log('You lost the game!');
    } else {
      console.log('The game was a tie.');
    }
  }
  
  game(); 