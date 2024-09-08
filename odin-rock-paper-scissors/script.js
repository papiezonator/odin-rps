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

let choice = '';

let playedRounds = 0;

let rockChoice = document.querySelector("#rockButton");
rockChoice.addEventListener("click", () => {
    choice = rockChoice.name;

    playGame();
    })

let paperChoice = document.querySelector("#paperButton");    
paperChoice.addEventListener("click", () => {
    choice = paperChoice.name;

    playGame();
})

let scissorsChoice = document.querySelector("#scissorsButton");
scissorsChoice.addEventListener("click", () => {
    choice = scissorsChoice.name;
    
    playGame();
})

//default score
let humanScore = 0;
let computerScore = 0;

//dom manipulation****************************************************************







//dom manipulation****************************************************************

//POINT SYSTEM
function playRound(humanChoice, computerChoice){
      
        // ROCK // 
        humanChoice = choice;

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
            console.log(humanChoice);
        } else if (humanChoice == 'scissors' && computerChoice == 'rock'){
            computerScore++;
            console.log(humanChoice);
        } else if(humanChoice == 'scissors' && computerChoice == 'scissors'){ 
        }

        playedRounds++       
}



// playGame()



function playGame(){

    const result = document.createElement("p");
    const divScore = document.querySelector(".scoreSpace"); 
    
        let humanSelection = choice;
        let computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);

        let humanScoreInfo = document.createElement("p");
        divScore.appendChild(humanScoreInfo);
        humanScoreInfo.textContent = `Human score: ${humanScore}`;

        let computerScoreInfo = document.createElement("p");
        divScore.appendChild(computerScoreInfo);
        computerScoreInfo.textContent = `Computer score: ${computerScore}`;
        
    if(computerScore > humanScore && playedRounds == 5) {
            
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
