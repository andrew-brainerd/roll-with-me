import React, { useState } from 'react';
import { arrayOf, number } from 'prop-types';
import styles from './Dice.module.scss';

const Dice = ({ currentRoll }) => {
  const [lockedDice, setLockedDice] = useState([]);

  const getIsLocked = die => lockedDice.includes(die);
  const lockDie = die => setLockedDice([...lockedDice, die]);
  const unlockDie = die => setLockedDice(lockedDice.filter(d => d !== die));

  console.log('Locked: ', lockedDice);

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
  currentRoll: arrayOf(number)
};

export default Dice;
