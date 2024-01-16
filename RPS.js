function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function getRPSChoice(num) {
    choices = ["Rock", "Paper", "Scissors"];
    return choices[num];
}

function gamingSession(playerChoice, cpuChoice) {
    if (playerChoice == cpuChoice) return "It's a draw!";
    if (playerChoice == wins.get(cpuChoice)) {
        return "You lose! " + cpuChoice + " beats " + playerChoice.toLowerCase() + "!";
    }
    else if (cpuChoice == wins.get(playerChoice)) {
        return "You win! " + playerChoice + " beats " + cpuChoice.toLowerCase() + "!";
    }
}

const prompt = require("prompt-sync")();
const wins = new Map();
wins.set("Rock", "Scissors");
wins.set("Paper", "Rock");
wins.set("Scissors", "Paper");

function runGame() {
    promptString = ("Take your pick. Rock(1), paper(2) or scissors(3)? "); 
    yourChoice = getRPSChoice(parseInt(prompt(promptString)) - 1);
    computerChoice = getRPSChoice(getRandomInt(2));
    console.log(gamingSession(yourChoice, computerChoice));
}

// runGame();
 
const firstDiv = document.querySelector(".centerText");
firstDiv.style.color = "blue";
