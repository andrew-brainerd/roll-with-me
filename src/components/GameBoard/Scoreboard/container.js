import { connect } from 'react-redux';
import {
  getPlayer1Scores,
  getCurrentScores,
  getSelectedScore,
  getSelectedSlot,
  getSelectedAvailableScore
} from '../../../selectors/game';
import Scoreboard from './Scoreboard';
import { setSelected } from '../../../actions/game';

const mapStateToProps = state => ({
  playerScores: getPlayer1Scores(state),
  currentScores: getCurrentScores(state),
  selectedSlot: getSelectedSlot(state),
  selectedScore: getSelectedScore(state),
  selectedAvailableScore: getSelectedAvailableScore(state)
});

const mapDispatchToProps = dispatch => ({
  setSelected: (slot, score, availableScore) => dispatch(setSelected(slot, score, availableScore))
});

export default connect(mapStateToProps, mapDispatchToProps)(Scoreboard);
