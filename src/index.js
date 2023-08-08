import './style.css';
import { refreshScores, submitScore } from './leaderboard';

const scoresContainer = document.getElementById('scores');
const refreshButton = document.querySelector('.rf-btn');
const submitButton = document.querySelector('.sb-btn');
const nameInput = document.querySelector('.score-input input:nth-child(1)');
const scoreInput = document.querySelector('.score-input input:nth-child(2)');

refreshButton.addEventListener('click', () => {
  refreshScores(scoresContainer);
});

submitButton.addEventListener('click', () => {
  submitScore(nameInput, scoreInput, scoresContainer);
  refreshScores(scoresContainer);
});

refreshScores(scoresContainer);
