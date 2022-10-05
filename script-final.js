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
<<<<<<< HEAD
        input = prompt('Remember to enter rock, paper, or scissors,');
       }
       input = input.toLowerCase();
       let check = validateInput(input);

       //Reinstate this code under 'let check' if this update does not work
       if(check == true){
        console.log(input);
       }
       //console.log(input);
=======
        input = prompt('Remember to enter rock, paper, or scissors,')
       }
       input = input.toLowerCase();
       console.log(input);
>>>>>>> 7c4d7fbcd7b024568f7b1274600df129cd1130cf
    }    
    
function computerChoice(){
    return choices[Math.floor(Math.random() * 3)]
}

<<<<<<< HEAD
function validateInput(playerInput){
    if(choices.includes(playerInput)){
        return true;
    } else{
        return false;
    }

}
game();
=======
game();

>>>>>>> 7c4d7fbcd7b024568f7b1274600df129cd1130cf
