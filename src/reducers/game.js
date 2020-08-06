import {
  ROLLING_DICE,
  DICE_ROLLED,
  LOCK_DIE,
  UNLOCK_DIE,
  SCORES_CALCULATED,
  SET_SELECTED,
  PLAY_ROLL,
  LOADING_GAMES,
  GAMES_LOADED,
  CREATING_GAME,
  GAME_LOADED,
  LOADING_GAME
} from '../actions/game';
import { emptyScoreboard } from '../constants/game';

export const initialState = {
  isLoadingGames: false,
  isLoadingGame: false,
  isPlaying: false,
  isRollingDice: false,
  currentPlayer: null,
  currentRoll: [0, 0, 0, 0, 0],
  currentRollNum: 0,
  currentScores: emptyScoreboard,
  lockedDice: [],
  player1: emptyScoreboard,
  player2: emptyScoreboard,
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
      console.log('PLAY_ROLL', {
        currentPlayer: state.currentPlayer,
        slot: action.slot,
        score: action.score
      });
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
    case CREATING_GAME:
      return {
        ...state,
        isCreatingGame: true
      };
    case LOADING_GAME:
      return {
        ...state,
        isLoadingGame: true
      };
    case GAME_LOADED:
      return {
        ...state,
        isLoadingGame: false,
        isCreatingGame: false,
        isPlaying: true,
        currentPlayer: (action.game || {}).currentPlayer,
        gameId: (action.game || {})._id,
        player1: (action.game && action.game.player1) || state.player1,
        player2: (action.game && action.game.player2) || state.player2
      };
    default:
      return state;
  }
};

export default game;
