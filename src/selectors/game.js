import { path } from 'ramda';

export const getIsRollingDice = path(['game', 'isRollingDice']);

export const getCurrentPlayer = path(['game', 'currentPlayer']);

export const getCurrentRoll = path(['game', 'currentRoll']);

export const getScores = path(['game', 'scores']);
