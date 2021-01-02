'use strict';

// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = 'Correct Guess..!';

// document.querySelector('.number').textContent = 10;
// document.querySelector('.score').textContent = 12;

// document.querySelector('.guess').value = 28;
// console.log(document.querySelector('.guess').value);

let seacretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  if (!guess) {
    document.querySelector('.message').textContent = 'No Number';
  } else if (guess === seacretNumber) {
    document.querySelector('.message').textContent =
      'Poooooooojjaaaaaa  YOU WON Good Api' ;

    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }

    document.querySelector('body').style.backgroundColor = '#60b347';

    document.querySelector('.number').textContent = seacretNumber;
  } else if (guess > seacretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Guessed high';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'Looser..! Game Over';
      document.querySelector('.score').textContent = 0;
    }
  } else if (guess < seacretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Guessed low';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'Looser..! Game Over';
      document.querySelector('.score').textContent = 0;
    }
  }
});
document.querySelector('.again').addEventListener('click', function () {
  document.querySelector('body').style.backgroundColor = '#333';
  score = 20;
  seacretNumber = Math.trunc(Math.random() * 20) + 1;

  document.querySelector('.message').textContent = 'Start Guessing...';
  document.querySelector('.score').textContent = score;
  document.querySelector('.guess').value = '';
  document.querySelector('.number').textContent = '?';
});
