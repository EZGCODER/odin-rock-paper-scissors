
function getRandomIntInclusive(min, max) {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled); // The maximum is inclusive and the minimum is inclusive
}

function getComputerChoice() {
    let choice = getRandomIntInclusive(1, 3);
    return choice;
}

function getHumanChoice() {
    return prompt("Rock paper scissors");
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        return;
    } else if (humanChoice === 1 && computerChoice === 3 ||
    humanChoice === 2 && computerChoice === 1 ||
    humanChoice === 3 && computerChoice === 2) {
        humanScore += 1;
    } else {
        computerScore += 1;
    }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

function playGame(numberOfRounds = 5) {
 
    let i = 0;
    do {
        playRound(humanSelection, computerSelection);
        i++;
        console.log("Human " + humanScore)
        console.log("Computer " + computerScore)
    } while (i < numberOfRounds);
}

playGame()

