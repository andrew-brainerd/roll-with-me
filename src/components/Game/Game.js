import React, { useEffect } from 'react';
import { string, bool, func } from 'prop-types';
import GameBoard from '../GameBoard/container';
import GameOver from '../GameOver/container';

const Game = ({ gameId, isGameOver, loadGame }) => {
  useEffect(() => {
    gameId && loadGame(gameId);
  }, [gameId, loadGame]);

  return (
    <>
      <GameBoard />
      {isGameOver && <GameOver />}
    </>
  );
};

Game.propTypes = {
  gameId: string,
  isGameOver: bool,
  loadGame: func.isRequired
};

export default Game;
