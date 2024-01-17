function getRandomInt() {
    randNum = Math.random();
    if (randNum <= 0.33) return 0;
    if (randNum > 0.33 && randNum <= 0.66) return 1;
    return 2;

}

function getRPSChoice(num) {
    choices = ["Rock", "Paper", "Scissors"];
    return choices[num];
}

function gamingSession(playerChoice, cpuChoice) {
    if (playerChoice == cpuChoice) return "It's a draw!";
    if (playerChoice == wins.get(cpuChoice)) {
        computerWins++;
        return "You lose! " + cpuChoice + " beats " + playerChoice.toLowerCase() + "!";
    }
    else if (cpuChoice == wins.get(playerChoice)) {
        playerWins++;
        return "You win! " + playerChoice + " beats " + cpuChoice.toLowerCase() + "!";
    }
}

// const prompt = require("prompt-sync")();
const wins = new Map();
wins.set("Rock", "Scissors");
wins.set("Paper", "Rock");
wins.set("Scissors", "Paper");
const playerScore = document.querySelector('.playerScore');
const computerScore = document.querySelector('.computerScore');
const rockButton = document.querySelector('.pickRock');
const paperButton = document.querySelector('.pickPaper');
const scissorsButton = document.querySelector('.pickScissors');
const playerImg = document.querySelector('.playerImg');
const computerImg = document.querySelector('.computerImg');
const resultText = document.querySelector('.resultText')
rockButton.addEventListener('click', () => runGame(getRPSChoice(0)));
paperButton.addEventListener('click', () => runGame(getRPSChoice(1)));
scissorsButton.addEventListener('click', () => runGame(getRPSChoice(2)));

playerWins = 0;
computerWins = 0;

const images = new Map();
images.set("Rock", "Images/rock.png");
images.set("Paper", "Images/paper.png");
images.set("Scissors", "Images/scissors.png");

function runGame(yourChoice) {
    computerChoice = getRPSChoice(getRandomInt(3));
    // console.log(gamingSession(yourChoice, computerChoice));
    resultText.textContent = gamingSession(yourChoice, computerChoice);
    playerScore.textContent = "Score: " + playerWins;
    computerScore.textContent = "Score: " + computerWins;
    playerImg.src = images.get(yourChoice);
    computerImg.src = images.get(computerChoice);

}


// runGame();

