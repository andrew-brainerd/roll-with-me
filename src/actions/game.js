import * as utils from '../utils/game';
import { getLockedDice, getCurrentRoll } from '../selectors/game';
import { emptyScoreboard } from '../constants/game';

export const ROLLING_DICE = 'ROLLING_DICE';
export const DICE_ROLLED = 'DICE_ROLLED';
export const LOCK_DIE = 'LOCK_DIE';
export const UNLOCK_DIE = 'UNLOCK_DIE';
export const SCORES_CALCULATED = 'SCORES_CALCULATED';
export const SET_SELECTED = 'SET_SELECTED';
export const PLAY = 'PLAY';

export const rollingDice = { type: ROLLING_DICE };
export const diceRolled = roll => ({ type: DICE_ROLLED, roll });
export const lockDie = die => ({ type: LOCK_DIE, die });
export const unlockDie = die => ({ type: UNLOCK_DIE, die });
export const scoresCalculated = scores => ({ type: SCORES_CALCULATED, scores });
export const setSelected = (slot, score, availableScore) => ({ type: SET_SELECTED, slot, score, availableScore });

export const rollDice = () => async (dispatch, getState) => {
  const previousRoll = getCurrentRoll(getState());
  const lockedDice = getLockedDice(getState());

  dispatch(rollingDice);
  utils.rollDice().then(roll => {
    const lockedRoll = roll.map((die, d) =>
      lockedDice.includes(d) ? previousRoll[d] : die
    );

    dispatch(scoresCalculated(utils.calculateScores(lockedRoll)));
    dispatch(diceRolled(lockedRoll));
  });
};

export const play = (slot, score) => dispatch => {
  dispatch({ type: PLAY, slot, score });
  dispatch(resetRoll());
};

export const resetRoll = () => dispatch => {
  dispatch(setSelected(null, 0, 0));
  // dispatch(diceRolled([0, 0, 0, 0, 0]));
  for (let i = 0; i < 5; i++) {
    dispatch(unlockDie(i));
  }
  dispatch(scoresCalculated(emptyScoreboard));
};
