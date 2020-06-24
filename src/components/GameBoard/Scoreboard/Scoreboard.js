import React, { useState } from 'react';
import { object } from 'prop-types';
import styles from './Scoreboard.module.scss';
import {
  ONES,
  TWOS,
  THREES,
  FOURS,
  FIVES,
  SIXES,
  KIND3,
  KIND4,
  FULL_HOUSE,
  SM_STRAIGHT,
  LG_STRAIGHT,
  KIND5,
  CHANCE
} from '../../../constants/game';

const Scoreboard = ({ player1, currentScores }) => {
  const [selectedScore, setSelectedScore] = useState({ slot: '' });

  const {
    [ONES]: ones,
    [TWOS]: twos,
    [THREES]: threes,
    [FOURS]: fours,
    [FIVES]: fives,
    [SIXES]: sixes,
    [KIND3]: kind3,
    [KIND4]: kind4,
    [FULL_HOUSE]: fullHouse,
    [SM_STRAIGHT]: smStraight,
    [LG_STRAIGHT]: lgStraight,
    [KIND5]: kind5,
    [CHANCE]: chance
  } = player1;

  const {
    [ONES]: availableOnes,
    [TWOS]: availableTwos,
    [THREES]: availableThrees,
    [FOURS]: availableFours,
    [FIVES]: availableFives,
    [SIXES]: availableSixes,
    [KIND3]: availableKind3,
    [KIND4]: availableKind4,
    [FULL_HOUSE]: availableFullHouse,
    [SM_STRAIGHT]: availableSmStraight,
    [LG_STRAIGHT]: availableLgStraight,
    [KIND5]: availableKind5,
    [CHANCE]: availableChance
  } = currentScores;

  console.log(selectedScore);

  return (
    <div className={styles.scoreboard}>
      <div className={styles.section}>
        <div className={styles.scoreLine} onClick={() => setSelectedScore({ slot: ONES, score: availableOnes })}>
          <div className={styles.scoreLabel}>Ones</div>
          <div className={styles.scoreValue}>{ones}</div>
          <div
            className={[
              styles.scoreAvailable,
              selectedScore.slot === ONES ? styles.selected : ''
            ].join(' ')}
          >
            {availableOnes}
          </div>
        </div>
        <div className={styles.scoreLine} onClick={() => setSelectedScore({ slot: TWOS, score: availableTwos })}>
          <div className={styles.scoreLabel}>Twos</div>
          <div className={styles.scoreValue}>{twos}</div>
          <div className={styles.scoreAvailable}>{availableTwos}</div>
        </div>
        <div className={styles.scoreLine} onClick={() => setSelectedScore({ slot: THREES, score: availableThrees })}>
          <div className={styles.scoreLabel}>Threes</div>
          <div className={styles.scoreValue}>{threes}</div>
          <div className={styles.scoreAvailable}>{availableThrees}</div>
        </div>
        <div className={styles.scoreLine} onClick={() => setSelectedScore({ slot: FOURS, score: availableFours })}>
          <div className={styles.scoreLabel}>Fours</div>
          <div className={styles.scoreValue}>{fours}</div>
          <div className={styles.scoreAvailable}>{availableFours}</div>
        </div>
        <div className={styles.scoreLine} onClick={() => setSelectedScore({ slot: FIVES, score: availableFives })}>
          <div className={styles.scoreLabel}>Fives</div>
          <div className={styles.scoreValue}>{fives}</div>
          <div className={styles.scoreAvailable}>{availableFives}</div>
        </div>
        <div className={styles.scoreLine} onClick={() => setSelectedScore({ slot: SIXES, score: availableSixes })}>
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
