const displayScores = (scores) => {
  const leaderboard = document.getElementById('scoresList');
  leaderboard.innerHTML = '';
  scores.forEach((score) => {
    const listItem = document.createElement('li');
    listItem.innerHTML = `${score.user}: ${score.score}`;
    leaderboard.appendChild(listItem);
  });
};

export default displayScores;