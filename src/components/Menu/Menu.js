import React, { useState, useEffect } from 'react';
import { bool, array, func } from 'prop-types';
import { useAuth0 } from '@auth0/auth0-react';
import NewGame from './NewGame/container';
import Button from '../common/Button/Button';
import styles from './Menu.module.scss';

const Menu = ({ isLoadingUser, playerGames, loadPlayerGames }) => {
  const { isAuthenticated, isLoading } = useAuth0();
  const [isNewGame, setIsNewGame] = useState(false);

  useEffect(() => {
    isAuthenticated && !isLoading && !isLoadingUser && loadPlayerGames();
  }, [isAuthenticated, isLoading, isLoadingUser, loadPlayerGames]);

  return (
    <div className={styles.menu}>
      <div className={styles.newGame}>
        {isNewGame ? (
          <NewGame />
        ) : (
          <Button
            className={styles.menuButton}
            text='New Game'
            onClick={() => setIsNewGame(true)}
          />
        )}
      </div>
      <div className={styles.playerGames}>
        {(playerGames || []).map(game => console.log(game))}
      </div>
    </div>
  );
};

Menu.propTypes = {
  isLoadingUser: bool,
  playerGames: array,
  loadPlayerGames: func.isRequired
};

export default Menu;
