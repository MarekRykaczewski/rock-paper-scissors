function computerPlay() {
    const randomChoice = ["Paper","Rock","Scissors"]
    const random = Math.floor(Math.random() * randomChoice.length);
    return(random, randomChoice[random])
}

function playRound(playerSelection, computerSelection) {
if (playerSelection == computerSelection) {
    console.log ("You draw")
} else if (playerSelection == "Paper") {
    if (computerSelection == "Rock") {
        console.log("You Win!")
    } else {
        console.log ("You lose!")
    }
} else if (playerSelection == "Rock") {
    if (computerSelection == "Scissors") {
        console.log ("You win!")
    } else {
        console.log ("You lose!")
    }
} else if (playerSelection == "Scissors") {
    if (computerSelection == "Paper") {
        console.log("You win!") 
    } else {
        console.log ("You lose!")
    }

} 
}

const playerSelection = "Rock";
const computerSelection = computerPlay();
console.log(playRound(playerSelection, computerSelection))
console.log(playerSelection)
console.log(computerSelection)