
import './style.css';
import displayScores from './modules/displayScores';
import { createGame, submitScore, getScores } from './modules/consumeApi';

const populate = async () => {
  const gameId = localStorage.getItem('gameId');
  // check if not present in local storage set value
  if (!gameId) {
    const gameData = await createGame('ResidentEvil');
    const [, , gameId] = gameData.result.split(' ');
    localStorage.setItem('gameId', gameId);
  }

  const scoresData = await getScores(gameId);
  displayScores(scoresData.result);
  const scoreForm = document.getElementById('userForm');

  const submitButton = document.getElementById('submit');

  submitButton.addEventListener('click', async (event) => {
    event.preventDefault();
    const name = document.getElementById('userName').value;
    const score = document.getElementById('userScore').value;
    await submitScore(gameId, name, score);
    scoreForm.reset();
  });

  const refreshButton = document.getElementById('refresh');
  refreshButton.addEventListener('click', async () => {
    const scoresData = await getScores(gameId);
    displayScores(scoresData.result);
  });
};

document.addEventListener('DOMContentLoaded', populate);
