import React from 'react';
import { bool } from 'prop-types';
import GameBoard from '../GameBoard/container';
import GameOver from '../GameOver/container';

const Game = ({ isGameOver }) => {
  return (
    <>
      <GameBoard />
      {isGameOver && <GameOver />}
    </>
  );
};

Game.propTypes = {
  isGameOver: bool
};

export default Game;
