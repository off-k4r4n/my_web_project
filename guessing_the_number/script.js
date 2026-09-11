const min = 1;
const max = 100;
const answer = Math.floor(Math.random()*100) + 1;
let attempts = 0;

function checkGuess() {
    const guess = document.getElementById('guessInput').value;
    attempts++;

    if(guess == answer) {
        document.getElementById('result').innerText = `Congratulations! You've guessed the number ${answer} in ${attempts} attempts.`;
    } else if(guess < answer) {
        document.getElementById('result').innerText = 'Too low! Try again.';
    } else {
        document.getElementById('result').innerText = 'Too high! Try again.';
    }   
}