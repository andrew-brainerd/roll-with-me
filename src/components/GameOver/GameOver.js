import React from 'react';
import { number } from 'prop-types';
import styles from './GameOver.module.scss';

const GameOver = ({ player1Score, player2Score }) => {
  return (
    <div className={styles.gameOver}>

    </div>
  );
};

GameOver.propTypes = {
  player1Score: number,
  player2Score: number
};

export default GameOver;
