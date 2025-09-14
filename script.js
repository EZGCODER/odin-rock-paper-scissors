
// GAME ROCK PAPER SCISSORS
// Computer chooses rock paper scissors
function getRandomIntInclusive(min, max) {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled); // The maximum is inclusive and the minimum is inclusive
}

function getComputerChoice() {
    let choice = getRandomIntInclusive(1, 3);
    return choice;
}
// for now input from user is 1 2 3 because i plan on using buttons so i dont need to deal with strings
function getHumanChoice() {
    return parseInt(prompt("Rock paper scissors"));
}

let humanScore = 0;
let computerScore = 0;


function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        return false;
    } else if (humanChoice === 1 && computerChoice === 3 ||
    humanChoice === 2 && computerChoice === 1 ||
    humanChoice === 3 && computerChoice === 2) {
        humanScore += 1;
        return true;
    } else {
        computerScore += 1;
        return true;
    }
}

function playGame(numberOfRounds = 5) {
    let i = 0;
    while (i < numberOfRounds) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();

        const gameCounts = playRound(humanSelection, computerSelection);

        if (gameCounts === false) {
            console.log("Tie");
        } else {
            i++; // only increment on decisive rounds
            console.log("Round " + i);
            console.log("Human " + humanScore);
            console.log("Computer " + computerScore);
        }
    } 

    if (humanScore > computerScore) {
        alert("human wins");
    } else {
        alert("computer wins");
    }
}


playGame()

//LATER GUI