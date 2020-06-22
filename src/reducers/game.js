import {
  ROLLING_DICE,
  DICE_ROLLED,
  LOCK_DIE,
  UNLOCK_DIE,
  SCORES_CALCULATED
} from '../actions/game';
import { PLAYER1, PLAYER2, emptyScoreboard } from '../constants/game';

export const initialState = {
  isRollingDice: false,
  currentPlayer: null,
  currentRoll: [0, 0, 0, 0, 0],
  currentScores: emptyScoreboard,
  lockedDice: [],
  [PLAYER1]: emptyScoreboard,
  [PLAYER2]: emptyScoreboard
};

const game = (state = initialState, action) => {
  switch (action.type) {
    case ROLLING_DICE:
      return {
        ...state,
        isRollingDice: true
      };
    case DICE_ROLLED:
      return {
        ...state,
        isRollingDice: false,
        currentRoll: action.roll
      };
    case LOCK_DIE:
      return {
        ...state,
        lockedDice: [
          ...state.lockedDice,
          action.die
        ]
      };
    case UNLOCK_DIE:
      return {
        ...state,
        lockedDice: state.lockedDice.filter(d => d !== action.die)
      };
    case SCORES_CALCULATED:
      return {
        ...state,
        currentScores: action.scores
      };
    default:
      return state;
  }
};

export default game;
