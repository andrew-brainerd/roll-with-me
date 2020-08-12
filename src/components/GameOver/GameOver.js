import React, { useEffect } from 'react';
import { string, number, func } from 'prop-types';
import { VERSUS_GAME } from '../../constants/game';
import styles from './GameOver.module.scss';

const GameOver = ({ gameType, player1Score, player2Score, gameOver }) => {
  useEffect(() => {
    gameOver();
  }, []);

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
  player2Score: number,
  gameOver: func
};

export default GameOver;
