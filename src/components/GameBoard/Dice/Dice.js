import React from 'react';
import { arrayOf, number, func } from 'prop-types';
import styles from './Dice.module.scss';
import Button from '../../common/Button/Button';

const Dice = ({ currentRoll, currentRollNum, lockedDice, lockDie, unlockDie }) => {
  const getIsLocked = die => lockedDice.includes(die);

  console.log(currentRollNum);

  return (
    <div className={styles.diceContainer}>
      {currentRoll.map((die, d) => (
        <Button
          key={d}
          className={[
            styles.die,
            getIsLocked(d) ? styles.locked : ''
          ].join(' ')}
          text={die}
          onClick={() => getIsLocked(d) ? unlockDie(d) : lockDie(d)}
          disabled={currentRollNum === 0}
        />
      ))}
    </div>
  );
};

Dice.propTypes = {
  currentRoll: arrayOf(number),
  currentRollNum: number,
  lockedDice: arrayOf(number),
  lockDie: func.isRequired,
  unlockDie: func.isRequired
};

export default Dice;
