function getComputerChoice(){
    let num = Math.floor(Math.random() * 10 + 1);
    console.log(num); 
    let choice = "";
    // Rock = 1-3; Scissors = 4-6; Paper = 7-9
    if (num>=1 && num <= 3){
        choice = "Rock";
    }else if(num>=4 && num <= 6){
        choice = "Scissors";
    }else if(num>=7 && num<= 9){
        choice = "Paper";
    }
    else{
        choice = "Error";
    }
    console.log(choice);
}

function getHumanChoice(){
    let humanChoice = prompt("What is your choice? \n[1] Rock \n[2] Scissors \n[3] Paper");
    if (humanChoice == 1){
        humanChoice = "Rock";
    }else if(humanChoice == 2){
        humanChoice = "Scissors";
    }else if(humanChoice == 3){
        humanChoice = "Paper";
    }
    else{
        humanChoice = "Error";
    }
    
    console.log(humanChoice);
}


getComputerChoice();
getHumanChoice();