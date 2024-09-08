
//"computer" randomly choosing one of three options 
function getComputerChoice(){
    let choice = Math.floor(Math.random() * 3);
    switch(choice){
        case 1:
            return 'rock';
            
        case 2:
            return 'paper';
            
        case 0:
            return 'scissors';
            
        default:
            break;         
    }     
}

//player choice
function getHumanChoice(){
    let choice = document.querySelector("#action").value;
    //prompt("Choose: rock, paper, scissors");
    
    choice = choice.toLowerCase();
        switch(choice){
            case 'rock':
                return choice;
                
            case 'paper':
                return choice;
                
            case 'scissors':
                return choice;
                
            default:
                console.log("Wrong input!");
                break;
        }
}

//default score
let humanScore = 0;
let computerScore = 0;

//dom manipulation****************************************************************

const button = document.querySelector("#actionButton");

button.addEventListener("click", () => {
    playGame();
});





//dom manipulation****************************************************************

//POINT SYSTEM
function playRound(humanChoice, computerChoice){
      
        // ROCK // 

        if(humanChoice == 'rock' && computerChoice == 'scissors'){
            humanScore++;
        } else if (humanChoice == 'rock' && computerChoice == 'paper'){
            computerScore++;
        } else if (humanChoice == 'rock' && computerChoice == 'rock'){

        // PAPER //    

        } else if (humanChoice == 'paper' && computerChoice == 'scissors'){
            computerScore++;
        } else if (humanChoice == 'paper' && computerChoice == 'rock'){
            humanScore++;    
        } else if (humanChoice == 'paper' && computerChoice == 'paper'){                    
        
        // SCISSORS //
        
        } else if (humanChoice == 'scissors' && computerChoice == 'paper'){
            humanScore++;
        } else if (humanChoice == 'scissors' && computerChoice == 'rock'){
            computerScore++;
        } else if(humanChoice == 'scissors' && computerChoice == 'scissors'){ 
        }
}



// playGame()



function playGame(){

    const result = document.createElement("p");
    const divScore = document.querySelector(".scoreSpace"); 
    
    for (let i = 0; i < 5; i++){
        let humanSelection = getHumanChoice();
        let computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);

        const divScore = document.querySelector(".scoreSpace");


        let humanScoreInfo = document.createElement("p");
        divScore.appendChild(humanScoreInfo);
        humanScoreInfo.textContent = `Human score: ${humanScore}`;

        let computerScoreInfo = document.createElement("p");
        divScore.appendChild(computerScoreInfo);
        computerScoreInfo.textContent = `Computer score: ${computerScore}`;
        

        console.log("Human score: ", humanScore);
        console.log("Computer score: ", computerScore); 
    }
    if(computerScore > humanScore) {
            
            divScore.appendChild(result);
            result.textContent = "The computer has won!";
            console.log("The computer has won!");
        } else if (computerScore < humanScore) {
            divScore.appendChild(result);
            result.textContent = "Congralations human, you have won!";
            console.log("Congratulations human, you have won!");
        } else {
            divScore.appendChild(result);
            result.textContent = "It's a tie!";
            console.log("It's a tie!");
        }
}
