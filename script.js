// Generate random number between 1 and 100
let randomNumber = Math.floor(Math.random() * 100) + 1;

// Get elements from DOM
let guessField = document.getElementById('guessField');
let message = document.getElementById('message');

// Function to check the user's guess
function checkGuess() {
    let userGuess = parseInt(guessField.value);
    
    if (userGuess === randomNumber) {
        message.textContent = `Congratulations! You guessed the correct number ${randomNumber}!`;
        message.style.color = 'green';
        guessField.disabled = true;
    } else if (userGuess < randomNumber) {
        message.textContent = 'Too low! Try again.';
        message.style.color = 'red';
    } else {
        message.textContent = 'Too high! Try again.';
        message.style.color = 'red';
    }
    
    // Clear input field after each guess
    guessField.value = '';
    guessField.focus();
}
