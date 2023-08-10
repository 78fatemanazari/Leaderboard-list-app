const refreshScores = async (scoresContainer, gameId) => {
  scoresContainer.innerHTML = '';

  const response = await fetch(`https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${gameId}/scores`);
  const scoresData = await response.json();

  scoresData.result.forEach((score) => {
    const listContainer = document.createElement('ul');
    const lists = document.createElement('li');
    const listItem = document.createElement('p');

    listItem.textContent = `${score.user}: ${score.score}`;

    lists.appendChild(listItem);
    listContainer.appendChild(lists);
    scoresContainer.appendChild(listContainer);
  });
};

const submitScore = async (nameInput, scoreInput, scoresContainer, gameId) => {
  const name = nameInput.value;
  const score = scoreInput.value;

  if (name && score) {
    const data = {
      user: name,
      score: parseInt(score, 10),
    };

    const response = await fetch(`https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${gameId}/scores`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (response.ok) {
      nameInput.value = '';
      scoreInput.value = '';
      await refreshScores(scoresContainer, gameId); // Refresh the scores after submitting
    } else {
      console.error('Failed to submit score.');
    }
  }
};

const createGame = async () => {
  const response = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ name: 'YourGameName' }), // Replace 'YourGameName' with your desired game name
  });

  const gameData = await response.json();
  return gameData.result;
};

export { refreshScores, submitScore, createGame };
