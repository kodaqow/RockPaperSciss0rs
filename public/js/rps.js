// An object, results are saved in it
const score = {
    wins: 0,
    losses: 0,
    ties: 0
};

// Mathematical randomizer that decides
// computer's move and passes it onto
// other functions
function pickComputerMove () {
    const randomNumber = Math.random();

    let computerMove = '';

    if (randomNumber >= 0 && randomNumber < 0.33) {
        computerMove = 'Rock';
    } else if (randomNumber > 0.33 && randomNumber < 0.67) {
        computerMove = 'Paper';
    } else if (randomNumber > 0.67 && randomNumber <= 1) {
        computerMove = 'Scissors';
    }

    // Returns computerMove, so that we can use it
    // in other functions (Function scope)
    return computerMove;
}

// Saves computerMove, evaluates the result
// (playerMove vs computerMove) and adds it to the score
function playGame (playerMove) {
    const computerMove = pickComputerMove();
    let result = '';

    if (playerMove === 'Rock') {
        if (computerMove === 'Rock') {
            result = 'Tie';
        } else if (computerMove === 'Paper') {
            result = 'You lose';
        } else if (computerMove === 'Scissors') {
            result = 'You win';
        }
    } else if (playerMove === 'Paper') {
        if (computerMove === 'Rock') {
            result = 'You win';
        } else if (computerMove === 'Paper') {
            result = 'Tie';
        } else if (computerMove === 'Scissors') {
            result = 'You lose';
        }
    } else if (playerMove === 'Scissors') {
        if (computerMove === 'Rock') {
            result = 'You lose';
        } else if (computerMove === 'Paper') {
            result = 'You win';
        } else if (computerMove === 'Scissors') {
            result = 'Tie';
        }
    }

    if (result === 'You win') {
        score.wins += 1;
    } else if (result === 'You lose') {
        score.losses += 1;
    } else if (result === 'Tie') {
        score.ties += 1;
    }

    showResult(playerMove, computerMove, result);
    showScore();
}

// Generates paragraph with the moves made
function showResult(playerMove, computerMove, result) {
    const gameResult = document.getElementById("gameResult");
    gameResult.innerHTML = `<p>You picked <strong>${playerMove}</strong>. Computer picked <strong>${computerMove}</strong>. <strong>${result}</strong>.</p>`;
}

// Generates paragraph with the score table
function showScore() {
    const gameScore = document.getElementById("gameScore");
    gameScore.innerHTML = `<p>Win: <strong>${score.wins}</strong>, Loss: <strong>${score.losses}</strong>, Tie: <strong>${score.ties}</strong>.</p>`;
}

// Resets the score
function resetGame () {
    score.wins = 0;
    score.losses = 0;
    score.ties = 0;

    const gameScore = document.getElementById("gameScore");
    gameScore.innerHTML = `<p>Win: <strong>0</strong>, Loss: <strong>0</strong>, Tie: <strong>0</strong>.</p>`;

    const gameResult = document.getElementById("gameResult");
    gameResult.innerHTML = `<p>Waiting for <span>your move...</span></p>`;
}