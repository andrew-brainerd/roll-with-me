import {
  ROLLING_DICE,
  DICE_ROLLED,
  LOCK_DIE,
  UNLOCK_DIE,
  SCORES_CALCULATED,
  SET_SELECTED,
  PLAY_ROLL,
  LOADING_GAMES,
  GAMES_LOADED
} from '../actions/game';
import { PLAYER1, PLAYER2, emptyScoreboard } from '../constants/game';

export const initialState = {
  isPlaying: false,
  isRollingDice: false,
  currentPlayer: PLAYER1,
  currentRoll: [0, 0, 0, 0, 0],
  currentRollNum: 0,
  currentScores: emptyScoreboard,
  lockedDice: [],
  [PLAYER1]: emptyScoreboard,
  [PLAYER2]: emptyScoreboard,
  selectedSlot: null,
  selectedScore: 0,
  selectedAvailableScore: 0,
  playerGames: []
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
        currentRoll: action.roll,
        currentRollNum: state.currentRollNum + 1
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
    case SET_SELECTED:
      return {
        ...state,
        selectedSlot: action.slot,
        selectedScore: action.score,
        selectedAvailableScore: action.availableScore
      };
    case PLAY_ROLL:
      return {
        ...state,
        [state.currentPlayer]: {
          ...state[state.currentPlayer],
          [action.slot]: action.score
        },
        currentRollNum: 0
      };
    case LOADING_GAMES:
      return {
        ...state,
        isLoadingGames: true
      };
    case GAMES_LOADED:
      return {
        ...state,
        isLoadingGames: false,
        playerGames: action.games
      };
    default:
      return state;
  }
};

export default game;
