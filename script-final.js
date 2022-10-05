const choices = ['rock', 'paper', 'scissors']


function game(){
    playRound();
}

function playRound(){
    const playerSelection = playerChoice();
    const computerSelection = computerChoice();    
}


function playerChoice (){
       let input = prompt('Enter rock, paper, or scissors');
       console.log(input);
    }    
    
function computerChoice(){
    return choices[Math.floor(Math.random() * 3)]
}

game();

