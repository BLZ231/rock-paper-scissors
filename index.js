console.log("Hello World")

console.log("Testing One Two")



let humanScore = 0;
let ComputerScore = 0;

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
    
function playRound () {

    const humanChoice = getHumanChoice();
    const computerChoice = getComputerChoice();

    let result;

    if (humanChoice === computerChoice) {
        result="A";
        /*Draw*/
    }
    else if (
    (humanChoice === "rock" && 
        computerChoice === "paper")
    || (humanChoice === "paper" && 
        computerChoice === "scissors" )
    || (humanChoice === "scissors" &&
        computerChoice === "rock"
    )){
    result="B"
    /*Loss*/
    }
    else if (
    (humanChoice === "rock" &&
        computerChoice === "scissors")
    || (humanChoice === "paper" &&
        computerChoice === "rock")
    || (humanChoice === "scissors" &&
        computerChoice === "paper"
    )){
    result="C"
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
    
    


console.log (`Current Score - You: ${humanScore},
    Computer: ${computerScore}`);

    return result;
}

/*



Variables
humanScore and computerScore
Have them both start at 0

function playRound
takes humanChoice and computerChoice into account
If hC is Rock and cC is Rock, return string A
If hC is Rock and cC is Paper, return string B
If hC is Rock and cC is Scissors, return string C
If hC is Paper and cC is Rock, return string c
If hC is Paper and cC is Paper, return string A
If hC is Paper and cC is Scissors, return string B
If hC is Scissors and cC is Rock, return string B
If hC is Scissors and cC is Paper, return string C
If hC is Scissors and cC is Scissors, return string A


String A
Draw.
Neither score changes

String B
You lose.
computerScore goes up by 1

String C
You win.
humanScore goes up by 1

function playGame
Summons playRound function, I guess
if computerScore equals 5, return string D
if humanScore equals 5, return string E

String D
Sorry, you lost.

String E
Congratulations, you won.

*/











