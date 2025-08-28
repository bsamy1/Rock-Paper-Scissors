// Track scores
let humanScore = 0;
let computerScore = 0;

function getComputerChoice(){
    let num = Math.floor(Math.random() * 10 + 1);
    console.log(num); 
    let computerChoice = "";
    // Rock = 1-3; Scissors = 4-6; Paper = 7-9
    if (num>=1 && num <= 3){
        computerChoice = "rock";
    }else if(num>=4 && num <= 6){
        computerChoice = "scissors";
    }else if(num>=7 && num<= 9){
        computerChoice = "paper";
    }
    else{
        computerChoice = "error";
    }
    
    return computerChoice;
}

function getHumanChoice(){
    let humanChoice = prompt("What is your choice? \n Rock, Paper, Scissors");
    humanChoice.toLowerCase();
    return humanChoice;
}

function playRound(humanChoice, computerChoice) {
  if(humanChoice == "rock" && computerChoice == "scissors"){
    humanScore++;
  }else if (humanChoice == "paper" && computerChoice == "rock"){
    humanScore++;
  }else if (humanChoice == "scissors" && computerChoice == "paper"){
    humanScore++
  }else if(computerChoice == "rock" && humanChoice == "scissors"){
    computerScore++;
  }else if(computerChoice == "paper" && humanChoice == "rock"){
    computerScore++;
  }else if(computerChoice == "scissors" && computerChoice == "paper"){
    computerScore++;
  }else{
    console.log("it was a tie");
  }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();
playRound(humanSelection, computerSelection);
console.log(humanSelection);
console.log(computerSelection);
console.log(humanScore);
console.log(computerScore);


