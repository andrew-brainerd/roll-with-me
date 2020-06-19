import * as utils from '../utils/game';

export const ROLLING_DICE = 'ROLLING_DICE';
export const DICE_ROLLED = 'DICE_ROLLED';

export const rollingDice = { type: ROLLING_DICE };
export const diceRolled = roll => ({ type: DICE_ROLLED, roll });

export const rollDice = () => async dispatch => {
  dispatch(rollingDice);
  utils.rollDice().then(roll =>
    dispatch(diceRolled(roll))
  );
};
