import { path } from 'ramda';
import { createSelector } from 'reselect';
import { PLAYER1, PLAYER2 } from '../constants/game';

export const getIsPlaying = path(['game', 'isPlaying']);

export const getIsRollingDice = path(['game', 'isRollingDice']);

export const getCurrentRollNum = path(['game', 'currentRollNum']);

export const getCurrentPlayer = path(['game', 'currentPlayer']);

export const getCurrentRoll = path(['game', 'currentRoll']);

export const getLockedDice = path(['game', 'lockedDice']);

export const getPlayer1Scores = path(['game', PLAYER1]);

export const getPlayer2Scores = path(['game', PLAYER2]);

export const getCurrentScores = path(['game', 'currentScores']);

export const getSelectedSlot = path(['game', 'selectedSlot']);

export const getSelectedScore = path(['game', 'selectedScore']);

export const getSelectedAvailableScore = path(['game', 'selectedAvailableScore']);

export const getPlayerGames = path(['game', 'playerGames']);

export const deriveIsPlayer1Done = createSelector(getPlayer1Scores, player1Scores => {
  const unfilledScores = Object.values(player1Scores).filter(value => value === -1);
  const hasUnFilledScores = unfilledScores.length > 0;

  return hasUnFilledScores;
});

export const deriveIsPlayer2Done = createSelector(getPlayer2Scores, player2Scores => {
  const unfilledScores = Object.values(player2Scores).filter(value => value === -1);
  const hasUnFilledScores = unfilledScores.length > 0;

  return hasUnFilledScores;
});

export const deriveIsGameOver = createSelector(
  [deriveIsPlayer1Done, deriveIsPlayer2Done],
  (isPlayer1Done, isPlayer2Done) => isPlayer1Done && isPlayer2Done
);
