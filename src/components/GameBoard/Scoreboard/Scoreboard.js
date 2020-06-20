import React from 'react';
import styles from './Scoreboard.module.scss';

const Scoreboard = () => {
  return (
    <div className={styles.scoreboard}>
      <div className={styles.section}>
        <div className={styles.scoreLine}>
          <div className={styles.scoreLabel}>Ones</div>
          <div className={styles.scoreValue}>0</div>
          <div className={styles.scoreAvailable}>0</div>
        </div>
        <div className={styles.scoreLine}>
          <div className={styles.scoreLabel}>Twos</div>
          <div className={styles.scoreValue}>0</div>
          <div className={styles.scoreAvailable}>0</div>
        </div>
        <div className={styles.scoreLine}>
          <div className={styles.scoreLabel}>Threes</div>
          <div className={styles.scoreValue}>0</div>
          <div className={styles.scoreAvailable}>0</div>
        </div>
        <div className={styles.scoreLine}>
          <div className={styles.scoreLabel}>Fours</div>
          <div className={styles.scoreValue}>0</div>
          <div className={styles.scoreAvailable}>0</div>
        </div>
        <div className={styles.scoreLine}>
          <div className={styles.scoreLabel}>Fives</div>
          <div className={styles.scoreValue}>0</div>
          <div className={styles.scoreAvailable}>0</div>
        </div>
        <div className={styles.scoreLine}>
          <div className={styles.scoreLabel}>Sixes</div>
          <div className={styles.scoreValue}>0</div>
          <div className={styles.scoreAvailable}>0</div>
        </div>
      </div>
      <div className={styles.section}>
        <div className={styles.scoreLine}>
          <div className={styles.scoreLabel}>3 of a Kind</div>
          <div className={styles.scoreValue}>0</div>
          <div className={styles.scoreAvailable}>0</div>
        </div>
        <div className={styles.scoreLine}>
          <div className={styles.scoreLabel}>4 of a Kind</div>
          <div className={styles.scoreValue}>0</div>
          <div className={styles.scoreAvailable}>0</div>
        </div>
        <div className={styles.scoreLine}>
          <div className={styles.scoreLabel}>Full House</div>
          <div className={styles.scoreValue}>0</div>
          <div className={styles.scoreAvailable}>0</div>
        </div>
        <div className={styles.scoreLine}>
          <div className={styles.scoreLabel}>SM Straight</div>
          <div className={styles.scoreValue}>0</div>
          <div className={styles.scoreAvailable}>0</div>
        </div>
        <div className={styles.scoreLine}>
          <div className={styles.scoreLabel}>LG Straight</div>
          <div className={styles.scoreValue}>0</div>
          <div className={styles.scoreAvailable}>0</div>
        </div>
        <div className={styles.scoreLine}>
          <div className={styles.scoreLabel}>5 of a Kind</div>
          <div className={styles.scoreValue}>0</div>
          <div className={styles.scoreAvailable}>0</div>
        </div>
        <div className={styles.scoreLine}>
          <div className={styles.scoreLabel}>Chance</div>
          <div className={styles.scoreValue}>0</div>
          <div className={styles.scoreAvailable}>0</div>
        </div>
      </div>
    </div>
  );
};

Scoreboard.propTypes = {

};

export default Scoreboard;
