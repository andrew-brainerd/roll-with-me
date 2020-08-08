import { connect } from 'react-redux';
import { derivePlayer1Score, derivePlayer2Score } from '../../selectors/game';
import GameOver from './GameOver';

const mapStateToProps = state => ({
  player1Score: derivePlayer1Score(state),
  player2Score: derivePlayer2Score(state)
});

export default connect(mapStateToProps)(GameOver);
