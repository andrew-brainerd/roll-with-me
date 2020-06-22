import React from 'react';
import { bool, func } from 'prop-types';
import Scoreboard from './Scoreboard/container';
import Dice from './Dice/container';
import Button from '../common/Button/Button';
import styles from './GameBoard.module.scss';

const GameBoard = ({ isRollingDice, rollDice }) => {
  return (
    <div className={styles.gameBoard}>
      <Scoreboard />
      <Dice />
      <Button
        className={styles.rollButton}
        text={isRollingDice ? 'Rolling...' : 'Roll'}
        onClick={() => rollDice()}
        disabled={isRollingDice}
      />
    </div>
  );
};

GameBoard.propTypes = {
  isRollingDice: bool,
  rollDice: func.isRequired
};

export default GameBoard;
