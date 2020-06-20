import { connect } from 'react-redux';
import { getCurrentRoll, getLockedDice } from '../../../selectors/game';
import { lockDie, unlockDie } from '../../../actions/game';
import Dice from './Dice';

const mapStateToProps = state => ({
  currentRoll: getCurrentRoll(state),
  lockedDice: getLockedDice(state)
});

const mapDispatchToProps = dispatch => ({
  lockDie: die => dispatch(lockDie(die)),
  unlockDie: die => dispatch(unlockDie(die))
});

export default connect(mapStateToProps, mapDispatchToProps)(Dice);
