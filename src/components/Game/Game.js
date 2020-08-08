import React, { useEffect } from 'react';
import { string, bool, func } from 'prop-types';
import Loading from '../common/Loading/Loading';
import GameBoard from '../GameBoard/container';
import GameOver from '../GameOver/container';
import styles from './Game.module.scss';

const Game = ({ gameId, isPlaying, isLoadingGame, isGameOver, loadGame }) => {
  useEffect(() => {
    gameId && loadGame(gameId);
  }, [gameId, loadGame]);

  return (
    <div className={styles.game}>
      {isLoadingGame || !isPlaying ? <Loading isActive /> :
        <>
          {isGameOver ? <GameOver /> : <GameBoard />}
        </>
      }
    </div>
  );
};

Game.propTypes = {
  gameId: string,
  isPlaying: bool,
  isLoadingGame: bool,
  isGameOver: bool,
  loadGame: func.isRequired
};

export default Game;
