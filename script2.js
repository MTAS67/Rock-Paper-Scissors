
//This function gets the computer choice.
function getComputerChoice(){ 
   let randomNumber = (Math.floor(Math.random() * 3)) 
    if (randomNumber === 0){
     return 'rock';
    } else if (randomNumber === 1){
     return 'paper';
    } else if (randomNumber === 2)
    return 'scissors';
   }
  //console.log(getComputerChoice());
 
  //This function plays one round
  function playRound(playerSelection, computerSelection) {
    
 }
  
 let playerSelection = 'rock';
 let computerSelection = getComputerChoice();
 console.log(playRound);


 //function playRound (){
//return //'You win';
// }
for (let i = 0; i < 5; i++){ 
    playerSelection = prompt ('Rock, Paper, or Scissors?');
    console.log(playerSelection);
    console.log(computerSelection);
 if(playerSelection == computerSelection){
     console.log ('We have a tie.');
 
  } else if (playerSelection.toLowerCase() == 'rock' && computerSelection.toLowerCase() == 'scissors') {
     console.log ('Player wins.')
  } else if (playerSelection.toLowerCase() == 'paper' && computerSelection.toLowerCase() == 'rock'){
     console.log ('Player wins.')
  } else if (playerSelection.toLowerCase() == 'scissors' && computerSelection.toLowerCase() == 'paper'){
     console.log ('Player wins.')
  } else if (computerSelection.toLowerCase() == 'rock' && playerSelection.toLowerCase() == 'scissors') {
     console.log ('Computer wins.') 
  } else if (computerSelection.toLowerCase() == 'paper' && playerSelection.toLowerCase() == 'rock') {
     console.log ('Computer wins.')
  } else if (computerSelection.toLowerCase() == 'Scissors' && playerSelection.toLowerCase() == 'Paper') {
     console.log ('Computer wins.')
  }
 }
 