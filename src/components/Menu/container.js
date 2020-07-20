import { connect } from 'react-redux';
import { getIsLoadingUser } from '../../selectors/user';
import { getPlayerGames } from '../../selectors/game';
import { loadPlayerGames } from '../../actions/game';
import Menu from './Menu';

const mapStateToProps = state => ({
  isLoadingUser: getIsLoadingUser(state),
  playerGames: getPlayerGames(state)
});

const mapDispatchToProps = dispatch => ({
  loadPlayerGames: () => dispatch(loadPlayerGames())
});

export default connect(mapStateToProps, mapDispatchToProps)(Menu);
