import './style.css';
import { refreshScores, submitScore, createGame } from './leaderboard';

const scoresContainer = document.getElementById('scores');
const refreshButton = document.querySelector('.rf-btn');
const submitButton = document.querySelector('.sb-btn');
const nameInput = document.querySelector('.score-input input:nth-child(1)');
const scoreInput = document.querySelector('.score-input input:nth-child(2)');
let gameId = ''; // To store the ID of the created game

refreshButton.addEventListener('click', async () => {
  await refreshScores(scoresContainer, gameId);
});

submitButton.addEventListener('click', async () => {
  await submitScore(nameInput, scoreInput, scoresContainer, gameId);
  await refreshScores(scoresContainer, gameId);
});

(async () => {
  gameId = await createGame(); // Create a new game and store its ID
  await refreshScores(scoresContainer, gameId);
})();
