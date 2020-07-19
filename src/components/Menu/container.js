import { connect } from 'react-redux';
import { getPlayerGames } from '../../selectors/game';
import { loadPlayerGames } from '../../actions/game';
import Menu from './Menu';

const mapStateToProps = state => ({
  playerGames: getPlayerGames(state)
});

const mapDispatchToProps = dispatch => ({
  loadPlayerGames: () => dispatch(loadPlayerGames())
});

export default connect(mapStateToProps, mapDispatchToProps)(Menu);
