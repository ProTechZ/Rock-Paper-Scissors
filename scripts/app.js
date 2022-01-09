const ROCK = 'rock';
const PAPER = 'paper';
const SCISSORS = 'scissors';

const winPossibilities = {
    // move1 wins against move2
    rock: SCISSORS,
    scissors: PAPER,
    paper: ROCK,
};

const chooseComputerMove = () => {
    const moveChoices = [ROCK, PAPER, SCISSORS];
    const computerMove =
        moveChoices[Math.floor(Math.random() * moveChoices.length)];
    return computerMove;
};

const playerWins = (playerMove, computerMove) => {
    for (const winningMove in winPossibilities) {
        const losingMove = winPossibilities[winningMove];
        if (playerMove === winningMove && computerMove === losingMove) {
            return true;
        }
    }
};

const play = (playerMove) => {
    const computerMove = chooseComputerMove();

    if (playerWins(playerMove, computerMove)) {
        displayTextForEndOfRound('win', playerMove, computerMove);
    } else if (playerMove === computerMove) {
        displayTextForEndOfRound('tie', playerMove, computerMove);
    } else {
        displayTextForEndOfRound('lose', playerMove, computerMove);
    }

    setTimeout(() => {
        document.getElementById('game-finish-text').className = 'invisible';
    }, 1500);
};

rockChoiceButton.addEventListener('click', play.bind(null, ROCK));
paperChoiceButton.addEventListener('click', play.bind(null, PAPER));
scissorsChoiceButton.addEventListener('click', play.bind(null, SCISSORS));
