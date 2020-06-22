import { path } from 'ramda';
import { PLAYER1, PLAYER2 } from '../constants/game';

export const getIsRollingDice = path(['game', 'isRollingDice']);

export const getCurrentPlayer = path(['game', 'currentPlayer']);

export const getCurrentRoll = path(['game', 'currentRoll']);

export const getLockedDice = path(['game', 'lockedDice']);

export const getPlayer1Scores = path(['game', PLAYER1]);

export const getPlayer2Scores = path(['game', PLAYER2]);

export const getCurrentScores = path(['game', 'currentScores']);
