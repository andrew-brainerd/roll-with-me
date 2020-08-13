import React, { useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import Loading from '../common/Loading/Loading';
import NewGame from './NewGame/container';
import Button from '../common/Button/Button';
import PlayerGames from './PlayerGames/container';
import styles from './Menu.module.scss';

const Menu = () => {
  const [isNewGame, setIsNewGame] = useState(false);
  const { isAuthenticated, isLoading } = useAuth0();

  return !isAuthenticated || isLoading ? <Loading isActive /> : (
    <div className={styles.menu}>
      <h1>Roll With Me</h1>
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
      <PlayerGames />
    </div>
  );
};

export default Menu;
