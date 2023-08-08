import { getLeaderboardData } from './leaderboard.js';

const leaderboardList = document.getElementById('leaderboard-list');

function renderLeaderboard() {
  const data = getLeaderboardData();
  data.forEach((entry, index) => {
    const listItem = document.createElement('li');
    listItem.textContent = `${index + 1}. ${entry.name}: ${entry.score}`;
    leaderboardList.appendChild(listItem);
  });
}

renderLeaderboard();