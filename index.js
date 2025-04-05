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
    
function getHumanChoice() {
    let choice = prompt
    ("Select your move (Rock, Paper, or Scissors):");
    choice = choice.toLowerCase();
    const validChoices = 
    ["rock", "paper", "scissors"];
    
    if (validChoices.includes(choice)) {
    return choice.charAt(0).toUpperCase()+choice.slice(1);
    }
    else {
    alert("Invalid. Please try again.");
    return getHumanChoice();
    /*
    fascinating
    so you can put the function inside itself
    that sounds useful
    though also potentially confusing
    */
    }
    }
    
function resetGame() {
    humanScore = 0;
    computerScore = 0;
}

function playRound () {

    const humanChoice = getHumanChoice();
    const computerChoice = getComputerChoice();

    let result;

    if (humanChoice === computerChoice) {
        result="A";
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
    result="B";
    /*Loss*/
    }
    if (
    (humanChoice === "Rock" &&
        computerChoice === "Scissors") ||
     (humanChoice === "Paper" &&
        computerChoice === "Rock") ||
    (humanChoice === "Scissors" &&
        computerChoice === "Paper"
    )){
    result="C";
    /*Win*/
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
   
    if (humanScore === 5) {
        console.log ("Congratulations, you won.");
        resetGame();
    } else if (computerScore === 5) {
        console.log ("Sorry, you lost.")
        resetGame();
    }
    


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












