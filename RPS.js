function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function getRPSChoice(num) {
    switch (num) {
        case 1:
            return "Rock";
        case 2:
            return "Paper";
        case 3:
            return "Scissors";
        default: return "Rock";
    }
}

promptString = ("Take your pick. Rock(1), paper(2) or scissors(3)?");
choice = getRPSChoice(parseInt(promptString));
computerChoice = getRPSChoice(getRandomInt(2) + 1);