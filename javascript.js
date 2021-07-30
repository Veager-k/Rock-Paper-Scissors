const buttons = document.querySelectorAll(".button");
const result_p = document.querySelector(".result");
const scorePlayer = document.querySelector("#playerScoreNum");
const scoreComp = document.querySelector("#computerScoreNum");
const gameResult = document.querySelector(".gameResult");

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
    
}

let Pscore = 0;
let Cscore = 0;
function game(e){
         gameResult.textContent = "";
        let result = playRound(e.target.textContent, computerPlay());
        console.log(result);
        result_p.textContent = result;
        if(result.slice(0, 6)==="You Wi") Pscore++;
        else if(result.slice(0, 6)==="You Lo") Cscore++;         
        scorePlayer.textContent = Pscore;
        scoreComp.textContent = Cscore;
        if(Pscore>=5){
            gameResult.textContent = "You have outlucked the computer!";
            Pscore = 0;
            Cscore = 0;
        }
        else if(Cscore>=5){
            gameResult.textContent = "Unsurprisingly the machine one again defeats the flesh bot!";
            Pscore = 0;
            Cscore = 0;
        }
}

buttons.forEach((button) => {
    button.addEventListener("click", game)
});

