import React from 'react';
import { arrayOf, number } from 'prop-types';
import styles from './Dice.module.scss';

const Dice = ({ currentRoll }) => {
  return (
    <div className={styles.diceContainer}>
      {currentRoll.map((die, d) => (
        <div key={d} className={styles.die}>
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
