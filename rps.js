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

getComputerChoice();