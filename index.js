console.log("Hello World")

console.log("Testing One Two")



let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    const choices = ["Rock", "Paper", "Scissors"];
    const randomIndex = Math.floor
    (Math.random()*choices.length);
    return choices [randomIndex];
    }

let humanChoice = "";

function getHumanChoice(choice) {
    
    const validChoices = ["Rock", "Paper", "Scissors"];
  
    if (validChoices.includes(choice)) {
    humanChoice = choice
    document.getElementById("result").textContent=`You chose: ${humanChoice}`;
    return humanChoice;
  }

}

document.getElementById("b1").addEventListener("click", function() {
  playRound("Rock");
});

document.getElementById("b2").addEventListener("click", function() {
  playRound("Paper");
});

document.getElementById("b3").addEventListener("click", function() {
  playRound("Scissors");
});


function playRound (humanChoice) {

    const computerChoice = getComputerChoice();

    let result = "";

    if (humanChoice === computerChoice) {
        result="Draw.";
    } else if (
    (humanChoice === "Rock" && 
        computerChoice === "Paper") ||
     (humanChoice === "Paper" && 
        computerChoice === "Scissors" ) ||
     (humanChoice === "Scissors" &&
        computerChoice === "Rock"
    )){
    result="You lose.";
    computerScore++;
    } else if (
    (humanChoice === "Rock" &&
        computerChoice === "Scissors") ||
     (humanChoice === "Paper" &&
        computerChoice === "Rock") ||
    (humanChoice === "Scissors" &&
        computerChoice === "Paper"
    )){
    result="You win.";
    humanScore++;
    } else {
        result = "I am Error. Not sure how this happened."
    }

    document.getElementById("humanScore").textContent=humanScore;
    document.getElementById("computerScore").textContent=computerScore;
   
    document.getElementById("result").textContent=`Skynet chose: ${computerChoice}. ${result}`;



    if (humanScore === 5 || computerScore === 5) {
        resetGame();
    }
}

function resetGame() {
    
    let finalPrompt = "";
if (humanScore === 5) {
    finalPrompt=" Congratulations, you won.";
} else if (computerScore === 5) {
    finalPrompt=" Sorry, you lost."
}
    
    const playAgain = confirm(finalPrompt+" Play again?")

    if (playAgain) {
        humanScore = 0;
        computerScore = 0;
        document.getElementById("humanScore").textContent = humanScore;
        document.getElementById("computerScore").textContent = computerScore;
        document.getElementById("result").textContent = "";
    } else {
        document.getElementById("result").textContent="Bye.";
    }
   
}



/*
Guess I can go ahead and remove the stuff that was here.
    */










