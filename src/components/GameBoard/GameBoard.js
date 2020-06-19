import React from 'react';
import { bool, func } from 'prop-types';
import Button from '../common/Button/Button';
import Dice from './Dice/container';
import styles from './GameBoard.module.scss';

const GameBoard = ({ isRollingDice, rollDice }) => {
  return (
    <div className={styles.gameBoard}>
      <Dice />
      <Button
        className={styles.rollButton}
        text={isRollingDice ? 'Rolling...' : 'Roll'}
        onClick={() => rollDice()}
      />
    </div>
  );
};

GameBoard.propTypes = {
  isRollingDice: bool,
  rollDice: func.isRequired
};

export default GameBoard;
