import React from 'react';
import { func } from 'prop-types';
import Button from '../common/Button/Button';
import styles from './NewGame.module.scss';

const NewGame = ({ startSoloGame, startVersusGame }) => {
  return (
    <div className={styles.menu}>
      <Button
        className={styles.menuButton}
        text='Solo'
        onClick={startSoloGame}
      />
      <Button
        className={styles.menuButton}
        text='VS'
        onClick={startVersusGame}
      />
    </div>
  );
};

NewGame.propTypes = {
  startSoloGame: func.isRequired,
  startVersusGame: func.isRequired
};

export default NewGame;
