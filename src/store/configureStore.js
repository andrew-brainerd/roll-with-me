import { createBrowserHistory } from 'history';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import rootReducer from '../reducers';

export const history = createBrowserHistory();

const configureStore = initialState =>
  createStore(
    rootReducer(history),
    initialState,
    composeWithDevTools(applyMiddleware(thunk))
  );

export default configureStore;
