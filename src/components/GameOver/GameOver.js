import React from 'react';
import { string, number } from 'prop-types';
import { VERSUS_GAME } from '../../constants/game';
import styles from './GameOver.module.scss';

const GameOver = ({ gameType, player1Score, player2Score }) => {
  return (
    <div className={styles.gameOver}>
      <h1>Game Over</h1>
      <span className={styles.score}>Player 1: {player1Score}</span>
      {gameType === VERSUS_GAME && <span className={styles.score}>Player 2: {player2Score}</span>}
    </div>
  );
};

GameOver.propTypes = {
  gameType: string,
  player1Score: number,
  player2Score: number
};

export default GameOver;
