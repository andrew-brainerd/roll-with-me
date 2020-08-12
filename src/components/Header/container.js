import { connect } from 'react-redux';
import { getIsPlaying } from '../../selectors/game';
import { setCurrentUser } from '../../actions/user';
import { exitGame } from '../../actions/game';
import Header from './Header';

const mapStateToProps = state => ({
  isPlaying: getIsPlaying(state)
});

const mapDispatchToProps = dispatch => ({
  setCurrentUser: email => dispatch(setCurrentUser(email)),
  exitGame: () => dispatch(exitGame())
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
