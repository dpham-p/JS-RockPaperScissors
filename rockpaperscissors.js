let choices = ["rock", "paper", "scissors"];
let rock = document.getElementById("rock");
let paper = document.getElementById("paper");
let scissors = document.getElementById("scissors");
let reset = document.getElementById("reset")
let playerSelection = ''
let computerSelection = ''
let result = 'Select Rock, Paper, or Scissors to Start'
let playerScore = 0;
let computerScore = 0;

//  Function that randomly returns 'Rock', 'Paper', or 'Scissors'
function computerPlay() {
    return choices[Math.floor(Math.random() * 3)]
}

function playRound(playerSelection, computerSelection) {
    switch (playerSelection.toLowerCase()) {
        case "rock": 
            if (computerSelection == "rock") {
                return "Draw!"
            }
            else if (computerSelection == "paper") {
                addComputerScore()
                return "You Lose! Paper beats Rock"
            }
            else {
                addPlayerScore()
                return "You Win! Rock beats Scissors"
            }
        case "paper":
             if (computerSelection == "paper") {
                return "Draw!"
            }
            else if (computerSelection == "scissors") {
                addComputerScore()
                return "You Lose! Scissors beats Paper"
            }
            else {
                addPlayerScore()
                return "You Win! Paper beats Rock"
            }
        case "scissors":
            if (computerSelection == "scissors") {
                return "Draw!"
            }
            else if (computerSelection == "rock") {
                addComputerScore()
                return "You Lose! Rock beats Scissors"
            }
            else {
                addPlayerScore()
                return "You Win! Scissors beats Paper"
            }
        default:
            return ''
    }
    
}

function getPlayerScore() {
    return playerScore
}

function getComputerScore() {
    return computerScore
}

function addPlayerScore() {
    playerScore++
}

function addComputerScore() {
    computerScore++
}

function game() {
    if (playerScore != 5 && computerScore != 5) {
        computerSelection = computerPlay();
        if (playerSelection != null) {
            result = playRound(playerSelection, computerSelection)
        }
    }

    if (playerScore == 5) {
        result = 'Player Wins!'
    }
    else if (computerScore == 5) {
        result = 'Computer Wins!'
    }
    
    document.getElementById("player-selection").innerHTML = "Player: " + playerSelection
    document.getElementById("computer-selection").innerHTML = "Computer: " + computerSelection
    document.getElementById("result").innerHTML = result
    document.getElementById("score").innerHTML = "Player Score: " + getPlayerScore() + " |   Computer Score: " + getComputerScore()

    console.log(result)
    console.log("Player Score: " + getPlayerScore())
    console.log("Computer Score: " + getComputerScore())   
    
}

document.getElementById("player-selection").innerHTML = "Player: " + playerSelection
document.getElementById("computer-selection").innerHTML = "Computer: " + computerSelection
document.getElementById("result").innerHTML = result
document.getElementById("score").innerHTML = "Player Score: " + getPlayerScore() + " |   Computer Score: " + getComputerScore()

rock.addEventListener('click', (rockClick))
paper.addEventListener('click', (paperClick))
scissors.addEventListener('click', (scissorsClick))
reset.addEventListener('click', (resetGame))

function resetGame() {
    playerScore = 0;
    computerScore = 0;
    playerSelection = '';
    computerSelection = '';
    result = 'Select Rock, Paper, or Scissors to Start'
    document.getElementById("player-selection").innerHTML = "Player: " + playerSelection
    document.getElementById("computer-selection").innerHTML = "Computer: " + computerSelection
    document.getElementById("result").innerHTML = result
    document.getElementById("score").innerHTML = "Player Score: " + getPlayerScore() + " |   Computer Score: " + getComputerScore()
}

function rockClick() {
    playerSelection = 'rock'
    console.log(playerSelection)
    game()
}

function paperClick() {
    playerSelection = 'paper'
    console.log(playerSelection)
    game()
}

function scissorsClick() {
    playerSelection = 'scissors'
    console.log(playerSelection)
    game()
}


