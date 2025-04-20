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

    // const humanChoice = getHumanChoice();
    const computerChoice = getComputerChoice();

    let result = "";

    if (humanChoice === computerChoice) {
        result="Draw.";
        /*Draw*/
    }
    else if (
    (humanChoice === "Rock" && 
        computerChoice === "Paper") ||
     (humanChoice === "Paper" && 
        computerChoice === "Scissors" ) ||
     (humanChoice === "Scissors" &&
        computerChoice === "Rock"
    )){
    result="You lose.";
    computerScore++;
    /*Loss*/
    }
    else if (
    (humanChoice === "Rock" &&
        computerChoice === "Scissors") ||
     (humanChoice === "Paper" &&
        computerChoice === "Rock") ||
    (humanChoice === "Scissors" &&
        computerChoice === "Paper"
    )){
    result="You win.";
    humanScore++;
    /*Win*/
    }
    else {
        result = "I am Error. Not sure how this happened."
    }

    document.getElementById("humanScore").textContent=humanScore;
    document.getElementById("computerScore").textContent=computerScore;
   
    document.getElementById("result").textContent=`Skynet chose: ${computerChoice}. ${result}`;

    if (humanScore === 5) {
        document.getElementById("result").textContent=" Congratulations, you won.";
        resetGame();
    } else if (computerScore === 5) {
        document.getElementById("result").textContent=" Sorry, you lost."
        resetGame();
    }
    
}

function resetGame() {
    const playAgain = confirm("Play again?")

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
console.log (`Current Score
    You: ${humanScore}
    Computer: ${computerScore}`);

    return result;

 
}

function playGame () {
    let playAgain = true;

    while (playAgain) {
        playRound();
        playAgain = confirm("Play again?")
    }

    console.log("Bye")
}

window.onload = function() {

    playGame();
}

  /*
    testing new branch visibility

    function resetGame() {
    humanScore = 0;
    computerScore = 0;
}
        if (result === "A") {
        console.log ("Draw.");
    }
    else if (result === "B"){
        console.log ("You lose.");
        computerScore +=1;
    }
    else if (result === "C"){
        console.log ("You win.")
        humanScore +=1;
    }
    */










