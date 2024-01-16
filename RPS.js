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

// const prompt = require("prompt-sync")();
// const wins = new Map();
// wins.set("Rock", "Scissors");
// wins.set("Paper", "Rock");
// wins.set("Scissors", "Paper");

function runGame() {
    promptString = ("Take your pick. Rock(1), paper(2) or scissors(3)? ");
    yourChoice = getRPSChoice(parseInt(prompt(promptString)) - 1);
    computerChoice = getRPSChoice(getRandomInt(2));
    console.log(gamingSession(yourChoice, computerChoice));
}

// runGame();


const mainDiv = document.querySelector(".bigHolder");
const firstDiv = document.querySelector("#firstDiv");
const flexCont = document.createElement('div');
const secondDiv = document.createElement('div');
const h1elem = document.createElement('h1');
const h3elem = document.createElement('h3');
const metooPara = document.createElement('p');
const redPara = document.createElement('p');
const secondButton = document.createElement('button');
firstDiv.style.backgroundColor = "#01818A";
firstDiv.style.color = "#F2F2F2";
redPara.textContent = "Hey, I'm red!";
redPara.style.color = 'red';
h3elem.textContent = "I'm a blue h3!";
h3elem.style.color = "blue";
h1elem.textContent = "I'm in a div!";
metooPara.textContent = "ME TOO!";
secondDiv.style.backgroundColor = "pink";
secondDiv.style.border = "2px solid black";
flexCont.style.display = 'flex';
flexCont.style.justifyContent = 'center';
flexCont.style.margin = "5%";
secondButton.style.width = "40px";
secondButton.style.height = "40px";
mainDiv.append(redPara);
mainDiv.append(h3elem);
secondDiv.append(h1elem);
secondDiv.append(redPara);
mainDiv.append(secondDiv);
mainDiv.append(flexCont);
flexCont.append(secondButton);
secondButton.addEventListener('click', () => console.log("hiiii!"));
secondButton.addEventListener('click', function (e) { e.target.style.backgroundColor = '#01818A' });