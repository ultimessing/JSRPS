function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

choice = parseInt(prompt("Take your pick. Rock(1), paper(2) or scissors(3)?"))
computerChoice = getRandomInt(2) + 1;