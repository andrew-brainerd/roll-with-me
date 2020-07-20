import * as gameApi from '../api/game';
import * as utils from '../utils/game';
import { emptyScoreboard } from '../constants/game';
import { MENU_ROUTE, GAME_ROUTE } from '../constants/routes';
import { getLockedDice, getCurrentRoll } from '../selectors/game';
import { getCurrentUserEmail } from '../selectors/user';
import { navTo } from './routing';

const PREFIX = 'GAME';

export const ROLLING_DICE = `${PREFIX}/ROLLING_DICE`;
export const DICE_ROLLED = `${PREFIX}/DICE_ROLLED`;
export const LOCK_DIE = `${PREFIX}/LOCK_DIE`;
export const UNLOCK_DIE = `${PREFIX}/UNLOCK_DIE`;
export const SCORES_CALCULATED = `${PREFIX}/SCORES_CALCULATED`;
export const SET_SELECTED = `${PREFIX}/SET_SELECTED`;
export const PLAY_ROLL = `${PREFIX}/PLAY_ROLL`;
export const EXIT_GAME = `${PREFIX}/EXIT_GAME`;
export const LOADING_GAMES = `${PREFIX}/LOADING_GAMES`;
export const GAMES_LOADED = `${PREFIX}/GAMES_LOADED`;
export const CREATING_GAME = `${PREFIX}/CREATING_GAME`;
export const GAME_LOADED = `${PREFIX}/GAME_LOADED`;

export const rollingDice = { type: ROLLING_DICE };
export const diceRolled = roll => ({ type: DICE_ROLLED, roll });
export const lockDie = die => ({ type: LOCK_DIE, die });
export const unlockDie = die => ({ type: UNLOCK_DIE, die });
export const scoresCalculated = scores => ({ type: SCORES_CALCULATED, scores });
export const setSelected = (slot, score, availableScore) => ({ type: SET_SELECTED, slot, score, availableScore });
export const loadingGames = { type: LOADING_GAMES };
export const gamesLoaded = games => ({ type: GAMES_LOADED, games });
export const creatingGame = { type: CREATING_GAME };
export const gameLoaded = game => ({ type: GAME_LOADED, game });

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
  dispatch({ type: PLAY_ROLL, slot, score });
  dispatch(saveScore());
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

export const exitGame = () => async dispatch => {
  dispatch({ type: EXIT_GAME });
  dispatch(navTo(MENU_ROUTE));
};

export const createGame = type => async (dispatch, getState) => {
  dispatch(creatingGame);
  const playerEmail = getCurrentUserEmail(getState());
  gameApi.createGame(type, playerEmail).then(game => {
    dispatch(gameLoaded(game));
    dispatch(navTo(GAME_ROUTE.replace(':gameId', game._id)));
  });
};

export const loadPlayerGames = () => async (dispatch, getState) => {
  dispatch(loadingGames);
  const playerEmail = getCurrentUserEmail(getState());
  playerEmail && gameApi.loadPlayerGames(playerEmail).then(({ items }) => {
    dispatch(gamesLoaded(items));
  });
};

export const saveScore = () => async (dispatch, getState) => {
  dispatch(savingScore);
};
