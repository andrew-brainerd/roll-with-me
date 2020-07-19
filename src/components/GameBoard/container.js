import { connect } from 'react-redux';
import {
  getIsRollingDice,
  getCurrentRollNum,
  getSelectedSlot,
  getSelectedScore,
  getSelectedAvailableScore
} from '../../selectors/game';
import { rollDice, play } from '../../actions/game';
import GameBoard from './GameBoard';

const mapStateToProps = state => ({
  isRollingDice: getIsRollingDice(state),
  currentRollNum: getCurrentRollNum(state),
  selectedSlot: getSelectedSlot(state),
  selectedScore: getSelectedScore(state),
  selectedAvailableScore: getSelectedAvailableScore(state)
});

const mapDispatchToProps = dispatch => ({
  rollDice: () => dispatch(rollDice()),
  play: (slot, score) => dispatch(play(slot, score))
});

export default connect(mapStateToProps, mapDispatchToProps)(GameBoard);
