function computerPlay(){
    let randomNum = Math.random();
    if(randomNum>0.66) return "rock"
    else if(randomNum>0.33) return "paper"
    else return "scissors"
}

function playRound(playerChoice, computerChoice){
    playerChoice = playerChoice.toLowerCase();
    if(playerChoice === computerChoice) return "It is a tie."
    if(playerChoice === "rock"){
        if(computerChoice === "paper") return "You Lose. Paper beats Rock."
        else if(computerChoice === "scissors") return "You Win. Rock beats Scissors."
        else return "Error"
    }
    if(playerChoice === "paper"){
        if(computerChoice === "rock") return "You Win. Paper beats Rock."
        else if(computerChoice === "scissors") return "You Lose. Scissors beat Paper."
        else return "Error"
    }
    if(playerChoice === "scissors"){
        if(computerChoice === "paper") return "You Win. Scissors beat Paper."
        else if(computerChoice === "rock") return "You Lose. Rock beats Scissors."
        else return "Error"
    }
}

function playerPlay(){
    return prompt("What will you play?");
}

function game(){
    let Pscore = 0;
    let Cscore = 0;
    let gameRound = 0;
    for(let i=0;i<5;i++){
        let result = playRound(playerPlay(), computerPlay());
        console.log(result);
        if(result.slice(0, 6)==="You Wi") Pscore++;
        else if(result.slice(0, 6)==="You Lo") Cscore++; 
        gameRound++;        
    }
    if(Pscore>Cscore) console.log("You have won the game.");
    else if(Cscore>Pscore) console.log("You have lost the game.");
    else console.log("The game is a tie.");
}

game();