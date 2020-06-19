import { connect } from 'react-redux';
import { getIsRollingDice } from '../../selectors/game';
import { rollDice } from '../../actions/game';
import GameBoard from './GameBoard';

const mapStateToProps = state => ({
  isRollingDice: getIsRollingDice(state)
});

const mapDispatchToProps = dispatch => ({
  rollDice: () => dispatch(rollDice())
});

export default connect(mapStateToProps, mapDispatchToProps)(GameBoard);
