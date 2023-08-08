function refreshScores(scoresContainer) {
  scoresContainer.innerHTML = '';

  const scores = JSON.parse(localStorage.getItem('scores')) || [];

  scores.forEach((score) => {
    const listContainer = document.createElement('ul');
    const lists = document.createElement('li');
    const listItem = document.createElement('p');

    listItem.textContent = `${score.name}: ${score.score}`;

    lists.appendChild(listItem);
    listContainer.appendChild(lists);
    scoresContainer.appendChild(listContainer);
  });
}

function submitScore(nameInput, scoreInput, scoresContainer) {
  return new Promise((resolve, reject) => {
    const name = nameInput.value;
    const score = scoreInput.value;

    if (name && score) {
      const newScore = { name, score };

      const scores = JSON.parse(localStorage.getItem('scores')) || [];

      scores.push(newScore);

      localStorage.setItem('scores', JSON.stringify(scores));

      nameInput.value = '';
      scoreInput.value = '';

      refreshScores(scoresContainer);

      resolve();
    } else {
      reject(new Error('Name and score must be provided'));
    }
  });
}

export { refreshScores, submitScore };
