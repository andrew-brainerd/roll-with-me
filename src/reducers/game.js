import { ROLLING_DICE, DICE_ROLLED, LOCK_DIE, UNLOCK_DIE } from '../actions/game';
import { PLAYER1, PLAYER2 } from '../constants/game';

export const initialState = {
  isRollingDice: false,
  currentPlayer: null,
  currentRoll: [0, 0, 0, 0, 0],
  lockedDice: [],
  scores: {
    [PLAYER1]: 0,
    [PLAYER2]: 0
  }
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
    default:
      return state;
  }
};

export default game;
