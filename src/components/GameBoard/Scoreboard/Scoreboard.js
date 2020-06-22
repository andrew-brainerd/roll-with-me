import React from 'react';
import { object } from 'prop-types';
import styles from './Scoreboard.module.scss';

const Scoreboard = ({ player1, currentScores }) => {
  const {
    ones,
    twos,
    threes,
    fours,
    fives,
    sixes,
    kind3,
    kind4,
    fullHouse,
    smStraight,
    lgStraight,
    kind5,
    chance
  } = player1;

  const {
    ones: availableOnes,
    twos: availableTwos,
    threes: availableThrees,
    fours: availableFours,
    fives: availableFives,
    sixes: availableSixes,
    kind3: availableKind3,
    kind4: availableKind4,
    fullHouse: availableFullHouse,
    smStraight: availableSmStraight,
    lgStraight: availableLgStraight,
    kind5: availableKind5,
    chance: availableChance
  } = currentScores;

  return (
    <div className={styles.scoreboard}>
      <div className={styles.section}>
        <div className={styles.scoreLine}>
          <div className={styles.scoreLabel}>Ones</div>
          <div className={styles.scoreValue}>{ones}</div>
          <div className={styles.scoreAvailable}>{availableOnes}</div>
        </div>
        <div className={styles.scoreLine}>
          <div className={styles.scoreLabel}>Twos</div>
          <div className={styles.scoreValue}>{twos}</div>
          <div className={styles.scoreAvailable}>{availableTwos}</div>
        </div>
        <div className={styles.scoreLine}>
          <div className={styles.scoreLabel}>Threes</div>
          <div className={styles.scoreValue}>{threes}</div>
          <div className={styles.scoreAvailable}>{availableThrees}</div>
        </div>
        <div className={styles.scoreLine}>
          <div className={styles.scoreLabel}>Fours</div>
          <div className={styles.scoreValue}>{fours}</div>
          <div className={styles.scoreAvailable}>{availableFours}</div>
        </div>
        <div className={styles.scoreLine}>
          <div className={styles.scoreLabel}>Fives</div>
          <div className={styles.scoreValue}>{fives}</div>
          <div className={styles.scoreAvailable}>{availableFives}</div>
        </div>
        <div className={styles.scoreLine}>
          <div className={styles.scoreLabel}>Sixes</div>
          <div className={styles.scoreValue}>{sixes}</div>
          <div className={styles.scoreAvailable}>{availableSixes}</div>
        </div>
      </div>
      <div className={styles.section}>
        <div className={styles.scoreLine}>
          <div className={styles.scoreLabel}>3 of a Kind</div>
          <div className={styles.scoreValue}>{kind3}</div>
          <div className={styles.scoreAvailable}>{availableKind3}</div>
        </div>
        <div className={styles.scoreLine}>
          <div className={styles.scoreLabel}>4 of a Kind</div>
          <div className={styles.scoreValue}>{kind4}</div>
          <div className={styles.scoreAvailable}>{availableKind4}</div>
        </div>
        <div className={styles.scoreLine}>
          <div className={styles.scoreLabel}>Full House</div>
          <div className={styles.scoreValue}>{fullHouse}</div>
          <div className={styles.scoreAvailable}>{availableFullHouse}</div>
        </div>
        <div className={styles.scoreLine}>
          <div className={styles.scoreLabel}>SM Straight</div>
          <div className={styles.scoreValue}>{smStraight}</div>
          <div className={styles.scoreAvailable}>{availableSmStraight}</div>
        </div>
        <div className={styles.scoreLine}>
          <div className={styles.scoreLabel}>LG Straight</div>
          <div className={styles.scoreValue}>{lgStraight}</div>
          <div className={styles.scoreAvailable}>{availableLgStraight}</div>
        </div>
        <div className={styles.scoreLine}>
          <div className={styles.scoreLabel}>5 of a Kind</div>
          <div className={styles.scoreValue}>{kind5}</div>
          <div className={styles.scoreAvailable}>{availableKind5}</div>
        </div>
        <div className={styles.scoreLine}>
          <div className={styles.scoreLabel}>Chance</div>
          <div className={styles.scoreValue}>{chance}</div>
          <div className={styles.scoreAvailable}>{availableChance}</div>
        </div>
      </div>
    </div>
  );
};

Scoreboard.propTypes = {
  player1: object,
  currentScores: object
};

export default Scoreboard;
