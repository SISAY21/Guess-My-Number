'use strict';

let randomNumber = Math.trunc(Math.random() * 20 + 1);
let score = 20;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};
const displayScore = function (score) {
  document.querySelector('.score').textContent = score;
};

document.querySelector('.guess').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess-input').value);

  // When there is no input
  if (!guess) {
    displayMessage('⛔ No Number inserted');
  }

  // When the player wins
  else if (guess === randomNumber) {
    displayMessage('✅ Correct');
    document.querySelector('body').style.backgroundColor = '#2b8a3e';
    document.querySelector('.number').textContent = randomNumber;
    document.querySelector('.number').style.width = '25.6rem';

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  }

  // When the players guess is too high or low
  else if (guess !== randomNumber) {
    if (score > 1) {
      displayMessage(guess > randomNumber ? '📈 Too high' : '📉 Too low');
      score--;
      displayScore(score);
    } else {
      displayMessage('💥 You have lost the game');
      displayScore(0);
    }
  }
});

document.querySelector('.restart').addEventListener('click', function () {
  score = 20;
  randomNumber = Math.trunc(Math.random() * 20 + 1);

  displayMessage('🙈 Start guessing...');
  displayScore(score);
  document.querySelector('body').style.backgroundColor = '#333';
  document.querySelector('.guess-input').value = '';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.number').style.width = '9.6rem';
});
