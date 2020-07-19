import { connect } from 'react-redux';
import { getPlayer1Scores, getPlayer2Scores } from '../../selectors/game';
import GameOver from './GameOver';

const mapStateToProps = state => ({
  player1Scores: getPlayer1Scores(state),
  player2Scores: getPlayer2Scores(state)
});

export default connect(mapStateToProps)(GameOver);
