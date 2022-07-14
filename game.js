function computerPlay() {
    const randomChoice = ["paper","rock","scissors"]
    const random = Math.floor(Math.random() * randomChoice.length);
    return(random, randomChoice[random])
}

function playRound(playerSelection, computerSelection) {
if (playerSelection == computerSelection) {
    console.log ("You draw")
} else if (playerSelection == "paper") {
    if (computerSelection == "rock") {
        console.log("You Win!")
    } else {
        console.log ("You lose!")
    }
} else if (playerSelection == "rock") {
    if (computerSelection == "scissors") {
        console.log ("You win!")
    } else {
        console.log ("You lose!")
    }
} else if (playerSelection == "scissors") {
    if (computerSelection == "paper") {
        console.log("You win!") 
    } else {
        console.log ("You lose!")
    }

} 
}



for (let i = 0; i < 5; i++) {
const playerSelection = prompt("Rock, paper or scissors?").toLocaleLowerCase();
const computerSelection = computerPlay().toLowerCase();
console.log(playRound(playerSelection, computerSelection))
console.log(playerSelection)
console.log(computerSelection)
}
