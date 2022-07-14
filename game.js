function computerPlay() {
    const randomChoice = ["paper","rock","scissors"]
    const random = Math.floor(Math.random() * randomChoice.length);
    return(random, randomChoice[random])
}

function playRound(playerSelection, computerSelection) {
if (playerSelection == computerSelection) {
    return ("You draw")
} else if (playerSelection == "paper") {
    if (computerSelection == "rock") {
        return ("You Win!")
    } else {
        return ("You lose!")
    }
} else if (playerSelection == "rock") {
    if (computerSelection == "scissors") {
        return ("You win!")
    } else {
        return ("You lose!")
    }
} else if (playerSelection == "scissors") {
    if (computerSelection == "paper") {
        return("You win!") 
    } else {
        return ("You lose!")
    }

} 
}



for (let i = 0; i < 5; i++) {
const playerSelection = prompt("Rock, paper or scissors?").toLocaleLowerCase();
const computerSelection = computerPlay().toLowerCase();
console.log("You picked: " + playerSelection)
console.log("Computer picked: " + computerSelection)
console.log(playRound(playerSelection, computerSelection))
}
