import { connect } from 'react-redux';
import { deriveIsGameOver } from '../../selectors/game';
import App from './App';

const mapStateToProps = state => ({
  isGameOver: deriveIsGameOver(state)
});

export default connect(mapStateToProps)(App);
