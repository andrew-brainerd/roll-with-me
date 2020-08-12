import React from 'react';
import { bool, string, number, func } from 'prop-types';
import Scoreboard from './Scoreboard/container';
import Dice from './Dice/container';
import Button from '../common/Button/Button';
import styles from './GameBoard.module.scss';

const getRollText = rollNum => ({
  0: '1st Roll',
  1: '2nd Roll',
  2: 'Last Roll',
  3: 'Turn Over'
})[rollNum] || rollNum;

const GameBoard = ({
  isRollingDice,
  currentRollNum,
  selectedSlot,
  selectedScore,
  selectedAvailableScore,
  rollDice,
  play
}) => {
  return (
    <div className={styles.gameBoard}>
      <Scoreboard />
      <Dice />
      <div className={styles.buttonContainer}>
        <Button
          className={styles.rollButton}
          text={isRollingDice ? 'Rolling...' : getRollText(currentRollNum)}
          onClick={() => rollDice()}
          disabled={isRollingDice || currentRollNum > 2}
        />
        <Button
          className={styles.playButton}
          text={'Play'}
          onClick={() => play(selectedSlot, selectedAvailableScore)}
          disabled={isRollingDice || !selectedSlot || selectedScore >= 0}
        />
      </div>
    </div>
  );
};

GameBoard.propTypes = {
  isRollingDice: bool,
  currentRollNum: number,
  selectedSlot: string,
  selectedScore: number,
  selectedAvailableScore: number,
  rollDice: func.isRequired,
  play: func.isRequired
};

export default GameBoard;
