import React from 'react';
import { object } from 'prop-types';
import { Auth0Provider } from '@auth0/auth0-react';
import { ConnectedRouter } from 'connected-react-router';
import { Route, Switch } from 'react-router-dom';
import { MENU_ROUTE, GAME_ROUTE } from '../../constants/routes';
import Header from '../Header/container';
import Menu from '../Menu/container';
import Game from '../Game/Game';

const App = ({ history }) => {
  return (
    <Auth0Provider
      domain={process.env.REACT_APP_AUTH0_DOMAIN}
      clientId={process.env.REACT_APP_AUTH0_CLIENT_ID}
      redirectUri={window.location.origin}
      onRedirectCallback={appState =>
        history.push(appState && appState.targetUrl ? appState.targetUrl : window.location.pathname)
      }>
      <ConnectedRouter history={history}>
        <Header />
        <Switch>
          <Route path={MENU_ROUTE} exact component={Menu} />
          <Route path={GAME_ROUTE} exact component={Game} />
        </Switch>
      </ConnectedRouter>
    </Auth0Provider>
  );
};

App.propTypes = {
  history: object.isRequired
};

export default App;
