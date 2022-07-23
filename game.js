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
        playerScore ++
        return ("You win!")
    } else {
        computerScore ++
        return ("You lose!")
    }
} else if (playerSelection == "rock") {
    if (computerSelection == "scissors") {
        playerScore ++
        return ("You win!")
    } else {
        computerScore ++
        return ("You lose!")
    }
} else if (playerSelection == "scissors") {
    if (computerSelection == "paper") {
        playerScore ++
        return("You win!") 
    } else {
        computerScore ++
        return ("You lose!")
    }

} 
}

function createResult() {
    const newP = document.createElement('p');
    newP.classList.add('newP');
    newP.textContent = playRound(playerSelection, computerSelection);
    resultsContainer.appendChild(newP);
    checkIfWon()
}

function gameReset(){
    computerScore = 0;
    playerScore = 0;
    removeAllChildNodes(resultsContainer)
    resultsContainer.appendChild(overallScore);
}

function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

function checkIfWon() {
    if (playerScore === 5) {
        console.log("Player won!")
        gameReset()

    } else if (computerScore === 5) {
        console.log("Computer won!")
        gameReset()
    }
}

let computerScore = 0;
let playerScore = 0;

let computerSelection = computerPlay().toLowerCase();

const resultsContainer = document.querySelector('#results')

const overallScore = document.createElement('p');
overallScore.classList.add('overallScore')
overallScore.textContent = 'Score: ' + playerScore + '/' + computerScore;
resultsContainer.appendChild(overallScore);

const rBtn = document.querySelector('#rock')

rBtn.addEventListener('click', () => {
    playerSelection = 'rock'
    createResult();
    computerPlay();
    computerSelection = computerPlay().toLowerCase()
    overallScore.textContent = 'Score: ' + playerScore + '/' + computerScore;
});

const pBtn = document.querySelector('#paper')

pBtn.addEventListener('click', () => {
    playerSelection = 'paper'
    createResult();
    computerPlay();
    computerSelection = computerPlay().toLowerCase()
    overallScore.textContent = 'Score: ' + playerScore + '/' + computerScore;
});

const sBtn = document.querySelector('#scissors')

sBtn.addEventListener('click', () => {
    playerSelection = 'scissors'
    createResult();
    computerPlay();
    computerSelection = computerPlay().toLowerCase()
    overallScore.textContent = 'Score: ' + playerScore + '/' + computerScore;
});








