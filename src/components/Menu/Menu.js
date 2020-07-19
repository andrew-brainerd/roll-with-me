import React, { useEffect } from 'react';
import { array, func } from 'prop-types';
import { useAuth0 } from '@auth0/auth0-react';
import styles from './Menu.module.scss';

const Menu = ({ playerGames, loadPlayerGames }) => {
  const { user } = useAuth0();

  useEffect(() => {
    !!user && loadPlayerGames() && console.log(user);
  }, [user, loadPlayerGames]);

  return (
    <div className={styles.menu}>
      {(playerGames || []).map(game => console.log(game))}
    </div>
  );
};

Menu.propTypes = {
  playerGames: array,
  loadPlayerGames: func.isRequired
};

export default Menu;
