import * as utils from '../utils/game';
import { getLockedDice, getCurrentRoll } from '../selectors/game';

export const ROLLING_DICE = 'ROLLING_DICE';
export const DICE_ROLLED = 'DICE_ROLLED';
export const LOCK_DIE = 'LOCK_DIE';
export const UNLOCK_DIE = 'UNLOCK_DIE';

export const rollingDice = { type: ROLLING_DICE };
export const diceRolled = roll => ({ type: DICE_ROLLED, roll });
export const lockDie = die => ({ type: LOCK_DIE, die });
export const unlockDie = die => ({ type: UNLOCK_DIE, die });

export const rollDice = () => async (dispatch, getState) => {
  const previousRoll = getCurrentRoll(getState());
  const lockedDice = getLockedDice(getState());

  dispatch(rollingDice);
  utils.rollDice().then(roll => {
    const lockedRoll = roll.map((die, d) =>
      lockedDice.includes(d) ? previousRoll[d] : die
    );

    dispatch(diceRolled(lockedRoll));
  });
};
