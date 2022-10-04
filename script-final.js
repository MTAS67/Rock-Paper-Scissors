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
       while (input == null){
        input = prompt('Remember to enter rock, paper, or scissors,')
       }
       input = input.toLowerCase();
       console.log(input);
    }    
    
function computerChoice(){
    return choices[Math.floor(Math.random() * 3)]
}

game();

