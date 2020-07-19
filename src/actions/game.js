import * as gameApi from '../api/game';
import * as utils from '../utils/game';
import { emptyScoreboard } from '../constants/game';
import { MENU_ROUTE } from '../constants/routes';
import { getLockedDice, getCurrentRoll } from '../selectors/game';
import { getCurrentUserEmail } from '../selectors/user';
import { navTo } from './routing';

export const ROLLING_DICE = 'ROLLING_DICE';
export const DICE_ROLLED = 'DICE_ROLLED';
export const LOCK_DIE = 'LOCK_DIE';
export const UNLOCK_DIE = 'UNLOCK_DIE';
export const SCORES_CALCULATED = 'SCORES_CALCULATED';
export const SET_SELECTED = 'SET_SELECTED';
export const PLAY_GAME = 'PLAY_GAME';
export const EXIT_GAME = 'EXIT_GAME';
export const LOADING_GAMES = 'LOADING_GAMES';
export const GAMES_LOADED = 'GAMES_LOADED';

export const rollingDice = { type: ROLLING_DICE };
export const diceRolled = roll => ({ type: DICE_ROLLED, roll });
export const lockDie = die => ({ type: LOCK_DIE, die });
export const unlockDie = die => ({ type: UNLOCK_DIE, die });
export const scoresCalculated = scores => ({ type: SCORES_CALCULATED, scores });
export const setSelected = (slot, score, availableScore) => ({ type: SET_SELECTED, slot, score, availableScore });
export const loadingGames = { type: LOADING_GAMES };
export const gamesLoaded = games => ({ type: GAMES_LOADED, games });

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

export const play = (slot, score) => (dispatch, getState) => {
  dispatch({ type: PLAY_GAME, slot, score });
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

export const startSoloGame = () => async dispatch => {
  console.log('Starting Solo Game');
  await new Promise(resolve => setTimeout(resolve, 1000));
};

export const startVersusGame = () => async dispatch => {
  console.log('Starting Versus Game');
  await new Promise(resolve => setTimeout(resolve, 1000));
};

export const exitGame = () => async dispatch => {
  dispatch({ type: EXIT_GAME });
  dispatch(navTo(MENU_ROUTE));
};

export const loadPlayerGames = () => async (dispatch, getState) => {
  console.log('Load Player Games');
  dispatch(loadingGames);
  const playerEmail = getCurrentUserEmail(getState());
  gameApi.loadPlayerGames(playerEmail).then(games => {
    console.log({ playerEmail, games });
    dispatch(gamesLoaded(games));
  });
};
