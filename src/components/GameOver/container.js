import { connect } from 'react-redux';
import { derivePlayer1Score, derivePlayer2Score } from '../../selectors/game';
import { gameOver, exitGame } from '../../actions/game';
import GameOver from './GameOver';

const mapStateToProps = state => ({
  player1Score: derivePlayer1Score(state),
  player2Score: derivePlayer2Score(state)
});

const mapDispatchToProps = dispatch => ({
  gameOver: () => dispatch(gameOver()),
  exitGame: () => dispatch(exitGame())
});

export default connect(mapStateToProps, mapDispatchToProps)(GameOver);
