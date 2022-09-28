   //This code gets the computer selectiom
   
   const computerPlay = () => {
   const array = ['rock', 'paper', 'scissors']
   const randomNumber = Math.floor(Math.random() * 3)
   const computerChoice = array[randomNumber]
   return computerChoice;
  }
   
   
//This code plays one round

const playRound = (playerSelect, computerSelection) => {
   if (playerSelect == 'rock' && computerSelection == 'rock'){
      return 'You have a tie. You both picked rock';
   } else if (playerSelect == 'paper' && computerSelection == 'paper'){
      return 'You have a tie. You both picked paper';
   } else if (playerSelect == 'scissors' && computerSelection == 'scissors'){
      return 'You have a tie. You both picked scissors';
   } else if (playerSelect == 'rock' && computerSelection == 'paper'){
      return 'You lost. Paper covers rock';
   } else if (playerSelect == 'rock' && computerSelection == 'scissors'){
      return 'You win! Rock crushes scissors';
   } else if (playerSelect == 'paper' && computerSelection == 'rock'){
      return 'You win! Paper covers rock';
   } else if (playerSelect == 'paper' && computerSelection == 'scissors'){
      return 'You lost! Scissors cut paper';
   } else if (playerSelect == 'scissors' && computerSelection == 'paper'){
      return 'You win. Scissors cut paper';
   } else if (playerSelect == 'rock' && computerSelection == 'paper');
      return 'You lost! Paper covers rock';

const newPlayerChoice = 'rock';
const newComputerChoice = computerPlay();
console.log(playRound(newPlayerChoice, newComputerChoice))
}
