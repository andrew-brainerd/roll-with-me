import { ROLLING_DICE, DICE_ROLLED } from '../actions/game';
import { PLAYER1, PLAYER2 } from '../constants/game';

export const initialState = {
  isRollingDice: false,
  currentPlayer: null,
  currentRoll: [0, 0, 0, 0, 0],
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
    default:
      return state;
  }
};

export default game;
