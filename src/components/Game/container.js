import { connect } from 'react-redux';
import { getGameId } from '../../selectors/routing';
import { getIsPlaying, getIsLoadingGame } from '../../selectors/game';
import { loadGame } from '../../actions/game';
import Game from './Game';

const mapStateToProps = state => ({
  gameId: getGameId(state),
  isPlaying: getIsPlaying(state),
  isLoadingGame: getIsLoadingGame(state)
});

const mapDispatchToProps = dispatch => ({
  loadGame: gameId => dispatch(loadGame(gameId))
});

export default connect(mapStateToProps, mapDispatchToProps)(Game);
