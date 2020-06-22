import { connect } from 'react-redux';
import { getPlayer1Scores, getCurrentScores } from '../../../selectors/game';
import Scoreboard from './Scoreboard';

const mapStateToProps = state => ({
  player1: getPlayer1Scores(state),
  currentScores: getCurrentScores(state)
});

export default connect(mapStateToProps)(Scoreboard);
