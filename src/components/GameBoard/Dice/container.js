import { connect } from 'react-redux';
import { getCurrentRoll } from '../../../selectors/game';
import Dice from './Dice';

const mapStateToProps = state => ({
  currentRoll: getCurrentRoll(state)
});

export default connect(mapStateToProps)(Dice);
