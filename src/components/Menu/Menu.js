import React, { useState } from 'react';
import NewGame from './NewGame/container';
import Button from '../common/Button/Button';
import PlayerGames from './PlayerGames/container';
import styles from './Menu.module.scss';

const Menu = () => {
  const [isNewGame, setIsNewGame] = useState(false);

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
      <PlayerGames />
    </div>
  );
};

export default Menu;
