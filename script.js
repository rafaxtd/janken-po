let playerName;
let computerChoice;
let playersChoice;
let playerScore = 0;
let computerScore = 0;


//Pick up user's choice;
//1 - Rock;
//2 - Paper;
//3 - Scissors

//Define player's name
function definePlayersName(){ 
    
    document.getElementById('player1-name').innerHTML = playerName; 

}

//Define message to be displayed
function message(text){

    //Change message accordingly calcwinner

    document.getElementById('message').innerHTML = text;
}

//Define computers choice
function computerspick(min, max){

// Random between 2 numbers of computer
    return Math.floor(Math.random() * (max - min + 1)) + min; //Floor - Arredonda um decimal


}
/*Get who is the winner
0 - a tie
1 - Player1
2 - Computer

*/
//calc options
function calcwinner(player1, computer){

    //1 - Rock;
    //2 - Paper;
    //3 - Scissors

    if(player1 == 1 && computer == 1){
        return 0;
    
    } else if(player1 == 1 && computer == 2){
        return 2
        ;

    } else if(player1 == 1 && computer == 3){
        return 1;

    } else if(player1 == 2 && computer == 1){
        return 1;

    } else if(player1 == 2 && computer == 2){
        return 0;

    } else if(player1 == 2 && computer == 3){
        return 2;

    } else if(player1 == 3 && computer == 1){
        return 2;

    } else if(player1 == 3 && computer == 2){
        return 1;

    } else if(player1 == 3 && computer == 3){
        return 0;

    }


}

//add player score
function calcPlayerScore(){

    playerScore += 1;
}

//add computers score
function calcComputerScore(){

    computerScore += 1;

}

//get users choice and compares randomly computers choice
function play(pick){

    playersChoice = pick
    select('player1', playersChoice);
    //random computer's choice
    computerChoice = computerspick(1, 3);
    select('computer', computerChoice);

    
    //count and add points
let winner =  calcwinner(playersChoice, computerChoice);

if( winner == 0) {

    message('A tie');
} else if(winner == 1){

    message("You've scored! YAAY! =D")
    calcPlayerScore();
    document.getElementById('player1-score').innerHTML = playerScore; 

} else if(winner == 2){

    message("Booo, Computer's point");
    calcComputerScore();
    document.getElementById('computer-score').innerHTML = computerScore; 

}

if( playerScore == 3) {
    message("You WON! =D");

    setTimeout(function(){ 
        deselect('player1', playersChoice); 
        deselect('computer', computerChoice);
        document.getElementById('player1-score').innerHTML = playerScore = 0; 
        document.getElementById('computer-score').innerHTML = computerScore = 0; 
        message('Hey ' + playerName.toUpperCase() + " let's start over? Pick up again!");
    }, 2500);

    
    
   
   

} else if( computerScore == 3) {
    message("You LOST! =(");

    setTimeout(function(){ 
        deselect('player1', playersChoice); 
        deselect('computer', computerChoice);
        document.getElementById('player1-score').innerHTML = playerScore = 0;
        document.getElementById('computer-score').innerHTML = computerScore = 0; 
        message('Hey ' + playerName.toUpperCase() + " let's start over? Pick up again!");
    }, 2500);
     
    

}
    //show users choice and score

    setTimeout(function(){ 
        deselect('player1', playersChoice); 
        deselect('computer', computerChoice);
        message('Hey ' + playerName.toUpperCase() + " !" + " Go on! Pick an option again an check if you can beat computer ;)");
    
    }, 2500);

    

    

}

//Add Selected class
function select(type, choice){

    document.getElementById(type + '-choose-' + choice).classList.add('selected');
}

function deselect(type, choice){

    document.getElementById(type + '-choose-' + choice).classList.remove('selected');
}

document.getElementById("player1-choose-1").onclick = function() { 
    
    play(1);
   

  
};

document.getElementById("player1-choose-2").onclick = function() { 
    play(2);

    
 };

 document.getElementById("player1-choose-3").onclick = function() {  
     play(3);

    
 };


 playerName = prompt('How would you like to be called?');

 document.getElementById('message').innerHTML = 'Welcome ' + playerName + "," + " are you ready?! Let's Rock, Paper & Scissors this game!";

definePlayersName(playerName);
