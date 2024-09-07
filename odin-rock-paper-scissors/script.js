function getComputerChoice(){
    let choice = Math.floor(Math.random() * 3);
    switch(choice){
        case 1:
            return 'rock';
            break;
        case 2:
            return 'paper';
            break;
        case 0:
            return 'scissors';
            break;
        default:
            break;         
    }     
}
function getHumanChoice(){
    let choice = prompt("Choose: rock, paper, scissors");
    choice = choice.toLowerCase();
        switch(choice){
            case 'rock':
                return choice;
                break;
            case 'paper':
                return choice;
                break;
            case 'scissors':
                return choice;
                break;
            default:
                console.log("Wrong input!");
                break;
        }
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice){
      
        /* ROCK */ 

        if(humanChoice == 'rock' && computerChoice == 'scissors'){
            humanScore++;
        } else if (humanChoice == 'rock' && computerChoice == 'paper'){
            computerScore++;
        } else if (humanChoice == 'rock' && computerChoice == 'rock'){

        /* PAPER */    

        } else if (humanChoice == 'paper' && computerChoice == 'scissors'){
            computerScore++;
        } else if (humanChoice == 'paper' && computerChoice == 'rock'){
            humanScore++;    
        } else if (humanChoice == 'paper' && computerChoice == 'paper'){                    
        
        /* SCISSORS */
        
        } else if (humanChoice == 'scissors' && computerChoice == 'paper'){
            humanScore++;
        } else if (humanChoice == 'scissors' && computerChoice == 'rock'){
            computerScore++;
        } else if(humanChoice == 'scissors' && computerChoice == 'scissors'){ 
        }
}        
function playGame(){
    for (let i = 0; i < 5; i++){
        let humanSelection = getHumanChoice();
        let computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
        console.log("Human score: ", humanScore);
        console.log("Computer score: ", computerScore); 
    }
    if(computerScore > humanScore) {
            console.log("The computer has won!");
        } else if (computerScore < humanScore) {
            console.log("Congratulations, human, you have won!");
        } else {
            console.log("It's a tie!");
        }
}

playGame()