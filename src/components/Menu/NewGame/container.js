import { connect } from 'react-redux';
import { createGame } from '../../../actions/game';
import { SOLO_GAME } from '../../../constants/game';
import NewGame from './NewGame';

const mapDispatchToProps = dispatch => ({
  startSoloGame: () => dispatch(createGame(SOLO_GAME)),
  startVersusGame: () => dispatch(createGame(SOLO_GAME))
});

export default connect(null, mapDispatchToProps)(NewGame);
