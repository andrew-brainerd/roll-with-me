import React from 'react';
import { arrayOf, number, func } from 'prop-types';
import styles from './Dice.module.scss';

const Dice = ({ currentRoll, lockedDice, lockDie, unlockDie }) => {
  const getIsLocked = die => lockedDice.includes(die);

  return (
    <div className={styles.diceContainer}>
      {currentRoll.map((die, d) => (
        <div
          key={d}
          className={[
            styles.die,
            getIsLocked(d) ? styles.locked : ''
          ].join(' ')}
          onClick={() => getIsLocked(d) ? unlockDie(d) : lockDie(d)}
        >
          {die}
        </div>
      ))}
    </div>
  );
};

Dice.propTypes = {
  currentRoll: arrayOf(number),
  lockedDice: arrayOf(number),
  lockDie: func.isRequired,
  unlockDie: func.isRequired
};

export default Dice;
