const rockChoiceButton = document.getElementById('choice-rock');
const paperChoiceButton = document.getElementById('choice-paper');
const scissorsChoiceButton = document.getElementById('choice-scissors');

const textChoicesForEndOfRound = {
    win: 'Congratulations! You win! 😎',
    tie: "It's a tie! 😑",
    lose: 'Sorry! You lose! 😭',
};

const showElement = (element) => element.classList.remove('invisible');

const showMainGameElements = () => {
    showElement(document.querySelector('h2'));
    showElement(document.getElementById('choice-buttons'));
};

const setTextForEndOfRound = (
    elementToSet,
    gameResult,
    playerMove,
    computerMove
) => {
    elementToSet.firstElementChild.textContent = `You chose ${playerMove}`;
    elementToSet.firstElementChild.nextElementSibling.textContent = `The computer chose ${computerMove}`;
    elementToSet.lastElementChild.textContent =
        textChoicesForEndOfRound[gameResult];
};

const displayTextForEndOfRound = (gameResult, playerMove, computerMove) => {
    const roundFinishText = document.getElementById('game-finish-text');
    setTextForEndOfRound(roundFinishText, gameResult, playerMove, computerMove);

    showElement(roundFinishText);
};
