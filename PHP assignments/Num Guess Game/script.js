let randomNumber;
let attempts;
const maxAttempts = 10;

function startGame() {
    randomNumber = Math.floor(Math.random() * 100) + 1;
    attempts = maxAttempts;
    document.getElementById('feedback').innerText = '';
    document.getElementById('attemptsRemaining').innerText = `Attempts remaining: ${attempts}`;
    document.getElementById('userGuess').value = '';
}

function makeGuess() {
    const userGuess = parseInt(document.getElementById('userGuess').value);
    if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
        document.getElementById('feedback').innerText = 'Please enter a valid number between 1 and 100.';
        return;
    }

    attempts--;

    if (userGuess === randomNumber) {
        document.getElementById('feedback').innerText = 'Congratulations! You guessed the correct number!';
        document.getElementById('attemptsRemaining').innerText = `Attempts remaining: ${attempts}`;
    } else if (userGuess > randomNumber) {
        document.getElementById('feedback').innerText = 'Too high! Try again.';
        document.getElementById('attemptsRemaining').innerText = `Attempts remaining: ${attempts}`;
    } else {
        document.getElementById('feedback').innerText = 'Too low! Try again.';
        document.getElementById('attemptsRemaining').innerText = `Attempts remaining: ${attempts}`;
    }

    if (attempts === 0 && userGuess !== randomNumber) {
        document.getElementById('feedback').innerText = `Game over! The correct number was ${randomNumber}.`;
        document.getElementById('attemptsRemaining').innerText = 'No attempts left.';
    }
}

window.onload = startGame;
